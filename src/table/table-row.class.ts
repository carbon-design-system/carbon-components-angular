import { TableItem } from "./table-item.class";

/**
 * Represents a table row, which is essentially an array of TableItem.
 */
export class TableRow extends Array<TableItem> {
	/**
	 * Whether row is disabled or not.
	 */
	disabled = false;
}
