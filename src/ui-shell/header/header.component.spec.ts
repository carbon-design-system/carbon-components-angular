import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { I18nModule } from "../../i18n/i18n.module";
import { Header } from "./header.component";
import { Hamburger } from "../ui-shell.module";

/**
 * Testing component for projecting an ibm-hamburger component
 * inside of an ibm-header component.
 *
 * @class HamburgerTest
 */
@Component({
	selector: "ibm-hamburger-test",
	template: `
		<ibm-header>
			<ibm-hamburger></ibm-hamburger>
		</ibm-header>
	`
})
class HamburgerTest { }

describe("UI Shell Header", () => {
	let component: Header;
	let fixture: ComponentFixture<Header>;
	let element: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Hamburger, HamburgerTest, Header],
			imports: [I18nModule],
			providers: []
		});

		fixture = TestBed.createComponent(Header);
		component = fixture.componentInstance;
		element = fixture.debugElement.query(By.css(".bx--header")).nativeElement;
		fixture.detectChanges();
	});

	it("should work", () => {
		expect(component instanceof Header).toBe(true);
	});

	it("should have a default brand of 'IBM'", () => {
		const brandElement = element.querySelector(".bx--header__name--prefix");
		expect(brandElement).toBeDefined();
		expect(brandElement.textContent.trim()).toEqual("IBM");
	});

	it("should be able to set a custom brand", () => {
		const brand = "Foo Brand";
		component.brand = brand;
		fixture.detectChanges();

		const brandElement = element.querySelector(".bx--header__name--prefix");
		expect(brandElement).toBeDefined();
		expect(brandElement.textContent.trim()).toEqual(brand);
	});

	it("should be able to set a custom name", () => {
		const name = "Foo Name";
		component.name = name;
		fixture.detectChanges();

		const nameElement = element.querySelector(".bx--header__name");
		expect(nameElement).toBeDefined();
		expect(nameElement.textContent).toContain(name);
	});

	it("should project a hamburger component", () => {
		const headerWithHamburger = TestBed.createComponent(HamburgerTest);
		const element = headerWithHamburger.nativeElement;

		expect(element.querySelector("header > ibm-hamburger")).toBeDefined();
	});
});
