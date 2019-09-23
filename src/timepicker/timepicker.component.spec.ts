import { TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { Component } from "@angular/core";
import { TimePicker } from "./timepicker.component";

@Component({
	template: `
	<ibm-timepicker
		theme="dark"
		(valueChange)="onChange()"
		[(value)]="value"
		label="test"
		disabled="false">
	</ibm-timepicker>`
})
class TimePickerTest {
	value = "12:12";
	onChange() {}
}

describe("TimePicker", () => {
	let fixture, wrapper, element;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				TimePicker,
				TimePickerTest
			],
			imports: [
				FormsModule
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(TimePicker);
		expect(fixture.componentInstance instanceof TimePicker).toBe(true);
	});

	it("should set label to test", () => {
		fixture = TestBed.createComponent(TimePickerTest);
		element = fixture.debugElement.query(By.css("ibm-timepicker")).nativeElement;
		expect(element.getAttribute("label")).toEqual("test");
	});

	it("should set theme to dark", () => {
		fixture = TestBed.createComponent(TimePickerTest);
		element = fixture.debugElement.query(By.css("ibm-timepicker")).nativeElement;
		expect(element.getAttribute("theme")).toEqual("dark");
	});

	it("should set disabled to false", () => {
		fixture = TestBed.createComponent(TimePickerTest);
		element = fixture.debugElement.query(By.css("ibm-timepicker")).nativeElement;
		expect(element.getAttribute("disabled")).toEqual("false");
	});

	it("should set value to 12:12", () => {
		fixture = TestBed.createComponent(TimePickerTest);
		element = fixture.debugElement.query(By.css(".bx--time-picker__input-field"));
		fixture.detectChanges();
		expect(element.nativeElement.value).toEqual("12:12");
	});

	it("should call onChange", () => {
		fixture = TestBed.createComponent(TimePickerTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		let de = fixture.debugElement.query(By.css(".bx--time-picker__input-field"));
		spyOn(wrapper, "onChange");
		de.triggerEventHandler("change", {target: {value: ""}});
		fixture.detectChanges();
		expect(wrapper.onChange).toHaveBeenCalled();
	});

	it("should change the value to 04:33", () => {
		fixture = TestBed.createComponent(TimePickerTest);
		wrapper = fixture.componentInstance;
		element = fixture.debugElement.query(By.css(".bx--time-picker__input-field")).nativeElement;
		fixture.detectChanges();
		element.value = "04:33";
		fixture.detectChanges();
		element.dispatchEvent(new Event("change"));
		fixture.detectChanges();
		expect(wrapper.value).toEqual("04:33");
	});

	it("should set ng-reflect-disabled to true", () => {
		fixture = TestBed.overrideComponent(TimePickerTest, {
			set: {
				template: `<ibm-timepicker disabled="true"></ibm-timepicker>`
			}
		}).createComponent(TimePickerTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".bx--time-picker__input-field")).nativeElement;
		expect(element.disabled).toEqual(true);
	});
});
