import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Component } from "@angular/core";
import { TimePickerSelect } from "./timepicker-select.component";

@Component({
	template: `
	<cds-timepicker-select (valueChange)="onChange(event)">
		<option class="test" selected value="AM">AM</option>
		<option class="test2" value="PM">PM</option>
	</cds-timepicker-select>
	`,
	standalone: true,
	imports: [
		TimePickerSelect
	]
})
class TimePickerSelectTest {
	onChange(event) {}
}

describe("TimePickerSelect", () => {
	let fixture, wrapper, element, component;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				TimePickerSelectTest
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(TimePickerSelect);
		expect(fixture.componentInstance instanceof TimePickerSelect).toBe(true);
	});

	it("should call onChange on change select", () => {
		fixture = TestBed.createComponent(TimePickerSelectTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".cds--select-input"));
		spyOn(wrapper, "onChange");
		element.triggerEventHandler("change", {target: {value : ""}});
		fixture.detectChanges();
		expect(wrapper.onChange).toHaveBeenCalled();
	});

	it("should set options to AM and PM", () => {
		fixture = TestBed.createComponent(TimePickerSelectTest);
		fixture.detectChanges();
		expect(fixture.debugElement.query(By.css("cds-timepicker-select")).query(By.css(".test")).nativeElement.innerHTML).toContain("AM");
		expect(fixture.debugElement.query(By.css("cds-timepicker-select")).query(By.css(".test2")).nativeElement.innerHTML).toContain("PM");
	});

	it("should set label to test-label", () => {
		fixture = TestBed.overrideComponent(TimePickerSelectTest, {
			set: {
				template: `<cds-timepicker-select label="test-label"></cds-timepicker-select>`
			}
		}).createComponent(TimePickerSelectTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-timepicker-select")).nativeElement;
		expect(element.querySelector(".cds--label").textContent).toEqual("test-label");
	});

	it("should set disabled on the underlying select to true", () => {
		fixture = TestBed.overrideComponent(TimePickerSelectTest, {
			set: {
				template: `<cds-timepicker-select [disabled]="true"></cds-timepicker-select>`
			}
		}).createComponent(TimePickerSelectTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".cds--select-input")).nativeElement;
		expect(element.disabled).toEqual(true);
	});
});
