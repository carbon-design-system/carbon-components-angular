import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContainedListItem } from "./contained-list-item.component";

describe("ContainedListItem", () => {
	let component: ContainedListItem;
	let fixture: ComponentFixture<ContainedListItem>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ContainedListItem]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ContainedListItem);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
