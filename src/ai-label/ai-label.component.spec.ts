import { TestBed, ComponentFixture, fakeAsync, tick } from "@angular/core/testing";
import { Component, DebugElement, Input } from "@angular/core";
import { By } from "@angular/platform-browser";

import { AILabelModule } from "./ai-label.module";
import { AILabelPopoverDirective } from "./ai-label-popover.directive";
import { AILabelActions } from "./ai-label-actions.directive";

@Component({
	template: `
		<cds-ai-label
			[id]="id"
			[aiText]="aiText"
			[textLabel]="textLabel"
			[kind]="kind"
			[size]="size"
			[revertActive]="revertActive"
			[revertLabel]="revertLabel"
			[ariaLabel]="ariaLabel"
			[autoAlign]="autoAlign"
			[align]="align"
			[(isOpen)]="isOpen"
			(revertClick)="onRevert($event)">
			<p class="ai-label-projection">Child content</p>
		</cds-ai-label>
	`,
	standalone: false
})
class TestAILabelHostComponent {
	@Input() id = "test-ai-label-id";
	@Input() aiText = "AI";
	@Input() textLabel: string;
	@Input() kind: "default" | "inline" = "default";
	@Input() size = "md";
	@Input() revertActive = false;
	@Input() revertLabel = "Revert to AI input";
	@Input() ariaLabel = "Show information";
	@Input() autoAlign = false;
	@Input() align: "bottom" | "bottom-start" = "bottom";
	@Input() isOpen = false;

	onRevert = jasmine.createSpy("onRevert");
}

@Component({
	template: `<div cdsAILabelActions class="actions-host"></div>`,
	standalone: false
})
class TestAILabelActionsComponent {}

describe("AILabel", () => {
	let fixture: ComponentFixture<TestAILabelHostComponent>;
	let component: TestAILabelHostComponent;
	let hostEl: DebugElement;
	let popoverHost: AILabelPopoverDirective;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [AILabelModule],
			declarations: [TestAILabelHostComponent]
		});
		fixture = TestBed.createComponent(TestAILabelHostComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		hostEl = fixture.debugElement.query(By.css("cds-ai-label"));
		const popoverEl = hostEl.query(By.directive(AILabelPopoverDirective));
		popoverHost = popoverEl.injector.get(AILabelPopoverDirective);
	});

	it("should create", () => {
		expect(component).toBeTruthy();
		expect(hostEl).not.toBeNull();
	});

	it("should render projected content", () => {
		const projected = fixture.debugElement.query(By.css(".ai-label-projection"));
		expect(projected.nativeElement.textContent).toContain("Child content");
	});

	it("should respect aiText on the trigger", () => {
		component.aiText = "IA";
		fixture.detectChanges();
		const trigger = hostEl.query(By.css(".cds--ai-label__text"));
		expect(trigger.nativeElement.textContent.trim()).toBe("IA");
	});

	it("should respect size on the trigger", () => {
		component.size = "xl";
		fixture.detectChanges();
		const btn = hostEl.query(By.css("button.cds--toggletip-button"));
		expect(btn.nativeElement.classList.contains("cds--ai-label__button--xl")).toBe(true);
	});

	it("should respect kind inline on the trigger", () => {
		component.kind = "inline";
		fixture.detectChanges();
		const btn = hostEl.query(By.css("button.cds--toggletip-button"));
		expect(btn.nativeElement.classList.contains("cds--ai-label__button--inline")).toBe(true);
	});

	it("should show textLabel when kind is inline", () => {
		component.kind = "inline";
		component.textLabel = "Test text";
		fixture.detectChanges();
		const additional = hostEl.query(By.css(".cds--ai-label__additional-text"));
		expect(additional).not.toBeNull();
		expect(additional.nativeElement.textContent.trim()).toBe("Test text");
	});

	it("should not render additional text when kind is not inline", () => {
		component.kind = "default";
		component.textLabel = "Test text";
		fixture.detectChanges();
		expect(hostEl.query(By.css(".cds--ai-label__additional-text"))).toBeNull();
	});

	it("should apply ai-label on the host and toggletip on the inner popover wrapper", () => {
		expect(hostEl.nativeElement.classList.contains("cds--ai-label")).toBe(true);
		expect(hostEl.nativeElement.classList.contains("cds--toggletip")).toBe(false);
		const popoverWrapper = hostEl.query(By.css(".cds--popover-container"));
		expect(popoverWrapper.nativeElement.classList.contains("cds--toggletip")).toBe(true);
	});

	it("should set aria-label on trigger from aiText and ariaLabel by default", () => {
		component.aiText = "AI";
		component.ariaLabel = "Show information";
		fixture.detectChanges();
		const btn = hostEl.query(By.css("button.cds--toggletip-button"));
		expect(btn.nativeElement.getAttribute("aria-label")).toBe("AI Show information");
	});

	it("should set aria-label on trigger from aiText and textLabel when inline with textLabel", () => {
		component.kind = "inline";
		component.textLabel = "Text goes here";
		fixture.detectChanges();
		const btn = hostEl.query(By.css("button.cds--toggletip-button"));
		expect(btn.nativeElement.getAttribute("aria-label")).toBe("AI Text goes here");
	});

	it("should associate trigger with popover id", () => {
		component.id = "my-popover-id";
		fixture.detectChanges();
		const btn = hostEl.query(By.css("button.cds--toggletip-button"));
		const panel = hostEl.query(By.css("span.cds--popover"));
		expect(btn.nativeElement.getAttribute("aria-controls")).toBe("my-popover-id");
		expect(panel.nativeElement.getAttribute("id")).toBe("my-popover-id");
	});

	it("should apply align classes when autoAlign is false", () => {
		component.autoAlign = false;
		component.align = "bottom-start";
		fixture.detectChanges();
		const popoverWrapper = hostEl.query(By.css(".cds--popover-container"));
		expect(popoverWrapper.nativeElement.classList.contains("cds--popover--bottom-start")).toBe(true);
		expect(popoverWrapper.nativeElement.classList.contains("cds--popover--auto-align")).toBe(false);
	});

	it("should apply auto-align class when autoAlign is true", () => {
		component.autoAlign = true;
		component.align = "bottom-start";
		fixture.detectChanges();
		const popoverWrapper = hostEl.query(By.css(".cds--popover-container"));
		expect(popoverWrapper.nativeElement.classList.contains("cds--popover--auto-align")).toBe(true);
		expect(popoverWrapper.nativeElement.classList.contains("cds--popover--bottom-start")).toBe(true);
	});

	it("should render caret inside popover content when autoAlign is true", () => {
		component.autoAlign = true;
		fixture.detectChanges();
		const innerCaret = hostEl.query(By.css(".cds--popover-content .cds--popover-caret.cds--popover--auto-align"));
		expect(innerCaret).not.toBeNull();
	});

	it("should render outer caret when autoAlign is false", () => {
		component.autoAlign = false;
		fixture.detectChanges();
		const outerCaret = hostEl.query(By.css("span.cds--popover > span.cds--popover-caret"));
		expect(outerCaret).not.toBeNull();
	});

	it("should open and close when the trigger is clicked", fakeAsync(() => {
		spyOn(popoverHost.isOpenChange, "emit").and.callThrough();
		const btn = hostEl.query(By.css("button.cds--toggletip-button"));
		btn.nativeElement.click();
		tick();
		fixture.detectChanges();
		expect(popoverHost.isOpen).toBe(true);
		expect(popoverHost.isOpenChange.emit).toHaveBeenCalledWith(true);
		expect(btn.nativeElement.getAttribute("aria-expanded")).toBe("true");

		btn.nativeElement.click();
		tick();
		fixture.detectChanges();
		expect(popoverHost.isOpen).toBe(false);
		expect(popoverHost.isOpenChange.emit).toHaveBeenCalledWith(false);
	}));

	it("should markForCheck when toggling", () => {
		const spy = spyOn((popoverHost as any).changeDetectorRef, "markForCheck");
		const btn = hostEl.query(By.css("button.cds--toggletip-button"));
		btn.nativeElement.click();
		fixture.detectChanges();
		expect(spy).toHaveBeenCalled();
	});

	it("should apply revert modifier and show icon button when revertActive", () => {
		component.revertActive = true;
		fixture.detectChanges();
		expect(hostEl.nativeElement.classList.contains("cds--ai-label--revert")).toBe(true);
		const iconBtn = hostEl.query(By.css("cds-icon-button"));
		expect(iconBtn).not.toBeNull();
		expect(hostEl.query(By.css("button.cds--toggletip-button"))).toBeNull();
		expect(hostEl.query(By.css(`span#${component.id}.cds--popover`))).toBeNull();
	});

	it("should emit revertClick when revert icon button is activated", () => {
		component.revertActive = true;
		fixture.detectChanges();
		const innerButton = fixture.debugElement.query(By.css("cds-icon-button button"));
		expect(innerButton).not.toBeNull();
		innerButton.nativeElement.click();
		expect(component.onRevert).toHaveBeenCalled();
	});

	it("should expose revertLabel on the icon button tooltip", () => {
		component.revertActive = true;
		component.revertLabel = "Test revert label";
		fixture.detectChanges();
		const iconTooltip = hostEl.query(By.css("cds-icon-button cds-tooltip"));
		expect(iconTooltip).not.toBeNull();
		expect(iconTooltip.componentInstance.description).toBe("Test revert label");
	});
});

describe("AILabelActions", () => {
	let fixture: ComponentFixture<TestAILabelActionsComponent>;
	let actionsEl: DebugElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [AILabelModule],
			declarations: [TestAILabelActionsComponent]
		});
		fixture = TestBed.createComponent(TestAILabelActionsComponent);
		fixture.detectChanges();
		actionsEl = fixture.debugElement.query(By.directive(AILabelActions));
	});

	it("should apply toggletip-actions and ai-label-actions classes", () => {
		expect(actionsEl.nativeElement.classList.contains("cds--toggletip-actions")).toBe(true);
		expect(actionsEl.nativeElement.classList.contains("cds--ai-label-actions")).toBe(true);
	});
});
