import { Component, ViewChild } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { UIShellModule } from "../ui-shell.module";
import { I18nModule } from "../../i18n";
import { HeaderNavigation } from "./header-navigation.component";
import { HeaderMenu } from "./header-menu.component";
import { HeaderItem } from "./header-item.component";
import { HeaderGlobal } from "./header-global.component";
import { HeaderAction } from "./header-action.component";

@Component({
	template: `
		<cds-header-navigation [ariaLabel]="ariaLabel" [navigationItems]="navigationItems">
			<cds-header-item [isCurrentPage]="isCurrentPage">Projected item</cds-header-item>
			<cds-header-menu [title]="menuTitle" [trigger]="trigger">
				<cds-header-item>Menu child</cds-header-item>
			</cds-header-menu>
		</cds-header-navigation>
		<cds-header-global>
			<cds-header-action [active]="actionActive" ariaLabel="Toggle panel"></cds-header-action>
		</cds-header-global>
	`
})
class HeaderNavigationTest {
	@ViewChild(HeaderNavigation) navigation: HeaderNavigation;
	@ViewChild(HeaderMenu) menu: HeaderMenu;
	@ViewChild(HeaderGlobal) global: HeaderGlobal;
	@ViewChild(HeaderAction) action: HeaderAction;

	ariaLabel = "Main navigation";
	menuTitle = "Menu title";
	trigger = "click";
	isCurrentPage = false;
	actionActive = false;
	navigationItems: any[] = [];
}

describe("Header navigation", () => {
	let fixture: ComponentFixture<HeaderNavigationTest>;
	let wrapper: HeaderNavigationTest;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [HeaderNavigationTest],
			imports: [
				UIShellModule,
				I18nModule,
				RouterModule.forRoot([], {
					initialNavigation: "disabled",
					useHash: true,
					relativeLinkResolution: "corrected"
				})
			]
		});

		fixture = TestBed.createComponent(HeaderNavigationTest);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
	});

	it("should work", () => {
		expect(wrapper.navigation instanceof HeaderNavigation).toBe(true);
		expect(wrapper.menu instanceof HeaderMenu).toBe(true);
		expect(wrapper.global instanceof HeaderGlobal).toBe(true);
		expect(wrapper.action instanceof HeaderAction).toBe(true);
	});

	it("should render the navigation aria label", () => {
		expect(fixture.nativeElement.querySelector("nav.cds--header__nav").getAttribute("aria-label"))
			.toBe("Main navigation");
	});

	it("should project header items and render the menu title", () => {
		expect(fixture.nativeElement.textContent).toContain("Projected item");
		expect(fixture.nativeElement.querySelector(".cds--header__menu-title").textContent)
			.toContain("Menu title");
	});

	it("should expand the menu when it is clicked", () => {
		const menuTitle = fixture.nativeElement.querySelector(".cds--header__menu-title");
		expect(menuTitle.getAttribute("aria-expanded")).toBe("false");

		fixture.nativeElement.querySelector("cds-header-menu").click();
		fixture.detectChanges();

		expect(wrapper.menu.expanded).toBe(true);
		expect(menuTitle.getAttribute("aria-expanded")).toBe("true");
	});

	it("should expand the menu on mouseover when that is the trigger", () => {
		wrapper.trigger = "mouseover";
		fixture.detectChanges();

		const menuElement = fixture.nativeElement.querySelector("cds-header-menu");
		menuElement.dispatchEvent(new Event("mouseover"));
		fixture.detectChanges();

		expect(wrapper.menu.expanded).toBe(true);
		expect(fixture.nativeElement.querySelector(".cds--header__menu-title").getAttribute("aria-expanded"))
			.toBe("true");

		menuElement.dispatchEvent(new Event("mouseout"));
		fixture.detectChanges();

		expect(wrapper.menu.expanded).toBe(false);
	});

	it("should toggle the action active state when clicked", () => {
		expect(wrapper.action.active).toBe(false);

		wrapper.action.onClick();
		fixture.detectChanges();

		expect(wrapper.action.active).toBe(true);
		expect(fixture.nativeElement.querySelector("cds-header-action button").classList)
			.toContain("cds--header__action--active");
	});

	it("should render a navigation item added to the existing array", () => {
		expect(fixture.nativeElement.querySelectorAll("cds-header-item").length).toBe(2);

		wrapper.navigationItems.push({ type: "item", content: "Added item", href: "#added" });
		fixture.detectChanges();

		expect(fixture.nativeElement.textContent).toContain("Added item");
	});

	it("should mark the item as the current page", () => {
		const item = fixture.nativeElement.querySelector("cds-header-item a");
		expect(item.classList).not.toContain("cds--header__menu-item--current");

		wrapper.isCurrentPage = true;
		fixture.detectChanges();

		expect(item.classList).toContain("cds--header__menu-item--current");
	});
});
