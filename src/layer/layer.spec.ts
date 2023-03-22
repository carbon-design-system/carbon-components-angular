import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component } from "@angular/core";
import { By } from "@angular/platform-browser";

import { LayerDirective } from "./layer.directive";

@Component({
	template: `<div cdsLayer></div>`
})
class TestLayerComponent {
}

@Component({
	template: `
		<div cdsLayer>
			<div cdsLayer class="test"></div>
		</div>
	`
})
class TestNestedLayerComponent { }

describe("Layer", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				LayerDirective,
				TestLayerComponent,
				TestNestedLayerComponent
			]
		});
	});

	it("should create a Layer", () => {
		let fixture: ComponentFixture<TestLayerComponent> = TestBed.createComponent(TestLayerComponent);
		let component: TestLayerComponent = fixture.componentInstance;
		fixture.detectChanges();

		expect(component).toBeTruthy();
		const directiveEl = fixture.debugElement.query(By.directive(LayerDirective));
		expect(directiveEl).not.toBeNull();
		expect(directiveEl.nativeElement.classList.contains("cds--layer-two")).toBeTruthy();
	});

	it("should create a nested Layer", () => {
		let fixture: ComponentFixture<TestNestedLayerComponent> = TestBed.createComponent(TestNestedLayerComponent);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(LayerDirective)).nativeElement;
		expect(directiveEl.querySelector("div").className.includes("cds--layer-three")).toBeTruthy();
	});

	it("should have additional user provided classes", () => {
		let fixture: ComponentFixture<TestNestedLayerComponent> = TestBed.createComponent(TestNestedLayerComponent);
		console.log(fixture.debugElement);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(LayerDirective)).nativeElement;
		expect(directiveEl.querySelector("div").className.includes("test")).toBeTruthy();
	});

	/**
	 * @todo Remove this test when `ibmLayer` is removed
	 * v6
	 */
	it("should work with deprecated `ibmLayer` input property", () => {
		TestBed.overrideComponent(TestNestedLayerComponent, {
			set: {
				template: `
					<div cdsLayer>
						<div ibmLayer class="test">sdfs</div>
					</div>
				`
			}
		});

		TestBed.compileComponents().then(() => {
			let fixture = TestBed.createComponent(TestNestedLayerComponent);
			fixture.detectChanges();
			const directiveEl = fixture.debugElement.query(By.directive(LayerDirective));
			expect(directiveEl.nativeElement.querySelector("div").className.includes("cds--layer-three")).toBeTruthy();
		});
	});
});
