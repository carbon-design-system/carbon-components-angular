import { Component, ViewChild } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ButtonModule } from "./button.module";
import { ButtonSet } from "./button-set.component";

@Component({
	template: `
		<cds-button-set [fluid]="fluid" [stacked]="stacked">
			<button cdsButton="secondary">Cancel</button>
			<button cdsButton="primary">Save</button>
		</cds-button-set>
	`
})
class ButtonSetTest {
	@ViewChild(ButtonSet) buttonSet: ButtonSet;
	fluid = false;
	stacked = false;
}

describe("ButtonSet", () => {
	let fixture: ComponentFixture<ButtonSetTest>;
	let wrapper: ButtonSetTest;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ButtonSetTest],
			imports: [ButtonModule]
		});

		fixture = TestBed.createComponent(ButtonSetTest);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
	});

	it("should work", () => {
		expect(wrapper.buttonSet instanceof ButtonSet).toBe(true);
	});

	it("should apply the button set host class and project its buttons", () => {
		const element = fixture.nativeElement.querySelector("cds-button-set");
		expect(element.classList).toContain("cds--btn-set");
		expect(element.querySelectorAll("button").length).toBe(2);
		expect(element.textContent).toContain("Cancel");
		expect(element.textContent).toContain("Save");
	});

	it("should render the fluid layout", () => {
		const element = fixture.nativeElement.querySelector("cds-button-set");
		expect(element.classList).not.toContain("cds--btn-set--fluid");
		expect(element.querySelector(".cds--btn-set__fluid-inner")).toBeFalsy();

		wrapper.fluid = true;
		fixture.detectChanges();

		expect(element.classList).toContain("cds--btn-set--fluid");
		expect(element.querySelector(".cds--btn-set__fluid-inner")).toBeTruthy();
		expect(element.querySelectorAll("button").length).toBe(2);
	});

	it("should render the stacked layout", () => {
		const element = fixture.nativeElement.querySelector("cds-button-set");
		expect(element.classList).not.toContain("cds--btn-set--stacked");

		wrapper.stacked = true;
		fixture.detectChanges();

		expect(element.classList).toContain("cds--btn-set--stacked");
	});

	it("should unwind the fluid layout when switched back", () => {
		const element = fixture.nativeElement.querySelector("cds-button-set");

		wrapper.fluid = true;
		fixture.detectChanges();
		expect(element.querySelector(".cds--btn-set__fluid-inner")).toBeTruthy();

		wrapper.fluid = false;
		fixture.detectChanges();

		expect(element.querySelector(".cds--btn-set__fluid-inner")).toBeFalsy();
		expect(element.querySelectorAll("button").length).toBe(2);
	});
});
