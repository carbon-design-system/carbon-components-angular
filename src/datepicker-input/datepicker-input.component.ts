import {
	Component,
	Input,
	Output,
	EventEmitter,
	ViewChild,
	ElementRef
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

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
					*ngIf="!skeleton"
					autocomplete="off"
					type="text"
					class="bx--date-picker__input"
					[value]="value"
					[pattern]="pattern"
					[placeholder]="placeholder"
					data-date-picker-input
					[attr.data-input] = "type == 'single' || type == 'range' ?  '' : null"
					[id]= "id"
					[attr.disabled]="(disabled ? '' : null)"
					[attr.data-invalid]="(invalid ? '' : null)"
					(change) = "onChange($event)"/>
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
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: DatePickerInput,
			multi: true
		}
	]
})
export class DatePickerInput {
	private static datePickerCount = 0;

	/**
	 * Select a calendar type for the `model`.
	 * Internal purposes only.
	 */
	@Input() type: "simple" | "single" | "range" = "simple";

	@Input() id = `datepicker-${DatePickerInput.datePickerCount++}`;

	@Input() hasIcon = false;

	@Input() label: string;

	@Input() placeholder = "mm/dd/yyyy";

	@Input() pattern = "^\\d{1,2}/\\d{1,2}/\\d{4}$";

	@Output() valueChange: EventEmitter<string> = new EventEmitter();

	@Input() theme: "light" | "dark" = "dark";

	@Input() disabled = false;

	@Input() invalid = false;

	@Input() invalidText: string;

	@Input() skeleton = false;

	@Input() value = "";

	constructor(protected elementRef: ElementRef) {}

	onChange(event) {
		this.value = event.target.value;
		this.valueChange.emit(this.value);
		this.propagateChange(this.value);
		this.onTouched();
	}

	public writeValue(value: any) {
		this.value = value;
	}

	public registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	public registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	onTouched: () => any = () => {};

	propagateChange = (_: any) => {};
}
