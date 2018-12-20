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
@Component({
	selector: "ibm-list-row",
	template: `
		<ng-container *ngIf="selection">
			<input
				#input
				tabindex="-1"
				class="bx--structured-list-input"
				type="radio"
				[value]="value"
				[name]="name"
				[title]="label"
				(change)="onChange($event)"/>
			<div class="bx--structured-list-td">
				<svg class="bx--structured-list-svg" width="16" height="16" viewBox="0 0 16 16">
					<path
						d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0
						16zm3.646-10.854L6.75 10.043 4.354
						7.646l-.708.708 3.104 3.103 5.604-5.603-.708-.708z"
						fill-rule="evenodd" />
				</svg>
			</div>
		</ng-container>
		<ng-content></ng-content>
	`
})
export class ListRow implements AfterContentInit {
	@Input() @HostBinding("class.bx--structured-list-row--selected")
	set selected(value: boolean) {
		if (!this.input) { return; }
		if (value) {
			this.input.nativeElement.checked = true;
		} else {
			this.input.nativeElement.checked = null;
		}
	}

	get selected() {
		if (!this.input) { return; }
		return this.input.nativeElement.checked;
	}
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

	@HostBinding("class.bx--structured-list-row") wrapper = true;
	@HostBinding("attr.tabindex") tabindex = this.selection ? "0" : null;

	@ContentChildren(ListColumn) columns: QueryList<ListColumn>;

	@ViewChild("input") input: ElementRef;

	ngAfterContentInit() {
		this.columns.forEach(column => {
			column.isBodyColumn = true;
			column.isHeaderColumn = false;
		});
	}

	@HostListener("click")
	onclick() {
		if (!this.selection) { return false; }
		this.input.nativeElement.click();
	}

	onChange(event) {
		this.change.emit(event);
	}
}
