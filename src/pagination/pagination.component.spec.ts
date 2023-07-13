import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

import { CommonModule } from "@angular/common";
import { I18nModule } from "carbon-components-angular/i18n";
import { ExperimentalModule } from "carbon-components-angular/experimental";
import { Pagination, PaginationModule } from "./index";
import { PaginationModel } from "./pagination-model.class";

@Component({
	template: `
		<cds-pagination
			[model]="model"
			[disabled]="disabled"
			[pageInputDisabled]="pageInputDisabled"
			[pagesUnknown]="pagesUnknown"
			(selectPage)="selectPage($event)">
		</cds-pagination>
	`
})
class PaginationTest implements OnInit {
	model = new PaginationModel();
	disabled = false;
	pageInputDisabled = false;
	pagesUnknown = false;

	selectPage(page) {
		this.model.currentPage = page;
	}

	ngOnInit() {
		this.model.pageLength = 10;
		this.model.currentPage = 1;
		this.model.totalDataLength = 105;
	}
}

describe("Pagination", () => {
	let fixture, wrapper, element, component;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginationTest ],
			imports: [
				CommonModule,
				FormsModule,
				PaginationModule,
				I18nModule,
				ExperimentalModule
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(Pagination);
		expect(fixture.componentInstance instanceof Pagination).toBe(true);
	});

	it("should emit selectPage with the correct page when current page changes", () => {
		fixture = TestBed.createComponent(PaginationTest);
		wrapper = fixture.componentInstance;
		spyOn(wrapper, "selectPage").and.callThrough();
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-pagination"));
		element.componentInstance.currentPage = 4;
		fixture.detectChanges();
		expect(wrapper.selectPage).toHaveBeenCalled();
		expect(wrapper.model.currentPage).toBe(4);
	});

	it("should get next page and previous page from the current page when nextPage and previousPage is called", () => {
		fixture = TestBed.createComponent(PaginationTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-pagination"));
		element.componentInstance.currentPage = 4;
		fixture.detectChanges();
		expect(element.componentInstance.nextPage).toBe(5);
		expect(element.componentInstance.previousPage).toBe(3);
	});

	it("should set endItemIndex to currentPage * pageLength and startItemIndex ", () => {
		fixture = TestBed.createComponent(PaginationTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-pagination"));
		element.componentInstance.model.pageLength = 107;
		fixture.detectChanges();
		expect(element.componentInstance.startItemIndex).toBe(1);
		expect(element.componentInstance.endItemIndex).toBe(105);
	});

	it("should set endItemIndex to totalDataLength and startItem index to 0", () => {
		fixture = TestBed.createComponent(PaginationTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-pagination"));
		element.componentInstance.model.pageLength = 107;
		fixture.detectChanges();
		expect(element.componentInstance.endItemIndex).toBe(105);
		element.componentInstance.currentPage = 0;
		fixture.detectChanges();
		expect(element.componentInstance.startItemIndex).toBe(0);
	});

	it("should get next page and previous page from the current page when forward/backwards button is clicked", () => {
		fixture = TestBed.createComponent(PaginationTest);
		wrapper = fixture.componentInstance;
		spyOn(wrapper, "selectPage").and.callThrough();
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-pagination"));
		element.nativeElement.querySelector(".cds--pagination__button--forward").click();
		fixture.detectChanges();
		expect(element.componentInstance.currentPage).toBe(2);
		expect(wrapper.model.currentPage).toBe(2);
		expect(wrapper.selectPage).toHaveBeenCalled();
		element.nativeElement.querySelector(".cds--pagination__button--backward").click();
		fixture.detectChanges();
		expect(element.componentInstance.currentPage).toBe(1);
		expect(wrapper.model.currentPage).toBe(1);
	});

	it("should disable the backward button when current page <= 1", () => {
		fixture = TestBed.createComponent(PaginationTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-pagination"));
		const buttonBackward = element.nativeElement.querySelector(".cds--pagination__button--backward");
		buttonBackward.click();
		fixture.detectChanges();
		expect(buttonBackward.disabled).toBe(true);
		expect(element.componentInstance.currentPage).toBe(1);
	});

	it("should disabled the forward and backward button when disabled is true", () => {
		fixture = TestBed.createComponent(PaginationTest);
		wrapper = fixture.componentInstance;
		wrapper.disabled = true;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-pagination"));
		element.componentInstance.currentPage = 5;
		const buttonForward = element.nativeElement.querySelector(".cds--pagination__button--forward");
		const buttonBackward = element.nativeElement.querySelector(".cds--pagination__button--forward");

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
