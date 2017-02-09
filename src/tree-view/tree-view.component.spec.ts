import {Component} from "@angular/core";
import {TestBed, ComponentFixture, inject} from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { TreeView } from "./tree-view.component";
import { TreeViewItem } from "./tree-view-item.component";

describe("Nested View", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [TreeView, TreeViewItem]});
	});

	it("should work", () => {
		const fixture = TestBed.createComponent(TreeView);
		expect(fixture.componentInstance instanceof TreeView).toBe(true);
	});
});
