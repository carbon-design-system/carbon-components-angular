import {Component, DebugElement} from "@angular/core";

import {TestBed, ComponentFixture} from "@angular/core/testing";

import { By } from "@angular/platform-browser";

import {TopNav} from "./top-nav.component";


describe("Top Nav", () => {

	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [TopNav]});

	});

	it("should work", () => {
		let fixture = TestBed.createComponent(TopNav);
		expect(fixture.componentInstance instanceof TopNav).toBe(true);
	});

	xit("brand should display", () => {
		let fixture = TestBed.createComponent(TopNav);
		let comp    = fixture.componentInstance;
   		let de = fixture.debugElement.query(By.css('.top-nav-brand'));
    	let el = de.nativeElement;
    	comp.brand = "test";
		fixture.detectChanges();
		expect(el.textContent).toBe(" IBM test ");
	});	

	it("badge should display", () => {
		let fixture = TestBed.createComponent(TopNav);
		let comp    = fixture.componentInstance;
		comp.badge = "alpha";
		fixture.detectChanges();
		let de = fixture.debugElement.query(By.css('.top-nav-badge'));
		let el = de.nativeElement;
		expect(el.textContent.trim()).toBe("alpha");
	});	

});

