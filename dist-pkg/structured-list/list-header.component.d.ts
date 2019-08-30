import { QueryList, AfterContentInit } from "@angular/core";
import { ListColumn } from "./list-column.component";
/**
 * `ListHeader` provides a container for the `ListColumn`s that make up the header of a structured list.
 *
 * Example:
 * ```html
 * 	<ibm-list-header>
 *		<ibm-list-column nowrap="true">Column 1</ibm-list-column>
 *		<ibm-list-column nowrap="true">Column 2</ibm-list-column>
 *		<ibm-list-column>Column 3</ibm-list-column>
 *	</ibm-list-header>
 * ```
 */
export declare class ListHeader implements AfterContentInit {
    wrapper: boolean;
    skeleton: any;
    columns: QueryList<ListColumn>;
    /**
     * Set by the containing `StructuredList`. Adds a dummy header for the selection column when set to true.
     */
    selection: boolean;
    protected _skeleton: boolean;
    ngAfterContentInit(): void;
    protected updateChildren(): void;
}
