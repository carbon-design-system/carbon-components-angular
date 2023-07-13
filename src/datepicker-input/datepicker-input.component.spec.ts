import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { DatePickerInput } from "./datepicker-input.component";
import { IconModule } from "../icon/index";
import { CommonModule } from "@angular/common";

@Component({
	template: `
		<cds-date-picker-input
			theme="dark"
			label="label"
			placeholder="mm/dd/yyyy"
			[disabled]="disabled"
			[invalid]="invalid"
			invalidText="invalid text"
			(valueChange)="valueChange($event)"
			[(ngModel)]="model">
		</cds-date-picker-input>
		`
})
class DatePickerInputTest {
	model = null;
	value = null;
	disabled = false;
	invalid = false;
	valueChange(event) {
		this.value = event;
	}
}

describe("Select", () => {
	let fixture, wrapper, element;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				DatePickerInput,
				DatePickerInputTest
			],
			imports: [
				CommonModule,
				IconModule,
				FormsModule
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(DatePickerInput);
		expect(fixture.componentInstance instanceof DatePickerInput).toBe(true);
	});

	it("should propagate changes back to the form and emit a valueChange event with the correct value", () => {
		fixture = TestBed.createComponent(DatePickerInputTest);
		wrapper = fixture.componentInstance;
		spyOn(wrapper, "valueChange").and.callThrough();
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("input"));
		element.triggerEventHandler("change", {target: {value: "03/02/2001"}});
		fixture.detectChanges();
		expect(fixture.componentInstance.model).toBe("03/02/2001");
		expect(wrapper.valueChange).toHaveBeenCalled();
		expect(wrapper.value).toBe("03/02/2001");
	});

	it("should set label to 'label'", () => {
		fixture = TestBed.createComponent(DatePickerInputTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-date-picker-input"));
		expect(element.nativeElement.querySelector(".cds--label").textContent).toBe("label");
	});

	it("should set placeholder to mm/dd/yyyy", () => {
		fixture = TestBed.createComponent(DatePickerInputTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-date-picker-input"));
		expect(element.nativeElement.getAttribute("placeholder")).toBe("mm/dd/yyyy");
	});

	it("should disable input when disabled is true", () => {
		fixture = TestBed.createComponent(DatePickerInputTest);
		wrapper = fixture.componentInstance;
		wrapper.disabled = true;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-date-picker-input"));
		expect(element.nativeElement.querySelector("input").disabled).toBe(true);
	});

	it("should display invalid text when invalid is true", () => {
		fixture = TestBed.createComponent(DatePickerInputTest);
		wrapper = fixture.componentInstance;
		wrapper.invalid = true;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-date-picker-input"));
		expect(element.nativeElement.querySelector(".cds--form-requirement")).toBeTruthy();
		expect(element.nativeElement.querySelector(".cds--form-requirement").textContent).toBe("invalid text");
	});

	it("should set theme to dark", () => {
		fixture = TestBed.createComponent(DatePickerInputTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-date-picker-input"));
		expect(element.nativeElement.getAttribute("theme")).toBe("dark");
	});
});
