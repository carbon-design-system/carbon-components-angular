/**
 * `ListColumn` represents a single column in a `StructuredList`.
 *
 * `ListColumn`s can be used in a `ListHeader` to specify the column headers, or in `ListRow`s to specify the column data.
 *
 * Example:
 * ```html
 * <ibm-list-column nowrap="true">Column 1</ibm-list-column>
 * ```
 */
export declare class ListColumn {
    skeleton: boolean;
    isHeaderColumn: boolean;
    isBodyColumn: boolean;
    /**
     * Applies `white-space: nowrap` to the content of this `ListColumn`
     */
    nowrap: boolean;
}
