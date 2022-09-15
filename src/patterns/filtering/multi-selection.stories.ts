/* tslint:disable variable-name */

import { Component, OnInit, OnDestroy } from "@angular/core";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { TableModule, TableModel, TableHeaderItem, TableItem } from "../../table/index";
import { DropdownModule } from "../../dropdown/index";
import { GridModule } from "../../grid/index";
import { UIShellModule } from "../../ui-shell/index";

@Component({
	selector: "app-sample-multi-selection",
	template: `
	<div ibmGrid>
		<div ibmRow class="header">
			<ibm-header name="Patterns">
				<ibm-hamburger></ibm-hamburger>
			</ibm-header>
		</div>
		<div ibmRow>
			<div ibmCol [columnNumbers]="{'lg': 3, 'md': 3, 'sm': 3}">
				<label ibmText class="dropdown-label">
					Filter by:
					<ibm-dropdown
						class="filter-dropdown"
						type="multi"
						placeholder="Type"
						inline="true"
						(selected)="onSelected($event)">
						<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
					</ibm-dropdown>
				</label>
			</div>
		</div>
		<div ibmRow>
			<div ibmCol [columnNumbers]="{'lg': 12, 'md': 12, 'sm': 12}">
				<div ibmTableContainer>
					<ibm-table
						class="data-table"
						[model]="model"
						size="lg"
						[showSelectionColumn]="false">
						<ng-content></ng-content>
					</ibm-table>
				</div>
			<div>
		</div>
	</div>
	`,
	styles: [`
		.header {
			margin-bottom: 80px;
		}

		.dropdown-label {
			display: flex;
			align-items: center;
		}

		.data-table {
			width: 100%;
		}

		.filter-dropdown {
			margin-left: 20px;
			flex-grow: 1;
		}
	`
	]
})
class SampleMultiSelection implements OnInit, OnDestroy {
	model = new TableModel();

	items = [
		{ content: "Vegetable" },
		{ content: "Fruit" },
		{ content: "Meat" }
	];

	dataset = [
		{ name: "Apple", type: ["Fruit"] },
		{ name: "Grape", type: ["Fruit"] },
		{ name: "Eggplant", type: ["Fruit"] },
		{ name: "FruitVegMeat", type: ["Fruit", "Vegetable", "Meat"] },
		{ name: "Lettuce", type: ["Vegetable"] },
		{ name: "Daikon Radish", type: ["Vegetable"] },
		{ name: "Beef", type: ["Meat"] }
	];

	onSelected(event) {
		const checkboxFilters = event.map(filter => filter.content);

		this.model.data =
			this.dataset
				.filter(data => checkboxFilters.every(filter => data.type.includes(filter)))
				.map(filteredData =>
					[
						new TableItem({ data: filteredData.name }),
						new TableItem({ data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
					]);
	}

	ngOnInit() {
		document.querySelector(".sb-show-main")?.classList.add("full-page");
		this.model.header = [new TableHeaderItem({ data: "Name" }), new TableHeaderItem({ data: "Description" })];

		this.model.data = this.dataset.map(datapoint =>
			[
				new TableItem({ data: datapoint.name }),
				new TableItem({ data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
			]
		);
	}

	ngOnDestroy() {
		document.querySelector(".sb-show-main")?.classList.remove("full-page");
	}
}

// Storybook starts here
export default {
	title: "Pattern/Filtering",
	decorators: [
		moduleMetadata({
			declarations: [SampleMultiSelection],
			imports: [
				TableModule,
				DropdownModule,
				GridModule,
				UIShellModule
			]
		})
	]
} as Meta;

const Template: Story = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-sample-multi-selection></app-sample-multi-selection>
	`
});
export const MultiSelection = Template.bind({});
