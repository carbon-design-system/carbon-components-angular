import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component, Input } from "@angular/core";
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
			[highContrast]="highContrast">
			<p>Popover trigger</p>
			<cds-popover-content>
				<div>
					<p>Popover content</p>
				</div>
			</cds-popover-content>
		</span>
		`
})
class TestPopoverComponent {
	@Input() isOpen = false;
	@Input() dropShadow = true;
	@Input() align = "bottom";
	@Input() caret = true;
	@Input() highContrast = false;
}

describe("Popover", () => {
	let fixture: ComponentFixture<TestPopoverComponent>;
	let component: TestPopoverComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestPopoverComponent, PopoverContainer, PopoverContent]
		});
		fixture = TestBed.createComponent(TestPopoverComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});


	it("should create a popover container & content", () => {
		expect(component).toBeTruthy();
		const directiveEl = fixture.debugElement.query(By.directive(PopoverContainer));
		expect(directiveEl).not.toBeNull();
		expect(directiveEl.nativeElement.className.includes("cds--popover-container")).toBeTruthy();

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
});
