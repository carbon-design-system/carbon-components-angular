/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import {Component} from "@angular/core";

import {TestBed, ComponentFixture, inject} from "@angular/core/testing";


import {createGenericTestComponent} from "../common/test";
import { CdlTabs } from "./tabs.component";
import { CdlTab } from "./tab.component";
import { CdlTabHeaders } from "./tab-headers.component";

const createTestComponent = (html: string) =>
		createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;


describe("Tabs", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [CdlTabs, CdlTab, CdlTabHeaders, TestComponent]});
	});

	it("should work", () => {
		const fixture = createTestComponent(`
			<cdl-tabs tabsPosition="bottom">
				<cdl-tab heading="tab1">
					tab 1 content
				</cdl-tab>
				<cdl-tab heading="tab2" active="true">
					tab 2 content
				</cdl-tab>
			</cdl-tabs>
		`);

		expect(fixture.componentInstance instanceof TestComponent).toBe(true);
	});

	it("should have 2 tabs", () => {
		const fixture = createTestComponent(`
			<cdl-tabs tabsPosition="bottom">
				<cdl-tab heading="tab1">
					tab 1 content
				</cdl-tab>
				<cdl-tab heading="tab2" active="true">
					tab 2 content
				</cdl-tab>
			</cdl-tabs>
		`);

		fixture.detectChanges();
		expect(fixture.nativeElement.querySelectorAll("div ul li").length).toBe(2);
	});

	it("first tab should be disabled", () => {
		const fixture = createTestComponent(`
			<cdl-tabs tabsPosition="bottom">
				<cdl-tab heading="tab1" disabled="true">
					tab 1 content
				</cdl-tab>
				<cdl-tab heading="tab2" active="true">
					tab 2 content
				</cdl-tab>
			</cdl-tabs>
		`);

		fixture.detectChanges();

		let allTabs = fixture.nativeElement.querySelectorAll("div ul li");
		expect(allTabs.length).toBe(2);
		expect(allTabs[0].querySelector("a").className).toBe("disabled-tab");
	});

	it("should have scroll", () => {
		const fixture = createTestComponent(`
			<div style="width: 100px;">
				<cdl-tabs tabsPosition="bottom">
					<cdl-tab heading="tab1">
						tab 1 content
					</cdl-tab>
					<cdl-tab heading="tab2">
						tab 2 content
					</cdl-tab>
					<cdl-tab heading="tab3">
						tab 2 content
					</cdl-tab>
					<cdl-tab heading="tab4">
						tab 2 content
					</cdl-tab>
				</cdl-tabs>
			</div>
		`);

		fixture.detectChanges();
		expect(fixture.nativeElement.querySelectorAll("div ul li").length).toBe(4);
		expect(fixture.nativeElement.querySelectorAll("div button").length).toBe(2);
	});
});


@Component({selector: "test-cmp", template: ""})
class TestComponent {
	changeCallback = (event: any) => {};
}
