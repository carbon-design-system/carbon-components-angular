import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContainedList } from "./contained-list.component";

describe("ContainedList", () => {
	let component: ContainedList;
	let fixture: ComponentFixture<ContainedList>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ContainedList]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ContainedList);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
