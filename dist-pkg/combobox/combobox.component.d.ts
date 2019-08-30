import { OnChanges, ElementRef, EventEmitter, AfterViewInit, AfterContentInit, TemplateRef } from "@angular/core";
import { AbstractDropdownView } from "./../dropdown/abstract-dropdown-view.class";
import { ListItem } from "./../dropdown/list-item.interface";
/**
 * ComboBoxes are similar to dropdowns, except a combobox provides an input field for users to search items and (optionally) add their own.
 * Multi-select comboboxes also provide "pills" of selected items.
 *
 * [See demo](../../?path=/story/combobox--basic)
 *
 * <example-url>../../iframe.html?id=combobox--basic</example-url>
 */
export declare class ComboBox implements OnChanges, AfterViewInit, AfterContentInit {
    protected elementRef: ElementRef;
    static comboBoxCount: number;
    id: string;
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
     */
    items: Array<ListItem>;
    /**
     * Text to show when nothing is selected.
     */
    placeholder: string;
    /**
     * Combo box type (supporting single or multi selection of items).
     */
    type: "single" | "multi";
    /**
     * Combo box render size.
     */
    size: "sm" | "md" | "lg";
    /**
     * Label for the combobox.
     */
    label: string | TemplateRef<any>;
    /**
     * Sets the optional helper text.
     */
    helperText: string | TemplateRef<any>;
    /**
     * Set to `true` to disable combobox.
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
    selected: EventEmitter<ListItem | ListItem[]>;
    /**
     * Intended to be used to add items to the list.
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
    dropdownMenu: any;
    hostClass: boolean;
    role: string;
    display: string;
    open: boolean;
    /** Selected items for multi-select combo-boxes. */
    pills: any[];
    /** used to update the displayValue */
    selectedValue: string;
    protected noop: any;
    protected onTouchedCallback: () => void;
    protected propagateChangeCallback: (_: any) => void;
    /**
     * Creates an instance of ComboBox.
     */
    constructor(elementRef: ElementRef);
    /**
     * Lifecycle hook.
     * Updates pills if necessary.
     *
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
    clearSelected(): void;
    /**
     * Closes the dropdown and emits the close event.
     */
    closeDropdown(): void;
    /**
     * Opens the dropdown.
     */
    openDropdown(): void;
    /**
     * Toggles the dropdown.
     */
    toggleDropdown(): void;
    /**
     * Sets the list group filter, and manages single select item selection.
     */
    onSearch(searchString: any): void;
    /**
     * Bubbles from `n-pill-input` when the user types a value and presses enter. Intended to be used to add items to the list.
     *
     * @param ev event from `n-pill-input`, includes the typed value and the index of the pill the user typed after
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
    isTemplate(value: any): boolean;
    protected updateSelected(): void;
}
