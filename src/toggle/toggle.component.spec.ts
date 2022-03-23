import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { I18nModule } from "../i18n/index";
import { Toggle, ToggleChange } from "./toggle.component";

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
		labelElement = fixture.debugElement.query(By.css("label")).nativeElement;
		buttonElement = fixture.debugElement.query(By.css("input")).nativeElement;
	});

	it("should work", () => {
		expect(component instanceof Toggle).toBe(true);
	});

	it("should have input with class 'cds--toggle-input'", () => {
		expect(buttonElement.className.includes("cds--toggle-input")).toEqual(true);
		component.size = "sm";
		fixture.detectChanges();
		expect(buttonElement.className.includes("cds--toggle-input")).toEqual(true);
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
		expect(buttonElement.className.includes("cds--toggle-input--small")).toEqual(false);
		component.size = "sm";
		fixture.detectChanges();
		expect(buttonElement.className.includes("cds--toggle-input--small")).toEqual(true);
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
