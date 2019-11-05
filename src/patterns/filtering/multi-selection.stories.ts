import { Component } from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";
import { TableModule, TableModel, TableHeaderItem, TableItem } from "../../table/table.module";
import { DropdownModule } from "../../dropdown/dropdown.module";
import { GridModule } from "../../grid/grid.module";
import { UIShellModule } from "../../ui-shell/ui-shell.module";

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
            <div ibmCol [columnNumbers]="{'lg':3, 'md':3, 'sm':3}">
                <label ibmText>
                    Filter by:
                    <ibm-dropdown
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
                <ibm-table-container>
                    <ibm-table
                        [model]="model"
                        size="lg"
                        [showSelectionColumn]="false">
                        <ng-content></ng-content>
                    </ibm-table>
                </ibm-table-container>
            <div>
        </div>
    </div>
    `,
    styles: [`
        .header {
            margin-bottom: 80px;
        }

        label {
            display: flex;
            align-items: center;
        }

        ibm-table {
            width: 100%;
        }
        
        ibm-dropdown {
            margin-left: 20px;
            flex-grow: 1;
        }
    `
    ]
})
class SampleMultiSelection {
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
        let checkboxFilters = new Set();

        event.forEach(filter => {
            checkboxFilters.add(filter.content);
        });

        this.model.data = 
            this.dataset
                .filter(data => this.applyMultiFilters(data.type, checkboxFilters))
                .map(filteredData =>                     
                    [
                        new TableItem({ data: filteredData.name }),
                        new TableItem({ data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
                    ]);
    }

    // Apply filters of a multi selection, returns true if the given items pass the filter and false if not.
    applyMultiFilters(types: Array<String>, filters): Boolean {
        let shouldInclude = true;
        filters.forEach(filter => {
            if (!types.includes(filter)) {
                shouldInclude = false;
            }
        });
        return shouldInclude;
    }

    ngOnInit() {
        document.querySelector('.sb-show-main').classList.add('full-page');

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

    ngOnDestroy() {
        document.querySelector('.sb-show-main').classList.remove('full-page');
    }
}

storiesOf("Patterns|Filtering", module)
	.addDecorator(
		moduleMetadata({
			declarations: [ SampleMultiSelection ],
			imports: [
                TableModule,
                DropdownModule,
                GridModule,
                UIShellModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Multi Selection", () => ({
        template: `<app-sample-multi-selection></app-sample-multi-selection>`
    }));
