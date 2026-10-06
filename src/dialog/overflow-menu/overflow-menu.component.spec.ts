import { Component, TemplateRef, ViewChild } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { DialogModule } from "../dialog.module";
import { UtilsModule } from "../../utils";
import { AnimationFrameService } from "../../utils/animation-frame.service";
import { I18nModule } from "../../i18n";
import { PlaceholderModule } from "../../placeholder";
import { OverflowMenu } from "./overflow-menu.component";
import { OverflowMenuOption } from "./overflow-menu-option.component";
import { advancedFakeAsync } from "../../test-helpers/change-detection";

@Component({
	template: `
		<cds-overflow-menu
			[open]="open"
			[flip]="flip"
			[triggerClass]="triggerClass"
			[buttonLabel]="buttonLabel"
			[customTrigger]="useCustomTrigger ? customTrigger : null"
			(openChange)="onOpenChange($event)">
			<cds-overflow-menu-option (selected)="onSelected()">Option one</cds-overflow-menu-option>
			<cds-overflow-menu-option [disabled]="secondDisabled">Option two</cds-overflow-menu-option>
			<cds-overflow-menu-option href="https://carbondesignsystem.com/">Option three</cds-overflow-menu-option>
		</cds-overflow-menu>
		<ng-template #customTrigger><span class="custom-trigger">Custom</span></ng-template>
		<cds-placeholder></cds-placeholder>
	`
})
class OverflowMenuTest {
	@ViewChild(OverflowMenu) overflowMenu: OverflowMenu;
	@ViewChild("customTrigger", { static: true }) customTrigger: TemplateRef<any>;

	open = false;
	flip = false;
	triggerClass = "";
	buttonLabel = "Menu options";
	useCustomTrigger = false;
	secondDisabled = false;
	openState = null;

	onOpenChange(event) {
		this.open = event;
		this.openState = event;
	}
	onSelected() {}
}

describe("OverflowMenu", () => {
	let fixture: ComponentFixture<OverflowMenuTest>;
	let wrapper: OverflowMenuTest;

	function trigger(): HTMLButtonElement {
		return fixture.nativeElement.querySelector("button.cds--overflow-menu");
	}

	function menuPane(): HTMLElement {
		return document.body.querySelector(".cds--overflow-menu-options");
	}

	// opening is what schedules the dialog's placement timers, so change detection has to
	// run before the clock is advanced
	function openMenu(): void {
		wrapper.open = true;
		fixture.detectChanges();
		advancedFakeAsync(fixture);
	}

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [OverflowMenuTest],
			imports: [DialogModule, UtilsModule, I18nModule, PlaceholderModule],
			// the open menu re-places itself on every animation frame, which never lets a
			// fakeAsync timer queue drain. the dialog takes the service optionally.
			providers: [{ provide: AnimationFrameService, useValue: null }]
		});

		fixture = TestBed.createComponent(OverflowMenuTest);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
	});

	afterEach(fakeAsync(() => {
		wrapper.open = false;
		fixture.detectChanges();
		advancedFakeAsync(fixture);
	}));

	it("should work", () => {
		expect(wrapper.overflowMenu instanceof OverflowMenu).toBe(true);
	});

	it("should render the trigger button with its aria label", () => {
		expect(trigger()).toBeTruthy();
		expect(trigger().getAttribute("aria-label")).toBe("Menu options");
		expect(trigger().getAttribute("aria-haspopup")).toBe("true");
	});

	it("should render the default icon", () => {
		expect(trigger().querySelector(".cds--overflow-menu__icon")).toBeTruthy();
	});

	it("should render a custom trigger in place of the icon", () => {
		wrapper.useCustomTrigger = true;
		fixture.detectChanges();

		expect(trigger().querySelector(".custom-trigger")).toBeTruthy();
		expect(trigger().querySelector(".cds--overflow-menu__icon")).toBeFalsy();
	});

	it("should append the trigger class to the button", () => {
		wrapper.triggerClass = "extra-trigger-class";
		fixture.detectChanges();

		expect(trigger().classList).toContain("extra-trigger-class");
	});

	it("should open the menu when open is set", fakeAsync(() => {
		expect(menuPane()).toBeFalsy();

		openMenu();

		expect(menuPane()).toBeTruthy();
		expect(trigger().classList).toContain("cds--overflow-menu--open");
	}));

	it("should render an option per projected item", fakeAsync(() => {
		openMenu();

		const options = menuPane().querySelectorAll("cds-overflow-menu-option");
		expect(options.length).toBe(3);
		expect(options[0].textContent).toContain("Option one");
	}));

	it("should render an anchor for an option with an href", fakeAsync(() => {
		openMenu();

		const third = menuPane().querySelectorAll("cds-overflow-menu-option")[2];
		expect(third.querySelector("a")?.getAttribute("href")).toBe("https://carbondesignsystem.com/");
	}));

	it("should disable an option when it is marked disabled", fakeAsync(() => {
		wrapper.secondDisabled = true;
		openMenu();

		const second = menuPane().querySelectorAll("cds-overflow-menu-option")[1];
		expect(second.querySelector("button")?.disabled).toBe(true);
	}));

	it("should emit selected when an option is clicked", fakeAsync(() => {
		spyOn(wrapper, "onSelected");
		openMenu();

		menuPane()?.querySelector<HTMLButtonElement>("cds-overflow-menu-option button")?.click();
		advancedFakeAsync(fixture);

		expect(wrapper.onSelected).toHaveBeenCalled();
	}));

	it("should emit openChange when the menu closes", fakeAsync(() => {
		openMenu();

		wrapper.overflowMenu.handleOpenChange(false);
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		expect(wrapper.openState).toBe(false);
		expect(wrapper.overflowMenu.open).toBe(false);
	}));

	it("should make an option focusable on focus", fakeAsync(() => {
		openMenu();

		const option = menuPane().querySelectorAll("cds-overflow-menu-option")[1].querySelector("button");
		expect(option?.getAttribute("tabindex")).toBe("-1");

		option?.dispatchEvent(new Event("focus"));
		advancedFakeAsync(fixture);

		expect(option?.getAttribute("tabindex")).toBe("0");
	}));

	it("should make an option unfocusable again on blur", fakeAsync(() => {
		openMenu();

		const option = menuPane().querySelectorAll("cds-overflow-menu-option")[1].querySelector("button");
		option?.dispatchEvent(new Event("focus"));
		advancedFakeAsync(fixture);
		expect(option?.getAttribute("tabindex")).toBe("0");

		option?.dispatchEvent(new Event("blur"));
		advancedFakeAsync(fixture);

		expect(option?.getAttribute("tabindex")).toBe("-1");
	}));

	it("should set the menu direction once the menu is placed", fakeAsync(() => {
		openMenu();

		expect(menuPane().getAttribute("data-floating-menu-direction")).toBeTruthy();
	}));

	it("should apply the flip class to the menu", fakeAsync(() => {
		wrapper.flip = true;
		openMenu();

		expect(menuPane().classList).toContain("cds--overflow-menu--flip");
	}));

	it("should project the options into the menu", fakeAsync(() => {
		openMenu();

		expect(fixture.debugElement.queryAll(By.directive(OverflowMenuOption)).length).toBe(3);
	}));
});
