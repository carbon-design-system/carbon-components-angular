import {
	Component,
	OnInit,
	Input,
	TemplateRef,
	ViewChild,
	AfterViewInit
} from "@angular/core";
import { TableModel } from "../table-model.class";
import { TableHeaderItem } from "../table-header-item.class";
import { TableItem } from "../table-item.class";

import { IconService } from "../../icon/icon.service";
import Add16 from "@carbon/icons/es/add/16";
import Filter16 from "@carbon/icons/es/filter/16";

@Component({
	selector: "app-function-override-filter-table",
	template: `

		<cds-table-header>
			<h4 cdsTableHeaderTitle>Filter table</h4>
			<p cdsTableHeaderDescription>
				Use the toolbar's search functionality to filter node names
				or click the filter icon to filter country names
			</p>
		</cds-table-header>
		<cds-table-toolbar>
			<cds-table-toolbar-content>
				<cds-table-toolbar-search
					[expandable]="true"
					(valueChange)="filterNodeNames($event)"
					(clear)="searchValue = ''">
				</cds-table-toolbar-search>
				<button cdsButton="primary" size="sm">
					Primary button<svg cdsIcon="add" size="20" class="cds--btn__icon"></svg>
				</button>
			</cds-table-toolbar-content>
		</cds-table-toolbar>
		<cds-table
			[model]="model"
			[sortable]="false"
			[size]="size"
			[skeleton]="skeleton"
			[showSelectionColumn]="showSelectionColumn"
			[enableSingleSelect]="enableSingleSelect"
			[stickyHeader]="stickyHeader"
			[striped]="striped"
			[isDataGrid]="isDataGrid">
			<ng-content></ng-content>
		</cds-table>

	<ng-template #tooltip let-data="data">
		<cds-tooltip align="bottom" [autoAlign]="true"
			[isOpen]="data.isOpen"
			description="Some very very very very very very very very very long description........">
			<button type="button" class="tooltip-trigger">
				<svg cdsIcon="add" size="16"></svg>
			</button>
		</cds-tooltip>
	</ng-template>


	<ng-template #defTooltip let-data="data">
		<cds-tooltip-definition align="right-end" [autoAlign]="true"
			description="Uniform Resource Locator; the address of a resource (such as a document or website) on the Internet.">
			URL
		</cds-tooltip-definition>
	</ng-template>

	<ng-template #popover let-data="data">
		<div
			cdsPopover
			[isOpen]="data.isOpen"
			align="left"
			[autoAlign]="true">
			<div class="popover-trigger" class="tooltip-trigger">
				<svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
					<path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path>
				</svg>
			</div>
			<cds-popover-content>
				<div style="padding: 1rem">
					<p class="popover-title">Available storage</p>
					<p class="popover-content">This server has 150GB of block storage remaining</p>
				</div>
			</cds-popover-content>
		</div>
	</ng-template>
	`,
	styles: [
		`
		.tooltip-trigger {
			box-sizing: border-box;
			margin: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 2rem;
			height: 2rem;
			background: white;
			border: 1px solid var(--cds-border-subtle);
			cursor: pointer;
		}
		svg { fill: var(--cds-background-inverse); }
		`
	]
})
export class FilterByFunctionOverrideStory implements OnInit, AfterViewInit {
	@Input() size = "md";
	@Input() showSelectionColumn = true;
	@Input() enableSingleSelect = false;
	@Input() striped = true;
	@Input() isDataGrid = false;
	@Input() noData = false;
	@Input() stickyHeader = false;
	@Input() skeleton = false;

	model = new TableModel();
	displayedCountries = ["US", "France", "Argentina", "Japan"];
	searchValue = "";

	@ViewChild("defTooltip") defTooltipRef: TemplateRef<any>;
	@ViewChild("tooltip") tooltipRef: TemplateRef<any>;
	@ViewChild("popover") popoverRef: TemplateRef<any>;

	dataset = [];

	constructor(protected iconService: IconService) {
		this.iconService.registerAll([
			Add16, Filter16
		]);
	}

	filterNodeNames(searchString: string) {
		this.searchValue = searchString;
	}

	filterCountries(countryName: string, checked: boolean) {
		if (checked) {
			this.displayedCountries.push(countryName);
		} else {
			this.displayedCountries.splice(this.displayedCountries.indexOf(countryName), 1);
		}
	}

	overflowOnClick = (event: any) => {
		event.stopPropagation();
	}

	ngOnInit() {
		this.model.header = [
			new TableHeaderItem({
				data: "Node ID"
			}),
			new TableHeaderItem({
				data: "Node name"
			}),
			new TableHeaderItem({
				data: "Node type"
			}),
			new TableHeaderItem({
				data: "Template!"
			})
		];

		this.model.data = this.dataset;
	}


	ngAfterViewInit(): void {
		this.model.data = [
			[
				new TableItem({
					template: this.popoverRef,
					data: { isOpen: false }
				}),
				new TableItem({ data: "East Sadye" }),
				new TableItem({
					template: this.tooltipRef,
					data: { isOpen: false }
				}),
				// new TableItem({ data: "US" }),
				new TableItem({
					template: this.defTooltipRef,
					data: { isOpen: false }
				})
			],
			[
				new TableItem({
					template: this.popoverRef,
					data: { isOpen: false }
				}),
				new TableItem({ data: "Lueilwitzview" }),
				new TableItem({
					template: this.tooltipRef,
					data: { isOpen: false }
				}),
				// new TableItem({ data: "US" }),
				new TableItem({
					template: this.defTooltipRef,
					data: { isOpen: false }
				})
			],
			[
				new TableItem({
					template: this.popoverRef,
					data: { isOpen: false }
				}),
				new TableItem({ data: "East Arcelyside" }),
				new TableItem({
					template: this.tooltipRef,
					data: { isOpen: false }
				}),
				// new TableItem({ data: "France" }),
				new TableItem({
					template: this.defTooltipRef,
					data: { isOpen: false }
				})
			],
			[
				new TableItem({ data: "119" }),
				new TableItem({ data: "West Dylan" }),
				new TableItem({
					template: this.tooltipRef,
					data: { isOpen: false }
				}),
				// new TableItem({ data: "Argentina" }),
				new TableItem({
					template: this.defTooltipRef,
					data: { isOpen: false }
				})
			],
			[
				new TableItem({
					template: this.popoverRef,
					data: { isOpen: false }
				}),
				new TableItem({ data: "Brandynberg" }),
				new TableItem({
					template: this.tooltipRef,
					data: { isOpen: false }
				}),
				// new TableItem({ data: "Japan" }),
				new TableItem({
					template: this.defTooltipRef
				})
			],
			[
				new TableItem({ data: "15" }),
				new TableItem({ data: "Stoltenbergport" }),
				new TableItem({
					template: this.tooltipRef,
					data: { isOpen: false }
				}),
				// new TableItem({ data: "Canada" }),
				new TableItem({
					template: this.defTooltipRef,
					data: { isOpen: true }
				})
			],
			[
				new TableItem({
					template: this.popoverRef,
					data: { isOpen: true }
				}),
				new TableItem({ data: "Rheabury" }),
				new TableItem({
					template: this.tooltipRef,
					data: { isOpen: false }
				}),
				// new TableItem({ data: "US" }),
				new TableItem({
					template: this.defTooltipRef,
					data: { isOpen: false }
				})
			]
		];
	}
}
