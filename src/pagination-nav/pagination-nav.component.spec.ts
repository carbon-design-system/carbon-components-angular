import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

import { CommonModule } from "@angular/common";
import { I18nModule } from "carbon-components-angular/i18n";
import { ExperimentalModule } from "carbon-components-angular/experimental";
import { PaginationNav, PaginationNavModule } from "./index";
import { PaginationNavModel } from "./pagination-nav-model.class";

@Component({
	template: `
		<ibm-pagination-nav
			[model]="model"
			[disabled]="disabled"
			[numOfItemsToShow]="4"
			(selectPage)="selectPage($event)">
		</ibm-pagination-nav>
	`
})
class PaginationNavTest implements OnInit {
	model = new PaginationNavModel();
	disabled = false;

	selectPage(page) {
		this.model.currentPage = page;
	}

	ngOnInit() {
		this.model.currentPage = 1;
		this.model.totalDataLength = 105;
	}
}

describe("PaginationNav", () => {
	let fixture, wrapper, element, component;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginationNavTest ],
			imports: [
				CommonModule,
				FormsModule,
				PaginationNavModule,
				I18nModule,
				ExperimentalModule
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(PaginationNavTest);
		expect(fixture.componentInstance instanceof PaginationNav).toBe(true);
	});

	it("should emit selectPage with the correct page when current page changes", () => {
		fixture = TestBed.createComponent(PaginationNavTest);
		wrapper = fixture.componentInstance;
		spyOn(wrapper, "selectPage").and.callThrough();
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-pagination-nav"));
		element.componentInstance.currentPage = 4;
		fixture.detectChanges();
		expect(wrapper.selectPage).toHaveBeenCalled();
		expect(wrapper.model.currentPage).toBe(4);
	});

	it("should get next page and previous page from the current page when nextPage and previousPage is called", () => {
		fixture = TestBed.createComponent(PaginationNavTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-pagination-nav"));
		element.componentInstance.currentPage = 4;
		fixture.detectChanges();
		expect(element.componentInstance.nextPage).toBe(5);
		expect(element.componentInstance.previousPage).toBe(3);
	});

	it("should get next page and previous page from the current page when forward/backwards button is clicked", () => {
		fixture = TestBed.createComponent(PaginationNavTest);
		wrapper = fixture.componentInstance;
		spyOn(wrapper, "selectPage").and.callThrough();
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-pagination"));
		element.nativeElement.querySelector(".bx--pagination__button--forward").click();
		fixture.detectChanges();
		expect(element.componentInstance.currentPage).toBe(2);
		expect(wrapper.model.currentPage).toBe(2);
		expect(wrapper.selectPage).toHaveBeenCalled();
		element.nativeElement.querySelector(".bx--pagination__button--backward").click();
		fixture.detectChanges();
		expect(element.componentInstance.currentPage).toBe(1);
		expect(wrapper.model.currentPage).toBe(1);
	});

	it("should disabled the forward and backward button when disabled is true", () => {
		fixture = TestBed.createComponent(PaginationNavTest);
		wrapper = fixture.componentInstance;
		wrapper.disabled = true;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-pagination"));
		element.componentInstance.currentPage = 5;
		const buttonForward = element.nativeElement.querySelector(".bx--pagination__button--forward");
		const buttonBackward = element.nativeElement.querySelector(".bx--pagination__button--forward");

		buttonForward.click();
		fixture.detectChanges();
		expect(buttonForward.disabled).toBe(true);
		expect(element.componentInstance.currentPage).toBe(5);

		buttonBackward.click();
		fixture.detectChanges();
		expect(buttonBackward.disabled).toBe(true);
		expect(element.componentInstance.currentPage).toBe(5);
	});
});
