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
	selectV2
} from "@storybook/addon-knobs/angular";

import { TranslateModule } from "@ngx-translate/core";

import {
	TableModule,
	TableModel,
	TableItem,
	TableHeaderItem,
	NFormsModule,
	DialogModule
} from "../";

import { clone } from "../utils/utils";


@Component({
	selector: "app-table",
	template: `
		<ibm-table
			[model]="model"
			[size]="size"
			[showSelectionColumn]="showSelectionColumn"
			[striped]="striped"
			(sort)="simpleSort($event)">
		</ibm-table>
	`
})
class TableStory implements OnInit, OnChanges {
	@Input() model = new TableModel();
	@Input() size = "md";
	@Input() showSelectionColumn = true;
	@Input() striped = true;
	@Input() sortable = true;
	@Input() simpleSort;

	ngOnInit() {

		this.model.header = [
			new TableHeaderItem({
				data: "Name"
			}),
			new TableHeaderItem({
				data: "hwer",
				style: {"width": "auto"},
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
			(sort)="customSort($event)">
		</ibm-table>
	`
})
class DynamicTableStory implements OnInit {
	@Input() model = new TableModel();
	@Input() size = "md";
	@Input() showSelectionColumn = true;
	@Input() striped = true;

	@ViewChild("customHeaderTemplate")
	private customHeaderTemplate: TemplateRef<any>;
	@ViewChild("customTableItemTemplate")
	private customTableItemTemplate: TemplateRef<any>;

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
			(sort)="customSort($event)">
		</ibm-table>
	`
})
class ExpansionTableStory implements OnInit {
	@Input() model = new TableModel();
	@Input() size = "md";
	@Input() showSelectionColumn = true;
	@Input() striped = true;

	@ViewChild("customHeaderTemplate")
	private customHeaderTemplate: TemplateRef<any>;
	@ViewChild("customTableItemTemplate")
	private customTableItemTemplate: TemplateRef<any>;

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
			[striped]="striped">
		</ibm-table>
	`
})
class OverflowTableStory implements OnInit {
	@Input() model = new TableModel();
	@Input() size = "md";
	@Input() showSelectionColumn = true;
	@Input() striped = true;

	@ViewChild("overflowMenuItemTemplate")
	private overflowMenuItemTemplate: TemplateRef<any>;

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
	new TableHeaderItem({data: "Name"}), new TableHeaderItem({data: "hwer", style: {"width": "auto"} })
];

function sort(model, index: number) {
	if (model.header[index].sorted) {
		// if already sorted flip sorting direction
		model.header[index].ascending = model.header[index].descending;
	}
	model.sort(index);
}

function simpleSort(index: number) {
	sort(simpleModel, index);
}


storiesOf("Table", module).addDecorator(
		moduleMetadata({
			imports: [
				NFormsModule,
				TableModule,
				DialogModule,
				TranslateModule.forRoot()
			],
			declarations: [
				TableStory,
				DynamicTableStory,
				ExpansionTableStory,
				OverflowTableStory
			]
		})
	)
	.addDecorator(withKnobs)
	.add("default", () => ({
		template: `
		<app-table
			[model]="model"
			[size]="size"
			[showSelectionColumn]="showSelectionColumn"
			[striped]="striped"
			[sortable]="sortable"
			[simpleSort]="simpleSort">
		</app-table>
	`,
		props: {
			model: simpleModel,
			simpleSort: simpleSort,
			size: selectV2("size", {Small: "sm", Normal: "md", Large: "lg"}, "md", "table-size-selection"),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", true),
			sortable: boolean("sortable", true)
		}
	}))
	.add("with expansion", () => ({
		template: `
			<app-expansion-table
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[striped]="striped">
			</app-expansion-table>
		`,
		props: {
			size: selectV2("size", {Small: "sm", Normal: "md", Large: "lg"}, "md", "table-size-selection"),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", true)
		}
	}))
	.add("with dynamic content", () => ({
		template: `
			<app-custom-table
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[striped]="striped">
			</app-custom-table>
		`,
		props: {
			size: selectV2("size", {Small: "sm", Normal: "md", Large: "lg"}, "md", "table-size-selection"),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", true)
		}
	}))
	.add("with overflow menu", () => ({
		template: `
			<app-overflow-table
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[striped]="striped">
			</app-overflow-table>
		`,
		props: {
			size: selectV2("size", {Small: "sm", Normal: "md", Large: "lg"}, "md", "table-size-selection"),
			showSelectionColumn: boolean("showSelectionColumn", true),
			striped: boolean("striped", true)
		}
	}));

