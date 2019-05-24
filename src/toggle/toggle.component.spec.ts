import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { I18nModule } from "../i18n/i18n.module";
import { Toggle, ToggleChange } from "./toggle.component";

describe("Toggle", () => {
	let component: Toggle;
	let fixture: ComponentFixture<Toggle>;
	let labelElement: HTMLElement;
	let buttonElement: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Toggle],
			imports: [BrowserAnimationsModule, I18nModule],
			providers: []
		});

		fixture = TestBed.createComponent(Toggle);
		component = fixture.componentInstance;
		fixture.detectChanges();
		labelElement = fixture.debugElement.query(By.css("label")).nativeElement;
		buttonElement = fixture.debugElement.query(By.css("input")).nativeElement;
	});

	it("should work", () => {
		expect(component instanceof Toggle).toBe(true);
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

	it("should match the input checked value", () => {
		component.checked = true;
		fixture.detectChanges();
		expect(buttonElement.attributes.getNamedItem("aria-checked").value).toEqual("true");
	});

	it("should emit ToggleChange event", (done: any) => {
		component.change.subscribe((data: any) => {
			expect(data instanceof ToggleChange).toEqual(true);
			done();
		});
		component.emitChangeEvent();
	});
});
