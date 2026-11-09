import { Component, Injector, ViewChild } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PlaceholderModule } from "./placeholder.module";
import { Placeholder } from "./placeholder.component";
import { PlaceholderService } from "./placeholder.service";

@Component({
	template: `<span class="dynamic-content">dynamically inserted</span>`,
	imports: [PlaceholderModule]
})
class DynamicContent {}

@Component({
	template: `<cds-placeholder></cds-placeholder>`,
	imports: [PlaceholderModule]
})
class PlaceholderTest {
	@ViewChild(Placeholder) placeholder: Placeholder;
}

describe("Placeholder", () => {
	let fixture: ComponentFixture<PlaceholderTest>;
	let placeholderService: PlaceholderService;
	let injector: Injector;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				PlaceholderTest,
				DynamicContent
			],
			providers: [PlaceholderService]
		});

		fixture = TestBed.createComponent(PlaceholderTest);
		fixture.detectChanges();
		placeholderService = TestBed.inject(PlaceholderService);
		injector = TestBed.inject(Injector);
	});

	it("should work", () => {
		expect(fixture.componentInstance.placeholder instanceof Placeholder).toBe(true);
	});

	it("should register its view container with the placeholder service", () => {
		expect(fixture.componentInstance.placeholder.viewContainerRef).toBeTruthy();
		expect(placeholderService.hasPlaceholderRef()).toBe(true);
	});

	it("should render a component created through the service", () => {
		placeholderService.createComponent(DynamicContent as any, injector);
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector(".dynamic-content")).toBeTruthy();
		expect(fixture.nativeElement.textContent).toContain("dynamically inserted");
	});

	it("should remove the component when the service destroys it", () => {
		const componentRef = placeholderService.createComponent(DynamicContent as any, injector);
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector(".dynamic-content")).toBeTruthy();

		placeholderService.destroyComponent(componentRef);
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector(".dynamic-content")).toBeFalsy();
	});
});
