import {
	Component,
	Input,
	Output,
	EventEmitter,
	ViewChild
} from "@angular/core";

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
				<ibm-icon-calendar16
					*ngIf="type == 'single'"
					data-date-picker-icon
					class="bx--date-picker__icon"
					data-open>
				</ibm-icon-calendar16>
				<input
					#dateInput
					maxlength="10"
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
					[attr.data-invalid]="(invalid ? '' : null)"
					(change) = "onChange()"/>
					<div *ngIf="invalid" class="bx--form-requirement">
						{{invalidText}}
					</div>
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

	@ViewChild("dateInput") dateInput;

	/**
	 * Select a calendar type for the `model`.
	 * Internal purposes only.
	 */
	@Input() type: "simple" | "single" | "range" = "simple";

	@Input() id = `datepicker-${DatePickerInput.datePickerCount++}`;

	@Input() hasIcon = false;

	@Input() label: string;

	@Input() placeholder = "mm/dd/yyyy";

	@Input() pattern = new RegExp("^\\d{1,2}/\\d{1,2}/\\d{4}$");

	@Output() valueChange: EventEmitter<string> = new EventEmitter();

	@Input() theme: "light" | "dark" = "dark";

	@Input() disabled = false;

	@Input() invalid = false;

	@Input() invalidText: string;

	@Input() skeleton = false;

	onChange() {
		this.valueChange.emit(this.dateInput.nativeElement.value);
		if (this.dateInput && this.dateInput.nativeElement.value === "") {
			this.invalid = false;
		} else {
			this.invalid = !this.pattern.test(this.dateInput.nativeElement.value);
		}
	}
}
