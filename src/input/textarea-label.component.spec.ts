import { Component, ViewChild } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InputModule } from "./input.module";
import { TextareaLabelComponent } from "./textarea-label.component";
import { advancedFakeAsync } from "../test-helpers/change-detection";

@Component({
	template: `
		<cds-textarea-label [enableCounter]="true" [maxCount]="20" labelText="Notes">
			<textarea cdsTextArea [formControl]="control"></textarea>
		</cds-textarea-label>
	`,
	imports: [InputModule, ReactiveFormsModule]
})
class ReactiveTextareaTest {
	@ViewChild(TextareaLabelComponent) label: TextareaLabelComponent;
	control = new FormControl("");
}

@Component({
	template: `
		<cds-textarea-label [enableCounter]="true" [maxCount]="20" labelText="Notes">
			<textarea cdsTextArea></textarea>
		</cds-textarea-label>
	`,
	imports: [InputModule],
})
class NativeTextareaTest {
	@ViewChild(TextareaLabelComponent) label: TextareaLabelComponent;
}

describe("TextareaLabel", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				ReactiveTextareaTest,
				NativeTextareaTest,
				FormsModule
			]
		});
	});

	it("should work", () => {
		const fixture = TestBed.createComponent(ReactiveTextareaTest);
		fixture.detectChanges();

		expect(fixture.componentInstance.label instanceof TextareaLabelComponent).toBe(true);
	});

	it("should render the projected textarea and the counter", () => {
		const fixture = TestBed.createComponent(ReactiveTextareaTest);
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector("textarea")).toBeTruthy();
		expect(fixture.nativeElement.querySelector("span.cds--label[aria-hidden=true]")).toBeTruthy();
	});

	it("should update the character counter when the control value changes", fakeAsync(() => {
		const fixture = TestBed.createComponent(ReactiveTextareaTest);
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		expect(fixture.nativeElement.querySelector("span.cds--label[aria-hidden=true]").textContent.trim())
			.toBe("0/20");

		fixture.componentInstance.control.setValue("carbon");
		advancedFakeAsync(fixture);

		expect(fixture.componentInstance.label.textCount).toBe(6);
		expect(fixture.nativeElement.querySelector("span.cds--label[aria-hidden=true]").textContent.trim())
			.toBe("6/20");
	}));

	it("should update the character counter for a value set later", fakeAsync(() => {
		const fixture = TestBed.createComponent(ReactiveTextareaTest);
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		setTimeout(() => fixture.componentInstance.control.setValue("carbon design"), 400);
		advancedFakeAsync(fixture, 400);

		expect(fixture.nativeElement.querySelector("span.cds--label[aria-hidden=true]").textContent.trim())
			.toBe("13/20");
	}));

	it("should update the character counter as the user types", fakeAsync(() => {
		const fixture = TestBed.createComponent(NativeTextareaTest);
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		const textarea = fixture.nativeElement.querySelector("textarea");
		textarea.value = "abcd";
		textarea.dispatchEvent(new Event("input"));
		advancedFakeAsync(fixture);

		expect(fixture.componentInstance.label.textCount).toBe(4);
		expect(fixture.nativeElement.querySelector("span.cds--label[aria-hidden=true]").textContent.trim())
			.toBe("4/20");
	}));
});
