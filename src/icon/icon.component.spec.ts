/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { TestBed } from "@angular/core/testing";
import { HttpModule } from "@angular/http";
import { Icon } from "./icon.component";
import { IconService } from "./icon.service";

describe("Icon", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Icon],
			providers: [IconService],
			imports: [HttpModule]
		});
	});

	xit("should work", () => {
		let fixture = TestBed.createComponent(Icon);
		let iconService = fixture.debugElement.injector.get(IconService);
		let fakeicon = `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"></svg>`;
		let spy = spyOn(iconService, "getIcon").and.returnValue(Promise.resolve(fakeicon));
		expect(fixture.componentInstance instanceof Icon).toBe(true);
	});

	xit("should return the correct sizes", () => {
		let iconService = TestBed.get(IconService);
		expect(iconService.size2px("")).toEqual("16px");
		expect(iconService.size2px("xs")).toEqual("14px");
		expect(iconService.size2px("sm")).toEqual("16px");
		expect(iconService.size2px("md")).toEqual("20px");
		expect(iconService.size2px("lg")).toEqual("30px");
		expect(iconService.size2px("100")).toEqual("100px");
	});
});
