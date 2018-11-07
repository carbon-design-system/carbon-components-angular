import { EventEmitter } from "@angular/core";
import { ListItem } from "./list-item.interface";
/**
 * A component that intends to be used within `Dropdown` must provide an implementation that extends this base class.
 * It also must provide the base class in the `@Component` meta-data.
 * ex: `providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => MyDropdownView)}]`
 *
 * @export
 * @class AbstractDropdownView
 */
export declare class AbstractDropdownView {
    /**
     * The items to be displayed in the list within the `AbstractDropDownView`.
     * @type {Array<ListItem>}
     * @memberof AbstractDropdownView
     */
    items: Array<ListItem>;
    /**
     * Emits selection events to other class.
     * @type {EventEmitter<Object>}
     * @memberof AbstractDropdownView
     */
    select: EventEmitter<Object>;
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
     * Returns the `HTMLElement` for the item that is subsequent to the selected item.
     */
    getNextElement(): HTMLElement;
    /**
     * Returns the `ListItem` that precedes the selected item within `DropdownList`.
     */
    getPrevItem(): ListItem;
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
     * Transforms array input list of items to the correct state by updating the selected item(s).
     */
    propagateSelected(value: Array<ListItem>): void;
    /**
     * Initalizes focus in the list
     * In most cases this just calls `getCurrentElement().focus()`
     */
    initFocus(): void;
}
