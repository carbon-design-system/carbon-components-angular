import {
	Component,
	Input,
	OnChanges,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef,
	HostListener,
	ElementRef
} from "@angular/core";
import { ListItem } from "./../dropdown/list-item.interface";
import { treetools } from "./../dropdown/dropdowntools";


/**
 * class: TreeView
 *
 * demo: [https://pages.github.ibm.com/peretz/neutrino/#/tree-view](https://pages.github.ibm.com/peretz/neutrino/#/tree-view)
 *
 * selector: `n-tree-view`
 * source: `src/tree-view/tree-view.component.ts`
 *
 * @export
 * @class TreeView
 * @implements {OnChanges}
 */
@Component({
	selector: "n-tree-view",
	template: `
		<n-tree-view-wrapper
			[items]="items"
			[listTpl]="template"
			[label]="label"
			[role]="role"
			[outerPadding]="outerPadding"
			[iconWidth]="iconWidth"
			[innerPadding]="innerPadding"
			(select)="onClick($event)">
		</n-tree-view-wrapper>
	`,
})
export class TreeView implements OnChanges {
	/**
	 * Collection of `ListItem`s that create the tree view.
	 * @type {Array<ListItem>}
	 * @memberof TreeView
	 */
	@Input() items: Array<ListItem> = [];
	/**
	 * Optional template for diplaying the `TreeView`.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof TreeView
	 */
	@Input() template: string | TemplateRef<any> = "";
	/**
	 * The top level unordered list item has role "tree" and all unordered lists encompassed have the role "group".
	 * @type {("tree" | "group")}
	 * @memberof TreeView
	 */
	@Input() role: "tree" | "group" = "tree";
	/**
	 * The aria-label attribute for the `TreeView` unordered list.
	 * @type {string}
	 * @memberof TreeView
	 */
	@Input() label: string;

	/**
	 * Event to emit selection of a list item within the `TreeView`.
	 * @type {EventEmitter<Object>}
	 * @memberof TreeView
	 */
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();
	/**
	 * Event to emit the selected item within the `TreeView`.
	 * @type {EventEmitter<Object>}
	 * @memberof TreeView
	 */
	@Output() selected: EventEmitter<Object> = new EventEmitter<Object>();

	/**
	 * The padding between the left edge to the content.
	 * @type {number}
	 * @memberof TreeView
	 */
	public outerPadding = 20;
	/**
	 * Width of the glyphicon indicative of a non-leaf heading's expansion/collapsing.
	 * @type {number}
	 * @memberof TreeView
	 */
	public iconWidth = 16;
	/**
	 * Left padding between icon and content (list item heading).
	 * @type {number}
	 * @memberof TreeView
	 */
	public innerPadding = 5;

	/**
	 * A complete list of all the items in the `TreeView` in the form of a flat list.
	 * @private
	 * @type {Array<ListItem>}
	 * @memberof TreeView
	 */
	private flatList: Array<ListItem> = [];
	private index = -1;

	/**
	 * Creates an instance of TreeView.
	 * @param {ElementRef} _elementRef
	 * @memberof TreeView
	 */
	constructor(private _elementRef: ElementRef) {}

	/**
	 * Update the index to the selected leaf list item when a change occurs within the `TreeView` component.
	 * @param {any} changes
	 * @memberof TreeView
	 */
	ngOnChanges(changes) {
		if (changes.items) {
			this.flatList = [];
			this.flattenTree(this.items);
			this.index = this.flatList.findIndex(item => item.selected && !item.items);
		}
	}

	/**
	 * Recursively transforms the nested tree structure into a flat list.
	 * @param {any} items
	 * @memberof TreeView
	 */
	flattenTree(items) {
		for (let item of items) {
			this.flatList.push(item);
			if (item.items) {
				this.flattenTree(item.items);
			}
		}
	}

	/**
	 * Returns the selected leaf level item(s) within the `TreeView`.
	 * @returns {ListItem[]}
	 * @memberof TreeView
	 */
	getSelected(): ListItem[] {
		let selected = this.flatList.filter(item => item.selected && !item.items);
		if (selected.length === 0) {
			return null;
		}
		return selected;
	}

	/**
	 * Manages the keyboad naviagation through the `TreeView` list items.
	 * @param {any} ev
	 * @memberof TreeView
	 */
	@HostListener("keydown", ["$event"])
	onKeyDown(ev) {
		let visibleItems = Array.from(this._elementRef.nativeElement.querySelectorAll(".item-wrapper[tabindex='0']"));
		let eli = visibleItems.indexOf(document.activeElement);
		if (ev.key === "ArrowUp" && visibleItems[eli - 1]) {
			(visibleItems[eli - 1] as HTMLElement).focus();
		} else if (ev.key === "ArrowDown" && visibleItems[eli + 1]) {
			(visibleItems[eli + 1] as HTMLElement).focus();
		}
	}

	/**
	 * Emits events to select the item that was clicked.
	 * @param {any} item
	 * @memberof TreeView
	 */
	onClick({item}) {
		if (!item.disabled ) {
			this.select.emit({item});
			this.selected.emit({item});
		}
	}
}
