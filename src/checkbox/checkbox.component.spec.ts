import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Component } from "@angular/core";

import { Checkbox } from "./checkbox.component";
import BDDTestParser from "exported-tests/src/parsers/BDD";
import CheckboxExportedTest from "./checkbox-exported-tests";

@Component({
	template: `
	<cds-checkbox
		[hideLabel]="hideLabel"
		(checkedChange)="onChange()"
		(indeterminateChange)="onIndeterminateChange()"
		[indeterminate]="indeterminate"
		[(ngModel)]="model">
	</cds-checkbox>
	`
})
class CheckboxTest {
	model = false;
	hidelabel = true;
	indeterminate = false;
	onChange() {}
	onIndeterminateChange() {}
}

const testingSetup = (checkboxComponent) => {
	// Due to TestBed being used outside the test suite, it'll need to be reset
	TestBed.resetTestingModule();
	// configureTestingModule normally happens in `beforeEach`, but needed here because
	// Exported Tests need access to the compiled component into the `fixture` variable
	TestBed.configureTestingModule({
		declarations: [Checkbox, CheckboxTest],
		imports: [CommonModule, FormsModule]
	});

	return TestBed.createComponent(checkboxComponent);
};

const setupFixture = testingSetup(CheckboxTest);

describe("Checkbox", () => {
	let fixture, wrapper, element;
	beforeEach(() => {
		fixture = testingSetup(CheckboxTest);
	});

	it("should work", () => {
		fixture = TestBed.createComponent(Checkbox);
		expect(fixture.componentInstance instanceof Checkbox).toBe(true);
	});

	it("should set checked to false", () => {
		fixture = TestBed.createComponent(CheckboxTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-checkbox"));
		expect(element.componentInstance.checked).toBe(false);
	});

	it("should emit a checkedChange event on click and propagate the change back to the form", () => {
		fixture = TestBed.createComponent(CheckboxTest);
		wrapper = fixture.componentInstance;
		spyOn(wrapper, "onChange");
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".cds--checkbox-label"));
		element.nativeElement.click();
		element.nativeElement.dispatchEvent(new Event("change"));
		fixture.detectChanges();
		expect(wrapper.onChange).toHaveBeenCalled();
		expect(wrapper.model).toBe(true);
		expect(element.componentInstance.checked).toBe(true);
	});

	it("should set cds--visually-hidden class when hideLabel is true", () => {
		fixture = TestBed.createComponent(CheckboxTest);
		wrapper = fixture.componentInstance;
		wrapper.hideLabel = true;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-checkbox"));
		expect(element.nativeElement.querySelector(".cds--visually-hidden")).toBeTruthy();
	});

	it("should emit an indeterminateChange event when there is a change on an indeterminate checkbox", () => {
		fixture = TestBed.createComponent(CheckboxTest);
		wrapper = fixture.componentInstance;
		spyOn(wrapper, "onIndeterminateChange");
		wrapper.indeterminate = true;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".cds--checkbox"));
		element.nativeElement.click();
		fixture.detectChanges();
		expect(wrapper.onIndeterminateChange).toHaveBeenCalled();
	});

	xdescribe("PAL exported tests", () => {
		// Get checkbox from the fixture
		element = setupFixture.debugElement.query(By.css("cds-checkbox"));
		setupFixture.detectChanges();
		const instance = new CheckboxExportedTest({});
		// tslint:disable-next-line
		new BDDTestParser((instance as any).tests, setupFixture.debugElement.nativeElement);
	});
});
