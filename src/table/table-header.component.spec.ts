import { TestBed } from "@angular/core/testing";
import { TableHeader } from "./table-header.component";
import { Column } from "./column.component";
import { By } from '@angular/platform-browser';

describe("TableBody", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [TableHeader]});
	});

	it("should work", () => {
		let fixture = TestBed.createComponent(TableHeader);
		expect(fixture.componentInstance instanceof TableHeader).toBe(true);
	});

	xit("should emit select all", () => {
	});

	xit("should emit the columns sort event", () => {

	});

	xit("should emit the columns filter event", () => {
		//thinking needed ... maybe this isn't a thing
		// maybe the event binding is done as part of the ng-content 
		// passed into some <filter> component passed into a <column>
	});
});