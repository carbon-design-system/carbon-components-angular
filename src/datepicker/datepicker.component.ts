import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "ibm-date-picker",
	template: `
	<ibm-date-picker-simple *ngIf="view === 'simple'"></ibm-date-picker-simple>
	<ibm-date-picker-single *ngIf="view === 'single'" (selectDate)="selectDate.emit($event)"></ibm-date-picker-single>
	<ibm-date-picker-range *ngIf="view === 'range'" (selectDates)="selectDates.emit($event)"></ibm-date-picker-range>
	`
})
export class DatePicker {
	/**
	 * Select a calendar view for the `model`.
	 *
	 * @type {("month" | "months" | "quarter" | "year")}
	 * @memberof Datepicker
	 */
	@Input() view: "simple" | "single" | "range" = "simple";

	@Output() selectDate: EventEmitter<any> = new EventEmitter();

	@Output() selectDates: EventEmitter<any> = new EventEmitter();
}
