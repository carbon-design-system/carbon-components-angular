/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, ViewChildren, QueryList } from "@angular/core";
import { I18n } from "../../i18n/i18n.module";
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { watchFocusJump } from "./../dropdowntools";
import { isObservable } from "rxjs";
/**
 * ```html
 * <ibm-dropdown-list [items]="listItems"></ibm-dropdown-list>
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
export class DropdownList {
    /**
     * Creates an instance of `DropdownList`.
     * @param {?} elementRef
     * @param {?} i18n
     */
    constructor(elementRef, i18n) {
        this.elementRef = elementRef;
        this.i18n = i18n;
        this.ariaLabel = this.i18n.get().DROPDOWN_LIST.LABEL;
        /**
         * Template to bind to items in the `DropdownList` (optional).
         */
        this.listTpl = null;
        /**
         * Event to emit selection of a list item within the `DropdownList`.
         */
        this.select = new EventEmitter();
        /**
         * Event to suggest a blur on the view.
         * Emits _after_ the first/last item has been focused.
         * ex.
         * ArrowUp -> focus first item
         * ArrowUp -> emit event
         *
         * When this event fires focus should be placed on some element outside of the list - blurring the list as a result
         */
        this.blurIntent = new EventEmitter();
        /**
         * Defines whether or not the `DropdownList` supports selecting multiple items as opposed to single
         * item selection.
         */
        this.type = "single";
        /**
         * Defines the rendering size of the `DropdownList` input component.
         */
        this.size = "md";
        /**
         * Holds the list of items that will be displayed in the `DropdownList`.
         * It differs from the the complete set of items when filtering is used (but
         * it is always a subset of the total items in `DropdownList`).
         */
        this.displayItems = [];
        /**
         * Maintains the index for the selected item within the `DropdownList`.
         */
        this.index = -1;
        /**
         * Useful representation of the items, should be accessed via `getListItems`.
         */
        this._items = [];
    }
    /**
     * The list items belonging to the `DropdownList`.
     * @param {?} value
     * @return {?}
     */
    set items(value) {
        if (isObservable(value)) {
            if (this._itemsSubscription) {
                this._itemsSubscription.unsubscribe();
            }
            this._itemsSubscription = value.subscribe(v => this.updateList(v));
        }
        else {
            this.updateList(value);
        }
        this._originalItems = value;
    }
    /**
     * @return {?}
     */
    get items() {
        return this._originalItems;
    }
    /**
     * Retrieves array of list items and index of the selected item after view has rendered.
     * Additionally, any Observables for the `DropdownList` are initialized.
     * @return {?}
     */
    ngAfterViewInit() {
        this.index = this.getListItems().findIndex(item => item.selected);
        this.setupFocusObservable();
    }
    /**
     * Removes any Observables on destruction of the component.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.focusJump) {
            this.focusJump.unsubscribe();
        }
    }
    /**
     * Updates the displayed list of items and then retrieves the most current properties for the `DropdownList` from the DOM.
     * @param {?} items
     * @return {?}
     */
    updateList(items) {
        this._items = items.map(item => Object.assign({}, item));
        this.displayItems = this._items;
        this.index = this._items.findIndex(item => item.selected);
        this.setupFocusObservable();
        setTimeout(() => {
            if (!this.getSelected()) {
                return;
            }
            if (this.type === "single") {
                this.select.emit({ item: this._items.find(item => item.selected), isUpdate: true });
            }
            else {
                /** @type {?} */
                const selected = this.getSelected() || [];
                selected["isUpdate"] = true;
                this.select.emit(selected);
            }
        });
    }
    /**
     * Filters the items being displayed in the DOM list.
     * @param {?=} query
     * @return {?}
     */
    filterBy(query = "") {
        if (query) {
            this.displayItems = this.getListItems().filter(item => item.content.toLowerCase().includes(query.toLowerCase()));
        }
        else {
            this.displayItems = this.getListItems();
        }
        // reset the index since the list has changed visually
        this.index = 0;
    }
    /**
     * Initializes (or re-initializes) the Observable that handles switching focus to an element based on
     * key input matching the first letter of the item in the list.
     * @return {?}
     */
    setupFocusObservable() {
        if (this.focusJump) {
            this.focusJump.unsubscribe();
        }
        /** @type {?} */
        let elList = Array.from(this.list.nativeElement.querySelectorAll("li"));
        this.focusJump = watchFocusJump(this.list.nativeElement, elList)
            .subscribe(el => {
            el.focus();
        });
    }
    /**
     * Returns the `ListItem` that is subsequent to the selected item in the `DropdownList`.
     * @return {?}
     */
    getNextItem() {
        if (this.index < this.displayItems.length - 1) {
            this.index++;
        }
        return this.displayItems[this.index];
    }
    /**
     * Returns `true` if the selected item is not the last item in the `DropdownList`.
     * TODO: standardize
     * @return {?}
     */
    hasNextElement() {
        if (this.index < this.displayItems.length - 1) {
            return true;
        }
        return false;
    }
    /**
     * Returns the `HTMLElement` for the item that is subsequent to the selected item.
     * @return {?}
     */
    getNextElement() {
        if (this.index < this.displayItems.length - 1) {
            this.index++;
        }
        /** @type {?} */
        let elem = this.listElementList.toArray()[this.index].nativeElement;
        /** @type {?} */
        let item = this.displayItems[this.index];
        if (item.disabled) {
            return this.getNextElement();
        }
        return elem;
    }
    /**
     * Returns the `ListItem` that precedes the selected item within `DropdownList`.
     * @return {?}
     */
    getPrevItem() {
        if (this.index > 0) {
            this.index--;
        }
        return this.displayItems[this.index];
    }
    /**
     * Returns `true` if the selected item is not the first in the list.
     * TODO: standardize
     * @return {?}
     */
    hasPrevElement() {
        if (this.index > 0) {
            return true;
        }
        return false;
    }
    /**
     * Returns the `HTMLElement` for the item that precedes the selected item.
     * @return {?}
     */
    getPrevElement() {
        if (this.index > 0) {
            this.index--;
        }
        /** @type {?} */
        let elem = this.listElementList.toArray()[this.index].nativeElement;
        /** @type {?} */
        let item = this.displayItems[this.index];
        if (item.disabled) {
            return this.getPrevElement();
        }
        return elem;
    }
    /**
     * Returns the `ListItem` that is selected within `DropdownList`.
     * @return {?}
     */
    getCurrentItem() {
        if (this.index < 0) {
            return this.displayItems[0];
        }
        return this.displayItems[this.index];
    }
    /**
     * Returns the `HTMLElement` for the item that is selected within the `DropdownList`.
     * @return {?}
     */
    getCurrentElement() {
        if (this.index < 0) {
            return this.listElementList.first.nativeElement;
        }
        return this.listElementList.toArray()[this.index].nativeElement;
    }
    /**
     * Returns the items as an Array
     * @return {?}
     */
    getListItems() {
        return this._items;
    }
    /**
     * Returns a list containing the selected item(s) in the `DropdownList`.
     * @return {?}
     */
    getSelected() {
        /** @type {?} */
        let selected = this.getListItems().filter(item => item.selected);
        if (selected.length === 0) {
            return null;
        }
        return selected;
    }
    /**
     * Transforms array input list of items to the correct state by updating the selected item(s).
     * @param {?} value
     * @return {?}
     */
    propagateSelected(value) {
        // if we get a non-array, log out an error (since it is one)
        if (!Array.isArray(value)) {
            console.error(`${this.constructor.name}.propagateSelected expects an Array<ListItem>, got ${JSON.stringify(value)}`);
        }
        for (let newItem of value) {
            /** @type {?} */
            let tempNewItem = Object.assign({}, newItem);
            // deleted selected because it's what we _want_ to change
            delete tempNewItem.selected;
            // stringify for compare
            tempNewItem = JSON.stringify(tempNewItem);
            for (let oldItem of this.getListItems()) {
                /** @type {?} */
                let tempOldItem = Object.assign({}, oldItem);
                delete tempOldItem.selected;
                tempOldItem = JSON.stringify(tempOldItem);
                // do the compare
                if (tempOldItem.includes(tempNewItem)) {
                    // oldItem = Object.assign(oldItem, newItem);
                    oldItem.selected = newItem.selected;
                }
                else {
                    oldItem.selected = false;
                }
            }
        }
    }
    /**
     * Initializes focus in the list, effectively a wrapper for `getCurrentElement().focus()`
     * @return {?}
     */
    initFocus() {
        // ensure we start at this first item if nothing is already selected
        if (this.index < 0) {
            this.index = 0;
        }
        this.getCurrentElement().focus();
    }
    /**
     * Manages the keyboard accessibility for navigation and selection within a `DropdownList`.
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    doKeyDown(event, item) {
        // "Spacebar", "Down", and "Up" are IE specific values
        if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
            if (this.listElementList.some(option => option.nativeElement === event.target)) {
                event.preventDefault();
            }
            if (event.key === "Enter") {
                this.doClick(event, item);
            }
        }
        else if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Down" || event.key === "Up") {
            event.preventDefault();
            if (event.key === "ArrowDown" || event.key === "Down") {
                if (this.hasNextElement()) {
                    this.getNextElement().focus();
                }
                else {
                    this.blurIntent.emit("bottom");
                }
            }
            else if (event.key === "ArrowUp" || event.key === "Up") {
                if (this.hasPrevElement()) {
                    this.getPrevElement().focus();
                }
                else {
                    this.blurIntent.emit("top");
                }
            }
        }
    }
    /**
     * Emits the selected item or items after a mouse click event has occurred.
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    doClick(event, item) {
        event.preventDefault();
        if (!item.disabled) {
            if (this.type === "single") {
                item.selected = true;
                // reset the selection
                for (let otherItem of this.getListItems()) {
                    if (item !== otherItem) {
                        otherItem.selected = false;
                    }
                }
                this.select.emit({ item });
            }
            else {
                item.selected = !item.selected;
                // emit an array of selected items
                this.select.emit(this.getSelected());
            }
            this.index = this.getListItems().indexOf(item);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onItemFocus(index) {
        /** @type {?} */
        const element = this.listElementList.toArray()[index].nativeElement;
        element.classList.add("bx--list-box__menu-item--highlighted");
        element.tabIndex = 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onItemBlur(index) {
        /** @type {?} */
        const element = this.listElementList.toArray()[index].nativeElement;
        element.classList.remove("bx--list-box__menu-item--highlighted");
        element.tabIndex = -1;
    }
}
DropdownList.decorators = [
    { type: Component, args: [{
                selector: "ibm-dropdown-list",
                template: `
		<ul
			#list
			role="listbox"
			class="bx--list-box__menu bx--multi-select"
			[attr.aria-label]="ariaLabel">
			<li
				role="option"
				*ngFor="let item of displayItems; let i = index"
				(click)="doClick($event, item)"
				(keydown)="doKeyDown($event, item)"
				(focus)="onItemFocus(i)"
				(blur)="onItemBlur(i)"
				class="bx--list-box__menu-item"
				[ngClass]="{
					'bx--list-box__menu-item--active': item.selected,
					disabled: item.disabled
				}">
				<div
					#listItem
					tabindex="-1"
					class="bx--list-box__menu-item__option">
					<div
						*ngIf="!listTpl && type === 'multi'"
						class="bx--form-item bx--checkbox-wrapper">
						<label
							[attr.data-contained-checkbox-state]="item.selected"
							class="bx--checkbox-label">
							<input
								class="bx--checkbox"
								type="checkbox"
								[checked]="item.selected"
								[disabled]="item.disabled"
								tabindex="-1">
							<span class="bx--checkbox-appearance"></span>
							<span class="bx--checkbox-label-text">{{item.content}}</span>
						</label>
					</div>
					<ng-container *ngIf="!listTpl && type === 'single'">{{item.content}}</ng-container>
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
            }] }
];
/** @nocollapse */
DropdownList.ctorParameters = () => [
    { type: ElementRef },
    { type: I18n }
];
DropdownList.propDecorators = {
    ariaLabel: [{ type: Input }],
    items: [{ type: Input }],
    listTpl: [{ type: Input }],
    select: [{ type: Output }],
    blurIntent: [{ type: Output }],
    list: [{ type: ViewChild, args: ["list",] }],
    type: [{ type: Input }],
    listElementList: [{ type: ViewChildren, args: ["listItem",] }]
};
function DropdownList_tsickle_Closure_declarations() {
    /** @type {?} */
    DropdownList.prototype.ariaLabel;
    /**
     * Template to bind to items in the `DropdownList` (optional).
     * @type {?}
     */
    DropdownList.prototype.listTpl;
    /**
     * Event to emit selection of a list item within the `DropdownList`.
     * @type {?}
     */
    DropdownList.prototype.select;
    /**
     * Event to suggest a blur on the view.
     * Emits _after_ the first/last item has been focused.
     * ex.
     * ArrowUp -> focus first item
     * ArrowUp -> emit event
     *
     * When this event fires focus should be placed on some element outside of the list - blurring the list as a result
     * @type {?}
     */
    DropdownList.prototype.blurIntent;
    /**
     * Maintains a reference to the view DOM element for the unordered list of items within the `DropdownList`.
     * @type {?}
     */
    DropdownList.prototype.list;
    /**
     * Defines whether or not the `DropdownList` supports selecting multiple items as opposed to single
     * item selection.
     * @type {?}
     */
    DropdownList.prototype.type;
    /**
     * Defines the rendering size of the `DropdownList` input component.
     * @type {?}
     */
    DropdownList.prototype.size;
    /**
     * Holds the list of items that will be displayed in the `DropdownList`.
     * It differs from the the complete set of items when filtering is used (but
     * it is always a subset of the total items in `DropdownList`).
     * @type {?}
     */
    DropdownList.prototype.displayItems;
    /**
     * Maintains the index for the selected item within the `DropdownList`.
     * @type {?}
     */
    DropdownList.prototype.index;
    /**
     * An array holding the HTML list elements in the view.
     * @type {?}
     */
    DropdownList.prototype.listElementList;
    /**
     * Observable bound to keydown events to control filtering.
     * @type {?}
     */
    DropdownList.prototype.focusJump;
    /**
     * Tracks the current (if any) subscription to the items observable so we can clean up when the input is updated.
     * @type {?}
     */
    DropdownList.prototype._itemsSubscription;
    /**
     * Used to retain the original items passed to the setter.
     * @type {?}
     */
    DropdownList.prototype._originalItems;
    /**
     * Useful representation of the items, should be accessed via `getListItems`.
     * @type {?}
     */
    DropdownList.prototype._items;
    /** @type {?} */
    DropdownList.prototype.elementRef;
    /** @type {?} */
    DropdownList.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZHJvcGRvd24vbGlzdC9kcm9wZG93bi1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFHWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixTQUFTLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQWMsWUFBWSxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvRjlELE1BQU07Ozs7OztJQXFGTCxZQUFtQixVQUFzQixFQUFZLElBQVU7UUFBNUMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFZLFNBQUksR0FBSixJQUFJLENBQU07eUJBcEYxQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLOzs7O3VCQXNCVixJQUFJOzs7O3NCQUlULElBQUksWUFBWSxFQUFVOzs7Ozs7Ozs7OzBCQVU1QyxJQUFJLFlBQVksRUFBb0I7Ozs7O29CQVN2QixRQUFROzs7O29CQUlWLElBQUk7Ozs7Ozs0QkFNQyxFQUFFOzs7O3FCQUl2QixDQUFDLENBQUM7Ozs7c0JBb0JnQixFQUFFO0tBSzZCOzs7Ozs7SUFoRm5FLElBQWEsS0FBSyxDQUFFLEtBQW9EO1FBQ3ZFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFF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WSxTQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdE9uRGVzdHJveSxcblx0RXZlbnRFbWl0dGVyLFxuXHRUZW1wbGF0ZVJlZixcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Vmlld0NoaWxkLFxuXHRFbGVtZW50UmVmLFxuXHRWaWV3Q2hpbGRyZW4sXG5cdFF1ZXJ5TGlzdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJMThuIH0gZnJvbSBcIi4uLy4uL2kxOG4vaTE4bi5tb2R1bGVcIjtcbmltcG9ydCB7IEFic3RyYWN0RHJvcGRvd25WaWV3IH0gZnJvbSBcIi4vLi4vYWJzdHJhY3QtZHJvcGRvd24tdmlldy5jbGFzc1wiO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tIFwiLi8uLi9saXN0LWl0ZW0uaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB3YXRjaEZvY3VzSnVtcCB9IGZyb20gXCIuLy4uL2Ryb3Bkb3dudG9vbHNcIjtcbmltcG9ydCB7IFNjcm9sbGFibGVMaXN0IH0gZnJvbSBcIi4vLi4vc2Nyb2xsYWJsZS1saXN0LmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgaXNPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuXG5cbi8qKlxuICogYGBgaHRtbFxuICogPGlibS1kcm9wZG93bi1saXN0IFtpdGVtc109XCJsaXN0SXRlbXNcIj48L2libS1kcm9wZG93bi1saXN0PlxuICogYGBgXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBsaXN0SXRlbXMgPSBbXG4gKiBcdHtcbiAqIFx0XHRjb250ZW50OiBcIml0ZW0gb25lXCIsXG4gKiBcdFx0c2VsZWN0ZWQ6IGZhbHNlXG4gKiBcdH0sXG4gKiBcdHtcbiAqIFx0XHRjb250ZW50OiBcIml0ZW0gdHdvXCIsXG4gKiBcdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuICogXHR9LFxuICogXHR7XG4gKiBcdFx0Y29udGVudDogXCJpdGVtIHRocmVlXCIsXG4gKiBcdFx0c2VsZWN0ZWQ6IGZhbHNlXG4gKiBcdH0sXG4gKiBcdHtcbiAqIFx0XHRjb250ZW50OiBcIml0ZW0gZm91clwiLFxuICogXHRcdHNlbGVjdGVkOiBmYWxzZVxuICogXHR9XG4gKiBdO1xuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tZHJvcGRvd24tbGlzdFwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDx1bFxuXHRcdFx0I2xpc3Rcblx0XHRcdHJvbGU9XCJsaXN0Ym94XCJcblx0XHRcdGNsYXNzPVwiYngtLWxpc3QtYm94X19tZW51IGJ4LS1tdWx0aS1zZWxlY3RcIlxuXHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIj5cblx0XHRcdDxsaVxuXHRcdFx0XHRyb2xlPVwib3B0aW9uXCJcblx0XHRcdFx0Km5nRm9yPVwibGV0IGl0ZW0gb2YgZGlzcGxheUl0ZW1zOyBsZXQgaSA9IGluZGV4XCJcblx0XHRcdFx0KGNsaWNrKT1cImRvQ2xpY2soJGV2ZW50LCBpdGVtKVwiXG5cdFx0XHRcdChrZXlkb3duKT1cImRvS2V5RG93bigkZXZlbnQsIGl0ZW0pXCJcblx0XHRcdFx0KGZvY3VzKT1cIm9uSXRlbUZvY3VzKGkpXCJcblx0XHRcdFx0KGJsdXIpPVwib25JdGVtQmx1cihpKVwiXG5cdFx0XHRcdGNsYXNzPVwiYngtLWxpc3QtYm94X19tZW51LWl0ZW1cIlxuXHRcdFx0XHRbbmdDbGFzc109XCJ7XG5cdFx0XHRcdFx0J2J4LS1saXN0LWJveF9fbWVudS1pdGVtLS1hY3RpdmUnOiBpdGVtLnNlbGVjdGVkLFxuXHRcdFx0XHRcdGRpc2FibGVkOiBpdGVtLmRpc2FibGVkXG5cdFx0XHRcdH1cIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdCNsaXN0SXRlbVxuXHRcdFx0XHRcdHRhYmluZGV4PVwiLTFcIlxuXHRcdFx0XHRcdGNsYXNzPVwiYngtLWxpc3QtYm94X19tZW51LWl0ZW1fX29wdGlvblwiPlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdCpuZ0lmPVwiIWxpc3RUcGwgJiYgdHlwZSA9PT0gJ211bHRpJ1wiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImJ4LS1mb3JtLWl0ZW0gYngtLWNoZWNrYm94LXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdDxsYWJlbFxuXHRcdFx0XHRcdFx0XHRbYXR0ci5kYXRhLWNvbnRhaW5lZC1jaGVja2JveC1zdGF0ZV09XCJpdGVtLnNlbGVjdGVkXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJieC0tY2hlY2tib3gtbGFiZWxcIj5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJieC0tY2hlY2tib3hcIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHRcdFx0XHRcdFx0W2NoZWNrZWRdPVwiaXRlbS5zZWxlY3RlZFwiXG5cdFx0XHRcdFx0XHRcdFx0W2Rpc2FibGVkXT1cIml0ZW0uZGlzYWJsZWRcIlxuXHRcdFx0XHRcdFx0XHRcdHRhYmluZGV4PVwiLTFcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJieC0tY2hlY2tib3gtYXBwZWFyYW5jZVwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJieC0tY2hlY2tib3gtbGFiZWwtdGV4dFwiPnt7aXRlbS5jb250ZW50fX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhbGlzdFRwbCAmJiB0eXBlID09PSAnc2luZ2xlJ1wiPnt7aXRlbS5jb250ZW50fX08L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGVcblx0XHRcdFx0XHRcdCpuZ0lmPVwibGlzdFRwbFwiXG5cdFx0XHRcdFx0XHRbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2l0ZW06IGl0ZW19XCJcblx0XHRcdFx0XHRcdFtuZ1RlbXBsYXRlT3V0bGV0XT1cImxpc3RUcGxcIj5cblx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbGk+XG5cdFx0PC91bD5gLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBBYnN0cmFjdERyb3Bkb3duVmlldyxcblx0XHRcdHVzZUV4aXN0aW5nOiBEcm9wZG93bkxpc3Rcblx0XHR9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25MaXN0IGltcGxlbWVudHMgQWJzdHJhY3REcm9wZG93blZpZXcsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cdEBJbnB1dCgpIGFyaWFMYWJlbCA9IHRoaXMuaTE4bi5nZXQoKS5EUk9QRE9XTl9MSVNULkxBQkVMO1xuXHQvKipcblx0ICogVGhlIGxpc3QgaXRlbXMgYmVsb25naW5nIHRvIHRoZSBgRHJvcGRvd25MaXN0YC5cblx0ICovXG5cdEBJbnB1dCgpIHNldCBpdGVtcyAodmFsdWU6IEFycmF5PExpc3RJdGVtPiB8IE9ic2VydmFibGU8QXJyYXk8TGlzdEl0ZW0+Pikge1xuXHRcdGlmIChpc09ic2VydmFibGUodmFsdWUpKSB7XG5cdFx0XHRpZiAodGhpcy5faXRlbXNTdWJzY3JpcHRpb24pIHtcblx0XHRcdFx0dGhpcy5faXRlbXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2l0ZW1zU3Vic2NyaXB0aW9uID0gdmFsdWUuc3Vic2NyaWJlKHYgPT4gdGhpcy51cGRhdGVMaXN0KHYpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy51cGRhdGVMaXN0KHZhbHVlKTtcblx0XHR9XG5cdFx0dGhpcy5fb3JpZ2luYWxJdGVtcyA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IGl0ZW1zKCk6IEFycmF5PExpc3RJdGVtPiB8IE9ic2VydmFibGU8QXJyYXk8TGlzdEl0ZW0+PiB7XG5cdFx0cmV0dXJuIHRoaXMuX29yaWdpbmFsSXRlbXM7XG5cdH1cblx0LyoqXG5cdCAqIFRlbXBsYXRlIHRvIGJpbmQgdG8gaXRlbXMgaW4gdGhlIGBEcm9wZG93bkxpc3RgIChvcHRpb25hbCkuXG5cdCAqL1xuXHRASW5wdXQoKSBsaXN0VHBsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcblx0LyoqXG5cdCAqIEV2ZW50IHRvIGVtaXQgc2VsZWN0aW9uIG9mIGEgbGlzdCBpdGVtIHdpdGhpbiB0aGUgYERyb3Bkb3duTGlzdGAuXG5cdCAqL1xuXHRAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xuXHQvKipcblx0ICogRXZlbnQgdG8gc3VnZ2VzdCBhIGJsdXIgb24gdGhlIHZpZXcuXG5cdCAqIEVtaXRzIF9hZnRlcl8gdGhlIGZpcnN0L2xhc3QgaXRlbSBoYXMgYmVlbiBmb2N1c2VkLlxuXHQgKiBleC5cblx0ICogQXJyb3dVcCAtPiBmb2N1cyBmaXJzdCBpdGVtXG5cdCAqIEFycm93VXAgLT4gZW1pdCBldmVudFxuXHQgKlxuXHQgKiBXaGVuIHRoaXMgZXZlbnQgZmlyZXMgZm9jdXMgc2hvdWxkIGJlIHBsYWNlZCBvbiBzb21lIGVsZW1lbnQgb3V0c2lkZSBvZiB0aGUgbGlzdCAtIGJsdXJyaW5nIHRoZSBsaXN0IGFzIGEgcmVzdWx0XG5cdCAqL1xuXHRAT3V0cHV0KCkgYmx1ckludGVudCA9IG5ldyBFdmVudEVtaXR0ZXI8XCJ0b3BcIiB8IFwiYm90dG9tXCI+KCk7XG5cdC8qKlxuXHQgKiBNYWludGFpbnMgYSByZWZlcmVuY2UgdG8gdGhlIHZpZXcgRE9NIGVsZW1lbnQgZm9yIHRoZSB1bm9yZGVyZWQgbGlzdCBvZiBpdGVtcyB3aXRoaW4gdGhlIGBEcm9wZG93bkxpc3RgLlxuXHQgKi9cblx0QFZpZXdDaGlsZChcImxpc3RcIikgbGlzdDogRWxlbWVudFJlZjtcblx0LyoqXG5cdCAqIERlZmluZXMgd2hldGhlciBvciBub3QgdGhlIGBEcm9wZG93bkxpc3RgIHN1cHBvcnRzIHNlbGVjdGluZyBtdWx0aXBsZSBpdGVtcyBhcyBvcHBvc2VkIHRvIHNpbmdsZVxuXHQgKiBpdGVtIHNlbGVjdGlvbi5cblx0ICovXG5cdEBJbnB1dCgpIHR5cGU6IFwic2luZ2xlXCIgfCBcIm11bHRpXCIgPSBcInNpbmdsZVwiO1xuXHQvKipcblx0ICogRGVmaW5lcyB0aGUgcmVuZGVyaW5nIHNpemUgb2YgdGhlIGBEcm9wZG93bkxpc3RgIGlucHV0IGNvbXBvbmVudC5cblx0ICovXG5cdHB1YmxpYyBzaXplOiBcInNtXCIgfCBcIm1kXCIgfCBcImxnXCIgPSBcIm1kXCI7XG5cdC8qKlxuXHQgKiBIb2xkcyB0aGUgbGlzdCBvZiBpdGVtcyB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBgRHJvcGRvd25MaXN0YC5cblx0ICogSXQgZGlmZmVycyBmcm9tIHRoZSB0aGUgY29tcGxldGUgc2V0IG9mIGl0ZW1zIHdoZW4gZmlsdGVyaW5nIGlzIHVzZWQgKGJ1dFxuXHQgKiBpdCBpcyBhbHdheXMgYSBzdWJzZXQgb2YgdGhlIHRvdGFsIGl0ZW1zIGluIGBEcm9wZG93bkxpc3RgKS5cblx0ICovXG5cdHB1YmxpYyBkaXNwbGF5SXRlbXM6IEFycmF5PExpc3RJdGVtPiA9IFtdO1xuXHQvKipcblx0ICogTWFpbnRhaW5zIHRoZSBpbmRleCBmb3IgdGhlIHNlbGVjdGVkIGl0ZW0gd2l0aGluIHRoZSBgRHJvcGRvd25MaXN0YC5cblx0ICovXG5cdHByb3RlY3RlZCBpbmRleCA9IC0xO1xuXHQvKipcblx0ICogQW4gYXJyYXkgaG9sZGluZyB0aGUgSFRNTCBsaXN0IGVsZW1lbnRzIGluIHRoZSB2aWV3LlxuXHQgKi9cblx0QFZpZXdDaGlsZHJlbihcImxpc3RJdGVtXCIpIHByb3RlY3RlZCBsaXN0RWxlbWVudExpc3Q6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblx0LyoqXG5cdCAqIE9ic2VydmFibGUgYm91bmQgdG8ga2V5ZG93biBldmVudHMgdG8gY29udHJvbCBmaWx0ZXJpbmcuXG5cdCAqL1xuXHRwcm90ZWN0ZWQgZm9jdXNKdW1wO1xuXHQvKipcblx0ICogVHJhY2tzIHRoZSBjdXJyZW50IChpZiBhbnkpIHN1YnNjcmlwdGlvbiB0byB0aGUgaXRlbXMgb2JzZXJ2YWJsZSBzbyB3ZSBjYW4gY2xlYW4gdXAgd2hlbiB0aGUgaW5wdXQgaXMgdXBkYXRlZC5cblx0ICovXG5cdHByb3RlY3RlZCBfaXRlbXNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblx0LyoqXG5cdCAqIFVzZWQgdG8gcmV0YWluIHRoZSBvcmlnaW5hbCBpdGVtcyBwYXNzZWQgdG8gdGhlIHNldHRlci5cblx0ICovXG5cdHByb3RlY3RlZCBfb3JpZ2luYWxJdGVtczogQXJyYXk8TGlzdEl0ZW0+IHwgT2JzZXJ2YWJsZTxBcnJheTxMaXN0SXRlbT4+O1xuXHQvKipcblx0ICogVXNlZnVsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBpdGVtcywgc2hvdWxkIGJlIGFjY2Vzc2VkIHZpYSBgZ2V0TGlzdEl0ZW1zYC5cblx0ICovXG5cdHByb3RlY3RlZCBfaXRlbXM6IEFycmF5PExpc3RJdGVtPiA9IFtdO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGBEcm9wZG93bkxpc3RgLlxuXHQgKi9cblx0Y29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBpMThuOiBJMThuKSB7fVxuXG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgYXJyYXkgb2YgbGlzdCBpdGVtcyBhbmQgaW5kZXggb2YgdGhlIHNlbGVjdGVkIGl0ZW0gYWZ0ZXIgdmlldyBoYXMgcmVuZGVyZWQuXG5cdCAqIEFkZGl0aW9uYWxseSwgYW55IE9ic2VydmFibGVzIGZvciB0aGUgYERyb3Bkb3duTGlzdGAgYXJlIGluaXRpYWxpemVkLlxuXHQgKi9cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuaW5kZXggPSB0aGlzLmdldExpc3RJdGVtcygpLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpO1xuXHRcdHRoaXMuc2V0dXBGb2N1c09ic2VydmFibGUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIGFueSBPYnNlcnZhYmxlcyBvbiBkZXN0cnVjdGlvbiBvZiB0aGUgY29tcG9uZW50LlxuXHQgKi9cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMuZm9jdXNKdW1wKSB7XG5cdFx0XHR0aGlzLmZvY3VzSnVtcC51bnN1YnNjcmliZSgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSBkaXNwbGF5ZWQgbGlzdCBvZiBpdGVtcyBhbmQgdGhlbiByZXRyaWV2ZXMgdGhlIG1vc3QgY3VycmVudCBwcm9wZXJ0aWVzIGZvciB0aGUgYERyb3Bkb3duTGlzdGAgZnJvbSB0aGUgRE9NLlxuXHQgKi9cblx0dXBkYXRlTGlzdChpdGVtcykge1xuXHRcdHRoaXMuX2l0ZW1zID0gaXRlbXMubWFwKGl0ZW0gPT4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSkpO1xuXHRcdHRoaXMuZGlzcGxheUl0ZW1zID0gdGhpcy5faXRlbXM7XG5cdFx0dGhpcy5pbmRleCA9IHRoaXMuX2l0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpO1xuXHRcdHRoaXMuc2V0dXBGb2N1c09ic2VydmFibGUoKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGlmICghdGhpcy5nZXRTZWxlY3RlZCgpKSB7IHJldHVybjsgfVxuXHRcdFx0aWYgKHRoaXMudHlwZSA9PT0gXCJzaW5nbGVcIikge1xuXHRcdFx0XHR0aGlzLnNlbGVjdC5lbWl0KHsgaXRlbTogdGhpcy5faXRlbXMuZmluZChpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpLCBpc1VwZGF0ZTogdHJ1ZSB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGFidXNlIGphdmFzY3JpcHRzIG9iamVjdCBtdXRhYmlsaXR5IHVudGlsIHdlIGNhbiBicmVhayB0aGUgQVBJIGFuZCBzd2l0Y2ggdG9cblx0XHRcdFx0Ly8geyBpdGVtczogW10sIGlzVXBkYXRlOiB0cnVlIH1cblx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmdldFNlbGVjdGVkKCkgfHwgW107XG5cdFx0XHRcdHNlbGVjdGVkW1wiaXNVcGRhdGVcIl0gPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnNlbGVjdC5lbWl0KHNlbGVjdGVkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaWx0ZXJzIHRoZSBpdGVtcyBiZWluZyBkaXNwbGF5ZWQgaW4gdGhlIERPTSBsaXN0LlxuXHQgKi9cblx0ZmlsdGVyQnkocXVlcnkgPSBcIlwiKSB7XG5cdFx0aWYgKHF1ZXJ5KSB7XG5cdFx0XHR0aGlzLmRpc3BsYXlJdGVtcyA9IHRoaXMuZ2V0TGlzdEl0ZW1zKCkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jb250ZW50LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRpc3BsYXlJdGVtcyA9IHRoaXMuZ2V0TGlzdEl0ZW1zKCk7XG5cdFx0fVxuXHRcdC8vIHJlc2V0IHRoZSBpbmRleCBzaW5jZSB0aGUgbGlzdCBoYXMgY2hhbmdlZCB2aXN1YWxseVxuXHRcdHRoaXMuaW5kZXggPSAwO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIChvciByZS1pbml0aWFsaXplcykgdGhlIE9ic2VydmFibGUgdGhhdCBoYW5kbGVzIHN3aXRjaGluZyBmb2N1cyB0byBhbiBlbGVtZW50IGJhc2VkIG9uXG5cdCAqIGtleSBpbnB1dCBtYXRjaGluZyB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBpdGVtIGluIHRoZSBsaXN0LlxuXHQgKi9cblx0c2V0dXBGb2N1c09ic2VydmFibGUoKSB7XG5cdFx0aWYgKHRoaXMuZm9jdXNKdW1wKSB7XG5cdFx0XHR0aGlzLmZvY3VzSnVtcC51bnN1YnNjcmliZSgpO1xuXHRcdH1cblx0XHRsZXQgZWxMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLmxpc3QubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIikpO1xuXHRcdHRoaXMuZm9jdXNKdW1wID0gd2F0Y2hGb2N1c0p1bXAodGhpcy5saXN0Lm5hdGl2ZUVsZW1lbnQsIGVsTGlzdClcblx0XHRcdC5zdWJzY3JpYmUoZWwgPT4ge1xuXHRcdFx0XHRlbC5mb2N1cygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYExpc3RJdGVtYCB0aGF0IGlzIHN1YnNlcXVlbnQgdG8gdGhlIHNlbGVjdGVkIGl0ZW0gaW4gdGhlIGBEcm9wZG93bkxpc3RgLlxuXHQgKi9cblx0Z2V0TmV4dEl0ZW0oKTogTGlzdEl0ZW0ge1xuXHRcdGlmICh0aGlzLmluZGV4IDwgdGhpcy5kaXNwbGF5SXRlbXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0dGhpcy5pbmRleCsrO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5kaXNwbGF5SXRlbXNbdGhpcy5pbmRleF07XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHNlbGVjdGVkIGl0ZW0gaXMgbm90IHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGBEcm9wZG93bkxpc3RgLlxuXHQgKiBUT0RPOiBzdGFuZGFyZGl6ZVxuXHQgKi9cblx0aGFzTmV4dEVsZW1lbnQoKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuaW5kZXggPCB0aGlzLmRpc3BsYXlJdGVtcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGBIVE1MRWxlbWVudGAgZm9yIHRoZSBpdGVtIHRoYXQgaXMgc3Vic2VxdWVudCB0byB0aGUgc2VsZWN0ZWQgaXRlbS5cblx0ICovXG5cdGdldE5leHRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcblx0XHRpZiAodGhpcy5pbmRleCA8IHRoaXMuZGlzcGxheUl0ZW1zLmxlbmd0aCAtIDEpIHtcblx0XHRcdHRoaXMuaW5kZXgrKztcblx0XHR9XG5cdFx0bGV0IGVsZW0gPSB0aGlzLmxpc3RFbGVtZW50TGlzdC50b0FycmF5KClbdGhpcy5pbmRleF0ubmF0aXZlRWxlbWVudDtcblx0XHRsZXQgaXRlbSA9IHRoaXMuZGlzcGxheUl0ZW1zW3RoaXMuaW5kZXhdO1xuXHRcdGlmIChpdGVtLmRpc2FibGVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXROZXh0RWxlbWVudCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gZWxlbTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBgTGlzdEl0ZW1gIHRoYXQgcHJlY2VkZXMgdGhlIHNlbGVjdGVkIGl0ZW0gd2l0aGluIGBEcm9wZG93bkxpc3RgLlxuXHQgKi9cblx0Z2V0UHJldkl0ZW0oKTogTGlzdEl0ZW0ge1xuXHRcdGlmICh0aGlzLmluZGV4ID4gMCkge1xuXHRcdFx0dGhpcy5pbmRleC0tO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5kaXNwbGF5SXRlbXNbdGhpcy5pbmRleF07XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHNlbGVjdGVkIGl0ZW0gaXMgbm90IHRoZSBmaXJzdCBpbiB0aGUgbGlzdC5cblx0ICogVE9ETzogc3RhbmRhcmRpemVcblx0ICovXG5cdGhhc1ByZXZFbGVtZW50KCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmluZGV4ID4gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBgSFRNTEVsZW1lbnRgIGZvciB0aGUgaXRlbSB0aGF0IHByZWNlZGVzIHRoZSBzZWxlY3RlZCBpdGVtLlxuXHQgKi9cblx0Z2V0UHJldkVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuXHRcdGlmICh0aGlzLmluZGV4ID4gMCkge1xuXHRcdFx0dGhpcy5pbmRleC0tO1xuXHRcdH1cblx0XHRsZXQgZWxlbSA9IHRoaXMubGlzdEVsZW1lbnRMaXN0LnRvQXJyYXkoKVt0aGlzLmluZGV4XS5uYXRpdmVFbGVtZW50O1xuXHRcdGxldCBpdGVtID0gdGhpcy5kaXNwbGF5SXRlbXNbdGhpcy5pbmRleF07XG5cdFx0aWYgKGl0ZW0uZGlzYWJsZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFByZXZFbGVtZW50KCk7XG5cdFx0fVxuXHRcdHJldHVybiBlbGVtO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGBMaXN0SXRlbWAgdGhhdCBpcyBzZWxlY3RlZCB3aXRoaW4gYERyb3Bkb3duTGlzdGAuXG5cdCAqL1xuXHRnZXRDdXJyZW50SXRlbSgpOiBMaXN0SXRlbSB7XG5cdFx0aWYgKHRoaXMuaW5kZXggPCAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kaXNwbGF5SXRlbXNbMF07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmRpc3BsYXlJdGVtc1t0aGlzLmluZGV4XTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBgSFRNTEVsZW1lbnRgIGZvciB0aGUgaXRlbSB0aGF0IGlzIHNlbGVjdGVkIHdpdGhpbiB0aGUgYERyb3Bkb3duTGlzdGAuXG5cdCAqL1xuXHRnZXRDdXJyZW50RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggPCAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5saXN0RWxlbWVudExpc3QuZmlyc3QubmF0aXZlRWxlbWVudDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubGlzdEVsZW1lbnRMaXN0LnRvQXJyYXkoKVt0aGlzLmluZGV4XS5uYXRpdmVFbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGl0ZW1zIGFzIGFuIEFycmF5XG5cdCAqL1xuXHRnZXRMaXN0SXRlbXMoKTogQXJyYXk8TGlzdEl0ZW0+IHtcblx0XHRyZXR1cm4gdGhpcy5faXRlbXM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhIGxpc3QgY29udGFpbmluZyB0aGUgc2VsZWN0ZWQgaXRlbShzKSBpbiB0aGUgYERyb3Bkb3duTGlzdGAuXG5cdCAqL1xuXHRnZXRTZWxlY3RlZCgpOiBMaXN0SXRlbVtdIHtcblx0XHRsZXQgc2VsZWN0ZWQgPSB0aGlzLmdldExpc3RJdGVtcygpLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpO1xuXHRcdGlmIChzZWxlY3RlZC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gc2VsZWN0ZWQ7XG5cdH1cblxuXHQvKipcblx0ICogVHJhbnNmb3JtcyBhcnJheSBpbnB1dCBsaXN0IG9mIGl0ZW1zIHRvIHRoZSBjb3JyZWN0IHN0YXRlIGJ5IHVwZGF0aW5nIHRoZSBzZWxlY3RlZCBpdGVtKHMpLlxuXHQgKi9cblx0cHJvcGFnYXRlU2VsZWN0ZWQodmFsdWU6IEFycmF5PExpc3RJdGVtPik6IHZvaWQge1xuXHRcdC8vIGlmIHdlIGdldCBhIG5vbi1hcnJheSwgbG9nIG91dCBhbiBlcnJvciAoc2luY2UgaXQgaXMgb25lKVxuXHRcdGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5wcm9wYWdhdGVTZWxlY3RlZCBleHBlY3RzIGFuIEFycmF5PExpc3RJdGVtPiwgZ290ICR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfWApO1xuXHRcdH1cblx0XHRmb3IgKGxldCBuZXdJdGVtIG9mIHZhbHVlKSB7XG5cdFx0XHQvLyBjb3B5IHRoZSBpdGVtXG5cdFx0XHRsZXQgdGVtcE5ld0l0ZW06IHN0cmluZyB8IExpc3RJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgbmV3SXRlbSk7XG5cdFx0XHQvLyBkZWxldGVkIHNlbGVjdGVkIGJlY2F1c2UgaXQncyB3aGF0IHdlIF93YW50XyB0byBjaGFuZ2Vcblx0XHRcdGRlbGV0ZSB0ZW1wTmV3SXRlbS5zZWxlY3RlZDtcblx0XHRcdC8vIHN0cmluZ2lmeSBmb3IgY29tcGFyZVxuXHRcdFx0dGVtcE5ld0l0ZW0gPSBKU09OLnN0cmluZ2lmeSh0ZW1wTmV3SXRlbSk7XG5cdFx0XHRmb3IgKGxldCBvbGRJdGVtIG9mIHRoaXMuZ2V0TGlzdEl0ZW1zKCkpIHtcblx0XHRcdFx0bGV0IHRlbXBPbGRJdGVtOiBzdHJpbmcgfCBMaXN0SXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIG9sZEl0ZW0pO1xuXHRcdFx0XHRkZWxldGUgdGVtcE9sZEl0ZW0uc2VsZWN0ZWQ7XG5cdFx0XHRcdHRlbXBPbGRJdGVtID0gSlNPTi5zdHJpbmdpZnkodGVtcE9sZEl0ZW0pO1xuXHRcdFx0XHQvLyBkbyB0aGUgY29tcGFyZVxuXHRcdFx0XHRpZiAodGVtcE9sZEl0ZW0uaW5jbHVkZXModGVtcE5ld0l0ZW0pKSB7XG5cdFx0XHRcdFx0Ly8gb2xkSXRlbSA9IE9iamVjdC5hc3NpZ24ob2xkSXRlbSwgbmV3SXRlbSk7XG5cdFx0XHRcdFx0b2xkSXRlbS5zZWxlY3RlZCA9IG5ld0l0ZW0uc2VsZWN0ZWQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b2xkSXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIGZvY3VzIGluIHRoZSBsaXN0LCBlZmZlY3RpdmVseSBhIHdyYXBwZXIgZm9yIGBnZXRDdXJyZW50RWxlbWVudCgpLmZvY3VzKClgXG5cdCAqL1xuXHRpbml0Rm9jdXMoKSB7XG5cdFx0Ly8gZW5zdXJlIHdlIHN0YXJ0IGF0IHRoaXMgZmlyc3QgaXRlbSBpZiBub3RoaW5nIGlzIGFscmVhZHkgc2VsZWN0ZWRcblx0XHRpZiAodGhpcy5pbmRleCA8IDApIHtcblx0XHRcdHRoaXMuaW5kZXggPSAwO1xuXHRcdH1cblx0XHR0aGlzLmdldEN1cnJlbnRFbGVtZW50KCkuZm9jdXMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYW5hZ2VzIHRoZSBrZXlib2FyZCBhY2Nlc3NpYmlsaXR5IGZvciBuYXZpZ2F0aW9uIGFuZCBzZWxlY3Rpb24gd2l0aGluIGEgYERyb3Bkb3duTGlzdGAuXG5cdCAqL1xuXHRkb0tleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGl0ZW06IExpc3RJdGVtKSB7XG5cdFx0Ly8gXCJTcGFjZWJhclwiLCBcIkRvd25cIiwgYW5kIFwiVXBcIiBhcmUgSUUgc3BlY2lmaWMgdmFsdWVzXG5cdFx0aWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiIHx8IGV2ZW50LmtleSA9PT0gXCIgXCIgfHwgZXZlbnQua2V5ID09PSBcIlNwYWNlYmFyXCIpIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdEVsZW1lbnRMaXN0LnNvbWUob3B0aW9uID0+IG9wdGlvbi5uYXRpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcblx0XHRcdFx0XHR0aGlzLmRvQ2xpY2soZXZlbnQsIGl0ZW0pO1xuXHRcdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIgfHwgZXZlbnQua2V5ID09PSBcIkFycm93VXBcIiB8fCBldmVudC5rZXkgPT09IFwiRG93blwiIHx8IGV2ZW50LmtleSA9PT0gXCJVcFwiKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0Rvd25cIiB8fCBldmVudC5rZXkgPT09IFwiRG93blwiKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhc05leHRFbGVtZW50KCkpIHtcblx0XHRcdFx0XHR0aGlzLmdldE5leHRFbGVtZW50KCkuZm9jdXMoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmJsdXJJbnRlbnQuZW1pdChcImJvdHRvbVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiIHx8IGV2ZW50LmtleSA9PT0gXCJVcFwiKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhc1ByZXZFbGVtZW50KCkpIHtcblx0XHRcdFx0XHR0aGlzLmdldFByZXZFbGVtZW50KCkuZm9jdXMoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmJsdXJJbnRlbnQuZW1pdChcInRvcFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFbWl0cyB0aGUgc2VsZWN0ZWQgaXRlbSBvciBpdGVtcyBhZnRlciBhIG1vdXNlIGNsaWNrIGV2ZW50IGhhcyBvY2N1cnJlZC5cblx0ICovXG5cdGRvQ2xpY2soZXZlbnQsIGl0ZW0pIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmICghaXRlbS5kaXNhYmxlZCkge1xuXHRcdFx0aWYgKHRoaXMudHlwZSA9PT0gXCJzaW5nbGVcIikge1xuXHRcdFx0XHRpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0Ly8gcmVzZXQgdGhlIHNlbGVjdGlvblxuXHRcdFx0XHRmb3IgKGxldCBvdGhlckl0ZW0gb2YgdGhpcy5nZXRMaXN0SXRlbXMoKSkge1xuXHRcdFx0XHRcdGlmIChpdGVtICE9PSBvdGhlckl0ZW0pIHsgb3RoZXJJdGVtLnNlbGVjdGVkID0gZmFsc2U7IH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc2VsZWN0LmVtaXQoe2l0ZW19KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGl0ZW0uc2VsZWN0ZWQgPSAhaXRlbS5zZWxlY3RlZDtcblx0XHRcdFx0Ly8gZW1pdCBhbiBhcnJheSBvZiBzZWxlY3RlZCBpdGVtc1xuXHRcdFx0XHR0aGlzLnNlbGVjdC5lbWl0KHRoaXMuZ2V0U2VsZWN0ZWQoKSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmluZGV4ID0gdGhpcy5nZXRMaXN0SXRlbXMoKS5pbmRleE9mKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdG9uSXRlbUZvY3VzKGluZGV4KSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRMaXN0LnRvQXJyYXkoKVtpbmRleF0ubmF0aXZlRWxlbWVudDtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJieC0tbGlzdC1ib3hfX21lbnUtaXRlbS0taGlnaGxpZ2h0ZWRcIik7XG5cdFx0ZWxlbWVudC50YWJJbmRleCA9IDA7XG5cdH1cblxuXHRvbkl0ZW1CbHVyKGluZGV4KSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRMaXN0LnRvQXJyYXkoKVtpbmRleF0ubmF0aXZlRWxlbWVudDtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJieC0tbGlzdC1ib3hfX21lbnUtaXRlbS0taGlnaGxpZ2h0ZWRcIik7XG5cdFx0ZWxlbWVudC50YWJJbmRleCA9IC0xO1xuXHR9XG59XG4iXX0=