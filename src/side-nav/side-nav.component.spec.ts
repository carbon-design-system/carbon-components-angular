import { Component } from "@angular/core";
import { DebugElement } from "@angular/core";

import { TestBed, ComponentFixture } from "@angular/core/testing";

import { SideNav } from "./side-nav.component";


describe("Side Nav", () => {
	let component: SideNav;
	let fixture: ComponentFixture<SideNav>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [SideNav]});
		fixture = TestBed.createComponent(SideNav);
		el = fixture.nativeElement.querySelector("aside.side-nav");
		component = fixture.componentInstance;
	});

	it("should work", () => {
		expect(component instanceof SideNav).toBe(true);
	});

	it("should be open", () => {
		component.open = true;
		fixture.detectChanges();
		expect(el.classList).toContain("slide-in");
	});
});

// this has to be separated because reasons
describe("Side Nav", () => {
	let component: SideNav;
	let fixture: ComponentFixture<SideNav>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [SideNav]});
		fixture = TestBed.createComponent(SideNav);
		el = fixture.nativeElement.querySelector("nav");
		component = fixture.componentInstance;
	});
});
