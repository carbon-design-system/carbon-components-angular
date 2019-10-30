import { Component } from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";
import { TableModule, TableModel, TableHeaderItem, TableItem } from "../../table/table.module";
import { DropdownModule } from "../../dropdown/dropdown.module";

@Component({
    selector: "app-sample-single-selection",
    template: `
    <ibm-table-container>
        <p ibmText style="float: left; margin-right: 10px; line-height: 30px">Filter by: </p>
        <div style="float: left; margin-right: 10px; min-width: 150px;">
        </div>
        <div style="float: left; min-width: 150px">
            <ibm-dropdown placeholder="Type" inline="true" (selected)="onSelected($event)">
                <ibm-dropdown-list [items]="items"></ibm-dropdown-list>
            </ibm-dropdown>
        </div>
        <p style="float: left; margin-left: 50px; line-height: 30px;">{{ selected }}</p>
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
class SampleSingleSelection {   
    model = new TableModel();

    selected = [];

    items = [
		{ content: "Vegetable" },
        { content: "Fruit" },
        { content: "Meat" }
    ];

    dataset = [
        { name: "Apple", type: "Fruit" },
        { name: "Grape", type: "Fruit" },
        { name: "Eggplant", type: "Fruit" },
        { name: "Lettuce", type: "Vegetable" },
        { name: "Daikon Radish", type: "Vegetable" },
        { name: "Beef", type: "Meat" }
    ];
    
    onSelected(event) {
        this.model.data = [];
        this.model.data.pop();
        this.dataset.forEach(data => {
            if(data.type === event.item.content) {
                this.model.data.push(
                    [
                        new TableItem({ data: data.name }),
                        new TableItem({ data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
                    ]
                );
            }
        });
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
			declarations: [ SampleSingleSelection ],
			imports: [
                TableModule,
                DropdownModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Single Selection", () => ({
        template: `<app-sample-single-selection></app-sample-single-selection>`
	}))