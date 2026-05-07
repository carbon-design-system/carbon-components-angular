import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { I18nModule } from "../i18n";
import { UtilsModule } from "../utils";
import { TabsModule } from "./tabs.module";
import { IconModule } from "../icon";

describe("Tabs — Tab header group approach", () => {
	function configureDeclarations(components: any[]) {
		TestBed.configureTestingModule({
			imports: [
				TabsModule,
				UtilsModule,
				I18nModule,
				IconModule
			],
			declarations: components,
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		});
	}

	function tabButtons(root: HTMLElement) {
		return Array.from(root.querySelectorAll<HTMLElement>("[role='tab']"));
	}

	beforeEach(() => {
		configureDeclarations([
			HGInitialSelectionSecondTest,
			HGCustomClassOnTabHostTest,
			HGConditionalTabTest,
			HGSecondaryLabelContainedTest,
			HGContentProjectionLabeledIconTabTest,
			HGIconTabBadgeTest,
			HGDismissableTabsTest,
			HGKeyboardNavigationTest,
			HGManualActivationTest,
			HGTabPanelVisibilityTest,
			HGSelectedOutputTest,
			HGFullWidthContainedTest,
			TabHeaderGroupPaneRefSwitchTest
		]);
	});

	it("should use the tab marked `active` as the initial selection", fakeAsync(() => {
		const fixture = TestBed.createComponent(HGInitialSelectionSecondTest);
		fixture.detectChanges();
		tick();
		fixture.detectChanges();
		const buttons = tabButtons(fixture.nativeElement);
		expect(buttons[0].getAttribute("aria-selected")).toBe("false");
		expect(buttons[1].getAttribute("aria-selected")).toBe("true");
	}));

	it("should allow a custom class on the tab panel host", () => {
		const fixture = TestBed.createComponent(HGCustomClassOnTabHostTest);
		fixture.detectChanges();
		const panel = fixture.debugElement.query(By.css(".my-panel"));
		expect(panel).toBeTruthy();
		expect(panel.nativeElement).toHaveClass("custom-class");
	});

	it("should not render tabs excluded with @if", () => {
		const fixture = TestBed.createComponent(HGConditionalTabTest);
		fixture.detectChanges();
		const buttons = tabButtons(fixture.nativeElement);
		expect(buttons.length).toBe(2);
	});

	it("should show `secondaryLabel` when parent tabs use `type=contained`", () => {
		const fixture = TestBed.createComponent(HGSecondaryLabelContainedTest);
		fixture.detectChanges();
		expect(
			(fixture.nativeElement as HTMLElement).textContent
		).toContain("test-secondary");
	});

	it("should render a labeled tab's `icon` template in the tab list", () => {
		const fixture = TestBed.createComponent(HGContentProjectionLabeledIconTabTest);
		fixture.detectChanges();
		const el = fixture.nativeElement as HTMLElement;
		const iconHost = el.querySelector(".cds--tabs__nav-item--icon");
		expect(iconHost).toBeTruthy();
		expect(el.querySelector(".hg-projection-icon")).not.toBeNull();
	});

	it("should render a badge node on an icon tab when `badgeIndicator` is true", () => {
		const fixture = TestBed.createComponent(HGIconTabBadgeTest);
		fixture.detectChanges();
		const badge = fixture.nativeElement.querySelector(".cds--badge-indicator");
		expect(badge).not.toBeNull();
	});

	it("should emit tab index when a dismissable close control is used", () => {
		const fixture = TestBed.createComponent(HGDismissableTabsTest);
		const comp = fixture.componentInstance;
		spyOn(comp, "onTabClose");
		fixture.detectChanges();
		const closeBtn = (fixture.nativeElement as HTMLElement).querySelector(
			".cds--tabs__nav-item--close-icon"
		) as HTMLButtonElement;
		expect(closeBtn).toBeTruthy();
		closeBtn.click();
		expect(comp.onTabClose).toHaveBeenCalledWith(0);
	});

	it("should move selection with ArrowLeft / ArrowRight / Home / End (automatic activation)", fakeAsync(() => {
		const fixture = TestBed.createComponent(HGKeyboardNavigationTest);
		fixture.detectChanges();
		tick();
		fixture.detectChanges();
		const host = fixture.debugElement.query(By.css("cds-tab-header-group"));
		const t = tabButtons(fixture.nativeElement);
		t[0].focus();

		const nav = (key: string) => {
			host.nativeElement.dispatchEvent(
				new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true })
			);
			fixture.detectChanges();
		};

		expect(t[0].getAttribute("aria-selected")).toBe("true");

		nav("ArrowRight");
		expect(t[1].getAttribute("aria-selected")).toBe("true");

		nav("ArrowLeft");
		expect(t[0].getAttribute("aria-selected")).toBe("true");

		nav("End");
		expect(t[2].getAttribute("aria-selected")).toBe("true");

		nav("Home");
		expect(t[0].getAttribute("aria-selected")).toBe("true");
	}));

	it("with followFocus false, should activate the focused tab on Space", fakeAsync(() => {
		const fixture = TestBed.createComponent(HGManualActivationTest);
		fixture.detectChanges();
		tick();
		fixture.detectChanges();
		const host = fixture.debugElement.query(By.css("cds-tab-header-group"));
		const t = tabButtons(fixture.nativeElement);
		t[0].focus();
		host.nativeElement.dispatchEvent(
			new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true, cancelable: true })
		);
		fixture.detectChanges();
		expect(t[0].getAttribute("aria-selected")).toBe("true");
		expect(t[1].getAttribute("aria-selected")).toBe("false");
		t[1].dispatchEvent(
			new KeyboardEvent("keydown", { key: " ", bubbles: true, cancelable: true })
		);
		fixture.detectChanges();
		expect(t[1].getAttribute("aria-selected")).toBe("true");
	}));

	it("should only expose the active panel to accessibility as the visible tabpanel", fakeAsync(() => {
		const fixture = TestBed.createComponent(HGTabPanelVisibilityTest);
		fixture.detectChanges();
		tick();
		fixture.detectChanges();
		const visible = visibleTabpanels(fixture.nativeElement);
		expect(visible.length).toBe(1);
		expect(visible[0].textContent).toContain("One content");
	}));

	it("should emit `selected` when a non-disabled tab header is activated", () => {
		const fixture = TestBed.createComponent(HGSelectedOutputTest);
		const comp = fixture.componentInstance;
		spyOn(comp, "onFirstSelected");
		fixture.detectChanges();
		tabButtons(fixture.nativeElement)[0].click();
		expect(comp.onFirstSelected).toHaveBeenCalled();
	});

	it("should add full-width class on contained `cds-tab-header-group` when `fullWidth` is true", () => {
		const fixture = TestBed.createComponent(HGFullWidthContainedTest);
		fixture.detectChanges();
		const tabsHost = fixture.debugElement.query(By.css(".cds--tabs"));
		expect(tabsHost.nativeElement).toHaveClass("cds--tabs--full-width");
	});

	it("should show the matching tab body when a tab header is selected", fakeAsync(() => {
		const fixture = TestBed.createComponent(TabHeaderGroupPaneRefSwitchTest);
		fixture.detectChanges();
		tick();
		fixture.detectChanges();
		const buttons = tabButtons(fixture.nativeElement);
		expect(buttons[0].getAttribute("aria-selected")).toBe("true");
		let visible = visibleTabpanels(fixture.nativeElement);
		expect(visible.length).toBe(1);
		expect(visible[0].textContent).toContain("First body");

		buttons[1].click();
		fixture.detectChanges();
		expect(buttons[1].getAttribute("aria-selected")).toBe("true");
		visible = visibleTabpanels(fixture.nativeElement);
		expect(visible.length).toBe(1);
		expect(visible[0].textContent).toContain("Second body");
	}));
});

function visibleTabpanels(root: HTMLElement): HTMLElement[] {
	return Array.from(root.querySelectorAll<HTMLElement>("[role='tabpanel']")).filter(
		(el: HTMLElement) => el.getAttribute("hidden") == null
	);
}

@Component({
	template: `
		<cds-tab-header-group [ariaLabel]="'List of tabs'">
			<cds-tab-header [paneReference]="t1">Tab Label 1</cds-tab-header>
			<cds-tab-header [paneReference]="t2">Tab Label 2</cds-tab-header>
			<cds-tab-header [paneReference]="t3">Tab Label 3</cds-tab-header>
		</cds-tab-header-group>
		<cds-tab #t1>Panel 1</cds-tab>
		<cds-tab #t2 [active]="true">Panel 2</cds-tab>
		<cds-tab #t3>Panel 3</cds-tab>
	`
})
class HGInitialSelectionSecondTest {}

@Component({
	template: `
		<cds-tab-header-group [ariaLabel]="'List of tabs'">
			<cds-tab-header [paneReference]="p1">One</cds-tab-header>
			<cds-tab-header [paneReference]="p2">Two</cds-tab-header>
		</cds-tab-header-group>
		<cds-tab #p1 class="my-panel custom-class">Tab Panel 1</cds-tab>
		<cds-tab #p2>Tab Panel 2</cds-tab>
	`
})
class HGCustomClassOnTabHostTest {}

@Component({
	template: `
		<cds-tab-header-group [ariaLabel]="'List of tabs'">
			<cds-tab-header [paneReference]="t1">One</cds-tab-header>
			@if (false) {
				<cds-tab-header [paneReference]="excluded">Excluded</cds-tab-header>
			}
			<cds-tab-header [paneReference]="t2">Two</cds-tab-header>
		</cds-tab-header-group>
		<cds-tab #t1>A</cds-tab>
		@if (false) {
			<cds-tab #excluded>X</cds-tab>
		}
		<cds-tab #t2>B</cds-tab>
	`
})
class HGConditionalTabTest {}

@Component({
	template: `
		<cds-tab-header-group [type]="'contained'" [ariaLabel]="'List of tabs'">
			<cds-tab-header [paneReference]="s1" [secondaryLabel]="'test-secondary'">One</cds-tab-header>
			<cds-tab-header [paneReference]="s2">Two</cds-tab-header>
		</cds-tab-header-group>
		<cds-tab #s1>A</cds-tab>
		<cds-tab #s2>B</cds-tab>
	`
})
class HGSecondaryLabelContainedTest {}

@Component({
	template: `
		<ng-template #iconTpl>
			<svg
				class="hg-projection-icon"
				aria-hidden="true"
				ibmIcon="bee"
				size="16">
			</svg>
		</ng-template>
		<cds-tab-header-group [cacheActive]="true" [ariaLabel]="'List of tabs'">
			<cds-tab-header [paneReference]="p1" [icon]="iconTpl" title="First">First</cds-tab-header>
			<cds-tab-header [paneReference]="p2" title="Second">Second</cds-tab-header>
		</cds-tab-header-group>
		<cds-tab #p1>First body</cds-tab>
		<cds-tab #p2>Second body</cds-tab>
	`
})
class HGContentProjectionLabeledIconTabTest {}

@Component({
	template: `
		<ng-template #iconTpl>
			<svg
				class="hg-icononly-icon"
				aria-hidden="true"
				ibmIcon="bee"
				size="16">
			</svg>
		</ng-template>
		<cds-tab-header-group [cacheActive]="true" [iconSize]="'lg'" [ariaLabel]="'List of tabs'">
			<cds-tab-header
				[paneReference]="only1"
				[icon]="iconTpl"
				[iconOnly]="true"
				iconLabel="Notifications"
				[badgeIndicator]="true">
			</cds-tab-header>
		</cds-tab-header-group>
		<cds-tab #only1>Icon-only body</cds-tab>
	`
})
class HGIconTabBadgeTest {}

@Component({
	template: `
		<cds-tab-header-group [cacheActive]="true" [ariaLabel]="'List of tabs'">
			<cds-tab-header [paneReference]="a">One</cds-tab-header>
			<cds-tab-header [paneReference]="b">Two</cds-tab-header>
		</cds-tab-header-group>
		<cds-tab #a>First body</cds-tab>
		<cds-tab #b>Second body</cds-tab>
	`
})
class TabHeaderGroupPaneRefSwitchTest {}

@Component({
	template: `
		<cds-tab-header-group
			[dismissable]="true"
			[ariaLabel]="'List of tabs'"
			(tabClose)="onTabClose($event)">
			<cds-tab-header [paneReference]="d1" [dismissable]="true" title="Tab Label 1"></cds-tab-header>
			<cds-tab-header [paneReference]="d2" [dismissable]="true" title="Tab Label 2"></cds-tab-header>
		</cds-tab-header-group>
		<cds-tab #d1>P1</cds-tab>
		<cds-tab #d2>P2</cds-tab>
	`
})
class HGDismissableTabsTest {
	onTabClose(_: number) {}
}

@Component({
	template: `
		<cds-tab-header-group [followFocus]="true" [ariaLabel]="'List of tabs'">
			<cds-tab-header [paneReference]="k1">Tab Label 1</cds-tab-header>
			<cds-tab-header [paneReference]="k2">Tab Label 2</cds-tab-header>
			<cds-tab-header [paneReference]="k3">Tab Label 3</cds-tab-header>
		</cds-tab-header-group>
		<cds-tab #k1>P1</cds-tab>
		<cds-tab #k2>P2</cds-tab>
		<cds-tab #k3>P3</cds-tab>
	`
})
class HGKeyboardNavigationTest {}

@Component({
	template: `
		<cds-tab-header-group [followFocus]="false" [ariaLabel]="'List of tabs'">
			<cds-tab-header [paneReference]="m1">Tab Label 1</cds-tab-header>
			<cds-tab-header [paneReference]="m2">Tab Label 2</cds-tab-header>
			<cds-tab-header [paneReference]="m3">Tab Label 3</cds-tab-header>
		</cds-tab-header-group>
		<cds-tab #m1>P1</cds-tab>
		<cds-tab #m2>P2</cds-tab>
		<cds-tab #m3>P3</cds-tab>
	`
})
class HGManualActivationTest {}

@Component({
	template: `
		<cds-tab-header-group [ariaLabel]="'List of tabs'">
			<cds-tab-header [paneReference]="v1">One</cds-tab-header>
			<cds-tab-header [paneReference]="v2">Two</cds-tab-header>
		</cds-tab-header-group>
		<cds-tab #v1>One content</cds-tab>
		<cds-tab #v2>Two content</cds-tab>
	`
})
class HGTabPanelVisibilityTest {}

@Component({
	template: `
		<cds-tab-header-group [ariaLabel]="'List of tabs'">
			<cds-tab-header [paneReference]="so1" (selected)="onFirstSelected()">One</cds-tab-header>
			<cds-tab-header [paneReference]="so2">Two</cds-tab-header>
		</cds-tab-header-group>
		<cds-tab #so1>A</cds-tab>
		<cds-tab #so2>B</cds-tab>
	`
})
class HGSelectedOutputTest {
	onFirstSelected() {}
}

@Component({
	template: `
		<cds-tab-header-group [type]="'contained'" [fullWidth]="true" [ariaLabel]="'List of tabs'">
			<cds-tab-header [paneReference]="fw1">One</cds-tab-header>
			<cds-tab-header [paneReference]="fw2">Two</cds-tab-header>
			<cds-tab-header [paneReference]="fw3">Three</cds-tab-header>
		</cds-tab-header-group>
		<cds-tab #fw1>A</cds-tab>
		<cds-tab #fw2>B</cds-tab>
		<cds-tab #fw3>C</cds-tab>
	`
})
class HGFullWidthContainedTest {}
