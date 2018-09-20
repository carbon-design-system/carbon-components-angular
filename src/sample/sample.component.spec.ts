import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	 } from "@angular/platform-browser";

import { Sample } from "./sample.component";
import { SampleInterface } from "./sample.interface";

@Component({
	template: `
		<ibm-sample [foo]="testData"></ibm-sample>
	`
})
class SampleTestComponent {
	public testData: SampleInterface = {
		required: "test"
	};
}

describe("Sample", () => {
	let fixture, wrapper, instance, element;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				Sample,
				SampleTestComponent
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SampleTestComponent);
		wrapper = fixture.componentInstance;
		instance = fixture.debugElement.query(By.css("ibm-sample")).componentInstance;
		element = fixture.debugElement.query(By.css("ibm-sample")).nativeElement;
		fixture.detectChanges();
	});

	it("should work", () => {
		const fixture = TestBed.createComponent(Sample);
		expect(fixture.componentInstance instanceof Sample).toBe(true);
	});

	it("should set the test value", () => {
		expect(element.querySelector("span").textContent).toEqual("test");
	});

	it("should receive an event", () => {
		instance.bar.subscribe(value => expect(value).toBe(true));
		instance.doBar(true);
	});

	it("should set foo", () => {
		expect(element.querySelector("span").textContent).toEqual("test");
		instance.setFoo({required: "new"});
		fixture.detectChanges();
		expect(element.querySelector("span").textContent).toEqual("new");
	});
});
