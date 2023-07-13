import {
	Component,
	Input,
	ContentChildren,
	QueryList,
	AfterContentInit,
	Output,
	EventEmitter
} from "@angular/core";
import { ListRow } from "./list-row.component";
import { ListHeader } from "./list-header.component";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

/**
 * Structured Lists represent related tabular data. For larger datasets consider a full `Table`.
 *
 * [See demo](../../?path=/story/components-structured-list--basic)
 *
 * See [structured-list/usage](https://www.carbondesignsystem.com/components/structured-list/usage) for usage guidance.
 *
 * A basic structued list looks something like:
 * ```html
 *	<cds-structured-list>
 *		<cds-list-header>
 *			<cds-list-column nowrap="true">Column 1</cds-list-column>
 *			<cds-list-column nowrap="true">Column 2</cds-list-column>
 *			<cds-list-column>Column 3</cds-list-column>
 *		</cds-list-header>
 *		<cds-list-row>
 *			<cds-list-column>Row 1</cds-list-column>
 *			<cds-list-column nowrap="true">Row One</cds-list-column>
 *			<cds-list-column>
 *				Lorem ipsum dolor sit amet,
 *				consectetur adipiscing elit. Nunc dui magna,
 *				finibus id tortor sed, aliquet bibendum augue.
 *				Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
 *				Pellentesque vulputate nisl a porttitor interdum.
 *			</cds-list-column>
 *		</cds-list-row>
 *		<cds-list-row>
 *			<cds-list-column>Row 2</cds-list-column>
 *			<cds-list-column nowrap="true">Row Two</cds-list-column>
 *			<cds-list-column>
 *				Lorem ipsum dolor sit amet,
 *				consectetur adipiscing elit. Nunc dui magna,
 *				finibus id tortor sed, aliquet bibendum augue.
 *				Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
 *				Pellentesque vulputate nisl a porttitor interdum.
 *			</cds-list-column>
 *		</cds-list-row>
 *	</cds-structured-list>
 * ```
 */
@Component({
	selector: "cds-structured-list, ibm-structured-list",
	template: `
		<div
			class="cds--structured-list"
			role="table"
			[ngClass]="{
				'cds--structured-list--flush': flushed,
				'cds--structured-list--selection': selection,
				'cds--structured-list--condensed': condensed,
				'cds--skeleton': skeleton
			}">
			<ng-content select="cds-list-header"></ng-content>
			<div class="cds--structured-list-tbody" role="rowgroup">
				<ng-content></ng-content>
			</div>
		</div>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: StructuredList,
			multi: true
		}
	]
})
export class StructuredList implements AfterContentInit, ControlValueAccessor {
	/**
	 * A counter to provide unique default values.
	 */
	static listCount = 0;
	/**
	 * Set to `true` to enable radio like selection of the rows.
	 */
	@Input() selection = false;
	/**
	 * Set to `true` to align content with margin
	 */
	@Input() flushed = false;
	/**
	 * Set to `true` to apply a condensed style to the headers and rows.
	 */
	@Input() condensed = false;
	/**
	 * Used when `selection = true` as the row radio group `name`
	 */
	@Input() name = `structured-list-${StructuredList.listCount++}`;

	/**
	 * Sets the skeleton value for all `ListHeader` to the skeleton value of `StructuredList`.
	 */
	@Input()
	set skeleton(value: any) {
		this._skeleton = value;
		this.updateChildren();
	}

	/**
	 * Returns the skeleton value in the `StructuredList` if there is one.
	 */
	get skeleton(): any {
		return this._skeleton;
	}

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
	@Output() selected: EventEmitter<{value: string, selected: boolean, name: string}> = new EventEmitter();

	@ContentChildren(ListRow) rows: QueryList<ListRow>;
	@ContentChildren(ListHeader) headers: QueryList<ListHeader>;

	protected _skeleton = false;

	onChange = (_: any) => { };

	onTouched = () => { };

	ngAfterContentInit() {
		const setSelection = (rowOrHeader: ListRow | ListHeader) => {
			rowOrHeader.selection = this.selection;
		};

		this.headers.forEach(setSelection);
		this.rows.forEach(row => {
			setSelection(row);
			row.name = this.name;
			row.tabindex = this.selection ? "0" : null;
			row.change.subscribe(() => {
				this.selected.emit({
					value: row.value,
					selected: row.selected,
					name: this.name
				});
				this.onChange(row.value);
			});
		});
		this.updateChildren();
	}

	writeValue(value: any) {
		if (!this.rows) { return; }
		this.rows.forEach(row => {
			if (row.value === value) {
				row.selected = true;
			} else {
				row.selected = false;
			}
		});
	}

	registerOnChange(fn: any) {
		this.onChange = fn;
	}

	registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	protected updateChildren() {
		if (this.headers) {
			this.headers.toArray().forEach(child => child.skeleton = this.skeleton);
		}
	}
}
