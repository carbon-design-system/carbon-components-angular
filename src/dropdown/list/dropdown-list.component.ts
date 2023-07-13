import {
	Component,
	Input,
	Output,
	OnDestroy,
	EventEmitter,
	TemplateRef,
	AfterViewInit,
	ViewChild,
	ElementRef,
	ViewChildren,
	QueryList,
	ApplicationRef
} from "@angular/core";
import { Observable, isObservable, Subscription, of } from "rxjs";
import { first } from "rxjs/operators";

import { I18n } from "carbon-components-angular/i18n";
import { AbstractDropdownView } from "../abstract-dropdown-view.class";
import { ListItem } from "../list-item.interface";
import { watchFocusJump } from "../dropdowntools";
import { ScrollCustomEvent } from "./scroll-custom-event.interface";


/**
 * ```html
 * <cds-dropdown-list [items]="listItems"></cds-dropdown-list>
 * ```
 * ```typescript
 * listItems = [
 * 	{
 * 		content: "item one",
 * 		selected: false
 * 	},
 * 	{
 * 		content: "item two",
 * 		selected: false,
 * 	},
 * 	{
 * 		content: "item three",
 * 		selected: false
 * 	},
 * 	{
 * 		content: "item four",
 * 		selected: false
 * 	}
 * ];
 * ```
 */
@Component({
	selector: "cds-dropdown-list, ibm-dropdown-list",
	template: `
		<ul
			#list
			[id]="listId"
			role="listbox"
			class="cds--list-box__menu cds--multi-select"
			(scroll)="emitScroll($event)"
			(keydown)="navigateList($event)"
			tabindex="-1"
			[attr.aria-label]="ariaLabel"
			[attr.aria-activedescendant]="highlightedItem">
			<li
				role="option"
				*ngFor="let item of displayItems; let i = index"
				(click)="doClick($event, item)"
				class="cds--list-box__menu-item"
				[attr.aria-selected]="item.selected"
				[id]="getItemId(i)"
				[attr.title]=" showTitles ? item.content : null"
				[attr.disabled]="item.disabled ? true : null"
				[ngClass]="{
					'cds--list-box__menu-item--active': item.selected,
					'cds--list-box__menu-item--highlighted': highlightedItem === getItemId(i)
				}">
				<div
					#listItem
					tabindex="-1"
					class="cds--list-box__menu-item__option">
					<div
						*ngIf="!listTpl && type === 'multi'"
						class="cds--form-item cds--checkbox-wrapper">
						<label
							[attr.data-contained-checkbox-state]="item.selected"
							class="cds--checkbox-label">
							<input
								class="cds--checkbox"
								type="checkbox"
								[checked]="item.selected"
								[disabled]="item.disabled"
								tabindex="-1">
							<span class="cds--checkbox-appearance"></span>
							<span class="cds--checkbox-label-text">{{item.content}}</span>
						</label>
					</div>
					<ng-container *ngIf="!listTpl && type === 'single'">{{item.content}}</ng-container>
					<svg
						*ngIf="!listTpl && type === 'single'"
						cdsIcon="checkmark"
						size="16"
						class="cds--list-box__menu-item__selected-icon">
					</svg>
					<ng-template
						*ngIf="listTpl"
						[ngTemplateOutletContext]="{item: item}"
						[ngTemplateOutlet]="listTpl">
					</ng-template>
				</div>
			</li>
		</ul>`,
	providers: [
		{
			provide: AbstractDropdownView,
			useExisting: DropdownList
		}
	]
})
export class DropdownList implements AbstractDropdownView, AfterViewInit, OnDestroy {
	static listCount = 0;
	@Input() ariaLabel = this.i18n.get().DROPDOWN_LIST.LABEL;
	/**
	 * The list items belonging to the `DropdownList`.
	 */
	@Input() set items(value: Array<ListItem> | Observable<Array<ListItem>>) {
		if (isObservable(value)) {
			if (this._itemsSubscription) {
				this._itemsSubscription.unsubscribe();
			}
			this._itemsReady = new Observable<boolean>((observer) => {
				this._itemsSubscription = value.subscribe(v => {
					this.updateList(v);
					observer.next(true);
					observer.complete();
				});
			});
			this.onItemsReady(null);
		} else {
			this.updateList(value);
		}
		this._originalItems = value;
	}

	get items(): Array<ListItem> | Observable<Array<ListItem>> {
		return this._originalItems;
	}
	/**
	 * Template to bind to items in the `DropdownList` (optional).
	 */
	@Input() listTpl: string | TemplateRef<any> = null;
	/**
	 * Event to emit selection of a list item within the `DropdownList`.
	 */
	@Output() select: EventEmitter<{ item: ListItem, isUpdate?: boolean } | ListItem[]> = new EventEmitter();
	/**
	 * Event to emit scroll event of a list within the `DropdownList`.
	 */
	@Output() scroll: EventEmitter<ScrollCustomEvent> = new EventEmitter();
	/**
	 * Event to suggest a blur on the view.
	 * Emits _after_ the first/last item has been focused.
	 * ex.
	 * ArrowUp -> focus first item
	 * ArrowUp -> emit event
	 *
	 * When this event fires focus should be placed on some element outside of the list - blurring the list as a result
	 */
	@Output() blurIntent = new EventEmitter<"top" | "bottom">();
	/**
	 * Maintains a reference to the view DOM element for the unordered list of items within the `DropdownList`.
	 */
	@ViewChild("list", { static: true }) list: ElementRef;
	/**
	 * Defines whether or not the `DropdownList` supports selecting multiple items as opposed to single
	 * item selection.
	 */
	@Input() type: "single" | "multi" = "single";

	/**
	 * Defines whether to show title attribute or not
	 */
	@Input() showTitles = true;

	/**
	 * Defines the rendering size of the `DropdownList` input component.
	 */
	public size: "sm" | "md" | "lg" = "md";
	public listId = `listbox-${DropdownList.listCount++}`;
	public highlightedItem = null;
	/**
	 * Holds the list of items that will be displayed in the `DropdownList`.
	 * It differs from the the complete set of items when filtering is used (but
	 * it is always a subset of the total items in `DropdownList`).
	 */
	public displayItems: Array<ListItem> = [];
	/**
	 * Maintains the index for the selected item within the `DropdownList`.
	 */
	protected index = -1;
	/**
	 * An array holding the HTML list elements in the view.
	 */
	@ViewChildren("listItem") protected listElementList: QueryList<ElementRef>;
	/**
	 * Observable bound to keydown events to control filtering.
	 */
	protected focusJump;
	/**
	 * Tracks the current (if any) subscription to the items observable so we can clean up when the input is updated.
	 */
	protected _itemsSubscription: Subscription;
	/**
	 * Used to retain the original items passed to the setter.
	 */
	protected _originalItems: Array<ListItem> | Observable<Array<ListItem>>;
	/**
	 * Useful representation of the items, should be accessed via `getListItems`.
	 */
	protected _items: Array<ListItem> = [];
	/**
	 * Used to wait for items in case they are passed through an observable.
	 */
	protected _itemsReady: Observable<boolean>;

	/**
	 * Creates an instance of `DropdownList`.
	 */
	constructor(public elementRef: ElementRef, protected i18n: I18n, protected appRef: ApplicationRef) {}

	/**
	 * Retrieves array of list items and index of the selected item after view has rendered.
	 * Additionally, any Observables for the `DropdownList` are initialized.
	 */
	ngAfterViewInit() {
		this.index = this.getListItems().findIndex(item => item.selected);
		this.setupFocusObservable();
		setTimeout(() => {
			this.doEmitSelect(true);
		});
	}

	/**
	 * Removes any Observables on destruction of the component.
	 */
	ngOnDestroy() {
		if (this.focusJump) {
			this.focusJump.unsubscribe();
		}
		if (this._itemsSubscription) {
			this._itemsSubscription.unsubscribe();
		}
	}

	doEmitSelect(isUpdate = true) {
		if (this.type === "single") {
			this.select.emit({ item: this._items.find(item => item.selected), isUpdate: isUpdate });
		} else {
			// abuse javascripts object mutability until we can break the API and switch to
			// { items: [], isUpdate: true }
			const selected = this.getSelected() || [];
			selected["isUpdate"] = isUpdate;
			this.select.emit(selected);
		}
	}

	getItemId(index: number) {
		return `${this.listId}-${index}`;
	}

	/**
	 * Updates the displayed list of items and then retrieves the most current properties for the `DropdownList` from the DOM.
	 */
	updateList(items) {
		this._items = items.map(item => Object.assign({}, item));
		this.displayItems = this._items;
		this.updateIndex();
		this.setupFocusObservable();
		this.doEmitSelect();
	}

	/**
	 * Filters the items being displayed in the DOM list.
	 */
	filterBy(query = "") {
		if (query) {
			this.displayItems = this.getListItems().filter(item => item.content.toLowerCase().includes(query.toLowerCase()));
			// Reset index if items were found
			// Prevent selecting index in list that are undefined.
			if (this.displayItems) {
				this.index = 0;
			}
		} else {
			this.displayItems = this.getListItems();
		}

		this.updateIndex();
	}

	/**
	 * Initializes (or re-initializes) the Observable that handles switching focus to an element based on
	 * key input matching the first letter of the item in the list.
	 */
	setupFocusObservable() {
		if (!this.list) { return; }
		if (this.focusJump) {
			this.focusJump.unsubscribe();
		}
		let elList = Array.from(this.list.nativeElement.querySelectorAll("li"));
		this.focusJump = watchFocusJump(this.list.nativeElement, elList)
			.subscribe(el => {
				el.focus();
			});
	}

	/**
	 * Returns the `ListItem` that is subsequent to the selected item in the `DropdownList`.
	 */
	getNextItem(): ListItem {
		if (this.index < this.displayItems.length - 1) {
			this.index++;
		}
		return this.displayItems[this.index];
	}

	/**
	 * Returns `true` if the selected item is not the last item in the `DropdownList`.
	 */
	hasNextElement(): boolean {
		return this.index < this.displayItems.length - 1 &&
			(!(this.index === this.displayItems.length - 2) || !this.displayItems[this.index + 1].disabled);
	}

	/**
	 * Returns the `HTMLElement` for the item that is subsequent to the selected item.
	 */
	getNextElement(): HTMLElement {
		// Only return native elements if they are rendered
		const elemList = this.listElementList ? this.listElementList.toArray() : [];
		if (!elemList.length) {
			return null;
		}

		/**
		 * Start checking from next index
		 * Continue looping through the list until a non disabeled element is found or
		 * end of list is reached
		 */
		for (let i = this.index + 1; i < elemList.length; i++) {
			// If the values in the list are not disabled
			if (!this.displayItems[i].disabled) {
				this.index = i;
				return elemList[i].nativeElement;
			}
		}

		return elemList[this.index].nativeElement;
	}

	/**
	 * Returns the `ListItem` that precedes the selected item within `DropdownList`.
	 */
	getPrevItem(): ListItem {
		if (this.index > 0) {
			this.index--;
		}
		return this.displayItems[this.index];
	}

	/**
	 * Returns `true` if the selected item is not the first in the list.
	 */
	hasPrevElement(): boolean {
		return this.index > 0 && (!(this.index === 1) || !this.displayItems[0].disabled);
	}

	/**
	 * Returns the `HTMLElement` for the item that precedes the selected item.
	 */
	getPrevElement(): HTMLElement {
		// Only return native elements if they are rendered
		const elemList = this.listElementList ? this.listElementList.toArray() : [];
		if (!elemList.length) {
			return null;
		}

		/**
		 * Start checking from next index
		 * Continue looping through the list until a non disabeled element is found or
		 * end of list is reached
		 */
		for (let i = this.index - 1; i < this.index && i >= 0; i--) {
			// If the values in the list are not disabled
			if (!this.displayItems[i].disabled) {
				this.index = i;
				return elemList[i].nativeElement;
			}
		}

		return elemList[this.index].nativeElement;
	}

	/**
	 * Returns the `ListItem` that is selected within `DropdownList`.
	 */
	getCurrentItem(): ListItem {
		if (this.index < 0) {
			return this.displayItems[0];
		}
		return this.displayItems[this.index];
	}

	/**
	 * Returns the `HTMLElement` for the item that is selected within the `DropdownList`.
	 */
	getCurrentElement(): HTMLElement {
		if (this.index < 0) {
			return this.listElementList.first.nativeElement;
		}
		return this.listElementList.toArray()[this.index].nativeElement;
	}

	/**
	 * Returns the items as an Array
	 */
	getListItems(): Array<ListItem> {
		return this._items;
	}

	/**
	 * Returns a list containing the selected item(s) in the `DropdownList`.
	 */
	getSelected(): ListItem[] {
		let selected = this.getListItems().filter(item => item.selected);
		if (selected.length === 0) {
			return [];
		}
		return selected;
	}

	/**
	 * Transforms array input list of items to the correct state by updating the selected item(s).
	 */
	propagateSelected(value: Array<ListItem>): void {
		// if we get a non-array, log out an error (since it is one)
		if (!Array.isArray(value)) {
			console.error(`${this.constructor.name}.propagateSelected expects an Array<ListItem>, got ${JSON.stringify(value)}`);
		}
		this.onItemsReady(() => {
			// loop through the list items and update the `selected` state for matching items in `value`
			for (let oldItem of this.getListItems()) {
				// copy the item
				let tempOldItem: string | ListItem = Object.assign({}, oldItem);
				// deleted selected because it's what we _want_ to change
				delete tempOldItem.selected;
				// stringify for compare
				tempOldItem = JSON.stringify(tempOldItem);
				for (let newItem of value) {
					// copy the item
					let tempNewItem: string | ListItem = Object.assign({}, newItem);
					// deleted selected because it's what we _want_ to change
					delete tempNewItem.selected;
					// stringify for compare
					tempNewItem = JSON.stringify(tempNewItem);
					// do the compare
					if (tempOldItem.includes(tempNewItem)) {
						oldItem.selected = newItem.selected;
						// if we've found a matching item, we can stop looping
						break;
					} else {
						oldItem.selected = false;
					}
				}
			}
		});
	}

	/**
	 * Initializes focus in the list, effectively a wrapper for `getCurrentElement().focus()`
	 */
	initFocus() {
		if (this.index < 0) {
			this.updateIndex();
		}

		this.list.nativeElement.focus();
		setTimeout(() => {
			this.highlightedItem = this.getItemId(this.index);
		});
	}

	updateIndex() {
		// initialize index on the first selected item or
		// on the next non disabled item if no items are selected
		const selected = this.getSelected();
		if (selected.length) {
			this.index = this.displayItems.indexOf(selected[0]);
		} else if (this.hasNextElement()) {
			this.getNextElement();
		}
	}

	/**
	 * Manages the keyboard accessibility for navigation and selection within a `DropdownList`.
	 */
	navigateList(event: KeyboardEvent) {
		if (event.key === "Enter" || event.key === " ") {
			if (this.listElementList.some(option => option.nativeElement === event.target)) {
				event.preventDefault();
			}
			if (event.key === "Enter") {
				this.doClick(event, this.getCurrentItem());
			}
		} else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
			event.preventDefault();
			if (event.key === "ArrowDown") {
				if (this.hasNextElement()) {
					this.getNextElement().scrollIntoView({ block: "end" });
				} else {
					this.blurIntent.emit("bottom");
				}
			} else if (event.key === "ArrowUp") {
				if (this.hasPrevElement()) {
					this.getPrevElement().scrollIntoView();
				} else {
					this.blurIntent.emit("top");
				}
			}
			setTimeout(() => {
				this.highlightedItem = this.getItemId(this.index);
			});
		}
	}

	/**
	 * Emits the selected item or items after a mouse click event has occurred.
	 */
	doClick(event, item) {
		event.preventDefault();
		if (item && !item.disabled) {
			this.list.nativeElement.focus();
			if (this.type === "single") {
				item.selected = true;
				// reset the selection
				for (let otherItem of this.getListItems()) {
					if (item !== otherItem) { otherItem.selected = false; }
				}
			} else {
				item.selected = !item.selected;
			}
			this.index = this.displayItems.indexOf(item);
			this.highlightedItem = this.getItemId(this.index);
			this.doEmitSelect(false);
			this.appRef.tick();
		}
	}

	onItemFocus(index) {
		const element = this.listElementList.toArray()[index].nativeElement;
		element.classList.add("cds--list-box__menu-item--highlighted");
		element.tabIndex = 0;
	}

	onItemBlur(index) {
		const element = this.listElementList.toArray()[index].nativeElement;
		element.classList.remove("cds--list-box__menu-item--highlighted");
		element.tabIndex = -1;
	}

	/**
	 * Emits the scroll event of the options list
	 */
	emitScroll(event) {
		const atTop: boolean = event.srcElement.scrollTop === 0;
		const atBottom: boolean = event.srcElement.scrollHeight - event.srcElement.scrollTop === event.srcElement.clientHeight;
		const customScrollEvent = { atTop, atBottom, event };
		this.scroll.emit(customScrollEvent);
	}

	/**
	 * Subscribe the function passed to an internal observable that will resolve once the items are ready
	 */
	onItemsReady(subcription: () => void): void {
		// this subscription will auto unsubscribe because of the `first()` pipe
		(this._itemsReady || of(true)).pipe(first()).subscribe(subcription);
	}

	reorderSelected(moveFocus = true): void {
		this.displayItems = [...this.getSelected(), ...this.getListItems().filter(item => !item.selected)];
		if (moveFocus) {
			setTimeout(() => {
				this.updateIndex();
				this.highlightedItem = this.getItemId(this.index);
			});
		}
	}
}
