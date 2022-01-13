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
	OnChanges,
	SimpleChanges,
	AfterViewChecked,
	AfterViewInit,
	ViewChild,
	AfterContentInit,
	OnInit,
	SimpleChange
} from "@angular/core";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import flatpickr from "flatpickr";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { carbonFlatpickrMonthSelectPlugin } from "./carbon-flatpickr-month-select";
import { Subscription } from "rxjs";
import * as languages from "flatpickr/dist/l10n/index";
import { DatePickerInput } from "carbon-components-angular/datepicker-input";
import { ElementService } from "carbon-components-angular/utils";
import { I18n } from "carbon-components-angular/i18n";

/**
 * [See demo](../../?path=/story/components-date-picker--single)
 *
 * <example-url>../../iframe.html?id=components-date-picker--single</example-url>
 */
@Component({
	selector: "ibm-date-picker",
	template: `
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
					#input
					[label]="label"
					[placeholder]="placeholder"
					[pattern]="inputPattern"
					[id]="id + '-input'"
					[size]="size"
					[type]="(range ? 'range' : 'single')"
					[hasIcon]="(range ? false : true)"
					[disabled]="disabled"
					[invalid]="invalid"
					[invalidText]="invalidText"
					[warn]="warn"
					[warnText]="warnText"
					[skeleton]="skeleton"
					(valueChange)="onValueChange($event)"
					(click)="openCalendar(input)">
				</ibm-date-picker-input>
			</div>

			<div *ngIf="range" class="bx--date-picker-container">
				<ibm-date-picker-input
					#rangeInput
					[label]="rangeLabel"
					[placeholder]="placeholder"
					[pattern]="inputPattern"
					[id]="id + '-rangeInput'"
					[size]="size"
					[type]="(range ? 'range' : 'single')"
					[hasIcon]="(range ? true : null)"
					[disabled]="disabled"
					[invalid]="rangeInvalid"
					[invalidText]="rangeInvalidText"
					[warn]="rangeWarn"
					[warnText]="rangeWarnText"
					[skeleton]="skeleton"
					(valueChange)="onRangeValueChange($event)"
					(click)="openCalendar(rangeInput)">
				</ibm-date-picker-input>
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
export class DatePicker implements
	OnInit,
	OnDestroy,
	OnChanges,
	AfterViewChecked,
	AfterViewInit,
	AfterContentInit {
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

	/**
	 * Language of the flatpickr calendar.
	 *
	 * For reference of the possible locales:
	 * https://github.com/flatpickr/flatpickr/blob/master/src/l10n/index.ts
	 */
	@Input() language = "en";

	@Input() label: string  | TemplateRef<any>;

	@Input() rangeLabel: string;

	@Input() placeholder = "mm/dd/yyyy";

	/**
	 * Aria label added to datepicker's calendar container.
	 */
	@Input() ariaLabel = "calendar container";

	/**
	 * The pattern for the underlying input element
	 * @deprecated as of v4 - switch to inputPattern
	 */
	@Input() pattern = "^\\d{1,2}/\\d{1,2}/\\d{4}$";

	/**
	 * The pattern for the underlying input element
	 */
	@Input() set inputPattern(value: string) {
		this.pattern = value;
	}

	get inputPattern() {
		return this.pattern;
	}

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
	/**
	 * Set to `true` to display the invalid state.
	 */
	@Input() invalid = false;
	/**
	 * Value displayed if datepicker is in an invalid state.
	 */
	@Input() invalidText: string | TemplateRef<any>;
	/**
	  * Set to `true` to show a warning (contents set by warningText)
	  */
	@Input() warn = false;
	/**
	 * Sets the warning text
	 */
	@Input() warnText: string | TemplateRef<any>;

	@Input() size: "sm" | "md" | "xl" = "md";
	/**
	 * Set to `true` to display the invalid state for the second datepicker input.
	 */
	@Input() rangeInvalid = false;
	/**
	 * Value displayed if the second datepicker input is in an invalid state.
	 */
	@Input() rangeInvalidText: string | TemplateRef<any>;
	/**
	  * Set to `true` to show a warning in the second datepicker input (contents set by rangeWarningText)
	  */
	@Input() rangeWarn = false;
	/**
	 * Sets the warning text for the second datepicker input
	 */
	@Input() rangeWarnText: string | TemplateRef<any>;

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
			dateFormat: this.dateFormat,
			locale: languages.default[this.language]
		});
	}

	// @ts-ignore
	@ViewChild("input", { static: true }) input: DatePickerInput;

	// @ts-ignore
	@ViewChild("rangeInput", { static: false }) rangeInput: DatePickerInput;

	@Output() valueChange: EventEmitter<any> = new EventEmitter();

	protected _value = [];

	protected _flatpickrOptions = {
		allowInput: true
	};

	protected flatpickrBaseOptions = {
		mode: "single",
		dateFormat: "m/d/Y",
		plugins: this.plugins,
		onOpen: () => {
			this.updateClassNames();
			this.updateAttributes();
			this.updateCalendarListeners();
		},
		onClose: () => {
			// This makes sure that the `flatpickrInstance selectedDates` are in sync with the values of
			// the inputs when the calendar closes.
			if (this.range && this.flatpickrInstance) {
				if (this.flatpickrInstance.selectedDates.length !== 2) {
					// we could `this.flatpickrInstance.clear()` but it insists on opening the second picker
					// in some cases, so instead we do this
					this.setDateValues([]);
					this.doSelect([]);
					return;
				}
				const inputValue = this.input.input.nativeElement.value;
				const rangeInputValue = this.rangeInput.input.nativeElement.value;
				if (inputValue || rangeInputValue) {
					const parseDate = (date: string) => this.flatpickrInstance.parseDate(date, this.dateFormat);
					this.setDateValues([parseDate(inputValue), parseDate(rangeInputValue)]);
					this.doSelect(this.flatpickrInstance.selectedDates);
				}
			}
		},
		onDayCreate: (_dObj, _dStr, _fp, dayElem) => {
			dayElem.classList.add("bx--date-picker__day");
		},
		nextArrow: this.rightArrowHTML(),
		prevArrow: this.leftArrowHTML(),
		value: this.value
	};

	protected flatpickrInstance = null;

	protected visibilitySubscription = new Subscription();

	constructor(
		protected elementRef: ElementRef,
		protected elementService: ElementService,
		protected i18n: I18n
	) { }

	ngOnInit() {
		// if i18n is set to anything other than en we'll want to change the language
		// otherwise we'll just use the local setting
		if (this.i18n.getLocale() !== "en") {
			this.i18n.getLocaleObservable().subscribe(locale => {
				this.language = locale;
				this.resetFlatpickrInstance();
			});
		}
	}

	ngOnChanges(changes: SimpleChanges) {
		// Reset the flatpickr instance on input changes that affect flatpickr.
		const resetOnInputs = [
			"range",
			"dateFormat",
			"language",
			"id",
			"value",
			"theme",
			"plugins",
			"flatpickrOptions"
		];
		const changeKeys = Object.keys(changes);
		if (changeKeys.some(key => resetOnInputs.includes(key))) {
			this.resetFlatpickrInstance(changes.value);
		}
	}

	ngAfterViewInit() {
		this.visibilitySubscription = this.elementService
			.visibility(this.elementRef.nativeElement, this.elementRef.nativeElement)
			.subscribe(value => {
				if (this.isFlatpickrLoaded() && this.flatpickrInstance.isOpen) {
					this.flatpickrInstance._positionCalendar(this.elementRef.nativeElement.querySelector(`#${this.id}-input`));
					if (!value.visible) {
						this.flatpickrInstance.close();
					}
				}
			});

		setTimeout(() => {
			this.addInputListeners();
		}, 0);
	}

	// because the actual view may be delayed in loading (think projection into a tab pane)
	// and because we rely on a library that operates outside the Angular view of the world
	// we need to keep trying to load the library, until the relevant DOM is actually live
	ngAfterViewChecked() {
		if (!this.isFlatpickrLoaded()) {
			/// @ts-ignore ts is unhappy with the below call to `flatpickr`
			this.flatpickrInstance = flatpickr(`#${this.id}-input`, this.flatpickrOptions);
			// if (and only if) the initialization succeeded, we can set the date values
			if (this.isFlatpickrLoaded()) {
				if (this.value.length > 0) {
					this.setDateValues(this.value);
				}
			}
		}
	}

	ngAfterContentInit() {
		(languages.default.en.weekdays.shorthand as string[])
			= languages.default.en.weekdays.longhand.map(day => {
				if (day === "Thursday") {
					return "Th";
				}
				return day.charAt(0);
			});
	}

	@HostListener("focusin")
	onFocus() {
		// Updates the month manually when calendar mode is range because month
		// will not update properly without manually updating them on focus.
		if (this.range) {
			if (this.rangeInput.input.nativeElement === document.activeElement && this.flatpickrInstance.selectedDates[1]) {
				const currentMonth = this.flatpickrInstance.selectedDates[1].getMonth();
				this.flatpickrInstance.changeMonth(currentMonth, false);
			} else if (this.input.input.nativeElement === document.activeElement && this.flatpickrInstance.selectedDates[0]) {
				const currentMonth = this.flatpickrInstance.selectedDates[0].getMonth();
				this.flatpickrInstance.changeMonth(currentMonth, false);
			}
		}
	}

	@HostListener("focusout")
	onFocusOut() {
		this.onTouched();
	}

	/**
	 * Writes a value from the model to the component. Expects the value to be `null` or `(Date | string)[]`
	 * @param value value received from the model
	 */
	writeValue(value: (Date | string)[]) {
		this.value = value;
		setTimeout(() => {
			if (this.isFlatpickrLoaded() && this.flatpickrInstance.config) {
				this.setDateValues(this.value);
			}
		});
	}

	/**
	 * `ControlValueAccessor` method to programmatically disable the DatePicker.
	 *
	 * ex: `this.formGroup.get("myDatePicker").disable();`
	 *
	 * @param isDisabled `true` to disable the DatePicker
	 */
	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
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
		if (!this.isFlatpickrLoaded()) { return; }
		this.flatpickrInstance.destroy();
		this.visibilitySubscription.unsubscribe();
	}

	/**
	 * Handles the `valueChange` event from the primary/single input
	 */
	onValueChange(event: string) {
		if (this.isFlatpickrLoaded()) {
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
		if (this.isFlatpickrLoaded() && this.flatpickrInstance.isOpen) {
			const date = this.flatpickrInstance.parseDate(event, this.dateFormat);
			this.setDateValues([this.flatpickrInstance.selectedDates[0], date]);
			this.doSelect(this.flatpickrInstance.selectedDates);
		}
	}

	/**
	 * Handles opening the calendar "properly" when the calendar icon is clicked.
	 */
	openCalendar(datepickerInput: DatePickerInput) {
		if (this.range) {
			datepickerInput.input.nativeElement.click();

			// If the first input's calendar icon is clicked when calendar is in range mode, then
			// the month and year needs to be manually changed to the current selected month and
			// year otherwise the calendar view will not be updated upon opening.
			if (datepickerInput === this.input && this.flatpickrInstance.selectedDates[0]) {
				const currentMonth = this.flatpickrInstance.selectedDates[0].getMonth();

				this.flatpickrInstance.currentYear = this.flatpickrInstance.selectedDates[0].getFullYear();
				this.flatpickrInstance.changeMonth(currentMonth, false);
			}
		} else {
			// Single-mode flatpickr handles mousedown but not click, so nativeElement.click() won't
			// work when the calendar icon is clicked. In this case we simply use flatpickr.open().
			this.flatpickrInstance.open();
		}
	}

	protected updateCalendarListeners() {
		const calendarContainer = document.querySelectorAll(".flatpickr-calendar");
		Array.from(calendarContainer).forEach(calendar => {
			calendar.removeEventListener("click", this.preventCalendarClose);
			calendar.addEventListener("click", this.preventCalendarClose);
		});
	}

	/**
	 * Handles the initialization of event listeners for the datepicker input and range input fields.
	 */
	protected addInputListeners() {
		if (!this.isFlatpickrLoaded()) {
			return;
		}

		// Allows focus transition from the datepicker input or range input field to
		// flatpickr calendar using a keyboard.
		const addFocusCalendarListener = (element: HTMLInputElement) => {
			element.addEventListener("keydown", (event: KeyboardEvent) => {
				if (event.key === "ArrowDown") {
					if (!this.flatpickrInstance.isOpen) {
						this.flatpickrInstance.open();
					}

					const calendarContainer = this.flatpickrInstance.calendarContainer;
					const dayElement = calendarContainer && calendarContainer.querySelector(".flatpickr-day[tabindex]");

					if (dayElement) {
						dayElement.focus();

						// If the user manually inputs a value into the date field and presses arrow down,
						// datepicker input onchange will be triggered when focus is removed from it and
						// `flatpickrInstance.setDate` and `flatpickrInstance.changeMonth` will be invoked
						// which will automatically change focus to the beginning of the document.
						if (document.activeElement !== dayElement && this.flatpickrInstance.selectedDateElem) {
							this.flatpickrInstance.selectedDateElem.focus();
						}
					}
				}
			});
		};

		if (this.input && this.input.input) {
			addFocusCalendarListener(this.input.input.nativeElement);
		}

		if (this.rangeInput && this.rangeInput.input) {
			addFocusCalendarListener(this.rangeInput.input.nativeElement);
		}
	}

	/**
	 * Resets the flatpickr instance while keeping the date values (or updating them if newDates is provided)
	 *
	 * Used to pick up input changes or locale changes.
	 *
	 * @param newDates An optional SimpleChange of date values
	 */
	protected resetFlatpickrInstance(newDates?: SimpleChange) {
		if (this.isFlatpickrLoaded()) {
			let dates = this.flatpickrInstance.selectedDates;
			if (newDates && this.didDateValueChange(newDates.currentValue, newDates.previousValue)) {
				dates = newDates.currentValue;
			}
			// only reset the flatpickr instance on Input changes
			this.flatpickrInstance = flatpickr(`#${this.id}-input`, this.flatpickrOptions);
			this.setDateValues(dates);
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

	protected updateAttributes() {
		const calendarContainer = document.querySelectorAll(".flatpickr-calendar");
		Array.from(calendarContainer).forEach(calendar => {
			calendar.setAttribute("role", "region");
			calendar.setAttribute("aria-label", this.ariaLabel);
		});
	}

	/**
	 * Applies the given date value array to both the flatpickr instance and the `input`(s)
	 * @param dates the date values to apply
	 */
	protected setDateValues(dates: (Date | string)[]) {
		if (this.isFlatpickrLoaded()) {
			const singleInput = this.elementRef.nativeElement.querySelector(`#${this.id}-input`);
			const rangeInput = this.elementRef.nativeElement.querySelector(`#${this.id}-rangeInput`);

			// `flatpickrInstance.setDate` removes the focus on the selected date element and will
			// automatically change focus to the beginning of the document. If a selected date is
			// focused before `flatpickrInstance.setDate` is invoked then it should remain focused.
			let shouldRefocusDateElement = this.flatpickrInstance.selectedDateElem === document.activeElement;

			// set the date on the instance
			this.flatpickrInstance.setDate(dates);

			if (shouldRefocusDateElement) {
				this.flatpickrInstance.selectedDateElem.focus();
			}

			// we can either set a date value or an empty string, so we start with an empty string
			let singleDate = "";
			// if date is a string, parse and format
			if (typeof this.flatpickrInstance.selectedDates[0] === "string") {
				singleDate = this.flatpickrInstance.parseDate(this.flatpickrInstance.selectedDates[0], this.dateFormat);
				singleDate = this.flatpickrInstance.formatDate(singleDate, this.dateFormat);
			// if date is not a string we can assume it's a Date and we should format
			} else if (!!this.flatpickrInstance.selectedDates[0]) {
				singleDate = this.flatpickrInstance.formatDate(this.flatpickrInstance.selectedDates[0], this.dateFormat);
			}

			if (rangeInput) {
				// we can either set a date value or an empty string, so we start with an empty string
				let rangeDate = "";
				// if date is a string, parse and format
				if (typeof this.flatpickrInstance.selectedDates[1] === "string") {
					rangeDate = this.flatpickrInstance.parseDate(this.flatpickrInstance.selectedDates[1].toString(), this.dateFormat);
					rangeDate = this.flatpickrInstance.formatDate(rangeDate, this.dateFormat);
				// if date is not a string we can assume it's a Date and we should format
				} else if (!!this.flatpickrInstance.selectedDates[1]) {
					rangeDate = this.flatpickrInstance.formatDate(this.flatpickrInstance.selectedDates[1], this.dateFormat);
				}
				setTimeout(() => {
					// apply the values
					rangeInput.value = rangeDate;
					singleInput.value = singleDate;
				});
			}
		}
	}

	protected preventCalendarClose = event => event.stopPropagation();

	protected doSelect(selectedValue: (Date | string)[]) {
		// In range mode, if a date is selected from the first calendar that is from the previous month,
		// the month will not be updated on the calendar until the calendar is re-opened.
		// This will make sure the calendar is updated with the correct month.
		if (this.range && this.flatpickrInstance.selectedDates[0]) {
			const currentMonth = this.flatpickrInstance.selectedDates[0].getMonth();

			// `flatpickrInstance.changeMonth` removes the focus on the selected date element and will
			// automatically change focus to the beginning of the document. If a selected date is
			// focused before `flatpickrInstance.changeMonth` is invoked then it should remain focused.
			let shouldRefocusDateElement = this.flatpickrInstance.selectedDateElem === document.activeElement;

			this.flatpickrInstance.changeMonth(currentMonth, false);

			if (shouldRefocusDateElement) {
				this.flatpickrInstance.selectedDateElem.focus();
			}

		}
		this.valueChange.emit(selectedValue);
		this.propagateChange(selectedValue);
	}

	protected didDateValueChange(currentValue, previousValue) {
		return currentValue[0] !== previousValue[0] || currentValue[1] !== previousValue[1];
	}

	/**
	 * More advanced checking of the loaded state of flatpickr
	 */
	protected isFlatpickrLoaded() {
		// cast the instance to a boolean, and some method that has to exist for the library to be loaded in this case `setDate`
		return !!this.flatpickrInstance && !!this.flatpickrInstance.setDate;
	}

	/**
	 * Right arrow HTML passed to flatpickr
	 */
	protected rightArrowHTML() {
		return `
			<svg width="16px" height="16px" viewBox="0 0 16 16">
				<polygon points="11,8 6,13 5.3,12.3 9.6,8 5.3,3.7 6,3 "/>
				<rect width="16" height="16" style="fill:none" />
			</svg>`;
	}

	/**
	 * Left arrow HTML passed to flatpickr
	 */
	protected leftArrowHTML() {
		return `
			<svg width="16px" height="16px" viewBox="0 0 16 16">
				<polygon points="5,8 10,3 10.7,3.7 6.4,8 10.7,12.3 10,13 "/>
				<rect width="16" height="16" style="fill:none" />
			</svg>`;
	}
}
