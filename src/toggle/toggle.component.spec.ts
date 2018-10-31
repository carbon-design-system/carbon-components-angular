import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentFixture, TestBed, fakeAsync, tick, async } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { StaticIconModule } from "../icon/static-icon.module";

import { ToggleComponent } from "./toggle.component";
import { CheckboxComponent } from "../checkbox/checkbox.module";

describe("ToggleComponent", () => {
	let component: ToggleComponent;
	let fixture: ComponentFixture<ToggleComponent>;
	let labelElement: HTMLElement;
	let buttonElement: HTMLElement;
	let svgElement: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ToggleComponent],
			imports: [BrowserAnimationsModule, StaticIconModule],
			providers: []
		});

		fixture = TestBed.createComponent(ToggleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		labelElement = fixture.debugElement.query(By.css("label")).nativeElement;
		buttonElement = fixture.debugElement.query(By.css("input")).nativeElement;
	});

	it("should work", () => {
		expect(component instanceof ToggleComponent).toBe(true);
	});

	it("should have input with class 'bx--toggle'", () => {
		expect(buttonElement.className.includes("bx--toggle")).toEqual(true);
		component.size = "sm";
		fixture.detectChanges();
		expect(buttonElement.className.includes("bx--toggle")).toEqual(true);
	});

	it("should change state", () => {
		buttonElement.click();
		fixture.detectChanges();
		expect(component.checked).toBe(true, "setting to on");

		buttonElement.click();
		fixture.detectChanges();
		expect(component.checked).toBe(false, "setting to off");
	});

	it("should display small version of toggle when size equals sm", () => {
		expect(buttonElement.className.includes("bx--toggle--small")).toEqual(false);
		component.size = "sm";
		fixture.detectChanges();
		expect(buttonElement.className.includes("bx--toggle--small")).toEqual(true);
	});

	it("should display SVG in small version of toggle", () => {
		component.size = "sm";
		fixture.detectChanges();
		labelElement = fixture.debugElement.query(By.css("label")).nativeElement;
		expect(fixture.debugElement.query(By.css("svg")).nativeElement).not.toBeNull();
		expect(labelElement.innerHTML).toContain("bx--toggle__check");
	});

});
