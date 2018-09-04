/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import {
	async,
	ComponentFixture,
	TestBed
} from "@angular/core/testing";

import { Tile } from "./tile.component";

describe("Tile", () => {
	let component: Tile;
	let fixture: ComponentFixture<Tile>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Tile],
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
