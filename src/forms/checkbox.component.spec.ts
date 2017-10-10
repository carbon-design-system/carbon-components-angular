import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentFixture, TestBed, fakeAsync, tick, async } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { CheckboxComponent } from "./checkbox.component";

describe("CheckboxComponent", () => {
	let component: CheckboxComponent;
	let fixture: ComponentFixture<CheckboxComponent>;
	let de: DebugElement;
	let el: HTMLElement;
	let inputElement: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CheckboxComponent],
			imports: [BrowserAnimationsModule],
			providers: []
		});

		fixture = TestBed.createComponent(CheckboxComponent);
		component = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("label.checkbox"));
		el = de.nativeElement;
		inputElement = fixture.debugElement.query(By.css("input")).nativeElement;
	});

	it("should work", () => {
		expect(component instanceof CheckboxComponent).toBe(true);
	});

	it("should change state", () => {
		inputElement.click();
		fixture.detectChanges();
		expect(component.checked).toBe(true, "setting to checked");

		inputElement.click();
		fixture.detectChanges();
		expect(component.checked).toBe(false, "setting to unchecked");
	});
});
