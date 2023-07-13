import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component, DebugElement, Input } from "@angular/core";
import { By } from "@angular/platform-browser";

import { TooltipDefinition } from ".";

@Component({
	template: `
		<cds-tooltip-definition
			[isOpen]="isOpen"
			[description]="description">
			definition
		</cds-tooltip-definition>
		`
})
class TestTTDefinitionComponent {
	@Input() isOpen = false;
	@Input() description = "Some description";
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
		buttonEl.triggerEventHandler("click", null);
		fixture.detectChanges();
		expect(tooltipEl.componentInstance.isOpenChange.emit).toHaveBeenCalled();
		buttonEl.triggerEventHandler("click", null);
		fixture.detectChanges();
		expect(tooltipEl.componentInstance.isOpenChange.emit).toHaveBeenCalled();
	});
});
