import { OnDestroy, EventEmitter, TemplateRef, AfterViewInit, ElementRef, QueryList } from "@angular/core";
import { I18n } from "../../i18n/i18n.module";
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { ListItem } from "./../list-item.interface";
import { Observable, Subscription } from "rxjs";
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
export declare class DropdownList implements AbstractDropdownView, AfterViewInit, OnDestroy {
    elementRef: ElementRef;
    protected i18n: I18n;
    ariaLabel: any;
    /**
     * The list items belonging to the `DropdownList`.
     */
    items: Array<ListItem> | Observable<Array<ListItem>>;
    /**
     * Template to bind to items in the `DropdownList` (optional).
     */
    listTpl: string | TemplateRef<any>;
    /**
     * Event to emit selection of a list item within the `DropdownList`.
     */
    select: EventEmitter<Object>;
    /**
     * Event to suggest a blur on the view.
     * Emits _after_ the first/last item has been focused.
     * ex.
     * ArrowUp -> focus first item
     * ArrowUp -> emit event
     *
     * When this event fires focus should be placed on some element outside of the list - blurring the list as a result
     */
    blurIntent: EventEmitter<"bottom" | "top">;
    /**
     * Maintains a reference to the view DOM element for the unordered list of items within the `DropdownList`.
     */
    list: ElementRef;
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
    protected listElementList: QueryList<ElementRef>;
    /**
     * Observable bound to keydown events to control filtering.
     */
    protected focusJump: any;
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
    protected _items: Array<ListItem>;
    /**
     * Creates an instance of `DropdownList`.
     */
    constructor(elementRef: ElementRef, i18n: I18n);
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
     * TODO: standardize
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
     * TODO: standardize
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
     * Returns the items as an Array
     */
    getListItems(): Array<ListItem>;
    /**
     * Returns a list containing the selected item(s) in the `DropdownList`.
     */
    getSelected(): ListItem[];
    /**
     * Transforms array input list of items to the correct state by updating the selected item(s).
     */
    propagateSelected(value: Array<ListItem>): void;
    /**
     * Initializes focus in the list, effectively a wrapper for `getCurrentElement().focus()`
     */
    initFocus(): void;
    /**
     * Manages the keyboard accessibility for navigation and selection within a `DropdownList`.
     */
    doKeyDown(event: KeyboardEvent, item: ListItem): void;
    /**
     * Emits the selected item or items after a mouse click event has occurred.
     */
    doClick(event: any, item: any): void;
    onItemFocus(index: any): void;
    onItemBlur(index: any): void;
}
