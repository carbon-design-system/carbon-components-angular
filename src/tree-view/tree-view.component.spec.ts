import {Component} from "@angular/core";
import {TestBed, ComponentFixture, inject} from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { TreeView, TreeViewItem, TreeViewWrapper } from "./tree-view.module";

describe("Nested View", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [TreeView, TreeViewWrapper, TreeViewItem]});
	});

	it("should work", () => {
		const fixture = TestBed.createComponent(TreeView);
		expect(fixture.componentInstance instanceof TreeView).toBe(true);
	});
});
