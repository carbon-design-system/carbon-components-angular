import { TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { Component } from "@angular/core";
import { TimePicker } from "./timepicker.component";

@Component({
	template: `
	<cds-timepicker
		theme="dark"
		(valueChange)="onChange()"
		[(value)]="value"
		label="test"
		size="lg"
		disabled="false">
	</cds-timepicker>`
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
		element = fixture.debugElement.query(By.css("cds-timepicker")).nativeElement;
		expect(element.getAttribute("label")).toEqual("test");
	});

	it("should set theme to dark", () => {
		fixture = TestBed.createComponent(TimePickerTest);
		element = fixture.debugElement.query(By.css("cds-timepicker")).nativeElement;
		expect(element.getAttribute("theme")).toEqual("dark");
	});

	it("should set size to large", () => {
		fixture = TestBed.createComponent(TimePickerTest);
		element = fixture.debugElement.query(By.css("cds-timepicker")).nativeElement;
		expect(element.getAttribute("size")).toEqual("lg");
	});

	it("should set disabled to false", () => {
		fixture = TestBed.createComponent(TimePickerTest);
		element = fixture.debugElement.query(By.css("cds-timepicker")).nativeElement;
		expect(element.getAttribute("disabled")).toEqual("false");
	});

	it("should set value to 12:12", () => {
		fixture = TestBed.createComponent(TimePickerTest);
		element = fixture.debugElement.query(By.css(".cds--time-picker__input-field"));
		fixture.detectChanges();
		expect(element.nativeElement.value).toEqual("12:12");
	});

	it("should call onChange", () => {
		fixture = TestBed.createComponent(TimePickerTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		const de = fixture.debugElement.query(By.css(".cds--time-picker__input-field"));
		de.value = "04:33";
		spyOn(wrapper, "onChange");
		de.triggerEventHandler("change", {target: {value: "04:33"}});
		fixture.detectChanges();
		expect(wrapper.onChange).toHaveBeenCalled();
		expect(wrapper.value).toEqual("04:33");
	});

	it("should disable input", () => {
		fixture = TestBed.overrideComponent(TimePickerTest, {
			set: {
				template: `<cds-timepicker disabled="true"></cds-timepicker>`
			}
		}).createComponent(TimePickerTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".cds--time-picker__input-field")).nativeElement;
		expect(element.disabled).toEqual(true);
	});
});
