import { OnChanges, ElementRef, EventEmitter, AfterViewInit, AfterContentInit } from "@angular/core";
import { PillInput } from "../pill-input/pill-input.component";
import { AbstractDropdownView } from "./../dropdown/abstract-dropdown-view.class";
import { ListItem } from "./../dropdown/list-item.interface";
/**
 * ComboBoxes are similar to dropdowns, except a combobox provides an input field for users to search items and (optionally) add their own.
 * Multi-select comboboxes also provide "pills" of selected items.
 *
 * @export
 * @class ComboBox
 * @implements {OnChanges}
 * @implements {AfterViewInit}
 * @implements {AfterContentInit}
 */
export declare class ComboBox implements OnChanges, AfterViewInit, AfterContentInit {
    private elementRef;
    /**
     * List of items to fill the content with.
     *
     * **Example:**
     * ```javascript
     * items = [
     *		{
     *			content: "Abacus",
     *			selected: false
     *		},
     *		{
     *			content: "Byte",
     *			selected: false,
     *		},
     *		{
     *			content: "Computer",
     *			selected: false
     *		},
     *		{
     *			content: "Digital",
     *			selected: false
     *		}
     * ];
     * ```
     *
     * @type {Array<ListItem>}
     * @memberof ComboBox
     */
    items: Array<ListItem>;
    /**
     * Text to show when nothing is selected.
     * @memberof ComboBox
     */
    placeholder: string;
    /**
     * Combo box type (supporting single or multi selection of items).
     * @type {("single" | "multi")}
     * @memberof ComboBox
     */
    type: "single" | "multi";
    /**
     * Combo box render size.
     * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
     * @type {("sm" | "md" | "default" | "lg")}
     * @memberof ComboBox
     */
    size: "sm" | "md" | "default" | "lg";
    /**
     * Set to `true` to disable combobox.
     * @memberof ComboBox
     */
    disabled: boolean;
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
    selected: EventEmitter<ListItem>;
    /**
     * Bubbles from `n-pill-input` when the user types a value and presses enter. Intended to be used to add items to the list.
     *
     * Emits an event that includes the current item list, the suggested index for the new item, and a simple ListItem
     *
     * Example:
     * ```javascript
     *	{
     *		items: [{content: "one", selected: true}, {content: "two", selected: true}],
     *		index: 1,
     *		value: {
     *			content: "some user string",
     *			selected: false
     *		}
     *	}
     * ```
     *
     * @param ev event from `n-pill-input`, includes the typed value and the index of the pill the user typed after
     *
     * Example:
     * ```javascript
     * {
     *	after: 1,
     *	value: "some user string"
     * }
     * ```
     */
    submit: EventEmitter<any>;
    /** emits an empty event when the menu is closed */
    close: EventEmitter<any>;
    /** ContentChild reference to the instantiated dropdown list */
    view: AbstractDropdownView;
    /** ContentChild reference to the instantiated dropdown button */
    dropdownButton: any;
    /** ViewChild of the pill input component */
    pillInput: PillInput;
    class: string;
    display: string;
    open: boolean;
    /** Selected items for multi-select combo-boxes. */
    pills: any[];
    /** used to update the displayValue of `n-pill-input` */
    selectedValue: string;
    /** internal reference to the dropdown list */
    private dropdown;
    private noop;
    private onTouchedCallback;
    private propagateChangeCallback;
    /**
     * Creates an instance of ComboBox.
     * @param {ElementRef} elementRef
     * @memberof ComboBox
     */
    constructor(elementRef: ElementRef);
    /**
     * Lifecycle hook.
     * Updates pills if necessary.
     *
     * @param {any} changes
     * @memberof ComboBox
     */
    ngOnChanges(changes: any): void;
    /**
     * Sets initial state that depends on child components
     * Subscribes to select events and handles focus/filtering/initial list updates
     */
    ngAfterContentInit(): void;
    /**
     * Binds event handlers against the rendered view
     */
    ngAfterViewInit(): void;
    /**
     * Handles `Escape` key closing the dropdown, and arrow up/down focus to/from the dropdown list.
     * @param {KeyboardEvent} ev
     */
    hostkeys(ev: KeyboardEvent): void;
    _noop(): void;
    writeValue(value: any): void;
    onBlur(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    /**
     * Called by `n-pill-input` when the selected pills have changed.
     */
    updatePills(): void;
    /**
     * Closes the dropdown and emits the close event.
     * @memberof ComboBox
     */
    closeDropdown(): void;
    /**
     * Opens the dropdown.
     * @memberof ComboBox
     */
    openDropdown(): void;
    /**
     * Toggles the dropdown.
     * @memberof ComboBox
     */
    toggleDropdown(): void;
    /**
     * Sets the list group filter, and manages single select item selection.
     * @param {string} searchString
     */
    onSearch(searchString: any): void;
    /**
     * Bubbles from `n-pill-input` when the user types a value and presses enter. Intended to be used to add items to the list.
     *
     * @param {any} ev event from `n-pill-input`, includes the typed value and the index of the pill the user typed after
     *
     * Example:
     * ```javascript
     *	{
     *	after: 1,
     *	value: "some user string"
     *	}
     * ```
     */
    onSubmit(ev: any): void;
    private updateSelected;
}
