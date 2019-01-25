import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FlatpickrOptions } from "ng2-flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";

@Component({
	selector: "ibm-date-picker",
	template: `
	<div class="bx--form-item">
		<ng2-flatpickr [config]= "view == 'range' ? flatpickrOptionsRange : flatpickrOptions" [hideButton]="true">
			<div class="bx--form-item">
				<div data-date-picker [attr.data-date-picker-type]="view" class="bx--date-picker bx--date-picker--{{view}}">
					<div class="bx--date-picker-container" #flatpickr>
						<ibm-date-picker-input [view]="view" (selectDates)="selectDates.emit($event)"></ibm-date-picker-input>
					</div>


					<div *ngIf="view === 'range'" class="bx--date-picker-container">
						<label for="date-picker-2" class="bx--label">Date Picker label</label>
						<input type="text" id="secondRangeInput" class="bx--date-picker__input" pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy"/>
					</div>

					<svg *ngIf="view === 'range'" data-date-picker-icon class="bx--date-picker__icon" width="14" height="16" viewBox="0 0 14 16" data-open>
					<path d="M0 5h14v1H0V5zm3-5h1v4H3V0zm7 0h1v4h-1V0zM0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5
					1.5h-11A1.5 1.5 0 0 1 0 14.5v-12zm1 0v12a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5z"
						fill-rule="nonzero"/>
					</svg>
				</div>
			</div>
		</ng2-flatpickr>
	</div>
	`
})
export class DatePicker {
	/**
	 * Select a calendar view for the `model`.
	 *
	 * @type {("single" | "range")}
	 * @memberof Datepicker
	 */
	@Input() view: "single" | "range" = "single";

	@Output() selectDates: EventEmitter<any> = new EventEmitter();

	flatpickrOptions: FlatpickrOptions = {
		dateFormat: "m/d/Y",
		allowInput: true,
		onChange: (selectDates: any) => { this.doSelect(selectDates); }
	};

	flatpickrOptionsRange: FlatpickrOptions = {
		dateFormat: "m/d/Y",
		"plugins": [rangePlugin({ input: "#secondRangeInput"})],
		allowInput: true,
		onChange: (selectedDates: any) => { this.doSelect(selectedDates); }
	};

	doSelect(selectedDates) {
		this.selectDates.emit(selectedDates);
	}
}
