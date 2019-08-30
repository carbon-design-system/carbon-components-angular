/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
/** @type {?} */
const monthToStr = (monthNumber, shorthand, locale) => locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
const ɵ0 = monthToStr;
/** @type {?} */
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
/** @type {?} */
export const carbonFlatpickrMonthSelectPlugin = fp => {
    /** @type {?} */
    const setupElements = () => {
        if (!fp.monthElements) {
            return;
        }
        fp.monthElements.forEach(elem => {
            if (!elem.parentNode) {
                return;
            }
            elem.parentNode.removeChild(elem);
        });
        fp.monthElements.splice(0, fp.monthElements.length, ...fp.monthElements.map(() => {
            /** @type {?} */
            const monthElement = fp._createElement("span", config.classFlatpickrCurrentMonth);
            monthElement.textContent = monthToStr(fp.currentMonth, config.shorthand === true, fp.l10n);
            fp.yearElements[0]
                .closest(config.selectorFlatpickrMonthYearContainer)
                .insertBefore(monthElement, fp.yearElements[0].closest(config.selectorFlatpickrYearContainer));
            return monthElement;
        }));
    };
    /** @type {?} */
    const updateCurrentMonth = () => {
        /** @type {?} */
        const monthStr = monthToStr(fp.currentMonth, config.shorthand === true, fp.l10n);
        fp.yearElements.forEach(elem => {
            /** @type {?} */
            const currentMonthContainer = elem.closest(config.selectorFlatpickrMonthYearContainer);
            Array.prototype.forEach.call(currentMonthContainer.querySelectorAll(".cur-month"), monthElement => {
                monthElement.textContent = monthStr;
            });
        });
    };
    /** @type {?} */
    const register = () => {
        fp.loadedPlugins.push("carbonFlatpickrMonthSelectPlugin");
    };
    return {
        onMonthChange: updateCurrentMonth,
        onOpen: updateCurrentMonth,
        onReady: [setupElements, updateCurrentMonth, register]
    };
};
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyYm9uLWZsYXRwaWNrci1tb250aC1zZWxlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci9jYXJib24tZmxhdHBpY2tyLW1vbnRoLXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFXQSxNQUFNLFVBQVUsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FDckQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7OztBQUVsRSxNQUFNLE1BQU0sR0FBRztJQUNkLFlBQVksRUFBRSxvQkFBb0I7SUFDbEMsdUJBQXVCLEVBQUUsMEJBQTBCO0lBQ25ELDJCQUEyQixFQUFFLCtCQUErQjtJQUM1RCx5QkFBeUIsRUFBRSw2QkFBNkI7SUFDeEQsc0JBQXNCLEVBQUUseUJBQXlCO0lBQ2pELG1DQUFtQyxFQUFFLDBCQUEwQjtJQUMvRCw4QkFBOEIsRUFBRSxrQkFBa0I7SUFDbEQsNkJBQTZCLEVBQUUsWUFBWTtJQUMzQyxzQkFBc0IsRUFBRSwyQkFBMkI7SUFDbkQsVUFBVSxFQUFFLHdCQUF3QjtJQUNwQyxhQUFhLEVBQUUsMkJBQTJCO0lBQzFDLFNBQVMsRUFBRSx1QkFBdUI7SUFDbEMsWUFBWSxFQUFFLDBCQUEwQjtJQUN4QyxRQUFRLEVBQUUsc0JBQXNCO0lBQ2hDLFlBQVksRUFBRSxhQUFhO0lBQzNCLG1CQUFtQixFQUFFLHFCQUFxQjtJQUMxQywwQkFBMEIsRUFBRSxXQUFXO0lBQ3ZDLFVBQVUsRUFBRSx1QkFBdUI7SUFDbkMsVUFBVSxFQUFFLE9BQU87SUFDbkIsU0FBUyxFQUFFLEtBQUs7Q0FDaEIsQ0FBQzs7QUFFRixhQUFhLGdDQUFnQyxHQUFHLEVBQUUsQ0FBQyxFQUFFOztJQUNwRCxNQUFNLGFBQWEsR0FBRyxHQUFHLEVBQUU7UUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDdEIsT0FBTztTQUNQO1FBQ0QsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUN0QixDQUFDLEVBQ0QsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQ3ZCLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFOztZQUU1QixNQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUNyQyxNQUFNLEVBQ04sTUFBTSxDQUFDLDBCQUEwQixDQUNqQyxDQUFDO1lBQ0YsWUFBWSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQ3BDLEVBQUUsQ0FBQyxZQUFZLEVBQ2YsTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQ3pCLEVBQUUsQ0FBQyxJQUFJLENBQ1AsQ0FBQztZQUNGLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2lCQUNoQixPQUFPLENBQUMsTUFBTSxDQUFDLG1DQUFtQyxDQUFDO2lCQUNuRCxZQUFZLENBQ1osWUFBWSxFQUNaLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUNqRSxDQUFDO1lBQ0gsT0FBTyxZQUFZLENBQUM7U0FDcEIsQ0FBQyxDQUNGLENBQUM7S0FDRixDQUFDOztJQUNGLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFOztRQUMvQixNQUFNLFFBQVEsR0FBRyxVQUFVLENBQzFCLEVBQUUsQ0FBQyxZQUFZLEVBQ2YsTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQ3pCLEVBQUUsQ0FBQyxJQUFJLENBQ1AsQ0FBQztRQUNGLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztZQUM5QixNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQ3pDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FDMUMsQ0FBQztZQUNGLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDM0IscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEVBQ3BELFlBQVksQ0FBQyxFQUFFO2dCQUNkLFlBQVksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2FBQ3BDLENBQ0QsQ0FBQztTQUNGLENBQUMsQ0FBQztLQUNILENBQUM7O0lBRUYsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7S0FDMUQsQ0FBQztJQUVGLE9BQU87UUFDTixhQUFhLEVBQUUsa0JBQWtCO1FBQ2pDLE1BQU0sRUFBRSxrQkFBa0I7UUFDMUIsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGtCQUFrQixFQUFFLFFBQVEsQ0FBQztLQUN0RCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBmcm9tIGNhcmJvbi1jb21wb25lbnRzLlxuICogV2UgbmVlZCBpdCB0byBmb3JtYXQgdGhlIG1vbnRoIHNlbGVjdCBhY2NvcmRpbmcgdG8gc3BlY3MuXG4gKiBDYXJib24gY3VycmVudGx5IGRvZXNuJ3QgZXhwb3NlIHRoaXMgYXMgYSBzZXBlcmF0ZSBwYWNrYWdlLFxuICogYW5kIHdlIGRvbid0IGltcG9ydCB0aGUgY2FyYm9uLWNvbXBvbmVudHMganMgKG9uIHB1cnBvc2UpXG4gKiBzbyBzb21lIGNvcHkgcGFzdGEgaXMgcmVxdWlyZWRcbiAqXG4gKiByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9jYXJib24tZGVzaWduLXN5c3RlbS9jYXJib24vYmxvYi9cbiAqIFx0ZjA2ZjM4ZjBjMmVmNjI0ZTQwOWEzZDU3MTFlODk3YTc5ZjRjODhmYy9wYWNrYWdlcy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmpzI0w1Mi1MMTIzXG4gKi9cblxuY29uc3QgbW9udGhUb1N0ciA9IChtb250aE51bWJlciwgc2hvcnRoYW5kLCBsb2NhbGUpID0+XG5cdGxvY2FsZS5tb250aHNbc2hvcnRoYW5kID8gXCJzaG9ydGhhbmRcIiA6IFwibG9uZ2hhbmRcIl1bbW9udGhOdW1iZXJdO1xuXG5jb25zdCBjb25maWcgPSB7XG5cdHNlbGVjdG9ySW5pdDogXCJbZGF0YS1kYXRlLXBpY2tlcl1cIixcblx0c2VsZWN0b3JEYXRlUGlja2VySW5wdXQ6IFwiW2RhdGEtZGF0ZS1waWNrZXItaW5wdXRdXCIsXG5cdHNlbGVjdG9yRGF0ZVBpY2tlcklucHV0RnJvbTogXCJbZGF0YS1kYXRlLXBpY2tlci1pbnB1dC1mcm9tXVwiLFxuXHRzZWxlY3RvckRhdGVQaWNrZXJJbnB1dFRvOiBcIltkYXRhLWRhdGUtcGlja2VyLWlucHV0LXRvXVwiLFxuXHRzZWxlY3RvckRhdGVQaWNrZXJJY29uOiBcIltkYXRhLWRhdGUtcGlja2VyLWljb25dXCIsXG5cdHNlbGVjdG9yRmxhdHBpY2tyTW9udGhZZWFyQ29udGFpbmVyOiBcIi5mbGF0cGlja3ItY3VycmVudC1tb250aFwiLFxuXHRzZWxlY3RvckZsYXRwaWNrclllYXJDb250YWluZXI6IFwiLm51bUlucHV0V3JhcHBlclwiLFxuXHRzZWxlY3RvckZsYXRwaWNrckN1cnJlbnRNb250aDogXCIuY3VyLW1vbnRoXCIsXG5cdGNsYXNzQ2FsZW5kYXJDb250YWluZXI6IGBieC0tZGF0ZS1waWNrZXJfX2NhbGVuZGFyYCxcblx0Y2xhc3NNb250aDogYGJ4LS1kYXRlLXBpY2tlcl9fbW9udGhgLFxuXHRjbGFzc1dlZWtkYXlzOiBgYngtLWRhdGUtcGlja2VyX193ZWVrZGF5c2AsXG5cdGNsYXNzRGF5czogYGJ4LS1kYXRlLXBpY2tlcl9fZGF5c2AsXG5cdGNsYXNzV2Vla2RheTogYGJ4LS1kYXRlLXBpY2tlcl9fd2Vla2RheWAsXG5cdGNsYXNzRGF5OiBgYngtLWRhdGUtcGlja2VyX19kYXlgLFxuXHRjbGFzc0ZvY3VzZWQ6IGBieC0tZm9jdXNlZGAsXG5cdGNsYXNzVmlzdWFsbHlIaWRkZW46IGBieC0tdmlzdWFsbHktaGlkZGVuYCxcblx0Y2xhc3NGbGF0cGlja3JDdXJyZW50TW9udGg6IFwiY3VyLW1vbnRoXCIsXG5cdGF0dHJpYlR5cGU6IFwiZGF0YS1kYXRlLXBpY2tlci10eXBlXCIsXG5cdGRhdGVGb3JtYXQ6IFwibS9kL1lcIixcblx0c2hvcnRoYW5kOiBmYWxzZVxufTtcblxuZXhwb3J0IGNvbnN0IGNhcmJvbkZsYXRwaWNrck1vbnRoU2VsZWN0UGx1Z2luID0gZnAgPT4ge1xuXHRjb25zdCBzZXR1cEVsZW1lbnRzID0gKCkgPT4ge1xuXHRcdGlmICghZnAubW9udGhFbGVtZW50cykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmcC5tb250aEVsZW1lbnRzLmZvckVhY2goZWxlbSA9PiB7XG5cdFx0XHRpZiAoIWVsZW0ucGFyZW50Tm9kZSkgeyByZXR1cm47IH1cblx0XHRcdGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcblx0XHR9KTtcblx0XHRmcC5tb250aEVsZW1lbnRzLnNwbGljZShcblx0XHRcdDAsXG5cdFx0XHRmcC5tb250aEVsZW1lbnRzLmxlbmd0aCxcblx0XHRcdC4uLmZwLm1vbnRoRWxlbWVudHMubWFwKCgpID0+IHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG5cdFx0XHRcdGNvbnN0IG1vbnRoRWxlbWVudCA9IGZwLl9jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwic3BhblwiLFxuXHRcdFx0XHRcdGNvbmZpZy5jbGFzc0ZsYXRwaWNrckN1cnJlbnRNb250aFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRtb250aEVsZW1lbnQudGV4dENvbnRlbnQgPSBtb250aFRvU3RyKFxuXHRcdFx0XHRcdGZwLmN1cnJlbnRNb250aCxcblx0XHRcdFx0XHRjb25maWcuc2hvcnRoYW5kID09PSB0cnVlLFxuXHRcdFx0XHRcdGZwLmwxMG5cblx0XHRcdFx0KTtcblx0XHRcdFx0ZnAueWVhckVsZW1lbnRzWzBdXG5cdFx0XHRcdFx0LmNsb3Nlc3QoY29uZmlnLnNlbGVjdG9yRmxhdHBpY2tyTW9udGhZZWFyQ29udGFpbmVyKVxuXHRcdFx0XHRcdC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0XHRtb250aEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRmcC55ZWFyRWxlbWVudHNbMF0uY2xvc2VzdChjb25maWcuc2VsZWN0b3JGbGF0cGlja3JZZWFyQ29udGFpbmVyKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiBtb250aEVsZW1lbnQ7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH07XG5cdGNvbnN0IHVwZGF0ZUN1cnJlbnRNb250aCA9ICgpID0+IHtcblx0XHRjb25zdCBtb250aFN0ciA9IG1vbnRoVG9TdHIoXG5cdFx0XHRmcC5jdXJyZW50TW9udGgsXG5cdFx0XHRjb25maWcuc2hvcnRoYW5kID09PSB0cnVlLFxuXHRcdFx0ZnAubDEwblxuXHRcdCk7XG5cdFx0ZnAueWVhckVsZW1lbnRzLmZvckVhY2goZWxlbSA9PiB7XG5cdFx0XHRjb25zdCBjdXJyZW50TW9udGhDb250YWluZXIgPSBlbGVtLmNsb3Nlc3QoXG5cdFx0XHRcdGNvbmZpZy5zZWxlY3RvckZsYXRwaWNrck1vbnRoWWVhckNvbnRhaW5lclxuXHRcdFx0KTtcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoXG5cdFx0XHRcdGN1cnJlbnRNb250aENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmN1ci1tb250aFwiKSxcblx0XHRcdFx0bW9udGhFbGVtZW50ID0+IHtcblx0XHRcdFx0XHRtb250aEVsZW1lbnQudGV4dENvbnRlbnQgPSBtb250aFN0cjtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCByZWdpc3RlciA9ICgpID0+IHtcblx0XHRmcC5sb2FkZWRQbHVnaW5zLnB1c2goXCJjYXJib25GbGF0cGlja3JNb250aFNlbGVjdFBsdWdpblwiKTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdG9uTW9udGhDaGFuZ2U6IHVwZGF0ZUN1cnJlbnRNb250aCxcblx0XHRvbk9wZW46IHVwZGF0ZUN1cnJlbnRNb250aCxcblx0XHRvblJlYWR5OiBbc2V0dXBFbGVtZW50cywgdXBkYXRlQ3VycmVudE1vbnRoLCByZWdpc3Rlcl1cblx0fTtcbn07XG4iXX0=