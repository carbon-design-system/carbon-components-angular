import {
	Input,
	Output,
	EventEmitter,
	Directive
} from "@angular/core";
import { ListItem } from "./list-item.interface";
import { Observable } from "rxjs";


/**
 * A component that intends to be used within `Dropdown` must provide an implementation that extends this base class.
 * It also must provide the base class in the `@Component` meta-data.
 * ex: `providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => MyDropdownView)}]`
 */
@Directive({
	selector: "[cdsAbstractDropdownView], [ibmAbstractDropdownView]"
})
export class AbstractDropdownView {
	/**
	 * The items to be displayed in the list within the `AbstractDropDownView`.
	 */
	@Input() set items(value: Array<ListItem> | Observable<Array<ListItem>>) { }

	get items(): Array<ListItem> | Observable<Array<ListItem>> { return; }
	/**
	 * Emits selection events to controlling classes
	 */
	@Output() select: EventEmitter<{item: ListItem } | ListItem[]>;
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
	@Output() blurIntent: EventEmitter<any>;
	/**
	 * Specifies whether or not the `DropdownList` supports selecting multiple items as opposed to single
	 * item selection.
	 */
	public type: "single" | "multi" = "single";
	/**
	 * Specifies the render size of the items within the `AbstractDropdownView`.
	 */
	public size: "sm" | "md" | "lg" = "md";
	public listId?: string;
	/**
	 * Returns the `ListItem` that is subsequent to the selected item in the `DropdownList`.
	 */
	getNextItem(): ListItem { return; }
	/**
	 * Returns a boolean if the currently selected item is preceded by another
	 */
	hasNextElement(): boolean { return; }
	/**
	 * Returns the `HTMLElement` for the item that is subsequent to the selected item.
	 */
	getNextElement(): HTMLElement { return; }
	/**
	 * Returns the `ListItem` that precedes the selected item within `DropdownList`.
	 */
	getPrevItem(): ListItem { return; }
	/**
	 * Returns a boolean if the currently selected item is followed by another
	 */
	hasPrevElement(): boolean { return; }
	/**
	 * Returns the `HTMLElement` for the item that precedes the selected item.
	 */
	getPrevElement(): HTMLElement { return; }
	/**
	 * Returns the selected leaf level item(s) within the `DropdownList`.
	 */
	getSelected(): ListItem[] { return; }
	/**
	 * Returns the `ListItem` that is selected within `DropdownList`.
	 */
	getCurrentItem(): ListItem { return; }
	/**
	 * Returns the `HTMLElement` for the item that is selected within the `DropdownList`.
	 */
	getCurrentElement(): HTMLElement { return; }
	/**
	 * Guaranteed to return the current items as an Array.
	 */
	getListItems(): Array<ListItem> { return; }
	/**
	 * Transforms array input list of items to the correct state by updating the selected item(s).
	 */
	propagateSelected(value: Array<ListItem>): void {}
	/**
	 *
	 * @param value value to filter the list by
	 */
	filterBy(value: string): void {}
	/**
	 * Initializes focus in the list
	 * In most cases this just calls `getCurrentElement().focus()`
	 */
	initFocus(): void {}
	/**
	 * Subscribe the function passed to an internal observable that will resolve once the items are ready
	 */
	onItemsReady(subcription: () => void): void {}
	/**
	 * Reorder selected items bringing them to the top of the list
	 */
	reorderSelected(moveFocus?: boolean): void {}
}
