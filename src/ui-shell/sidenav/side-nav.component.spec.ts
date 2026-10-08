import { Component } from "@angular/core";
import { fakeAsync, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { advancedFakeAsync } from "../../test-helpers/change-detection";


import { SideNav } from "./sidenav.component";
import { SideNavItem } from "./sidenav-item.component";
import { SideNavMenu } from "./sidenav-menu.component";
import { RouterLinkExtendedDirective } from "./routerlink-extended.directive";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-foo",
	template: "<h1>foo</h1>"
})
class FooComponent {}

@Component({
	template: `
		<cds-sidenav [allowExpansion]="allowExpansion" [hidden]="hidden">
			<cds-sidenav-item
				[route]="route"
				[useRouter]="useRouter"
				(navigation)="onNavigation($event)">
			</cds-sidenav-item>
			<cds-sidenav-menu title="Example Title">
				<cds-sidenav-item [active]="firstItemActive">One</cds-sidenav-item>
				<cds-sidenav-item [active]="secondItemActive">Two</cds-sidenav-item>
			</cds-sidenav-menu>
		</cds-sidenav>
	`,
	imports: [SideNav, SideNavItem, SideNavMenu, RouterModule]
})
class SideNavTest {
	route = ["foo"];
	hidden = false;
	allowExpansion = false;
	statusPromise = null;
	useRouter = false;
	firstItemActive = false;
	secondItemActive = false;
	onNavigation(event) {
		this.statusPromise = event;
	}
}

describe("SideNav", () => {
	let fixture, wrapper, element;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				SideNavTest,
				RouterModule.forRoot(
					[{ path: "foo", component: FooComponent }],
					{ initialNavigation: "disabled", useHash: true }
				)
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(SideNav);
		expect(fixture.componentInstance instanceof SideNav).toBe(true);
	});

	describe("when useRouter is false", () => {
		let fixture;

		beforeEach(() => {
			fixture = TestBed.createComponent(SideNavTest);
			fixture.componentInstance.useRouter = false;
			fixture.detectChanges();
		});

		it("should emit the navigation status promise when the link is activated and call onNavigation", async () => {
			wrapper = fixture.componentInstance;
			spyOn(wrapper, "onNavigation").and.callThrough();
			fixture.detectChanges();
			element = fixture.debugElement.query(By.css(".cds--side-nav__link"));
			element.nativeElement.click();
			fixture.detectChanges();
			expect(wrapper.onNavigation).toHaveBeenCalled();
			const status = await wrapper.statusPromise;
			expect(status).toBe(true);
		});

		it("should expand sidenav-menu on click", () => {
			wrapper = fixture.componentInstance;
			fixture.detectChanges();
			element = fixture.debugElement.query(By.css(".cds--side-nav__submenu"));
			element.nativeElement.click();
			fixture.detectChanges();
			expect(element.nativeElement.getAttribute("aria-expanded")).toBe("true");
			expect(element.componentInstance.expanded).toBe(true);
			element.nativeElement.click();
			fixture.detectChanges();
			expect(element.nativeElement.getAttribute("aria-expanded")).toBe("false");
			expect(element.componentInstance.expanded).toBe(false);
		});

		it("should set the sidenav-menu title to Example Title", () => {
			fixture.detectChanges();
			element = fixture.debugElement.query(By.css(".cds--side-nav__submenu-title"));
			expect(element.nativeElement.textContent).toEqual("Example Title");
		});

		it("should toggle expanded on click", () => {
			wrapper = fixture.componentInstance;
			wrapper.allowExpansion = true;
			fixture.detectChanges();
			element = fixture.debugElement.query(By.css("cds-sidenav"));
			let sidenavButton = element.nativeElement.querySelector(
				".cds--side-nav__toggle"
			);
			element.componentInstance.expanded = false;
			sidenavButton.click();
			fixture.detectChanges();
			expect(element.componentInstance.expanded).toBe(true);
			sidenavButton.click();
			fixture.detectChanges();
			expect(element.componentInstance.expanded).toBe(false);
		});
	});

	describe("when useRouter is true", () => {
		let fixture;

		beforeEach(() => {
			fixture = TestBed.createComponent(SideNavTest);
			fixture.componentInstance.useRouter = true;
			fixture.detectChanges();
		});

		it("should expand sidenav-menu on click", () => {
			wrapper = fixture.componentInstance;
			fixture.detectChanges();
			element = fixture.debugElement.query(By.css(".cds--side-nav__submenu"));
			element.nativeElement.click();
			fixture.detectChanges();
			expect(element.nativeElement.getAttribute("aria-expanded")).toBe("true");
			expect(element.componentInstance.expanded).toBe(true);
			element.nativeElement.click();
			fixture.detectChanges();
			expect(element.nativeElement.getAttribute("aria-expanded")).toBe("false");
			expect(element.componentInstance.expanded).toBe(false);
		});

		it("should set the sidenav-menu title to Example Title", () => {
			fixture.detectChanges();
			element = fixture.debugElement.query(By.css(".cds--side-nav__submenu-title"));
			expect(element.nativeElement.textContent).toEqual("Example Title");
		});

		it("should toggle expanded on click", () => {
			wrapper = fixture.componentInstance;
			wrapper.allowExpansion = true;
			fixture.detectChanges();
			element = fixture.debugElement.query(By.css("cds-sidenav"));
			let sidenavButton = element.nativeElement.querySelector(
				".cds--side-nav__toggle"
			);
			element.componentInstance.expanded = false;
			sidenavButton.click();
			fixture.detectChanges();
			expect(element.componentInstance.expanded).toBe(true);
			sidenavButton.click();
			fixture.detectChanges();
			expect(element.componentInstance.expanded).toBe(false);
		});
	});

	it("should mark the menu active when one of its items is selected", fakeAsync(() => {
		const menuFixture = TestBed.createComponent(SideNavTest);
		menuFixture.detectChanges();
		// let the deferred subscription setup run before touching the items
		advancedFakeAsync(menuFixture);

		const menu = menuFixture.debugElement.query(By.directive(SideNavMenu));
		expect(menu.componentInstance.hasActiveChild).toBe(false);
		expect(menu.nativeElement.classList).not.toContain("cds--side-nav__item--active");

		menuFixture.componentInstance.secondItemActive = true;
		advancedFakeAsync(menuFixture);

		expect(menu.componentInstance.hasActiveChild).toBe(true);
		expect(menu.nativeElement.classList).toContain("cds--side-nav__item--active");
	}));

	it("should clear the active menu when the item is deselected", fakeAsync(() => {
		const menuFixture = TestBed.createComponent(SideNavTest);
		menuFixture.componentInstance.firstItemActive = true;
		menuFixture.detectChanges();
		advancedFakeAsync(menuFixture);

		const menu = menuFixture.debugElement.query(By.directive(SideNavMenu));
		expect(menu.nativeElement.classList).toContain("cds--side-nav__item--active");

		menuFixture.componentInstance.firstItemActive = false;
		advancedFakeAsync(menuFixture);

		expect(menu.componentInstance.hasActiveChild).toBe(false);
		expect(menu.nativeElement.classList).not.toContain("cds--side-nav__item--active");
	}));
});
