/**
 * This is from carbon-components.
 * We need it to format the month select according to specs.
 * Carbon currently doesn't expose this as a seperate package,
 * and we don't import the carbon-components js (on purpose)
 * so some copy pasta is required
 *
 * ref: https://github.com/carbon-design-system/carbon/blob/
 * 	f06f38f0c2ef624e409a3d5711e897a79f4c88fc/packages/components/src/components/date-picker/date-picker.js#L52-L123
 */

const monthToStr = (monthNumber, shorthand, locale) =>
	locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];

const config = {
	selectorInit: "[data-date-picker]",
	selectorDatePickerInput: "[data-date-picker-input]",
	selectorDatePickerInputFrom: "[data-date-picker-input-from]",
	selectorDatePickerInputTo: "[data-date-picker-input-to]",
	selectorDatePickerIcon: "[data-date-picker-icon]",
	selectorFlatpickrMonthYearContainer: ".flatpickr-current-month",
	selectorFlatpickrYearContainer: ".numInputWrapper",
	selectorFlatpickrCurrentMonth: ".cur-month",
	classCalendarContainer: `bx--date-picker__calendar`,
	classMonth: `bx--date-picker__month`,
	classWeekdays: `bx--date-picker__weekdays`,
	classDays: `bx--date-picker__days`,
	classWeekday: `bx--date-picker__weekday`,
	classDay: `bx--date-picker__day`,
	classFocused: `bx--focused`,
	classVisuallyHidden: `bx--visually-hidden`,
	classFlatpickrCurrentMonth: "cur-month",
	attribType: "data-date-picker-type",
	dateFormat: "m/d/Y",
	shorthand: false
};

export const carbonFlatpickrMonthSelectPlugin = fp => {
	const setupElements = () => {
		if (!fp.monthElements) {
			return;
		}
		fp.monthElements.forEach(elem => {
			if (!elem.parentNode) { return; }
			elem.parentNode.removeChild(elem);
		});
		fp.monthElements.splice(
			0,
			fp.monthElements.length,
			...fp.monthElements.map(() => {
				// eslint-disable-next-line no-underscore-dangle
				const monthElement = fp._createElement(
					"span",
					config.classFlatpickrCurrentMonth
				);
				monthElement.textContent = monthToStr(
					fp.currentMonth,
					config.shorthand === true,
					fp.l10n
				);
				fp.yearElements[0]
					.closest(config.selectorFlatpickrMonthYearContainer)
					.insertBefore(
						monthElement,
						fp.yearElements[0].closest(config.selectorFlatpickrYearContainer)
					);
				return monthElement;
			})
		);
	};
	const updateCurrentMonth = () => {
		const monthStr = monthToStr(
			fp.currentMonth,
			config.shorthand === true,
			fp.l10n
		);
		fp.yearElements.forEach(elem => {
			const currentMonthContainer = elem.closest(
				config.selectorFlatpickrMonthYearContainer
			);
			Array.prototype.forEach.call(
				currentMonthContainer.querySelectorAll(".cur-month"),
				monthElement => {
					monthElement.textContent = monthStr;
				}
			);
		});
	};

	const register = () => {
		fp.loadedPlugins.push("carbonFlatpickrMonthSelectPlugin");
	};

	return {
		onMonthChange: updateCurrentMonth,
		onOpen: updateCurrentMonth,
		onReady: [setupElements, updateCurrentMonth, register]
	};
};
