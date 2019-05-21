import {
	Component,
	Input,
	Output,
	EventEmitter,
	ViewEncapsulation,
	ElementRef,
	OnDestroy,
	HostListener
} from "@angular/core";
import { FlatpickrOptions } from "ng2-flatpickr";
import flatpickr from "flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

/**
 * [See demo](../../?path=/story/date-picker--single)
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
							[skeleton]="skeleton">
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
							[skeleton]="skeleton">
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
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: DatePicker,
			multi: true
		}
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
	@Input()
	set dateFormat(dateFormat: string) {
		this.flatpickrOptions = Object.assign({}, this.flatpickrOptions, {dateFormat});
		this.flatpickrOptionsRange = Object.assign({}, this.flatpickrOptionsRange, {dateFormat});
	}
	get dateFormat() {
		return this.flatpickrOptions.dateFormat;
	}

	@Input() label: string;

	@Input() rangeLabel: string;

	@Input() placeholder = "mm/dd/yyyy";

	@Input() pattern = "^\\d{1,2}/\\d{1,2}/\\d{4}$";

	@Input() id = `datepicker-${DatePicker.datePickerCount++}`;

	@Input() value: Array<any> = [];

	@Input() theme: "light" | "dark" = "dark";

	@Input() disabled = false;

	@Input() invalid = false;

	@Input() invalidText: string;

	@Input() skeleton = false;

	@Output() valueChange: EventEmitter<any> = new EventEmitter();

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
		onOpen: () => { this.updateClassNames(); },
		value: this.value
	};

	constructor(protected elementRef: ElementRef) { }

	@HostListener("focusin")
	onFocus() {
		console.log(this.flatpickrOptions);
		this.onTouched();
	}

	doSelect(selectedValue) {
		this.valueChange.emit(selectedValue);
		this.propagateChange(selectedValue);
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

	public writeValue(value: any) {
		this.value = value;
	}

	public registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	public registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	onTouched: () => any = () => {};

	propagateChange = (_: any) => {};

	ngOnDestroy() {
		// clean up our flatpickr element - needed because the wrapper doesn't handle this
		const ng2FlatPickrElement = this.elementRef.nativeElement.querySelector(".ng2-flatpickr-input-container");
		ng2FlatPickrElement._flatpickr.destroy();
	}
}
