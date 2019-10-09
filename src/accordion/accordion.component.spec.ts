import { TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { Component } from "@angular/core";
import { ChevronRight16Module } from "@carbon/icons-angular/lib/chevron--right/16";
import { AccordionItem } from "./accordion-item.component";
import { Accordion } from "./accordion.component";

@Component({
	template: `
	<ibm-accordion>
		<ibm-accordion-item
		[title]="title"
		[skeleton]="skeleton">
			test-content
		</ibm-accordion-item>
	<ibm-accordion>`
})
class AccordionTest {
	title = "Section 1";
	skeleton = "false";
}

describe("Accordion", () => {
	let fixture, wrapper, debugElement;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				Accordion,
				AccordionItem,
				AccordionTest
			],
			imports: [
				FormsModule,
				ChevronRight16Module
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(Accordion);
		expect(fixture.componentInstance instanceof Accordion).toBe(true);
	});

	it("should call onClick on button click", () => {
		fixture = TestBed.createComponent(AccordionTest);
		let debugElement = fixture.debugElement.query(By.css(".bx--accordion__heading"));
		fixture.detectChanges();
		spyOn(debugElement.componentInstance.selected, "emit");
		debugElement.triggerEventHandler("click", null);
		fixture.detectChanges();
		expect(debugElement.componentInstance.selected.emit).toHaveBeenCalled();
	});

	it("should expand on button click", () => {
		fixture = TestBed.createComponent(AccordionTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		debugElement = fixture.debugElement.query(By.css(".bx--accordion__heading"));
		debugElement.triggerEventHandler("click", null);
		fixture.detectChanges();
		expect(debugElement.nativeElement.getAttribute("aria-expanded")).toEqual("true");
	});

	it("should set test-content into accordion item", () => {
		fixture = TestBed.createComponent(AccordionTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		debugElement = fixture.debugElement.query(By.css("ibm-accordion .bx--accordion__content"));
		expect(debugElement.nativeElement.textContent).toContain("test-content");
	});

	it("should set ibm-accordion item title to 'Section 1'", () => {
		fixture = TestBed.createComponent(AccordionTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		debugElement = fixture.debugElement.query(By.css("ibm-accordion .bx--accordion__title"));
		expect(debugElement.nativeElement.textContent).toContain("Section 1");
	});
});
