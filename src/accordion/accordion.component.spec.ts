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
		(selected)="onClick()"
		title="Section 1"
		[skeleton]="false">
		test-content
	</ibm-accordion-item>`
})
class AccordionTest {
	onClick() {}
}

describe("Accordion", () => {
	let fixture, wrapper, element;
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
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".bx--accordion__heading"));
		spyOn(wrapper, "onClick");
		element.triggerEventHandler("click", null);
		fixture.detectChanges();
		expect(wrapper.onClick).toHaveBeenCalled();
	});

	it("should expand on button click", () => {
		fixture = TestBed.createComponent(AccordionTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".bx--accordion__heading"));
		element.triggerEventHandler("click", null);
		fixture.detectChanges();
		expect(element.nativeElement.getAttribute("aria-expanded")).toEqual("true");
	});

	it("should set test-content into accordion item", () => {
		fixture = TestBed.createComponent(AccordionTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-accordion .bx--accordion__content"));
		expect(element.nativeElement.textContent).toEqual(" test-content ");
	});

	it("should set ibm-accordion item title to Section 1", () => {
		fixture = TestBed.createComponent(AccordionTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-accordion .bx--accordion__title"));
		expect(element.nativeElement.textContent).toEqual(" Section 1 ");
	});
});
