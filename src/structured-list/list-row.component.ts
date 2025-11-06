import {
	Component,
	HostBinding,
	ContentChildren,
	QueryList,
	AfterContentInit,
	Input,
	HostListener,
	ViewChild,
	ElementRef,
	EventEmitter,
	Output
} from "@angular/core";
import { ListColumn } from "./list-column.component";
import { IconDirective } from "carbon-components-angular/icon";

/**
 * `ListRow` provides a container for the `ListColumn`s that make up the body of a structured list.
 *
 * Example:
 * ```html
 * 	<cds-list-row>
 *		<cds-list-column>Row 1</cds-list-column>
 *		<cds-list-column nowrap="true">Row One</cds-list-column>
 *		<cds-list-column>
 *			Lorem ipsum dolor sit amet,
 *			consectetur adipiscing elit. Nunc dui magna,
 *			finibus id tortor sed, aliquet bibendum augue.
 *			Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
 *			Pellentesque vulputate nisl a porttitor interdum.
 *		</cds-list-column>
 *	</cds-list-row>
 * ```
 */
@Component({
	selector: "cds-list-row, ibm-list-row",
	template: `
		<ng-content />
		@if (selection) {
			<input
				#input
				class="cds--structured-list-input cds--visually-hidden"
				type="radio"
				[value]="value"
				[name]="name"
				[title]="label"
				(focus)="handleFocus(true)"
				(blur)="handleFocus(false)"
				(change)="onChange($event)"
				[checked]="selected" />
			<div class="cds--structured-list-td">
				<svg cdsIcon="checkmark--filled" size="16" class="cds--structured-list-svg"></svg>
			</div>
		}
	`,
	standalone: true,
	imports: [IconDirective]
})
export class ListRow implements AfterContentInit {
	@HostBinding("class.cds--structured-list-row--focused-within") get focusClass() {
		return this.isFocused;
	}
	@Input() @HostBinding("class.cds--structured-list-row--selected") selected = false;
	/**
	 * Applies an accessible label to the row. Defaults to no label.
	 */
	@Input() @HostBinding("attr.aria-label") label;
	/**
	 * The value for the row. Returned via `ngModel` or `selected` event on the containing `StructuredList`.
	 */
	@Input() value;
	/**
	 * Internal event used to notify the containing `StructuredList` of changes.
	 */
	// eslint-disable-next-line @angular-eslint/no-output-native
	@Output() change: EventEmitter<Event> = new EventEmitter();

	/**
	 * Set by the containing `StructuredList`. Enables or disables row level selection features.
	 */
	selection = false;
	/**
	 * Set by the containing `StructuredList`. When `selection = true`, used for the `name` property on the radio input.
	 */
	name = "list";

	@HostBinding("class.cds--structured-list-row") wrapper = true;
	@HostBinding("attr.role") role = "row";

	@ContentChildren(ListColumn) columns: QueryList<ListColumn>;

	@ViewChild("input") input: ElementRef;

	private isFocused = false;

	ngAfterContentInit() {
		this.columns.forEach(column => {
			column.isBodyColumn = true;
			column.isHeaderColumn = false;
		});
	}

	@HostListener("click")
	onclick() {
		if (this.selection) {
			this.input.nativeElement.click();
		}
	}

	onChange(event) {
		this.change.emit(event);
	}

	handleFocus(isFocused) {
		if (this.selection) {
			this.isFocused = isFocused;
			if (this.isFocused) {
				this.input.nativeElement.click();
			}
		}
	}
}
