import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InlineLoading } from "./inline-loading.component";
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
});
