import { Component, Input } from "@angular/core";

@Component({
	selector: "ibm-date-picker",
	template: `
	<ibm-date-picker-simple *ngIf="view === 'simple'"></ibm-date-picker-simple>
	<ibm-date-picker-single *ngIf="view === 'single'"></ibm-date-picker-single>
	<ibm-date-picker-range *ngIf="view === 'range'"></ibm-date-picker-range>
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


}
