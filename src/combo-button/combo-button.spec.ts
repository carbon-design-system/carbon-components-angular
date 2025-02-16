import { Component, Input } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { ContextMenuModule } from "../context-menu";
import { IconModule } from "../icon";
import { By } from "@angular/platform-browser";

import { ComboButtonModule } from "./combo-button.module";
import { Button } from "../button";


@Component({
	template: `
		<cds-combo-button
			[size]="size"
			label="Menu button">
			<cds-menu-item label="First action with a long label description"></cds-menu-item>
			<cds-menu-item label="Second action"></cds-menu-item>
			<cds-menu-item label="Third action" [disabled]="true"></cds-menu-item>
			<cds-menu-divider></cds-menu-divider>
			<cds-menu-item label="Cut" info="⌘X"></cds-menu-item>
			<cds-menu-item label="Option with icon" icon="calendar"></cds-menu-item>
			<cds-menu-divider></cds-menu-divider>
			<cds-menu-item label="Danger action" [danger]="true"></cds-menu-item>
		</cds-combo-button>
	`
})
class ComboButtonTestComponent {
	@Input() size = "lg";
}

describe("Combo button", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				ComboButtonTestComponent
			],
			imports: [
				ComboButtonModule,
				ContextMenuModule,
				IconModule
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ComboButtonTestComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		expect(wrapper instanceof ComboButtonTestComponent).toBe(true);
		const menuButton = fixture.debugElement.query(By.css("cds-combo-button"));
		expect(menuButton.nativeElement.className.includes("cds--combo-button__container")).toBeTrue();
	});

	it("should open the menu on button click", () => {
		const menuButton = fixture.debugElement.query(By.css("cds-icon-button"));
		menuButton.nativeElement.click();
		fixture.detectChanges();
		const menu = fixture.debugElement.query(By.css("cds-combo-button"));
		expect(menu.componentInstance.open).toBeTrue();
		expect(menuButton.nativeElement.className.includes("cds--combo-button__container--open"));
	});

	it("should open & close the menu on button click", () => {
		const iconButton = fixture.debugElement.query(By.css("cds-icon-button"));
		iconButton.nativeElement.click();
		fixture.detectChanges();
		const menu = fixture.debugElement.query(By.css("cds-combo-button"));
		expect(menu.componentInstance.open).toBeTrue();
		expect(menu.nativeElement.className.includes("cds--combo-button__container--open")).toBeTrue();
		iconButton.nativeElement.click();
		fixture.detectChanges();
		expect(menu.componentInstance.open).toBeFalse();
		expect(menu.nativeElement.className.includes("cds--combo-button__container--open")).toBeFalse();
	});


	it("should append to body element on open", () => {
		const iconButton = fixture.debugElement.query(By.css("cds-icon-button"));
		iconButton.nativeElement.click();
		fixture.detectChanges();
		const menu = document.body.lastElementChild;
		expect(menu?.className.includes("cds--menu--open")).toBeTrue();
	});

	it("should close  on menu item click", () => {
		const menuButton = fixture.debugElement.query(By.css("cds-icon-button"));
		menuButton.nativeElement.click();
		fixture.detectChanges();
		const menu = document.body.lastElementChild;
		expect(menu?.nodeName).toBe("CDS-MENU");
		expect(menu?.className.includes("cds--menu--open")).toBeTrue();

		const menuItem = fixture.debugElement.query(
			By.css("cds-menu-item[label='Second action']")
		);

		menuItem.nativeElement.click();
		fixture.detectChanges();

		expect(document.body.lastElementChild?.nodeName !== "CDS-MENU").toBeTrue();
		expect(document.body.lastElementChild?.className.includes("cds--menu--open")).toBeFalse();
	});
});
