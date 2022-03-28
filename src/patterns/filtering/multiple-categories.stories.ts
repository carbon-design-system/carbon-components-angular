import { Component, OnInit, OnDestroy } from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";
import { TableModule, TableModel, TableHeaderItem, TableItem } from "../../table/index";
import { DropdownModule } from "../../dropdown/index";
import { StructuredListModule } from "../../structured-list/index";
import { GridModule } from "../../grid/index";
import { RadioModule } from "../../radio/index";
import { CheckboxModule } from "../../checkbox/index";
import { ButtonModule } from "../../forms/index";
import { TagModule } from "../../tag/index";
import { UIShellModule } from "../../ui-shell/index";

@Component({
	selector: "app-sample-multi-categories",
	template: `
	<div ibmGrid>
		<div ibmRow class="header">
			<ibm-header name="Patterns">
				<ibm-hamburger></ibm-hamburger>
			</ibm-header>
		</div>
		<div ibmRow>
			<div ibmCol [columnNumbers]="{'lg': 2, 'md': 2, 'sm': 1}" class="multi-selection">
				<button ibmButton (click)="resetFilters()" class="reset-button">Reset Filters</button>
				<fieldset class="bx--fieldset">
					<legend class="bx--label">Radio button label</legend>
					<ibm-radio-group
						aria-label="radiogroup"
						orientation="vertical"
						labelPlacement="right"
						[(ngModel)]="radio"
						(change)="onRadioChange($event)">
						<ibm-radio *ngFor="let radio of radios"
							[value]="radio.color"
							[disabled]="radio.disabled">
							{{radio.color}}
						</ibm-radio>
					</ibm-radio-group>
				</fieldset>
				<fieldset class="bx--fieldset">
					<div ibmRow>
						<div ibmCol [columnNumbers]="{'lg': 2, 'md': 2, 'sm': 1}">
							<legend class="bx--label">Type</legend>
						</div>
						<div ibmCol [columnNumbers]="{'lg': 2, 'md': 2, 'sm': 1}">
							<ibm-tag-filter
								*ngIf="checkBoxFilters.size > 0"
								(close)="resetCheckboxList()">
								{{checkBoxFilters.size}}
							</ibm-tag-filter>
						</div>
					</div>
					<ibm-checkbox
						*ngFor="let listItem of checkboxList"
						[hideLabel]="hideLabel"
						[checked]="listItem.checked"
						[value]="listItem.value"
						(change)="onCheckboxChange($event)">
						{{ listItem.value }}
					</ibm-checkbox>
				</fieldset>
			</div>
			<div ibmCol [columnNumbers]="{'lg': 10, 'md': 10, 'sm': 3}" class="data-table">
				<ibm-table-container>
					<ibm-table
						class="data-table"
						[model]="model"
						size="lg"
						[showSelectionColumn]="false">
						<ng-content></ng-content>
					</ibm-table>
				</ibm-table-container>
			</div>
		</div>
	</div>
	`,
	styles: [`
		.header {
			margin-bottom: 80px;
		}

		.reset-button {
			margin-bottom: 20px;
		}

		.data-table {
			width: 100%;
		}
	`
	]
})
class SampleMultiCategories implements OnInit, OnDestroy {
	model = new TableModel();
	checkBoxFilters = [];
	radioFilter = null;

	dataset = [
		{ name: "Apple", type: ["Fruit"], color: "Red" },
		{ name: "Grape", type: ["Fruit"], color: "Purple" },
		{ name: "Eggplant", type: ["Fruit"], color: "Purple" },
		{ name: "FruitVegMeat", type: ["Fruit", "Vegetable", "Meat"], color: "White" },
		{ name: "Lettuce", type: ["Vegetable"], color: "Green" },
		{ name: "Daikon Radish", type: ["Vegetable"], color: "White" },
		{ name: "Beef", type: ["Meat"], color: "Red" }
	];

	radios = [
		{ color: "Red", checked: false },
		{ color: "Purple", checked: false },
		{ color: "Green", checked: false },
		{ color: "White", checked: false }
	];

	checkboxList = [
		{ value: "Fruit", checked: false},
		{ value: "Vegetable", checked: false},
		{ value: "Meat", checked: false}
	];

	onCheckboxChange(event) {
		if (event.checked) {
			this.checkBoxFilters.push(event.source.value);
		} else {
			this.checkBoxFilters.splice(this.checkBoxFilters.indexOf(event.source.value), 1);
		}
		this.applyFilters();
	}

	onRadioChange(event) {
		this.radioFilter = event.value;
		this.applyFilters();
	}

	resetFilters() {
		this.resetCheckboxList();
		this.resetRadios();
	}

	resetCheckboxList() {
		this.checkBoxFilters = [];
		this.checkboxList = this.checkboxList.map(obj => ({ value: obj.value, checked: false }));
		this.applyFilters();
	}

	resetRadios() {
		this.radioFilter = null;
		this.radios = this.radios.map(obj => ({ color: obj.color, checked: false }));
		this.applyFilters();
	}

	applyFilters() {
		this.model.data =
			this.dataset
				.filter(data =>
					(this.checkBoxFilters.every(filter => data.type.includes(filter))) &&
					(data.color === this.radioFilter || !this.radioFilter))
				.map(filteredData =>
					[
						new TableItem({ data: filteredData.name }),
						new TableItem({ data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
					]);
	}

	ngOnInit() {
		document.querySelector(".sb-show-main").classList.add("full-page");

		this.model.header = [new TableHeaderItem({ data: "Name" }), new TableHeaderItem({ data: "Description" })];

		this.model.data = this.dataset.map(datapoint =>
			[
				new TableItem({ data: datapoint.name}),
				new TableItem({ data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
			]
		);
	}
	ngOnDestroy() {
		document.querySelector(".sb-show-main").classList.remove("full-page");
	}
}

storiesOf("Patterns|Filtering", module)
	.addDecorator(
		moduleMetadata({
			declarations: [ SampleMultiCategories ],
			imports: [
				TableModule,
				DropdownModule,
				GridModule,
				StructuredListModule,
				RadioModule,
				CheckboxModule,
				ButtonModule,
				TagModule,
				UIShellModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Multiple Categories", () => ({
		template: `
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-sample-multi-categories></app-sample-multi-categories>
		`
	}));
