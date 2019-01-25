import { Component, Input } from "@angular/core";

@Component({
	selector: "ibm-date-picker-input",
	template: `
	<div class="bx--form-item">
		<div class="bx--date-picker bx--date-picker--simple bx--date-picker">
			<div class="bx--date-picker-container">
				<label for="date-picker-4" class="bx--label">Date Picker label</label>
				<svg *ngIf="view === 'single'" data-date-picker-icon class="bx--date-picker__icon" width="14" height="16" viewBox="0 0 14 16">
					<path d="M0 5h14v1H0V5zm3-5h1v4H3V0zm7 0h1v4h-1V0zM0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 14.5v-12zm1 0v12a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5z"
					fill-rule="nonzero"/>
				</svg>
				<input type="text" id="date-picker-4" class="bx--date-picker__input" pattern="\d{1,2}/\d{1,2}/\d{4}"
				placeholder="mm/dd/yyyy" data-date-picker-input
				[attr.data-input] = "view == 'single' || view == 'range' ?  '' : null"/>
			</div>
		</div>
	</div>
	`
})
export class DatePickerInput {
	/**
	 * Select a calendar view for the `model`.
	 *
	 * @type {("simple" | "single" | "range")}
	 * @memberof Datepicker
	 */
	@Input() view: "simple" | "single" | "range" = "simple";


	isValidDate(dateString) {
		console.log(dateString);
		// First check for the pattern
		// if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
		// 	return false;
		// }

		// // Parse the date parts to integers
		// const parts = dateString.split("/");
		// const day = parseInt(parts[1], 10);
		// const month = parseInt(parts[0], 10);
		// const year = parseInt(parts[2], 10);

		// // Check the ranges of month and year
		// if (year < 1000 || year > 3000 || month === 0 || month > 12) {
		// 	return false;
		// }

		// const monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

		// // Adjust for leap years
		// if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
		// 	monthLength[1] = 29;
		// }

		// // Check the range of the day
		// return day > 0 && day <= monthLength[month - 1];
	}
}
