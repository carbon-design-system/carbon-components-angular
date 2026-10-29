import { Component, ViewChild } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TableModule } from "../table.module";
import { TableItem } from "../table-item.class";
import { TableCheckbox } from "./table-checkbox.component";
import { TableRadio } from "./table-radio.component";
import { TableData } from "./table-data.component";
import { TableExpandButton } from "./table-expand-button.component";

@Component({
	template: `
		<table>
			<tbody>
				<tr>
					<td cdsTableCheckbox [size]="size" [selected]="selected" [label]="label" [row]="row" [skeleton]="skeleton"></td>
					<td cdsTableRadio [selected]="selected" [label]="label" [row]="row"></td>
					<td cdsTableData [item]="item" [skeleton]="skeleton"></td>
					<td cdsTableExpandButton [expandable]="expandable" [expanded]="expanded"></td>
				</tr>
			</tbody>
		</table>
	`
})
class TableCellsTest {
	@ViewChild(TableCheckbox) checkbox: TableCheckbox;
	@ViewChild(TableRadio) radio: TableRadio;
	@ViewChild(TableData) data: TableData;
	@ViewChild(TableExpandButton) expandButton: TableExpandButton;

	size = "md";
	selected = false;
	label = "select row";
	row = [new TableItem({ data: "one" })];
	item = new TableItem({ data: "cell value" });
	skeleton = false;
	expandable = true;
	expanded = false;
}

describe("Table cell components", () => {
	let fixture: ComponentFixture<TableCellsTest>;
	let wrapper: TableCellsTest;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TableCellsTest],
			imports: [TableModule]
		});

		fixture = TestBed.createComponent(TableCellsTest);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
	});

	it("should work", () => {
		expect(wrapper.checkbox instanceof TableCheckbox).toBe(true);
		expect(wrapper.radio instanceof TableRadio).toBe(true);
		expect(wrapper.data instanceof TableData).toBe(true);
		expect(wrapper.expandButton instanceof TableExpandButton).toBe(true);
	});

	it("should render the cell item data", () => {
		expect(fixture.nativeElement.querySelector("[cdsTableData]").textContent).toContain("cell value");
	});

	it("should render the expand button only when the row is expandable", () => {
		expect(fixture.nativeElement.querySelector(".cds--table-expand__button")).toBeTruthy();

		wrapper.expandable = false;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector(".cds--table-expand__button")).toBeFalsy();
	});

	it("should check the checkbox and radio when the row is selected", () => {
		const checkbox = fixture.nativeElement.querySelector("[cdsTableCheckbox] input");
		expect(checkbox.checked).toBe(false);

		wrapper.selected = true;
		fixture.detectChanges();

		expect(checkbox.checked).toBe(true);
		expect(fixture.nativeElement.querySelector("[cdsTableRadio] input").checked).toBe(true);
	});

	it("should update the cell when its item data changes", () => {
		expect(fixture.nativeElement.querySelector("[cdsTableData]").textContent).toContain("cell value");

		wrapper.item.data = "updated value";
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector("[cdsTableData]").textContent).toContain("updated value");
	});

	it("should hide the checkbox in skeleton state", () => {
		wrapper.skeleton = true;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector("[cdsTableCheckbox] cds-checkbox")).toBeFalsy();
	});

	it("should mark the expand button expanded", () => {
		const row = fixture.nativeElement.querySelector("[cdsTableExpandButton]");
		expect(row.classList).not.toContain("cds--table-expand--expanded");

		wrapper.expanded = true;
		fixture.detectChanges();

		expect(wrapper.expandButton.expanded).toBe(true);
	});
});
