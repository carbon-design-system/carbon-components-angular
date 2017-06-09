import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef,
	ElementRef,
	AfterViewInit
} from "@angular/core";
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { ListItem } from "./../list-item.interface";
import { TreeItem } from "./tree-item.component";
import { watchFocusJump, treetools } from "./../dropdowntools";

@Component({
	selector: "cdl-dropdown-tree",
	template: `
		<cdl-tree-wrapper
			[items]="items"
			[listTpl]="listTpl"
			[selectedIcon]="selectedIcon"
			[label]="label"
			[role]="role"
			[outerPadding]="outerPadding"
			[iconWidth]="iconWidth"
			[innerPadding]="innerPadding"
			(select)="onClick($event)">
		</cdl-tree-wrapper>
	`,
	providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => DropdownTree)}]
})
export class DropdownTree implements AbstractDropdownView {
	@Input() items: Array<ListItem> = [];
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() selectedIcon = false;
	@Input() role: "tree" | "group" = "tree";
	@Input() label: string;
	@Input() elemSpacing = 40;
	@Input() type: "single" | "multi" = "single";

	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	public size: "sm" | "default" | "lg" = "default";
	public outerPadding = 10; // padding from left edge
	public iconWidth = 16;
	public innerPadding = 10; // padding between icon and content

	private listList: HTMLElement[];
	private flatList: Array<ListItem> = [];
	private index = -1;
	private focusJump;

	constructor(public _elementRef: ElementRef) {}

	ngOnInit() {
		if (this.size === "lg") {
			this.outerPadding = 20;
		}
		if (this.size === "sm") {
			this.iconWidth = 14;
		}
	}

	ngOnChanges(changes) {
		if (changes.items) {
			this.items = JSON.parse(JSON.stringify(changes.items.currentValue));
			this.flatList = [];
			this.flattenTree(this.items);
			this.index = this.flatList.findIndex(item => item.selected && !item.items);
			if (this._elementRef) {
				setTimeout(() => {
					this.listList = this._elementRef.nativeElement.querySelectorAll(".item-wrapper");
				}, 0);
			}
			this.setupFocusObservable();
		}
	}

	ngAfterViewInit() {
		this.listList = Array.from(this._elementRef.nativeElement.querySelectorAll(".item-wrapper")) as HTMLElement[];
		this.setupFocusObservable();
	}

	setupFocusObservable() {
		if (this.focusJump) {
			this.focusJump.unsubscribe();
		}
		this.focusJump = watchFocusJump(this._elementRef.nativeElement, this.listList)
			.subscribe(el => {
				let item = this.flatList[this.listList.indexOf(el)];
				treetools.find(this.items, item).path.forEach(i => {
					if (i !== item) { i.selected = true; }
				});
				// wait a tick...
				setTimeout(() => el.focus(), 0);
			});
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
			if (item.items) { item.selected = true; }
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

	getCurrentItem(): ListItem {
		if (this.index < 0) {
			return this.flatList[0];
		}
		return this.flatList[this.index];
	}

	getCurrentElement(): HTMLElement {
		if (this.index < 0) {
			return this.listList[0];
		}
		return this.listList[this.index];
	}

	getSelected(): ListItem[] {
		let selected = this.flatList.filter(item => item.selected && !item.items);
		if (selected.length === 0) {
			return null;
		}
		return selected;
	}

	propagateSelected(value: Array<ListItem>): void {
		for (let newItem of value) {
			// copy the item
			let tempNewItem: string | ListItem = Object.assign({}, newItem);
			// deleted selected because it's what we _want_ to change
			delete tempNewItem.selected;
			// stringify for compare
			tempNewItem = JSON.stringify(tempNewItem);
			for (let oldItem of this.flatList) {
				let tempOldItem: string | ListItem = Object.assign({}, oldItem);
				delete tempOldItem.selected;
				tempOldItem = JSON.stringify(tempOldItem);
				// do the compare
				if (tempOldItem.includes(tempNewItem)) {
					// oldItem = Object.assign(oldItem, newItem);
					oldItem.selected = newItem.selected;
				} else {
					oldItem.selected = false;
				}
			}
		}
	}

	// this and a few other functions are super common between
	// submenu and tree ... maybe we can dedupe?
	onClick({item}) {
		if (!item.disabled ) {
			item.selected = !item.selected;
			this.index = this.flatList.indexOf(item);
			if (this.type === "single") {
				let {path} = treetools.find(this.items, item);
				// reset the selection taking care not to touch our selected item
				for (let i = 0; i < this.flatList.length; i++) {
					if (path.indexOf(this.flatList[i]) !== -1 && this.flatList[i] !== item) {
						this.flatList[i].selected = true;
					} else if (this.flatList[i] !== item) {
						this.flatList[i].selected = false;
					}
				}
				if (!item.items) {
					this.select.emit({item});
				}
			} else {
				this.select.emit(this.getSelected());
			}
		}
	}
}
