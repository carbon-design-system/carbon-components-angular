import { OnChanges, OnDestroy, EventEmitter, TemplateRef, AfterViewInit, ElementRef } from "@angular/core";
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { ListItem } from "./../list-item.interface";
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
 *
 * @export
 * @class DropdownList
 * @implements {AbstractDropdownView}
 * @implements {AfterViewInit}
 * @implements {OnChanges}
 * @implements {OnDestroy}
 */
export declare class DropdownList implements AbstractDropdownView, AfterViewInit, OnChanges, OnDestroy {
    elementRef: ElementRef;
    /**
     * The list items belonging to the `DropdownList`.
     * @type {Array<ListItem>}
     * @memberof DropdownList
     */
    items: Array<ListItem>;
    /**
     * Template to bind to items in the `DropdownList` (optional).
     * @type {(string | TemplateRef<any>)}
     * @memberof DropdownList
     */
    listTpl: string | TemplateRef<any>;
    /**
     * Event to emit selection of a list item within the `DropdownList`.
     * @type {EventEmitter<Object>}
     * @memberof DropdownList
     */
    select: EventEmitter<Object>;
    /**
     * Maintains a reference to the view DOM element for the unordered list of items within the `DropdownList`.
     * @type {ElementRef}
     * @memberof DropdownList
     */
    list: ElementRef;
    /**
     * Keeps a reference to the "clear selection" element
     */
    clearSelected: ElementRef;
    /**
     * Defines whether or not the `DropdownList` supports selecting multiple items as opposed to single
     * item selection.
     * @type {("single" | "multi")}
     * @memberof DropdownList
     */
    type: "single" | "multi";
    /**
     * Defines the rendering size of the `DropdownList` input component.
     * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
     * @type {("sm" | "md" | "default" | "lg")}
     * @memberof DropdownList
     */
    size: "sm" | "md" | "default" | "lg";
    /**
     * Holds the list of items that will be displayed in the `DropdownList`.
     * It differs from the the complete set of items when filtering is used (but
     * it is always a subset of the total items in `DropdownList`).
     * @type {Array<ListItem>}
     * @memberof DropdownList
     */
    displayItems: Array<ListItem>;
    /**
     * Maintains the index for the selected item within the `DropdownList`.
     * @protected
     * @type {number}
     * @memberof DropdownList
     */
    protected index: number;
    /**
     * An array holding the HTML list elements in the view.
     * @protected
     * @type {HTMLElement[]}
     * @memberof DropdownList
     */
    protected listElementList: HTMLElement[];
    /**
     * Observable bound to keydown events to control filtering.
     * @protected
     * @memberof DropdownList
     */
    protected focusJump: any;
    /**
     * Creates an instance of `DropdownList`.
     * @param {ElementRef} elementRef
     * @memberof DropdownList
     */
    constructor(elementRef: ElementRef);
    /**
     * Updates list when changes occur within the items belonging to the `DropdownList`.
     * @param {any} changes
     * @memberof DropdownList
     */
    ngOnChanges(changes: any): void;
    /**
     * Retrieves array of list items and index of the selected item after view has rendered.
     * Additionally, any Observables for the `DropdownList` are initialized.
     * @memberof DropdownList
     */
    ngAfterViewInit(): void;
    /**
     * Removes any Observables on destruction of the component.
     * @memberof DropdownList
     */
    ngOnDestroy(): void;
    /**
     * Updates the displayed list of items and then retrieves the most current properties for the `DropdownList` from the DOM.
     * @param {any} items
     * @memberof DropdownList
     */
    updateList(items: any): void;
    /**
     * Filters the items being displayed in the DOM list.
     * @param {string}
     * @memberof DropdownList
     */
    filterBy(query?: string): void;
    /**
     * Initializes (or re-initializes) the Observable that handles switching focus to an element based on
     * key input matching the first letter of the item in the list.
     * @memberof DropdownList
     */
    setupFocusObservable(): void;
    /**
     * Returns the `ListItem` that is subsequent to the selected item in the `DropdownList`.
     * @returns {ListItem}
     * @memberof DropdownList
     */
    getNextItem(): ListItem;
    /**
     * Returns `true` if the selected item is not the last item in the `DropdownList`.
     * @returns {boolean}
     * @memberof DropdownList
     */
    hasNextElement(): boolean;
    /**
     * Returns the `HTMLElement` for the item that is subsequent to the selected item.
     * @returns {HTMLElement}
     * @memberof DropdownList
     */
    getNextElement(): HTMLElement;
    /**
     * Returns the `ListItem` that precedes the selected item within `DropdownList`.
     * @returns {ListItem}
     * @memberof DropdownList
     */
    getPrevItem(): ListItem;
    /**
     * Returns `true` if the selected item is not the first in the list.
     * @returns {boolean}
     * @memberof DropdownList
     */
    hasPrevElement(): boolean;
    /**
     * Returns the `HTMLElement` for the item that precedes the selected item.
     * @returns {HTMLElement}
     * @memberof DropdownList
     */
    getPrevElement(): HTMLElement;
    /**
     * Returns the `ListItem` that is selected within `DropdownList`.
     * @returns {ListItem}
     * @memberof DropdownList
     */
    getCurrentItem(): ListItem;
    /**
     * Returns the `HTMLElement` for the item that is selected within the `DropdownList`.
     * @returns {HTMLElement}
     * @memberof DropdownList
     */
    getCurrentElement(): HTMLElement;
    /**
     * Returns a list containing the selected item(s) in the `DropdownList`.
     * @returns {ListItem[]}
     * @memberof DropdownList
     */
    getSelected(): ListItem[];
    /**
     * Transforms array input list of items to the correct state by updating the selected item(s).
     * @param {Array<ListItem>} value
     * @memberof DropdownList
     */
    propagateSelected(value: Array<ListItem>): void;
    /**
     * Initalizes focus in the list, effectivly a wrapper for `getCurrentElement().focus()`
     */
    initFocus(): void;
    /**
     * Manages the keyboard accessiblity for navigation and selection within a `DropdownList`.
     * @param {any} event
     * @param {any} item
     * @memberof DropdownList
     */
    doKeyDown(event: KeyboardEvent, item: ListItem): void;
    /**
     * Emits the selected item or items after a mouse click event has occurred.
     * @param {any} event
     * @param {any} item
     * @memberof DropdownList
     */
    doClick(event: any, item: any): void;
}
