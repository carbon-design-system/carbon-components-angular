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
 *
 * @export
 * @interface ListItem
 */
export interface ListItem {
	/**
	 * Content to be displayed in the list.
	 * @type {string}
	 * @memberof ListItem
	 */
	content: string;
	/**
	 * Flag for the selected state of the item.
	 * @type {boolean}
	 * @memberof ListItem
	 */
	selected: boolean;
	/**
	 * If the item is in a disabled state.
	 * (Note: not all lists have to support disabled states, and not all lists behave the same with disabled items)
	 * @type {boolean}
	 * @memberof ListItem
	 */
	disabled?: boolean;
	/**
	 * Optional nested items.
	 * @type {ListItem[]}
	 * @memberof ListItem
	 */
	items?: ListItem[];

	/**
	 * Allows for any other custom properties to be included in the ListItem
	 */
	[x: string]: any;
}
