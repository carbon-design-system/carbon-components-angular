import {Component} from "@angular/core";
import {TestBed, ComponentFixture, inject} from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { ListView } from "./list-view.component";

describe("List View", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [ListView]});
	});

	it("should work", () => {
		const fixture = TestBed.createComponent(ListView);
		expect(fixture.componentInstance instanceof ListView).toBe(true);
	});

	it("should render a list", () => {
		const fixture = TestBed.createComponent(ListView);
		fixture.componentInstance.items = [
			{
				content: "item one",
				selected: false
			},
			{
				content: "item two",
				selected: false
			},
			{
				content: "item three",
				selected: false
			},
			{
				content: "item four",
				selected: false
			}
		];
		let elem = fixture.debugElement.query(By.css("ul"));
		fixture.detectChanges();
		expect(elem.children.length).toEqual(4);
	});

	it("should emit a select event", () => {
		const fixture = TestBed.createComponent(ListView);
		fixture.componentInstance.items = [
			{
				content: "item one",
				selected: false
			},
			{
				content: "item two",
				selected: false
			},
			{
				content: "item three",
				selected: false
			},
			{
				content: "item four",
				selected: false
			}
		];
		fixture.detectChanges();
		spyOn(fixture.componentInstance.select, "emit");
		let li = fixture.nativeElement.querySelector("li");
		li.click();
		fixture.detectChanges();
		expect(fixture.componentInstance.select.emit).toHaveBeenCalled();
	});

});
