/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { Component } from "@angular/core";

import { TestBed, ComponentFixture, inject } from "@angular/core/testing";

import { createGenericTestComponent } from "../common/test";
import { Tabs } from "./tabs.component";
import { Tab } from "./tab.component";
import { TabHeaders } from "./tab-headers.component";

const createTestComponent = (html: string) =>
		createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;


describe("Tabs", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [Tabs, Tab, TabHeaders, TestComponent]});
	});

	it("should work", () => {
		const fixture = createTestComponent(`
			<n-tabs tabsPosition="bottom">
				<n-tab heading="tab1">
					tab 1 content
				</n-tab>
				<n-tab heading="tab2" active="true">
					tab 2 content
				</n-tab>
			</n-tabs>
		`);

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
	});

	it("should have 2 tabs", () => {
		const fixture = createTestComponent(`
			<n-tabs tabsPosition="bottom">
				<n-tab heading="tab1">
					tab 1 content
				</n-tab>
				<n-tab heading="tab2" active="true">
					tab 2 content
				</n-tab>
			</n-tabs>
		`);

		fixture.detectChanges();
		expect(fixture.nativeElement.querySelectorAll("div ul li").length).toBe(2);
	});

	it("first tab should be disabled", () => {
		const fixture = createTestComponent(`
			<n-tabs tabsPosition="bottom">
				<n-tab heading="tab1" disabled="true">
					tab 1 content
				</n-tab>
				<n-tab heading="tab2" active="true">
					tab 2 content
				</n-tab>
			</n-tabs>
		`);

		fixture.detectChanges();

		let allTabs = fixture.nativeElement.querySelectorAll("div ul li");
		expect(allTabs.length).toBe(2);
		expect(allTabs[0].querySelector("a").className).toBe("disabled-tab");
	});

	// it("should have scroll", () => {
	// 	const fixture = createTestComponent(`
	// 	<div style="max-width: 600px">
	// 	<n-tabs>
	// 		<n-tab heading='Tab1'>
	// 			Tab 1 content
	// 		</n-tab>
	// 		<n-tab heading='Tab2 with a long header'>
	// 			Tab 2 content
	// 		</n-tab>
	// 		<n-tab heading='Tab3'>
	// 			Tab 3 content
	// 		</n-tab>
	// 		<n-tab heading='Tab4'>
	// 			Tab 4content
	// 		</n-tab>
	// 		<n-tab heading='Tab5 with a long header'>
	// 			Tab 5 content
	// 		</n-tab>
	// 		<n-tab heading='Tab6 with a long header'>
	// 			Tab 6 content
	// 		</n-tab>
	// 		<n-tab heading='Tab7'>
	// 			Tab 7 content
	// 		</n-tab>
	// 		<n-tab heading='Tab8'>
	// 			Tab 8 content
	// 		</n-tab>
	// 		<n-tab heading='Tab9 with a long header'>
	// 			Tab 9 content
	// 		</n-tab>
	// 		<n-tab heading='Tab10'>
	// 			Tab 10 content
	// 		</n-tab>
	// 		<n-tab heading='Tab11'>
	// 			Tab 11 content
	// 		</n-tab>
	// 		<n-tab heading='Tab12'>
	// 			tab 12 content
	// 		</n-tab>
	// 	</n-tabs>
	// </div>
	// 	`);
	// 	fixture.detectChanges();
	// 	expect(fixture.nativeElement.querySelectorAll("div ul li").length).toBe(12);
	// 	expect(fixture.nativeElement.querySelectorAll("div button").length).toBe(2);
	// });
});


@Component({selector: "test-cmp", template: ""})
class TestComponent {
	changeCallback = (event: any) => {};
}
