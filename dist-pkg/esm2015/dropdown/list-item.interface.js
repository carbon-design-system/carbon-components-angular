/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A generic structure that represents an item in a list.
 * A list item may contain additional lists with sub-items to represent a tree.
 *
 * ```typescript
 * export interface ListItem {
 * 	content: string;
 * 	selected: boolean;
 * 	disabled?: boolean;
 * 	items?: ListItem[];
 * }
 * ```
 *
 * `content` and `selected` are the only **required** properties you **must** provide.
 * When using a custom item template (supported by all the Carbon-Angular item views, not required by AbstractDropdownView)
 * the entire ListItem will be passed to the template as `item`.
 * @record
 */
export function ListItem() { }
function ListItem_tsickle_Closure_declarations() {
    /**
     * Content to be displayed in the list.
     * @type {?}
     */
    ListItem.prototype.content;
    /**
     * Flag for the selected state of the item.
     * @type {?}
     */
    ListItem.prototype.selected;
    /**
     * If the item is in a disabled state.
     * (Note: not all lists have to support disabled states, and not all lists behave the same with disabled items)
     * @type {?|undefined}
     */
    ListItem.prototype.disabled;
    /**
     * Optional nested items.
     * @type {?|undefined}
     */
    ListItem.prototype.items;
    /* TODO: handle strange member:
    [x: string]: any;
    */
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJkcm9wZG93bi9saXN0LWl0ZW0uaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgZ2VuZXJpYyBzdHJ1Y3R1cmUgdGhhdCByZXByZXNlbnRzIGFuIGl0ZW0gaW4gYSBsaXN0LlxuICogQSBsaXN0IGl0ZW0gbWF5IGNvbnRhaW4gYWRkaXRpb25hbCBsaXN0cyB3aXRoIHN1Yi1pdGVtcyB0byByZXByZXNlbnQgYSB0cmVlLlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGV4cG9ydCBpbnRlcmZhY2UgTGlzdEl0ZW0ge1xuICogXHRjb250ZW50OiBzdHJpbmc7XG4gKiBcdHNlbGVjdGVkOiBib29sZWFuO1xuICogXHRkaXNhYmxlZD86IGJvb2xlYW47XG4gKiBcdGl0ZW1zPzogTGlzdEl0ZW1bXTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIGBjb250ZW50YCBhbmQgYHNlbGVjdGVkYCBhcmUgdGhlIG9ubHkgKipyZXF1aXJlZCoqIHByb3BlcnRpZXMgeW91ICoqbXVzdCoqIHByb3ZpZGUuXG4gKiBXaGVuIHVzaW5nIGEgY3VzdG9tIGl0ZW0gdGVtcGxhdGUgKHN1cHBvcnRlZCBieSBhbGwgdGhlIENhcmJvbi1Bbmd1bGFyIGl0ZW0gdmlld3MsIG5vdCByZXF1aXJlZCBieSBBYnN0cmFjdERyb3Bkb3duVmlldylcbiAqIHRoZSBlbnRpcmUgTGlzdEl0ZW0gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGBpdGVtYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMaXN0SXRlbSB7XG5cdC8qKlxuXHQgKiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgbGlzdC5cblx0ICovXG5cdGNvbnRlbnQ6IHN0cmluZztcblx0LyoqXG5cdCAqIEZsYWcgZm9yIHRoZSBzZWxlY3RlZCBzdGF0ZSBvZiB0aGUgaXRlbS5cblx0ICovXG5cdHNlbGVjdGVkOiBib29sZWFuO1xuXHQvKipcblx0ICogSWYgdGhlIGl0ZW0gaXMgaW4gYSBkaXNhYmxlZCBzdGF0ZS5cblx0ICogKE5vdGU6IG5vdCBhbGwgbGlzdHMgaGF2ZSB0byBzdXBwb3J0IGRpc2FibGVkIHN0YXRlcywgYW5kIG5vdCBhbGwgbGlzdHMgYmVoYXZlIHRoZSBzYW1lIHdpdGggZGlzYWJsZWQgaXRlbXMpXG5cdCAqL1xuXHRkaXNhYmxlZD86IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBPcHRpb25hbCBuZXN0ZWQgaXRlbXMuXG5cdCAqL1xuXHRpdGVtcz86IExpc3RJdGVtW107XG5cblx0LyoqXG5cdCAqIEFsbG93cyBmb3IgYW55IG90aGVyIGN1c3RvbSBwcm9wZXJ0aWVzIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBMaXN0SXRlbVxuXHQgKi9cblx0W3g6IHN0cmluZ106IGFueTtcbn1cbiJdfQ==