import { Component, OnInit, ViewChild } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";

import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TableModel } from "./table-model.class";
import { Table } from "./index";
import { TableModule } from "./table.module";
import { TableHeaderItem } from "./table-header-item.class";
import { TableItem } from "./table-item.class";
import { TableContainer } from "./table-container.component";
import { TableHeader } from "./header/table-header.component";
import { TableHeaderDecorator } from "./header/table-header-decorator.component";
import { TableToolbar } from "./toolbar/table-toolbar.component";
import { TableToolbarSearch } from "./toolbar/table-toolbar-search.component";
import { advancedFakeAsync } from "../test-helpers/change-detection";

@Component({
	template: `
		<cds-table
			[model]="tableModel"
			(sort)="simpleSort()"
			(selectRow)="onChange()"
			(deselectRow)="onChange()"
			size="md"
			title="title"
			[isDataGrid]="isDataGrid"
			[showSelectionColumn]="showSelectionColumn">
		</cds-table>`,
	imports: [TableModule]
})
class TableTest implements OnInit {
	tableModel = new TableModel();
	showSelectionColumn = true;
	isDataGrid = false;

	ngOnInit() {
		this.tableModel.header = [new TableHeaderItem({data: "Column"})];
		this.tableModel.data = [
			[new TableItem({data: "0"})],
			[new TableItem({data: "3"})],
			[new TableItem({data: "1"})],
			[new TableItem({data: "2"})]
		];
	}

	simpleSort() {}
	onChange() {}
}

describe("Table", () => {
	let fixture, tableInstance;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [TableTest]
		});

		fixture = TestBed.createComponent(TableTest);
		tableInstance = fixture.debugElement.query(By.css("cds-table"));
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(Table);
		expect(fixture.componentInstance instanceof Table).toBe(true);
	});

	it("should call the row sort function", () => {
		spyOn(fixture.componentInstance, "simpleSort");
		tableInstance.nativeElement.querySelector("thead .cds--table-sort").click();
		fixture.detectChanges();
		expect(fixture.componentInstance.simpleSort).toHaveBeenCalled();
	});

	xit("should call the row filter function", () => {});

	it("should emit a select all event", () => {
		spyOn(tableInstance.componentInstance.selectAll, "emit");

		let checkbox = fixture.nativeElement.querySelector("th input[type='checkbox']");
		checkbox.click();
		fixture.detectChanges();

		expect(tableInstance.componentInstance.selectAll.emit).toHaveBeenCalled();
	});

	it("should emit a deselect all event", () => {
		spyOn(tableInstance.componentInstance.deselectAll, "emit");

		let checkbox = fixture.nativeElement.querySelector("th input[type='checkbox']");
		checkbox.click();
		fixture.detectChanges();
		checkbox.click();
		fixture.detectChanges();

		expect(tableInstance.componentInstance.deselectAll.emit).toHaveBeenCalled();
	});

	it("should emit a select row event", () => {
		spyOn(tableInstance.componentInstance.selectRow, "emit");

		let checkbox = fixture.nativeElement.querySelector("td input[type='checkbox']");
		checkbox.click();
		fixture.detectChanges();

		expect(tableInstance.componentInstance.selectRow.emit).toHaveBeenCalled();
	});

	it("should emit a deselect row event", () => {
		spyOn(tableInstance.componentInstance.deselectRow, "emit");

		let checkbox = fixture.nativeElement.querySelector("td input[type='checkbox']");
		checkbox.click();
		fixture.detectChanges();
		checkbox.click();
		fixture.detectChanges();

		expect(tableInstance.componentInstance.deselectRow.emit).toHaveBeenCalled();
	});

	it("should set the .cds--data-table--md class", () => {
		expect(tableInstance.nativeElement.querySelector(".cds--data-table--md")).toBeTruthy();
	});

	it("should not show checkboxes when showSelectionColumn is false", () => {
		expect(tableInstance.nativeElement.querySelector("cds-checkbox")).toBeTruthy();

		fixture.componentInstance.showSelectionColumn = false;
		fixture.detectChanges();

		expect(tableInstance.nativeElement.querySelector("cds-checkbox")).not.toBeTruthy();
	});

	it("should set title to 'title", () => {
		expect(tableInstance.nativeElement.getAttribute("title")).toBe("title");
	});

	it("should put the select all checkbox in the indeterminate state when some rows are selected", () => {
		const model = fixture.componentInstance.tableModel;
		model.selectRow(0, true);
		fixture.detectChanges();

		expect(tableInstance.componentInstance.selectAllCheckbox).toBe(true);
		expect(tableInstance.componentInstance.selectAllCheckboxSomeSelected).toBe(true);
		expect(fixture.nativeElement.querySelector("thead cds-checkbox input").indeterminate).toBe(true);
	});

	it("should clear the indeterminate state once every row is selected", () => {
		const model = fixture.componentInstance.tableModel;
		model.selectRow(0, true);
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector("thead cds-checkbox input").indeterminate).toBe(true);

		model.data.forEach((_row, index) => model.selectRow(index, true));
		fixture.detectChanges();

		expect(tableInstance.componentInstance.selectAllCheckboxSomeSelected).toBe(false);
		expect(fixture.nativeElement.querySelector("thead cds-checkbox input").indeterminate).toBe(false);
	});

	it("should re-render the rows when the model data changes", () => {
		const model = fixture.componentInstance.tableModel;
		expect(fixture.nativeElement.querySelectorAll("tbody tr").length).toBe(4);

		model.data = [
			[new TableItem({ data: "0" })],
			[new TableItem({ data: "1" })]
		];
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelectorAll("tbody tr").length).toBe(2);
	});

	it("should swap in the no data template when the model empties", () => {
		const model = fixture.componentInstance.tableModel;
		expect(fixture.nativeElement.querySelector("tbody")).toBeTruthy();

		model.data = [[]];
		fixture.detectChanges();

		expect(tableInstance.componentInstance.noData).toBe(true);
		expect(fixture.nativeElement.querySelector("tbody")).toBeFalsy();
	});

	it("should show the loading indicator while the model is loading", () => {
		const model = fixture.componentInstance.tableModel;
		expect(fixture.nativeElement.querySelector(".table_loading-indicator")).toBeFalsy();

		model.isLoading = true;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector(".table_loading-indicator")).toBeTruthy();

		model.isLoading = false;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector(".table_loading-indicator")).toBeFalsy();
	});

	it("should show the end of data indicator when the model sets it", () => {
		const model = fixture.componentInstance.tableModel;
		expect(fixture.nativeElement.querySelector(".table_end-indicator")).toBeFalsy();

		model.isEnd = true;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector(".table_end-indicator")).toBeTruthy();
	});

	it("should expand a row when the model expands it", fakeAsync(() => {
		const model = fixture.componentInstance.tableModel;
		fixture.componentInstance.isDataGrid = true;
		fixture.detectChanges();

		model.expandRow(0, true);
		advancedFakeAsync(fixture);

		expect(fixture.nativeElement.querySelector(".cds--expandable-row")).toBeTruthy();
	}));
});

@Component({
	template: `
		<cds-table-container [aiEnabled]="aiEnabled">
			<cds-table-header>
				<h4>{{title}}</h4>
				<cds-table-header-decorator *ngIf="showDecorator">
					<span class="decorator-content">AI</span>
				</cds-table-header-decorator>
			</cds-table-header>
			<cds-table-toolbar [model]="model" [size]="size" (cancel)="onCancel()">
				<cds-table-toolbar-content>
					<cds-table-toolbar-search [(ngModel)]="searchValue" [expandable]="true"></cds-table-toolbar-search>
					<cds-table-toolbar-actions>
						<button cdsButton="primary">Action</button>
					</cds-table-toolbar-actions>
				</cds-table-toolbar-content>
			</cds-table-toolbar>
		</cds-table-container>
	`,
	imports: [TableModule, FormsModule]
})
class TableContainerTest {
	@ViewChild(TableContainer) container: TableContainer;
	@ViewChild(TableHeader) header: TableHeader;
	@ViewChild(TableHeaderDecorator) decorator: TableHeaderDecorator;
	@ViewChild(TableToolbar) toolbar: TableToolbar;
	@ViewChild(TableToolbarSearch) toolbarSearch: TableToolbarSearch;

	model = new TableModel();
	size = "md";
	aiEnabled = false;
	title = "Table title";
	showDecorator = false;
	searchValue = "";

	constructor() {
		this.model.header = [new TableHeaderItem({ data: "Column" })];
		this.model.data = [
			[new TableItem({ data: "one" })],
			[new TableItem({ data: "two" })]
		];
	}

	onCancel() {}
}

describe("TableContainer, TableHeader and TableToolbar", () => {
	let fixture: ComponentFixture<TableContainerTest>;
	let wrapper: TableContainerTest;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [TableContainerTest]
		});

		fixture = TestBed.createComponent(TableContainerTest);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
	});

	it("should work", () => {
		expect(wrapper.container instanceof TableContainer).toBe(true);
		expect(wrapper.header instanceof TableHeader).toBe(true);
		expect(wrapper.toolbar instanceof TableToolbar).toBe(true);
		expect(wrapper.toolbarSearch instanceof TableToolbarSearch).toBe(true);
	});

	it("should apply the container and header classes", () => {
		expect(fixture.nativeElement.querySelector("cds-table-container").classList)
			.toContain("cds--data-table-container");
		expect(fixture.nativeElement.querySelector("cds-table-header").classList)
			.toContain("cds--data-table-header");
	});

	it("should project the toolbar content and actions", () => {
		expect(fixture.nativeElement.querySelector("cds-table-toolbar-content")).toBeTruthy();
		expect(fixture.nativeElement.querySelector("cds-table-toolbar-actions")).toBeTruthy();
		expect(fixture.nativeElement.textContent).toContain("Action");
	});

	it("should apply the ai enabled class to the container", () => {
		const container = fixture.nativeElement.querySelector("cds-table-container");
		expect(container.classList).not.toContain("cds--data-table-container--ai-enabled");

		wrapper.aiEnabled = true;
		fixture.detectChanges();

		expect(container.classList).toContain("cds--data-table-container--ai-enabled");
	});

	it("should render the header decorator when enabled", () => {
		expect(fixture.nativeElement.querySelector(".cds--data-table-header__decorator")).toBeFalsy();

		wrapper.showDecorator = true;
		fixture.detectChanges();

		expect(wrapper.decorator instanceof TableHeaderDecorator).toBe(true);
		expect(fixture.nativeElement.querySelector(".cds--data-table-header__decorator")).toBeTruthy();
		expect(fixture.nativeElement.querySelector(".decorator-content").textContent).toContain("AI");
	});

	it("should reveal the batch action bar when the model gains a selection", () => {
		const actionBar = fixture.nativeElement.querySelector(".cds--batch-actions");
		expect(actionBar.classList).not.toContain("cds--batch-actions--active");

		wrapper.model.selectRow(0, true);
		fixture.detectChanges();

		expect(actionBar.classList).toContain("cds--batch-actions--active");
	});

	it("should show the number of selected rows", () => {
		wrapper.model.selectRow(0, true);
		wrapper.model.selectRow(1, true);
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector(".cds--batch-summary__para").textContent).toContain("2");
	});

	it("should hide the batch action bar when the model selection is cleared", () => {
		wrapper.model.selectRow(0, true);
		fixture.detectChanges();
		const actionBar = fixture.nativeElement.querySelector(".cds--batch-actions");
		expect(actionBar.classList).toContain("cds--batch-actions--active");

		wrapper.model.selectAll(false);
		fixture.detectChanges();

		expect(actionBar.classList).not.toContain("cds--batch-actions--active");
	});

	it("should open the toolbar search when it starts with a value", fakeAsync(() => {
		const withValue = TestBed.createComponent(TableContainerTest);
		withValue.componentInstance.searchValue = "preset";
		withValue.detectChanges();

		advancedFakeAsync(withValue);
		advancedFakeAsync(withValue);

		expect(withValue.componentInstance.toolbarSearch.active).toBe(true);
		// the toolbar variant carries its own active class rather than the search one
		expect(withValue.nativeElement.querySelector(".cds--search").classList)
			.toContain("cds--toolbar-search-container-active");
	}));
});
