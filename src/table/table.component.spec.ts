/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { TestBed } from "@angular/core/testing";
import { TableModule } from "./table.module";
import { Table } from "./table.component";
import { TableBody } from "./table-body.component";
import { TableHeader } from "./table-header.component";
import { By } from '@angular/platform-browser';

describe("Table", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [Table, TableBody, TableHeader]});
	});

	it("should work", () => {
		let fixture = TestBed.createComponent(Table);
		expect(fixture.componentInstance instanceof Table).toBe(true);
	});

	it("should call the row sort function", () => {

	});

	it("should call the row filter function", () => {

	});
});