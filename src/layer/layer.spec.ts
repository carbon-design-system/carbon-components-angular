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
	it("should create a Layer", () => {
		TestBed.configureTestingModule({
			declarations: [TestLayerComponent, LayerDirective]
		});

		let fixture: ComponentFixture<TestLayerComponent> = TestBed.createComponent(TestLayerComponent);
		let component: TestLayerComponent = fixture.componentInstance;
		fixture.detectChanges();

		expect(component).toBeTruthy();
		const directiveEl = fixture.debugElement.query(By.directive(LayerDirective));
		expect(directiveEl).not.toBeNull();
		expect(directiveEl.nativeElement.classList.contains("cds--layer-two")).toBeTruthy();
	});

	it("should create a nested Layer", () => {
		TestBed.configureTestingModule({
			declarations: [TestNestedLayerComponent, LayerDirective]
		});

		let fixture: ComponentFixture<TestNestedLayerComponent> = TestBed.createComponent(TestNestedLayerComponent);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(LayerDirective)).nativeElement;
		expect(directiveEl.querySelector("div").className.includes("cds--layer-three")).toBeTruthy();
	});

	it("should have additional user provided classes", () => {
		TestBed.configureTestingModule({
			declarations: [TestNestedLayerComponent, LayerDirective]
		});

		let fixture: ComponentFixture<TestNestedLayerComponent> = TestBed.createComponent(TestNestedLayerComponent);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(LayerDirective)).nativeElement;
		expect(directiveEl.querySelector("div").className.includes("test")).toBeTruthy();
	});
});
