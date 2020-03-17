import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Component } from "@angular/core";

import { Checkbox } from "./checkbox.component";

@Component({
	template: `
	<ibm-checkbox
		[hideLabel]="hideLabel"
		(change)="onChange()"
		(indeterminateChange)="onIndeterminateChange()"
		[indeterminate]="indeterminate"
		[(ngModel)]="model">
	</ibm-checkbox>
	`
})
class CheckboxTest {
	model = false;
	hidelabel = true;
	indeterminate = false;
	onChange() {}
	onIndeterminateChange() {}
}

describe("Checkbox", async() => {
	let fixture, wrapper, element;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Checkbox, CheckboxTest],
			imports: [CommonModule, FormsModule]
		}).compileComponents();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(Checkbox);
		expect(fixture.componentInstance instanceof Checkbox).toBe(true);
	});

	it("should set checked to false", () => {
		fixture = TestBed.createComponent(CheckboxTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-checkbox"));
		expect(element.componentInstance.checked).toBe(false);
	});

	it("should emit a change event on click and propagate the change back to the form", () => {
		fixture = TestBed.createComponent(CheckboxTest);
		wrapper = fixture.componentInstance;
		spyOn(wrapper, "onChange");
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".bx--checkbox"));
		element.nativeElement.click();
		element.nativeElement.dispatchEvent(new Event("change"));
		fixture.detectChanges();
		expect(wrapper.onChange).toHaveBeenCalled();
		expect(wrapper.model).toBe(true);
		expect(element.componentInstance.checked).toBe(true);
	});

	it("should set bx--visually-hidden class when hideLabel is true", () => {
		fixture = TestBed.createComponent(CheckboxTest);
		wrapper = fixture.componentInstance;
		wrapper.hideLabel = true;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-checkbox"));
		expect(element.nativeElement.querySelector(".bx--visually-hidden")).toBeTruthy();
	});

	it("should emit an indeterminateChange event when there is a change on an indeterminate checkbox", () => {
		fixture = TestBed.createComponent(CheckboxTest);
		wrapper = fixture.componentInstance;
		spyOn(wrapper, "onIndeterminateChange");
		wrapper.indeterminate = true;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".bx--checkbox"));
		element.nativeElement.click();
		fixture.detectChanges();
		expect(wrapper.onIndeterminateChange).toHaveBeenCalled();
	});
});
