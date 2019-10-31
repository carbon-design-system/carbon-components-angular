import { Component } from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";
import { TableModule, TableModel, TableHeaderItem, TableItem } from "../../table/table.module";
import { DropdownModule } from "../../dropdown/dropdown.module";
import { GridModule } from "../../grid/grid.module";
import { ButtonModule } from "../../forms/forms.module";

@Component({
    selector: "app-sample-progressive-loading",
    template: `
    <div ibmRow style="margin-bottom: 50px">
        <div ibmCol [columnNumbers]="{'md':2, 'md':2}">
            Example 1
            <ibm-dropdown
                [skeleton]="skeletonStateDropdown"
                type="multi"
                [placeholder]="placeholder"
                inline="true">
                <ibm-dropdown-list [items]="items"></ibm-dropdown-list>
            </ibm-dropdown>
        </div>

        <div ibmCol [columnNumbers]="{'md':2, 'md':2}">
            Example 2
            <ibm-dropdown
                [skeleton]="skeletonStateDropdown"
                type="multi"
                [placeholder]="placeholder"
                inline="true">
                <ibm-dropdown-list [items]="items"></ibm-dropdown-list>
            </ibm-dropdown>
        </div>

        <div ibmCol [columnNumbers]="{'md':2, 'md':2}">
            Example 3
            <ibm-dropdown
                [skeleton]="skeletonStateDropdown"
                type="multi"
                [placeholder]="placeholder"
                inline="true">
                <ibm-dropdown-list [items]="items"></ibm-dropdown-list>
            </ibm-dropdown>
        </div>

        <div ibmCol [columnNumbers]="{'md':2, 'md':2}">
            <button ibmButton (click)="loadScreen(); uninitializeData()">Show Loading</button>
        </div>
    </div>

    <ibm-table-container>
        <ibm-table
            [skeleton]="skeletonStateTable"
            style="display: block; width: 650px;"
            [model]="model"
            [striped]="false"
            size="lg"
            [showSelectionColumn]="false">
            <ng-content></ng-content>
        </ibm-table>
    </ibm-table-container>
    `
})
class SampleProgressiveLoading {   
    model = new TableModel();
    skeletonStateTable = true;
    skeletonStateDropdown = true;
    placeholder = null;

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
        this.model.data = this.dataset.map(datapoint => 
            [
                new TableItem({}),
                new TableItem({})
            ]
        );
        
        this.model.header = [
            new TableHeaderItem({
                data: ""
            }),
            new TableHeaderItem({
                data: ""
            })
        ]

        setTimeout(() => {
            this.skeletonStateDropdown = false;
            this.placeholder = "Type";
        }, 2000);

        setTimeout(() => {
            this.skeletonStateTable = false;
        }, 4000);

        setTimeout(() => {
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
                    new TableItem({ data: datapoint.name }),
                    new TableItem({ data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
                ]
            );
        }, 4000);
    }

    ngOnInit() {
        this.loadScreen();
    }
}

storiesOf("Patterns|Loading", module)
	.addDecorator(
		moduleMetadata({
			declarations: [ SampleProgressiveLoading ],
			imports: [
                TableModule,
                DropdownModule,
                GridModule,
                ButtonModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Progressive Loading", () => ({
        template: `<app-sample-progressive-loading></app-sample-progressive-loading>`
    }))
