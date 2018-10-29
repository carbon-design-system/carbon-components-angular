import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Loading } from "./loading.component";
import { I18nModule } from "../i18n/i18n.module";

describe("Loading", () => {
	let component: Loading;
	let fixture: ComponentFixture<Loading>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Loading],
			imports: [I18nModule]
		});

		fixture = TestBed.createComponent(Loading);
		component = fixture.componentInstance;
	});

	it("should work", () => {
		expect(component instanceof Loading).toBe(true);
	});
});
