import { Component, OnInit } from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";
import { TableModule, TableModel, TableHeaderItem, TableItem } from "../../table/table.module";
import { DropdownModule } from "../../dropdown/dropdown.module";
import { GridModule } from "../../grid/grid.module";
import { UIShellModule } from "../../ui-shell/ui-shell.module";

@Component({
    selector: "app-sample-single-selection",
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

        .dropdown-label {
            display: flex;
            align-items: center;
            flex-direction-row;
        }

        .data-table {
            width: 100%;
        }
        
        .filter-dropdown {
            flex-grow: 1;
            margin-left: 20px;
        }
    `
    ]
})
class SampleSingleSelection implements OnInit {
    model = new TableModel();

    selected = [];

    items = [
        { content: "All" },
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
        this.model.data =
            this.dataset
                .filter(data => data.type === event.item.content || event.item.content === "All")
                .map(filteredData =>                     
                    [
                        new TableItem({ data: filteredData.name }),
                        new TableItem({ data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
                    ]);
    }

    ngOnInit() {
        document.querySelector('.sb-show-main').classList.add('full-page');

        this.model.header = [new TableHeaderItem({ data: "Name" }), new TableHeaderItem({ data: "Description" })];

        this.model.data = this.dataset.map(datapoint => 
            [
                new TableItem({ data: datapoint.name }),
                new TableItem({ data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
            ]
        );
    }

    ngOnDestroy() {
        document.querySelector('.sb-show-main').classList.remove('full-page');
    }
}

storiesOf("Patterns|Filtering", module)
	.addDecorator(
		moduleMetadata({
			declarations: [ SampleSingleSelection ],
			imports: [
				TableModule,
				DropdownModule,
				GridModule,
				UIShellModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Single Selection", () => ({
        template: `<app-sample-single-selection></app-sample-single-selection>`
    }));
