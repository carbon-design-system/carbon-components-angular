import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding,
	TemplateRef
} from "@angular/core";
import { Select } from "carbon-components-angular/select";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

/**
 * [See demo](../../?path=/story/time-picker-select--simple)
 *
 * <example-url>../../iframe.html?id=time-picker-select--simple</example-url>
 */
@Component({
	selector: "ibm-timepicker-select",
	template: `
		<label *ngIf="!skeleton && label" [attr.for]="id" class="bx--label bx--visually-hidden">{{label}}</label>
		<div class="bx--select-input__wrapper">
			<select
				#select
				[attr.id]="id"
				[disabled]="disabled"
				(change)="onChange($event)"
				class="bx--select-input">
				<ng-content></ng-content>
			</select>
			<ibm-icon-chevron-down size="16" *ngIf="!skeleton" class="bx--select__arrow"></ibm-icon-chevron-down>
		</div>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: TimePickerSelect,
			multi: true
		}
	]
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

	@Input() label: string;

	@HostBinding("class.bx--skeleton") timePickerSelectSkeleton = this.skeleton;

	@HostBinding("class.bx--select--light") get timePickerSelectLight() {
		return this.theme === "light";
	}
}
