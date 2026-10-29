import { Component, ViewChild } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TilesModule } from "./tiles.module";
import { ExpandableTile } from "./expandable-tile.component";

@Component({
	template: `
		<cds-expandable-tile [expanded]="expanded" [interactive]="interactive">
			<span cdsAboveFold class="cds--tile-content__above-the-fold">Above the fold</span>
			<span cdsBelowFold class="cds--tile-content__below-the-fold">Below the fold</span>
		</cds-expandable-tile>
	`
})
class ExpandableTileTest {
	@ViewChild(ExpandableTile) tile: ExpandableTile;
	expanded = false;
	interactive = false;
}

describe("ExpandableTile", () => {
	let fixture: ComponentFixture<ExpandableTileTest>;
	let wrapper: ExpandableTileTest;

	// `expandedHeight` measures the DOM on every read, so the dev mode verification pass
	// sees a different value than the pass that set it

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ExpandableTileTest],
			imports: [TilesModule]
		});

		fixture = TestBed.createComponent(ExpandableTileTest);
		fixture.detectChanges(false);
		wrapper = fixture.componentInstance;
	});

	it("should work", () => {
		expect(wrapper.tile instanceof ExpandableTile).toBe(true);
	});

	it("should project the above and below fold content", () => {
		expect(fixture.nativeElement.textContent).toContain("Above the fold");
		expect(fixture.nativeElement.textContent).toContain("Below the fold");
	});

	it("should render a button in the non interactive variant", () => {
		expect(fixture.nativeElement.querySelector("button.cds--tile--expandable")).toBeTruthy();
	});

	it("should expand when the host sets expanded", () => {
		const tile = fixture.nativeElement.querySelector(".cds--tile--expandable");
		expect(tile.classList).not.toContain("cds--tile--is-expanded");
		expect(tile.getAttribute("aria-expanded")).toBe("false");

		wrapper.expanded = true;
		fixture.detectChanges(false);

		expect(tile.classList).toContain("cds--tile--is-expanded");
		expect(tile.getAttribute("aria-expanded")).toBe("true");
	});

	it("should expand and collapse when the tile is clicked", () => {
		const tile = fixture.nativeElement.querySelector(".cds--tile--expandable");

		tile.click();
		fixture.detectChanges(false);

		expect(wrapper.tile.expanded).toBe(true);
		expect(tile.classList).toContain("cds--tile--is-expanded");
		expect(tile.getAttribute("aria-expanded")).toBe("true");

		tile.click();
		fixture.detectChanges(false);

		expect(wrapper.tile.expanded).toBe(false);
		expect(tile.classList).not.toContain("cds--tile--is-expanded");
	});

	it("should set a max height when expanded", () => {
		const tile = fixture.nativeElement.querySelector(".cds--tile--expandable");

		tile.click();
		fixture.detectChanges(false);

		expect(tile.style.maxHeight).toBeTruthy();
		expect(tile.style.maxHeight).toContain("px");
	});

	it("should render the interactive variant as a div", () => {
		wrapper.interactive = true;
		fixture.detectChanges(false);

		expect(fixture.nativeElement.querySelector("button.cds--tile--expandable")).toBeFalsy();
		expect(fixture.nativeElement.querySelector("div.cds--tile--expandable")).toBeTruthy();
	});
});
