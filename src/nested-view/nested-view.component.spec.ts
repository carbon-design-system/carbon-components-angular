import {Component} from "@angular/core";
import {TestBed, ComponentFixture, inject} from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { NestedView } from "./nested-view.component";
import { NestedViewItem } from "./nested-view-item.component";

describe("Nested View", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [NestedView, NestedViewItem]});
	});

	it("should work", () => {
		const fixture = TestBed.createComponent(NestedView);
		expect(fixture.componentInstance instanceof NestedView).toBe(true);
	});
});
