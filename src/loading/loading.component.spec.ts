import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Loading } from "./loading.component";

describe("Loading", () => {
	let component: Loading;
	let fixture: ComponentFixture<Loading>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Loading]
		});

		fixture = TestBed.createComponent(Loading);
		component = fixture.componentInstance;
	});

	it("should work", () => {
		expect(component instanceof Loading).toBe(true);
	});
});
