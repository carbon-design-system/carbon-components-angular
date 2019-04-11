import { Component, Input, ChangeDetectorRef } from "@angular/core";
import { Select } from "../select/select.component";

@Component({
	selector: "ibm-timepicker-select",
	template: `
		<div
			[ngClass]="{
				'bx--select--light': theme === 'light',
				'bx--skeleton': skeleton
			}"
			class="bx--select bx--time-picker__select bx--select--inline">
			<label *ngIf="!skeleton" [attr.for]="id" class="bx--label bx--visually-hidden">{{label}}</label>
			<select
				#select
				[attr.id]="id"
				[disabled]="disabled"
				(change)="onChange($event)"
				class="bx--select-input">
				<ng-content></ng-content>
			</select>
			<svg *ngIf="!skeleton" class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5">
			<path d="M0 0l5 4.998L10 0z" fill-rule="evenodd" />
			</svg>
		</div>
	`
})
export class TimePickerSelect extends Select {
	@Input() id = `timepicker-select-${TimePickerSelect.selectCount++}`;
}
