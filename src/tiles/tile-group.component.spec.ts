import { Component, ViewChild, ViewChildren, QueryList } from "@angular/core";
import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { TilesModule, TileGroup, SelectionTile } from "./";

@Component({
	template: `
		<cds-tile-group [multiple]="false">
			<cds-selection-tile value="tile1" [selected]="true">First</cds-selection-tile>
			<cds-selection-tile value="tile2">Second</cds-selection-tile>
			<cds-selection-tile value="tile3">Third</cds-selection-tile>
		</cds-tile-group>
	`
})
class SingleSelectHostComponent {
	@ViewChild(TileGroup, { static: true }) group!: TileGroup;
	@ViewChildren(SelectionTile) tiles!: QueryList<SelectionTile>;
}

describe("TileGroup", () => {
	describe("single select behaviour", () => {
		let fixture: ComponentFixture<SingleSelectHostComponent>;

		beforeEach(waitForAsync(() => {
			TestBed.configureTestingModule({
				imports: [TilesModule],
				declarations: [SingleSelectHostComponent]
			}).compileComponents();
		}));

		beforeEach(() => {
			fixture = TestBed.createComponent(SingleSelectHostComponent);
		});

		it("clears previous selection when another tile is chosen", fakeAsync(() => {
			fixture.detectChanges();
			tick();
			fixture.detectChanges();

			let labels = fixture.debugElement.queryAll(By.css("label.cds--tile--selectable"));

			expect(labels[0].nativeElement.classList).toContain("cds--tile--is-selected");
			expect(labels[1].nativeElement.classList).not.toContain("cds--tile--is-selected");
			expect(labels[2].nativeElement.classList).not.toContain("cds--tile--is-selected");

			labels[1].nativeElement.click();
			fixture.detectChanges();
			tick();
			fixture.detectChanges();

			labels = fixture.debugElement.queryAll(By.css("label.cds--tile--selectable"));

			expect(labels[0].nativeElement.classList).not.toContain("cds--tile--is-selected");
			expect(labels[1].nativeElement.classList).toContain("cds--tile--is-selected");
			expect(labels[2].nativeElement.classList).not.toContain("cds--tile--is-selected");

			const tiles = fixture.componentInstance.tiles.toArray();
			expect(tiles[0].selected).toBeFalse();
			expect(tiles[1].selected).toBeTrue();
			expect(tiles[2].selected).toBeFalse();

			labels[2].nativeElement.click();
			fixture.detectChanges();
			tick();
			fixture.detectChanges();

			labels = fixture.debugElement.queryAll(By.css("label.cds--tile--selectable"));

			expect(labels[0].nativeElement.classList).not.toContain("cds--tile--is-selected");
			expect(labels[1].nativeElement.classList).not.toContain("cds--tile--is-selected");
			expect(labels[2].nativeElement.classList).toContain("cds--tile--is-selected");

			expect(tiles[0].selected).toBeFalse();
			expect(tiles[1].selected).toBeFalse();
			expect(tiles[2].selected).toBeTrue();
		}));
	});
});
