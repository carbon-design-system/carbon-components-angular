import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { ProgressIndicator } from "./progress-indicator.component";
import { CommonModule } from "@angular/common";
import { ExperimentalModule } from "../experimental";
import { IconModule } from "../icon";
import { I18nModule } from "../i18n";
import { Step } from "./progress-indicator-step.interface";

@Component({
	template: `
		<cds-progress-indicator
			[steps]="steps"
			[current]="current"
			(stepSelected)="stepSelected.emit($event)">
		</cds-progress-indicator>
	`
})
class ProgressIndicatorTest {
	steps = [
		{
			label: "First step",
			complete: true,
			secondaryLabel: "optional"
		},
		{
			label: "Second step",
			complete: false
		},
		{
			label: "Third step",
			complete: false
		},
		{
			label: "Fourth step",
			complete: false,
			invalid: true
		},
		{
			label: "Fifth step",
			complete: false,
			disabled: true
		}
	];

	current = 2;

	stepSelected = new EventEmitter<{ step: Step, index: number }>();
}

describe("Progress Indicator", () => {
	let fixture, element, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			declarations: [
				ProgressIndicator,
				ProgressIndicatorTest
			],
			imports: [
				CommonModule,
				ExperimentalModule,
				IconModule,
				I18nModule
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(ProgressIndicator);
		expect(fixture.componentInstance instanceof ProgressIndicator).toBe(true);
	});

	it("should set current to 2 and set current step to Third step", () => {
		fixture = TestBed.createComponent(ProgressIndicatorTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-progress-indicator"));
		expect(element.componentInstance.current).toBe(2);
		expect(element.nativeElement.querySelector(".cds--progress-step--current").textContent).toContain("Third step");
	});

	it("should set warning icon when step is in error state", () => {
		fixture = TestBed.createComponent(ProgressIndicatorTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-progress-indicator"));
		expect(element.nativeElement.querySelector(".cds--progress__warning")).toBeTruthy();
	});

	it("should set current step to fourth step", () => {
		fixture = TestBed.createComponent(ProgressIndicatorTest);
		wrapper = fixture.componentInstance;
		wrapper.current = 3;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-progress-indicator"));
		expect(element.nativeElement.querySelector(".cds--progress-step--current").textContent).toContain("Fourth step");
	});

	it("should emit the step and index when a step is clicked", () => {
		fixture = TestBed.createComponent(ProgressIndicatorTest);
		wrapper = fixture.componentInstance;
		spyOn(wrapper.stepSelected, "emit");
		let index = 2;
		wrapper.current = index;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-progress-indicator"));
		let step = element.nativeElement.querySelector(".cds--progress-step--current .cds--progress-label");
		step.click();
		fixture.detectChanges();
		expect(wrapper.stepSelected.emit).toHaveBeenCalledWith({ step: wrapper.steps[index], index: index });
	});

	it("should handle current being set to 0 after the component is initialized", () => {
		fixture = TestBed.createComponent(ProgressIndicatorTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		wrapper.current = 0;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-progress-indicator"));
		expect(element.nativeElement.querySelector(".cds--progress-step--current").textContent).toContain("First step");
	});

	it("should handle steps and current being updated individually after the component is initialized", () => {
		fixture = TestBed.createComponent(ProgressIndicatorTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		wrapper.steps = wrapper.steps.concat([{
			label: "Sixth step",
			complete: false
		}]);
		fixture.detectChanges();
		wrapper.current = 5;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-progress-indicator"));
		expect(element.nativeElement.querySelector(".cds--progress").children.length).toBe(6);
		expect(element.nativeElement.querySelector(".cds--progress-step--current").textContent).toContain("Sixth step");
	});
});
