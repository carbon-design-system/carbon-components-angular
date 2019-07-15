import {
	Component,
	Input,
	Output,
	EventEmitter,
	ViewEncapsulation,
	ElementRef,
	OnDestroy,
	HostListener,
	TemplateRef,
	AfterViewInit,
	OnChanges,
	SimpleChanges
} from "@angular/core";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import flatpickr from "flatpickr";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { carbonFlatpickrMonthSelectPlugin } from "./carbon-flatpickr-month-select";

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
		<div class="bx--form-item">
			<div
				class="bx--date-picker"
				[ngClass]="{
					'bx--date-picker--range' : range,
					'bx--date-picker--single' : !range,
					'bx--date-picker--light' : theme === 'light',
					'bx--skeleton' : skeleton
				}">
				<div class="bx--date-picker-container">
					<ibm-date-picker-input
						[label]="label"
						[placeholder]="placeholder"
						[pattern]="pattern"
						[id]="id"
						[type]="(range ? 'range' : 'single')"
						[hasIcon]="(range ? false : true)"
						[disabled]="disabled"
						[invalid]="invalid"
						[invalidText]="invalidText"
						[skeleton]="skeleton"
						(valueChange)="onValueChange($event)">
					</ibm-date-picker-input>
				</div>

				<div *ngIf="range" class="bx--date-picker-container">
					<ibm-date-picker-input
						[label]="rangeLabel"
						[placeholder]="placeholder"
						[pattern]="pattern"
						[id]="id + '-rangeInput'"
						[type]="(range ? 'range' : 'single')"
						[hasIcon]="(range ? true : null)"
						[disabled]="disabled"
						[invalid]="invalid"
						[invalidText]="invalidText"
						[skeleton]="skeleton"
						(valueChange)="onRangeValueChange($event)">
					</ibm-date-picker-input>
				</div>
			</div>
		</div>
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
export class DatePicker implements OnDestroy, AfterViewInit, OnChanges {
	private static datePickerCount = 0;

	/**
	 * Select calendar range mode
	 */
	@Input() range = false;

	/**
	 * Format of date
	 *
	 * For reference: https://flatpickr.js.org/formatting/
	 */
	@Input() dateFormat = "m/d/Y";

	@Input() label: string  | TemplateRef<any>;

	@Input() rangeLabel: string;

	@Input() placeholder = "mm/dd/yyyy";

	@Input() pattern = "^\\d{1,2}/\\d{1,2}/\\d{4}$";

	@Input() id = `datepicker-${DatePicker.datePickerCount++}`;

	@Input() set value(v: (Date | string)[]) {
		if (!v) {
			v = [];
		}
		this._value = v;
	}

	get value() {
		return this._value;
	}

	@Input() theme: "light" | "dark" = "dark";

	@Input() disabled = false;

	@Input() invalid = false;

	@Input() invalidText: string | TemplateRef<any>;

	@Input() skeleton = false;

	@Input() plugins = [];

	@Input()
	set flatpickrOptions(options) {
		this._flatpickrOptions = Object.assign({}, this._flatpickrOptions, options);
	}
	get flatpickrOptions() {
		const plugins = [...this.plugins, carbonFlatpickrMonthSelectPlugin];
		if (this.range) {
			plugins.push(rangePlugin({ input: `#${this.id}-rangeInput`, position: "left"}));
		}
		return Object.assign({}, this._flatpickrOptions, this.flatpickrBaseOptions, {
			mode: this.range ? "range" : "single",
			plugins,
			dateFormat: this.dateFormat
		});
	}

	set flatpickrOptionsRange (options) {
		console.warn("flatpickrOptionsRange is deprecated, use flatpickrOptions and set the range to true instead");
		this.range = true;
		this.flatpickrOptions = options;
	}
	get flatpickrOptionsRange () {
		console.warn("flatpickrOptionsRange is deprecated, use flatpickrOptions and set the range to true instead");
		return this.flatpickrOptions;
	}

	@Output() valueChange: EventEmitter<any> = new EventEmitter();

	protected _value = [];

	protected _flatpickrOptions = {
		allowInput: true
	};

	protected flatpickrBaseOptions = {
		mode: "single",
		dateFormat: "m/d/Y",
		plugins: this.plugins,
		onOpen: () => { this.updateClassNames(); },
		value: this.value
	};

	protected flatpickrInstance;

	constructor(protected elementRef: ElementRef) { }

	ngOnChanges(changes: SimpleChanges) {
		if (this.flatpickrInstance) {
			let dates = this.flatpickrInstance.selectedDates;
			if (changes.value && this.didDateValueChange(changes.value.currentValue, changes.value.previousValue)) {
				dates = changes.value.currentValue;
			}
			// only reset the flatpickr instance on Input changes
			this.flatpickrInstance = flatpickr(`#${this.id}`, this.flatpickrOptions);
			this.setDateValues(dates);
		}
	}

	ngAfterViewInit() {
		this.flatpickrInstance = flatpickr(`#${this.id}`, this.flatpickrOptions);

		if (this.value.length > 0) {
			this.setDateValues(this.value);
		}
	}

	@HostListener("focusin")
	onFocus() {
		this.onTouched();
	}

	/**
	 * Writes a value from the model to the component. Expects the value to be `null` or `(Date | string)[]`
	 * @param value value recived from the model
	 */
	writeValue(value: (Date | string)[]) {
		this.value = value;
		this.setDateValues(this.value);
	}

	registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	onTouched: () => any = () => {};

	propagateChange = (_: any) => {};

	/**
	 * Cleans up our flatpickr instance
	 */
	ngOnDestroy() {
		if (!this.flatpickrInstance) { return; }
		this.flatpickrInstance.destroy();
	}

	/**
	 * Handles the `valueChange` event from the primary/single input
	 */
	onValueChange(event: string) {
		if (this.flatpickrInstance) {
			const date = this.flatpickrInstance.parseDate(event, this.dateFormat);
			if (this.range) {
				this.setDateValues([date, this.flatpickrInstance.selectedDates[1]]);
			} else {
				this.setDateValues([date]);
			}
			this.doSelect(this.flatpickrInstance.selectedDates);
		}
	}

	/**
	 * Handles the `valueChange` event from the range input
	 */
	onRangeValueChange(event: string) {
		if (this.flatpickrInstance) {
			const date = this.flatpickrInstance.parseDate(event, this.dateFormat);
			this.setDateValues([this.flatpickrInstance.selectedDates[0], date]);
			this.doSelect(this.flatpickrInstance.selectedDates);
		}
	}

	/**
	 * Carbon uses a number of specific classnames for parts of the flatpickr - this idempotent method applies them if needed.
	 */
	protected updateClassNames() {
		if (!this.elementRef) { return; }

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

	/**
	 * Applies the given date value array to both the flatpickr instance and the `input`(s)
	 * @param dates the date values to apply
	 */
	protected setDateValues(dates: (Date | string)[]) {
		if (this.flatpickrInstance) {
			const singleInput = this.elementRef.nativeElement.querySelector(`#${this.id}`);
			const rangeInput = this.elementRef.nativeElement.querySelector(`#${this.id}-rangeInput`);

			// set the date on the instance
			this.flatpickrInstance.setDate(dates);

			// we can either set a date value or an empty string, so we start with an empty string
			let singleDate = "";
			// if date is a string, parse and format
			if (typeof dates[0] === "string") {
				singleDate = this.flatpickrInstance.parseDate(dates[0], this.dateFormat);
				singleDate = this.flatpickrInstance.formatDate(singleDate, this.dateFormat);
			// if date is not a string we can assume it's a Date and we should format
			} else if (!!dates[0]) {
				singleDate = this.flatpickrInstance.formatDate(dates[0], this.dateFormat);
			}
			// apply the value
			singleInput.value = singleDate;

			if (rangeInput) {
				// we can either set a date value or an empty string, so we start with an empty string
				let rangeDate = "";
				// if date is a string, parse and format
				if (typeof dates[1] === "string") {
					rangeDate = this.flatpickrInstance.parseDate(dates[1].toString(), this.dateFormat);
					rangeDate = this.flatpickrInstance.formatDate(rangeDate, this.dateFormat);
				// if date is not a string we can assume it's a Date and we should format
				} else if (!!dates[1]) {
					rangeDate = this.flatpickrInstance.formatDate(dates[1], this.dateFormat);
				}
				// apply the value
				rangeInput.value = rangeDate;
			}
		}
	}

	protected doSelect(selectedValue: (Date | string)[]) {
		this.valueChange.emit(selectedValue);
		this.propagateChange(selectedValue);
	}

	protected didDateValueChange(currentValue, previousValue) {
		return currentValue[0] !== previousValue[0] || currentValue[1] !== previousValue[1];
	}
}
