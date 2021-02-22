import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	 } from "@angular/platform-browser";

import { Tabs } from "./tabs.component";
import { CommonModule } from "@angular/common";
import { Tab } from "./tab.component";
import { TabHeaders } from "./tab-headers.component";

@Component({
	template: `
		<ibm-tabs [followFocus]="followFocus" [isNavigation]="isNavigation">
			<ibm-tab heading="one" (selected)="onSelected()">Tab Content 1</ibm-tab>
			<ibm-tab heading="two">Tab Content 2</ibm-tab>
			<ibm-tab heading="three">Tab Content 3</ibm-tab>
		</ibm-tabs>
	`
})
class TabsTest {
	isNavigation = true;
	followFocus = true;
	onSelected() {}
}

describe("Sample", () => {
	let fixture, wrapper, element;

	const arrowRight = new KeyboardEvent("keydown", {
		"key": "ArrowRight"
	});
	const arrowLeft = new KeyboardEvent("keydown", {
		"key": "ArrowLeft"
	});

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				Tabs,
				Tab,
				TabHeaders,
				TabsTest
			],
			imports: [
				CommonModule
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TabsTest);
		wrapper = fixture.componentInstance;
		element = fixture.debugElement.query(By.css("ibm-tabs"));
		fixture.detectChanges();
	});

	it("should work", () => {
		const fixture = TestBed.createComponent(Tabs);
		expect(fixture.componentInstance instanceof Tabs).toBe(true);
	});

	it("should have 3 tabs", () => {
		expect(element.componentInstance.tabs.length).toBe(3);
	});

	it("should emit the selected event on click and change selected tab on keydown", () => {
		spyOn(wrapper, "onSelected");
		const navItem = element.nativeElement.querySelector(".bx--tabs--scrollable__nav-item");
		navItem.click();
		expect(wrapper.onSelected).toHaveBeenCalled();
	});

	it("should increment currentSelectedTab on right arrow and decrement on left arrow", () => {
		const navItem = element.nativeElement.querySelector(".bx--tabs--scrollable__nav-item");
		const tabHeaders = fixture.debugElement.query(By.css("ibm-tab-headers"));

		navItem.click();
		expect(tabHeaders.componentInstance.currentSelectedTab).toBe(0);

		tabHeaders.nativeElement.dispatchEvent(arrowRight);
		tabHeaders.nativeElement.dispatchEvent(arrowRight);
		fixture.detectChanges();
		expect(tabHeaders.componentInstance.currentSelectedTab).toBe(2);

		tabHeaders.nativeElement.dispatchEvent(arrowLeft);
		fixture.detectChanges();
		expect(tabHeaders.componentInstance.currentSelectedTab).toBe(1);
	});

	it("should set currentSelectedTab to the first tab on arrowRight when done on the last tab", () => {
		const navItem = element.nativeElement.querySelector(".bx--tabs--scrollable__nav-item");
		const tabHeaders = fixture.debugElement.query(By.css("ibm-tab-headers"));

		navItem.click();

		for (let i = 0; i < element.componentInstance.tabs.length; i++) {
			tabHeaders.nativeElement.dispatchEvent(arrowRight);
		}

		fixture.detectChanges();
		expect(tabHeaders.componentInstance.currentSelectedTab).toBe(0);
	});

	it("should set currentSelectedTab to the last tab on left arrow when done on the first tab", () => {
		const navItem = element.nativeElement.querySelector(".bx--tabs--scrollable__nav-item");
		const tabHeaders = fixture.debugElement.query(By.css("ibm-tab-headers"));
		navItem.click();
		tabHeaders.nativeElement.dispatchEvent(arrowLeft);
		fixture.detectChanges();
		expect(tabHeaders.componentInstance.currentSelectedTab).toBe(2);
	});

	it("should set tabIndex of all tabpanels to be null if isNavigation is false", () => {
		element.componentInstance.tabs.forEach(tab => {
			expect(tab.tabIndex).toBeFalsy();
		});
	});

	it("should set tabIndex of all tabpanels to be 0 if isNavigation is true", () => {
		fixture = TestBed.createComponent(TabsTest);
		wrapper = fixture.componentInstance;
		wrapper.isNavigation = false;
		element = fixture.debugElement.query(By.css("ibm-tabs"));
		fixture.detectChanges();
		element.componentInstance.tabs.forEach(tab => {
			expect(tab.tabIndex).toBe(0);
		});
	});
});
