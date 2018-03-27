import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef,
	ElementRef,
	ViewChild,
	AfterViewInit,
	OnChanges,
	HostBinding
} from "@angular/core";
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { ListItem } from "./../list-item.interface";
import { SubMenuItem } from "./sub-menu-item.component";
import { watchFocusJump, treetools } from "./../dropdowntools";


/**
 * ```html
 * <n-dropdown-sub-menu [items]="treeItems"></n-dropdown-sub-menu>
 * ```
 * @export
 * @class DropdownSubMenu
 * @implements {AbstractDropdownView}
 * @implements {OnChanges}
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-dropdown-sub-menu",
	template: `
		<n-sub-menu-wrapper
			[items]="items"
			[listTpl]="listTpl"
			[role]="role"
			[label]="label"
			[scrollEnabled]="scrollEnabled"
			(select)="onClick($event)">
		</n-sub-menu-wrapper>
	`,
	providers: [
		{
			provide: AbstractDropdownView,
			useExisting: DropdownSubMenu
		}
	]
})
export class DropdownSubMenu implements AbstractDropdownView, OnChanges, AfterViewInit {
	/**
	 * The items to be displayed in the list within the `DropdownSubMenu`.
	 * @type {Array<ListItem>}
	 * @memberof DropdownSubMenu
	 */
	@Input() items: Array<ListItem> = [];
	/**
	 * Optional custom template for displaying the `DropdownSubMenu`.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof DropdownSubMenu
	 */
	@Input() listTpl: string | TemplateRef<any> = "";
	/**
	 * The role of the unordered list element within `DropdownSubMenu`.
	 * @type {("tree" | "group")}
	 * @memberof DropdownSubMenu
	 */
	@Input() role: "tree" | "group" = "tree" ;
	/**
	 * Aria label for the unordered list in the submenu.
	 * @type {string}
	 * @memberof DropdownSubMenu
	 */
	@Input() label: string;
	/**
	 * Defines whether or not the `DropdownSubMenu` supports selecting multiple items as opposed to single
	 * item selection.
	 * @type {("single" | "multi")}
	 * @memberof DropdownSubMenu
	 */
	@Input() type: "single" | "multi" = "single";

	/**
	 * Emits event that handles the selection of a `SubMenuItem`.
	 * @type {EventEmitter<Object>}
	 * @memberof DropdownSubMenu
	 */
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();
	/**
	 * Binds 'sub-menu' value to the class attribute for `DropdownSubMenu`.
	 * @memberof DropdownSubMenu
	 */
	@HostBinding("attr.class") attrClass = "sub-menu";

	/**
	 * Specifies the render size of the inputs within the dropdown sub-menu items.
	 * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
	 * @type {("sm" | "md" |"default" | "lg")}
	 * @memberof DropdownSubMenu
	 */
	public size: "sm" | "md" |"default" | "lg" = "md";

	public scrollEnabled = false;

	/**
	 * An array holding the HTML list elements in the view.
	 * @private
	 * @type {HTMLElement[]}
	 * @memberof DropdownSubMenu
	 */
	private listElementList: HTMLElement[];
	/**
	 * A complete list of all the items in the `TreeView` in the form of a flat list.
	 * @private
	 * @type {Array<ListItem>}
	 * @memberof DropdownSubMenu
	 */
	private flatList: Array<ListItem> = [];
	/**
	 * Maintains the index of the selected value within the `DropdownSubMenu`.
	 * @private
	 * @memberof DropdownSubMenu
	 */
	private index = -1;
	private focusJump;

	/**
	 * Creates an instance of `DropdownSubMenu`.
	 * @param {ElementRef} elementRef
	 * @memberof DropdownSubMenu
	 */
	constructor(public elementRef: ElementRef) {}

	/**
	 * Updates list and local variables when changes occur within the items belonging to the `DropdownSubMenu`.
	 * @param {any} changes
	 * @memberof DropdownSubMenu
	 */
	ngOnChanges(changes) {
		if (changes.items) {
			this.items = JSON.parse(JSON.stringify(changes.items.currentValue));
			this.flatList = [];
			this.flattenTree(this.items);
			this.index = this.flatList.findIndex(item => item.selected && !item.items);
			if (this.elementRef) {
				setTimeout(() => {
					this.listElementList = Array.from(this.elementRef.nativeElement.querySelectorAll("[role=option]")) as HTMLElement[];
				}, 0);
			}
			this.setupFocusObservable();
		}
	}

	/**
	 * Retrieves array of list items after view has rendered.
	 * Additionally, any Observables for the `DropdownSubMenu` are initialized.
	 * @memberof DropdownSubMenu
	 */
	ngAfterViewInit() {
		this.listElementList = Array.from(this.elementRef.nativeElement.querySelectorAll("[role=option]")) as HTMLElement[];
		this.setupFocusObservable();
	}

	/**
	 * Initializes (or re-initializes) the Observable that handles switching focus to an element based on
	 * key input matching the first letter of the item in the list/submenu.
	 * @memberof DropdownSubMenu
	 */
	setupFocusObservable() {
		if (this.focusJump) {
			this.focusJump.unsubscribe();
		}
		this.focusJump = watchFocusJump(this.elementRef.nativeElement, this.listElementList)
			.subscribe(el => {
				let item = this.flatList[this.listElementList.indexOf(el)];
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
	 * @memberof DropdownSubMenu
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
	 * Returns the `ListItem` that is subsequent to the selected item in the `DropdownSubMenu`.
	 * @returns {ListItem}
	 * @memberof DropdownSubMenu
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
	 * @memberof DropdownSubMenu
	 */
	getNextElement(): HTMLElement {
		if (this.index < this.flatList.length - 1) {
			this.index++;
		} else {
			return null;
		}
		let elem = this.listElementList[this.index];
		let item = this.flatList[this.index];
		if (item.disabled || item.items) {
			if (item.items) { item.selected = true; }
			return this.getNextElement();
		}
		return elem;
	}

	/**
	 * Returns the `ListItem` that precedes the selected item within `DropdownSubMenu`.
	 * @returns {ListItem}
	 * @memberof DropdownSubMenu
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
	 * @memberof DropdownSubMenu
	 */
	getPrevElement(): HTMLElement {
		if (this.index > 0) {
			this.index--;
		} else {
			return null;
		}
		let elem = this.listElementList[this.index];
		let item = this.flatList[this.index];
		if (item.disabled || item.items) {
			return this.getPrevElement();
		}
		return elem;
	}

	/**
	 * Returns the selected leaf level item(s) within the `DropdownSubMenu`.
	 * @returns {ListItem[]}
	 * @memberof DropdownSubMenu
	 */
	getSelected(): ListItem[] {
		let selected = this.flatList.filter(item => item.selected && !item.items);
		if (selected.length === 0) {
			return null;
		}
		return selected;
	}

	/**
	 * Returns the `ListItem` that is selected within the `DropdownSubMenu`.
	 * @returns {ListItem}
	 * @memberof DropdownSubMenu
	 */
	getCurrentItem(): ListItem {
		if (this.index < 0) {
			return this.flatList[0];
		}
		return this.flatList[this.index];
	}

	/**
	 * Returns the `HTMLElement` for the item that is selected within the `DropdownSubMenu`.
	 * @returns {HTMLElement}
	 * @memberof DropdownSubMenu
	 */
	getCurrentElement(): HTMLElement {
		if (this.index < 0) {
			return this.listElementList[0];
		}
		return this.listElementList[this.index];
	}

	/**
	 * Transforms array input list of items to the correct state by updating the selected item.
	 * @param {Array<ListItem>} value
	 * @memberof DropdownSubMenu
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

	/**
	 * Initalizes focus in the list, effectivly a wrapper for `getCurrentElement().focus()`
	 */
	initFocus() {
		this.getCurrentElement().focus();
	}

	// this and a few other functions are super common between
	// submenu and tree ... maybe we can dedupe?
	/**
	 * Emits the selected item or items after a mouse click event has occurred.
	 * @param {any} item
	 * @memberof DropdownSubMenu
	 */
	onClick({item}) {
		if (!item.disabled) {
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

	enableScroll() {
	}

	disableScroll() {
	}
}
