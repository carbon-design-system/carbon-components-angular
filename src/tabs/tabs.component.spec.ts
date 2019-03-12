/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { StaticIconModule } from "./../icon/static-icon.module";

import { Tabs } from "./tabs.component";
import { Tab } from "./tab.component";
import { TabHeaders } from "./tab-headers.component";


describe("Tabs", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Tabs, Tab, TabHeaders, TabsTest],
			imports: [
				StaticIconModule
			]
		});
	});

	xit("should work", () => {
		// const fixture =

		// expect(fixture.componentInstance instanceof TabsTestComponent).toBe(true);
	});

	xit("should have 2 tabs", () => {
		// const fixture =

		// fixture.detectChanges();
		// expect(fixture.nativeElement.querySelectorAll("div ul li").length).toBe(2);
	});

	xit("first tab should be disabled", () => {
		// const fixture =

		// fixture.detectChanges();

		// let allTabs = fixture.nativeElement.querySelectorAll("div ul li");
		// expect(allTabs.length).toBe(2);
		// expect(allTabs[0].querySelector("a").className).toBe("disabled-tab");
	});

	// this test is taken out because the buttons are added in during the ngAfterViewInit(), which runs after detectChanges()
	// it("should have scroll", () => {
	// 	const fixture = createTestComponent(`
	// 	<div style="max-width: 600px">
	// 	<ibm-tabs>
	// 		<ibm-tab heading='Tab1'>
	// 			Tab 1 content
	// 		</ibm-tab>
	// 		<ibm-tab heading='Tab2 with a long header'>
	// 			Tab 2 content
	// 		</ibm-tab>
	// 		<ibm-tab heading='Tab3'>
	// 			Tab 3 content
	// 		</ibm-tab>
	// 		<ibm-tab heading='Tab4'>
	// 			Tab 4content
	// 		</ibm-tab>
	// 		<ibm-tab heading='Tab5 with a long header'>
	// 			Tab 5 content
	// 		</ibm-tab>
	// 		<ibm-tab heading='Tab6 with a long header'>
	// 			Tab 6 content
	// 		</ibm-tab>
	// 		<ibm-tab heading='Tab7'>
	// 			Tab 7 content
	// 		</ibm-tab>
	// 		<ibm-tab heading='Tab8'>
	// 			Tab 8 content
	// 		</ibm-tab>
	// 		<ibm-tab heading='Tab9 with a long header'>
	// 			Tab 9 content
	// 		</ibm-tab>
	// 		<ibm-tab heading='Tab10'>
	// 			Tab 10 content
	// 		</ibm-tab>
	// 		<ibm-tab heading='Tab11'>
	// 			Tab 11 content
	// 		</ibm-tab>
	// 		<ibm-tab heading='Tab12'>
	// 			tab 12 content
	// 		</ibm-tab>
	// 	</ibm-tabs>
	// </div>
	// 	`);
	// 	fixture.detectChanges();
	// 	expect(fixture.nativeElement.querySelectorAll("div ul li").length).toBe(12);
	// 	expect(fixture.nativeElement.querySelectorAll("div button").length).toBe(2);
	// });
});


@Component({selector: "test-cmp", template: ""})
class TabsTest {
	changeCallback = (event: any) => {};
}
