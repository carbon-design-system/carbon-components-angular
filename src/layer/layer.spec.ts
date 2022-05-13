import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component } from "@angular/core";
import { By } from "@angular/platform-browser";

import { Layer } from "./layer.directive";

@Component({
	template: `<div ibmLayer></div>`
})
class TestLayerComponent {
}

@Component({
	template: `
		<div ibmLayer>
			<div ibmLayer></div>
		</div>
	`
})
class TestNestedLayerComponent {
}

fdescribe("Layer", () => {
	it("should create a Layer", () => {
		TestBed.configureTestingModule({
			declarations: [TestLayerComponent, Layer]
		});

		let fixture: ComponentFixture<TestLayerComponent> = TestBed.createComponent(TestLayerComponent);
		let component: TestLayerComponent = fixture.componentInstance;
		fixture.detectChanges();

		expect(component).toBeTruthy();
		const directiveEl = fixture.debugElement.query(By.directive(Layer));
		expect(directiveEl).not.toBeNull();
		expect(directiveEl.nativeElement.classList.contains("cds--layer-two")).toBeTruthy();
	});

	it("should create a nested Layer", () => {
		TestBed.configureTestingModule({
			declarations: [TestNestedLayerComponent, Layer]
		});

		let fixture: ComponentFixture<TestNestedLayerComponent> = TestBed.createComponent(TestNestedLayerComponent);
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(Layer)).nativeElement;
		expect(directiveEl.querySelector("div").className.includes("cds--layer-three")).toBeTruthy();
	});
});
