import { TestBed, ComponentFixture, tick, fakeAsync } from "@angular/core/testing";
import { Component, Input, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { Tooltip } from "./tooltip.component";

@Component({
	template: `
		<cds-tooltip
			[isOpen]="isOpen"
			[enterDelayMs]="enterDelayMs"
			[leaveDelayMs]="leaveDelayMs"
			[description]="description">
			<button>A</button>
		</cds-tooltip>
	`
})
class TestTooltipComponent {
	@Input() isOpen = false;
	@Input() description = "Some description";
	@Input() enterDelayMs = 0;
	@Input() leaveDelayMs = 0;
}

describe("Tooltip", () => {
	let fixture: ComponentFixture<TestTooltipComponent>;
	let component: TestTooltipComponent;
	let tooltipEl: DebugElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestTooltipComponent, Tooltip]
		});
		fixture = TestBed.createComponent(TestTooltipComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		tooltipEl = fixture.debugElement.query(By.css("cds-tooltip"));
	});

	it("should create a tooltip component", () => {
		expect(component).toBeTruthy();
		expect(tooltipEl).not.toBeNull();
		expect(tooltipEl.nativeElement.querySelector("span.cds--popover-content").className.includes("cds--tooltip-content")).toBeTruthy();
	});

	it("should open/close tooltip on content mouseenter/mouseleave", fakeAsync(() => {
		spyOn(tooltipEl.componentInstance.isOpenChange, "emit");
		tooltipEl.nativeElement.dispatchEvent(new MouseEvent("mouseenter"));
		tick();
		fixture.detectChanges();
		expect(tooltipEl.componentInstance.isOpenChange.emit).toHaveBeenCalled();
		expect(tooltipEl.componentInstance.isOpen).toBeTruthy();
		tooltipEl.nativeElement.dispatchEvent(new MouseEvent("mouseleave"));
		tick();
		fixture.detectChanges();
		expect(tooltipEl.componentInstance.isOpenChange.emit).toHaveBeenCalled();
		expect(tooltipEl.componentInstance.isOpen).toBeFalsy();
	}));

	it("should open/close tooltip on content focusin/focusout", () => {
		spyOn(tooltipEl.componentInstance.isOpenChange, "emit");
		tooltipEl.nativeElement.dispatchEvent(new Event("focusin"));
		fixture.detectChanges();
		expect(tooltipEl.componentInstance.isOpenChange.emit).toHaveBeenCalled();
		expect(tooltipEl.componentInstance.isOpen).toBeTruthy();
		tooltipEl.nativeElement.dispatchEvent(new Event("focusout"));
		fixture.detectChanges();
		expect(tooltipEl.componentInstance.isOpenChange.emit).toHaveBeenCalled();
		expect(tooltipEl.componentInstance.isOpen).toBeFalsy();
	});
});
