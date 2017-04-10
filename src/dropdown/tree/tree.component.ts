import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef
} from "@angular/core";
import { AbstractDropdownView } from "./../AbstractDropdownView.class";
import { TreeItem } from "./tree-item.component";

@Component({
	selector: "cdl-dropdown-tree",
	template: `
		<ul class="tree-view"
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
	@Input() items: Array<Object> = [];
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

	getNextItem(): Object {
		return;
	}

	getNextElement(): HTMLElement {
		return;
	}

	getPrevItem(): Object {
		return;
	}

	getPrevElement(): HTMLElement {
		return;
	}

	getSelected() {
		return;
	}

	onClick(evt) {
		let item = evt.item;

		if (!item.disabled) {
			if (item.items) {
				item.selected = !item.selected;
			} else {
				this.select.emit({item});
			}
		}
	}
}
