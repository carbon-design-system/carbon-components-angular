import { Component, ViewChild } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";

import { TableModule } from "../table.module";
import { TableModel } from "../table-model.class";
import { TableHeaderItem } from "../table-header-item.class";
import { TableItem } from "../table-item.class";
import { TableHead } from "./table-head.component";
import { TableHeadCell } from "./table-head-cell.component";
import { TableHeadCheckbox } from "./table-head-checkbox.component";
import { TableHeadExpand } from "./table-head-expand.component";
import { advancedFakeAsync } from "../../test-helpers/change-detection";

@Component({
	template: `
		<table>
			<thead
				cdsTableHead
				[model]="model"
				[sortable]="sortable"
				[showSelectionColumn]="showSelectionColumn"
				[selectAllCheckbox]="selectAllCheckbox"
				[selectAllCheckboxSomeSelected]="selectAllCheckboxSomeSelected"
				[showExpandAllToggle]="showExpandAllToggle"
				[skeleton]="skeleton"
				(sort)="onSort($event)">
			</thead>
		</table>
	`
})
class TableHeadTest {
	@ViewChild(TableHead) head: TableHead;
	model = new TableModel();
	sortable = true;
	showSelectionColumn = true;
	selectAllCheckbox = false;
	selectAllCheckboxSomeSelected = false;
	showExpandAllToggle = false;
	skeleton = false;

	constructor() {
		this.model.header = [
			new TableHeaderItem({ data: "Column one" }),
			new TableHeaderItem({ data: "Column two" })
		];
		this.model.data = [[new TableItem({ data: "a" }), new TableItem({ data: "b" })]];
	}

	// subscribing to `sort` is what makes the head cells render their sort buttons
	onSort(_index: number) {}
}

describe("TableHead", () => {
	let fixture: ComponentFixture<TableHeadTest>;
	let wrapper: TableHeadTest;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TableHeadTest],
			imports: [TableModule]
		});

		fixture = TestBed.createComponent(TableHeadTest);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
	});

	it("should work", () => {
		expect(wrapper.head instanceof TableHead).toBe(true);
	});

	it("should render a head cell per visible column", () => {
		expect(fixture.nativeElement.querySelectorAll("[cdsTableHeadCell]").length).toBe(2);
		expect(fixture.nativeElement.textContent).toContain("Column one");
		expect(fixture.nativeElement.textContent).toContain("Column two");
	});

	it("should render the select all checkbox only when the selection column is shown", () => {
		expect(fixture.nativeElement.querySelector("[cdsTableHeadCheckbox]")).toBeTruthy();

		wrapper.showSelectionColumn = false;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector("[cdsTableHeadCheckbox]")).toBeFalsy();
	});

	it("should render the expand column once the model gains expandable rows", () => {
		expect(fixture.nativeElement.querySelector("[cdsTableHeadExpand]")).toBeFalsy();

		wrapper.showExpandAllToggle = true;
		wrapper.model.data = [[
			new TableItem({ data: "a", expandedData: "more" }),
			new TableItem({ data: "b" })
		]];
		fixture.detectChanges();

		expect(wrapper.model.hasExpandableRows()).toBe(true);
		expect(fixture.nativeElement.querySelector("[cdsTableHeadExpand]")).toBeTruthy();
	});

	it("should measure the scrollbar width after the view is laid out", fakeAsync(() => {
		advancedFakeAsync(fixture);

		expect(wrapper.head.scrollbarWidth).toBeDefined();
		expect(typeof wrapper.head.scrollbarWidth).toBe("number");
	}));

	it("should update a column title when the model changes", () => {
		expect(fixture.nativeElement.textContent).toContain("Column one");

		wrapper.model.header[0].data = "Renamed column";
		fixture.detectChanges();

		expect(fixture.nativeElement.textContent).toContain("Renamed column");
		expect(fixture.nativeElement.textContent).not.toContain("Column one");
	});

	it("should stop rendering a column hidden in place on the model", () => {
		expect(fixture.nativeElement.querySelectorAll("[cdsTableHeadCell]").length).toBe(2);

		wrapper.model.header[1].visible = false;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelectorAll("[cdsTableHeadCell]").length).toBe(1);
	});

	it("should mark the column active when the model is sorted", () => {
		wrapper.model.header[0].sorted = true;
		wrapper.model.header[0].ascending = true;
		fixture.detectChanges();

		const sortButton = fixture.nativeElement.querySelector("[cdsTableHeadCell] .cds--table-sort");
		expect(sortButton.classList).toContain("cds--table-sort--active");
	});

	it("should put the select all checkbox in the indeterminate state", () => {
		const checkbox = fixture.nativeElement.querySelector("[cdsTableHeadCheckbox] input");
		expect(checkbox.indeterminate).toBe(false);

		wrapper.selectAllCheckbox = true;
		wrapper.selectAllCheckboxSomeSelected = true;
		fixture.detectChanges();

		expect(checkbox.indeterminate).toBe(true);
	});
});
