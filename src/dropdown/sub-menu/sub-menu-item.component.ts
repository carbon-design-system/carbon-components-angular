import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	TemplateRef,
	OnInit
} from "@angular/core";
import { DropdownSubMenu } from "./sub-menu.component";
import { focusNextTree, focusNextElem, focusPrevElem } from "./../../common/a11y.service";


/**
 * class: DropdownSubMenu
 *
 * selector: `n-dropdown-sub-menu`
 *
 * source: `src/dropdown/sub-menu/sub-menu.component.ts`
 *
 * Ex:
 * ```html
 * <n-dropdown-sub-menu [items]="treeItems"></n-dropdown-sub-menu>
 * ```
 *
 * @export
 * @class SubMenuItem
 * @implements {OnInit}
 */
@Component({
	selector: "n-sub-menu-item",
	template: `
		<span
			(click)="doClick(listItem)"
			(keydown)="onKeyDown($event, listItem)"
			[class.active]="listItem.selected"
			role="option">
			{{listItem.content}}
		</span>
		<n-sub-menu-wrapper
			*ngIf="!!listItem.items"
			[isOpen]="listItem.selected"
			[level]="level"
			[items]="listItem.items"
			(select)="onClick($event)"
			[listTpl]="listTpl"
			[rootElem]="rootElem"
			[role]="'group'"
			[parent]="parent">
		</n-sub-menu-wrapper>
	`
})
export class SubMenuItem implements OnInit {
	public parent;
	/**
	 * Set to `true` if there is a custom template for the `SubMenuItem`.
	 * @type {boolean}
	 * @memberof SubMenuItem
	 */
	public isTpl = false;

	/**
	 * Set to `true` if this item is a non-leaf item and contains subitems.
	 * @memberof SubMenuItem
	 */
	@Input() hasSubMenu = false;
	/**
	 * Reflects which level the item is at (how many menus it is within).
	 * @type {number}
	 * @memberof SubMenuItem
	 */
	@Input() level = 1;
	@Input() parentRef = null;
	/**
	 * The list item containing optional submenu items, states and properties.
	 * @type {*}
	 * @memberof SubMenuItem
	 */
	@Input() listItem: any;
	/**
	 * Optional template for the rendering of the `SubMenuItem`.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof SubMenuItem
	 */
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() rootElem = null;

	/**
	 * Emits event that handles the selection of a `SubMenuItem`.
	 * @type {EventEmitter<Object>}
	 * @memberof SubMenuItem
	 */
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	/**
	 * Creates an instance of `SubMenuItem`.
	 * @param {ElementRef} _elementRef
	 * @memberof SubMenuItem
	 */
	constructor(public _elementRef: ElementRef) {}

	/**
	 * Stores references to the DOM elements and checks for a custom template.
	 * @memberof SubMenuItem
	 */
	ngOnInit() {
		this.parent = this._elementRef.nativeElement;

		if (!this.rootElem) {
			this.rootElem = this._elementRef.nativeElement.parentNode;
		}

		this.isTpl = this.listTpl instanceof TemplateRef;
	}

	/**
	 * Emits the event of a mouse click event on an leaf item that is within a submenu.
	 * @param {any} evt
	 * @memberof SubMenuItem
	 */
	onClick(evt) {
		let item = evt.item;
		this.select.emit({item});
	}

	/**
	 * Emits the event of a mouse click event on an non-leaf item (item that has a submenu).
	 * @param {any} item
	 * @memberof SubMenuItem
	 */
	doClick(item) {
		this.select.emit({item});
	}

	/**
	 * Manages the keyboard accessiblity for selection and navigation of a within the dropdown list.
	 * @param {any} ev
	 * @param {any} item
	 * @memberof SubMenuItem
	 */
	onKeyDown(ev, item) {
		if (ev.key === "ArrowUp") {
			ev.preventDefault();

			focusPrevElem(this._elementRef.nativeElement.parentNode, this.parentRef);
		} else if (ev.key === "ArrowDown") {
			ev.preventDefault();

			if (!item.items || !item.selected) {
				focusNextElem(this._elementRef.nativeElement.parentNode, this.rootElem);
			} else if (item.items && item.selected) {
				focusNextTree(this._elementRef.nativeElement.querySelector("ul li"), this.rootElem);
			}
		} else if (ev.key === "Enter" || ev.key === " "
					|| ev.key === "ArrowRight" || ev.key === "ArrowLeft") {
			ev.preventDefault();

			this.select.emit({item});
		}
	}
}
