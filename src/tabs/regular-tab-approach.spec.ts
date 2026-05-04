import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { I18nModule } from "../i18n";
import { UtilsModule } from "../utils";
import { TabsModule } from "./tabs.module";
import { IconModule } from "../icon";

describe("Tabs — Regular tab approach", () => {
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
			InitialSelectionSecondTest,
			CustomClassOnTabHostTest,
			ConditionalTabTest,
			SecondaryLabelContainedTest,
			SecondaryLabelNotContainedTest,
			ContentProjectionLabeledIconTabTest,
			IconTabBadgeTest,
			DismissableTabsTest,
			KeyboardNavigationTest,
			ManualActivationTest,
			TabPanelVisibilityTest,
			SelectedOutputTest,
			FullWidthContainedTest,
			RegularPaneSwitchTest
		]);
	});

	it("should use the tab marked `active` as the initial selection", fakeAsync(() => {
		const fixture = TestBed.createComponent(InitialSelectionSecondTest);
		fixture.detectChanges();
		tick();
		fixture.detectChanges();
		const buttons = tabButtons(fixture.nativeElement);
		expect(buttons[0].getAttribute("aria-selected")).toBe("false");
		expect(buttons[1].getAttribute("aria-selected")).toBe("true");
	}));

	it("should allow a custom class on the tab panel host", () => {
		const fixture = TestBed.createComponent(CustomClassOnTabHostTest);
		fixture.detectChanges();
		const panel = fixture.debugElement.query(By.css(".my-panel"));
		expect(panel).toBeTruthy();
		expect(panel.nativeElement).toHaveClass("custom-class");
	});

	it("should not render tabs excluded with *ngIf", () => {
		const fixture = TestBed.createComponent(ConditionalTabTest);
		fixture.detectChanges();
		const buttons = tabButtons(fixture.nativeElement);
		expect(buttons.length).toBe(2);
	});

	it("should show `secondaryLabel` when parent tabs use `type=contained`", () => {
		const fixture = TestBed.createComponent(SecondaryLabelContainedTest);
		fixture.detectChanges();
		expect(
			(fixture.nativeElement as HTMLElement).textContent
		).toContain("test-secondary");
	});

	it("should not show secondary line label when `type` is not contained", () => {
		const fixture = TestBed.createComponent(SecondaryLabelNotContainedTest);
		fixture.detectChanges();
		expect(
			(fixture.nativeElement as HTMLElement).textContent
		).not.toContain("hidden-secondary");
	});

	it("should render a labeled tab's `icon` template in the tab list", () => {
		const fixture = TestBed.createComponent(ContentProjectionLabeledIconTabTest);
		fixture.detectChanges();
		const el = fixture.nativeElement as HTMLElement;
		const iconHost = el.querySelector(".cds--tabs__nav-item--icon");
		expect(iconHost).toBeTruthy();
		expect(el.querySelector(".cp-projection-icon")).not.toBeNull();
	});

	it("should render a badge node on an icon tab when `badgeIndicator` is true", () => {
		const fixture = TestBed.createComponent(IconTabBadgeTest);
		fixture.detectChanges();
		const badge = fixture.nativeElement.querySelector(".cds--badge-indicator");
		expect(badge).not.toBeNull();
	});

	it("should emit tab index when a dismissable close control is used", () => {
		const fixture = TestBed.createComponent(DismissableTabsTest);
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
		const fixture = TestBed.createComponent(KeyboardNavigationTest);
		fixture.detectChanges();
		tick();
		fixture.detectChanges();
		const host = fixture.debugElement.query(By.css("cds-tab-headers"));
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
		const fixture = TestBed.createComponent(ManualActivationTest);
		fixture.detectChanges();
		tick();
		fixture.detectChanges();
		const host = fixture.debugElement.query(By.css("cds-tab-headers"));
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
		const fixture = TestBed.createComponent(TabPanelVisibilityTest);
		fixture.detectChanges();
		tick();
		fixture.detectChanges();
		const visible = visibleTabpanels(fixture.nativeElement);
		expect(visible.length).toBe(1);
		expect(visible[0].textContent).toContain("One content");
	}));

	it("should emit `selected` when a non-disabled tab header is activated", () => {
		const fixture = TestBed.createComponent(SelectedOutputTest);
		const comp = fixture.componentInstance;
		spyOn(comp, "onFirstSelected");
		fixture.detectChanges();
		tabButtons(fixture.nativeElement)[0].click();
		expect(comp.onFirstSelected).toHaveBeenCalled();
	});

	it("should add full-width class on contained `cds-tabs` when `fullWidth` is true", () => {
		const fixture = TestBed.createComponent(FullWidthContainedTest);
		fixture.detectChanges();
		const tabsHost = fixture.debugElement.query(By.css(".cds--tabs"));
		expect(tabsHost.nativeElement).toHaveClass("cds--tabs--full-width");
	});

	it("should show the matching tab body when a tab header is selected", fakeAsync(() => {
		const fixture = TestBed.createComponent(RegularPaneSwitchTest);
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
		<cds-tabs ariaLabel="List of tabs">
			<cds-tab heading="Tab Label 1">Panel 1</cds-tab>
			<cds-tab heading="Tab Label 2" [active]="true">Panel 2</cds-tab>
			<cds-tab heading="Tab Label 3">Panel 3</cds-tab>
		</cds-tabs>
	`
})
class InitialSelectionSecondTest {}

@Component({
	template: `
		<cds-tabs ariaLabel="List of tabs">
			<cds-tab heading="One" class="my-panel custom-class">Tab Panel 1</cds-tab>
			<cds-tab heading="Two">Tab Panel 2</cds-tab>
		</cds-tabs>
	`
})
class CustomClassOnTabHostTest {}

@Component({
	template: `
		<cds-tabs ariaLabel="List of tabs">
			<cds-tab heading="One">A</cds-tab>
			<cds-tab *ngIf="false" data-excluded="true" heading="Excluded">X</cds-tab>
			<cds-tab heading="Two">B</cds-tab>
		</cds-tabs>
	`
})
class ConditionalTabTest {}

@Component({
	template: `
		<cds-tabs [type]="'contained'" ariaLabel="List of tabs">
			<cds-tab heading="One" [secondaryLabel]="'test-secondary'">A</cds-tab>
			<cds-tab heading="Two">B</cds-tab>
		</cds-tabs>
	`
})
class SecondaryLabelContainedTest {}

@Component({
	template: `
		<cds-tabs [type]="'line'" ariaLabel="List of tabs">
			<cds-tab heading="One" [secondaryLabel]="'hidden-secondary'">A</cds-tab>
			<cds-tab heading="Two">B</cds-tab>
		</cds-tabs>
	`
})
class SecondaryLabelNotContainedTest {}

@Component({
	template: `
		<ng-template #iconTpl>
			<svg
				class="cp-projection-icon"
				aria-hidden="true"
				cdsIcon="bee"
				size="16">
			</svg>
		</ng-template>
		<cds-tabs [cacheActive]="true" ariaLabel="List of tabs">
			<cds-tab heading="With icon" [icon]="iconTpl">C1</cds-tab>
			<cds-tab heading="Plain">C2</cds-tab>
		</cds-tabs>
	`
})
class ContentProjectionLabeledIconTabTest {}

@Component({
	template: `
		<cds-tabs ariaLabel="List of tabs">
			<cds-tab heading="One">First body</cds-tab>
			<cds-tab heading="Two">Second body</cds-tab>
		</cds-tabs>
	`
})
class RegularPaneSwitchTest {}

@Component({
	template: `
		<ng-template #iconTpl>
			<svg
				class="cg-icon-node"
				data-testid="icon-node"
				ibmIcon="bee"
				size="16">
			</svg>
		</ng-template>
		<cds-tabs [iconSize]="'lg'" ariaLabel="List of tabs">
			<cds-icon-tab
				label="Notifications"
				[icon]="iconTpl"
				[badgeIndicator]="true">
				Icon panel
			</cds-icon-tab>
		</cds-tabs>
	`
})
class IconTabBadgeTest {}

@Component({
	template: `
		<cds-tabs
			[dismissable]="true"
			ariaLabel="List of tabs"
			(tabClose)="onTabClose($event)">
			<cds-tab heading="Tab Label 1">P1</cds-tab>
			<cds-tab heading="Tab Label 2">P2</cds-tab>
		</cds-tabs>
	`
})
class DismissableTabsTest {
	onTabClose(_: number) {}
}

@Component({
	template: `
		<cds-tabs ariaLabel="List of tabs">
			<cds-tab heading="Tab Label 1">P1</cds-tab>
			<cds-tab heading="Tab Label 2">P2</cds-tab>
			<cds-tab heading="Tab Label 3">P3</cds-tab>
		</cds-tabs>
	`
})
class KeyboardNavigationTest {}

@Component({
	template: `
		<cds-tabs [followFocus]="false" ariaLabel="List of tabs">
			<cds-tab heading="Tab Label 1">P1</cds-tab>
			<cds-tab heading="Tab Label 2">P2</cds-tab>
			<cds-tab heading="Tab Label 3">P3</cds-tab>
		</cds-tabs>
	`
})
class ManualActivationTest {}

@Component({
	template: `
		<cds-tabs ariaLabel="List of tabs">
			<cds-tab heading="One">One content</cds-tab>
			<cds-tab heading="Two">Two content</cds-tab>
		</cds-tabs>
	`
})
class TabPanelVisibilityTest {}

@Component({
	template: `
		<cds-tabs ariaLabel="List of tabs">
			<cds-tab heading="One" (selected)="onFirstSelected()">A</cds-tab>
			<cds-tab heading="Two">B</cds-tab>
		</cds-tabs>
	`
})
class SelectedOutputTest {
	onFirstSelected() {}
}

@Component({
	template: `
		<cds-tabs [type]="'contained'" [fullWidth]="true" ariaLabel="List of tabs">
			<cds-tab heading="One">A</cds-tab>
			<cds-tab heading="Two">B</cds-tab>
			<cds-tab heading="Three">C</cds-tab>
		</cds-tabs>
	`
})
class FullWidthContainedTest {}
