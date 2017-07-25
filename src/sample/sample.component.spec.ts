import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	 } from "@angular/platform-browser";

import { Sample } from "./sample.component";

@Component({
	template: `
	<n-sample></n-sample>`
})
class TestComponent {}

describe("Dropdown", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				Sample,
				TestComponent
			],
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(Sample);
		expect(fixture.componentInstance instanceof Sample).toBe(true);
	});
});
