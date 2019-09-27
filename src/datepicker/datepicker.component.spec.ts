import { TestBed } from "@angular/core/testing";
import { By, EVENT_MANAGER_PLUGINS } from "@angular/platform-browser";
import { Component, Output, EventEmitter } from "@angular/core";
import { DatePicker } from "./datepicker.component";
import { DatePickerInput } from "../datepicker-input/datepicker-input.component";
import { Calendar16Module } from "@carbon/icons-angular/lib/calendar/16";
import { FormsModule } from "@angular/forms";

@Component({
	template: `
	<ibm-date-picker
		label="Date picker label"
		placeholder="mm/dd/yyyy"
		theme="light"
		[value]="value"
		[disabled]="disabled"
		[invalid]="invalid"
		invalidText="invalid text"
		dateFormat="m/d/Y"
		(valueChange)="valueChange($event)">
	</ibm-date-picker>
	`
})
class DatePickerTest {
	value = ["10/19/2019"];
	disabled = false;
	invalid = false;
	valueChange(event) {}
}

describe("DatePicker", () => {
	let fixture, element, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				DatePicker,
				DatePickerTest,
				DatePickerInput
			],
			imports: [
				Calendar16Module,
				FormsModule
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(DatePicker);
		expect(fixture.componentInstance instanceof DatePicker).toBe(true);
	});

	it("should set label to Date picker label", () => {
		fixture = TestBed.createComponent(DatePickerTest);
		element = fixture.debugElement.query(By.css("ibm-date-picker"));
		fixture.detectChanges();
		expect(element.nativeElement.textContent).toEqual("Date picker label");
	});

	it("should set input value to 10/19/2019", () => {
		fixture = TestBed.createComponent(DatePickerTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("input"));
		expect(element.nativeElement.value).toEqual("10/19/2019");
	});

	it("should set placeholder to mm/dd/yyyy", () => {
		fixture = TestBed.createComponent(DatePickerTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("input"));
		expect(element.nativeElement.placeholder).toEqual("mm/dd/yyyy");
	});

	it("should disable input", () => {
		fixture = TestBed.createComponent(DatePickerTest);
		fixture.componentInstance.disabled = true;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("input"));
		expect(element.nativeElement.disabled).toBe(true);
	});

	it("should set date format to m/d/Y", () => {
		fixture = TestBed.createComponent(DatePickerTest);
		element = fixture.debugElement.query(By.css("ibm-date-picker"));
		fixture.detectChanges();
		expect(element.componentInstance.dateFormat).toEqual("m/d/Y");
	});

	it("should set theme to light", () => {
		fixture = TestBed.createComponent(DatePickerTest);
		element = fixture.debugElement.query(By.css("ibm-date-picker"));
		fixture.detectChanges();
		expect(element.componentInstance.theme).toEqual("light");
		expect(element.nativeElement.querySelector(".bx--date-picker--light")).toBeTruthy();
	});

	it("should set invalid to true and set the invalidText to invalid text", () => {
		fixture = TestBed.createComponent(DatePickerTest);
		element = fixture.debugElement.query(By.css("ibm-date-picker"));
		fixture.componentInstance.invalid = true;
		fixture.detectChanges();
		expect(element.componentInstance.invalid).toBe(true);
		expect(element.nativeElement.querySelector(".bx--form-requirement").textContent).toEqual("invalid text");
	});

	it("should call onValueChange on valueChange event", () => {
		fixture = TestBed.createComponent(DatePickerTest);
		element = fixture.debugElement.query(By.css("ibm-date-picker"));
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		spyOn(wrapper, "valueChange");
		element.triggerEventHandler("valueChange", {target: {value: "10/19/2019"}});
		fixture.detectChanges();
		expect(wrapper.valueChange).toHaveBeenCalled();
	});
});
