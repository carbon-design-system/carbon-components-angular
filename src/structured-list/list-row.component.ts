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
		<ng-content></ng-content>
		<ng-container *ngIf="selection">
			<input
				#input
				tabindex="-1"
				class="cds--structured-list-input cds--visually-hidden"
				type="radio"
				[value]="value"
				[name]="name"
				[title]="label"
				(change)="onChange($event)"
				[checked]="selected"/>
			<div class="cds--structured-list-td">
				<svg cdsIcon="checkmark--filled" size="16" class="cds--structured-list-svg"></svg>
			</div>
		</ng-container>
	`
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
	@HostBinding("attr.tabindex") tabindex = this.selection ? "0" : null;
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

	@HostListener("focus")
	onfocus() {
		this.isFocused = true;
	}

	@HostListener("blur")
	onblur() {
		this.isFocused = false;
	}

	onChange(event) {
		this.change.emit(event);
	}
}
