import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component, DebugElement, Input } from "@angular/core";
import { By } from "@angular/platform-browser";

import { PopoverContainer, PopoverContent } from "./";

@Component({
	template: `
		<span
			cdsPopover
			[isOpen]="isOpen"
			[dropShadow]="dropShadow"
			[align]="align"
			[caret]="caret"
			[highContrast]="highContrast"
			[autoAlign]="autoAlign">
			<p>Popover trigger</p>
			<cds-popover-content>
				<div>
					<p>Popover content</p>
				</div>
			</cds-popover-content>
		</span>
		`,
	imports: [PopoverContent, PopoverContainer],
	standalone: true
})
class TestPopoverComponent {
	@Input() isOpen = false;
	@Input() dropShadow = true;
	@Input() align = "bottom";
	@Input() caret = true;
	@Input() highContrast = false;
	@Input() autoAlign = true;
}

describe("Popover", () => {
	let fixture: ComponentFixture<TestPopoverComponent>;
	let component: TestPopoverComponent;
	let popoverContainerElement: DebugElement;
	let popoverDirectiveEl: PopoverContainer;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [TestPopoverComponent]
		});
		fixture = TestBed.createComponent(TestPopoverComponent);
		component = fixture.componentInstance;
		popoverContainerElement = fixture.debugElement.query(By.directive(PopoverContainer));
		popoverDirectiveEl = popoverContainerElement.injector.get(PopoverContainer);
		fixture.detectChanges();
	});


	it("should create a popover container & content", () => {
		expect(component).toBeTruthy();
		expect(popoverContainerElement).not.toBeNull();
		expect(popoverContainerElement.nativeElement.className.includes("cds--popover-container")).toBeTruthy();

		const componentEl = fixture.debugElement.query(By.css("cds-popover-content"));
		expect(componentEl).not.toBeNull();
	});

	it("should open popover", () => {
		component.isOpen = true;
		component.caret = false;
		component.dropShadow = false;
		component.highContrast = true;
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(PopoverContainer)).nativeElement;
		expect(directiveEl.className.includes("cds--popover--open")).toBeTruthy();
		expect(directiveEl.className.includes("cds--popover--caret")).toBeFalsy();
		expect(directiveEl.className.includes("cds--popover--drop-shadow")).toBeFalsy();
		expect(directiveEl.className.includes("cds--popover--high-contrast")).toBeTruthy();
	});

	it("should apply appropriate classes based on property binding", () => {
		component.caret = false;
		component.dropShadow = false;
		component.highContrast = true;
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(PopoverContainer)).nativeElement;
		expect(directiveEl.className.includes("cds--popover--caret")).toBeFalsy();
		expect(directiveEl.className.includes("cds--popover--drop-shadow")).toBeFalsy();
		expect(directiveEl.className.includes("cds--popover--high-contrast")).toBeTruthy();
	});

	it("should set auto alignment class to wrapper and caret", () => {
		expect(popoverContainerElement.nativeElement.classList.contains("cds--popover--auto-align")).toBeTruthy();
		expect(popoverContainerElement.nativeElement.querySelector(".cds--popover-caret.cds--popover--auto-align")).toBeDefined();
	});

	it("should clean up auto placement on close when auto alignment is enabled", () => {
		spyOn(popoverDirectiveEl, "cleanUp");
		component.isOpen = true;
		fixture.detectChanges();
		component.isOpen = false;
		expect(popoverDirectiveEl.cleanUp).toHaveBeenCalled();
	});
});
