import {
	Component,
	OnInit,
	OnDestroy
} from "@angular/core";
import { moduleMetadata, Meta } from "@storybook/angular";
import {
	TableModel,
	TableHeaderItem,
	TableItem,
	Table,
	TableContainer
} from "../../table";
import { Dropdown, DropdownList } from "../../dropdown";
import { ColumnDirective, GridDirective, GridService, RowDirective } from "../../grid";
import { Button } from "../../button";
import { Checkbox } from "../../checkbox";
import { Hamburger, Header } from "../../ui-shell";

@Component({
	selector: "app-sample-progressive-loading",
	template: `
	<div cdsGrid>
		<div cdsRow class="header">
			<cds-header name="Patterns">
				<cds-hamburger></cds-hamburger>
			</cds-header>
		</div>
		<div cdsRow class="actions">
			<div cdsCol [columnNumbers]="{'lg': 3, 'md': 2, 'sm': 1}">
				<cds-dropdown
					label="Example 1"
					[skeleton]="skeletonStateDropdown"
					type="multi"
					[placeholder]="placeholder"
					inline="true">
					<cds-dropdown-list [items]="items"></cds-dropdown-list>
				</cds-dropdown>
			</div>

			<div cdsCol [columnNumbers]="{'lg': 3, 'md': 2, 'sm': 1}">
				<cds-dropdown
					label="Example 2"
					[skeleton]="skeletonStateDropdown"
					type="multi"
					[placeholder]="placeholder"
					inline="true">
					<cds-dropdown-list [items]="items"></cds-dropdown-list>
				</cds-dropdown>
			</div>

			<div cdsCol [columnNumbers]="{'lg': 3, 'md': 2, 'sm': 1}">
				<cds-dropdown
					label="Example 3"
					[skeleton]="skeletonStateDropdown"
					type="multi"
					[placeholder]="placeholder"
					inline="true">
					<cds-dropdown-list [items]="items"></cds-dropdown-list>
				</cds-dropdown>
			</div>

			<div cdsCol [columnNumbers]="{'lg': 3, 'md': 2, 'sm': 1}">
				<button cdsButton (click)="loadScreen(); uninitializeData()">Show Loading</button>
			</div>
		</div>
		<div cdsRow>
			<div cdsCol [columnNumbers]="{'lg': 12, 'md': 12, 'sm': 12}">
				<cds-table-container>
					<cds-table
						class="data-table"
						[skeleton]="skeletonStateTable"
						[model]="model"
						size="lg"
						[showSelectionColumn]="false">
						<ng-content></ng-content>
					</cds-table>
				</cds-table-container>
			</div>
		</div>
	</div>
	`,
	styles: [`
		.header {
			margin-bottom: 80px;
		}

		.data-table {
			width: 100%;
		}

		.actions {
			margin-bottom: 40px;
		}
		`
	],
	standalone: true,
	imports: [GridDirective, RowDirective, ColumnDirective, Checkbox, Dropdown, DropdownList,
		Table, TableContainer, Button, Header, Hamburger]
})
class SampleProgressiveLoading implements OnInit, OnDestroy {
	model = new TableModel();
	skeletonStateTable = true;
	skeletonStateDropdown = true;
	placeholder: string | null = null;

	dataset = [
		{ name: "Apple", type: "Fruit" },
		{ name: "Grape", type: "Fruit" },
		{ name: "Eggplant", type: "Fruit" },
		{ name: "Lettuce", type: "Vegetable" },
		{ name: "Daikon Radish", type: "Vegetable" },
		{ name: "Beef", type: "Meat" }
	];

	items = [
		{ content: "Vegetable" },
		{ content: "Fruit" },
		{ content: "Meat" }
	];

	uninitializeData() {
		this.skeletonStateTable = true;
		this.skeletonStateDropdown = true;
		this.placeholder = null;
	}

	loadScreen() {
		this.model.data = this.dataset.map(datapoint => [new TableItem({}), new TableItem({})]);

		this.model.header = [new TableHeaderItem({ data: "" }), new TableHeaderItem({ data: "" })];

		setTimeout(() => {
			this.skeletonStateDropdown = false;
			this.placeholder = "Type";
		}, 2000);

		setTimeout(() => {
			this.skeletonStateTable = false;
		}, 4000);

		setTimeout(() => {
			this.model.header = [new TableHeaderItem({ data: "Name" }), new TableHeaderItem({ data: "Description" })];

			this.model.data = this.dataset.map(datapoint =>
				[
					new TableItem({ data: datapoint.name }),
					new TableItem({ data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
				]
			);
		}, 4000);
	}

	ngOnInit() {
		document.querySelector(".sb-show-main")?.classList.add("full-page");
		this.loadScreen();
	}

	ngOnDestroy() {
		document.querySelector(".sb-show-main")?.classList.remove("full-page");
	}
}

// Storybook starts here
export default {
	title: "Pattern/Loading",
	decorators: [
		moduleMetadata({
			imports: [
				SampleProgressiveLoading
			]
		})
	]
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-sample-progressive-loading></app-sample-progressive-loading>
	`
});
export const ProgressiveLoading = Template.bind({});
