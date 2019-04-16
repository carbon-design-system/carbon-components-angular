import { Component, Input, ChangeDetectorRef, Output, EventEmitter, HostBinding } from "@angular/core";
import { Select } from "../select/select.component";

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

	@HostBinding("class.bx--skeleton") timePickerSelectSkeleton = this.skeleton;
	@HostBinding("class.bx--select--light") timePickerSelectLight = (true ? this.theme === "light" : false);

	@Input() id = `timepicker-select-${TimePickerSelect.selectCount++}`;

	@Output() valueChange: EventEmitter<string> = new EventEmitter();

	onChange(event) {
		this.valueChange.emit(event.target.value);
		console.log(this.theme);
	}
}
