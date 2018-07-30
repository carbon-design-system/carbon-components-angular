/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { Component } from "@angular/core";
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from "@ngx-translate/core";

import { TestBed, ComponentFixture, inject } from "@angular/core/testing";
import { StaticIconModule } from "./../icon/static-icon.module";


import { createGenericTestComponent } from "../common/test";
import { Tabs } from "./tabs.component";
import { Tab } from "./tab.component";
import { TabHeaders } from "./tab-headers.component";

const createTestComponent = (html: string) =>
		createGenericTestComponent(html, TabsTestComponent) as ComponentFixture<TabsTestComponent>;


describe("Tabs", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Tabs, Tab, TabHeaders, TabsTestComponent],
			imports: [
				TranslateModule.forRoot({loader: {provide: TranslateLoader, useClass: TranslateFakeLoader}}),
				StaticIconModule
			]
		});
	});

	it("should work", () => {
		const fixture = createTestComponent(`
			<ibm-tabs tabsPosition="bottom">
				<ibm-tab heading="tab1">
					tab 1 content
				</ibm-tab>
				<ibm-tab heading="tab2" active="true">
					tab 2 content
				</ibm-tab>
			</ibm-tabs>
		`);

		expect(fixture.componentInstance instanceof TabsTestComponent).toBe(true);
	});

	it("should have 2 tabs", () => {
		const fixture = createTestComponent(`
			<ibm-tabs tabsPosition="bottom">
				<ibm-tab heading="tab1">
					tab 1 content
				</ibm-tab>
				<ibm-tab heading="tab2" active="true">
					tab 2 content
				</ibm-tab>
			</ibm-tabs>
		`);

		fixture.detectChanges();
		expect(fixture.nativeElement.querySelectorAll("div ul li").length).toBe(2);
	});

	it("first tab should be disabled", () => {
		const fixture = createTestComponent(`
			<ibm-tabs tabsPosition="bottom">
				<ibm-tab heading="tab1" disabled="true">
					tab 1 content
				</ibm-tab>
				<ibm-tab heading="tab2" active="true">
					tab 2 content
				</ibm-tab>
			</ibm-tabs>
		`);

		fixture.detectChanges();

		let allTabs = fixture.nativeElement.querySelectorAll("div ul li");
		expect(allTabs.length).toBe(2);
		expect(allTabs[0].querySelector("a").className).toBe("disabled-tab");
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
class TabsTestComponent {
	changeCallback = (event: any) => {};
}
