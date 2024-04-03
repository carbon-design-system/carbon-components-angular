import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component, DebugElement, Input } from "@angular/core";
import { By } from "@angular/platform-browser";

import { TooltipDefinition } from ".";

@Component({
	template: `
		<cds-tooltip-definition
			[isOpen]="isOpen"
			[description]="description"
			[autoAlign]="autoAlign">
			definition
		</cds-tooltip-definition>
		`
})
class TestTTDefinitionComponent {
	@Input() isOpen = false;
	@Input() description = "Some description";
	@Input() autoAlign = false;
}

describe("Definition tooltip", () => {
	let fixture: ComponentFixture<TestTTDefinitionComponent>;
	let component: TestTTDefinitionComponent;
	let tooltipEl: DebugElement;
	let buttonEl: DebugElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestTTDefinitionComponent, TooltipDefinition]
		});
		fixture = TestBed.createComponent(TestTTDefinitionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		tooltipEl = fixture.debugElement.query(By.css("cds-tooltip-definition"));
		buttonEl = fixture.debugElement.query(By.css("button"));
	});

	it("should create a tooltip definition component", () => {
		expect(component).toBeTruthy();
		expect(tooltipEl).not.toBeNull();
		expect(tooltipEl.nativeElement.querySelector("button").className.includes("cds--definition-term")).toBeTruthy();
	});

	it("should open/close tooltip definition popover on button click", () => {
		spyOn(tooltipEl.componentInstance.isOpenChange, "emit");
		buttonEl.triggerEventHandler("click", new Event("click"));
		fixture.detectChanges();
		expect(tooltipEl.componentInstance.isOpenChange.emit).toHaveBeenCalled();
		buttonEl.triggerEventHandler("click", new Event("click"));
		fixture.detectChanges();
		expect(tooltipEl.componentInstance.isOpenChange.emit).toHaveBeenCalled();
	});

	it("should markForCheck given the changeDetectorRef is set", () => {
		const spy = spyOn(tooltipEl.componentInstance.changeDetectorRef, "markForCheck");
		buttonEl.triggerEventHandler("click", new Event("click"));
		fixture.detectChanges();
		expect(spy).toHaveBeenCalled();
	});

	it("should set auto alignment class to wrapper and caret", () => {
		component.autoAlign = true;
		fixture.detectChanges();
		expect(tooltipEl.nativeElement.classList.contains("cds--popover--auto-align")).toBeTruthy();
		expect(tooltipEl.nativeElement.querySelector(".cds--popover-caret.cds--popover--auto-align")).toBeDefined();
	});

	it("should clean up auto placement on close when auto alignment is enabled", () => {
		spyOn(tooltipEl.componentInstance, "cleanUp");
		component.autoAlign = true;
		component.isOpen = true;
		fixture.detectChanges();
		component.isOpen = false;
		expect(tooltipEl.componentInstance.cleanUp).toHaveBeenCalled();
	});
});
