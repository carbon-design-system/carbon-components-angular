import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef,
	ElementRef,
	AfterViewInit,
	OnChanges
} from "@angular/core";
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { ListItem } from "./../list-item.interface";
import { TreeItem } from "./tree-item.component";
import { watchFocusJump, treetools } from "./../dropdowntools";


/**
 * Creates a tree structured dropdown list when there are leaf and non-leaf inputs to choose from.
 *
 * source: `src/dropdown/tree/tree.component.ts`
 *
 * @export
 * @class DropdownTree
 * @implements {AbstractDropdownView}
 * @implements {OnChanges}
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-dropdown-tree",
	template: `
		<n-tree-wrapper
			[items]="items"
			[listTpl]="listTpl"
			[selectedIcon]="selectedIcon"
			[label]="label"
			[role]="role"
			[outerPadding]="outerPadding"
			[iconWidth]="iconWidth"
			[innerPadding]="innerPadding"
			[size]="size"
			(select)="onClick($event)">
		</n-tree-wrapper>
	`,
	providers: [{provide: AbstractDropdownView, useExisting: DropdownTree}]
})
export class DropdownTree implements AbstractDropdownView, OnChanges, AfterViewInit {
	/**
	 * The items to be displayed in the list within the `TreeWrapper`.
	 * @type {Array<ListItem>}
	 * @memberof DropdownTree
	 */
	@Input() items: Array<ListItem> = [];
	/**
	 * Optional custom template for displaying the tree structured list.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof DropdownTree
	 */
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() selectedIcon = false;
	/**
	 * The role of the unordered list element.
	 * @type {("tree" | "group")}
	 * @memberof DropdownTree
	 */
	@Input() role: "tree" | "group" = "tree";
	/**
	 * The aria-label for the DOM unordered list element.
	 * @type {string}
	 * @memberof DropdownTree
	 */
	@Input() label: string;
	/**
	 * Specifies whether or not the `DropdownList` supports selecting multiple items as opposed to single
	 * item selection.
	 * @type {("single" | "multi")}
	 * @memberof DropdownTree
	 */
	@Input() type: "single" | "multi" = "single";

	/**
	 * Emits selection events to other class.
	 * @type {EventEmitter<Object>}
	 * @memberof DropdownTree
	 */
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	/**
	 * Specifies the render size of the inputs within the `DropdownTree` items.
	 * @type {("sm" | "default" | "lg")}
	 * @memberof DropdownTree
	 */
	public size: "sm" | "default" | "lg" = "default";
	/**
	 * Left padding between the edge and the icon (for parent catagory).
	 * @memberof DropdownTree
	 */
	public outerPadding = 10;
	/**
	 * Sizing of the arrow glyphicon that represents the expansion/collapsing of a parent catagory.
	 * @memberof DropdownTree
	 */
	public iconWidth = 16;
	/**
	 * Padding between icon and content (list item heading).
	 * @memberof DropdownTree
	 */
	public innerPadding = 10;

	/**
	 * An array holding the HTML list elements in the view.
	 * @private
	 * @type {HTMLElement[]}
	 * @memberof DropdownTree
	 */
	private listList: HTMLElement[];
	/**
	 * A complete list of all the items in the `DropdownTree` in the form of a flat list.
	 * @private
	 * @type {Array<ListItem>}
	 * @memberof DropdownTree
	 */
	private flatList: Array<ListItem> = [];
	/**
	 * Maintains the index of the selected value within the `DropdownTree`.
	 * @private
	 * @memberof DropdownTree
	 */
	private index = -1;
	private focusJump;

	/**
	 * Creates an instance of DropdownTree.
	 * @param {ElementRef} _elementRef
	 * @memberof DropdownTree
	 */
	constructor(public _elementRef: ElementRef) {}

	/**
	 * Updates list and local variables when changes occur within the items belonging to the `DropdownTree`.
	 * @param {any} changes
	 * @memberof DropdownTree
	 */
	ngOnChanges(changes) {
		if (changes.items) {
			this.items = JSON.parse(JSON.stringify(changes.items.currentValue));
			this.flatList = [];
			this.flattenTree(this.items);
			this.index = this.flatList.findIndex(item => item.selected && !item.items);
			if (this._elementRef) {
				setTimeout(() => {
					this.listList = Array.from(this._elementRef.nativeElement.querySelectorAll("[role=option]")) as HTMLElement[];
				}, 0);
			}
			this.setupFocusObservable();
		}
	}

	/**
	 * Retrieves array of list items after view has rendered.
	 * Additionally, any Observables for the `DropdownTree` are initialized and padding is set based in the input size.
	 * @memberof DropdownTree
	 */
	ngAfterViewInit() {
		this.listList = Array.from(this._elementRef.nativeElement.querySelectorAll("[role=option]")) as HTMLElement[];
		this.setupFocusObservable();
		if (this.size === "lg") {
			setTimeout(() => {
				this.outerPadding = 20;
			}, 0);
		}
		if (this.size === "sm") {
			setTimeout(() => {
				this.outerPadding = 14;
			}, 0);
		}
	}

	/**
	 * Initializes (or re-initializes) the Observable that handles switching focus to an element based on
	 * key input matching the first letter of the item in the list/submenu.
	 * @memberof DropdownTree
	 */
	setupFocusObservable() {
		if (this.focusJump) {
			this.focusJump.unsubscribe();
		}
		this.focusJump = watchFocusJump(this._elementRef.nativeElement, this.listList)
			.subscribe(el => {
				let item = this.flatList[this.listList.indexOf(el)];
				treetools.find(this.items, item).path.forEach(i => {
					if (i !== item) { i.selected = true; }
				});
				// wait a tick...
				setTimeout(() => el.focus(), 0);
			});
	}

	/**
	 * Recursively transforms the nested tree structure into a flat list.
	 * @param {any} items
	 * @memberof DropdownTree
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
	 * Returns the `ListItem` that is subsequent to the selected item in the `DropdownList`.
	 * @returns {ListItem}
	 * @memberof DropdownTree
	 */
	getNextItem(): ListItem {
		if (this.index < this.flatList.length - 1) {
			this.index++;
		}
		let item = this.flatList[this.index];
		return item;
	}

	/**
	 * Returns the `HTMLElement` for the item that is subsequent to the selected item.
	 * @returns {HTMLElement}
	 * @memberof DropdownTree
	 */
	getNextElement(): HTMLElement {
		if (this.index < this.flatList.length - 1) {
			this.index++;
		} else {
			return null;
		}
		let elem = this.listList[this.index];
		let item = this.flatList[this.index];
		if (item.disabled || item.items) {
			if (item.items) { item.selected = true; }
			return this.getNextElement();
		}
		return elem;
	}

	/**
	 * Returns the `ListItem` that precedes the selected item within `DropdownList`.
	 * @returns {ListItem}
	 * @memberof DropdownTree
	 */
	getPrevItem(): ListItem {
		if (this.index > 0) {
			this.index--;
		}
		let item = this.flatList[this.index];
		return item;
	}

	/**
	 * Returns the `HTMLElement` for the item that precedes the selected item.
	 * @returns {HTMLElement}
	 * @memberof DropdownTree
	 */
	getPrevElement(): HTMLElement {
		if (this.index > 0) {
			this.index--;
		} else {
			return null;
		}
		let elem = this.listList[this.index];
		let item = this.flatList[this.index];
		if (item.disabled || item.items) {
			return this.getPrevElement();
		}
		return elem;
	}

	/**
	 * Returns the `ListItem` that is selected within `DropdownList`.
	 * @returns {ListItem}
	 * @memberof DropdownTree
	 */
	getCurrentItem(): ListItem {
		if (this.index < 0) {
			return this.flatList[0];
		}
		return this.flatList[this.index];
	}

	/**
	 * Returns the `HTMLElement` for the item that is selected within the `DropdownList`.
	 * @returns {HTMLElement}
	 * @memberof DropdownTree
	 */
	getCurrentElement(): HTMLElement {
		if (this.index < 0) {
			return this.listList[0];
		}
		return this.listList[this.index];
	}

	/**
	 * Returns the selected leaf level item(s) within the `TreeView`.
	 * @returns {ListItem[]}
	 * @memberof DropdownTree
	 */
	getSelected(): ListItem[] {
		let selected = this.flatList.filter(item => item.selected && !item.items);
		if (selected.length === 0) {
			return null;
		}
		return selected;
	}

	/**
	 * Transforms array input list of items to the correct state by updating the selected item(s).
	 * @param {Array<ListItem>} value
	 * @memberof DropdownTree
	 */
	propagateSelected(value: Array<ListItem>): void {
		for (let newItem of value) {
			// copy the item
			let tempNewItem: string | ListItem = Object.assign({}, newItem);
			// deleted selected because it's what we _want_ to change
			delete tempNewItem.selected;
			// stringify for compare
			tempNewItem = JSON.stringify(tempNewItem);
			for (let oldItem of this.flatList) {
				let tempOldItem: string | ListItem = Object.assign({}, oldItem);
				delete tempOldItem.selected;
				tempOldItem = JSON.stringify(tempOldItem);
				// do the compare
				if (tempOldItem.includes(tempNewItem)) {
					// oldItem = Object.assign(oldItem, newItem);
					oldItem.selected = newItem.selected;
				} else {
					oldItem.selected = false;
				}
			}
		}
	}

	// this and a few other functions are super common between
	// submenu and tree ... maybe we can dedupe?
	/**
	 * Emits the selected item or items after a mouse click event has occurred.
	 * @param {any} item
	 * @memberof DropdownTree
	 */
	onClick({item}) {
		if (!item.disabled ) {
			item.selected = !item.selected;
			this.index = this.flatList.indexOf(item);
			if (this.type === "single") {
				let {path} = treetools.find(this.items, item);
				// reset the selection taking care not to touch our selected item
				for (let i = 0; i < this.flatList.length; i++) {
					if (path.indexOf(this.flatList[i]) !== -1 && this.flatList[i] !== item) {
						this.flatList[i].selected = true;
					} else if (this.flatList[i] !== item) {
						this.flatList[i].selected = false;
					}
				}
				if (!item.items) {
					this.select.emit({item});
				}
			} else {
				this.select.emit(this.getSelected());
			}
		}
	}
}
