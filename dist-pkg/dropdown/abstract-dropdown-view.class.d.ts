import { EventEmitter } from "@angular/core";
import { ListItem } from "./list-item.interface";
import { Observable } from "rxjs";
/**
 * A component that intends to be used within `Dropdown` must provide an implementation that extends this base class.
 * It also must provide the base class in the `@Component` meta-data.
 * ex: `providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => MyDropdownView)}]`
 */
export declare class AbstractDropdownView {
    /**
     * The items to be displayed in the list within the `AbstractDropDownView`.
     */
    items: Array<ListItem> | Observable<Array<ListItem>>;
    /**
     * Emits selection events to controlling classes
     *
     * Deprecated: `Object` as a valid type.
     */
    select: EventEmitter<{
        item: ListItem;
    } | ListItem[] | Object>;
    /**
     * Event to suggest a blur on the view.
     * Emits _after_ the first/last item has been focused.
     * ex.
     * ArrowUp -> focus first item
     * ArrowUp -> emit event
     *
     * It's recommended that the implementing view include a specific type union of possible blurs
     * ex. `@Output() blurIntent = new EventEmitter<"top" | "bottom">();`
     */
    blurIntent: EventEmitter<any>;
    /**
     * Specifies whether or not the `DropdownList` supports selecting multiple items as opposed to single
     * item selection.
     */
    type: "single" | "multi";
    /**
     * Specifies the render size of the items within the `AbstractDropdownView`.
     */
    size: "sm" | "md" | "lg";
    /**
     * Returns the `ListItem` that is subsequent to the selected item in the `DropdownList`.
     */
    getNextItem(): ListItem;
    /**
     * Returns a boolean if the currently selected item is preceded by another
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
     * Returns a boolean if the currently selected item is followed by another
     */
    hasPrevElement(): boolean;
    /**
     * Returns the `HTMLElement` for the item that precedes the selected item.
     */
    getPrevElement(): HTMLElement;
    /**
     * Returns the selected leaf level item(s) within the `DropdownList`.
     */
    getSelected(): ListItem[];
    /**
     * Returns the `ListItem` that is selected within `DropdownList`.
     */
    getCurrentItem(): ListItem;
    /**
     * Returns the `HTMLElement` for the item that is selected within the `DropdownList`.
     */
    getCurrentElement(): HTMLElement;
    /**
     * Guaranteed to return the current items as an Array.
     */
    getListItems(): Array<ListItem>;
    /**
     * Transforms array input list of items to the correct state by updating the selected item(s).
     */
    propagateSelected(value: Array<ListItem>): void;
    /**
     *
     * @param value value to filter the list by
     */
    filterBy(value: string): void;
    /**
     * Initializes focus in the list
     * In most cases this just calls `getCurrentElement().focus()`
     */
    initFocus(): void;
}
