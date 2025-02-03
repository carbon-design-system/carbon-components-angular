import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";
import { I18nModule } from "../i18n/index";
import { IconModule } from "../icon/index";
import { Number } from "./number.component";

describe("Number", () => {
	let component: Number;
	let fixture: ComponentFixture<Number>;
	let inputElement: HTMLInputElement;
	let containerElement: HTMLElement;
	let buttonUp: HTMLButtonElement;
	let buttonDown: HTMLButtonElement;
	let labelElement: HTMLDivElement;
	let helperTextElement: HTMLDivElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Number],
			imports: [
				I18nModule,
				FormsModule,
				IconModule
			],
			providers: []
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(Number);
		component = fixture.componentInstance;
		inputElement = fixture.debugElement.query(By.css("input")).nativeElement;
		containerElement = fixture.debugElement.query(By.css(".cds--number")).nativeElement;
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
		fixture.componentRef.setInput("label", "Number Input");
		fixture.detectChanges();
		labelElement = fixture.debugElement.query(By.css(".cds--label")).nativeElement;
		expect(labelElement.innerHTML.includes("Number Input")).toEqual(true);
		expect(containerElement.className.includes("cds--number--nolabel")).toEqual(false);

		fixture.componentRef.setInput("label", null);
		fixture.detectChanges();
		expect(fixture.debugElement.query(By.css(".cds--label"))).toBeNull();
		expect(containerElement.className.includes("cds--number--nolabel")).toEqual(true);
	});

	it("should bind input helperText", () => {
		component.helperText = "Helper text here.";
		fixture.detectChanges();
		helperTextElement = fixture.debugElement.query(By.css(".cds--form__helper-text")).nativeElement;
		expect(containerElement.className.includes("cds--number--helpertext")).toEqual(true);
		expect(helperTextElement.innerHTML.includes("Helper text here.")).toEqual(true);
	});

	it("should display control buttons", () => {
		fixture.detectChanges();
		buttonUp = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
		buttonDown = fixture.debugElement.queryAll(By.css("button"))[0].nativeElement;
		expect(buttonUp.className.includes("cds--number__control-btn")).toEqual(true);
		expect(buttonUp.className.includes("up-icon")).toEqual(true);
		expect(buttonDown.className.includes("cds--number__control-btn")).toEqual(true);
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

	it("should increment and set value to max if value + step exceeds max", () => {
		fixture.detectChanges();
		buttonUp = fixture.debugElement.query(By.css(".up-icon")).nativeElement;
		component.value = 95;
		component.step = 10;
		component.max = 100;
		buttonUp.click();
		fixture.detectChanges();
		expect(component.value).toEqual(100);
	});

	it("should increment and set value to min if value + step is less than min", () => {
		fixture.detectChanges();
		buttonUp = fixture.debugElement.query(By.css(".up-icon")).nativeElement;
		component.value = 0;
		component.step = 2;
		component.min = 5;
		buttonUp.click();
		fixture.detectChanges();

		expect(component.value).toBe(5);
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

	it("should decrement and set value to max if value - step exceeds max", () => {
		fixture.detectChanges();
		buttonUp = fixture.debugElement.query(By.css(".down-icon")).nativeElement;
		component.value = 20;
		component.step = 2;
		component.max = 15;
		buttonUp.click();
		fixture.detectChanges();

		expect(component.value).toBe(15);
	});

	it("should decrement and set value to min if value - step is less than min", () => {
		fixture.detectChanges();
		buttonUp = fixture.debugElement.query(By.css(".down-icon")).nativeElement;
		component.value = 6;
		component.step = 2;
		component.min = 5;
		buttonUp.click();
		fixture.detectChanges();
		expect(component.value).toEqual(5);
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
		fixture.componentRef.setInput("theme", "dark");
		fixture.detectChanges();
		expect(containerElement.className.includes("cds--number--light")).toEqual(false);
		fixture.componentRef.setInput("theme", "light");
		fixture.detectChanges();
		expect(containerElement.className.includes("cds--number--light")).toEqual(true);
	});
});
