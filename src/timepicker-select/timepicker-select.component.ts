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
 * [See demo](../../?path=/story/components-time-picker-select--simple)
 */
@Component({
	selector: "cds-timepicker-select, ibm-timepicker-select",
	template: `
		<label *ngIf="!skeleton && label" [attr.for]="id" class="cds--label cds--visually-hidden">{{label}}</label>
		<div class="cds--select-input__wrapper">
			<select
				#select
				[attr.id]="id"
				[attr.aria-label]="ariaLabel"
				[disabled]="disabled"
				(change)="onChange($event)"
				class="cds--select-input">
				<ng-content></ng-content>
			</select>
			<svg cdsIcon="chevron--down" size="16" *ngIf="!skeleton" class="cds--select__arrow"></svg>
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
	@HostBinding("class.cds--select") timeSelect = true;
	@HostBinding("class.cds--time-picker__select") timePickerSelect = true;

	@Input() id = `timepicker-select-${TimePickerSelect.selectCount++}`;

	@Input() ariaLabel: string;

	/**
	 * Set to true for a loading select.
	 */
	@Input() skeleton = false;

	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 * `light` or `dark` select theme
	 */
	@Input() theme: "light" | "dark" = "dark";

	@Input() label: string;

	@HostBinding("class.cds--skeleton") timePickerSelectSkeleton = this.skeleton;

	@HostBinding("class.cds--select--light") get timePickerSelectLight() {
		return this.theme === "light";
	}
}
