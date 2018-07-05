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
 * TreeView expects an array of ListItems where root nodes are ListItems with the `items` property set to an array of ListItems
 *
 * TreeView (like ListGroup) doesn't provide any interaction behaviour - meaning you must implement a handler for the `(select)` Output
 * and toggle the `selected` and `opened` states.
 *
 * A minimal example:
 * ```typescript
 * \@Component({
 * 	selector: "app-tree-view-demo",
 * 	template: `
 * 	<n-tree-view
 * 		[items]="demoItems"
 * 		(select)="onSelect($event)"
 * 		label="Default Tree View">
 * 	</n-tree-view>
 * 	`
 * })
 * export class TreeViewDemo {
 * 	demoItems = [
 * 		{
 * 			content: "Item one",
 * 			selected: false
 * 		},
 * 		{
 * 			content: "Item two",
 * 			selected: false,
 * 			opened: false,
 * 			items: [
 * 				{
 * 					content: "Sub item two 1",
 * 					selected: false
 * 				},
 * 				{
 * 					content: "Sub item two 2",
 * 					selected: false,
 * 					opened: false,
 * 					items: [
 * 						{
 * 							content: "Sub item two 1b",
 * 							selected: false
 * 						},
 * 						{
 * 							content: "Sub item two 2b",
 * 							selected: false
 * 						}
 * 					]
 * 				},
 * 			]
 * 		},
 * 		{
 * 			content: "Item three",
 * 			selected: false,
 * 		},
 * 		{
 * 			content: "Item four which is a seriously long item so we can demo text overflow",
 * 			selected: false
 * 		},
 * 		{
 * 			content: "Item six",
 * 			selected: false,
 * 			opened: false,
 * 			items: [
 * 				{
 * 					content: "Sub item six 1",
 * 					selected: false
 * 				},
 * 				{
 * 					content: "Sub item six 2",
 * 					selected: false,
 * 					opened: false,
 * 					items: [
 * 						{
 * 							content: "Sub item six 1b",
 * 							selected: false
 * 						},
 * 						{
 * 							content: "Sub item six 2b",
 * 							selected: false,
 * 						}
 * 					]
 * 				},
 * 			]
 * 		}
 * 	];
 *
 * 	onSelect(ev) {
 * 		if (ev.item.items) {
 * 			ev.item.opened = !ev.item.opened;
 * 		} else {
 * 			ev.item.selected = !ev.item.selected;
 * 		}
 * 	}
 * }
 * ```
 *
 *
 * An example of using a template:
 * ```typescript
 * \@Component({
 * 	selector: "app-tree-view-demo",
 * 	template: `
 * 	<n-tree-view
 * 		[items]="demoItems"
 * 		(select)="expand($event)"
 * 		[template]="treeTpl"
 * 		label="Tree view with custom template">
 * 		<ng-template #treeTpl let-item="item">
 * 			<n-checkbox
 * 				#cb
 * 				inline="true"
 * 				[checked]="isChecked(item, cb)"
 * 				[indeterminate]="isIndeterminate(item, cb)"
 * 				(change)="onCheck({item: item}, $event)"
 * 				[disabled]="item.disabled"
 * 				type="checkbox">
 * 				{{item.content}}
 * 			</n-checkbox>
 * 		</ng-template>
 * 	</n-tree-view>
 * 	`
 * 	]
 * })
 * export class TreeViewDemo {
 * 	demoItems = [
 * 		{
 * 			content: "Item one",
 * 			selected: false
 * 		},
 * 		{
 * 			content: "Item two",
 * 			selected: false,
 * 			opened: false,
 * 			items: [
 * 				{
 * 					content: "Sub item two 1",
 * 					selected: false
 * 				},
 * 				{
 * 					content: "Sub item two 2",
 * 					selected: false,
 * 					opened: false,
 * 					items: [
 * 						{
 * 							content: "Sub item two 1b",
 * 							selected: false
 * 						},
 * 						{
 * 							content: "Sub item two 2b",
 * 							selected: false
 * 						}
 * 					]
 * 				},
 * 			]
 * 		},
 * 		{
 * 			content: "Item three",
 * 			selected: false,
 * 		},
 * 		{
 * 			content: "Item four which is a seriously long item so we can demo text overflow",
 * 			selected: false
 * 		},
 * 		{
 * 			content: "Item six",
 * 			selected: false,
 * 			opened: false,
 * 			items: [
 * 				{
 * 					content: "Sub item six 1",
 * 					selected: false
 * 				},
 * 				{
 * 					content: "Sub item six 2",
 * 					selected: false,
 * 					opened: false,
 * 					items: [
 * 						{
 * 							content: "Sub item six 1b",
 * 							selected: false
 * 						},
 * 						{
 * 							content: "Sub item six 2b",
 * 							selected: false,
 * 						}
 * 					]
 * 				},
 * 			]
 * 		}
 * 	];
 *
 * 	onSelect(ev) {
 * 		if (ev.item.items) {
 * 			ev.item.opened = !ev.item.opened;
 * 		} else {
 * 			ev.item.selected = !ev.item.selected;
 * 		}
 * 	}
 *
 * 	expand(ev) {
 * 		if (ev.item.items) {
 * 			ev.item.opened = !ev.item.opened;
 * 		}
 * 	}
 *
 * 	onCheck(ev, event) {
 * 		let setSelect = (items, state) => {
 * 			items.forEach(item => {
 * 				item.selected = state;
 * 				if (item.items) {
 * 					setSelect(item.items, state);
 * 				}
 * 			});
 * 		};
 * 		let findParents = (items, toFind) => {
 * 			for (let item of items) {
 * 				if (item.items && item.items.includes(toFind)) {
 * 					return [item];
 * 				} else if (item.items) {
 * 					let tmpItem = findParents(item.items, toFind);
 * 					if (tmpItem) {
 * 						return [item, ...tmpItem];
 * 					}
 * 				}
 * 			}
 * 		};
 * 		let anyF = (items, cb) => {
 * 			for (let item of items) {
 * 				if (cb(item)) {
 * 					return true;
 * 				}
 * 				if (item.items) {
 * 					return anyF(item.items, cb);
 * 				}
 * 			}
 * 			return false;
 * 		};
 * 		if (ev.item.items) {
 * 			if (anyF(ev.item.items, item => item.selected)) {
 * 				setSelect(ev.item.items, false);
 * 				ev.item.selected = false;
 * 			} else {
 * 				setSelect(ev.item.items, true);
 * 				ev.item.selected = true;
 * 			}
 * 		} else {
 * 			ev.item.selected = !ev.item.selected;
 * 		}
 * 		// this doesn't matter if only the parents are selectable
 * 		// in that case use check/blank icons for children
 * 		// and checkboxes for the parents. Of course, if you have
 * 		// highly nested trees, a version of this may be useful
 * 		let parents = findParents(this.demoItems1, ev.item);
 * 		if (parents && parents.length > 0) {
 * 			parents.forEach(parent => {
 * 				// ignores the event item
 * 				if (parent.items.every(i => i.selected)) {
 * 					parent.selected = true;
 * 				} else {
 * 					parent.selected = false;
 * 				}
 * 			});
 * 		}
 * 		setTimeout(() => {}, 0);
 * 	}
 *
 * 	isIndeterminate(item, box) {
 * 		let anyF = (items, cb) => {
 * 			for (let i of items) {
 * 				if (cb(i)) {
 * 					return true;
 * 				}
 * 				if (i.items) {
 * 					return anyF(i.items, cb);
 * 				}
 * 			}
 * 			return false;
 * 		};
 * 		if (item.items) {
 * 			let selected = item.items.filter(i => i.selected);
 * 			if (anyF(item.items, i => i.selected) && !item.items.every(i => i.selected)) {
 * 				box.indeterminate = true;
 * 				return true;
 * 			}
 * 		}
 * 		box.indeterminate = false;
 * 		return false;
 * 	}
 *
 * 	isChecked(item, cb) {
 * 		if (item.items && item.items.every(i => i.selected)) {
 * 			cb.checked = true;
 * 			return true;
 * 		} else if (!item.items && item.selected) {
 * 			cb.checked = true;
 * 			return true;
 * 		}
 * 		cb.checked = false;
 * 		return false;
 * 	}
 * }
 * ```
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
	onClick(item) {
		if (!item.disabled ) {
			this.select.emit({item});
			this.selected.emit({item});
		}
	}
}
