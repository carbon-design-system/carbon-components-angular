import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	TemplateRef,
	OnInit
} from "@angular/core";
import { DropdownTree } from "./tree.component";
import { focusNextTree, focusNextElem, focusPrevElem } from "./../../common/a11y.service";


/**
 * @export
 * @class TreeItem
 * @implements {OnInit}
 */
@Component({
	selector: "n-tree-item",
	template: `
		<span
			(click)="doClick(listItem)"
			(keydown)="onKeyDown($event, listItem)"
			role="option"
			tabindex="{{listItem.disabled ? -1 : 0}}">
			{{listItem.content}}
		</span>
		<n-tree-wrapper
			*ngIf="!!listItem.items"
			[isOpen]="listItem.selected"
			[items]="listItem.items"
			(select)="bubbleSelect($event)"
			[listTpl]="listTpl"
			[parent]="parent"
			[selectedIcon]="selectedIcon"
			[rootElem]="rootElem"
			[indent]="indent+1"
			[role]="'group'"
			[label]="listItem"
			[outerPadding]="outerPadding"
			[iconWidth]="iconWidth"
			[size]="size"
			[innerPadding]="innerPadding">
		</n-tree-wrapper>
	`
})
export class TreeItem implements OnInit {
	public parent;
	/**
	 * Set to `true` if there is a custom template for the `TreeItem`.
	 * @memberof TreeItem
	 */
	public isTpl = false;

	/**
	 * Set to `true` if this item is a non-leaf item and contains subitems.
	 * @memberof TreeItem
	 */
	@Input() hasSubMenu = false;
	@Input() parentRef = null;
	/**
	 * The list item containing optional sub items, states and properties.
	 * @memberof TreeItem
	 */
	@Input() listItem;
	/**
	 * Optional template for the rendering of the `TreeItem`.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof TreeItem
	 */
	@Input() listTpl: string | TemplateRef<any> = "";
	/**
	 * Reflects which level the item is at (how many items it is within) so that rendering with indentation can be calculated.
	 * @memberof TreeItem
	 */
	@Input() indent = 0;
	/**
	 * Holds the parent element to the `TreeItem` within the DOM.
	 * @memberof TreeItem
	 */
	@Input() rootElem = null;
	@Input() selectedIcon = true;
	/**
	 * Set to `true` if item has subitems (and is therefore not a leaf level item).
	 * @type {boolean}
	 * @memberof TreeItem
	 */
	@Input() isBase = false;
	/**
	 * Accounts for padding from the left side to the content.
	 * @memberof TreeItem
	 */
	@Input() outerPadding = 10;
	/**
	 * Sizing of the arrow glyphicon that represents the expansion/collapsing of a parent catagory.
	 * @memberof TreeItem
	 */
	@Input() iconWidth = 16;
	/**
	 * The padding between icon and content.
	 * @memberof TreeItem
	 */
	@Input() innerPadding = 10;
	/**
	 * Size to render the `TreeItem` within the view.
	 * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
	 * @type {("sm" | "md" |"default" | "lg")}
	 * @memberof TreeItem
	 */
	@Input() size: "sm" | "md" |"default" | "lg" = "md";
	/**
	 * Value 'select' to be emitted after a new `TreeItem` is selected.
	 * @type {EventEmitter<Object>}
	 * @memberof TreeItem
	 */
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	/**
	 * Creates an instance of `TreeItem`.
	 * @param {ElementRef} _elementRef
	 * @memberof TreeItem
	 */
	constructor(public _elementRef: ElementRef) {}

	/**
	 * Retrieves parent element references and custom template (if one exists).
	 * @memberof TreeItem
	 */
	ngOnInit() {
		this.parent = this._elementRef.nativeElement;

		if (!this.rootElem) {
			this.rootElem = this._elementRef.nativeElement.parentNode;
		}

		this.isTpl = this.listTpl instanceof TemplateRef;
	}

	/**
	 * Calculates the indentation for the `TreeItem` which overall creates a visual indication of the hierachies of the items in the view.
	 * @returns the indentation for the `TreeItem`.
	 * @memberof TreeItem
	 */
	calculateIndent() {
		if (this.isBase) {
			// same calc, we just drop the icon width from the last item
			return ((this.outerPadding + this.iconWidth + this.innerPadding)
				+ ((this.iconWidth + this.innerPadding) * this.indent)) - this.iconWidth;
		}
		// we add innerPadding twice to account for the padding from the previous level
		return (this.outerPadding + this.iconWidth + this.innerPadding)
			+ ((this.iconWidth + this.innerPadding) * this.indent);
	}

	/**
	 * Bubbling (or raising) the select event up to parent classes.
	 * @param {any} evt
	 * @memberof TreeItem
	 */
	bubbleSelect(evt) {
		this.select.emit(evt);
	}

	/**
	 * Selects the `TreeItem` by emitting the selected item to other classes.
	 * @param {any} item
	 * @memberof TreeItem
	 */
	doClick(item) {
		this.select.emit({item});
	}

	/**
	 * Controls keyboard navigation and selection for the `TreeItem`.
	 * @param {any} ev
	 * @param {any} item
	 * @memberof TreeItem
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
		} else if (ev.key === "Enter"
			|| ev.key === " "
			|| ev.key === "ArrowRight"
			|| ev.key === "ArrowLeft") {
			ev.preventDefault();
			this.select.emit({item});
		}
	}
}
