/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from "@angular/core/testing";
import { Component, ViewChild } from "@angular/core";
import { TileGroup } from "./tile-group.component";
import { TilesModule } from "./tiles.module";
import { advancedFakeAsync } from "../test-helpers/change-detection";

import { Tile } from "./tile.component";

describe("Tile", () => {
	let component: Tile;
	let fixture: ComponentFixture<Tile>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [Tile]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Tile);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create a Tile", () => {
		expect(component).toBeTruthy();
	});
});

@Component({
	template: `
		<cds-tile-group [multiple]="multiple" [name]="name">
			<cds-selection-tile value="one">One</cds-selection-tile>
			<cds-selection-tile value="two">Two</cds-selection-tile>
		</cds-tile-group>
	`,
	imports: [TilesModule]
})
class TileGroupTest {
	@ViewChild(TileGroup) group: TileGroup;
	multiple = false;
	name = "cd-tile-group";
}

describe("TileGroup", () => {
	let fixture: ComponentFixture<TileGroupTest>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [TileGroupTest]
		});
	});

	it("should render selection tiles as checkboxes when multiple is set", fakeAsync(() => {
		fixture = TestBed.createComponent(TileGroupTest);
		fixture.componentInstance.multiple = true;
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		const inputs = fixture.nativeElement.querySelectorAll(".cds--tile-input");
		expect(inputs.length).toBe(2);
		Array.from<HTMLInputElement>(inputs).forEach(input => expect(input.type).toBe("checkbox"));
		expect(fixture.nativeElement.querySelector(".cds--tile__checkmark--persistent")).toBeTruthy();
	}));

	it("should render selection tiles as radios by default", fakeAsync(() => {
		fixture = TestBed.createComponent(TileGroupTest);
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		const inputs = fixture.nativeElement.querySelectorAll(".cds--tile-input");
		Array.from<HTMLInputElement>(inputs).forEach(input => expect(input.type).toBe("radio"));
		expect(fixture.nativeElement.querySelector(".cds--tile__checkmark--persistent")).toBeFalsy();
	}));

	it("should give every tile the group name", fakeAsync(() => {
		fixture = TestBed.createComponent(TileGroupTest);
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		const inputs = fixture.nativeElement.querySelectorAll(".cds--tile-input");
		Array.from<HTMLInputElement>(inputs).forEach(input => expect(input.name).toBe("cd-tile-group"));
	}));

	it("should emit the group selection when a tile is picked", fakeAsync(() => {
		fixture = TestBed.createComponent(TileGroupTest);
		fixture.detectChanges();
		advancedFakeAsync(fixture);

		const selectedSpy = jasmine.createSpy("selected");
		fixture.componentInstance.group.selected.subscribe(selectedSpy);

		const inputs = fixture.nativeElement.querySelectorAll(".cds--tile-input");
		inputs[1].dispatchEvent(new Event("change"));
		advancedFakeAsync(fixture);

		expect(selectedSpy).toHaveBeenCalledWith(
			jasmine.objectContaining({ value: "two", name: "cd-tile-group" })
		);
	}));
});
