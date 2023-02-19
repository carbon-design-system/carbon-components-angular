/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { Component } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { ClickableTile } from "./clickable-tile.component";

describe("ClickableTile", () => {
	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [ClickableTile, ClickableTileTest]
		}).compileComponents();
	}));

	it("should create a ClickableTile", () => {
		let fixture: ComponentFixture<ClickableTile> = TestBed.createComponent(ClickableTile);
		let component: ClickableTile = fixture.componentInstance;
		fixture.detectChanges();

		expect(component).toBeTruthy();
	});

	it("should create a disabled ClickableTile", () => {
		let fixture: ComponentFixture<ClickableTileTest> = TestBed.createComponent(ClickableTileTest);
		let component: ClickableTileTest = fixture.componentInstance;
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(ClickableTile));
		expect(directiveEl).not.toBeNull();
		expect(directiveEl.attributes["disabled"]).toBeTruthy();
		expect(directiveEl.attributes["href"]).toBe("https://angular.carbondesignsystem.com/");
	});
});

@Component({
	selector: "test-cmp",
	template: `
	<cds-clickable-tile disabled="true" href="https://angular.carbondesignsystem.com/">
		Test Clickable Tile
	</cds-clickable-tile>`
})
class ClickableTileTest {}
