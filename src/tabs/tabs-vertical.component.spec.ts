import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, ViewChild } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import { I18nModule } from "../i18n";
import { UtilsModule } from "../utils";
import { Tab } from "./tab.component";
import { TabsVertical } from "./tabs-vertical.component";
import { TabsVerticalGrouped } from "./tabs-vertical-grouped.component";
import { TabHeadersVertical } from "./tab-headers-vertical.component";
import { TabSkeleton } from "./tab-skeleton.component";
import { TabsModule } from "./tabs.module";
import { advancedFakeAsync } from "../test-helpers/change-detection";

@Component({
	template: `
		<cds-tabs-vertical [followFocus]="followFocus" [cacheActive]="cacheActive">
			<cds-tab heading="one">Vertical content 1</cds-tab>
			<cds-tab heading="two">Vertical content 2</cds-tab>
			<cds-tab heading="three">Vertical content 3</cds-tab>
		</cds-tabs-vertical>
	`,
	imports: [UtilsModule, I18nModule, TabsModule]
})
class TabsVerticalTest {
	@ViewChild(TabsVertical) tabs: TabsVertical;
	followFocus = true;
	cacheActive = false;
}

describe("TabsVertical", () => {
	let fixture: ComponentFixture<TabsVerticalTest>;

	function build(): DebugElement[] {
		fixture = TestBed.createComponent(TabsVerticalTest);
		fixture.detectChanges();
		return fixture.debugElement.queryAll(By.directive(Tab));
	}

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [TabsVerticalTest],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		});
	});

	it("should work", () => {
		build();
		expect(fixture.componentInstance.tabs instanceof TabsVertical).toBe(true);
	});

	it("should render a vertical header row", () => {
		build();
		expect(fixture.debugElement.query(By.directive(TabHeadersVertical))).toBeTruthy();
		expect(fixture.nativeElement.querySelectorAll(".cds--tabs__nav-item").length).toBe(3);
	});

	it("should activate the first tab on init", fakeAsync(() => {
		const tabElements = build();
		expect(tabElements[0].componentInstance.active).toBe(false);

		advancedFakeAsync(fixture);

		expect(tabElements[0].componentInstance.active).toBe(true);
		expect(tabElements[0].nativeElement.getAttribute("hidden")).toBeNull();
		expect(tabElements[0].nativeElement.textContent.trim()).toBe("Vertical content 1");
	}));

	it("should keep the other tabs hidden", fakeAsync(() => {
		const tabElements = build();
		advancedFakeAsync(fixture);

		expect(tabElements[1].nativeElement.getAttribute("hidden")).toBe("");
		expect(tabElements[2].nativeElement.getAttribute("hidden")).toBe("");
	}));

	it("should move the active state between tabs when a header is clicked", fakeAsync(() => {
		const tabElements = build();
		advancedFakeAsync(fixture);

		fixture.nativeElement.querySelectorAll(".cds--tabs__nav-item")[2].click();
		advancedFakeAsync(fixture);

		expect(tabElements[0].componentInstance.active).toBe(false);
		expect(tabElements[2].componentInstance.active).toBe(true);
		expect(tabElements[2].nativeElement.getAttribute("hidden")).toBeNull();
	}));

});

@Component({
	template: `
		<cds-tabs-vertical-grouped>
			<cds-tabs-vertical [skeleton]="skeleton">
				<cds-tab heading="one">content</cds-tab>
			</cds-tabs-vertical>
		</cds-tabs-vertical-grouped>
	`,
	imports: [UtilsModule, I18nModule, TabsModule]
})
class TabsVerticalGroupedTest {
	@ViewChild(TabsVerticalGrouped) grouped: TabsVerticalGrouped;
	skeleton = false;
}

describe("TabsVerticalGrouped", () => {
	let fixture: ComponentFixture<TabsVerticalGroupedTest>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [TabsVerticalGroupedTest],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		});

		fixture = TestBed.createComponent(TabsVerticalGroupedTest);
		fixture.detectChanges();
	});

	it("should work", () => {
		expect(fixture.componentInstance.grouped instanceof TabsVerticalGrouped).toBe(true);
	});

	it("should project its content", () => {
		expect(fixture.debugElement.query(By.directive(TabsVertical))).toBeTruthy();
	});

	it("should swap between the skeleton and the real headers", () => {
		expect(fixture.debugElement.query(By.directive(TabSkeleton))).toBeFalsy();

		fixture.componentInstance.skeleton = true;
		fixture.detectChanges();

		expect(fixture.debugElement.query(By.directive(TabSkeleton))).toBeTruthy();
		expect(fixture.nativeElement.querySelectorAll(".cds--tabs__nav-item").length).toBeGreaterThan(0);
	});
});
