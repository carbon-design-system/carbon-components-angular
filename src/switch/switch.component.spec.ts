import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { StaticIconModule } from "../icon/static-icon.module";

import { Switch, SwitchChange } from "./switch.component";

describe("Switch", () => {
	let component: Switch;
	let fixture: ComponentFixture<Switch>;
	let labelElement: HTMLElement;
	let buttonElement: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Switch],
			imports: [BrowserAnimationsModule, StaticIconModule],
			providers: []
		});

		fixture = TestBed.createComponent(Switch);
		component = fixture.componentInstance;
		fixture.detectChanges();
		labelElement = fixture.debugElement.query(By.css("label")).nativeElement;
		buttonElement = fixture.debugElement.query(By.css("input")).nativeElement;
	});

	it("should work", () => {
		expect(component instanceof Switch).toBe(true);
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

	it("should display small version of switch when size equals sm", () => {
		expect(buttonElement.className.includes("bx--toggle--small")).toEqual(false);
		component.size = "sm";
		fixture.detectChanges();
		expect(buttonElement.className.includes("bx--toggle--small")).toEqual(true);
	});

	it("should display SVG in small version of switch", () => {
		component.size = "sm";
		fixture.detectChanges();
		labelElement = fixture.debugElement.query(By.css("label")).nativeElement;
		expect(fixture.debugElement.query(By.css("svg")).nativeElement).not.toBeNull();
		expect(labelElement.innerHTML).toContain("bx--toggle__check");
	});

	it("should match the input checked value", () => {
		component.checked = true;
		fixture.detectChanges();
		expect(buttonElement.attributes.getNamedItem("aria-checked").value).toEqual("true");
	});

	it("should emit SwitchChange event", (done: any) => {
		component.change.subscribe((data: any) => {
			expect(data instanceof SwitchChange).toEqual(true);
			done();
		});
		component.emitChangeEvent();
	});
});
