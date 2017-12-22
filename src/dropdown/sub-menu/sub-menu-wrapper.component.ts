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


/**
 * selector: `n-sub-menu-wrapper`
 *
 * @export
 * @class SubMenuWrapper
 */
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
				[attr.aria-expanded]="(!!item.items ? item.selected : null)"
				[attr.aria-selected]="(item.selected && !item.items) ? true : null">
				<n-sub-menu-item
					[listTpl]="listTpl"
					[level]="level + 1"
					[listItem]="item"
					[hasSubMenu]="!!item.items"
					[parentRef]="parent"
					[rootElem]="rootElem"
					(select)="bubbleSelect($event)">
				</n-sub-menu-item>
			</li>
		</ul>
	`
})
export class SubMenuWrapper {
	/**
	 * The items to be displayed in the list within the `SubMenuWrapper`.
	 * @type {Array<ListItem>}
	 * @memberof SubMenuWrapper
	 */
	@Input() items: Array<ListItem> = [];
	/**
	 * Reflects which level the item is at (how many menus it is within).
	 * @type {number}
	 * @memberof SubMenuWrapper
	 */
	@Input() level = 1;
	/**
	 * Set to `true` if the submenu unordered list is hidden (collapsed with parent menu) in the view.
	 * @type {boolean}
	 * @memberof SubMenuWrapper
	 */
	@Input() isOpen = false;
	@Input() parent: any = null;
	/**
	 * Optional custom template for displaying the `SubMenuWrapper`.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof SubMenuWrapper
	 */
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() rootElem: any = null;
	/**
	 * The role of the unordered list element.
	 * @type {("tree" | "group")}
	 * @memberof SubMenuWrapper
	 */
	@Input() role: "tree" | "group" = "tree" ;
	/**
	 * Aria label for the unordered list in the submenu.
	 * @type {string}
	 * @memberof SubMenuWrapper
	 */
	@Input() label: string;
	/**
	 * Defines whether or not the `DropdownSubMenu` supports selecting multiple items as opposed to single
	 * item selection.
	 * @type {("single" | "multi")}
	 * @memberof SubMenuWrapper
	 */
	@Input() type: "single" | "multi" = "single";

	/**
	 * Emits event that handles the selection of a `SubMenuItem`.
	 * @type {EventEmitter<Object>}
	 * @memberof SubMenuWrapper
	 */
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();


	/**
	 * Bubbling the select event up to parent classes.
	 * @param {any} evt
	 * @memberof SubMenuWrapper
	 */
	bubbleSelect(evt) {
		this.select.emit(evt);
	}
}
