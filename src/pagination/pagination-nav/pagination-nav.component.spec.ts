import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { I18nModule } from "../../i18n";
import { ExperimentalModule } from "../../experimental";
import { PaginationNav } from "./index";
import { PaginationModule } from "../index";
import { PaginationModel } from "../pagination-model.class";

@Component({
	template: `
		<cds-pagination-nav
			[model]="model"
			[disabled]="disabled"
			[numOfItemsToShow]="4"
			(selectPage)="selectPage($event)">
		</cds-pagination-nav>
	`
})
class PaginationNavTest implements OnInit {
	model = new PaginationModel();
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
	let fixture, wrapper, paginationComponent;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginationNavTest ],
			imports: [
				CommonModule,
				FormsModule,
				PaginationModule,
				I18nModule,
				ExperimentalModule
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginationNavTest);
		paginationComponent = fixture.debugElement.query(By.css("cds-pagination-nav"));
	});

	it("should work", () => {
		expect(paginationComponent.componentInstance instanceof PaginationNav).toBe(true);
	});

	it("should emit selectPage with the correct page when current page changes", () => {
		wrapper = fixture.componentInstance;
		spyOn(wrapper, "selectPage").and.callThrough();
		fixture.detectChanges();
		paginationComponent.componentInstance.currentPage = 4;
		fixture.detectChanges();
		expect(wrapper.selectPage).toHaveBeenCalled();
		expect(wrapper.model.currentPage).toBe(4);
	});

	it("should move to a page when a user clicks on one", () => {
		wrapper = fixture.componentInstance;
		spyOn(wrapper, "selectPage").and.callThrough();
		fixture.detectChanges();
		const navItems = paginationComponent.queryAll(By.css("cds-pagination-nav-item"));
		navItems[1].nativeElement.click();
		expect(wrapper.selectPage).toHaveBeenCalled();
		expect(wrapper.model.currentPage).toBe(2);
	});

	it("should get next page and previous page from the current page when forward/backwards button is clicked", () => {
		wrapper = fixture.componentInstance;
		const buttons = paginationComponent.queryAll(By.css("cds-icon-button"));
		spyOn(wrapper, "selectPage").and.callThrough();
		fixture.detectChanges();
		buttons[1].nativeElement.querySelector("button").click();
		fixture.detectChanges();
		expect(paginationComponent.componentInstance.currentPage).toBe(2);
		expect(wrapper.model.currentPage).toBe(2);
		expect(wrapper.selectPage).toHaveBeenCalled();
		buttons[0].nativeElement.querySelector("button").click();
		fixture.detectChanges();
		expect(paginationComponent.componentInstance.currentPage).toBe(1);
		expect(wrapper.model.currentPage).toBe(1);
	});

	it("should disable the forward and backward button when disabled is true", () => {
		wrapper = fixture.componentInstance;
		wrapper.disabled = true;
		fixture.detectChanges();
		paginationComponent.componentInstance.currentPage = 5;
		const buttons = paginationComponent.queryAll(By.css("cds-icon-button"));
		const buttonBackward = buttons[0].nativeElement.querySelector("button");
		const buttonForward = buttons[1].nativeElement.querySelector("button");

		buttonForward.click();
		fixture.detectChanges();
		expect(buttonForward.disabled).toBe(true);
		expect(paginationComponent.componentInstance.currentPage).toBe(5);

		buttonBackward.click();
		fixture.detectChanges();
		expect(buttonBackward.disabled).toBe(true);
		expect(paginationComponent.componentInstance.currentPage).toBe(5);
	});
});
