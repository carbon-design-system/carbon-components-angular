import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { PasswordInputLabelComponent, PasswordInput } from "./";
import { Tooltip } from "../tooltip";

@Component({
	template: `
		<cds-password-label>
			Password
			<input cdsPassword type="password">
		</cds-password-label>
	`
})
class TestPasswordInputComponent {}

fdescribe("Password", () => {
	let fixture: ComponentFixture<TestPasswordInputComponent>;
	let component: TestPasswordInputComponent;
	let passwordEl: DebugElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [PasswordInputLabelComponent, PasswordInput, Tooltip, TestPasswordInputComponent]
		});
		fixture = TestBed.createComponent(TestPasswordInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		passwordEl = fixture.debugElement.query(By.css("cds-password-label"));
	});

	it("should create a password component", () => {
		expect(component).toBeTruthy();
		expect(passwordEl).not.toBeNull();
	});

	it("should assign wrapper classes to the host element", () => {
		expect(passwordEl.nativeElement.classList.contains("cds--form-item")).toBeTruthy();
		expect(passwordEl.nativeElement.classList.contains("cds--password-input-wrapper")).toBeTruthy();
		expect(passwordEl.nativeElement.classList.contains("cds--text-input-wrapper")).toBeTruthy();
	});

	it("should set initial input type to 'password'", () => {
		expect(passwordEl.nativeElement.querySelector("input[type='password']")).not.toBeNull();
	});

	it("should set input type to 'text' when toggle button is clicked", () => {
		const visibilityToggleButton = passwordEl.nativeElement.querySelector("button.cds--text-input--password__visibility__toggle");
		visibilityToggleButton.click();
		fixture.detectChanges();
		expect(passwordEl.nativeElement.querySelector("input[type='password']")).toBeNull();
		expect(passwordEl.nativeElement.querySelector("input[type='text']")).not.toBeNull();
	});
});
