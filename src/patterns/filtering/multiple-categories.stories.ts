import { Component } from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";
import { TableModule, TableModel, TableHeaderItem, TableItem } from "../../table/table.module";
import { DropdownModule } from "../../dropdown/dropdown.module";
import { StructuredListModule } from "../../structured-list/structured-list.module";
import { GridModule } from "../../grid/grid.module";
import { RadioModule } from "../../radio/radio.module";
import { CheckboxModule } from "../../checkbox/checkbox.module";
import { ButtonModule } from "../../forms/forms.module";

@Component({
    selector: "app-sample-multi-categories",
    template: `
    <div style="float: left; margin-right: 50px;">
        <button ibmButton (click)="resetFilters()" style="margin-bottom: 30px">Reset Filters</button>
        <fieldset class="bx--fieldset">
            <legend class="bx--label">Radio button label</legend>
            <ibm-radio-group
                aria-label="radiogroup"
                orientation="vertical"
                labelPlacement="right"
                [(ngModel)]="radio"
                (change)="onRadioChange($event)">
                <ibm-radio *ngFor="let radio of manyRadios"
                    [value]="radio.color"
                    [disabled]="radio.disabled">
                    {{radio.color}}
                </ibm-radio>
            </ibm-radio-group>
        </fieldset>
        <fieldset class="bx--fieldset">
            <div>
                <div
                    *ngIf="checkBoxFilters.size > 0"
                    class="bx--list-box__selection--multi"
                    title="Clear all selected items"
                    style="float: right;">
                    {{checkBoxFilters.size}}
                    <svg
                        focusable="false"
                        preserveAspectRatio="xMidYMid meet"
                        style="will-change: transform;"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        aria-hidden="true">
                        <path d="M12 4.7l-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z"></path>
                    </svg>
                </div>
                <legend class="bx--label">Type</legend>
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
    <div style="float: left;">
        <ibm-table-container>
        <ibm-table
            style="display: block; width: 650px;"
            [model]="model"
            size="lg"
            [showSelectionColumn]="false">
            <ng-content></ng-content>
        </ibm-table>
        </ibm-table-container>
    </div>
    `
})
class SampleMultiCategories{
    model = new TableModel();
    checkBoxFilters = new Set();
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

    manyRadios = [
        { color: "Red", checked: false },
        { color: "Purple", checked: false },
        { color: "Green", checked: false },
        { color: "White", checked: false }
    ]

    checkboxList = [
        { value: "Fruit", checked: false},
        { value: "Vegetable", checked: false},
        { value: "Meat", checked: false}
    ]

    onCheckboxChange(event) {
        if (event.checked) {
            this.checkBoxFilters.add(event.source.value);
        } else {
            this.checkBoxFilters.delete(event.source.value);
        }
        this.applyFilters();
    }

    onRadioChange(event) {
        this.radioFilter = event.value;
        this.applyFilters();
    }

    resetFilters() {
        this.manyRadios = this.manyRadios.map(obj => {
            return { color: obj.color, checked: false }
        });

        this.checkboxList = this.checkboxList.map(obj => {
            return { value: obj.value, checked: false }
        });

        this.radioFilter = null;
        this.checkBoxFilters = new Set();

        this.applyFilters();
    }

    applyFilters() {
        this.model.data = [];
        this.model.data.pop();

        this.dataset.forEach(data => {
            if((this.applyCheckboxFilters(data.type) || !this.checkBoxFilters.size) && (data.color === this.radioFilter || !this.radioFilter) ) {
                this.model.data.push(
                    [
                        new TableItem({ data: data.name }),
                        new TableItem({ data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
                    ]
                )
            }
        });
    }

    applyCheckboxFilters(types: Array<String>): Boolean {
        let shouldInclude = true;
        this.checkBoxFilters.forEach(filter => {
            if (!types.includes(filter)) {
                shouldInclude = false;
            }
        });
        return shouldInclude;
    }

    ngOnInit() {
        this.model.header = [
            new TableHeaderItem({
                data: "Name"
            }),
            new TableHeaderItem({
                data: "Description"
            })
        ]
        
        this.model.data = this.dataset.map(datapoint => 
            [
                new TableItem({ data: datapoint.name}),
                new TableItem({ data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
            ]
        );
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
                ButtonModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Multiple Categories", () => ({
        template: `
            <app-sample-multi-categories></app-sample-multi-categories>
            `
	}))