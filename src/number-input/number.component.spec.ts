import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { I18nModule, I18n } from "./../i18n/i18n.module";
import { Number } from "./number.component";
import { FormsModule } from "@angular/forms";
import { CaretUp16Module } from "@carbon/icons-angular/lib/caret--up/16";
import { CaretDown16Module } from "@carbon/icons-angular/lib/caret--down/16";
import { WarningFilled16Module } from "@carbon/icons-angular/lib/warning--filled/16";

describe("Number", () => {
	let component: Number;
	let fixture: ComponentFixture<Number>;
	let inputElement: HTMLInputElement;
	let containerElement: HTMLElement;
	let buttonUp: HTMLButtonElement;
	let buttonDown: HTMLButtonElement;
	let labelElement: HTMLDivElement;
	let helperTextElement: HTMLDivElement;
	let i18n: I18n;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Number],
			imports: [
				FormsModule,
				CaretUp16Module,
				CaretDown16Module,
				I18nModule,
				WarningFilled16Module
			],
			providers: [
				I18n
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(Number);
		component = fixture.componentInstance;
		inputElement = fixture.debugElement.query(By.css("input")).nativeElement;
		containerElement = fixture.debugElement.query(By.css(".bx--number")).nativeElement;
		i18n = TestBed.get(I18n);
	});

	it("should work", () => {
		expect(component instanceof Number).toBe(true);
	});

	it("should bind input value", () => {
		component.value = 1;
		fixture.detectChanges();
		expect(inputElement.value).toEqual("1");
	});

	it("should bind input min", () => {
		component.min = 0;
		fixture.detectChanges();
		expect(inputElement.min).toEqual("0");
	});

	it("should bind input max", () => {
		component.max = 100;
		fixture.detectChanges();
		expect(inputElement.max).toEqual("100");
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

	it("should bind input label", () => {
		component.label = "Number Input";
		fixture.detectChanges();
		labelElement = fixture.debugElement.query(By.css(".bx--label")).nativeElement;
		expect(labelElement.innerHTML.includes("Number Input")).toEqual(true);
		expect(containerElement.className.includes("bx--number--nolabel")).toEqual(false);

		component.label = null;
		fixture.detectChanges();
		expect(fixture.debugElement.query(By.css(".bx--label"))).toBeNull();
		expect(containerElement.className.includes("bx--number--nolabel")).toEqual(true);
	});

	it("should bind input helperText", () => {
		component.helperText = "Helper text here.";
		fixture.detectChanges();
		helperTextElement = fixture.debugElement.query(By.css(".bx--form__helper-text")).nativeElement;
		expect(containerElement.className.includes("bx--number--helpertext")).toEqual(true);
		expect(helperTextElement.innerHTML.includes("Helper text here.")).toEqual(true);
	});

	it("should display control buttons", () => {
		fixture.detectChanges();
		buttonUp = fixture.debugElement.queryAll(By.css("button"))[0].nativeElement;
		buttonDown = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		expect(buttonUp.className.includes("bx--number__control-btn")).toEqual(true);
		expect(buttonUp.className.includes("up-icon")).toEqual(true);
		expect(buttonDown.className.includes("bx--number__control-btn")).toEqual(true);
		expect(buttonDown.className.includes("down-icon")).toEqual(true);
	});

	it("should increment value when button up is clicked", () => {
		fixture.detectChanges();
		buttonUp = fixture.debugElement.query(By.css(".up-icon")).nativeElement;
		component.value = 1;
		buttonUp.click();
		fixture.detectChanges();
		expect(component.value).toEqual(2);
	});

	it("should not increment value if max is reached", () => {
		fixture.detectChanges();
		buttonUp = fixture.debugElement.query(By.css(".up-icon")).nativeElement;
		component.value = 100;
		component.max = 100;
		buttonUp.click();
		fixture.detectChanges();
		expect(component.value).toEqual(100);
	});

	it("should decrement value when button down is clicked", () => {
		fixture.detectChanges();
		buttonUp = fixture.debugElement.query(By.css(".down-icon")).nativeElement;
		component.value = 1;
		buttonUp.click();
		fixture.detectChanges();
		expect(component.value).toEqual(0);
	});

	it("should not decrement value min is reached", () => {
		fixture.detectChanges();
		buttonUp = fixture.debugElement.query(By.css(".down-icon")).nativeElement;
		component.value = 0;
		component.min = 0;
		buttonUp.click();
		fixture.detectChanges();
		expect(component.value).toEqual(0);
	});

	it("should have dark and light theme", () => {
		component.theme = "dark";
		fixture.detectChanges();
		expect(containerElement.className.includes("bx--number--light")).toEqual(false);
		component.theme = "light";
		fixture.detectChanges();
		expect(containerElement.className.includes("bx--number--light")).toEqual(true);
	});

	it("should bind increment label to button title", () => {
		const expectedTitle = "Increment that number";
		fixture.detectChanges();
		buttonUp = fixture.debugElement.query(By.css(".up-icon")).nativeElement;
		expect(buttonUp.title).toEqual(i18n.get("NUMBER_INPUT.INCREMENT_BUTTON").value);
		component.incrementLabel = expectedTitle;
		fixture.detectChanges();
		expect(buttonUp.title).toEqual(expectedTitle);
	});

	it("should bind increment label to aria-label", () => {
		const expectedTitle = "Increment that number";
		fixture.detectChanges();
		buttonUp = fixture.debugElement.query(By.css(".up-icon")).nativeElement;
		expect(buttonUp.getAttribute("aria-label")).toEqual(i18n.get("NUMBER_INPUT.INCREMENT_BUTTON").value);
		component.incrementLabel = expectedTitle;
		fixture.detectChanges();
		expect(buttonUp.getAttribute("aria-label")).toEqual(expectedTitle);
	});

	it("should default increment label aria-label to iconDescription", () => {
		const expectedAriaLabel = i18n.get("NUMBER_INPUT.ICON_DESCRIPTION").value;
		fixture.componentInstance.incrementLabel = null;
		fixture.detectChanges();
		buttonUp = fixture.debugElement.query(By.css(".up-icon")).nativeElement;
		expect(buttonUp.getAttribute("aria-label")).not.toEqual(i18n.get("NUMBER_INPUT.INCREMENT_BUTTON").value);
		expect(buttonUp.getAttribute("aria-label")).not.toEqual(expectedAriaLabel);
	});

	it("should bind decrement label to title", () => {
		const expectedTitle = "Decrement that number";
		fixture.detectChanges();
		buttonDown = fixture.debugElement.query(By.css(".down-icon")).nativeElement;
		expect(buttonDown.title).toEqual(i18n.get("NUMBER_INPUT.DECREMENT_BUTTON").value);
		component.decrementLabel = expectedTitle;
		fixture.detectChanges();
		expect(buttonDown.title).toEqual(expectedTitle);
	});

	it("should bind decrement label to aria-label", () => {
		const expectedAriaLabel = "Decrement that number";
		fixture.detectChanges();
		buttonDown = fixture.debugElement.query(By.css(".down-icon")).nativeElement;
		expect(buttonDown.getAttribute("aria-label")).toEqual(i18n.get("NUMBER_INPUT.DECREMENT_BUTTON").value);
		component.decrementLabel = expectedAriaLabel;
		fixture.detectChanges();
		expect(buttonDown.getAttribute("aria-label")).toEqual(expectedAriaLabel);
	});

	it("should default decrement label aria-label to iconDescription", () => {
		const expectedAriaLabel = i18n.get("NUMBER_INPUT.ICON_DESCRIPTION");
		fixture.componentInstance.decrementLabel = null;
		fixture.detectChanges();
		buttonDown = fixture.debugElement.query(By.css(".down-icon")).nativeElement;
		expect(buttonDown.getAttribute("aria-label")).not.toEqual(i18n.get("NUMBER_INPUT.DECREMENT_BUTTON").value);
		expect(buttonDown.getAttribute("aria-label")).not.toEqual(expectedAriaLabel);
	});

});
