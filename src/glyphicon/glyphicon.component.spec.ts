/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { TestBed } from "@angular/core/testing";
import { HttpModule } from "@angular/http";
import { Glyphicon } from "./glyphicon.component";
import { IconService } from "./glyphicon.service";

describe("Glyphicon", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Glyphicon],
			providers: [IconService],
			imports: [HttpModule]
		});
	});

	it("should work", () => {
		let fixture = TestBed.createComponent(Glyphicon);
		let iconService = fixture.debugElement.injector.get(IconService);
		let fakeicon = `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"></svg>`;
		let spy = spyOn(iconService, "getIcon").and.returnValue(Promise.resolve(fakeicon));
		expect(fixture.componentInstance instanceof Glyphicon).toBe(true);
	});

	it("should return the correct sizes", () => {
		let iconService = TestBed.get(IconService);
		expect(iconService.size2px("")).toEqual("16px");
		expect(iconService.size2px("xs")).toEqual("14px");
		expect(iconService.size2px("sm")).toEqual("16px");
		expect(iconService.size2px("md")).toEqual("20px");
		expect(iconService.size2px("lg")).toEqual("30px");
		expect(iconService.size2px("100")).toEqual("100px");
	});
});