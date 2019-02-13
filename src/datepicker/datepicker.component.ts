import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FlatpickrOptions } from "ng2-flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";

let nextId = 0;

@Component({
	selector: "ibm-date-picker",
	template: `
	<div class="bx--form-item">
		<ng2-flatpickr [setDate]="value" [config]= "range ? flatpickrOptionsRange : flatpickrOptions" [hideButton]="true">
			<div class="bx--form-item">
				<div
				data-date-picker
				[attr.data-date-picker-type]= "range ? 'range' : 'single'"
				class="bx--date-picker"
				[ngClass]= "range ? 'bx--date-picker--range' : 'bx--date-picker--single'">
					<div class="bx--date-picker-container" #flatpickr>
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
	/**
	 * Select a calendar view for the `model`.
	 *
	 * @memberof Datepicker
	 */
	@Input() range: boolean;

	@Input() label: string;

	@Input() rangeLabel: string;

	@Input() placeholder = "mm/dd/yyyy";

	@Input() pattern = "\d{1,2}/\d{1,2}/\d{4}";

	@Input() id = `datepicker-${nextId++}`;

	@Input() value: string;

	@Output() valueChange: EventEmitter<any> = new EventEmitter();

	datesSelected = [];

	flatpickrOptions: FlatpickrOptions = {
		dateFormat: "m/d/Y",
		allowInput: true,
		onChange: (selectedValue: any) => { this.doSelect(selectedValue); },
		onOpen: () => { this.updateClassNames(); },
		value: this.value
	};

	flatpickrOptionsRange: FlatpickrOptions = {
		dateFormat: "m/d/Y",
		"plugins": [rangePlugin({ input: "#" + this.id + "-rangeInput"})],
		allowInput: true,
		onChange: (selectedValue: any) => { this.doSelect(selectedValue); },
		onOpen: () => { this.updateClassNames(); }
	};

	settings = {
		classCalendarContainer: `bx--date-picker__calendar`,
		classMonth: `bx--date-picker__month`,
		classWeekdays: `bx--date-picker__weekdays`,
		classDays: `bx--date-picker__days`,
		classWeekday: `bx--date-picker__weekday`,
		classDay: `bx--date-picker__day`,
		classFocused: `bx--focused`,
		classVisuallyHidden: `bx--visually-hidden`,
		attribType: this.range ? "range" : "single"
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

		calendarContainer.classList.add(this.settings.classCalendarContainer);
		monthContainer.classList.add(this.settings.classMonth);
		weekdaysContainer.classList.add(this.settings.classWeekdays);
		daysContainer.classList.add(this.settings.classDays);

		Array.from(weekdayContainer).forEach(item => {
			const currentItem = item;
			currentItem.innerHTML = currentItem.innerHTML.replace(/\s+/g, "");
			currentItem.classList.add(this.settings.classWeekday);
		});

		Array.from(dayContainer).forEach(item => {
			item.classList.add(this.settings.classDay);
			if (item.classList.contains("today") && this.datesSelected.length > 0) {
				item.classList.add("no-border");
			} else if (item.classList.contains("today") && this.datesSelected.length === 0) {
				item.classList.remove("no-border");
			}
		});
	}
}
