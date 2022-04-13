import { Component, EventEmitter } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { ProgressIndicator } from "./progress-indicator.component";
import { CommonModule } from "@angular/common";
import { DialogModule, ExperimentalModule } from "..";
import { IconModule } from "../icon/index";
import { Step } from "./progress-indicator-step.interface";

@Component({
	template: `<ibm-progress-indicator
					[steps]="steps"
					[current]="current"
					(stepSelected)="stepSelected.emit($event)">
				</ibm-progress-indicator>`
})
class ProgressIndicatorTest {
	steps = [
		{
			text: "First step",
			state: ["complete"],
			optionalText: "optional"
		},
		{
			text: "Second step",
			state: ["current"],
			tooltip: { content: "Overflow tooltip content.", trigger: "click", placement: "bottom" }
		},
		{
			text: "Third step",
			state: ["incomplete"],
			tooltip: {
				content: `Test`,
				trigger: "click",
				placement: "bottom"
			}
		},
		{
			text: "Fourth step",
			state: ["incomplete", "error"]
		},
		{
			text: "Fifth step",
			state: ["incomplete"],
			disabled: true
		}
	];

	current = 2;

	stepSelected = new EventEmitter<{ step: Step, index: number }>();
}

describe("ProgressIndicator", () => {
	let fixture, element, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				ProgressIndicator,
				ProgressIndicatorTest
			],
			imports: [
				CommonModule,
				DialogModule,
				ExperimentalModule,
				IconModule
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
		element = fixture.debugElement.query(By.css("ibm-progress-indicator"));
		expect(element.componentInstance.current).toBe(2);
		expect(element.nativeElement.querySelector(".cds--progress-step--current").textContent).toContain("Third step");
	});

	it("should set current step to Fourth step and set warning icon when step is in error state", () => {
		fixture = TestBed.createComponent(ProgressIndicatorTest);
		wrapper = fixture.componentInstance;
		wrapper.current = 3;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-progress-indicator"));
		expect(element.nativeElement.querySelector(".cds--progress-step--current").textContent).toContain("Fourth step");
		expect(element.nativeElement.querySelector(".cds--progress__warning")).toBeTruthy();
	});

	it("should expand the tooltip when tooltip trigger is clicked", () => {
		fixture = TestBed.createComponent(ProgressIndicatorTest);
		wrapper = fixture.componentInstance;
		wrapper.current = 2;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-progress-indicator"));
		let tooltipTrigger = element.nativeElement.querySelector(".cds--progress-step--current .cds--tooltip__trigger");
		tooltipTrigger.click();
		fixture.detectChanges();
		expect(tooltipTrigger.getAttribute("aria-expanded")).toEqual("true");
		expect(element.nativeElement.querySelector("ibm-tooltip").textContent).toContain("Test");
	});

	it("should emit the step and index when a step is clicked", () => {
		fixture = TestBed.createComponent(ProgressIndicatorTest);
		wrapper = fixture.componentInstance;
		spyOn(wrapper.stepSelected, "emit");
		let index = 2;
		wrapper.current = index;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-progress-indicator"));
		let step = element.nativeElement.querySelector(".cds--progress-step--current .cds--progress-label");
		step.click();
		fixture.detectChanges();
		expect(wrapper.stepSelected.emit).toHaveBeenCalledWith({ step: wrapper.steps[index], index: index });
	});

	it("should handle current being set to 0 after the component is initialized",  () => {
		fixture = TestBed.createComponent(ProgressIndicatorTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		wrapper.current = 0;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-progress-indicator"));
		expect(element.nativeElement.querySelector(".cds--progress-step--current").textContent).toContain("First step");
	});

	it("should handle steps and current being updated individually after the component is initialized", () => {
		fixture = TestBed.createComponent(ProgressIndicatorTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		wrapper.steps = wrapper.steps.concat([{
			text: "Sixth step",
			state: ["incomplete"]
		}]);
		fixture.detectChanges();
		wrapper.current = 5;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-progress-indicator"));
		expect(element.nativeElement.querySelector(".cds--progress").children.length).toBe(6);
		expect(element.nativeElement.querySelector(".cds--progress-step--current").textContent).toContain("Sixth step");
	});
});
