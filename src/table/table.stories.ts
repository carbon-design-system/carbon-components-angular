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
	number,
	text
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
	ButtonModule,
	DocumentationModule
} from "../";

import { Settings16Module } from "@carbon/icons-angular/lib/settings/16";
import { Delete16Module } from "@carbon/icons-angular/lib/delete/16";
import { Save16Module } from "@carbon/icons-angular/lib/save/16";
import { Download16Module } from "@carbon/icons-angular/lib/download/16";
import { Add20Module } from "@carbon/icons-angular/lib/add/20";

import { clone } from "../utils/utils";

@Component({
	selector: "app-table",
	template: `
		<ibm-table
			style="display: block; width: 650px;"
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
		<ibm-table-toolbar [model]="model">
			<button ibmButton="primary" (click)="addRow()">Add row</button>
			<button ibmButton="primary" (click)="addColumn()">Add column</button>
		</ibm-table-toolbar>

		<ng-template #customTableItemTemplate let-data="data">
			<a [attr.href]="data.link">{{data.name}} {{data.surname}}</a>
		</ng-template>
		<ng-template #customHeaderTemplate let-data="data">
			<i><a [attr.href]="data.link">{{data.name}}</a></i>
		</ng-template>

		<ibm-table
			style="display: block; width: 650px;"
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
			[new TableItem({data: "Name 1"}), new TableItem({data: {name: "Lessy", link: "#"}, template: this.customTableItemTemplate})],
			[new TableItem({data: "Name 3"}), new TableItem({data: "swer"})],
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
			style="display: block; width: 650px;"
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
			style="display: block; width: 650px;"
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

		<ibm-table style="display: block; width: 650px;" [model]="model" (sort)="paginationSort($event)"></ibm-table>
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
			style="display: block; width: 800px;"
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
				Settings16Module,
				Delete16Module,
				Save16Module,
				Download16Module,
				Add20Module,
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
	.add("Basic", () => ({
		template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle>{{title}}</h4>
				<p ibmTableHeaderDescription>{{description}}</p>
			</ibm-table-header>
			<app-table
				[model]="model"
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[striped]="striped"
				[sortable]="sortable"
				[isDataGrid]="isDataGrid">
			</app-table>
		</ibm-table-container>
	`,
		props: {
			model: simpleModel,
			size: select("size", {Small: "sm", Normal: "md", Large: "lg"}, "md"),
			title: text("Title", "Table title"),
			description: text("Description", ""),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", false),
			sortable: boolean("sortable", true),
			isDataGrid: boolean("Data grid keyboard interactions", false)
		}
	}))
	.add("With no data", () => ({
		template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle>{{title}}</h4>
				<p ibmTableHeaderDescription>{{description}}</p>
			</ibm-table-header>
			<app-table
				[model]="model"
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[striped]="striped">
				<tbody><tr><td class="no-data" colspan="3"><div>No data.</div></td></tr></tbody>
			</app-table>
		</ibm-table-container>
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
			title: text("Title", "Table title"),
			description: text("Description", "With no data"),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", false)
		}
	}))
	.add("With toolbar", () => ({
		template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle>{{title}}</h4>
				<p ibmTableHeaderDescription>{{description}}</p>
			</ibm-table-header>
			<ibm-table-toolbar [model]="model">
				<ibm-table-toolbar-actions>
					<button ibmButton="primary">
						Delete
						<ibm-icon-delete16 class="bx--btn__icon"></ibm-icon-delete16>
					</button>
					<button ibmButton="primary">
						Save
						<ibm-icon-save16 class="bx--btn__icon"></ibm-icon-save16>
					</button>
					<button ibmButton="primary">
						Download
						<ibm-icon-download16 class="bx--btn__icon"></ibm-icon-download16>
					</button>
				</ibm-table-toolbar-actions>
					<ibm-table-toolbar-content>
					<ibm-table-toolbar-search [expandable]="true"></ibm-table-toolbar-search>
					<button ibmButton="toolbar-action">
						<ibm-icon-settings16 class="bx--toolbar-action__icon"></ibm-icon-settings16>
					</button>
					<button ibmButton="primary" size="sm">
						Primary Button
						<ibm-icon-add20 class="bx--btn__icon"></ibm-icon-add20>
					</button>
				</ibm-table-toolbar-content>
			</ibm-table-toolbar>

			<app-table
				[model]="model"
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[striped]="striped"
				[sortable]="sortable"
				[isDataGrid]="isDataGrid">
			</app-table>
		</ibm-table-container>
	`,
		props: {
			model: simpleModel,
			size: select("size", {Small: "sm", Normal: "md", Large: "lg"}, "md"),
			title: text("Title", "Table title"),
			description: text("Description", "With toolbar"),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", false),
			sortable: boolean("sortable", true),
			isDataGrid: boolean("Data grid keyboard interactions", false)
		}
	}))
	.add("With expansion", () => ({
		template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle>{{title}}</h4>
				<p ibmTableHeaderDescription>{{description}}</p>
			</ibm-table-header>
			<app-expansion-table
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[striped]="striped"
				[isDataGrid]="isDataGrid">
			</app-expansion-table>
		</ibm-table-container>
		`,
		props: {
			size: select("size", {Small: "sm", Normal: "md", Large: "lg"}, "md"),
			title: text("Title", "Table title"),
			description: text("Description", "With expansion"),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", false),
			isDataGrid: boolean("Data grid keyboard interactions", false)
		}
	}))
	.add("With dynamic content", () => ({
		template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle>{{title}}</h4>
				<p ibmTableHeaderDescription>{{description}}</p>
			</ibm-table-header>
			<app-custom-table
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[striped]="striped"
				[isDataGrid]="isDataGrid">
			</app-custom-table>
		</ibm-table-container>
		`,
		props: {
			size: select("size", {Small: "sm", Normal: "md", Large: "lg"}, "md"),
			title: text("Title", "Table title"),
			description: text("Description", "With dynamic content"),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", false),
			isDataGrid: boolean("Data grid keyboard interactions", false)
		}
	}))
	.add("With overflow menu", () => ({
		template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle>{{title}}</h4>
				<p ibmTableHeaderDescription>{{description}}</p>
			</ibm-table-header>
			<app-overflow-table
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[striped]="striped"
				[isDataGrid]="isDataGrid">
			</app-overflow-table>
		</ibm-table-container>
		`,
		props: {
			size: select("size", {Small: "sm", Normal: "md", Large: "lg"}, "md"),
			title: text("Title", "Table title"),
			description: text("Description", "With overflow menu"),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", false),
			isDataGrid: boolean("Data grid keyboard interactions", false)
		}
	}))
	.add("With pagination", () => ({
		template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle>{{title}}</h4>
				<p ibmTableHeaderDescription>{{description}}</p>
			</ibm-table-header>
			<app-pagination-table [totalDataLength]="totalDataLength" [model]="model"></app-pagination-table>
		</ibm-table-container>
		`,
		props: {
			model: simpleModel,
			totalDataLength: number("totalDataLength", 105),
			title: text("Title", "Table title"),
			description: text("Description", "With pagination")
		}
	}))
	.add("Skeleton", () => ({
		template: `
			<app-skeleton-table
				[skeletonModel]="skeletonModel"
				[size]="size"
				[striped]="striped">
			</app-skeleton-table>
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

