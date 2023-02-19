import { Component } from "@angular/core";
import { TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { CommonModule } from "@angular/common";
import { I18nModule } from "./../../i18n/index";
import { SideNav } from "./sidenav.component";
import { SideNavItem } from "./sidenav-item.component";
import { SideNavMenu } from "./sidenav-menu.component";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-foo",
	template: "<h1>foo</h1>"
})
class FooComponent { }

@Component({
	template: `
		<cds-sidenav [allowExpansion]="allowExpansion" [hidden]="hidden">
			<cds-sidenav-menu title="Example Title"></cds-sidenav-menu>
			<cds-sidenav-item
				[route]="route"
				(navigation)="onNavigation($event)">
			</cds-sidenav-item>
		</cds-sidenav>
	`
})
class SideNavTest {
	route = ["foo"];
	hidden = false;
	allowExpansion = false;
	statusPromise = null;
	onNavigation(event) {
		this.statusPromise = event;
	}
}

describe("SideNav", () => {
	let fixture, wrapper, element;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				SideNav,
				SideNavItem,
				SideNavMenu,
				SideNavTest,
				FooComponent
			],
			imports: [
				CommonModule,
				I18nModule,
				RouterModule.forRoot([
					{
						path: "foo",
						component: FooComponent
					}
				],
					{
						initialNavigation: "disabled",
						useHash: true,
						relativeLinkResolution: "corrected"
					})
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(SideNav);
		expect(fixture.componentInstance instanceof SideNav).toBe(true);
	});

	it("should emit the navigation status promise when the link is activated and call onNavigation", async () => {
		fixture = TestBed.createComponent(SideNavTest);
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
		fixture = TestBed.createComponent(SideNavTest);
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
		fixture = TestBed.createComponent(SideNavTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-sidenav-menu"));
		expect(element.nativeElement.textContent).toEqual("Example Title");
	});

	it("should toggle expanded on click", () => {
		fixture = TestBed.createComponent(SideNavTest);
		wrapper = fixture.componentInstance;
		wrapper.allowExpansion = true;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-sidenav"));
		let sidenavButton = element.nativeElement.querySelector(".cds--side-nav__toggle");
		element.componentInstance.expanded = false;
		sidenavButton.click();
		fixture.detectChanges();
		expect(element.componentInstance.expanded).toBe(true);
		sidenavButton.click();
		fixture.detectChanges();
		expect(element.componentInstance.expanded).toBe(false);
	});
});
