import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

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
});
