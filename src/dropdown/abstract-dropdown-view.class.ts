import { Input, Output, EventEmitter } from "@angular/core";
import { ListItem } from "./list-item.interface";


/**
 * A component that intends to be used within `Dropdown` must provide an implementation that extends this base class.
 * It also must provide the base class in the `@Component` meta-data.
 * ex: `providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => MyDropdownView)}]`
 *
 * @export
 * @class AbstractDropdownView
 */
export class AbstractDropdownView {
	/**
	 * The items to be displayed in the list within the `AbstractDropDownView`.
	 * @type {Array<ListItem>}
	 * @memberof AbstractDropdownView
	 */
	@Input() items: Array<ListItem>;
	/**
	 * Emits selection events to other class.
	 * @type {EventEmitter<Object>}
	 * @memberof AbstractDropdownView
	 */
	@Output() select: EventEmitter<Object>;
	/**
	 * Specifies whether or not the `DropdownList` supports selecting multiple items as opposed to single
	 * item selection.
	 * @type {("single" | "multi")}
	 * @memberof AbstractDropdownView
	 */
	public type: "single" | "multi" = "single";
	/**
	 * Specifies the render size of the items within the `AbstractDropdownView`.
	 * @type {("sm" | "default" | "lg")}
	 * @memberof AbstractDropdownView
	 */
	public size: "sm" | "default" | "lg" = "default";
	/**
	 * Returns the `ListItem` that is subsequent to the selected item in the `DropdownList`.
	 * @returns {ListItem}
	 * @memberof AbstractDropdownView
	 */
	getNextItem(): ListItem { return; }
	/**
	 * Returns the `HTMLElement` for the item that is subsequent to the selected item.
	 * @returns {HTMLElement}
	 * @memberof AbstractDropdownView
	 */
	getNextElement(): HTMLElement { return; }
	/**
	 * Returns the `ListItem` that precedes the selected item within `DropdownList`.
	 * @returns {ListItem}
	 * @memberof AbstractDropdownView
	 */
	getPrevItem(): ListItem { return; }
	/**
	 * Returns the `HTMLElement` for the item that precedes the selected item.
	 * @returns {HTMLElement}
	 * @memberof AbstractDropdownView
	 */
	getPrevElement(): HTMLElement { return; }
	/**
	 * Returns the selected leaf level item(s) within the `DropdownList`.
	 * @returns {ListItem[]}
	 * @memberof AbstractDropdownView
	 */
	getSelected(): ListItem[] { return; }
	/**
	 * Returns the `ListItem` that is selected within `DropdownList`.
	 * @returns {ListItem}
	 * @memberof AbstractDropdownView
	 */
	getCurrentItem(): ListItem { return; }
	/**
	 * Returns the `HTMLElement` for the item that is selected within the `DropdownList`.
	 * @returns {HTMLElement}
	 * @memberof AbstractDropdownView
	 */
	getCurrentElement(): HTMLElement { return; }
	/**
	 * Transforms array input list of items to the correct state by updating the selected item(s).
	 * @param {Array<ListItem>} value
	 * @memberof AbstractDropdownView
	 */
	propagateSelected(value: Array<ListItem>): void {}
}
