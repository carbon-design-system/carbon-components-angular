/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { DebugElement, Component } from "@angular/core";
import {
	async,
	ComponentFixture,
	TestBed
} from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { ClickableTile } from "./clickable-tile.component";

describe("ClickableTile", () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ClickableTile, ClickableTileTestComponent],
		}).compileComponents();
	}));

	it("should create a ClickableTile", () => {
		let fixture: ComponentFixture<ClickableTile> = TestBed.createComponent(ClickableTile);
		let component: ClickableTile = fixture.componentInstance;
		fixture.detectChanges();

		expect(component).toBeTruthy();
	});

	it("should create a disabled ClickableTile", () => {
		let fixture: ComponentFixture<ClickableTileTestComponent> = TestBed.createComponent(ClickableTileTestComponent);
		let component: ClickableTileTestComponent = fixture.componentInstance;
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
	<ibm-clickable-tile disabled="true" href="https://angular.carbondesignsystem.com/">
		Test Clickable Tile
	</ibm-clickable-tile>`,
	entryComponents: [ClickableTile]
})
class ClickableTileTestComponent {}
