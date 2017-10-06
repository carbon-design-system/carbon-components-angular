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
import { SubMenuItem } from "./sub-menu-item.component";

@Component({
	selector: "n-sub-menu-wrapper",
	template: `
		<ul
			[ngClass]="{
				'menu_flyout': level === 1,
				'dropdown_menu': level > 1
			}"
			[attr.role]="role"
			[attr.aria-hidden]="(role == 'group') ? !isOpen : null "
			[attr.aria-label]="label">
			<li
				*ngFor="let item of items; index as i"
				role="treeitem"
				[attr.aria-level]="level"
				[attr.aria-posinset]="i"
				[attr.aria-setsize]="3"
				[attr.aria-expanded]="!!item.items?item.selected:null"
				[attr.aria-selected]="(item.selected && !item.items)?true:null">
				<n-sub-menu-item
					[listTpl]="listTpl"
					[level]="level + 1"
					[listItem]="item"
					[hasSubMenu]="!!item.items"
					[parentRef]="parent"
					[selectedIcon]="selectedIcon"
					[rootElem]="rootElem"
					(select)="bubbleSelect($event)">
				</n-sub-menu-item>
			</li>
		</ul>
	`
})
export class SubMenuWrapper {
	@Input() items: Array<ListItem> = [];
	@Input() level = 1;
	@Input() isOpen = false;
	@Input() parent: any = null;
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() rootElem: any = null;
	@Input() role: "tree" | "group" = "tree" ;
	@Input() label: string;
	@Input() selectedIcon = true;
	@Input() type: "single" | "multi" = "single";

	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();


	bubbleSelect(evt) {
		this.select.emit(evt);
	}
}
