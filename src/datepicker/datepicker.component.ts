import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FlatpickrOptions } from "ng2-flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";

@Component({
	selector: "ibm-date-picker",
	template: `
	<div class="bx--form-item">
		<ng2-flatpickr [config]= "range ? flatpickrOptionsRange : flatpickrOptions" [hideButton]="true">
			<div class="bx--form-item">
				<div
				data-date-picker
				[attr.data-date-picker-type]= "range ? 'range' : 'single'"
				class="bx--date-picker"
				[ngClass]= "range ? 'bx--date-picker--range' : 'bx--date-picker--single'">
					<div class="bx--date-picker-container" #flatpickr>
						<ibm-date-picker-input
						[label]= "label"
						[rangeId]="'firstRangeInput'"
						[type]= "range ? 'range' : 'single'"
						[hasIcon]= "range ? false : true"
						(selectDates)="selectDates.emit($event)">
						</ibm-date-picker-input>
					</div>


					<div *ngIf="range" class="bx--date-picker-container">
						<ibm-date-picker-input
						[label]= "label"
						[rangeId]="'secondRangeInput'"
						[type]= "range ? 'range' : 'single'"
						[hasIcon]= "range ? true : null"
						(selectDates)="selectDates.emit($event)">
						</ibm-date-picker-input>
					</div>
				</div>
			</div>
		</ng2-flatpickr>
	</div>
	`
})
// <label for="secondRangeInput" class="bx--label">Date Picker label</label>
// 						<input
// 						type="text"
// 						id="secondRangeInput"
// 						class="bx--date-picker__input"
// 						pattern="\d{1,2}/\d{1,2}/\d{4}"
// 						placeholder="mm/dd/yyyy"
// 						autocomplete="off"/>
export class DatePicker {
	/**
	 * Select a calendar view for the `model`.
	 *
	 * @memberof Datepicker
	 */
	@Input() range: boolean;

	@Input() label: string;


	@Output() selectDates: EventEmitter<any> = new EventEmitter();

	flatpickrOptions: FlatpickrOptions = {
		dateFormat: "m/d/Y",
		allowInput: true,
		onChange: (selectedDates: any) => { this.doSelect(selectedDates); }
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
