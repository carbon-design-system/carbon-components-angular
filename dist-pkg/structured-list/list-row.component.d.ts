import { QueryList, AfterContentInit, ElementRef, EventEmitter } from "@angular/core";
import { ListColumn } from "./list-column.component";
/**
 * `ListRow` provides a container for the `ListColumn`s that make up the body of a structured list.
 *
 * Example:
 * ```html
 * 	<ibm-list-row>
 *		<ibm-list-column>Row 1</ibm-list-column>
 *		<ibm-list-column nowrap="true">Row One</ibm-list-column>
 *		<ibm-list-column>
 *			Lorem ipsum dolor sit amet,
 *			consectetur adipiscing elit. Nunc dui magna,
 *			finibus id tortor sed, aliquet bibendum augue.
 *			Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
 *			Pellentesque vulputate nisl a porttitor interdum.
 *		</ibm-list-column>
 *	</ibm-list-row>
 * ```
 */
export declare class ListRow implements AfterContentInit {
    selected: boolean;
    /**
     * Applies an accessible label to the row. Defaults to no label.
     */
    label: any;
    /**
     * The value for the row. Returned via `ngModel` or `selected` event on the containing `StructuredList`.
     */
    value: any;
    /**
     * Internal event used to notify the containing `StructuredList` of changes.
     */
    change: EventEmitter<Event>;
    /**
     * Set by the containing `StructuredList`. Enables or disables row level selection features.
     */
    selection: boolean;
    /**
     * Set by the containing `StructuredList`. When `selection = true`, used for the `name` property on the radio input.
     */
    name: string;
    wrapper: boolean;
    tabindex: string;
    columns: QueryList<ListColumn>;
    input: ElementRef;
    ngAfterContentInit(): void;
    onclick(): boolean;
    onChange(event: any): void;
}
