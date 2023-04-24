import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { Label } from "./label.component";
import { Component, ViewChild } from "@angular/core";
import { TextInput } from "./input.directive";

@Component({
	template: `
		<ibm-label>
			<input ibmText value="test">
		</ibm-label>
	`
})
class TestLabelHostComponent {
	@ViewChild(Label) labelChild: Label;
}

describe("Label", () => {
	let hostComponent: TestLabelHostComponent;
	let component: Label;
	let hostFixture: ComponentFixture<TestLabelHostComponent>;

	const outerWrapperClass = ".bx--text-input__field-outer-wrapper";
	const inputWrapperClass = ".bx--text-input__field-wrapper";

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Label, TestLabelHostComponent, TextInput],
			imports: [],
			providers: []
		});

		hostFixture = TestBed.createComponent(TestLabelHostComponent);
		hostComponent = hostFixture.componentInstance;
		hostFixture.detectChanges();
		component = hostComponent.labelChild;
	});

	it("should work", () => {
		expect(component instanceof Label).toBe(true);
		let labelEl = hostFixture.debugElement.query(By.css("ibm-label"));
		expect(labelEl.classes["bx--form-item"]).toBeTruthy();
		expect(labelEl.classes["bx--text-input-wrapper"]).toBeTruthy();
	});

	it("should set helper text", () => {
		const expectedHelperText = "My helper text";

		component.helperText = expectedHelperText;
		hostFixture.detectChanges();
		const helperTextClass = ".bx--form__helper-text";
		let helperTextContainerEls = hostFixture.debugElement.queryAll(
			By.css(outerWrapperClass + ">" + helperTextClass)
		);
		expect(helperTextContainerEls).toBeDefined();
		expect(helperTextContainerEls.length).toBe(1);

		let helperTextContainerEl = helperTextContainerEls[0];
		expect(helperTextContainerEl.nativeElement.textContent).toBe(expectedHelperText);
	});

	it("should set icon to warning for warning state", () => {
		component.warn = true;
		hostFixture.detectChanges();
		const svgSelector = "svg.bx--text-input__invalid-icon.bx--text-input__invalid-icon--warning";
		let svgEls = hostFixture.debugElement.queryAll(
			By.css(outerWrapperClass + ">" + inputWrapperClass + ">" + svgSelector)
		);
		expect(svgEls).toBeDefined();
		expect(svgEls.length).toBe(1);
	});

	it("should set warning text in warn state", () => {
		const expectedWaringText = "My warning text";

		component.warn = true;
		component.warnText = expectedWaringText;
		hostFixture.detectChanges();
		const requiredTextClass = ".bx--form-requirement";
		let helperTextContainerEls = hostFixture.debugElement.queryAll(
			By.css(outerWrapperClass + ">" + requiredTextClass)
		);
		expect(helperTextContainerEls).toBeDefined();
		expect(helperTextContainerEls.length).toBe(1);

		let helperTextContainerEl = helperTextContainerEls[0];
		expect(helperTextContainerEl.nativeElement.textContent).toBe(expectedWaringText);
	});

	it("should set icon to error in invalid state", () => {
		component.invalid = true;
		hostFixture.detectChanges();
		const svgSelector = "svg.bx--text-input__invalid-icon";
		let svgEls = hostFixture.debugElement.queryAll(
			By.css(outerWrapperClass + ">" + inputWrapperClass + ">" + svgSelector)
		);
		expect(svgEls).toBeDefined();
		expect(svgEls.length).toBe(1);
	});

	it("should set error text in invalid state", () => {
		const expectedInvalidText = "My error text";

		component.invalid = true;
		component.invalidText = expectedInvalidText;
		hostFixture.detectChanges();
		let helperTextContainerEls = hostFixture.debugElement.queryAll(
			By.css(".bx--text-input__field-outer-wrapper > .bx--form-requirement")
		);
		expect(helperTextContainerEls).toBeDefined();
		expect(helperTextContainerEls.length).toBe(1);

		let helperTextContainerEl = helperTextContainerEls[0];
		expect(helperTextContainerEl.nativeElement.textContent).toBe(expectedInvalidText);
	});

	it("should set icon to readonly in readonly state", () => {
		component.readonly = true;
		hostFixture.detectChanges();
		const svgSelector = "svg.bx--text-input__readonly-icon";
		let svgEls = hostFixture.debugElement.queryAll(
			By.css(outerWrapperClass + ">" + inputWrapperClass + ">" + svgSelector)
		);
		expect(svgEls).toBeDefined();
		expect(svgEls.length).toBe(1);
	});

	it("should set inline classes in inline state", () => {
		component.inline = true;
		component.helperText = "test helpful text";

		hostFixture.detectChanges();
		let labelEls = hostFixture.debugElement.queryAll(
			By.css(".bx--text-input__label-helper-wrapper > label")
		);
		expect(labelEls.length).toBe(1);

		let helperTextEls = hostFixture.debugElement.queryAll(
			By.css(".bx--form__helper-text")
		);
		expect(helperTextEls.length).toBe(1);

		let labelElInlineClass = labelEls[0].classes["bx--label--inline"];
		expect(labelElInlineClass).toBeTruthy();

		let helperTextElInlineClass = helperTextEls[0].classes["bx--form__helper-text--inline"];
		expect(helperTextElInlineClass).toBeTruthy();

		let inputWrapperEls = hostFixture.debugElement.queryAll(
			By.css(".bx--text-input__field-outer-wrapper.bx--text-input__field-outer-wrapper--inline")
		);
		expect(inputWrapperEls.length).toBe(1);
	});
});
