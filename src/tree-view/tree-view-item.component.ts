import {
	Component,
	Input,
	Output,
	OnInit,
	OnChanges,
	EventEmitter,
	ElementRef,
	TemplateRef,
	HostBinding,
	SimpleChanges,
	HostListener
} from "@angular/core";
import { ListItem } from "./../dropdown/list-item.interface";
import { focusNextTree, focusNextElem, focusPrevElem, findNextElem } from "../common/a11y.service";


/**
 * `TreeViewItem` leverages the `list-item.interface` within `./../dropdown` to define the items listed in a the `TreeView` data structure.
 *
 * @export
 * @class TreeViewItem
 * @implements {OnInit}
 */
@Component({
	selector: "n-tree-view-item",
	template: `
	<ng-container *ngIf="!listTpl">{{listItem.content}}</ng-container>
	<ng-template
		*ngIf="isTpl"
		[ngTemplateOutletContext]="{item: listItem}"
		[ngTemplateOutlet]="listTpl">
	</ng-template>
	`
})
export class TreeViewItem implements OnInit, OnChanges {
	public parent;
	/**
	 * Set to `true` if there is a custom template for the `TreeViewItem`.
	 * @type {boolean}
	 * @memberof TreeViewItem
	 */
	public isTpl = false;

	/**
	 * Set to `true` if this item is a non-leaf item and contains subitems.
	 * @type {boolean}
	 * @memberof TreeViewItem
	 */
	@Input() hasSubMenu = false;
	@Input() parentRef = null;
	/**
	 * The list item containing optional submenu items, states and properties.
	 * @memberof TreeViewItem
	 */
	@Input() listItem;
	/**
	 * Optional template for the rendering of the `TreeViewItem`.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof TreeViewItem
	 */
	@Input() listTpl: string | TemplateRef<any> = "";
	/**
	 * Used to calculate the indentation of list items and subitems in order to show their hierarchy.
	 * @type {number}
	 * @memberof TreeViewItem
	 */
	@Input() indent = 0;
	/**
	 * Holds the parent element to the `TreeViewItem` within the DOM.
	 * @memberof TreeViewItem
	 */
	@Input() rootElem = null;
	/**
	 * Set to `true` if this item is selected.
	 * @type {boolean}
	 * @memberof TreeViewItem
	 */
	@Input() selected = false;
	/**
	 * Set to `true` if item has subitems (and is therefore not a leaf level item).
	 * @type {boolean}
	 * @memberof TreeViewItem
	 */
	@Input() isBase = false;
	/**
	 * Left padding between icon and content (list item heading).
	 * @memberof TreeViewItem
	 */
	@Input() outerPadding = 20;
	/**
	 * Sizing of the arrow glyphicon that represents the expansion/collapsing of a parent catagory.
	 * @type {number}
	 * @memberof TreeViewItem
	 */
	@Input() iconWidth = 16;
	/**
	 * Padding between icon and content (list item heading).
	 * @type {number}
	 * @memberof TreeViewItem
	 */
	@Input() innerPadding = 5;
	/**
	 * Emits event that handles the selection of a `TreeViewItem`.
	 * @type {EventEmitter<Object>}
	 * @memberof TreeViewItem
	 */
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	@HostBinding("attr.tabindex") tabIndex;
	@HostBinding("class.has-items") hasItems: boolean;
	@HostBinding("class.opened") isOpened: boolean;
	@HostBinding("class.disabled") isDisabled: boolean;
	@HostBinding("class.tree-view_label") treeView = true;
	@HostBinding("style.margin-left.px") marginLeft;

	/**
	 * Creates an instance of TreeViewItem.
	 * @param {ElementRef} elementRef
	 * @memberof TreeViewItem
	 */
	constructor(public elementRef: ElementRef) {}

	/**
	 * Stores references to the DOM elements and checks for a custom template.
	 * @memberof TreeViewItem
	 */
	ngOnInit() {
		this.parent = this.elementRef.nativeElement;

		if (!this.rootElem) {
			this.rootElem = this.elementRef.nativeElement.parentNode;
		}

		this.isTpl = this.listTpl instanceof TemplateRef;
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.tabIndex = this.listItem.disabled ? -1 : 0;
		this.marginLeft = this.calculateIndent();

		this.hasItems = !!this.listItem.items;
		this.isOpened = !!this.listItem.opened;
		this.isDisabled = !!this.listItem.disabled;
	}

	/**
	 * Calculates the indent spacing of the list item based on its hierarchical level in the list.
	 * @returns {number} the left indent spacing of the list item
	 * @memberof TreeViewItem
	 */
	calculateIndent() {
		if (this.isBase) {
			// same calc, we just drop the icon width from the last item
			return (this.outerPadding + this.iconWidth + this.innerPadding)
					+ ((this.innerPadding + this.iconWidth + this.innerPadding) * this.indent) - this.iconWidth;
		}
		// we add innerPadding twice to account for the padding from the previous level
		return (this.outerPadding + this.iconWidth + this.innerPadding)
					+ ((this.innerPadding + this.iconWidth + this.innerPadding) * this.indent);
	}

	/**
	 * Emits the event of a mouse click event on an item.
	 * @param {any} ev
	 * @memberof TreeViewItem
	 */
	@HostListener("click", ["$event"]) onClick = (ev) => {
		this.select.emit(this.listItem);
	}

	/**
	 * Manages the keyboard accessiblity for selection of a `TreeView` list item.
	 * @param {any} ev
	 * @memberof TreeViewItem
	 */
	@HostListener("keydown", ["$event"]) onKeydown = (ev) => {
		// checks for existance, and either calls cb with the object, or returns false
		let exists = (obj: any, cb: Function) => {
			if (obj === undefined || obj === null) {
				return null;
			}
			return cb(obj);
		};
		if (ev.key === "Enter"
			|| ev.key === " "
			|| ev.key === "ArrowRight"
			|| ev.key === "ArrowLeft") {
			ev.preventDefault();
			this.select.emit(this.listItem);
		}
	}
}
