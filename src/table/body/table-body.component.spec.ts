import { Component, ViewChild } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TableModule } from "../table.module";
import { TableModel } from "../table-model.class";
import { TableHeaderItem } from "../table-header-item.class";
import { TableItem } from "../table-item.class";
import { TableBody } from "./table-body.component";

@Component({
	template: `
		<table>
			<tbody
				cdsTableBody
				[model]="model"
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[enableSingleSelect]="enableSingleSelect"
				[skeleton]="skeleton">
			</tbody>
		</table>
	`
})
class TableBodyTest {
	@ViewChild(TableBody) body: TableBody;
	model = new TableModel();
	size = "md";
	showSelectionColumn = true;
	enableSingleSelect = false;
	skeleton = false;

	constructor() {
		this.model.header = [new TableHeaderItem({ data: "Column" })];
		this.model.data = [
			[new TableItem({ data: "one" })],
			[new TableItem({ data: "two" })]
		];
	}
}

describe("TableBody", () => {
	let fixture: ComponentFixture<TableBodyTest>;
	let wrapper: TableBodyTest;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TableBodyTest],
			imports: [TableModule]
		});

		fixture = TestBed.createComponent(TableBodyTest);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
	});

	it("should work", () => {
		expect(wrapper.body instanceof TableBody).toBe(true);
	});

	it("should render a row per model row", () => {
		expect(fixture.nativeElement.querySelectorAll("tr[cdsTableRow]").length).toBe(2);
		expect(fixture.nativeElement.textContent).toContain("one");
		expect(fixture.nativeElement.textContent).toContain("two");
	});

	it("should render the selection column when enabled", () => {
		expect(fixture.nativeElement.querySelector("[cdsTableCheckbox]")).toBeTruthy();

		wrapper.showSelectionColumn = false;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector("[cdsTableCheckbox]")).toBeFalsy();
	});

	it("should render radios instead of checkboxes for single select", () => {
		wrapper.enableSingleSelect = true;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector("[cdsTableRadio]")).toBeTruthy();
		expect(fixture.nativeElement.querySelector("[cdsTableCheckbox]")).toBeFalsy();
	});

	it("should render rows added to the model", () => {
		wrapper.model.data = [
			[new TableItem({ data: "one" })],
			[new TableItem({ data: "two" })],
			[new TableItem({ data: "three" })]
		];
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelectorAll("tr[cdsTableRow]").length).toBe(3);
		expect(fixture.nativeElement.textContent).toContain("three");
	});

	it("should update a cell when its model data changes", () => {
		wrapper.model.data[0][0].data = "updated";
		fixture.detectChanges();

		expect(fixture.nativeElement.textContent).toContain("updated");
		expect(fixture.nativeElement.textContent).not.toContain("one");
	});

	it("should mark a row selected when the model selects it", () => {
		const firstRow = fixture.nativeElement.querySelectorAll("tr[cdsTableRow]")[0];
		expect(firstRow.classList).not.toContain("cds--data-table--selected");

		wrapper.model.selectRow(0, true);
		fixture.detectChanges();

		expect(firstRow.classList).toContain("cds--data-table--selected");
		expect(fixture.nativeElement.querySelector("[cdsTableCheckbox] input").checked).toBe(true);
	});

	it("should expand a row when the model expands it", () => {
		wrapper.model.data = [
			[new TableItem({ data: "one", expandedData: "expanded content" })],
			[new TableItem({ data: "two" })]
		];
		fixture.detectChanges();

		// the expanded row is always rendered, its visibility is carried by the classes
		const parentRow = fixture.nativeElement.querySelectorAll("tr[cdsTableRow]")[0];
		expect(parentRow.classList).not.toContain("cds--expandable-row");

		wrapper.model.expandRow(0, true);
		fixture.detectChanges();

		expect(parentRow.classList).toContain("cds--expandable-row");
		expect(fixture.nativeElement.querySelector("[cdsTableExpandedRow]")).toBeTruthy();
		expect(fixture.nativeElement.textContent).toContain("expanded content");
	});

	it("should stop rendering cells for a column hidden on the model", () => {
		expect(fixture.nativeElement.querySelectorAll("td[cdsTableData]").length).toBe(2);

		wrapper.model.header[0].visible = false;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelectorAll("td[cdsTableData]").length).toBe(0);
	});
});
