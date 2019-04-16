import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding
} from "@angular/core";

@Component({
	selector: "ibm-timepicker",
	template: `
			<div
				[ngClass]="{
					'bx--select--light': theme === 'light',
					'bx--skeleton': skeleton
				}"
				class="bx--time-picker__input">
				<label *ngIf="!skeleton" [attr.for]="id" class="bx--label">{{label}}</label>
				<input
					#timePicker
					[value]="value"
					[placeholder]="placeholder"
					[pattern]="pattern"
					[attr.id]="id"
					[disabled]="disabled"
					maxlength="5"
					(change)="onChange($event)"
					type="string"
					class="bx--time-picker__input-field bx--text-input">
			</div>
			<ng-content></ng-content>
	`
})
export class TimePicker {
	/**
	 * Tracks the total number of selects instantiated. Used to generate unique IDs
	 */
	static timePickerCount = 0;

	@HostBinding("class.bx--time-picker") timePicker = true;

	@Input() label;
	@Input() placeholder = "hh:mm";
	@Input() pattern = "(1[012]|[0-9]):[0-5][0-9]";
	@Input() id = `timepicker-${TimePicker.timePickerCount++}`;
	@Input() disabled = false;
	@Input() value: string;

	@Output() valueChange: EventEmitter<string> = new EventEmitter();

	onChange(event) {
		this.valueChange.emit(event.target.value);
	}
}
