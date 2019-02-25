import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FlatpickrOptions } from "ng2-flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";

@Component({
	selector: "ibm-date-picker",
	template: `
	<div class="bx--form-item">
		<ng2-flatpickr
			[setDate]= "value"
			[config]= "range ? flatpickrOptionsRange : flatpickrOptions"
			[hideButton]="true">
			<div class="bx--form-item">
				<div
					data-date-picker
					[attr.data-date-picker-type]= "range ? 'range' : 'single'"
					class="bx--date-picker"
					[ngClass]= "range ? 'bx--date-picker--range' : 'bx--date-picker--single'">
					<div class="bx--date-picker-container">
						<ibm-date-picker-input
							[label]= "label"
							[placeholder]= "placeholder"
							[pattern]= "pattern"
							[id]= "id"
							[type]= "range ? 'range' : 'single'"
							[hasIcon]= "range ? false : true"
							(valueChange)="valueChange.emit($event)">
						</ibm-date-picker-input>
					</div>

					<div *ngIf="range" class="bx--date-picker-container">
						<ibm-date-picker-input
							[label]= "rangeLabel"
							[placeholder]= "placeholder"
							[pattern]= "pattern"
							[id]= "id + '-rangeInput'"
							[type]= "range ? 'range' : 'single'"
							[hasIcon]= "range ? true : null"
							(valueChange)="valueChange.emit($event)">
						</ibm-date-picker-input>
					</div>
				</div>
			</div>
		</ng2-flatpickr>
	</div>
	`
})
export class DatePicker {
	private static datePickerCount = 0;

	/**
	 * Select calendar range mode
	 *
	 * @memberof Datepicker
	 */
	@Input() range: boolean;

	/**
	 * Format of date
	 *
	 * For reference: https://flatpickr.js.org/formatting/
	 *
	 * @memberof Datepicker
	 */
	@Input() dateFormat = "m/d/Y";

	@Input() label: string;

	@Input() rangeLabel: string;

	@Input() placeholder = "mm/dd/yyyy";

	@Input() pattern = "\d{1,2}/\d{1,2}/\d{4}";

	@Input() id = `datepicker-${DatePicker.datePickerCount++}`;

	@Input() value: Array<any>;

	@Output() valueChange: EventEmitter<any> = new EventEmitter();

	flatpickrOptions: FlatpickrOptions = {
		dateFormat: this.dateFormat,
		allowInput: true,
		onChange: (selectedValue: any) => { this.doSelect(selectedValue); },
		onOpen: () => { this.updateClassNames(); },
		value: this.value
	};

	flatpickrOptionsRange: FlatpickrOptions = {
		dateFormat: this.dateFormat,
		"plugins": [rangePlugin({ input: "#" + this.id + "-rangeInput"})],
		allowInput: true,
		onChange: (selectedValue: any) => { this.doSelect(selectedValue); },
		onOpen: () => { this.updateClassNames(); },
		value: this.value
	};

	doSelect(selectedValue) {
		this.valueChange.emit(selectedValue);
	}

	updateClassNames() {
		const calendarContainer = document.querySelector(".flatpickr-calendar");
		const monthContainer = document.querySelector(".flatpickr-month");
		const weekdaysContainer = document.querySelector(".flatpickr-weekdays");
		const weekdayContainer = document.querySelectorAll(".flatpickr-weekday");
		const daysContainer = document.querySelector(".flatpickr-days");
		const dayContainer = document.querySelectorAll(".flatpickr-day");

		calendarContainer.classList.add("bx--date-picker__calendar");
		monthContainer.classList.add("bx--date-picker__month");
		weekdaysContainer.classList.add("bx--date-picker__weekdays");
		daysContainer.classList.add("bx--date-picker__days");

		Array.from(weekdayContainer).forEach(item => {
			const currentItem = item;
			currentItem.innerHTML = currentItem.innerHTML.replace(/\s+/g, "");
			currentItem.classList.add("bx--date-picker__weekday");
		});

		Array.from(dayContainer).forEach(item => {
			item.classList.add("bx--date-picker__day");
			if (item.classList.contains("today") && this.value.length > 0) {
				item.classList.add("no-border");
			} else if (item.classList.contains("today") && this.value.length === 0) {
				item.classList.remove("no-border");
			}
		});
	}
}
