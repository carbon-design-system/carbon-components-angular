/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { TestBed } from "@angular/core/testing";
import { TableBody } from "./table-body.component";
import { Column } from "./column.component";
import { By } from '@angular/platform-browser';

describe("TableBody", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [TableBody]});
	});

	it("should work", () => {
		let fixture = TestBed.createComponent(TableBody);
		expect(fixture.componentInstance instanceof TableBody).toBe(true);
	});

	it("should render rows", () => {
		let fixture = TestBed.createComponent(TableBody);
		let bodyInstance = fixture.componentInstance;
		let elem = fixture.debugElement.query(By.css("tbody"))
		bodyInstance.rows = [{a:1},{a:2},{a:3}];
		let c = new Column();
		c.key = "a";
		bodyInstance.cols = [c];
		fixture.debugElement.nativeElement.style.height = "500px";
		fixture.detectChanges();
		expect(elem.nativeElement.children.length).toEqual(bodyInstance.rows.length + 2);
	});
});