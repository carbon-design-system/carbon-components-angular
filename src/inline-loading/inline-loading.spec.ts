import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";
import { advancedFakeAsync } from "../test-helpers/change-detection";

import { InlineLoading, InlineLoadingState } from "./inline-loading.component";
import { I18nModule } from "../i18n/i18n.module";

describe("Inline Loading", () => {
	let component: InlineLoading;
	let fixture: ComponentFixture<InlineLoading>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [InlineLoading],
			imports: [I18nModule]
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
		component.successText = "all done";
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector(".cds--loading")).toBeTruthy();

		setTimeout(() => component.state = InlineLoadingState.Finished, 500);
		advancedFakeAsync(fixture, 500);

		expect(fixture.nativeElement.querySelector(".cds--loading")).toBeFalsy();
		expect(fixture.nativeElement.querySelector(".cds--inline-loading__checkmark-container")).toBeTruthy();
		expect(fixture.nativeElement.querySelector(".cds--inline-loading__text").textContent.trim()).toBe("all done");

		// drain the success emit scheduled by entering the finished state
		advancedFakeAsync(fixture, component.successDelay);
	}));

	it("should hide the loader when the state becomes hidden", fakeAsync(() => {
		fixture.detectChanges();

		setTimeout(() => component.state = InlineLoadingState.Hidden, 100);
		advancedFakeAsync(fixture, 100);

		expect(fixture.nativeElement.querySelector(".cds--inline-loading__animation")).toBeFalsy();
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
