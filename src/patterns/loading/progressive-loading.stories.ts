/* tslint:disable variable-name */

import {
	Component,
	OnInit,
	OnDestroy
} from "@angular/core";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import {
	TableModule,
	TableModel,
	TableHeaderItem,
	TableItem
} from "../../table";
import { DropdownModule } from "../../dropdown";
import { GridModule } from "../../grid";
import { ButtonModule } from "../../button";
import { UIShellModule } from "../../ui-shell";

@Component({
	selector: "app-sample-progressive-loading",
	template: `
	<div ibmGrid>
		<div ibmRow class="header">
			<ibm-header name="Patterns">
				<ibm-hamburger></ibm-hamburger>
			</ibm-header>
		</div>
		<div ibmRow class="actions">
			<div ibmCol [columnNumbers]="{'lg': 3, 'md': 2, 'sm': 1}">
				<ibm-dropdown
					label="Example 1"
					[skeleton]="skeletonStateDropdown"
					type="multi"
					[placeholder]="placeholder"
					inline="true">
					<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
				</ibm-dropdown>
			</div>

			<div ibmCol [columnNumbers]="{'lg': 3, 'md': 2, 'sm': 1}">
				<ibm-dropdown
					label="Example 2"
					[skeleton]="skeletonStateDropdown"
					type="multi"
					[placeholder]="placeholder"
					inline="true">
					<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
				</ibm-dropdown>
			</div>

			<div ibmCol [columnNumbers]="{'lg': 3, 'md': 2, 'sm': 1}">
				<ibm-dropdown
					label="Example 3"
					[skeleton]="skeletonStateDropdown"
					type="multi"
					[placeholder]="placeholder"
					inline="true">
					<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
				</ibm-dropdown>
			</div>

			<div ibmCol [columnNumbers]="{'lg': 3, 'md': 2, 'sm': 1}">
				<button ibmButton (click)="loadScreen(); uninitializeData()">Show Loading</button>
			</div>
		</div>
		<div ibmRow>
			<div ibmCol [columnNumbers]="{'lg': 12, 'md': 12, 'sm': 12}">
				<div ibmTableContainer>
					<ibm-table
						class="data-table"
						[skeleton]="skeletonStateTable"
						[model]="model"
						size="lg"
						[showSelectionColumn]="false">
						<ng-content></ng-content>
					</ibm-table>
				</div>
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
	]
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
			declarations: [SampleProgressiveLoading],
			imports: [
				TableModule,
				DropdownModule,
				GridModule,
				ButtonModule,
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
		<app-sample-progressive-loading></app-sample-progressive-loading>
	`
});
export const ProgressiveLoading = Template.bind({});
