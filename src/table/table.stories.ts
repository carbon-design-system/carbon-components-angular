import { PaginationModule } from "./../pagination/pagination.module";
import {
	TemplateRef,
	Component,
	ViewChild,
	OnInit,
	Input,
	OnChanges,
	SimpleChanges
} from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import {
	withKnobs,
	boolean,
	select,
	number
} from "@storybook/addon-knobs/angular";

import {
	Table,
	TableModule,
	TableModel,
	TableItem,
	TableHeaderItem,
	NFormsModule,
	DialogModule,
	SearchModule,
	ButtonModule
} from "../";

import { clone } from "../utils/utils";
import { DocumentationModule } from "./../documentation-component/documentation.module";

@Component({
	selector: "app-table",
	template: `
		<ibm-table
			[model]="model"
			[size]="size"
			[showSelectionColumn]="showSelectionColumn"
			[striped]="striped"
			[isDataGrid]="isDataGrid"
			(sort)="simpleSort($event)">
			<ng-content></ng-content>
		</ibm-table>
	`
})
class TableStory implements OnInit, OnChanges {
	@Input() model = new TableModel();
	@Input() size = "md";
	@Input() showSelectionColumn = true;
	@Input() striped = true;
	@Input() sortable = true;
	@Input() isDataGrid = false;

	ngOnInit() {
		this.model.header = [
			new TableHeaderItem({
				data: "Name"
			}),
			new TableHeaderItem({
				data: "hwer",
				className: "my-class"
			})
		];
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.sortable) {
			for (let column of this.model.header) {
				column.sortable = changes.sortable.currentValue;
			}
		}
	}

	simpleSort(index: number) {
		sort(simpleModel, index);
	}
}

@Component({
	selector: "app-custom-table",
	template: `
		<button class="bx--btn bx--btn--sm bx--btn--primary" (click)="addRow()">Add row</button>
		<button class="bx--btn bx--btn--sm bx--btn--primary" (click)="addColumn()">Add column</button>

		<ng-template #customTableItemTemplate let-data="data">
			<a [attr.href]="data.link">{{data.name}} {{data.surname}}</a>
		</ng-template>
		<ng-template #customHeaderTemplate let-data="data">
			<i><a [attr.href]="data.link">{{data.name}}</a></i>
		</ng-template>

		<ibm-table
			[model]="model"
			[size]="size"
			[showSelectionColumn]="showSelectionColumn"
			[striped]="striped"
			[isDataGrid]="isDataGrid"
			(sort)="customSort($event)">
		</ibm-table>
	`
})
class DynamicTableStory implements OnInit {
	@Input() model = new TableModel();
	@Input() size = "md";
	@Input() showSelectionColumn = true;
	@Input() striped = true;
	@Input() isDataGrid = false;

	@ViewChild("customHeaderTemplate")
	protected customHeaderTemplate: TemplateRef<any>;
	@ViewChild("customTableItemTemplate")
	protected customTableItemTemplate: TemplateRef<any>;

	ngOnInit() {
		this.model.data = [
			[new TableItem({data: "Name 1"}), new TableItem({data: {name: "Lessy", link: "/table"}, template: this.customTableItemTemplate})],
			[new TableItem({data: "Name 3"}), new TableItem({data: "swer"})],
			[new TableItem({data: "Name 2"}), new TableItem({data: {name: "Alice", surname: "Bob"}, template: this.customTableItemTemplate})],
			[new TableItem({data: "Name 4"}), new TableItem({data: "twer"})]
		];
		this.model.header = [
			new TableHeaderItem({data: "Very long title indeed"}),
			new CustomHeaderItem({
				data: {name: "Custom header", link: "/table"},
				template: this.customHeaderTemplate,
				style: {"width": "auto"}
			})
		];
	}

	customSort(index: number) {
		this.sort(this.model, index);
	}

	sort(model, index: number) {
		if (model.header[index].sorted) {
			// if already sorted flip sorting direction
			model.header[index].ascending = model.header[index].descending;
		}
		model.sort(index);
	}

	addRow() {
		const lastRowCopy = clone(this.model.row(this.model.data.length - 1));
		this.model.addRow(lastRowCopy);
	}

	addColumn() {
		let column = Array(this.model.data.length).fill(new TableItem({data: `Column ${this.model.row(0).length}`}));
		this.model.addColumn(column);
	}
}


@Component({
	selector: "app-expansion-table",
	template: `
		<ng-template #customTableItemTemplate let-data="data">
			<a [attr.href]="data.link">{{data.name}} {{data.surname}}</a>
		</ng-template>
		<ng-template #customHeaderTemplate let-data="data">
			<i><a [attr.href]="data.link">{{data.name}}</a></i>
		</ng-template>

		<ibm-table
			[model]="model"
			[size]="size"
			[showSelectionColumn]="showSelectionColumn"
			[striped]="striped"
			(sort)="customSort($event)"
			[isDataGrid]="isDataGrid">
		</ibm-table>
	`
})
class ExpansionTableStory implements OnInit {
	@Input() model = new TableModel();
	@Input() size = "md";
	@Input() showSelectionColumn = true;
	@Input() striped = true;
	@Input() isDataGrid = false;

	@ViewChild("customHeaderTemplate")
	protected customHeaderTemplate: TemplateRef<any>;
	@ViewChild("customTableItemTemplate")
	protected customTableItemTemplate: TemplateRef<any>;

	ngOnInit() {
		this.model.data = [
			[
				new TableItem({data: "Name 1", expandedData: "No template"}),
				new TableItem({data: {name: "Lessy", link: "#"}, template: this.customTableItemTemplate})
			],
			[
				new TableItem({
					data: "Name 3",
					expandedData: {name: "In", surname: "Template"},
					expandedTemplate: this.customTableItemTemplate
				}),
				new TableItem({data: "swer"})
			],
			[new TableItem({data: "Name 2"}), new TableItem({data: {name: "Alice", surname: "Bob"}, template: this.customTableItemTemplate})],
			[new TableItem({data: "Name 4"}), new TableItem({data: "twer"})]
		];
		this.model.header = [
			new TableHeaderItem({data: "Very long title indeed"}),
			new CustomHeaderItem({
				data: {name: "Custom header", link: "#"},
				template: this.customHeaderTemplate,
				style: {"width": "auto"}
			})
		];
	}

	customSort(index: number) {
		this.sort(this.model, index);
	}

	sort(model, index: number) {
		if (model.header[index].sorted) {
			// if already sorted flip sorting direction
			model.header[index].ascending = model.header[index].descending;
		}
		model.sort(index);
	}
}


@Component({
	selector: "app-overflow-table",
	template: `
		<ng-template #overflowMenuItemTemplate let-data="data">
			<ibm-overflow-menu>
				<ibm-overflow-menu-option>
					First Option
				</ibm-overflow-menu-option>
				<ibm-overflow-menu-option>
					Second Option
				</ibm-overflow-menu-option>
				<ibm-overflow-menu-option>
					Third Option
				</ibm-overflow-menu-option>
			</ibm-overflow-menu>
		</ng-template>

		<ibm-table
			[model]="model"
			[size]="size"
			[showSelectionColumn]="showSelectionColumn"
			[isDataGrid]="isDataGrid"
			[striped]="striped">
		</ibm-table>
	`
})
class OverflowTableStory implements OnInit {
	@Input() model = new TableModel();
	@Input() size = "md";
	@Input() showSelectionColumn = true;
	@Input() striped = true;
	@Input() isDataGrid = false;

	@ViewChild("overflowMenuItemTemplate")
	protected overflowMenuItemTemplate: TemplateRef<any>;

	ngOnInit() {
		this.model.data = [
			[new TableItem({data: "Name 1"}), new TableItem({data: {id: "1"}, template: this.overflowMenuItemTemplate})],
			[new TableItem({data: "Name 2"}), new TableItem({data: {id: "2"}, template: this.overflowMenuItemTemplate})],
			[new TableItem({data: "Name 3"}), new TableItem({data: {id: "3"}, template: this.overflowMenuItemTemplate})],
			[new TableItem({data: "Name 4"}), new TableItem({data: {id: "4"}, template: this.overflowMenuItemTemplate})]
		];
		this.model.header = [
			new TableHeaderItem({data: "Name"}),
			new TableHeaderItem({data: "Actions"})
		];
	}
}

@Component({
	selector: "app-pagination-table",
	template: `
		<ng-template #paginationTableItemTemplate let-data="data">
			<a [attr.href]="data.link">{{data.name}} {{data.surname}}</a>
		</ng-template>
		<ng-template #filterableHeaderTemplate let-data="data">
			<i><a [attr.href]="data.link">{{data.name}}</a></i>
		</ng-template>
		<ng-template #filter let-popover="popover" let-filter="data">
			<ibm-label class="first-label">
				Value
				<input type="text" [(ngModel)]="filter1" class="input-field">
				<button class="btn--primary" (click)="filter.data = filter1; popover.doClose()">Apply</button>
				<button class="btn--secondary" (click)="popover.doClose()">Cancel</button>
			</ibm-label>
		</ng-template>

		<ibm-table [model]="model" (sort)="paginationSort($event)"></ibm-table>
		<ibm-pagination [model]="model" (selectPage)="selectPage($event)"></ibm-pagination>
	`
})
class PaginationTableStory implements OnInit {
	@Input() model = new TableModel();

	@Input() get totalDataLength() {
		return this.model.totalDataLength;
	}
	set totalDataLength(value) {
		this.model.totalDataLength = value;
	}

	@ViewChild("filter")
	filter: TemplateRef<any>;
	@ViewChild("filterableHeaderTemplate")
	protected filterableHeaderTemplate: TemplateRef<any>;
	@ViewChild("paginationTableItemTemplate")
	protected paginationTableItemTemplate: TemplateRef<any>;

	ngOnInit() {
		this.model.data = [[]];
		this.model.header = [
			new TableHeaderItem({data: "Very long title indeed"}),
			new TableHeaderItem({
				data: "Very long title indeed",
				style: {"width": "auto"}
			})
		];

		this.model.pageLength = 10;
		this.model.totalDataLength = 105;
		this.selectPage(1);
	}

	customSort(index: number) {
		this.sort(this.model, index);
	}

	sort(model, index: number) {
		if (model.header[index].sorted) {
			// if already sorted flip sorting direction
			model.header[index].ascending = model.header[index].descending;
		}
		model.sort(index);
	}

	getPage(page: number) {
		const line = line => [`Item ${line}:1!`, {name: "Item", surname: `${line}:2`}];

		const fullPage = [];

		for (let i = (page - 1) * this.model.pageLength; i < page * this.model.pageLength && i < this.model.totalDataLength; i++) {
			fullPage.push(line(i + 1));
		}

		return new Promise(resolve => {
			setTimeout(() => resolve(fullPage), 150);
		});
	}

	selectPage(page) {
		this.getPage(page).then((data: Array<Array<any>>) => {
			// set the data and update page
			this.model.data = this.prepareData(data);
			this.model.currentPage = page;
		});
	}

	protected prepareData(data: Array<Array<any>>) {
		// create new data from the service data
		let newData = [];
		data.forEach(dataRow => {
			let row = [];
			dataRow.forEach(dataElement => {
				row.push(new TableItem({
					data: dataElement,
					template: typeof dataElement === "string" ? undefined : this.paginationTableItemTemplate
					// your template can handle all the data types so you don't have to conditionally set it
					// you can also set different templates for different columns based on index
				}));
			});
			newData.push(row);
		});
		return newData;
	}
}


class CustomHeaderItem extends TableHeaderItem {
	// used for custom sorting
	compare(one: TableItem, two: TableItem) {
		const stringOne = (one.data.name || one.data.surname || one.data).toLowerCase();
		const stringTwo = (two.data.name || two.data.surname || two.data).toLowerCase();

		if (stringOne > stringTwo) {
			return 1;
		} else if (stringOne < stringTwo) {
			return -1;
		} else {
			return 0;
		}
	}
}


const simpleModel = new TableModel();
simpleModel.data = [
	[new TableItem({data: "Name 1"}), new TableItem({data: "qwer"})],
	[new TableItem({data: "Name 3"}), new TableItem({data: "zwer"})],
	[new TableItem({data: "Name 2"}), new TableItem({data: "swer"})],
	[new TableItem({data: "Name 4"}), new TableItem({data: "twer"})]
];
simpleModel.header = [
	new TableHeaderItem({data: "Name"}), new TableHeaderItem({data: "hwer" })
];

const emptyModel = new TableModel();
emptyModel.header = [
	new TableHeaderItem({data: "Name"}), new TableHeaderItem({data: "hwer", style: {"width": "auto"} })
];

function sort(model, index: number) {
	if (model.header[index].sorted) {
		// if already sorted flip sorting direction
		model.header[index].ascending = model.header[index].descending;
	}
	model.sort(index);
}

@Component({
	selector: "app-skeleton-table",
	template: `
		<ibm-table
			[model]="skeletonModel"
			[skeleton]="skeleton"
			[size]="size"
			[striped]="striped">
			<ng-content></ng-content>
		</ibm-table>
	`
})
class SkeletonTableStory implements OnInit, OnChanges {
	@Input() size = "md";
	@Input() striped = false;
	@Input() skeleton = true;
	@Input() skeletonModel = new TableModel();

	ngOnInit() {
		// Creates an empty table with 5 rows and 5 columns
		this.skeletonModel = Table.skeletonModel(5, 5);
	}
}

storiesOf("Table", module).addDecorator(
		moduleMetadata({
			imports: [
				NFormsModule,
				TableModule,
				DialogModule,
				PaginationModule,
				SearchModule,
				ButtonModule,
				DocumentationModule
			],
			declarations: [
				TableStory,
				DynamicTableStory,
				ExpansionTableStory,
				OverflowTableStory,
				PaginationTableStory,
				SkeletonTableStory
			]
		})
	)
	.addDecorator(withKnobs)
	.add("basic", () => ({
		template: `
		<div style="width: 650px">
			<app-table
				[model]="model"
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[striped]="striped"
				[sortable]="sortable"
				[isDataGrid]="isDataGrid">
			</app-table>
		</div>
	`,
		props: {
			model: simpleModel,
			size: select("size", {Small: "sm", Normal: "md", Large: "lg"}, "md"),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", true),
			sortable: boolean("sortable", true),
			isDataGrid: boolean("Data grid keyboard interactions", false)
		}
	}))
	.add("with no data", () => ({
		template: `
			<div style="width: 650px">
				<app-table
					[model]="model"
					[size]="size"
					[showSelectionColumn]="showSelectionColumn"
					[striped]="striped">
					<tbody><tr><td class="no-data" colspan="3"><div>No data.</div></td></tr></tbody>
				</app-table>
			</div>
		`,
		styles: [`
			.no-data {
				width: 100%;
				height: 150px;
				text-align: center;
			}
		`],
		props: {
			model: emptyModel,
			size: select("size", {Small: "sm", Normal: "md", Large: "lg"}, "md"),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", true)
		}
	}))
	.add("with toolbar", () => ({
		template: `
		<ibm-table-toolbar [model]="model">
			<ibm-table-toolbar-actions>
				<button ibmButton="ghost" size="sm">
					ghost
					<svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
						<path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fill-rule="evenodd"></path>
					</svg>
				</button>
				<button ibmButton="ghost" size="sm">
					ghost
					<svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
						<path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fill-rule="evenodd"></path>
					</svg>
				</button>
				<button ibmButton="ghost" size="sm">
					ghost
					<svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
						<path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fill-rule="evenodd"></path>
					</svg>
				</button>
			</ibm-table-toolbar-actions>
			<ibm-table-toolbar-search>
				<ibm-search size="sm" theme="light"></ibm-search>
			</ibm-table-toolbar-search>
			<ibm-table-toolbar-content>
				<button ibmButton="toolbar-action">
					<svg class="bx--toolbar-action__icon" fill-rule="evenodd" height="16" name="download"
						role="img" viewBox="0 0 14 16" width="14" aria-label="Download">
						<title>Download</title>
						<path d="M7.506 11.03l4.137-4.376.727.687-5.363 5.672-5.367-5.67.726-.687 4.14 4.374V0h1v11.03z"></path>
						<path d="M13 15v-2h1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2h1v2h12z"></path>
					</svg>
				</button>
				<button ibmButton="toolbar-action">
					<svg class="bx--toolbar-action__icon" fill-rule="evenodd" height="16" name="edit"
						role="img" viewBox="0 0 16 16" width="16" aria-label="Edit">
						<title>Edit</title>
						<path d="M7.926 3.38L1.002 9.72V12h2.304l6.926-6.316L7.926 3.38zm.738-.675l2.308 2.304
							1.451-1.324-2.308-2.309-1.451 1.329zM.002 9.28L9.439.639a1 1 0 0 1 1.383.03l2.309 2.309a1
							1 0 0 1-.034 1.446L3.694 13H.002V9.28zM0 16.013v-1h16v1z"></path>
					</svg>
				</button>
				<button ibmButton="toolbar-action">
					<svg class="bx--toolbar-action__icon" fill-rule="evenodd" height="16" name="settings"
						role="img" viewBox="0 0 15 16" width="15" aria-label="Settings">
						<title>Settings</title>
						<path d="M7.53 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"></path>
						<path d="M6.268 2.636l-.313.093c-.662.198-1.28.52-1.822.946l-.255.2-1.427-.754-1.214 1.735 1.186
							1.073-.104.31a5.493 5.493 0 0 0-.198 2.759l.05.274L1 10.33l1.214 1.734 1.06-.56.262.275a5.5 5.5 0
							0 0 2.42 1.491l.312.093L6.472 15H8.59l.204-1.636.313-.093a5.494 5.494 0 0 0 2.21-1.28l.26-.248 1.09.576
							1.214-1.734-1.08-.977.071-.29a5.514 5.514 0 0 0-.073-2.905l-.091-.302 1.15-1.041-1.214-1.734-1.3.687-.257-.22a5.487
							5.487 0 0 0-1.98-1.074l-.313-.093L8.59 1H6.472l-.204 1.636zM5.48.876A1 1 0 0 1 6.472 0H8.59a1 1 0 0 1
							.992.876l.124.997a6.486 6.486 0 0 1 1.761.954l.71-.375a1 1 0 0 1 1.286.31l1.215 1.734a1 1 0 0 1-.149
							1.316l-.688.622a6.514 6.514 0 0 1 .067 2.828l.644.581a1 1 0 0 1 .148 1.316l-1.214 1.734a1 1 0 0
							1-1.287.31l-.464-.245c-.6.508-1.286.905-2.029 1.169l-.124.997A1 1 0 0 1 8.59 16H6.472a1 1 0 0
							1-.992-.876l-.125-.997a6.499 6.499 0 0 1-2.274-1.389l-.399.211a1 1 0 0 1-1.287-.31L.181 10.904A1 1
							0 0 1 .329 9.59l.764-.69a6.553 6.553 0 0 1 .18-2.662l-.707-.64a1 1 0 0 1-.148-1.315l1.214-1.734a1 1
							0 0 1 1.287-.31l.86.454a6.482 6.482 0 0 1 1.576-.819L5.48.876z"></path>
					</svg>
				</button>
				<button ibmButton="primary" size="sm">Add new</button>
			</ibm-table-toolbar-content>
		</ibm-table-toolbar>

		<div style="width: 650px">
			<app-table
				[model]="model"
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[striped]="striped"
				[sortable]="sortable"
				[isDataGrid]="isDataGrid">
			</app-table>
		</div>
	`,
		props: {
			model: simpleModel,
			size: select("size", {Small: "sm", Normal: "md", Large: "lg"}, "md"),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", true),
			sortable: boolean("sortable", true),
			isDataGrid: boolean("Data grid keyboard interactions", false)
		}
	}))
	.add("with expansion", () => ({
		template: `
			<div style="width: 650px">
				<app-expansion-table
					[size]="size"
					[showSelectionColumn]="showSelectionColumn"
					[striped]="striped"
					[isDataGrid]="isDataGrid">
				</app-expansion-table>
			</div>
		`,
		props: {
			size: select("size", {Small: "sm", Normal: "md", Large: "lg"}, "md"),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", true),
			isDataGrid: boolean("Data grid keyboard interactions", false)
		}
	}))
	.add("with dynamic content", () => ({
		template: `
			<div style="width: 650px">
				<app-custom-table
					[size]="size"
					[showSelectionColumn]="showSelectionColumn"
					[striped]="striped"
					[isDataGrid]="isDataGrid">
				</app-custom-table>
			</div>
		`,
		props: {
			size: select("size", {Small: "sm", Normal: "md", Large: "lg"}, "md"),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", true),
			isDataGrid: boolean("Data grid keyboard interactions", false)
		}
	}))
	.add("with overflow menu", () => ({
		template: `
			<div style="width: 650px">
				<app-overflow-table
					[size]="size"
					[showSelectionColumn]="showSelectionColumn"
					[striped]="striped"
					[isDataGrid]="isDataGrid">
				</app-overflow-table>
			</div>
		`,
		props: {
			size: select("size", {Small: "sm", Normal: "md", Large: "lg"}, "md"),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", true),
			isDataGrid: boolean("Data grid keyboard interactions", false)
		}
	}))
	.add("with pagination", () => ({
		template: `
		<div style="width: 650px">
			<app-pagination-table [totalDataLength]="totalDataLength" [model]="model"></app-pagination-table>
		</div>
		`,
		props: {
			model: simpleModel,
			totalDataLength: number("totalDataLength", 105)
		}
	}))
	.add("Skeleton", () => ({
		template: `
		<div style="width: 800px">
			<app-skeleton-table
				[skeletonModel]="skeletonModel"
				[size]="size"
				[striped]="striped">
			</app-skeleton-table>
		</div>
	`,
		props: {
			size: select("size", {Small: "sm", Normal: "md", Large: "lg"}, "md"),
			striped: boolean("striped", false)
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Table.html"></ibm-documentation>
		`
	}));

