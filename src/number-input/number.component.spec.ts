import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { Number } from "./number.component";
import { FormsModule } from "@angular/forms";
import { I18nModule } from "../i18n/i18n.module";

describe("Number", () => {
	let component: Number;
	let fixture: ComponentFixture<Number>;
	let inputElement: HTMLInputElement;
	let containerElement: HTMLElement;
	let buttonUp: HTMLButtonElement;
	let buttonDown: HTMLButtonElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Number],
			imports: [FormsModule, I18nModule],
			providers: []
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(Number);
		component = fixture.componentInstance;
		inputElement = fixture.debugElement.query(By.css("input")).nativeElement;
	});

	it("should work", () => {
		expect(component instanceof Number).toBe(true);
	});

	it("should bind input value", () => {
		component.value = 1;
		fixture.detectChanges();
		expect(inputElement.value).toEqual("1");
	});

	it("should bind input disabled", () => {
		expect(inputElement.disabled).toEqual(false);
		component.disabled = true;
		fixture.detectChanges();
		expect(inputElement.disabled).toEqual(true);
	});

	it("should bind input required", () => {
		component.required = true;
		fixture.detectChanges();
		expect(inputElement.required).toEqual(true);
	});

	it("should display control buttons", () => {
		buttonUp = fixture.debugElement.queryAll(By.css("button"))[0].nativeElement;
		buttonDown = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		expect(buttonUp.className.includes("bx--number__control-btn")).toEqual(true);
		expect(buttonUp.className.includes("up-icon")).toEqual(true);
		expect(buttonDown.className.includes("bx--number__control-btn")).toEqual(true);
		expect(buttonDown.className.includes("down-icon")).toEqual(true);
	});

	it("should increment value when button up is clicked", () => {
		buttonUp = fixture.debugElement.query(By.css(".up-icon")).nativeElement;
		component.value = 1;
		buttonUp.click();
		fixture.detectChanges();
		expect(component.value).toEqual(2);
	});

	it("should decrement value when button down is clicked", () => {
		buttonUp = fixture.debugElement.query(By.css(".down-icon")).nativeElement;
		component.value = 1;
		buttonUp.click();
		fixture.detectChanges();
		expect(component.value).toEqual(0);
	});

	it("should have dark and light theme", () => {
		containerElement = fixture.debugElement.query(By.css(".bx--number")).nativeElement;
		component.theme = "dark";
		fixture.detectChanges();
		expect(containerElement.className.includes("bx--number--light")).toEqual(false);
		component.theme = "light";
		fixture.detectChanges();
		expect(containerElement.className.includes("bx--number--light")).toEqual(true);
	});
});
