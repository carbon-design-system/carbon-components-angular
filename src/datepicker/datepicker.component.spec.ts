import { TestBed, fakeAsync, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Component } from "@angular/core";
import { DatePicker } from "./datepicker.component";
import { DatePickerInput } from "../datepicker-input/datepicker-input.component";
import { IconModule } from "../icon/index";
import { FormsModule } from "@angular/forms";
import { UtilsModule } from "../utils/utils.module";
import { I18nModule } from "../i18n/i18n.module";

@Component({
	template: `
	<cds-date-picker
		label="Date picker label"
		placeholder="mm/dd/yyyy"
		theme="light"
		[(ngModel)]="value"
		[disabled]="disabled"
		[invalid]="invalid"
		invalidText="invalid text"
		dateFormat="m/d/Y"
		(valueChange)="onValueChange()">
	</cds-date-picker>
	`
})
class DatePickerTest {
	value = new Date(new Date().getFullYear(), 5, 15);
	disabled = false;
	invalid = false;
	onValueChange() {}
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
				IconModule,
				UtilsModule,
				FormsModule,
				I18nModule
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(DatePicker);
		expect(fixture.componentInstance instanceof DatePicker).toBe(true);
	});

	it("should set label to Date picker label", () => {
		fixture = TestBed.createComponent(DatePickerTest);
		element = fixture.debugElement.query(By.css("cds-date-picker"));
		fixture.detectChanges();
		expect(element.nativeElement.textContent).toEqual("Date picker label");
	});

	it("should set the value of the component to be the value specified in the wrapper", async() => {
		fixture = TestBed.createComponent(DatePickerTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			element = fixture.debugElement.query(By.css("cds-date-picker"));
			expect(element.componentInstance.value).toBe(wrapper.value);
			wrapper.value =  new Date(new Date().getFullYear(), 14, 50);
			fixture.detectChanges();
			fixture.whenStable().then(() => {
				element = fixture.debugElement.query(By.css("cds-date-picker"));
				expect(element.componentInstance.value).toBe(wrapper.value);
			});
		});
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
		element = fixture.debugElement.query(By.css("cds-date-picker"));
		fixture.detectChanges();
		expect(element.componentInstance.dateFormat).toEqual("m/d/Y");
	});

	it("should set theme to light", () => {
		fixture = TestBed.createComponent(DatePickerTest);
		element = fixture.debugElement.query(By.css("cds-date-picker"));
		fixture.detectChanges();
		expect(element.componentInstance.theme).toEqual("light");
		expect(element.nativeElement.querySelector(".cds--date-picker--light")).toBeTruthy();
	});

	it("should set invalid to true and set the invalidText to 'invalid text'", () => {
		fixture = TestBed.createComponent(DatePickerTest);
		element = fixture.debugElement.query(By.css("cds-date-picker"));
		fixture.componentInstance.invalid = true;
		fixture.detectChanges();
		expect(element.componentInstance.invalid).toBe(true);
		expect(element.nativeElement.getAttribute("invalidText")).toEqual("invalid text");
		expect(element.nativeElement.querySelector(".cds--form-requirement").textContent).toEqual("invalid text");
	});

	it("should call onValueChange on valueChange event", () => {
		fixture = TestBed.createComponent(DatePickerTest);
		element = fixture.debugElement.query(By.css("cds-date-picker"));
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		spyOn(wrapper, "onValueChange");
		element.triggerEventHandler("valueChange", {target: {value: wrapper.value}});
		fixture.detectChanges();
		expect(wrapper.onValueChange).toHaveBeenCalled();
	});
});
