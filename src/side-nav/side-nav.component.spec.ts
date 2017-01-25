import {Component} from "@angular/core";

import {TestBed, ComponentFixture, inject} from "@angular/core/testing";

import {createGenericTestComponent} from "../common/test";

import {SideNav} from "./side-nav.component";


describe("Side Nav", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [SideNav]});

	});

	it("should work", () => {
		const fixture = TestBed.createComponent(SideNav);
		expect(fixture.componentInstance instanceof SideNav).toBe(true);
	});

	it("should be open", () => {
		const fixture = TestBed.createComponent(SideNav);
		const comp    = fixture.nativeElement.querySelector("aside");
		comp.open = true;
		fixture.detectChanges();
		expect(comp.className).toBe("left-nav isOpen");
	});



});




