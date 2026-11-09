import { Component, ViewChild } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";
import { advancedFakeAsync } from "../test-helpers/change-detection";

import { InlineLoading, InlineLoadingState } from "./inline-loading.component";

@Component({
	template: `
		<cds-inline-loading
			[state]="state"
			[successText]="successText"
			[errorText]="errorText">
		</cds-inline-loading>
	`,
	imports: [InlineLoading]
})
class InlineLoadingTest {
	@ViewChild(InlineLoading) loader: InlineLoading;
	state: InlineLoadingState | string = InlineLoadingState.Active;
	successText = "";
	errorText = "";
}

describe("Inline Loading", () => {
	let component: InlineLoading;
	let fixture: ComponentFixture<InlineLoading>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [InlineLoading, InlineLoadingTest]
		});

		fixture = TestBed.createComponent(InlineLoading);
		component = fixture.componentInstance;
	});

	it("should work", () => {
		expect(component instanceof InlineLoading).toBe(true);
	});

	it("should show `finished` state and handle `state` as enum", () => {
		component.successText = "success text";
		component.state = InlineLoadingState.Finished;
		fixture.detectChanges();
		expect(fixture.nativeElement.innerHTML).toContain(component.successText);
	});

	it("should show `error` state and handle `state` as a string", () => {
		component.errorText = "error text";
		component.state = "error";
		fixture.detectChanges();
		expect(fixture.nativeElement.innerHTML).toContain(component.errorText);
	});

	it("should swap the spinner for the checkmark when loading finishes", fakeAsync(() => {
		const hostFixture = TestBed.createComponent(InlineLoadingTest);
		hostFixture.componentInstance.successText = "all done";
		hostFixture.detectChanges();
		expect(hostFixture.nativeElement.querySelector(".cds--loading")).toBeTruthy();

		setTimeout(() => hostFixture.componentInstance.state = InlineLoadingState.Finished, 500);
		advancedFakeAsync(hostFixture, 500);

		expect(hostFixture.nativeElement.querySelector(".cds--loading")).toBeFalsy();
		expect(hostFixture.nativeElement.querySelector(".cds--inline-loading__checkmark-container")).toBeTruthy();
		expect(hostFixture.nativeElement.querySelector(".cds--inline-loading__text").textContent.trim()).toBe("all done");
	}));

	it("should hide the loader when the state becomes hidden", fakeAsync(() => {
		const hostFixture = TestBed.createComponent(InlineLoadingTest);
		hostFixture.detectChanges();

		setTimeout(() => hostFixture.componentInstance.state = InlineLoadingState.Hidden, 100);
		advancedFakeAsync(hostFixture, 100);

		expect(hostFixture.nativeElement.querySelector(".cds--inline-loading__animation")).toBeFalsy();
	}));

	it("should show the finished state before the success event fires", fakeAsync(() => {
		const onSuccess = jasmine.createSpy("onSuccess");
		component.onSuccess.subscribe(onSuccess);

		component.success = true;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector(".cds--inline-loading__checkmark-container")).toBeTruthy();
		expect(onSuccess).not.toHaveBeenCalled();

		advancedFakeAsync(fixture, component.successDelay);

		expect(onSuccess).toHaveBeenCalled();
	}));
});
