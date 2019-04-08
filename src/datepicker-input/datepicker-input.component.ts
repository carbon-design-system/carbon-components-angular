import { Component, Input } from "@angular/core";

@Component({
	selector: "ibm-date-picker-input",
	template: `
	<div class="bx--form-item">
		<div class="bx--date-picker"
			[ngClass]="{
				'bx--date-picker--single' : type === 'single',
				'bx--date-picker--range' : type === 'range',
				'bx--date-picker--light' : theme === 'light',
				'bx--skeleton' : skeleton
			}">
			<div class="bx--date-picker-container">
				<label [for]="id" class="bx--label">
					{{label}}
				</label>
				<div *ngIf="skeleton" class="bx--date-picker__input bx--skeleton"></div>
				<svg *ngIf="type == 'single' && !skeleton"
				data-date-picker-icon
				class="bx--date-picker__icon"
				width="14" height="16"
				viewBox="0 0 14 16"
				data-open>
					<path d="M0 5h14v1H0V5zm3-5h1v4H3V0zm7 0h1v4h-1V0zM0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5
						1.5h-11A1.5 1.5 0 0 1 0 14.5v-12zm1 0v12a.5.5 0 0 0
						.5.5h11a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5z"
						fill-rule="nonzero"/>
				</svg>
				<input
					*ngIf="!skeleton"
					autocomplete="off"
					type="text"
					class="bx--date-picker__input"
					[pattern]="pattern"
					[placeholder]="placeholder"
					data-date-picker-input
					[attr.data-input] = "type == 'single' || type == 'range' ?  '' : null"
					[id]= "id"
					[attr.disabled]="(disabled ? '' : null)"
					[attr.data-invalid]="(invalid ? '' : null)"/>
					<div *ngIf="invalid" class="bx--form-requirement">
						{{invalidText}}
					</div>
			</div>

			<svg *ngIf= "type == 'range' && hasIcon && !skeleton"
			data-date-picker-icon
			class="bx--date-picker__icon"
			width="14" height="16"
			viewBox="0 0 14 16"
			data-open>
				<path d="M0 5h14v1H0V5zm3-5h1v4H3V0zm7 0h1v4h-1V0zM0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5
				1.5h-11A1.5 1.5 0 0 1 0 14.5v-12zm1 0v12a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5z"
					fill-rule="nonzero"/>
			</svg>
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

	@Input() theme: "light" | "dark" = "dark";

	@Input() disabled = false;

	@Input() invalid = false;

	@Input() invalidText: string;

	@Input() skeleton = false;
}
