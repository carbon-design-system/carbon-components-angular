export class FlatpickrInstance {
	/** The array of selected dates (Date objects). */
	selectedDates: Date[];
	/** The year currently displayed on the calendar. */
	currentYear: number;
	/** The zero-indexed month number (0-11) currently displayed on the calendar. */
	currentMonth: number;
	/** The configuration object (defaults + user-specified options). */
	config: Object;

	/** The text input element associated with flatpickr. */
	input: HTMLElement;
	/**  This is the div.flatpickr-calendar element. */
	calendarContainer: HTMLElement;
	/** The “left arrow” element responsible for decrementing the current month. */
	prevMonthNav: HTMLElement;
	/** The “right arrow” element responsible for incrementing the current month. */
	nextMonthNav: HTMLElement;
	/** The span holding the current month’s name. */
	currentMonthElement: HTMLElement;
	/** The input holding the current year. */
	currentYearElement: HTMLElement;
	/** The container for all the day elements. */
	days: HTMLElement;

	/** Changes the current month. (0 = January, 11 = December) */
	changeMonth(month: number, is_offset: boolean): void;
	/** Resets the selected dates (if any) and clears the input. */
	clear(): void;
	/** Closes the calendar. */
	close(): void;
	/** Destroys the Flatpickr instance, cleans up - removes event listeners, restores inputs, etc. */
	destroy(): void;
	/** A string representation of date, formatted as per format. */
	formatDate(date: Date, format: string): string;
	/** Sets the calendar view to the year and month of date, which can be a date string, a Date, or nothing. If date is undefined, the view is set to the latest selected date, the minDate, or today’s date */
	jumpToDate(date?: Date | string): void;
	/** Shows/opens the calendar. */
	open(): void;
	/** Parses a date string or a timestamp, and returns a Date. */
	parseDate(date: string, format: string): Date;
	/** Redraws the calendar. Shouldn’t be necessary in most cases. */
	redraw(): void;
	/** Sets a config option to value, redrawing the calendar and updating the current view, if necessary. */
	set(option: string, value: any): void;
	/** Sets the current selected date(s) to date, which can be a date string, a Date, or an Array of the Dates. Optionally, pass true as the second argument to force any onChange events to fire. And if you’re passing a date string with a format other than your dateFormat, provide a dateFormat e.g. "m/d/Y". */
	setDate(date: Date | string | Date[], triggerChange: boolean, dateFormat: string): void;
	/** Shows/opens the calendar if its closed, hides/closes it otherwise. */
	toggle(): void;
}
