/**
 * A generic structure that represents an item in a list
 *
 * may contain additional lists with sub-items to represent a tree
 */
export interface ListItem {
	/** content to be displayed in the list */
	content: string;
	/** flag for the selected state of the item */
	selected: boolean;
	/** if the item is disabled
	 * (note: not all lists have to support disabled states, and not all lists behave the same with disabled items)
	 * */
	disabled?: boolean;
	/** optional nested items */
	items?: ListItem[];
}
