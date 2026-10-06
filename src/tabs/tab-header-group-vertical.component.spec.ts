import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, ViewChild } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import { I18nModule } from "../i18n";
import { UtilsModule } from "../utils";
import { Tab } from "./tab.component";
import { TabsModule } from "./tabs.module";
import { TabHeaderGroupVertical } from "./tab-header-group-vertical.component";
import { advancedFakeAsync } from "../test-helpers/change-detection";

@Component({
	template: `
		<cds-tabs-vertical-grouped>
			<cds-tab-header-group-vertical [followFocus]="followFocus" [cacheActive]="cacheActive">
				<cds-tab-header [paneReference]="vp1">Dashboard</cds-tab-header>
				<cds-tab-header [paneReference]="vp2">Monitoring</cds-tab-header>
				<cds-tab-header [paneReference]="vp3">Analyze</cds-tab-header>
			</cds-tab-header-group-vertical>

			<cds-tab #vp1>Vertical content 1</cds-tab>
			<cds-tab #vp2>Vertical content 2</cds-tab>
			<cds-tab #vp3>Vertical content 3</cds-tab>
		</cds-tabs-vertical-grouped>
	`
})
class TabHeaderGroupVerticalTest {
	@ViewChild(TabHeaderGroupVertical) group: TabHeaderGroupVertical;
	followFocus = true;
	cacheActive = false;
}

describe("TabHeaderGroupVertical", () => {
	let fixture: ComponentFixture<TabHeaderGroupVerticalTest>;

	function build(): DebugElement[] {
		fixture = TestBed.createComponent(TabHeaderGroupVerticalTest);
		fixture.detectChanges();
		return fixture.debugElement.queryAll(By.directive(Tab));
	}

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TabHeaderGroupVerticalTest],
			imports: [CommonModule, UtilsModule, I18nModule, TabsModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		});
	});

	it("should work", () => {
		build();
		expect(fixture.componentInstance.group instanceof TabHeaderGroupVertical).toBe(true);
	});

	it("should render the projected headers in a tablist", () => {
		build();

		const tabList = fixture.nativeElement.querySelector(".cds--tab--list");
		expect(tabList.getAttribute("role")).toBe("tablist");
		expect(fixture.nativeElement.querySelectorAll("cds-tab-header").length).toBe(3);
	});

	it("should activate the first tab and its pane on init", fakeAsync(() => {
		const panes = build();
		expect(panes[0].componentInstance.active).toBe(false);

		advancedFakeAsync(fixture);

		expect(fixture.componentInstance.group.currentSelectedTab).toBe(0);
		expect(panes[0].componentInstance.active).toBe(true);
		expect(panes[0].nativeElement.getAttribute("hidden")).toBeNull();
		expect(panes[0].nativeElement.textContent.trim()).toBe("Vertical content 1");
	}));

	it("should keep the other panes hidden", fakeAsync(() => {
		const panes = build();
		advancedFakeAsync(fixture);

		expect(panes[1].nativeElement.getAttribute("hidden")).toBe("");
		expect(panes[2].nativeElement.getAttribute("hidden")).toBe("");
	}));

	it("should deactivate the previously selected pane", fakeAsync(() => {
		const panes = build();
		advancedFakeAsync(fixture);
		expect(panes[0].componentInstance.active).toBe(true);

		fixture.nativeElement.querySelectorAll("cds-tab-header button")[2].click();
		advancedFakeAsync(fixture);

		expect(panes[0].componentInstance.active).toBe(false);
		expect(panes[2].componentInstance.active).toBe(true);
		expect(panes[0].nativeElement.getAttribute("hidden")).toBe("");
		expect(panes[2].nativeElement.getAttribute("hidden")).toBeNull();
		expect(fixture.componentInstance.group.currentSelectedTab).toBe(2);
	}));

	it("should give every header the cacheActive setting", fakeAsync(() => {
		build();
		advancedFakeAsync(fixture);

		fixture.componentInstance.cacheActive = true;
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		const headers = fixture.debugElement.queryAll(By.css("cds-tab-header"));
		headers.forEach(header => expect(header.componentInstance.cacheActive).toBe(true));
	}));

	it("should show the overflow gradient when the list overflows", fakeAsync(() => {
		build();
		advancedFakeAsync(fixture);

		const group = fixture.componentInstance.group;
		expect(fixture.nativeElement.querySelector(".cds--tab--list-gradient_bottom")).toBeFalsy();

		group.isOverflowingBottom = true;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector(".cds--tab--list-gradient_bottom")).toBeTruthy();
	}));
});
