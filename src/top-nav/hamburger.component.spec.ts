import { Component, DebugElement } from "@angular/core";

import { TestBed, ComponentFixture } from "@angular/core/testing";

import { By } from "@angular/platform-browser";

import { Hamburger } from "./hamburger.component";


describe("Top Nav", () => {
	let component: Hamburger;
	let fixture: ComponentFixture<Hamburger>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Hamburger]
		});

		fixture = TestBed.createComponent(Hamburger);
		component = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("button.top-nav_toggler"));
		el = de.nativeElement;
	});

	it("should work", () => {
		expect(component instanceof Hamburger).toBe(true);
	});

	it("click should emit event", () => {
		fixture.detectChanges();
		spyOn(component.onClick, "emit");
		el.click();
		expect(component.onClick.emit).toHaveBeenCalled();
	});
});
