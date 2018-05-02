import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	 } from "@angular/platform-browser";

import { Sample } from "./sample.component";
import { SampleInterface } from "./sample.interface";

@Component({
	template: `
		<n-sample [foo]="testData"></n-sample>
	`
})
class SampleTestComponent {
	public testData: SampleInterface = {
		required: "test"
	};
}

describe("Sample", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				Sample,
				SampleTestComponent
			],
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SampleTestComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		const fixture = TestBed.createComponent(Sample);
		expect(fixture.componentInstance instanceof Sample).toBe(true);
	});

	it("should set the test value", () => {
		const comp = fixture.debugElement.query(By.css("n-sample"));
		expect(comp.nativeElement.querySelector("span").textContent).toEqual("test");
	});
});
