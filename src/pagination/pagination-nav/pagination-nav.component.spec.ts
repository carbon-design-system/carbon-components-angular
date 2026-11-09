import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { I18nModule } from "../../i18n";
import { PaginationNav } from "./index";
import { PaginationOverflow } from "./pagination-overflow.component";
import { PaginationModule } from "../index";
import { PaginationModel } from "../pagination-model.class";

@Component({
	template: `
		<cds-pagination-nav
			[model]="model"
			[disabled]="disabled"
			[numOfItemsToShow]="4"
			(selectPage)="selectPage($event)" />
	`,
	imports: [
		PaginationNav
	]
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
			imports: [
				PaginationNavTest
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginationNavTest);
		paginationComponent = fixture.debugElement.query(
			By.css("cds-pagination-nav")
		);
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
		const navItems = paginationComponent.queryAll(
			By.css("cds-pagination-nav-item")
		);
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

@Component({
	template: `
		<cds-pagination-overflow
			[fromIndex]="fromIndex"
			[count]="count"
			(change)="selectedPage = $event">
		</cds-pagination-overflow>
	`,
	imports: [PaginationModule, I18nModule]
})
class PaginationOverflowTest {
	@ViewChild(PaginationOverflow) overflow: PaginationOverflow;
	fromIndex = 0;
	count = 5;
	selectedPage: number = null;
}

describe("PaginationOverflow", () => {
	let fixture: ComponentFixture<PaginationOverflowTest>;
	let wrapper: PaginationOverflowTest;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [PaginationOverflowTest]
		});

		fixture = TestBed.createComponent(PaginationOverflowTest);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
	});

	it("should work", () => {
		expect(wrapper.overflow instanceof PaginationOverflow).toBe(true);
	});

	it("should render a select with an option per page in the overflow", () => {
		const options = fixture.nativeElement.querySelectorAll("select option:not([hidden])");
		expect(options.length).toBe(5);
		expect(options[0].textContent.trim()).toBe("1");
		expect(options[4].textContent.trim()).toBe("5");
	});

	it("should emit the selected page on change", () => {
		const select = fixture.nativeElement.querySelector("select");
		select.selectedIndex = 3;
		select.dispatchEvent(new Event("change"));
		fixture.detectChanges();

		expect(wrapper.selectedPage).toBe(3);
	});

	it("should render more options as the page count grows", () => {
		expect(fixture.nativeElement.querySelectorAll("select option:not([hidden])").length).toBe(5);

		wrapper.count = 9;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelectorAll("select option:not([hidden])").length).toBe(9);
	});

	it("should renumber the options when the starting index moves", () => {
		wrapper.fromIndex = 10;
		fixture.detectChanges();

		const options = fixture.nativeElement.querySelectorAll("select option:not([hidden])");
		expect(options.length).toBe(5);
		expect(options[0].textContent.trim()).toBe("11");
		expect(options[4].textContent.trim()).toBe("15");
	});

	it("should collapse to a single nav item when the count drops to one", () => {
		wrapper.count = 1;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector("select")).toBeFalsy();
		expect(fixture.nativeElement.querySelector("cds-pagination-nav-item")).toBeTruthy();
	});
});
