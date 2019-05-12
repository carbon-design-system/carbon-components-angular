import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding
} from "@angular/core";

/**
 * demo: [https://angular.carbondesignsystem.com/?path=/story/time-picker--simple](../../?path=/story/time-picker--simple)
 *
 * <example-url>../../iframe.html?id=time-picker--simple</example-url>
 *
 * @export
 * @class TimePicker
 */
@Component({
	selector: "ibm-timepicker",
	template: `
			<div class="bx--time-picker__input">
				<label *ngIf="!skeleton" [attr.for]="id" class="bx--label">{{label}}</label>
				<input
					[ngClass]="{
						'bx--text-input--light': theme === 'light',
						'bx--skeleton': skeleton
					}"
					[value]="value"
					[placeholder]="placeholder"
					[pattern]="pattern"
					[attr.id]="id"
					[disabled]="disabled"
					maxlength="5"
					(change)="onChange($event)"
					type="text"
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

	/**
	 * Set to true for a loading select.
	 */
	@Input() skeleton = false;

	/**
	 * `light` or `dark` select theme
	 */
	@Input() theme: "light" | "dark" = "dark";

	@Output() valueChange: EventEmitter<string> = new EventEmitter();

	onChange(event) {
		this.valueChange.emit(event.target.value);
	}
}
