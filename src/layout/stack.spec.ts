import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component } from "@angular/core";
import { By } from "@angular/platform-browser";

import { StackDirective } from "./stack.directive";

@Component({
	template: `<div cdsStack>Test</div>`
})
class TestStackComponent { }

describe("Stack", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				TestStackComponent,
				StackDirective
			]
		});
	});

	it("should assign default stack class to div", () => {
		TestBed.configureTestingModule({
			declarations: [TestStackComponent, StackDirective]
		});

		let fixture: ComponentFixture<TestStackComponent> = TestBed.createComponent(TestStackComponent);
		let component: TestStackComponent = fixture.componentInstance;
		fixture.detectChanges();

		expect(component).toBeTruthy();
		const directiveEl = fixture.debugElement.query(By.directive(StackDirective));
		expect(directiveEl).not.toBeNull();
		expect(directiveEl.nativeElement.classList.contains("cds--stack-vertical")).toBeTruthy();
	});

	/**
	 * @todo Remove this test when `ibmStack` is removed
	 * v6
	 */
	it("should work with deprecated `ibmStack` input property", () => {
		TestBed.overrideComponent(TestStackComponent, {
			set: {
				template: `
					<div ibmStack="horizontal"></div>
				`
			}
		});

		TestBed.compileComponents().then(() => {
			let fixture: ComponentFixture<TestStackComponent> = TestBed.createComponent(TestStackComponent);
			fixture.detectChanges();

			const directiveEl = fixture.debugElement.query(By.directive(StackDirective));
			expect(directiveEl.nativeElement.classList.contains("cds--stack-horizontal")).toBeTruthy();
		});
	});
});
