/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, Input, Output, HostListener, ElementRef, ViewChild, EventEmitter, HostBinding, TemplateRef } from "@angular/core";
import { AbstractDropdownView } from "./../dropdown/abstract-dropdown-view.class";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { filter } from "rxjs/operators";
/**
 * ComboBoxes are similar to dropdowns, except a combobox provides an input field for users to search items and (optionally) add their own.
 * Multi-select comboboxes also provide "pills" of selected items.
 *
 * [See demo](../../?path=/story/combobox--basic)
 *
 * <example-url>../../iframe.html?id=combobox--basic</example-url>
 */
export class ComboBox {
    /**
     * Creates an instance of ComboBox.
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.id = `dropdown-${ComboBox.comboBoxCount++}`;
        /**
         * List of items to fill the content with.
         *
         * **Example:**
         * ```javascript
         * items = [
         * 		{
         * 			content: "Abacus",
         * 			selected: false
         * 		},
         * 		{
         * 			content: "Byte",
         * 			selected: false,
         * 		},
         * 		{
         * 			content: "Computer",
         * 			selected: false
         * 		},
         * 		{
         * 			content: "Digital",
         * 			selected: false
         * 		}
         * ];
         * ```
         *
         */
        this.items = [];
        /**
         * Text to show when nothing is selected.
         */
        this.placeholder = "Filter...";
        /**
         * Combo box type (supporting single or multi selection of items).
         */
        this.type = "single";
        /**
         * Combo box render size.
         */
        this.size = "md";
        /**
         * Set to `true` to disable combobox.
         */
        this.disabled = false;
        /**
         * Emits a ListItem
         *
         * Example:
         * ```javascript
         * {
         * 		content: "one",
         * 		selected: true
         * }
         * ```
         */
        this.selected = new EventEmitter();
        /**
         * Intended to be used to add items to the list.
         *
         * Emits an event that includes the current item list, the suggested index for the new item, and a simple ListItem
         *
         * Example:
         * ```javascript
         * 	{
         * 		items: [{content: "one", selected: true}, {content: "two", selected: true}],
         * 		index: 1,
         * 		value: {
         * 			content: "some user string",
         * 			selected: false
         * 		}
         * 	}
         * ```
         *
         *
         * Example:
         * ```javascript
         * {
         * 	after: 1,
         * 	value: "some user string"
         * }
         * ```
         */
        this.submit = new EventEmitter();
        /**
         * emits an empty event when the menu is closed
         */
        this.close = new EventEmitter();
        this.hostClass = true;
        this.role = "combobox";
        this.display = "block";
        this.open = false;
        /**
         * Selected items for multi-select combo-boxes.
         */
        this.pills = [];
        /**
         * used to update the displayValue
         */
        this.selectedValue = "";
        this.noop = this._noop.bind(this);
        this.onTouchedCallback = this._noop;
        this.propagateChangeCallback = this._noop;
    }
    /**
     * Lifecycle hook.
     * Updates pills if necessary.
     *
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.items) {
            this.view.items = changes.items.currentValue;
            this.updateSelected();
        }
    }
    /**
     * Sets initial state that depends on child components
     * Subscribes to select events and handles focus/filtering/initial list updates
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.view) {
            this.view.type = this.type;
            this.view.select.subscribe(event => {
                if (this.type === "multi") {
                    this.updatePills();
                    this.propagateChangeCallback(this.view.getSelected());
                }
                else {
                    if (event.item && event.item.selected) {
                        this.selectedValue = event.item.content;
                        this.propagateChangeCallback(event.item);
                    }
                    else {
                        this.selectedValue = "";
                        this.propagateChangeCallback(null);
                    }
                    // not guarding these since the nativeElement has to be loaded
                    // for select to even fire
                    this.elementRef.nativeElement.querySelector("input").focus();
                    this.closeDropdown();
                }
                this.selected.emit(event);
                this.view.filterBy("");
            });
            this.view.items = this.items;
            // update the rest of combobox with any pre-selected items
            // setTimeout just defers the call to the next check cycle
            setTimeout(() => {
                this.updateSelected();
            });
            this.view.blurIntent.pipe(filter(v => v === "top")).subscribe(() => {
                this.elementRef.nativeElement.querySelector(".bx--text-input").focus();
            });
        }
    }
    /**
     * Binds event handlers against the rendered view
     * @return {?}
     */
    ngAfterViewInit() {
        document.addEventListener("click", ev => {
            if (!this.elementRef.nativeElement.contains(ev.target)) {
                if (this.open) {
                    this.closeDropdown();
                }
            }
        });
    }
    /**
     * Handles `Escape` key closing the dropdown, and arrow up/down focus to/from the dropdown list.
     * @param {?} ev
     * @return {?}
     */
    hostkeys(ev) {
        if (ev.key === "Escape") {
            this.closeDropdown();
        }
        else if ((ev.key === "ArrowDown" || ev.key === "Down") // `"Down"` is IE specific value
            && (!this.dropdownMenu || !this.dropdownMenu.nativeElement.contains(ev.target))) {
            ev.stopPropagation();
            this.openDropdown();
            setTimeout(() => this.view.getCurrentElement().focus(), 0);
        }
    }
    /**
     * @return {?}
     */
    _noop() { }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            if (this.type === "single") {
                this.view.propagateSelected([value]);
            }
            else {
                this.view.propagateSelected(value);
            }
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouchedCallback();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * Called by `n-pill-input` when the selected pills have changed.
     * @return {?}
     */
    updatePills() {
        this.pills = this.view.getSelected() || [];
        this.propagateChangeCallback(this.view.getSelected());
    }
    /**
     * @return {?}
     */
    clearSelected() {
        this.items = this.items.map(item => {
            if (!item.disabled) {
                item.selected = false;
            }
            return item;
        });
        this.view.items = this.items;
        this.updatePills();
        // clearSelected can only fire on type=multi
        // so we just emit getSelected() (just in case there's any disabled but selected items)
        this.selected.emit(/** @type {?} */ (this.view.getSelected()));
    }
    /**
     * Closes the dropdown and emits the close event.
     * @return {?}
     */
    closeDropdown() {
        this.open = false;
        this.close.emit();
    }
    /**
     * Opens the dropdown.
     * @return {?}
     */
    openDropdown() {
        if (this.disabled) {
            return;
        }
        this.open = true;
    }
    /**
     * Toggles the dropdown.
     * @return {?}
     */
    toggleDropdown() {
        if (this.open) {
            this.closeDropdown();
        }
        else {
            this.openDropdown();
        }
    }
    /**
     * Sets the list group filter, and manages single select item selection.
     * @param {?} searchString
     * @return {?}
     */
    onSearch(searchString) {
        this.view.filterBy(searchString);
        if (searchString !== "") {
            this.openDropdown();
        }
        else {
            this.selectedValue = "";
        }
        if (this.type === "single") {
            /** @type {?} */
            const matches = this.view.getListItems().some(item => item.content.toLowerCase().includes(searchString.toLowerCase()));
            if (!matches) {
                /** @type {?} */
                const selected = this.view.getSelected();
                if (selected) {
                    selected[0].selected = false;
                    // notify that the selection has changed
                    this.view.select.emit({ item: selected[0] });
                    this.propagateChangeCallback(null);
                }
                else {
                    this.view.filterBy("");
                }
            }
        }
    }
    /**
     * Bubbles from `n-pill-input` when the user types a value and presses enter. Intended to be used to add items to the list.
     *
     * @param {?} ev event from `n-pill-input`, includes the typed value and the index of the pill the user typed after
     *
     * Example:
     * ```javascript
     * 	{
     * 	after: 1,
     * 	value: "some user string"
     * 	}
     * ```
     * @return {?}
     */
    onSubmit(ev) {
        /** @type {?} */
        let index = 0;
        if (ev.after) {
            index = this.view.getListItems().indexOf(ev.after) + 1;
        }
        this.submit.emit({
            items: this.view.getListItems(),
            index,
            value: {
                content: ev.value,
                selected: false
            }
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTemplate(value) {
        return value instanceof TemplateRef;
    }
    /**
     * @return {?}
     */
    updateSelected() {
        /** @type {?} */
        const selected = this.view.getSelected();
        if (this.type === "multi") {
            this.updatePills();
        }
        else if (selected) {
            this.selectedValue = selected[0].content;
            this.propagateChangeCallback(selected[0]);
        }
    }
}
ComboBox.comboBoxCount = 0;
ComboBox.decorators = [
    { type: Component, args: [{
                selector: "ibm-combo-box",
                template: `
		<label *ngIf="label" [for]="id" class="bx--label">
			<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
			<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
		</label>
		<div *ngIf="helperText" class="bx--form__helper-text">
			<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
			<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
		</div>
		<div
			class="bx--combo-box bx--list-box"
			[ngClass]="{'bx--multi-select' : type === 'multi'}">
			<div
				[attr.aria-expanded]="open"
				role="button"
				class="bx--list-box__field"
				tabindex="0"
				type="button"
				aria-label="close menu"
				aria-haspopup="true"
				(click)="toggleDropdown()">
				<div
					*ngIf="type === 'multi' && pills.length > 0"
					(click)="clearSelected()"
					role="button"
					class="bx--list-box__selection bx--list-box__selection--multi"
					tabindex="0"
					title="Clear all selected items">
					{{ pills.length }}
					<svg
						focusable="false"
						preserveAspectRatio="xMidYMid meet"
						style="will-change: transform;"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						aria-hidden="true">
						<path d="M12 4.7l-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z"></path>
					</svg>
				</div>
				<input
					[id]="id"
					[disabled]="disabled"
					(keyup)="onSearch($event.target.value)"
					[value]="selectedValue"
					class="bx--text-input"
					role="combobox"
					aria-label="ListBox input field"
					autocomplete="off"
					[placeholder]="placeholder"/>
					<ibm-icon-chevron-down16
						[ngClass]="{'bx--list-box__menu-icon--open': open}"
						class="bx--list-box__menu-icon"
						ariaLabel="Close menu">
					</ibm-icon-chevron-down16>
			</div>
			<div
				#dropdownMenu
				*ngIf="open">
				<ng-content></ng-content>
			</div>
		</div>
	`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: ComboBox,
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
ComboBox.ctorParameters = () => [
    { type: ElementRef }
];
ComboBox.propDecorators = {
    id: [{ type: Input }],
    items: [{ type: Input }],
    placeholder: [{ type: Input }],
    type: [{ type: Input }],
    size: [{ type: Input }],
    label: [{ type: Input }],
    helperText: [{ type: Input }],
    disabled: [{ type: HostBinding, args: ["attr.aria-disabled",] }, { type: Input }],
    selected: [{ type: Output }],
    submit: [{ type: Output }],
    close: [{ type: Output }],
    view: [{ type: ContentChild, args: [AbstractDropdownView,] }],
    dropdownMenu: [{ type: ViewChild, args: ["dropdownMenu",] }],
    hostClass: [{ type: HostBinding, args: ["class.bx--list-box__wrapper",] }],
    role: [{ type: HostBinding, args: ["attr.role",] }],
    display: [{ type: HostBinding, args: ["style.display",] }],
    hostkeys: [{ type: HostListener, args: ["keydown", ["$event"],] }]
};
function ComboBox_tsickle_Closure_declarations() {
    /** @type {?} */
    ComboBox.comboBoxCount;
    /** @type {?} */
    ComboBox.prototype.id;
    /**
     * List of items to fill the content with.
     *
     * **Example:**
     * ```javascript
     * items = [
     * 		{
     * 			content: "Abacus",
     * 			selected: false
     * 		},
     * 		{
     * 			content: "Byte",
     * 			selected: false,
     * 		},
     * 		{
     * 			content: "Computer",
     * 			selected: false
     * 		},
     * 		{
     * 			content: "Digital",
     * 			selected: false
     * 		}
     * ];
     * ```
     *
     * @type {?}
     */
    ComboBox.prototype.items;
    /**
     * Text to show when nothing is selected.
     * @type {?}
     */
    ComboBox.prototype.placeholder;
    /**
     * Combo box type (supporting single or multi selection of items).
     * @type {?}
     */
    ComboBox.prototype.type;
    /**
     * Combo box render size.
     * @type {?}
     */
    ComboBox.prototype.size;
    /**
     * Label for the combobox.
     * @type {?}
     */
    ComboBox.prototype.label;
    /**
     * Sets the optional helper text.
     * @type {?}
     */
    ComboBox.prototype.helperText;
    /**
     * Set to `true` to disable combobox.
     * @type {?}
     */
    ComboBox.prototype.disabled;
    /**
     * Emits a ListItem
     *
     * Example:
     * ```javascript
     * {
     * 		content: "one",
     * 		selected: true
     * }
     * ```
     * @type {?}
     */
    ComboBox.prototype.selected;
    /**
     * Intended to be used to add items to the list.
     *
     * Emits an event that includes the current item list, the suggested index for the new item, and a simple ListItem
     *
     * Example:
     * ```javascript
     * 	{
     * 		items: [{content: "one", selected: true}, {content: "two", selected: true}],
     * 		index: 1,
     * 		value: {
     * 			content: "some user string",
     * 			selected: false
     * 		}
     * 	}
     * ```
     *
     *
     * Example:
     * ```javascript
     * {
     * 	after: 1,
     * 	value: "some user string"
     * }
     * ```
     * @type {?}
     */
    ComboBox.prototype.submit;
    /**
     * emits an empty event when the menu is closed
     * @type {?}
     */
    ComboBox.prototype.close;
    /**
     * ContentChild reference to the instantiated dropdown list
     * @type {?}
     */
    ComboBox.prototype.view;
    /** @type {?} */
    ComboBox.prototype.dropdownMenu;
    /** @type {?} */
    ComboBox.prototype.hostClass;
    /** @type {?} */
    ComboBox.prototype.role;
    /** @type {?} */
    ComboBox.prototype.display;
    /** @type {?} */
    ComboBox.prototype.open;
    /**
     * Selected items for multi-select combo-boxes.
     * @type {?}
     */
    ComboBox.prototype.pills;
    /**
     * used to update the displayValue
     * @type {?}
     */
    ComboBox.prototype.selectedValue;
    /** @type {?} */
    ComboBox.prototype.noop;
    /** @type {?} */
    ComboBox.prototype.onTouchedCallback;
    /** @type {?} */
    ComboBox.prototype.propagateChangeCallback;
    /** @type {?} */
    ComboBox.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm9ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImNvbWJvYm94L2NvbWJvYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsRUFDVCxZQUFZLEVBR1osV0FBVyxFQUNYLFdBQVcsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztBQXFGeEMsTUFBTTs7Ozs7SUFvSEwsWUFBc0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtrQkFsSDlCLFlBQVksUUFBUSxDQUFDLGFBQWEsRUFBRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBMkJsQixFQUFFOzs7OzJCQUliLFdBQVc7Ozs7b0JBSUUsUUFBUTs7OztvQkFJUixJQUFJOzs7O3dCQVllLEtBQUs7Ozs7Ozs7Ozs7Ozt3QkFZdkMsSUFBSSxZQUFZLEVBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBMkJ4QixJQUFJLFlBQVksRUFBTzs7OztxQkFFeEIsSUFBSSxZQUFZLEVBQU87eUJBSUosSUFBSTtvQkFDM0IsVUFBVTt1QkFDSCxPQUFPO29CQUVqQyxLQUFLOzs7O3FCQUdKLEVBQUU7Ozs7NkJBRU0sRUFBRTtvQkFFUixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUNBQ0ksSUFBSSxDQUFDLEtBQUs7dUNBQ0UsSUFBSSxDQUFDLEtBQUs7S0FLaEI7Ozs7Ozs7O0lBT2hELFdBQVcsQ0FBQyxPQUFPO1FBQ2xCLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUM3QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdEI7S0FDRDs7Ozs7O0lBTUQsa0JBQWtCO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNsQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO29CQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7aUJBQ3REO3FCQUFNO29CQUNOLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTt3QkFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDeEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDekM7eUJBQU07d0JBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7d0JBQ3hCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDbkM7OztvQkFHRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzdELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDckI7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7OztZQUc3QixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNmLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN0QixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDdkUsQ0FBQyxDQUFDO1NBQ0g7S0FDRDs7Ozs7SUFLRCxlQUFlO1FBQ2QsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDdkQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNkLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDckI7YUFDRDtTQUNELENBQUMsQ0FBQztLQUNIOzs7Ozs7SUFNRCxRQUFRLENBQUMsRUFBaUI7UUFDekIsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUN4QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDckI7YUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxXQUFXLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUM7ZUFDcEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDakYsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNEO0tBQ0Q7Ozs7SUFLRCxLQUFLLE1BQUs7Ozs7O0lBS1YsVUFBVSxDQUFDLEtBQVU7UUFDcEIsSUFBSSxLQUFLLEVBQUU7WUFDVixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25DO1NBQ0Q7S0FDRDs7OztJQUVELE1BQU07UUFDTCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxFQUFFLENBQUM7S0FDbEM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0tBQzVCOzs7OztJQUtNLFdBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDOzs7OztJQUdoRCxhQUFhO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDWixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7O1FBR25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBUyxFQUFDLENBQUM7Ozs7OztJQU03QyxhQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7OztJQU1aLFlBQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOzs7Ozs7SUFNWCxjQUFjO1FBQ3BCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3BCOzs7Ozs7O0lBTUssUUFBUSxDQUFDLFlBQVk7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakMsSUFBSSxZQUFZLEtBQUssRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNwQjthQUFNO1lBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFOztZQUczQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkgsSUFBSSxDQUFDLE9BQU8sRUFBRTs7Z0JBQ2IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDekMsSUFBSSxRQUFRLEVBQUU7b0JBQ2IsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7O29CQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNuQztxQkFBTTtvQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDdkI7YUFDRDtTQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JLLFFBQVEsQ0FBQyxFQUFFOztRQUNqQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2RDtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMvQixLQUFLO1lBQ0wsS0FBSyxFQUFFO2dCQUNOLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSztnQkFDakIsUUFBUSxFQUFFLEtBQUs7YUFDZjtTQUNELENBQUMsQ0FBQzs7Ozs7O0lBR0csVUFBVSxDQUFDLEtBQUs7UUFDdEIsT0FBTyxLQUFLLFlBQVksV0FBVyxDQUFDOzs7OztJQUczQixjQUFjOztRQUN2QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUc7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25CO2FBQU0sSUFBSSxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3pDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQztLQUNEOzt5QkF4VnNCLENBQUM7O1lBNUV4QixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWdFVDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Y7d0JBQ0MsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFFBQVE7d0JBQ3JCLEtBQUssRUFBRSxJQUFJO3FCQUNYO2lCQUNEO2FBQ0Q7Ozs7WUEvRkEsVUFBVTs7O2lCQWtHVCxLQUFLO29CQTJCTCxLQUFLOzBCQUlMLEtBQUs7bUJBSUwsS0FBSzttQkFJTCxLQUFLO29CQUlMLEtBQUs7eUJBSUwsS0FBSzt1QkFJTCxXQUFXLFNBQUMsb0JBQW9CLGNBQUcsS0FBSzt1QkFZeEMsTUFBTTtxQkEyQk4sTUFBTTtvQkFFTixNQUFNO21CQUVOLFlBQVksU0FBQyxvQkFBb0I7MkJBQ2pDLFNBQVMsU0FBQyxjQUFjO3dCQUN4QixXQUFXLFNBQUMsNkJBQTZCO21CQUN6QyxXQUFXLFNBQUMsV0FBVztzQkFDdkIsV0FBVyxTQUFDLGVBQWU7dUJBc0YzQixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRPbkNoYW5nZXMsXG5cdENvbnRlbnRDaGlsZCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0SG9zdExpc3RlbmVyLFxuXHRFbGVtZW50UmVmLFxuXHRWaWV3Q2hpbGQsXG5cdEV2ZW50RW1pdHRlcixcblx0QWZ0ZXJWaWV3SW5pdCxcblx0QWZ0ZXJDb250ZW50SW5pdCxcblx0SG9zdEJpbmRpbmcsXG5cdFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdERyb3Bkb3duVmlldyB9IGZyb20gXCIuLy4uL2Ryb3Bkb3duL2Fic3RyYWN0LWRyb3Bkb3duLXZpZXcuY2xhc3NcIjtcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSBcIi4vLi4vZHJvcGRvd24vbGlzdC1pdGVtLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG4vKipcbiAqIENvbWJvQm94ZXMgYXJlIHNpbWlsYXIgdG8gZHJvcGRvd25zLCBleGNlcHQgYSBjb21ib2JveCBwcm92aWRlcyBhbiBpbnB1dCBmaWVsZCBmb3IgdXNlcnMgdG8gc2VhcmNoIGl0ZW1zIGFuZCAob3B0aW9uYWxseSkgYWRkIHRoZWlyIG93bi5cbiAqIE11bHRpLXNlbGVjdCBjb21ib2JveGVzIGFsc28gcHJvdmlkZSBcInBpbGxzXCIgb2Ygc2VsZWN0ZWQgaXRlbXMuXG4gKlxuICogW1NlZSBkZW1vXSguLi8uLi8/cGF0aD0vc3RvcnkvY29tYm9ib3gtLWJhc2ljKVxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD1jb21ib2JveC0tYmFzaWM8L2V4YW1wbGUtdXJsPlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLWNvbWJvLWJveFwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxsYWJlbCAqbmdJZj1cImxhYmVsXCIgW2Zvcl09XCJpZFwiIGNsYXNzPVwiYngtLWxhYmVsXCI+XG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzVGVtcGxhdGUobGFiZWwpXCI+e3tsYWJlbH19PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8bmctdGVtcGxhdGUgKm5nSWY9XCJpc1RlbXBsYXRlKGxhYmVsKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImxhYmVsXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHQ8L2xhYmVsPlxuXHRcdDxkaXYgKm5nSWY9XCJoZWxwZXJUZXh0XCIgY2xhc3M9XCJieC0tZm9ybV9faGVscGVyLXRleHRcIj5cblx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNUZW1wbGF0ZShoZWxwZXJUZXh0KVwiPnt7aGVscGVyVGV4dH19PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8bmctdGVtcGxhdGUgKm5nSWY9XCJpc1RlbXBsYXRlKGhlbHBlclRleHQpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGVscGVyVGV4dFwiPjwvbmctdGVtcGxhdGU+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3M9XCJieC0tY29tYm8tYm94IGJ4LS1saXN0LWJveFwiXG5cdFx0XHRbbmdDbGFzc109XCJ7J2J4LS1tdWx0aS1zZWxlY3QnIDogdHlwZSA9PT0gJ211bHRpJ31cIj5cblx0XHRcdDxkaXZcblx0XHRcdFx0W2F0dHIuYXJpYS1leHBhbmRlZF09XCJvcGVuXCJcblx0XHRcdFx0cm9sZT1cImJ1dHRvblwiXG5cdFx0XHRcdGNsYXNzPVwiYngtLWxpc3QtYm94X19maWVsZFwiXG5cdFx0XHRcdHRhYmluZGV4PVwiMFwiXG5cdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRhcmlhLWxhYmVsPVwiY2xvc2UgbWVudVwiXG5cdFx0XHRcdGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcblx0XHRcdFx0KGNsaWNrKT1cInRvZ2dsZURyb3Bkb3duKClcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdCpuZ0lmPVwidHlwZSA9PT0gJ211bHRpJyAmJiBwaWxscy5sZW5ndGggPiAwXCJcblx0XHRcdFx0XHQoY2xpY2spPVwiY2xlYXJTZWxlY3RlZCgpXCJcblx0XHRcdFx0XHRyb2xlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRjbGFzcz1cImJ4LS1saXN0LWJveF9fc2VsZWN0aW9uIGJ4LS1saXN0LWJveF9fc2VsZWN0aW9uLS1tdWx0aVwiXG5cdFx0XHRcdFx0dGFiaW5kZXg9XCIwXCJcblx0XHRcdFx0XHR0aXRsZT1cIkNsZWFyIGFsbCBzZWxlY3RlZCBpdGVtc1wiPlxuXHRcdFx0XHRcdHt7IHBpbGxzLmxlbmd0aCB9fVxuXHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdGZvY3VzYWJsZT1cImZhbHNlXCJcblx0XHRcdFx0XHRcdHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcblx0XHRcdFx0XHRcdHN0eWxlPVwid2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcIlxuXHRcdFx0XHRcdFx0cm9sZT1cImltZ1wiXG5cdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdHdpZHRoPVwiMTZcIlxuXHRcdFx0XHRcdFx0aGVpZ2h0PVwiMTZcIlxuXHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAxNiAxNlwiXG5cdFx0XHRcdFx0XHRhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTIgNC43bC0uNy0uN0w4IDcuMyA0LjcgNGwtLjcuN0w3LjMgOCA0IDExLjNsLjcuN0w4IDguN2wzLjMgMy4zLjctLjdMOC43IDh6XCI+PC9wYXRoPlxuXHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0W2lkXT1cImlkXCJcblx0XHRcdFx0XHRbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdChrZXl1cCk9XCJvblNlYXJjaCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG5cdFx0XHRcdFx0W3ZhbHVlXT1cInNlbGVjdGVkVmFsdWVcIlxuXHRcdFx0XHRcdGNsYXNzPVwiYngtLXRleHQtaW5wdXRcIlxuXHRcdFx0XHRcdHJvbGU9XCJjb21ib2JveFwiXG5cdFx0XHRcdFx0YXJpYS1sYWJlbD1cIkxpc3RCb3ggaW5wdXQgZmllbGRcIlxuXHRcdFx0XHRcdGF1dG9jb21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0W3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIvPlxuXHRcdFx0XHRcdDxpYm0taWNvbi1jaGV2cm9uLWRvd24xNlxuXHRcdFx0XHRcdFx0W25nQ2xhc3NdPVwieydieC0tbGlzdC1ib3hfX21lbnUtaWNvbi0tb3Blbic6IG9wZW59XCJcblx0XHRcdFx0XHRcdGNsYXNzPVwiYngtLWxpc3QtYm94X19tZW51LWljb25cIlxuXHRcdFx0XHRcdFx0YXJpYUxhYmVsPVwiQ2xvc2UgbWVudVwiPlxuXHRcdFx0XHRcdDwvaWJtLWljb24tY2hldnJvbi1kb3duMTY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXZcblx0XHRcdFx0I2Ryb3Bkb3duTWVudVxuXHRcdFx0XHQqbmdJZj1cIm9wZW5cIj5cblx0XHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IENvbWJvQm94LFxuXHRcdFx0bXVsdGk6IHRydWVcblx0XHR9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tYm9Cb3ggaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuXHRzdGF0aWMgY29tYm9Cb3hDb3VudCA9IDA7XG5cdEBJbnB1dCgpIGlkID0gYGRyb3Bkb3duLSR7Q29tYm9Cb3guY29tYm9Cb3hDb3VudCsrfWA7XG5cdC8qKlxuXHQgKiBMaXN0IG9mIGl0ZW1zIHRvIGZpbGwgdGhlIGNvbnRlbnQgd2l0aC5cblx0ICpcblx0ICogKipFeGFtcGxlOioqXG5cdCAqIGBgYGphdmFzY3JpcHRcblx0ICogaXRlbXMgPSBbXG5cdCAqXHRcdHtcblx0ICpcdFx0XHRjb250ZW50OiBcIkFiYWN1c1wiLFxuXHQgKlx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHQgKlx0XHR9LFxuXHQgKlx0XHR7XG5cdCAqXHRcdFx0Y29udGVudDogXCJCeXRlXCIsXG5cdCAqXHRcdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHQgKlx0XHR9LFxuXHQgKlx0XHR7XG5cdCAqXHRcdFx0Y29udGVudDogXCJDb21wdXRlclwiLFxuXHQgKlx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHQgKlx0XHR9LFxuXHQgKlx0XHR7XG5cdCAqXHRcdFx0Y29udGVudDogXCJEaWdpdGFsXCIsXG5cdCAqXHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdCAqXHRcdH1cblx0ICogXTtcblx0ICogYGBgXG5cdCAqXG5cdCAqL1xuXHRASW5wdXQoKSBpdGVtczogQXJyYXk8TGlzdEl0ZW0+ID0gW107XG5cdC8qKlxuXHQgKiBUZXh0IHRvIHNob3cgd2hlbiBub3RoaW5nIGlzIHNlbGVjdGVkLlxuXHQgKi9cblx0QElucHV0KCkgcGxhY2Vob2xkZXIgPSBcIkZpbHRlci4uLlwiO1xuXHQvKipcblx0ICogQ29tYm8gYm94IHR5cGUgKHN1cHBvcnRpbmcgc2luZ2xlIG9yIG11bHRpIHNlbGVjdGlvbiBvZiBpdGVtcykuXG5cdCAqL1xuXHRASW5wdXQoKSB0eXBlOiBcInNpbmdsZVwiIHwgXCJtdWx0aVwiID0gXCJzaW5nbGVcIjtcblx0LyoqXG5cdCAqIENvbWJvIGJveCByZW5kZXIgc2l6ZS5cblx0ICovXG5cdEBJbnB1dCgpIHNpemU6IFwic21cIiB8IFwibWRcIiB8IFwibGdcIiA9IFwibWRcIjtcblx0LyoqXG5cdCAqIExhYmVsIGZvciB0aGUgY29tYm9ib3guXG5cdCAqL1xuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pjtcblx0LyoqXG5cdCAqIFNldHMgdGhlIG9wdGlvbmFsIGhlbHBlciB0ZXh0LlxuXHQgKi9cblx0QElucHV0KCkgaGVscGVyVGV4dDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pjtcblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgdG8gZGlzYWJsZSBjb21ib2JveC5cblx0ICovXG5cdEBIb3N0QmluZGluZyhcImF0dHIuYXJpYS1kaXNhYmxlZFwiKSBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXHQvKipcblx0ICogRW1pdHMgYSBMaXN0SXRlbVxuXHQgKlxuXHQgKiBFeGFtcGxlOlxuXHQgKiBgYGBqYXZhc2NyaXB0XG5cdCAqIHtcblx0ICogXHRcdGNvbnRlbnQ6IFwib25lXCIsXG5cdCAqIFx0XHRzZWxlY3RlZDogdHJ1ZVxuXHQgKiB9XG5cdCAqIGBgYFxuXHQgKi9cblx0QE91dHB1dCgpIHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbSB8IExpc3RJdGVtW10+KCk7XG5cdC8qKlxuXHQgKiBJbnRlbmRlZCB0byBiZSB1c2VkIHRvIGFkZCBpdGVtcyB0byB0aGUgbGlzdC5cblx0ICpcblx0ICogRW1pdHMgYW4gZXZlbnQgdGhhdCBpbmNsdWRlcyB0aGUgY3VycmVudCBpdGVtIGxpc3QsIHRoZSBzdWdnZXN0ZWQgaW5kZXggZm9yIHRoZSBuZXcgaXRlbSwgYW5kIGEgc2ltcGxlIExpc3RJdGVtXG5cdCAqXG5cdCAqIEV4YW1wbGU6XG5cdCAqIGBgYGphdmFzY3JpcHRcblx0ICpcdHtcblx0ICpcdFx0aXRlbXM6IFt7Y29udGVudDogXCJvbmVcIiwgc2VsZWN0ZWQ6IHRydWV9LCB7Y29udGVudDogXCJ0d29cIiwgc2VsZWN0ZWQ6IHRydWV9XSxcblx0ICpcdFx0aW5kZXg6IDEsXG5cdCAqXHRcdHZhbHVlOiB7XG5cdCAqXHRcdFx0Y29udGVudDogXCJzb21lIHVzZXIgc3RyaW5nXCIsXG5cdCAqXHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdCAqXHRcdH1cblx0ICpcdH1cblx0ICogYGBgXG5cdCAqXG5cdCAqXG5cdCAqIEV4YW1wbGU6XG5cdCAqIGBgYGphdmFzY3JpcHRcblx0ICoge1xuXHQgKlx0YWZ0ZXI6IDEsXG5cdCAqXHR2YWx1ZTogXCJzb21lIHVzZXIgc3RyaW5nXCJcblx0ICogfVxuXHQgKiBgYGBcblx0ICovXG5cdEBPdXRwdXQoKSBzdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdC8qKiBlbWl0cyBhbiBlbXB0eSBldmVudCB3aGVuIHRoZSBtZW51IGlzIGNsb3NlZCAqL1xuXHRAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdC8qKiBDb250ZW50Q2hpbGQgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW50aWF0ZWQgZHJvcGRvd24gbGlzdCAqL1xuXHRAQ29udGVudENoaWxkKEFic3RyYWN0RHJvcGRvd25WaWV3KSB2aWV3OiBBYnN0cmFjdERyb3Bkb3duVmlldztcblx0QFZpZXdDaGlsZChcImRyb3Bkb3duTWVudVwiKSBkcm9wZG93bk1lbnU7XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1saXN0LWJveF9fd3JhcHBlclwiKSBob3N0Q2xhc3MgPSB0cnVlO1xuXHRASG9zdEJpbmRpbmcoXCJhdHRyLnJvbGVcIikgcm9sZSA9IFwiY29tYm9ib3hcIjtcblx0QEhvc3RCaW5kaW5nKFwic3R5bGUuZGlzcGxheVwiKSBkaXNwbGF5ID0gXCJibG9ja1wiO1xuXG5cdHB1YmxpYyBvcGVuID0gZmFsc2U7XG5cblx0LyoqIFNlbGVjdGVkIGl0ZW1zIGZvciBtdWx0aS1zZWxlY3QgY29tYm8tYm94ZXMuICovXG5cdHB1YmxpYyBwaWxscyA9IFtdO1xuXHQvKiogdXNlZCB0byB1cGRhdGUgdGhlIGRpc3BsYXlWYWx1ZSAqL1xuXHRwdWJsaWMgc2VsZWN0ZWRWYWx1ZSA9IFwiXCI7XG5cblx0cHJvdGVjdGVkIG5vb3AgPSB0aGlzLl9ub29wLmJpbmQodGhpcyk7XG5cdHByb3RlY3RlZCBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IHRoaXMuX25vb3A7XG5cdHByb3RlY3RlZCBwcm9wYWdhdGVDaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IHRoaXMuX25vb3A7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ29tYm9Cb3guXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuXHQvKipcblx0ICogTGlmZWN5Y2xlIGhvb2suXG5cdCAqIFVwZGF0ZXMgcGlsbHMgaWYgbmVjZXNzYXJ5LlxuXHQgKlxuXHQgKi9cblx0bmdPbkNoYW5nZXMoY2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLml0ZW1zKSB7XG5cdFx0XHR0aGlzLnZpZXcuaXRlbXMgPSBjaGFuZ2VzLml0ZW1zLmN1cnJlbnRWYWx1ZTtcblx0XHRcdHRoaXMudXBkYXRlU2VsZWN0ZWQoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBpbml0aWFsIHN0YXRlIHRoYXQgZGVwZW5kcyBvbiBjaGlsZCBjb21wb25lbnRzXG5cdCAqIFN1YnNjcmliZXMgdG8gc2VsZWN0IGV2ZW50cyBhbmQgaGFuZGxlcyBmb2N1cy9maWx0ZXJpbmcvaW5pdGlhbCBsaXN0IHVwZGF0ZXNcblx0ICovXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHRpZiAodGhpcy52aWV3KSB7XG5cdFx0XHR0aGlzLnZpZXcudHlwZSA9IHRoaXMudHlwZTtcblx0XHRcdHRoaXMudmlldy5zZWxlY3Quc3Vic2NyaWJlKGV2ZW50ID0+IHtcblx0XHRcdFx0aWYgKHRoaXMudHlwZSA9PT0gXCJtdWx0aVwiKSB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVQaWxscygpO1xuXHRcdFx0XHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlQ2FsbGJhY2sodGhpcy52aWV3LmdldFNlbGVjdGVkKCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChldmVudC5pdGVtICYmIGV2ZW50Lml0ZW0uc2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IGV2ZW50Lml0ZW0uY29udGVudDtcblx0XHRcdFx0XHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlQ2FsbGJhY2soZXZlbnQuaXRlbSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IFwiXCI7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZUNhbGxiYWNrKG51bGwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBub3QgZ3VhcmRpbmcgdGhlc2Ugc2luY2UgdGhlIG5hdGl2ZUVsZW1lbnQgaGFzIHRvIGJlIGxvYWRlZFxuXHRcdFx0XHRcdC8vIGZvciBzZWxlY3QgdG8gZXZlbiBmaXJlXG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKCk7XG5cdFx0XHRcdFx0dGhpcy5jbG9zZURyb3Bkb3duKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zZWxlY3RlZC5lbWl0KGV2ZW50KTtcblx0XHRcdFx0dGhpcy52aWV3LmZpbHRlckJ5KFwiXCIpO1xuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnZpZXcuaXRlbXMgPSB0aGlzLml0ZW1zO1xuXHRcdFx0Ly8gdXBkYXRlIHRoZSByZXN0IG9mIGNvbWJvYm94IHdpdGggYW55IHByZS1zZWxlY3RlZCBpdGVtc1xuXHRcdFx0Ly8gc2V0VGltZW91dCBqdXN0IGRlZmVycyB0aGUgY2FsbCB0byB0aGUgbmV4dCBjaGVjayBjeWNsZVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudXBkYXRlU2VsZWN0ZWQoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnZpZXcuYmx1ckludGVudC5waXBlKGZpbHRlcih2ID0+IHYgPT09IFwidG9wXCIpKS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ4LS10ZXh0LWlucHV0XCIpLmZvY3VzKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQmluZHMgZXZlbnQgaGFuZGxlcnMgYWdhaW5zdCB0aGUgcmVuZGVyZWQgdmlld1xuXHQgKi9cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldiA9PiB7XG5cdFx0XHRpZiAoIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2LnRhcmdldCkpIHtcblx0XHRcdFx0aWYgKHRoaXMub3Blbikge1xuXHRcdFx0XHRcdHRoaXMuY2xvc2VEcm9wZG93bigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBgRXNjYXBlYCBrZXkgY2xvc2luZyB0aGUgZHJvcGRvd24sIGFuZCBhcnJvdyB1cC9kb3duIGZvY3VzIHRvL2Zyb20gdGhlIGRyb3Bkb3duIGxpc3QuXG5cdCAqL1xuXHRASG9zdExpc3RlbmVyKFwia2V5ZG93blwiLCBbXCIkZXZlbnRcIl0pXG5cdGhvc3RrZXlzKGV2OiBLZXlib2FyZEV2ZW50KSB7XG5cdFx0aWYgKGV2LmtleSA9PT0gXCJFc2NhcGVcIikge1xuXHRcdFx0dGhpcy5jbG9zZURyb3Bkb3duKCk7XG5cdFx0fSBlbHNlIGlmICgoZXYua2V5ID09PSBcIkFycm93RG93blwiIHx8IGV2LmtleSA9PT0gXCJEb3duXCIpIC8vIGBcIkRvd25cImAgaXMgSUUgc3BlY2lmaWMgdmFsdWVcblx0XHRcdCYmICghdGhpcy5kcm9wZG93bk1lbnUgfHwgIXRoaXMuZHJvcGRvd25NZW51Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXYudGFyZ2V0KSkpIHtcblx0XHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0dGhpcy5vcGVuRHJvcGRvd24oKTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy52aWV3LmdldEN1cnJlbnRFbGVtZW50KCkuZm9jdXMoKSwgMCk7XG5cdFx0fVxuXHR9XG5cblx0Lypcblx0ICogbm8tb3AgbWV0aG9kIGZvciBudWxsIGV2ZW50IGxpc3RlbmVycywgYW5kIG90aGVyIG5vIG9wIGNhbGxzXG5cdCAqL1xuXHRfbm9vcCgpIHt9XG5cblx0Lypcblx0ICogcHJvcGFnYXRlcyB0aGUgdmFsdWUgcHJvdmlkZWQgZnJvbSBuZ01vZGVsXG5cdCAqL1xuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdGlmICh0aGlzLnR5cGUgPT09IFwic2luZ2xlXCIpIHtcblx0XHRcdFx0dGhpcy52aWV3LnByb3BhZ2F0ZVNlbGVjdGVkKFt2YWx1ZV0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy52aWV3LnByb3BhZ2F0ZVNlbGVjdGVkKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRvbkJsdXIoKSB7XG5cdFx0dGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2VDYWxsYmFjayA9IGZuO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuXHRcdHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgYnkgYG4tcGlsbC1pbnB1dGAgd2hlbiB0aGUgc2VsZWN0ZWQgcGlsbHMgaGF2ZSBjaGFuZ2VkLlxuXHQgKi9cblx0cHVibGljIHVwZGF0ZVBpbGxzKCkge1xuXHRcdHRoaXMucGlsbHMgPSB0aGlzLnZpZXcuZ2V0U2VsZWN0ZWQoKSB8fCBbXTtcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZUNhbGxiYWNrKHRoaXMudmlldy5nZXRTZWxlY3RlZCgpKTtcblx0fVxuXG5cdHB1YmxpYyBjbGVhclNlbGVjdGVkKCkge1xuXHRcdHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLm1hcChpdGVtID0+IHtcblx0XHRcdGlmICghaXRlbS5kaXNhYmxlZCkge1xuXHRcdFx0XHRpdGVtLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaXRlbTtcblx0XHR9KTtcblx0XHR0aGlzLnZpZXcuaXRlbXMgPSB0aGlzLml0ZW1zO1xuXHRcdHRoaXMudXBkYXRlUGlsbHMoKTtcblx0XHQvLyBjbGVhclNlbGVjdGVkIGNhbiBvbmx5IGZpcmUgb24gdHlwZT1tdWx0aVxuXHRcdC8vIHNvIHdlIGp1c3QgZW1pdCBnZXRTZWxlY3RlZCgpIChqdXN0IGluIGNhc2UgdGhlcmUncyBhbnkgZGlzYWJsZWQgYnV0IHNlbGVjdGVkIGl0ZW1zKVxuXHRcdHRoaXMuc2VsZWN0ZWQuZW1pdCh0aGlzLnZpZXcuZ2V0U2VsZWN0ZWQoKSBhcyBhbnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlcyB0aGUgZHJvcGRvd24gYW5kIGVtaXRzIHRoZSBjbG9zZSBldmVudC5cblx0ICovXG5cdHB1YmxpYyBjbG9zZURyb3Bkb3duKCkge1xuXHRcdHRoaXMub3BlbiA9IGZhbHNlO1xuXHRcdHRoaXMuY2xvc2UuZW1pdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9wZW5zIHRoZSBkcm9wZG93bi5cblx0ICovXG5cdHB1YmxpYyBvcGVuRHJvcGRvd24oKSB7XG5cdFx0aWYgKHRoaXMuZGlzYWJsZWQpIHsgcmV0dXJuOyB9XG5cdFx0dGhpcy5vcGVuID0gdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGVzIHRoZSBkcm9wZG93bi5cblx0ICovXG5cdHB1YmxpYyB0b2dnbGVEcm9wZG93bigpIHtcblx0XHRpZiAodGhpcy5vcGVuKSB7XG5cdFx0XHR0aGlzLmNsb3NlRHJvcGRvd24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcGVuRHJvcGRvd24oKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyB0aGUgbGlzdCBncm91cCBmaWx0ZXIsIGFuZCBtYW5hZ2VzIHNpbmdsZSBzZWxlY3QgaXRlbSBzZWxlY3Rpb24uXG5cdCAqL1xuXHRwdWJsaWMgb25TZWFyY2goc2VhcmNoU3RyaW5nKSB7XG5cdFx0dGhpcy52aWV3LmZpbHRlckJ5KHNlYXJjaFN0cmluZyk7XG5cdFx0aWYgKHNlYXJjaFN0cmluZyAhPT0gXCJcIikge1xuXHRcdFx0dGhpcy5vcGVuRHJvcGRvd24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZWxlY3RlZFZhbHVlID0gXCJcIjtcblx0XHR9XG5cdFx0aWYgKHRoaXMudHlwZSA9PT0gXCJzaW5nbGVcIikge1xuXHRcdFx0Ly8gZGVzZWxlY3QgaWYgdGhlIGlucHV0IGRvZXNuJ3QgbWF0Y2ggdGhlIGNvbnRlbnRcblx0XHRcdC8vIG9mIGFueSBnaXZlbiBpdGVtXG5cdFx0XHRjb25zdCBtYXRjaGVzID0gdGhpcy52aWV3LmdldExpc3RJdGVtcygpLnNvbWUoaXRlbSA9PiBpdGVtLmNvbnRlbnQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcudG9Mb3dlckNhc2UoKSkpO1xuXHRcdFx0aWYgKCFtYXRjaGVzKSB7XG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gdGhpcy52aWV3LmdldFNlbGVjdGVkKCk7XG5cdFx0XHRcdGlmIChzZWxlY3RlZCkge1xuXHRcdFx0XHRcdHNlbGVjdGVkWzBdLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0Ly8gbm90aWZ5IHRoYXQgdGhlIHNlbGVjdGlvbiBoYXMgY2hhbmdlZFxuXHRcdFx0XHRcdHRoaXMudmlldy5zZWxlY3QuZW1pdCh7IGl0ZW06IHNlbGVjdGVkWzBdIH0pO1xuXHRcdFx0XHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlQ2FsbGJhY2sobnVsbCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy52aWV3LmZpbHRlckJ5KFwiXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEJ1YmJsZXMgZnJvbSBgbi1waWxsLWlucHV0YCB3aGVuIHRoZSB1c2VyIHR5cGVzIGEgdmFsdWUgYW5kIHByZXNzZXMgZW50ZXIuIEludGVuZGVkIHRvIGJlIHVzZWQgdG8gYWRkIGl0ZW1zIHRvIHRoZSBsaXN0LlxuXHQgKlxuXHQgKiBAcGFyYW0gZXYgZXZlbnQgZnJvbSBgbi1waWxsLWlucHV0YCwgaW5jbHVkZXMgdGhlIHR5cGVkIHZhbHVlIGFuZCB0aGUgaW5kZXggb2YgdGhlIHBpbGwgdGhlIHVzZXIgdHlwZWQgYWZ0ZXJcblx0ICpcblx0ICogRXhhbXBsZTpcblx0ICogYGBgamF2YXNjcmlwdFxuXHQgKlx0e1xuXHQgKlx0YWZ0ZXI6IDEsXG5cdCAqXHR2YWx1ZTogXCJzb21lIHVzZXIgc3RyaW5nXCJcblx0ICpcdH1cblx0ICogYGBgXG5cdCAqL1xuXHRwdWJsaWMgb25TdWJtaXQoZXYpIHtcblx0XHRsZXQgaW5kZXggPSAwO1xuXHRcdGlmIChldi5hZnRlcikge1xuXHRcdFx0aW5kZXggPSB0aGlzLnZpZXcuZ2V0TGlzdEl0ZW1zKCkuaW5kZXhPZihldi5hZnRlcikgKyAxO1xuXHRcdH1cblx0XHR0aGlzLnN1Ym1pdC5lbWl0KHtcblx0XHRcdGl0ZW1zOiB0aGlzLnZpZXcuZ2V0TGlzdEl0ZW1zKCksXG5cdFx0XHRpbmRleCxcblx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdGNvbnRlbnQ6IGV2LnZhbHVlLFxuXHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBpc1RlbXBsYXRlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG5cdH1cblxuXHRwcm90ZWN0ZWQgdXBkYXRlU2VsZWN0ZWQoKSB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnZpZXcuZ2V0U2VsZWN0ZWQoKTtcblx0XHRpZiAodGhpcy50eXBlID09PSBcIm11bHRpXCIgKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVBpbGxzKCk7XG5cdFx0fSBlbHNlIGlmIChzZWxlY3RlZCkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRbMF0uY29udGVudDtcblx0XHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlQ2FsbGJhY2soc2VsZWN0ZWRbMF0pO1xuXHRcdH1cblx0fVxufVxuIl19