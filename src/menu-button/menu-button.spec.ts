import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { ContextMenuDividerComponent, ContextMenuItemComponent } from "../context-menu";
import { MenuButtonComponent } from "../menu-button";
import { By } from "@angular/platform-browser";

import { Button } from "../button";


@Component({
	template: `
		<cds-menu-button label="Menu button">
			<cds-menu-item label="First action with a long label description" />
			<cds-menu-item label="Second action" />
			<cds-menu-item label="Third action" [disabled]="true" />
			<cds-menu-divider />
			<cds-menu-item label="Cut" info="⌘X" />
			<cds-menu-item label="Option with icon" icon="calendar" />
			<cds-menu-divider />
			<cds-menu-item label="Danger action" [danger]="true" />
		</cds-menu-button>
	`,
	imports: [
		MenuButtonComponent,
		ContextMenuItemComponent,
		ContextMenuDividerComponent
	]
})
class MenuButtonTestComponent {}

describe("Menu button", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				MenuButtonTestComponent
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MenuButtonTestComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		expect(wrapper instanceof MenuButtonTestComponent).toBe(true);
		const menuButton = fixture.debugElement.query(By.css("cds-menu-button"));
		expect(menuButton.nativeElement.className.includes("cds--menu-button__container")).toBeTrue();
	});

	it("should open the menu on button click", () => {
		const menuButton = fixture.debugElement.query(By.directive(Button));
		menuButton.nativeElement.click();
		fixture.detectChanges();
		const menu = fixture.debugElement.query(By.css("cds-menu-button"));
		expect(menu.componentInstance.open).toBeTrue();
		expect(menuButton.nativeElement.className.includes("cds--menu-button__trigger--open"));
	});

	it("should open & close the menu on button click", () => {
		const menuButton = fixture.debugElement.query(By.directive(Button));
		menuButton.nativeElement.click();
		fixture.detectChanges();
		const menu = fixture.debugElement.query(By.css("cds-menu-button"));
		expect(menu.componentInstance.open).toBeTrue();
		expect(menuButton.nativeElement.className.includes("cds--menu-button__trigger--open")).toBeTrue();
		menuButton.nativeElement.click();
		fixture.detectChanges();
		expect(menu.componentInstance.open).toBeFalse();
		expect(menuButton.nativeElement.className.includes("cds--menu-button__trigger--open")).toBeFalse();
	});


	it("should append to body element on open", () => {
		const menuButton = fixture.debugElement.query(By.directive(Button));
		menuButton.nativeElement.click();
		fixture.detectChanges();
		const menu = document.body.lastElementChild;
		expect(menu?.className.includes("cds--menu-button__bottom")).toBeTrue();
		expect(menu?.className.includes("cds--menu--open")).toBeTrue();
	});

	it("should close  on menu item click", () => {
		const menuButton = fixture.debugElement.query(By.directive(Button));
		menuButton.nativeElement.click();
		fixture.detectChanges();
		const menu = document.body.lastElementChild;
		expect(menu?.nodeName).toBe("CDS-MENU");
		expect(menu?.className.includes("cds--menu-button__bottom")).toBeTrue();
		expect(menu?.className.includes("cds--menu--open")).toBeTrue();

		const menuItem = fixture.debugElement.query(
			By.css("cds-menu-item[label='Second action']")
		);

		menuItem.nativeElement.click();
		fixture.detectChanges();

		expect(document.body.lastElementChild?.nodeName !== "CDS-MENU").toBeTrue();
		expect(document.body.lastElementChild?.className.includes("cds--menu-button__bottom")).toBeFalse();
		expect(document.body.lastElementChild?.className.includes("cds--menu--open")).toBeFalse();
	});
});
