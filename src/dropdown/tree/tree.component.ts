import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef,
	ElementRef,
	ViewChild,
	AfterViewInit
} from "@angular/core";
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { ListItem } from "./../list-item.interface";
import { TreeItem } from "./tree-item.component";

@Component({
	selector: "cdl-dropdown-tree",
	template: `
		<ul #list class="tree"
			[class.open]="isOpen"
			[attr.role]="role"
			[attr.aria-hidden]="(role == 'group') ? !isOpen : null "
			[attr.aria-label]="label">
			<li *ngFor="let item of items">
				<cdl-tree-item
					[listTpl]="listTpl"
					[listItem]="item"
					[hasSubMenu]="!!item.items"
					[parentRef]="parent"
					[rootElem]="rootElem"
					[selectedIcon]="selectedIcon"
					(select)="onClick($event)"
					[indent]="indent"
					[indentStart]="indentStart"
					[elemSpacing]="elemSpacing">
				</cdl-tree-item>
			</li>
		</ul>
	`,
	providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => DropdownTree)}]
})
export class DropdownTree implements AbstractDropdownView {
	@Input() items: Array<ListItem> = [];
	@Input() isOpen = false;
	@Input() parent: any = null;
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() indent = 1;
	@Input() indentStart = 0;
	@Input() rootElem: any = null;
	@Input() selectedIcon = true;
	@Input() role: "tree" | "group" = "tree" ;
	@Input() label: string;
	@Input() elemSpacing = 40;

	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	@ViewChild("list") list: ElementRef;
	public type: "single" | "multi" = "single";

	private listList: HTMLElement[];
	private flatList: Array<ListItem> = [];
	private index = -1;

	ngOnChanges(changes) {
		if (changes.items) {
			this.items = changes.items.currentValue.map(item => Object.assign({}, item));
		}
	}

	ngAfterViewInit() {
		this.listList = this.list.nativeElement.querySelectorAll(".item-wrapper");
		this.flattenTree(this.items);
		this.index = this.flatList.findIndex(item => item.selected && !item.items);
	}

	flattenTree(items) {
		for (let item of items) {
			this.flatList.push(item);
			if (item.items) {
				this.flattenTree(item.items);
			}
		}
	}

	getNextItem(): ListItem {
		if (this.index < this.flatList.length - 1) {
			this.index++;
		}
		let item = this.flatList[this.index];
		return item;
	}

	getNextElement(): HTMLElement {
		if (this.index < this.flatList.length - 1) {
			this.index++;
		} else {
			return null;
		}
		let elem = this.listList[this.index];
		let item = this.flatList[this.index];
		if (item.disabled || item.items) {
			return this.getNextElement();
		}
		return elem;
	}

	getPrevItem(): ListItem {
		if (this.index > 0) {
			this.index--;
		}
		let item = this.flatList[this.index];
		return item;
	}

	getPrevElement(): HTMLElement {
		if (this.index > 0) {
			this.index--;
		} else {
			return null;
		}
		let elem = this.listList[this.index];
		let item = this.flatList[this.index];
		if (item.disabled || item.items) {
			return this.getPrevElement();
		}
		return elem;
	}

	getSelected(): ListItem[] {
		let selected = this.flatList.filter(item => item.selected && !item.items);
		if (selected.length === 0) {
			return null;
		}
		return selected;
	}

	onClick(evt) {
		let item = evt.item;
		this.index = this.flatList.indexOf(item);
		if (!item.disabled) {
			if (item.items) {
				item.selected = !item.selected;
			} else {
				this.select.emit({item});
			}
		}
	}
}
