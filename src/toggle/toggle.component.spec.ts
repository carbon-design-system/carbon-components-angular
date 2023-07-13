import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { I18nModule } from "../i18n/index";
import { Toggle } from "./toggle.component";

describe("Toggle", () => {
	let component: Toggle;
	let fixture: ComponentFixture<Toggle>;
	let labelElement: HTMLElement;
	let buttonElement: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Toggle],
			imports: [I18nModule],
			providers: []
		});

		fixture = TestBed.createComponent(Toggle);
		component = fixture.componentInstance;
		fixture.detectChanges();
		buttonElement = fixture.debugElement.query(By.css("button")).nativeElement;
		labelElement = fixture.debugElement.query(By.css("label")).nativeElement;
	});

	it("should work", () => {
		expect(component instanceof Toggle).toBe(true);
	});

	it("should have button with class 'cds--toggle__button'", () => {
		expect(buttonElement.className.includes("cds--toggle__button")).toEqual(true);
		component.size = "sm";
		fixture.detectChanges();
		expect(buttonElement.className.includes("cds--toggle__button")).toEqual(true);
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
		expect(labelElement.querySelector("div").className.includes("cds--toggle__appearance--sm")).toEqual(false);
		component.size = "sm";
		fixture.detectChanges();
		expect(labelElement.querySelector("div").className.includes("cds--toggle__appearance--sm")).toEqual(true);
	});

	it("should match the input checked value", () => {
		component.checked = true;
		fixture.detectChanges();
		expect(fixture.componentInstance.checked).toEqual(true);
	});

	it("should emit boolean event", (done: any) => {
		component.checkedChange.subscribe((data: any) => {
			expect(typeof data === "boolean").toEqual(true);
			done();
		});
		component.emitChangeEvent();
	});
});
