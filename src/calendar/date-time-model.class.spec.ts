import { TestBed } from "@angular/core/testing";
import { DateTimeModel } from "./calendar.module";

describe("DateTimeModel", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: []
		});
	});

	it("should start week on Sunday", () => {
		let dateTimeModel  = new DateTimeModel();

		expect(dateTimeModel.daysOfWeek).toEqual(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
	});

	it("should start week on Monday", () => {
		let dateTimeModel  = new DateTimeModel();

		dateTimeModel.weekStart = 1;

		expect(dateTimeModel.daysOfWeek).toEqual(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
	});

	it("should select a day", () => {
		let dateTimeModel  = new DateTimeModel();

		const day = new Date(2018, 5, 18, 10, 10);
		dateTimeModel.selectDay(day);

		expect(dateTimeModel.startDate).toEqual(new Date(2018, 5, 18));
		expect(dateTimeModel.endDate).toEqual(new Date(2018, 5, 18, 23, 59, 59));
	});

	it("should select a week (starts Sunday)", () => {
		let dateTimeModel  = new DateTimeModel();

		const day = new Date(2018, 5, 20, 10, 10);
		dateTimeModel.selectWeek(day);

		expect(dateTimeModel.startDate).toEqual(new Date(2018, 5, 17));
		expect(dateTimeModel.endDate).toEqual(new Date(2018, 5, 23, 23, 59, 59));
	});

	it("should select a week (starts Monday)", () => {
		let dateTimeModel  = new DateTimeModel();

		const day = new Date(2018, 5, 20, 10, 10);
		dateTimeModel.weekStart = 1;
		dateTimeModel.selectWeek(day);

		expect(dateTimeModel.startDate).toEqual(new Date(2018, 5, 18));
		expect(dateTimeModel.endDate).toEqual(new Date(2018, 5, 24, 23, 59, 59));
	});

	it("should select today", () => {
		let dateTimeModel  = new DateTimeModel();

		const today = new Date();
		dateTimeModel.selectToday();

		expect(dateTimeModel.startDate).toEqual(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
		expect(dateTimeModel.endDate).toEqual(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59));
	});

	it("should select yesterday", () => {
		let dateTimeModel  = new DateTimeModel();

		const today = new Date();
		const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
		dateTimeModel.selectYesterday();

		expect(dateTimeModel.startDate).toEqual(new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate()));
		expect(dateTimeModel.endDate).toEqual(new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate(), 23, 59, 59));
	});

	it("should select week to date (starts Sunday)", () => {
		let dateTimeModel  = new DateTimeModel();

		const day = new Date(2018, 5, 20, 10, 10);
		dateTimeModel.selectWeekToDate(day);

		expect(dateTimeModel.startDate).toEqual(new Date(2018, 5, 17));
		expect(dateTimeModel.endDate).toEqual(day);
	});

	it("should select week to date (starts Monday)", () => {
		let dateTimeModel  = new DateTimeModel();

		const day = new Date(2018, 5, 20, 10, 10);
		dateTimeModel.weekStart = 1;
		dateTimeModel.selectWeekToDate(day);

		expect(dateTimeModel.startDate).toEqual(new Date(2018, 5, 18));
		expect(dateTimeModel.endDate).toEqual(day);
	});

	it("should select month to date", () => {
		let dateTimeModel  = new DateTimeModel();

		const day = new Date(2018, 5, 20, 10, 10);
		dateTimeModel.selectMonthsToDate(day);

		expect(dateTimeModel.startDate).toEqual(new Date(2018, 5, 1));
		expect(dateTimeModel.endDate).toEqual(day);
	});

	it("should select 2 months to date", () => {
		let dateTimeModel  = new DateTimeModel();

		const day = new Date(2018, 5, 20, 10, 10);
		dateTimeModel.selectMonthsToDate(day, 2);

		expect(dateTimeModel.startDate).toEqual(new Date(2018, 4, 1));
		expect(dateTimeModel.endDate).toEqual(day);
	});

	it("should select month", () => {
		let dateTimeModel  = new DateTimeModel();

		const day = new Date(2018, 5, 20, 10, 10);
		dateTimeModel.selectMonth(day);

		expect(dateTimeModel.startDate).toEqual(new Date(2018, 5, 1));
		expect(dateTimeModel.endDate).toEqual(new Date(2018, 5, 30, 23, 59, 59));
	});

	it("should select last month", () => {
		let dateTimeModel  = new DateTimeModel();

		const now = new Date();
		dateTimeModel.selectLastMonth();

		expect(dateTimeModel.startDate).toEqual(new Date(now.getFullYear(), now.getMonth() - 1, 1));
		expect(dateTimeModel.endDate).toEqual(new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59));
	});

	it("should select quarter to date", () => {
		let dateTimeModel  = new DateTimeModel();
		dateTimeModel.selectQuarterToDate(new Date(2018, 5, 19));

		expect(dateTimeModel.startDate).toEqual(new Date(2018, 3, 1));
		expect(dateTimeModel.endDate).toEqual(new Date(2018, 5, 19));
	});

	it("should select quarter", () => {
		let dateTimeModel  = new DateTimeModel();
		dateTimeModel.selectQuarter(1, 2018);  // second quarter 2018

		expect(dateTimeModel.startDate).toEqual(new Date(2018, 3, 1));
		expect(dateTimeModel.endDate).toEqual(new Date(2018, 5, 30, 23, 59, 59));
	});

	it("should select last quarter", () => {
		let dateTimeModel  = new DateTimeModel();
		dateTimeModel.selectQuarter(3, 2018);  // last quarter 2018

		expect(dateTimeModel.startDate).toEqual(new Date(2018, 9, 1));
		expect(dateTimeModel.endDate).toEqual(new Date(2018, 11, 31, 23, 59, 59));
	});

	it("should select quarter range", () => {
		let dateTimeModel  = new DateTimeModel();
		dateTimeModel.selectQuarterStart(3, 2018);  // last quarter 2018
		dateTimeModel.selectQuarterEnd(1, 2019);  // second quarter 2019

		expect(dateTimeModel.startDate).toEqual(new Date(2018, 9, 1));
		expect(dateTimeModel.endDate).toEqual(new Date(2019, 5, 30, 23, 59, 59));
	});

	it("should return correct week start date (starts Sunday)", () => {
		let dateTimeModel  = new DateTimeModel();

		expect(dateTimeModel.weekStartDate(new Date(2018, 4, 2))).toEqual(new Date(2018, 3, 29));
		expect(dateTimeModel.weekStartDate(new Date(2018, 4, 9))).toEqual(new Date(2018, 4, 6));
	});

	it("should return correct week start date (starts Monday)", () => {
		let dateTimeModel  = new DateTimeModel();
		dateTimeModel.weekStart = 1;

		expect(dateTimeModel.weekStartDate(new Date(2018, 4, 2))).toEqual(new Date(2018, 3, 30));
		expect(dateTimeModel.weekStartDate(new Date(2018, 4, 9))).toEqual(new Date(2018, 4, 7));
	});

	it("should return days of month (starts Sunday)", () => {
		let dateTimeModel  = new DateTimeModel();

		const month = [
			[null, null, null, null, null, 1, 2],
			[3, 4, 5, 6, 7, 8, 9],
			[10, 11, 12, 13, 14, 15, 16],
			[17, 18, 19, 20, 21, 22, 23],
			[24, 25, 26, 27, 28, 29, 30],
			[null, null, null, null, null, null, null]
		];

		const day = new Date(2018, 5, 20, 10, 10);

		expect(dateTimeModel.daysOfMonth(day)).toEqual(month);
	});

	it("should return days of month (starts Monday)", () => {
		let dateTimeModel  = new DateTimeModel();
		dateTimeModel.weekStart = 1;

		const month = [
			[null, null, null, null, null, null, 1],
			[2, 3, 4, 5, 6, 7, 8],
			[9, 10, 11, 12, 13, 14, 15],
			[16, 17, 18, 19, 20, 21, 22],
			[23, 24, 25, 26, 27, 28, 29],
			[30, null, null, null, null, null, null]
		];

		const day = new Date(2018, 5, 20, 10, 10);

		expect(dateTimeModel.daysOfMonth(day)).toEqual(month);
	});

	it("should have one disabled date", () => {
		let dateTimeModel  = new DateTimeModel();
		dateTimeModel.disabledDates = [new Date(2018, 5, 20)];

		expect(dateTimeModel.isDateDisabled(new Date(2018, 5, 20))).toBeTruthy();
	});

	it("should have one disabled range", () => {
		let dateTimeModel  = new DateTimeModel();
		dateTimeModel.disabledDates = [[new Date(2018, 5, 20), DateTimeModel.dayEnd(new Date(2018, 5, 23))]];

		expect(dateTimeModel.isDateDisabled(new Date(2018, 5, 19))).toBeFalsy();
		expect(dateTimeModel.isDateDisabled(new Date(2018, 5, 20))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2018, 5, 21))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2018, 5, 22))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2018, 5, 23))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2018, 5, 24))).toBeFalsy();
	});

	it("should have open disabled range (infinity)", () => {
		let dateTimeModel  = new DateTimeModel();
		dateTimeModel.disabledDates = [[new Date(2018, 5, 20), null]];

		expect(dateTimeModel.isDateDisabled(new Date(2018, 5, 19))).toBeFalsy();
		expect(dateTimeModel.isDateDisabled(new Date(2018, 5, 20))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2018, 5, 21))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2019, 6, 22))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2020, 7, 23))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2021, 8, 24))).toBeTruthy();
	});

	it("should have one disabled range (big bang)", () => {
		let dateTimeModel  = new DateTimeModel();
		dateTimeModel.disabledDates = [[null, DateTimeModel.dayEnd(new Date(2018, 5, 23))]];

		expect(dateTimeModel.isDateDisabled(new Date(0))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2014, 5, 19))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2015, 5, 20))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2016, 5, 21))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2017, 5, 22))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2018, 5, 23))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2018, 5, 24))).toBeFalsy();
	});

	it("should have open disabled range (both)", () => {
		let dateTimeModel  = new DateTimeModel();
		dateTimeModel.disabledDates = [[null, null]];

		expect(dateTimeModel.isDateDisabled(new Date(2018, 5, 19))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2018, 5, 20))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2018, 5, 21))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2019, 6, 22))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2020, 7, 23))).toBeTruthy();
		expect(dateTimeModel.isDateDisabled(new Date(2021, 8, 24))).toBeTruthy();
	});

	it("should have a working range", () => {
		let dateTimeModel  = new DateTimeModel();

		expect(dateTimeModel.isDateInRange(new Date(2018, 5, 19))).toBeFalsy();

		dateTimeModel.startDate = new Date(2018, 5, 18);
		dateTimeModel.endDate = new Date(2018, 5, 20);

		expect(dateTimeModel.isDateInRange(new Date(2018, 5, 17))).toBeFalsy();
		expect(dateTimeModel.isDateInRange(new Date(2018, 5, 18))).toBeTruthy();
		expect(dateTimeModel.isDateInRange(new Date(2018, 5, 19))).toBeTruthy();
		expect(dateTimeModel.isDateInRange(new Date(2018, 5, 20))).toBeTruthy();
		expect(dateTimeModel.isDateInRange(new Date(2018, 5, 21))).toBeFalsy();
	});
});
