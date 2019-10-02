import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	 } from "@angular/platform-browser";

import { Slider } from "./slider.component";
import { CommonModule } from "@angular/common";

@Component({
	template: `
	<ibm-slider
		shiftMultiplier=28
		(valueChange)="onValueChange()"
		[disabled]="disabled"
		[max]="max"
		[min]="min">
	</ibm-slider>`
})
class SliderTest {
	disabled = false;
	max = 100;
	min = 0;
	onValueChange() {}
}

describe("Dropdown", () => {
	let fixture, element, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				Slider,
				SliderTest
			],
			imports: [
				CommonModule
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SliderTest);
		element = fixture.debugElement.query(By.css("ibm-slider"));
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(Slider);
		expect(fixture.componentInstance instanceof Slider).toBe(true);
	});

	it("should set isMouseDown to true on mousedown event", () => {
		element.nativeElement.querySelector(".bx--slider__thumb").dispatchEvent(new Event("mousedown"));
		expect(element.componentInstance.isMouseDown).toBe(true);
	});

	it("should increment value on ArrowRight KeyboardEvent by the given shiftMultiplier", () => {
		spyOn(wrapper, "onValueChange");
		const arrowRight = new KeyboardEvent("keydown", {
			"key": "ArrowRight",
			shiftKey: true
		});
		element.nativeElement.querySelector(".bx--slider__thumb").dispatchEvent(new Event("mousedown"));
		element.nativeElement.querySelector(".bx--slider__thumb").dispatchEvent(arrowRight);
		fixture.detectChanges();
		expect(element.componentInstance.value).toBe(28);
		expect(wrapper.onValueChange).toHaveBeenCalled();
	});

	it("should decrement value on ArrowLeft KeyboardEvent by the given shiftMultiplier", () => {
		spyOn(wrapper, "onValueChange");
		const arrowLeft = new KeyboardEvent("keydown", {
			"key": "ArrowLeft",
			shiftKey: true
		});
		element.componentInstance.value = 100;
		element.nativeElement.querySelector(".bx--slider__thumb").dispatchEvent(new Event("mousedown"));
		element.nativeElement.querySelector(".bx--slider__thumb").dispatchEvent(arrowLeft);
		fixture.detectChanges();
		expect(element.componentInstance.value).toBe(72);
		expect(wrapper.onValueChange).toHaveBeenCalled();
	});

	it("should set value to max value when input value is greater than the max value", () => {
		spyOn(wrapper, "onValueChange");
		element.componentInstance.value = "1984";
		fixture.detectChanges();
		expect(element.componentInstance.value).toBe(100);
		expect(wrapper.onValueChange).toHaveBeenCalled();
	});

	it("should set value to min value when input value is less than the min value", () => {
		spyOn(wrapper, "onValueChange");
		element.componentInstance.value = "-1984";
		fixture.detectChanges();
		expect(element.componentInstance.value).toBe(0);
		expect(wrapper.onValueChange).toHaveBeenCalled();
	});

	it("should set bx--slider--disabled class", () => {
		wrapper.disabled = true;
		fixture.detectChanges();
		expect(element.nativeElement.querySelector(".bx--slider--disabled")).toBeTruthy();
	});
});
