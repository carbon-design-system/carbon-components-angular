import { fakeAsync, TestBed } from "@angular/core/testing";
import { Component, ViewChild } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputModule } from "./input.module";
import { TextInputLabelComponent } from "./text-input-label.component";
import { advancedFakeAsync } from "../test-helpers/change-detection";

@Component({
	template: `
		<cds-text-label [enableCounter]="true" [maxCount]="20" labelText="Name">
			<input cdsText [formControl]="control"/>
		</cds-text-label>
	`,
	imports: [InputModule, ReactiveFormsModule]
})
class ReactiveCounterTest {
	@ViewChild(TextInputLabelComponent) label: TextInputLabelComponent;
	control = new FormControl("");
}

@Component({
	template: `
		<cds-text-label [enableCounter]="true" [maxCount]="20" labelText="Name">
			<input cdsText/>
		</cds-text-label>
	`,
	imports: [InputModule]
})
class NativeCounterTest {
	@ViewChild(TextInputLabelComponent) label: TextInputLabelComponent;
}

describe("Text label", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				ReactiveCounterTest,
				NativeCounterTest,
				FormsModule
			]
		});
	});

	it("should work", () => {
		const fixture = TestBed.createComponent(ReactiveCounterTest);
		fixture.detectChanges();

		expect(fixture.componentInstance.label instanceof TextInputLabelComponent).toBe(true);
	});

	it("should update the character counter when the control value changes", fakeAsync(() => {
		const fixture = TestBed.createComponent(ReactiveCounterTest);
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		expect(fixture.nativeElement.querySelector("span.cds--label[aria-hidden=true]").textContent.trim()).toBe("0/20");

		fixture.componentInstance.control.setValue("carbon");
		advancedFakeAsync(fixture);

		expect(fixture.componentInstance.label.textCount).toBe(6);
		expect(fixture.nativeElement.querySelector("span.cds--label[aria-hidden=true]").textContent.trim()).toBe("6/20");
	}));

	it("should update the character counter for a value set later", fakeAsync(() => {
		const fixture = TestBed.createComponent(ReactiveCounterTest);
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		setTimeout(() => fixture.componentInstance.control.setValue("carbon design"), 400);
		advancedFakeAsync(fixture, 400);

		expect(fixture.nativeElement.querySelector("span.cds--label[aria-hidden=true]").textContent.trim()).toBe("13/20");
	}));

	it("should update the character counter as the user types", fakeAsync(() => {
		const fixture = TestBed.createComponent(NativeCounterTest);
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		const input = fixture.nativeElement.querySelector("input");
		input.value = "abcd";
		input.dispatchEvent(new Event("input"));
		advancedFakeAsync(fixture);

		expect(fixture.componentInstance.label.textCount).toBe(4);
		expect(fixture.nativeElement.querySelector("span.cds--label[aria-hidden=true]").textContent.trim()).toBe("4/20");
	}));
});
