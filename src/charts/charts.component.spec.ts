import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BarChart } from "./bar-chart.component";

describe("BarChart", () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BarChart ]
		})
		.compileComponents();
	}));

	it("should create", () => {
		const fixture = TestBed.createComponent(BarChart);
		const pagComponent = fixture.componentInstance;
		expect(pagComponent instanceof BarChart).toBe(true);
	});
});
