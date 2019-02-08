import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FlatpickrOptions } from "ng2-flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";

let nextId = 0;

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
						[placeholder]= "placeholder"
						[pattern]= "pattern"
						[id]= "id"
						[type]= "range ? 'range' : 'single'"
						[hasIcon]= "range ? false : true"
						(selectDates)="selectDates.emit($event)">
						</ibm-date-picker-input>
					</div>

					<div *ngIf="range" class="bx--date-picker-container">
						<ibm-date-picker-input
						[label]= "label2"
						[placeholder]= "placeholder"
						[pattern]= "pattern"
						[id]= "id + '-rangeInput'"
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

export class DatePicker {
	/**
	 * Select a calendar view for the `model`.
	 *
	 * @memberof Datepicker
	 */
	@Input() range: boolean;

	@Input() label: string;

	@Input() label2: string;

	@Input() placeholder = "mm/dd/yyyy";

	@Input() pattern = "\d{1,2}/\d{1,2}/\d{4}";

	@Input() id = `datepicker-${nextId++}`;

	@Output() selectDates: EventEmitter<any> = new EventEmitter();

	flatpickrOptions: FlatpickrOptions = {
		dateFormat: "m/d/Y",
		allowInput: true,
		onChange: (selectedDates: any) => { this.doSelect(selectedDates); },
		onOpen: () => { this.updateClassNames(); }
	};

	flatpickrOptionsRange: FlatpickrOptions = {
		dateFormat: "m/d/Y",
		"plugins": [rangePlugin({ input: "#" + this.id + "-rangeInput"})],
		allowInput: true,
		onChange: (selectedDates: any) => { this.doSelect(selectedDates); },
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

	doSelect(selectedDates) {
		this.selectDates.emit(selectedDates);
	}

	updateClassNames() {

		const element = document.querySelector(".flatpickr-calendar");

		element.classList.add(this.settings.classCalendarContainer);

		document.querySelector(".flatpickr-month").classList.add(this.settings.classMonth);
		document.querySelector(".flatpickr-weekdays").classList.add(this.settings.classWeekdays);
		document.querySelector(".flatpickr-days").classList.add(this.settings.classDays);

		// console.log(document.querySelectorAll(".flatpickr-weekday"));
	}


}
