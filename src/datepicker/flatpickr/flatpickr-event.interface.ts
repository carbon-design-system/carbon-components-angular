export interface FlatpickrEvent {
	/**
	 * An array of Date objects selected by the user. When there are no dates
	 * selected, the array is empty.
	 */
	selectedDates: Date[];

	/**
	 * A string representation of the latest selected Date object by the user.
	 * The string is formatted as per the {dateFormat} option.
	 */
	dateStr: string;

	/**
	 * The Flatpickr object, containing various methods and properties.
	 */
	instance: Object;
}
