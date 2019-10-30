import { Component } from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";
import { TableModule, TableModel, TableHeaderItem, TableItem } from "../../table/table.module";
import { DropdownModule } from "../../dropdown/dropdown.module";
import { GridModule } from "../../grid/grid.module";

@Component({
    selector: "app-sample-multi-selection",
    template: `
    <ibm-table-container>
        <div ibmRow>
            <div ibmCol [columnNumbers]="{'md':2}" style="max-width: 100px">
                <p ibmText style="line-height: 30px;">Filter by: </p>
            </div>
            <div ibmCol [columnNumbers]="{'md':4}" style="max-width: 200px">
                <ibm-dropdown type="multi" placeholder="Type" inline="true" (selected)="onSelected($event)">
                    <ibm-dropdown-list [items]="items"></ibm-dropdown-list>
                </ibm-dropdown>
            </div>
        </div>
        <ibm-table
            style="display: block; width: 650px;"
            [model]="model"
            size="lg"
            [showSelectionColumn]="false">
            <ng-content></ng-content>
        </ibm-table>
    </ibm-table-container>
    `
})
class SampleMultiSelection {
    model = new TableModel();

    selected = [];

    items = [
        { content: "Vegetable" },
        { content: "Fruit" },
        { content: "Meat" }
    ];

    dataset = [
        { name: "Apple", type: ["Fruit"] },
        { name: "Grape", type: ["Fruit"] },
        { name: "Eggplant", type: ["Fruit"] },
        { name: "FruitVegMeat", type: ["Fruit", "Vegetable", "Meat"], color: "Purple" },
        { name: "Lettuce", type: ["Vegetable"] },
        { name: "Daikon Radish", type: ["Vegetable"] },
        { name: "Beef", type: ["Meat"] }
    ];
    
    onSelected(event) {
        let checkboxFilters = new Set();
        this.model.data = [];
        this.model.data.pop();

        this.dataset.forEach(data => {
            event.forEach(filter => {
                checkboxFilters.add(filter.content);
            });

            if (this.applyFilters(data.type, checkboxFilters)) {
                this.model.data.push(
                    [
                        new TableItem({ data: data.name }),
                        new TableItem({ data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
                    ]
                )
            }   
        });
    }

    applyFilters(types: Array<String>, filters): Boolean {
        let shouldInclude = true;
        filters.forEach(filter => {
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
                new TableItem({ data: datapoint.name }),
                new TableItem({ data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
            ]
        );
    }
}

storiesOf("Patterns|Filtering", module)
	.addDecorator(
		moduleMetadata({
			declarations: [ SampleMultiSelection ],
			imports: [
                TableModule,
                DropdownModule,
                GridModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Multi Selection", () => ({
        template: `<app-sample-multi-selection></app-sample-multi-selection>`
    }));
