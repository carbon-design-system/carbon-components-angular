import {
	Component,
	Input,
	Output,
	EventEmitter,
	TemplateRef,
} from "@angular/core";
import { ListItem } from "./../dropdown/list-item.interface";


/**
 * Internal helper component for TreeView
 *
 * Renders a lsit of TreeViewItems
 * @export
 * @class TreeViewWrapper
 */
@Component({
	selector: "n-tree-view-wrapper",
	template: `
		<ul [class.tree-view]="role == 'tree'"
		[attr.role]="role"
		[attr.aria-hidden]="(role == 'group') ? !isOpen : null"
		[attr.aria-label]="label">
			<li *ngFor="let item of items; let index = index"
			role="treeitem"
			[attr.aria-level]="indent + 1"
			[attr.aria-setsize]="items.length"
			[attr.aria-posinset]="index + 1"
			[attr.aria-hidden]="item.disabled"
			[attr.aria-expanded]="item.items ? (item.opened ? true : false) : null"
			[attr.aria-selected]="item.selected">
				<n-tree-view-item
					[listTpl]="listTpl"
					[listItem]="item"
					[parentRef]="parent"
					[rootElem]="rootElem"
					[indent]="indent"
					[isBase]="isBase(items)"
					[outerPadding]="outerPadding"
					[iconWidth]="iconWidth"
					[innerPadding]="innerPadding"
					(select)="bubbleSelect($event)">
				</n-tree-view-item>

				<n-tree-view-wrapper
					*ngIf="item.items && item.opened"
					[isOpen]="item.opened"
					[items]="item.items"
					[listTpl]="listTpl"
					[parent]="parent"
					[rootElem]="rootElem"
					[indent]="indent+1"
					role="group"
					[outerPadding]="outerPadding"
					[iconWidth]="iconWidth"
					[innerPadding]="innerPadding"
					[label]="item"
					(select)="bubbleSelect($event)">
				</n-tree-view-wrapper>
			</li>
		</ul>
	`
})
export class TreeViewWrapper {
	@Input() items: Array<ListItem> = [];
	/**
	 * Set to `true` if the unordered list is hidden (collapsed with parent catagory) in the view.
	 * @type {boolean}
	 * @memberof TreeViewWrapper
	 */
	@Input() isOpen = false;
	@Input() parent: any = null;
	/**
	 * Optional custom template for displaying the `TreeViewWrapper`.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof TreeViewWrapper
	 */
	@Input() listTpl: string | TemplateRef<any> = "";
	/**
	 * Used to Calculate the indent spacing of the list item based on its hierarchical level in the list.
	 * @type {number}
	 * @memberof TreeViewWrapper
	 */
	@Input() indent = 0;
	@Input() rootElem: any = null;
	/**
	 * The role of the unordered list element.
	 * @type {("tree" | "group")}
	 * @memberof TreeViewWrapper
	 */
	@Input() role: "tree" | "group" = "group";
	/**
	 * The aria-label for the DOM unordered list element.
	 * @type {string}
	 * @memberof TreeViewWrapper
	 */
	@Input() label: string;
	/**
	 * Left padding between edge and the icon.
	 * @memberof TreeViewWrapper
	 */
	@Input() outerPadding = 20;
	/**
	 * Sizing of the arrow glyphicon that represents the expansion/collapsing of a parent catagory.
	 * @memberof TreeViewWrapper
	 */
	@Input() iconWidth = 16;
	/**
	 * Padding between icon and content (list item heading).
	 * @memberof TreeViewWrapper
	 */
	@Input() innerPadding = 5;

	/**
	 * Emits selection events within the children class.
	 * @type {EventEmitter<Object>}
	 * @memberof TreeViewWrapper
	 */
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	/**
	 * Returns true if the `n-tree-view-item` is a non leaf level item (has subitems) and false otherwise.
	 * @param {any} items
	 * @returns
	 * @memberof TreeViewWrapper
	 */
	public isBase(items) {
		if (items.find(item => item.items)) {
			return false;
		}
		return true;
	}

	/**
	 * Bubbling the select event up to parent classes.
	 * @param {any} evt
	 * @memberof TreeViewWrapper
	 */
	public bubbleSelect(evt) {
		this.select.emit(evt);
	}
}
