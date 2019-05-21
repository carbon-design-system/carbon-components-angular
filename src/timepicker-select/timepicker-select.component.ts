import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding
} from "@angular/core";
import { Select } from "../select/select.component";

/**
 * [See demo](../../?path=/story/time-picker-select--simple)
 *
 * <example-url>../../iframe.html?id=time-picker-select--simple</example-url>
 *
 * @export
 * @class TimePickerSelect
 * @extends {Select}
 */
@Component({
	selector: "ibm-timepicker-select",
	template: `
			<label *ngIf="!skeleton" [attr.for]="id" class="bx--label bx--visually-hidden">{{label}}</label>
			<select
				#select
				[attr.id]="id"
				[disabled]="disabled"
				(change)="onChange($event)"
				class="bx--select-input">
				<ng-content></ng-content>
			</select>
			<ibm-icon-chevron-down16 *ngIf="!skeleton" class="bx--select__arrow"></ibm-icon-chevron-down16>
	`
})
export class TimePickerSelect extends Select {
	@HostBinding("class.bx--select") timeSelect = true;
	@HostBinding("class.bx--time-picker__select") timePickerSelect = true;

	@Input() id = `timepicker-select-${TimePickerSelect.selectCount++}`;

	/**
	 * Set to true for a loading select.
	 */
	@Input() skeleton = false;

	/**
	 * `light` or `dark` select theme
	 */
	@Input() theme: "light" | "dark" = "dark";

	@HostBinding("class.bx--skeleton") timePickerSelectSkeleton = this.skeleton;

	@HostBinding("class.bx--select--light") get timePickerSelectLight() {
		return this.theme === "light";
	}

	@Output() valueChange: EventEmitter<string> = new EventEmitter();

	onChange(event) {
		this.valueChange.emit(event.target.value);
	}
}
