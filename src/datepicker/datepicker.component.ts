import {
	Component,
	Input,
	Output,
	EventEmitter,
	ViewEncapsulation,
	ElementRef,
	OnDestroy
} from "@angular/core";
import { FlatpickrOptions } from "ng2-flatpickr";
import flatpickr from "flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";

/**
 * demo: [https://angular.carbondesignsystem.com/?path=/story/date-picker--single](../../?path=/story/date-picker--single)
 *
 * <example-url>../../iframe.html?id=date-picker--single</example-url>
 *
 * @export
 * @class DatePicker
 * @implements {OnDestroy}
 */
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
					[ngClass]="{
						'bx--date-picker--range' : range,
						'bx--date-picker--single' : !range,
						'bx--date-picker--light' : theme === 'light',
						'bx--skeleton' : skeleton
					}">
					<div class="bx--date-picker-container">
						<ibm-date-picker-input
							[label]= "label"
							[placeholder]= "placeholder"
							[pattern]= "pattern"
							[id]= "id"
							[type]= "range ? 'range' : 'single'"
							[hasIcon]= "range ? false : true"
							[disabled]="disabled"
							[invalid]="invalid"
							[invalidText]="invalidText"
							[skeleton]="skeleton"
							(valueChange)="onInputValueChange($event, 0)">
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
							[disabled]="disabled"
							[invalid]="invalid"
							[invalidText]="invalidText"
							[skeleton]="skeleton"
							(valueChange)="onInputValueChange($event, 1)">
						</ibm-date-picker-input>
					</div>
				</div>
			</div>
		</ng2-flatpickr>
	</div>
	`,
	styles: [
		`.dayContainer {
			justify-content: initial;
		}`
	],
	encapsulation: ViewEncapsulation.None
})
export class DatePicker implements OnDestroy {
	private static datePickerCount = 0;

	/**
	 * Select calendar range mode
	 */
	@Input() range: boolean;

	/**
	 * Format of date
	 *
	 * For reference: https://flatpickr.js.org/formatting/
	 */
	@Input() dateFormat = "m/d/Y";

	@Input() label: string;

	@Input() rangeLabel: string;

	@Input() placeholder = "mm/dd/yyyy";

	@Input() pattern = "\\d{1,2}/\\d{1,2}/\\d{4}";

	@Input() id = `datepicker-${DatePicker.datePickerCount++}`;

	@Input() value: Array<any> = [];

	@Input() theme: "light" | "dark" = "dark";

	@Input() disabled = false;

	@Input() invalid = false;

	@Input() invalidText: string;

	@Input() skeleton = false;

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

	constructor(protected elementRef: ElementRef) { }

	doSelect(selectedValue) {
		this.valueChange.emit(selectedValue);
	}

	updateClassNames() {
		const ng2FlatPickrElement = this.elementRef.nativeElement.querySelector(".ng2-flatpickr-input-container");
		ng2FlatPickrElement._flatpickr._positionCalendar();

		// get all the possible flatpickrs in the document - we need to add classes to (potentially) all of them
		const calendarContainer = document.querySelectorAll(".flatpickr-calendar");
		const monthContainer = document.querySelectorAll(".flatpickr-month");
		const weekdaysContainer = document.querySelectorAll(".flatpickr-weekdays");
		const weekdayContainer = document.querySelectorAll(".flatpickr-weekday");
		const daysContainer = document.querySelectorAll(".flatpickr-days");
		const dayContainer = document.querySelectorAll(".flatpickr-day");

		// add classes to lists of elements
		const addClassIfNotExists = (classname: string, elementList: NodeListOf<Element>) => {
			Array.from(elementList).forEach(element => {
				if (!element.classList.contains(classname)) {
					element.classList.add(classname);
				}
			});
		};

		// add classes (but only if they don't exist, small perf win)
		addClassIfNotExists("bx--date-picker__calendar", calendarContainer);
		addClassIfNotExists("bx--date-picker__month", monthContainer);
		addClassIfNotExists("bx--date-picker__weekdays", weekdaysContainer);
		addClassIfNotExists("bx--date-picker__days", daysContainer);

		// add weekday classes and format the text
		Array.from(weekdayContainer).forEach(element => {
			element.innerHTML = element.innerHTML.replace(/\s+/g, "");
			element.classList.add("bx--date-picker__weekday");
		});

		// add day classes and special case the "today" element based on `this.value`
		Array.from(dayContainer).forEach(element => {
			element.classList.add("bx--date-picker__day");
			if (!this.value) {
				return;
			}
			if (element.classList.contains("today") && this.value.length > 0) {
				element.classList.add("no-border");
			} else if (element.classList.contains("today") && this.value.length === 0) {
				element.classList.remove("no-border");
			}
		});
	}

	onInputValueChange(event: string, index: number): void {
		const eventDate = flatpickr.parseDate(event, this.dateFormat, true);
		const previousDate = flatpickr.parseDate(this.value[index], this.dateFormat, true);
		if (eventDate) {
			if (!previousDate || previousDate.getTime() !== eventDate.getTime()) {
				this.value = [...this.value];
				this.value[index] = eventDate;
			}
		} else {
			if (previousDate || event) {
				this.value = [...this.value];
				this.value[index] = undefined;
			}
		}
	}

	ngOnDestroy() {
		// clean up our flatpickr element - needed because the wrapper doesn't handle this
		const ng2FlatPickrElement = this.elementRef.nativeElement.querySelector(".ng2-flatpickr-input-container");
		ng2FlatPickrElement._flatpickr.destroy();
	}
}
