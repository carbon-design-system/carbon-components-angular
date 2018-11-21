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
 */
export declare class DropdownList implements AbstractDropdownView, AfterViewInit, OnChanges, OnDestroy {
    elementRef: ElementRef;
    /**
     * The list items belonging to the `DropdownList`.
     */
    items: Array<ListItem>;
    /**
     * Template to bind to items in the `DropdownList` (optional).
     */
    listTpl: string | TemplateRef<any>;
    /**
     * Event to emit selection of a list item within the `DropdownList`.
     */
    select: EventEmitter<Object>;
    /**
     * Maintains a reference to the view DOM element for the unordered list of items within the `DropdownList`.
     */
    list: ElementRef;
    /**
     * Keeps a reference to the "clear selection" element
     */
    clearSelected: ElementRef;
    /**
     * Defines whether or not the `DropdownList` supports selecting multiple items as opposed to single
     * item selection.
     */
    type: "single" | "multi";
    /**
     * Defines the rendering size of the `DropdownList` input component.
     */
    size: "sm" | "md" | "lg";
    /**
     * Holds the list of items that will be displayed in the `DropdownList`.
     * It differs from the the complete set of items when filtering is used (but
     * it is always a subset of the total items in `DropdownList`).
     */
    displayItems: Array<ListItem>;
    /**
     * Maintains the index for the selected item within the `DropdownList`.
     */
    protected index: number;
    /**
     * An array holding the HTML list elements in the view.
     */
    protected listElementList: HTMLElement[];
    /**
     * Observable bound to keydown events to control filtering.
     */
    protected focusJump: any;
    /**
     * Creates an instance of `DropdownList`.
     */
    constructor(elementRef: ElementRef);
    /**
     * Updates list when changes occur within the items belonging to the `DropdownList`.
     */
    ngOnChanges(changes: any): void;
    /**
     * Retrieves array of list items and index of the selected item after view has rendered.
     * Additionally, any Observables for the `DropdownList` are initialized.
     */
    ngAfterViewInit(): void;
    /**
     * Removes any Observables on destruction of the component.
     */
    ngOnDestroy(): void;
    /**
     * Updates the displayed list of items and then retrieves the most current properties for the `DropdownList` from the DOM.
     */
    updateList(items: any): void;
    /**
     * Filters the items being displayed in the DOM list.
     */
    filterBy(query?: string): void;
    /**
     * Initializes (or re-initializes) the Observable that handles switching focus to an element based on
     * key input matching the first letter of the item in the list.
     */
    setupFocusObservable(): void;
    /**
     * Returns the `ListItem` that is subsequent to the selected item in the `DropdownList`.
     */
    getNextItem(): ListItem;
    /**
     * Returns `true` if the selected item is not the last item in the `DropdownList`.
     */
    hasNextElement(): boolean;
    /**
     * Returns the `HTMLElement` for the item that is subsequent to the selected item.
     */
    getNextElement(): HTMLElement;
    /**
     * Returns the `ListItem` that precedes the selected item within `DropdownList`.
     */
    getPrevItem(): ListItem;
    /**
     * Returns `true` if the selected item is not the first in the list.
     */
    hasPrevElement(): boolean;
    /**
     * Returns the `HTMLElement` for the item that precedes the selected item.
     */
    getPrevElement(): HTMLElement;
    /**
     * Returns the `ListItem` that is selected within `DropdownList`.
     */
    getCurrentItem(): ListItem;
    /**
     * Returns the `HTMLElement` for the item that is selected within the `DropdownList`.
     */
    getCurrentElement(): HTMLElement;
    /**
     * Returns a list containing the selected item(s) in the `DropdownList`.
     */
    getSelected(): ListItem[];
    /**
     * Transforms array input list of items to the correct state by updating the selected item(s).
     */
    propagateSelected(value: Array<ListItem>): void;
    /**
     * Initalizes focus in the list, effectivly a wrapper for `getCurrentElement().focus()`
     */
    initFocus(): void;
    /**
     * Manages the keyboard accessiblity for navigation and selection within a `DropdownList`.
     */
    doKeyDown(event: KeyboardEvent, item: ListItem): void;
    /**
     * Emits the selected item or items after a mouse click event has occurred.
     */
    doClick(event: any, item: any): void;
}
