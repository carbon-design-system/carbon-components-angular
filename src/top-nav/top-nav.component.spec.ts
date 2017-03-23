import {Component, DebugElement} from "@angular/core";

import {TestBed, ComponentFixture} from "@angular/core/testing";

import { By } from "@angular/platform-browser";

import {TopNav} from "./top-nav.component";

import {Hamburger} from "./hamburger.component";


describe("Top Nav", () => {

	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [TopNav, Hamburger]});

	});

	it("should work", () => {
		let fixture = TestBed.createComponent(TopNav);
		expect(fixture.componentInstance instanceof TopNav).toBe(true);
	});

	it("brand should display", () => {
		let fixture = TestBed.createComponent(TopNav);
		let comp    = fixture.componentInstance;
		let de = fixture.debugElement.query(By.css(".top-nav-brand"));
		let el = de.nativeElement;
		comp.brand = "test";
		fixture.detectChanges();
		expect(el.textContent.trim()).toBe("IBM test");
	});

	it("badge should display", () => {
		let fixture = TestBed.createComponent(TopNav);
		let comp    = fixture.componentInstance;
		comp.badge = "alpha";
		fixture.detectChanges();
		let de = fixture.debugElement.query(By.css(".top-nav-badge"));
		let el = de.nativeElement;
		expect(el.textContent.trim()).toBe("alpha");
	});


	it("hamburger click should emit event", () => {
		let fixture = TestBed.createComponent(Hamburger);
		let comp    = fixture.componentInstance;
		let hamburger_clickbox = fixture.nativeElement.querySelector("button");
		fixture.detectChanges();
		spyOn(fixture.componentInstance.onClick, "emit");
		hamburger_clickbox.click();
		expect(fixture.componentInstance.onClick.emit).toHaveBeenCalled();
	});

});

