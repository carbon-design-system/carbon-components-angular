/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Input, Output, EventEmitter } from "@angular/core";
/**
 * A component that intends to be used within `Dropdown` must provide an implementation that extends this base class.
 * It also must provide the base class in the `\@Component` meta-data.
 * ex: `providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => MyDropdownView)}]`
 */
export class AbstractDropdownView {
    constructor() {
        /**
         * Specifies whether or not the `DropdownList` supports selecting multiple items as opposed to single
         * item selection.
         */
        this.type = "single";
        /**
         * Specifies the render size of the items within the `AbstractDropdownView`.
         */
        this.size = "md";
    }
    /**
     * The items to be displayed in the list within the `AbstractDropDownView`.
     * @param {?} value
     * @return {?}
     */
    set items(value) { }
    /**
     * @return {?}
     */
    get items() { return; }
    /**
     * Returns the `ListItem` that is subsequent to the selected item in the `DropdownList`.
     * @return {?}
     */
    getNextItem() { return; }
    /**
     * Returns a boolean if the currently selected item is preceded by another
     * @return {?}
     */
    hasNextElement() { return; }
    /**
     * Returns the `HTMLElement` for the item that is subsequent to the selected item.
     * @return {?}
     */
    getNextElement() { return; }
    /**
     * Returns the `ListItem` that precedes the selected item within `DropdownList`.
     * @return {?}
     */
    getPrevItem() { return; }
    /**
     * Returns a boolean if the currently selected item is followed by another
     * @return {?}
     */
    hasPrevElement() { return; }
    /**
     * Returns the `HTMLElement` for the item that precedes the selected item.
     * @return {?}
     */
    getPrevElement() { return; }
    /**
     * Returns the selected leaf level item(s) within the `DropdownList`.
     * @return {?}
     */
    getSelected() { return; }
    /**
     * Returns the `ListItem` that is selected within `DropdownList`.
     * @return {?}
     */
    getCurrentItem() { return; }
    /**
     * Returns the `HTMLElement` for the item that is selected within the `DropdownList`.
     * @return {?}
     */
    getCurrentElement() { return; }
    /**
     * Guaranteed to return the current items as an Array.
     * @return {?}
     */
    getListItems() { return; }
    /**
     * Transforms array input list of items to the correct state by updating the selected item(s).
     * @param {?} value
     * @return {?}
     */
    propagateSelected(value) { }
    /**
     *
     * @param {?} value value to filter the list by
     * @return {?}
     */
    filterBy(value) { }
    /**
     * Initializes focus in the list
     * In most cases this just calls `getCurrentElement().focus()`
     * @return {?}
     */
    initFocus() { }
}
AbstractDropdownView.propDecorators = {
    items: [{ type: Input }],
    select: [{ type: Output }],
    blurIntent: [{ type: Output }]
};
function AbstractDropdownView_tsickle_Closure_declarations() {
    /**
     * Emits selection events to controlling classes
     *
     * Deprecated: `Object` as a valid type.
     * @type {?}
     */
    AbstractDropdownView.prototype.select;
    /**
     * Event to suggest a blur on the view.
     * Emits _after_ the first/last item has been focused.
     * ex.
     * ArrowUp -> focus first item
     * ArrowUp -> emit event
     *
     * It's recommended that the implementing view include a specific type union of possible blurs
     * ex. `\@Output() blurIntent = new EventEmitter<"top" | "bottom">();`
     * @type {?}
     */
    AbstractDropdownView.prototype.blurIntent;
    /**
     * Specifies whether or not the `DropdownList` supports selecting multiple items as opposed to single
     * item selection.
     * @type {?}
     */
    AbstractDropdownView.prototype.type;
    /**
     * Specifies the render size of the items within the `AbstractDropdownView`.
     * @type {?}
     */
    AbstractDropdownView.prototype.size;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtZHJvcGRvd24tdmlldy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJkcm9wZG93bi9hYnN0cmFjdC1kcm9wZG93bi12aWV3LmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVU1RCxNQUFNOzs7Ozs7b0JBNEI2QixRQUFROzs7O29CQUlSLElBQUk7Ozs7Ozs7SUE1QnRDLElBQWEsS0FBSyxDQUFDLEtBQW9ELEtBQUs7Ozs7SUFFNUUsSUFBSSxLQUFLLEtBQW9ELE9BQU8sRUFBRTs7Ozs7SUE4QnRFLFdBQVcsS0FBZSxPQUFPLEVBQUU7Ozs7O0lBSW5DLGNBQWMsS0FBYyxPQUFPLEVBQUU7Ozs7O0lBSXJDLGNBQWMsS0FBa0IsT0FBTyxFQUFFOzs7OztJQUl6QyxXQUFXLEtBQWUsT0FBTyxFQUFFOzs7OztJQUluQyxjQUFjLEtBQWMsT0FBTyxFQUFFOzs7OztJQUlyQyxjQUFjLEtBQWtCLE9BQU8sRUFBRTs7Ozs7SUFJekMsV0FBVyxLQUFpQixPQUFPLEVBQUU7Ozs7O0lBSXJDLGNBQWMsS0FBZSxPQUFPLEVBQUU7Ozs7O0lBSXRDLGlCQUFpQixLQUFrQixPQUFPLEVBQUU7Ozs7O0lBSTVDLFlBQVksS0FBc0IsT0FBTyxFQUFFOzs7Ozs7SUFJM0MsaUJBQWlCLENBQUMsS0FBc0IsS0FBVTs7Ozs7O0lBS2xELFFBQVEsQ0FBQyxLQUFhLEtBQVU7Ozs7OztJQUtoQyxTQUFTLE1BQVc7OztvQkFsRm5CLEtBQUs7cUJBUUwsTUFBTTt5QkFXTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSBcIi4vbGlzdC1pdGVtLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cblxuLyoqXG4gKiBBIGNvbXBvbmVudCB0aGF0IGludGVuZHMgdG8gYmUgdXNlZCB3aXRoaW4gYERyb3Bkb3duYCBtdXN0IHByb3ZpZGUgYW4gaW1wbGVtZW50YXRpb24gdGhhdCBleHRlbmRzIHRoaXMgYmFzZSBjbGFzcy5cbiAqIEl0IGFsc28gbXVzdCBwcm92aWRlIHRoZSBiYXNlIGNsYXNzIGluIHRoZSBgQENvbXBvbmVudGAgbWV0YS1kYXRhLlxuICogZXg6IGBwcm92aWRlcnM6IFt7cHJvdmlkZTogQWJzdHJhY3REcm9wZG93blZpZXcsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE15RHJvcGRvd25WaWV3KX1dYFxuICovXG5leHBvcnQgY2xhc3MgQWJzdHJhY3REcm9wZG93blZpZXcge1xuXHQvKipcblx0ICogVGhlIGl0ZW1zIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgbGlzdCB3aXRoaW4gdGhlIGBBYnN0cmFjdERyb3BEb3duVmlld2AuXG5cdCAqL1xuXHRASW5wdXQoKSBzZXQgaXRlbXModmFsdWU6IEFycmF5PExpc3RJdGVtPiB8IE9ic2VydmFibGU8QXJyYXk8TGlzdEl0ZW0+PikgeyB9XG5cblx0Z2V0IGl0ZW1zKCk6IEFycmF5PExpc3RJdGVtPiB8IE9ic2VydmFibGU8QXJyYXk8TGlzdEl0ZW0+PiB7IHJldHVybjsgfVxuXHQvKipcblx0ICogRW1pdHMgc2VsZWN0aW9uIGV2ZW50cyB0byBjb250cm9sbGluZyBjbGFzc2VzXG5cdCAqXG5cdCAqIERlcHJlY2F0ZWQ6IGBPYmplY3RgIGFzIGEgdmFsaWQgdHlwZS5cblx0ICovXG5cdEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjx7aXRlbTogTGlzdEl0ZW0gfSB8IExpc3RJdGVtW10gfCBPYmplY3Q+O1xuXHQvKipcblx0ICogRXZlbnQgdG8gc3VnZ2VzdCBhIGJsdXIgb24gdGhlIHZpZXcuXG5cdCAqIEVtaXRzIF9hZnRlcl8gdGhlIGZpcnN0L2xhc3QgaXRlbSBoYXMgYmVlbiBmb2N1c2VkLlxuXHQgKiBleC5cblx0ICogQXJyb3dVcCAtPiBmb2N1cyBmaXJzdCBpdGVtXG5cdCAqIEFycm93VXAgLT4gZW1pdCBldmVudFxuXHQgKlxuXHQgKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgdGhlIGltcGxlbWVudGluZyB2aWV3IGluY2x1ZGUgYSBzcGVjaWZpYyB0eXBlIHVuaW9uIG9mIHBvc3NpYmxlIGJsdXJzXG5cdCAqIGV4LiBgQE91dHB1dCgpIGJsdXJJbnRlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPFwidG9wXCIgfCBcImJvdHRvbVwiPigpO2Bcblx0ICovXG5cdEBPdXRwdXQoKSBibHVySW50ZW50OiBFdmVudEVtaXR0ZXI8YW55Pjtcblx0LyoqXG5cdCAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGUgYERyb3Bkb3duTGlzdGAgc3VwcG9ydHMgc2VsZWN0aW5nIG11bHRpcGxlIGl0ZW1zIGFzIG9wcG9zZWQgdG8gc2luZ2xlXG5cdCAqIGl0ZW0gc2VsZWN0aW9uLlxuXHQgKi9cblx0cHVibGljIHR5cGU6IFwic2luZ2xlXCIgfCBcIm11bHRpXCIgPSBcInNpbmdsZVwiO1xuXHQvKipcblx0ICogU3BlY2lmaWVzIHRoZSByZW5kZXIgc2l6ZSBvZiB0aGUgaXRlbXMgd2l0aGluIHRoZSBgQWJzdHJhY3REcm9wZG93blZpZXdgLlxuXHQgKi9cblx0cHVibGljIHNpemU6IFwic21cIiB8IFwibWRcIiB8IFwibGdcIiA9IFwibWRcIjtcblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGBMaXN0SXRlbWAgdGhhdCBpcyBzdWJzZXF1ZW50IHRvIHRoZSBzZWxlY3RlZCBpdGVtIGluIHRoZSBgRHJvcGRvd25MaXN0YC5cblx0ICovXG5cdGdldE5leHRJdGVtKCk6IExpc3RJdGVtIHsgcmV0dXJuOyB9XG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgYm9vbGVhbiBpZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0gaXMgcHJlY2VkZWQgYnkgYW5vdGhlclxuXHQgKi9cblx0aGFzTmV4dEVsZW1lbnQoKTogYm9vbGVhbiB7IHJldHVybjsgfVxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYEhUTUxFbGVtZW50YCBmb3IgdGhlIGl0ZW0gdGhhdCBpcyBzdWJzZXF1ZW50IHRvIHRoZSBzZWxlY3RlZCBpdGVtLlxuXHQgKi9cblx0Z2V0TmV4dEVsZW1lbnQoKTogSFRNTEVsZW1lbnQgeyByZXR1cm47IH1cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGBMaXN0SXRlbWAgdGhhdCBwcmVjZWRlcyB0aGUgc2VsZWN0ZWQgaXRlbSB3aXRoaW4gYERyb3Bkb3duTGlzdGAuXG5cdCAqL1xuXHRnZXRQcmV2SXRlbSgpOiBMaXN0SXRlbSB7IHJldHVybjsgfVxuXHQvKipcblx0ICogUmV0dXJucyBhIGJvb2xlYW4gaWYgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtIGlzIGZvbGxvd2VkIGJ5IGFub3RoZXJcblx0ICovXG5cdGhhc1ByZXZFbGVtZW50KCk6IGJvb2xlYW4geyByZXR1cm47IH1cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGBIVE1MRWxlbWVudGAgZm9yIHRoZSBpdGVtIHRoYXQgcHJlY2VkZXMgdGhlIHNlbGVjdGVkIGl0ZW0uXG5cdCAqL1xuXHRnZXRQcmV2RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7IHJldHVybjsgfVxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgc2VsZWN0ZWQgbGVhZiBsZXZlbCBpdGVtKHMpIHdpdGhpbiB0aGUgYERyb3Bkb3duTGlzdGAuXG5cdCAqL1xuXHRnZXRTZWxlY3RlZCgpOiBMaXN0SXRlbVtdIHsgcmV0dXJuOyB9XG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBgTGlzdEl0ZW1gIHRoYXQgaXMgc2VsZWN0ZWQgd2l0aGluIGBEcm9wZG93bkxpc3RgLlxuXHQgKi9cblx0Z2V0Q3VycmVudEl0ZW0oKTogTGlzdEl0ZW0geyByZXR1cm47IH1cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGBIVE1MRWxlbWVudGAgZm9yIHRoZSBpdGVtIHRoYXQgaXMgc2VsZWN0ZWQgd2l0aGluIHRoZSBgRHJvcGRvd25MaXN0YC5cblx0ICovXG5cdGdldEN1cnJlbnRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHsgcmV0dXJuOyB9XG5cdC8qKlxuXHQgKiBHdWFyYW50ZWVkIHRvIHJldHVybiB0aGUgY3VycmVudCBpdGVtcyBhcyBhbiBBcnJheS5cblx0ICovXG5cdGdldExpc3RJdGVtcygpOiBBcnJheTxMaXN0SXRlbT4geyByZXR1cm47IH1cblx0LyoqXG5cdCAqIFRyYW5zZm9ybXMgYXJyYXkgaW5wdXQgbGlzdCBvZiBpdGVtcyB0byB0aGUgY29ycmVjdCBzdGF0ZSBieSB1cGRhdGluZyB0aGUgc2VsZWN0ZWQgaXRlbShzKS5cblx0ICovXG5cdHByb3BhZ2F0ZVNlbGVjdGVkKHZhbHVlOiBBcnJheTxMaXN0SXRlbT4pOiB2b2lkIHt9XG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gdmFsdWUgdmFsdWUgdG8gZmlsdGVyIHRoZSBsaXN0IGJ5XG5cdCAqL1xuXHRmaWx0ZXJCeSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7fVxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgZm9jdXMgaW4gdGhlIGxpc3Rcblx0ICogSW4gbW9zdCBjYXNlcyB0aGlzIGp1c3QgY2FsbHMgYGdldEN1cnJlbnRFbGVtZW50KCkuZm9jdXMoKWBcblx0ICovXG5cdGluaXRGb2N1cygpOiB2b2lkIHt9XG59XG4iXX0=