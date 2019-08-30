import { QueryList, AfterContentInit, EventEmitter } from "@angular/core";
import { ListRow } from "./list-row.component";
import { ListHeader } from "./list-header.component";
import { ControlValueAccessor } from "@angular/forms";
/**
 * Structured Lists represent related tabular data. For larger datasets consider a full `Table`.
 *
 * [See demo](../../?path=/story/structured-list--basic)
 *
 * See [structured-list/usage](https://www.carbondesignsystem.com/components/structured-list/usage) for usage guidance.
 *
 * A basic structued list looks something like:
 * ```html
 *	<ibm-structured-list>
 *		<ibm-list-header>
 *			<ibm-list-column nowrap="true">Column 1</ibm-list-column>
 *			<ibm-list-column nowrap="true">Column 2</ibm-list-column>
 *			<ibm-list-column>Column 3</ibm-list-column>
 *		</ibm-list-header>
 *		<ibm-list-row>
 *			<ibm-list-column>Row 1</ibm-list-column>
 *			<ibm-list-column nowrap="true">Row One</ibm-list-column>
 *			<ibm-list-column>
 *				Lorem ipsum dolor sit amet,
 *				consectetur adipiscing elit. Nunc dui magna,
 *				finibus id tortor sed, aliquet bibendum augue.
 *				Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
 *				Pellentesque vulputate nisl a porttitor interdum.
 *			</ibm-list-column>
 *		</ibm-list-row>
 *		<ibm-list-row>
 *			<ibm-list-column>Row 2</ibm-list-column>
 *			<ibm-list-column nowrap="true">Row Two</ibm-list-column>
 *			<ibm-list-column>
 *				Lorem ipsum dolor sit amet,
 *				consectetur adipiscing elit. Nunc dui magna,
 *				finibus id tortor sed, aliquet bibendum augue.
 *				Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
 *				Pellentesque vulputate nisl a porttitor interdum.
 *			</ibm-list-column>
 *		</ibm-list-row>
 *	</ibm-structured-list>
 * ```
 *
 * <example-url>../../iframe.html?id=structured-list--basic</example-url>
 */
export declare class StructuredList implements AfterContentInit, ControlValueAccessor {
    /**
     * A counter to provide unique default values.
     */
    static listCount: number;
    /**
     * Set to `true` to enable radio like selection of the rows.
     */
    selection: boolean;
    /**
     * Set to `true` to apply a border and white background.
     */
    border: boolean;
    /**
     * Set to `true` to apply a condensed style to the headers and rows.
     */
    condensed: boolean;
    /**
     * Set to `true` to apply `white-space: nowrap` on _all_ conent.
     */
    nowrap: boolean;
    /**
     * Used when `selection = true` as the row radio group `name`
     */
    name: string;
    /**
     * Sets the skeleton value for all `ListHeader` to the skeleton value of `StructuredList`.
     */
    /**
    * Returns the skeleton value in the `StructuredList` if there is one.
    */
    skeleton: any;
    /**
     * Emits an event when the row selection changes.
     *
     * Emits an object that looks like:
     * ```javascript
     * {
     * 	value: "something",
     * 	selected: true,
     * 	name: "structured-list-1"
     * }
     * ```
     */
    selected: EventEmitter<{
        value: string;
        selected: boolean;
        name: string;
    }>;
    rows: QueryList<ListRow>;
    headers: QueryList<ListHeader>;
    protected _skeleton: boolean;
    onChange: (_: any) => void;
    onTouched: () => void;
    ngAfterContentInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    protected updateChildren(): void;
}
