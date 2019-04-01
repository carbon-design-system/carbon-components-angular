import { Component, Input } from "@angular/core";

@Component({
	selector: "ibm-date-picker-input",
	template: `
	<div class="bx--form-item">
		<div class="bx--date-picker"
		[ngClass]= "'bx--date-picker--' + type">
			<div class="bx--date-picker-container">
				<label [for]="id" class="bx--label">
					{{label}}
				</label>
				<ibm-icon-calendar16
					*ngIf="type == 'single'"
					data-date-picker-icon
					class="bx--date-picker__icon"
					data-open>
				</ibm-icon-calendar16>
				<input
					autocomplete="off"
					type="text"
					class="bx--date-picker__input"
					[pattern]="pattern"
					[placeholder]="placeholder"
					data-date-picker-input
					[attr.data-input] = "type == 'single' || type == 'range' ?  '' : null"
					[id]= "id"/>
			</div>


			<ibm-icon-calendar16
				*ngIf= "type == 'range' && hasIcon"
				data-date-picker-icon
				class="bx--date-picker__icon"
				data-open>
			</ibm-icon-calendar16>
		</div>
	</div>
	`
})
export class DatePickerInput {
	private static datePickerCount = 0;

	/**
	 * Select a calendar type for the `model`.
	 * Internal purposes only.
	 *
	 * @type {("simple" | "single" | "range")}
	 * @memberof Datepicker
	 */
	@Input() type: "simple" | "single" | "range" = "simple";

	@Input() id = `datepicker-${DatePickerInput.datePickerCount++}`;

	@Input() hasIcon = false;

	@Input() label: string;

	@Input() placeholder = "mm/dd/yyyy";

	@Input() pattern = "\d{1,2}/\d{1,2}/\d{4}";
}
