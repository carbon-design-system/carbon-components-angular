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


/**
 * @export
 * @class TreeWrapper
 */
@Component({
	selector: "n-tree-wrapper",
	template: `
		<ul
			[ngClass]="{
				'menu_tree--sm': size === 'sm',
				'menu_tree': size === 'md',
				'menu_tree--lg': size === 'lg'
			}"
			[attr.role]="role"
			[attr.aria-hidden]="((role == 'group') ? !isOpen : null)"
			[attr.aria-label]="label">
			<li
				*ngFor="let item of items; index as i"
				class="treeitem"
				role="treeitem"
				[attr.aria-level]="indent + 1"
				[attr.aria-posinset]="i"
				[attr.aria-setsize]="3"
				[attr.aria-expanded]="isExpanded(item)"
				[attr.aria-selected]="isSelected(item)"
				[style.text-indent.px]="calculateIndent()">
				<n-tree-item
					[listTpl]="listTpl"
					[listItem]="item"
					[hasSubMenu]="!!item.items"
					[parentRef]="parent"
					[rootElem]="rootElem"
					[selectedIcon]="selectedIcon"
					[indent]="indent"
					[isBase]="isBase(items)"
					[outerPadding]="outerPadding"
					[iconWidth]="iconWidth"
					[innerPadding]="innerPadding"
					[size]="size"
					(select)="bubbleSelect($event)">
				</n-tree-item>
			</li>
		</ul>
	`
})
export class TreeWrapper {
	/**
	 * The items to be displayed in the list within the `TreeWrapper`.
	 * @type {Array<ListItem>}
	 * @memberof TreeWrapper
	 */
	@Input() items: Array<ListItem> = [];
	/**
	 * Set to `true` if the unordered list is hidden (collapsed with parent catagory) in the view.
	 * @type {boolean}
	 * @memberof TreeWrapper
	 */
	@Input() isOpen = false;
	@Input() parent: any = null;
	/**
	 * Optional custom template for displaying the `TreeWrapper`.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof TreeWrapper
	 */
	@Input() listTpl: string | TemplateRef<any> = "";
	/**
	 * Used to calculate the indent spacing of the list item based on its hierarchical level in the list.
	 * @type {number}
	 * @memberof TreeWrapper
	 */
	@Input() indent = 0;
	@Input() rootElem: any = null;
	@Input() selectedIcon = true;
	/**
	 * The role of the unordered list element.
	 * @type {("tree" | "group")}
	 * @memberof TreeWrapper
	 */
	@Input() role: "tree" | "group" = "tree" ;
	/**
	 * The aria-label for the DOM unordered list element.
	 * @type {string}
	 * @memberof TreeWrapper
	 */
	@Input() label: string;
	/**
	 * Left padding between the edge and the icon (for parent catagory).
	 * @memberof TreeWrapper
	 */
	@Input() outerPadding = 20;
	/**
	 * Sizing of the arrow glyphicon that represents the expansion/collapsing of a parent catagory.
	 * @memberof TreeWrapper
	 */
	@Input() iconWidth = 16;
	/**
	 * Padding between icon and content (list item heading).
	 * @type {number}
	 * @memberof TreeWrapper
	 */
	@Input() innerPadding = 10;
	/**
	 * Size to render the `TreeItem` within the view.
	 * @type {("sm" | "md" | "lg")}
	 * @memberof TreeWrapper
	 */
	@Input() size: "sm" | "md" | "lg" = "md";

	/**
	 * Emits selection events to other class.
	 * @type {EventEmitter<Object>}
	 * @memberof TreeWrapper
	 */
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	/**
	 * Returns true if the item is a non leaf level item (has subitems) and false otherwise.
	 * @param {any} items
	 * @returns
	 * @memberof TreeWrapper
	 */
	public isBase(items) {
		if (items.find(item => item.items)) {
			return false;
		}
		return true;
	}

	public isExpanded(item) {
		if (!item.items) {
			return null;
		}
		return item.selected;
	}

	public isSelected(item) {
		if (!item.selected && item.items) {
			return null;
		}
		return item.selected && !item.items;
	}

	/**
	 * Bubbling the select event up to parent classes.
	 * @param {any} evt
	 * @memberof TreeWrapper
	 */
	public bubbleSelect(evt) {
		this.select.emit(evt);
	}

	/**
	 * Calculates the indentation for the `TreeItem` which overall creates a visual indication of the hierarchies of the items in the view.
	 * @returns the indentation for the `TreeItem`.
	 * @memberof TreeWrapper
	 */
	calculateIndent() {
		if (this.isBase(this.items)) {
			// same calc, we just drop the icon width from the last item
			return ((this.outerPadding + this.iconWidth + this.innerPadding)
				+ ((this.iconWidth + this.innerPadding) * this.indent)) - this.iconWidth;
		}
		// we add innerPadding twice to account for the padding from the previous level
		return (this.outerPadding + this.iconWidth + this.innerPadding)
			+ ((this.iconWidth + this.innerPadding) * this.indent);
	}
}
