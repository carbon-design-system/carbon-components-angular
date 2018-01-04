import {
	Component,
	Input,
	Output,
	OnInit,
	EventEmitter,
	ElementRef,
	TemplateRef,
	ViewChild
} from "@angular/core";
import { ListItem } from "./../dropdown/list-item.interface";
import { focusNextTree, focusNextElem, focusPrevElem, findNextElem } from "../common/a11y.service";


/**
 * class: TreeViewItem
 *
 * `TreeViewItem` leverages the `list-item.interface` within `./../dropdown` to define the items listed in a the `TreeView` data structure.
 *
 * selector: `n-tree-view-item`
 * source: `src/tree-view/tree-view-item.component.ts`
 * @export
 * @class TreeViewItem
 * @implements {OnInit}
 */
@Component({
	selector: "n-tree-view-item",
	template: `
	<span
	class="tree-view_label"
	[style.margin-left.px]="calculateIndent()"
	tabindex="{{listItem.disabled?-1:0}}"
	[ngClass]="{
		opened: listItem.opened,
		disabled: listItem.disabled,
		'has-items': listItem.items
	}"
	(click)="doClick($event, listItem)"
	(keydown)="onKeyDown($event, listItem)">
		<ng-container *ngIf="!listTpl">{{listItem.content}}</ng-container>
		<ng-template
			*ngIf="isTpl"
			[ngTemplateOutletContext]="{item: listItem}"
			[ngTemplateOutlet]="listTpl">
		</ng-template>
	</span>
	<n-tree-view-wrapper
		*ngIf="listItem.items && listItem.opened"
		[isOpen]="listItem.opened"
		[items]="listItem.items"
		[listTpl]="listTpl"
		[parent]="parent"
		[rootElem]="rootElem"
		[indent]="indent+1"
		[role]="'group'"
		[outerPadding]="outerPadding"
		[iconWidth]="iconWidth"
		[innerPadding]="innerPadding"
		[label]="listItem"
		(select)="bubble($event)">
	</n-tree-view-wrapper>
	`
})
export class TreeViewItem implements OnInit {
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

	/**
	 * Creates an instance of TreeViewItem.
	 * @param {ElementRef} _elementRef
	 * @memberof TreeViewItem
	 */
	constructor(public _elementRef: ElementRef) {}

	/**
	 * Stores references to the DOM elements and checks for a custom template.
	 * @memberof TreeViewItem
	 */
	ngOnInit() {
		this.parent = this._elementRef.nativeElement;

		if (!this.rootElem) {
			this.rootElem = this._elementRef.nativeElement.parentNode;
		}

		this.isTpl = this.listTpl instanceof TemplateRef;
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
	 * Bubbling the select event up to parent classes.
	 * @param {any} ev
	 * @memberof TreeViewItem
	 */
	bubble(ev) {
		this.select.emit(ev);
	}

	/**
	 * Emits the event of a mouse click event on an item.
	 * @param {any} ev
	 * @param {any} item
	 * @memberof TreeViewItem
	 */
	doClick(ev, item) {
		this.select.emit({item});
	}

	/**
	 * Manages the keyboard accessiblity for selection of a `TreeView` list item.
	 * @param {any} ev
	 * @param {any} item
	 * @memberof TreeViewItem
	 */
	onKeyDown(ev, item) {
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
			this.select.emit({item});
		}
	}
}
