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
						[skeleton]="skeleton">
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
						[skeleton]="skeleton">
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

	@Input() value: (Date | string)[] = [];

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

	protected _flatpickrOptions = {
		allowInput: true
	};

	protected flatpickrBaseOptions = {
		mode: "single",
		dateFormat: "m/d/Y",
		plugins: this.plugins,
		onChange: (selectedValue: any) => { this.doSelect(selectedValue); },
		onOpen: () => { this.updateClassNames(); },
		onValueUpdate: (event) => { this.doSelect(event); },
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
			this.flatpickrInstance = flatpickr(`#${this.id}`, this.flatpickrOptions);
			this.flatpickrInstance.setDate(dates);
			this.setDateValues(dates);
		}
	}

	ngAfterViewInit() {
		this.flatpickrInstance = flatpickr(`#${this.id}`, this.flatpickrOptions);
		if (this.value.length > 0) {
			this.flatpickrInstance.setDate(this.value);
			this.setDateValues(this.value);
		}
	}

	@HostListener("focusin")
	onFocus() {
		this.onTouched();
	}

	doSelect(selectedValue) {
		this.valueChange.emit(selectedValue);
		this.propagateChange(selectedValue);
	}

	updateClassNames() {
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
		if (!this.flatpickrInstance) { return; }
		this.flatpickrInstance.destroy();
	}

	protected setDateValues(dates: (Date | string)[]) {
		const singleInput = this.elementRef.nativeElement.querySelector(`#${this.id}`);
		const rangeInput = this.elementRef.nativeElement.querySelector(`#${this.id}-rangeInput`);
		const singleDate = this.flatpickrInstance.parseDate(dates[0], this.dateFormat);
		singleInput.value = this.flatpickrInstance.formatDate(singleDate, this.dateFormat);
		if (rangeInput) {
			const rangeDate = this.flatpickrInstance.parseDate(dates[1], this.dateFormat);
			rangeInput.value = this.flatpickrInstance.formatDate(rangeDate, this.dateFormat);
		}
	}

	protected didDateValueChange(currentValue, previousValue) {
		return currentValue[0] !== previousValue[0] || currentValue[1] !== previousValue[1];
	}
}
