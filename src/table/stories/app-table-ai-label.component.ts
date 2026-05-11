import {
	AfterViewInit,
	Component,
	TemplateRef,
	ViewChild
} from "@angular/core";
import { AILabelComponent } from "../../ai-label";
import { TableHeaderItem } from "../table-header-item.class";
import { TableItem } from "../table-item.class";
import { TableModel } from "../table-model.class";
import { Table } from "../table.component";
import { TableContainer } from "../table-container.component";
import { TableHeader } from "../header/table-header.component";
import { TableHeaderDecorator } from "../header/table-header-decorator.component";
import { TableHeaderDescription } from "../header/table-header-description.directive";
import { TableHeaderTitle } from "../header/table-header-title.directive";
import { AI_LABEL_INNER } from "../../storybook/ai-label-story-shared";

const DEMO_ROWS: string[][] = [
	["Load Balancer 3", "HTTP", "3000", "Round robin", "Kevin's VM Groups", "Disabled"],
	["Load Balancer 1", "HTTP", "443", "Round robin", "Maureen's VM Groups", "Starting"],
	["Load Balancer 2", "HTTP", "80", "DNS delegation", "Andrew's VM Groups", "Active"],
	["Load Balancer 6", "HTTP", "3000", "Round robin", "Marc's VM Groups", "Disabled"],
	["Load Balancer 4", "HTTP", "443", "Round robin", "Mel's VM Groups", "Starting"],
	["Load Balancer 5", "HTTP", "80", "DNS delegation", "Ronja's VM Groups", "Active"]
];

function showSlugForRowIndex(i: number): boolean {
	return i === 1 || i === 3 || i === 4;
}

@Component({
	selector: "app-table-ai-label-selection",
	template: `
		<ng-template #rowSlugTpl let-data="data">
			@if (data?.show) {

				<cds-ai-label
					class="ai-label-container"
					kind="default"
					size="mini"
					[autoAlign]="true"
					aiText="AI"
					ariaLabel="Show information">
					` + AI_LABEL_INNER + `
				</cds-ai-label>

}
		</ng-template>
		<cds-table
			[model]="model"
			size="md"
			[showSelectionColumn]="true"
			[striped]="true"
			[sortable]="true"
			[isDataGrid]="true"
			[withRowAILabels]="true">
		</cds-table>
	`,
	standalone: true,
	imports: [Table, AILabelComponent]
})
export class TableAiLabelWithSelectionStory implements AfterViewInit {

	model = new TableModel();
	@ViewChild("rowSlugTpl") protected rowSlugTpl: TemplateRef<any>;

	ngAfterViewInit() {
		this.model.header = [
			new TableHeaderItem({ data: "", sortable: false }),
			new TableHeaderItem({ data: "Name" }),
			new TableHeaderItem({ data: "Protocol" }),
			new TableHeaderItem({ data: "Port" }),
			new TableHeaderItem({ data: "Rule" }),
			new TableHeaderItem({ data: "Attached groups" }),
			new TableHeaderItem({ data: "Status" })
		];

		this.model.data = DEMO_ROWS.map((cells, rowIndex) => {
			const show = showSlugForRowIndex(rowIndex);
			return [
				new TableItem({
					data: { show },
					template: this.rowSlugTpl,
					hasAILabelDecorator: show,
					cellClassName: show
						? "cds--table-column-decorator cds--table-column-decorator--active"
						: "cds--table-column-decorator"
				}),
				...cells.map((c) => new TableItem({ data: c }))
			];
		});
	}
}

@Component({
	selector: "app-table-ai-label-radio",
	template: `
		<ng-template #rowSlugTpl let-data="data">
			@if (data?.show) {

				<cds-ai-label
					class="ai-label-container"
					kind="default"
					size="mini"
					[autoAlign]="true"
					aiText="AI"
					ariaLabel="Show information">
					` + AI_LABEL_INNER + `
				</cds-ai-label>

}
		</ng-template>
		<cds-table
			[model]="model"
			size="md"
			[showSelectionColumn]="true"
			[enableSingleSelect]="true"
			[striped]="true"
			[sortable]="true"
			[isDataGrid]="true"
			[withRowAILabels]="true">
		</cds-table>
	`,
	standalone: true,
	imports: [Table, AILabelComponent]
})
export class TableAiLabelRadioSelectionStory implements AfterViewInit {

	model = new TableModel();
	@ViewChild("rowSlugTpl") protected rowSlugTpl: TemplateRef<any>;

	ngAfterViewInit() {
		this.model.header = [
			new TableHeaderItem({ data: "", sortable: false }),
			new TableHeaderItem({ data: "Name" }),
			new TableHeaderItem({ data: "Protocol" }),
			new TableHeaderItem({ data: "Port" }),
			new TableHeaderItem({ data: "Rule" }),
			new TableHeaderItem({ data: "Attached groups" }),
			new TableHeaderItem({ data: "Status" })
		];

		this.model.data = DEMO_ROWS.map((cells, rowIndex) => {
			const show = showSlugForRowIndex(rowIndex);
			return [
				new TableItem({
					data: { show },
					template: this.rowSlugTpl,
					hasAILabelDecorator: show,
					cellClassName: show
						? "cds--table-column-decorator cds--table-column-decorator--active"
						: "cds--table-column-decorator"
				}),
				...cells.map((c) => new TableItem({ data: c }))
			];
		});
	}
}

@Component({
	selector: "app-table-ai-label-selection-expansion",
	template: `
		<ng-template #rowSlugTpl let-data="data">
			@if (data?.show) {

				<cds-ai-label
					class="ai-label-container"
					kind="default"
					size="mini"
					[autoAlign]="true"
					aiText="AI"
					ariaLabel="Show information">
					` + AI_LABEL_INNER + `
				</cds-ai-label>

}
		</ng-template>
		<cds-table
			[model]="model"
			size="md"
			[showSelectionColumn]="true"
			[showExpandAllToggle]="true"
			[striped]="true"
			[sortable]="true"
			[isDataGrid]="true"
			[withRowAILabels]="true">
		</cds-table>
	`,
	standalone: true,
	imports: [Table, AILabelComponent]
})
export class TableAiLabelSelectionExpansionStory implements AfterViewInit {

	model = new TableModel();
	@ViewChild("rowSlugTpl") protected rowSlugTpl: TemplateRef<any>;

	ngAfterViewInit() {
		this.model.header = [
			new TableHeaderItem({ data: "", sortable: false }),
			new TableHeaderItem({ data: "Name" }),
			new TableHeaderItem({ data: "Protocol" }),
			new TableHeaderItem({ data: "Port" }),
			new TableHeaderItem({ data: "Rule" }),
			new TableHeaderItem({ data: "Attached groups" }),
			new TableHeaderItem({ data: "Status" })
		];

		const expanded = "<h6>Expandable row content</h6><div>Description here</div>";

		this.model.data = DEMO_ROWS.map((cells, rowIndex) => {
			const show = showSlugForRowIndex(rowIndex);
			return [
				new TableItem({
					data: { show },
					template: this.rowSlugTpl,
					expandedData: expanded,
					hasAILabelDecorator: show,
					cellClassName: show
						? "cds--table-column-decorator cds--table-column-decorator--active"
						: "cds--table-column-decorator"
				}),
				...cells.map((c) => new TableItem({ data: c }))
			];
		});
	}
}

@Component({
	selector: "app-table-ai-label-expansion-only",
	template: `
		<ng-template #rowSlugTpl let-data="data">
			@if (data?.show) {

				<cds-ai-label
					class="ai-label-container"
					kind="default"
					size="mini"
					[autoAlign]="true"
					aiText="AI"
					ariaLabel="Show information">
					` + AI_LABEL_INNER + `
				</cds-ai-label>

}
		</ng-template>
		<cds-table
			[model]="model"
			size="md"
			[showSelectionColumn]="false"
			[showExpandAllToggle]="true"
			[striped]="true"
			[sortable]="true"
			[isDataGrid]="true"
			[withRowAILabels]="true">
		</cds-table>
	`,
	standalone: true,
	imports: [Table, AILabelComponent]
})
export class TableAiLabelExpansionOnlyStory implements AfterViewInit {

	model = new TableModel();
	@ViewChild("rowSlugTpl") protected rowSlugTpl: TemplateRef<any>;

	ngAfterViewInit() {
		this.model.header = [
			new TableHeaderItem({ data: "", sortable: false }),
			new TableHeaderItem({ data: "Name" }),
			new TableHeaderItem({ data: "Protocol" }),
			new TableHeaderItem({ data: "Port" }),
			new TableHeaderItem({ data: "Rule" }),
			new TableHeaderItem({ data: "Attached groups" }),
			new TableHeaderItem({ data: "Status" })
		];

		const expanded = "<h6>Expandable row content</h6><div>Description here</div>";

		this.model.data = DEMO_ROWS.map((cells, rowIndex) => {
			const show = showSlugForRowIndex(rowIndex);
			return [
				new TableItem({
					data: { show },
					template: this.rowSlugTpl,
					expandedData: expanded,
					hasAILabelDecorator: show,
					cellClassName: show
						? "cds--table-column-decorator cds--table-column-decorator--active"
						: "cds--table-column-decorator"
				}),
				...cells.map((c) => new TableItem({ data: c }))
			];
		});
	}
}

@Component({
	selector: "app-table-ai-label-column-expansion",
	template: `
		<ng-template #attachedGroupsHeaderTpl let-data="data">
			<cds-ai-label
				class="ai-label-container"
				kind="default"
				size="mini"
				[autoAlign]="true"
				align="bottom-end"
				aiText="AI"
				ariaLabel="Show information">
				` + AI_LABEL_INNER + `
			</cds-ai-label>
		</ng-template>
		<cds-table
			[model]="model"
			size="md"
			[showSelectionColumn]="true"
			[showExpandAllToggle]="true"
			[striped]="true"
			[sortable]="true"
			[isDataGrid]="true">
		</cds-table>
	`,
	standalone: true,
	imports: [Table, AILabelComponent]
})
export class TableAiLabelColumnExpansionStory implements AfterViewInit {

	model = new TableModel();
	@ViewChild("attachedGroupsHeaderTpl") protected attachedGroupsHeaderTpl: TemplateRef<any>;

	ngAfterViewInit() {
		const expanded = "<h6>Expandable row content</h6><div>Description here</div>";

		this.model.header = [
			new TableHeaderItem({ data: "Name" }),
			new TableHeaderItem({ data: "Protocol" }),
			new TableHeaderItem({ data: "Port" }),
			new TableHeaderItem({ data: "Rule" }),
			new TableHeaderItem({
				data: { label: "Attached groups" },
				template: this.attachedGroupsHeaderTpl,
				sortable: false,
				hasAILabelHeader: true
			}),
			new TableHeaderItem({ data: "Status" })
		];

		this.model.data = DEMO_ROWS.map((cells) => [
			new TableItem({ data: cells[0], expandedData: expanded }),
			new TableItem({ data: cells[1] }),
			new TableItem({ data: cells[2] }),
			new TableItem({ data: cells[3] }),
			new TableItem({ data: cells[4] }),
			new TableItem({ data: cells[5] })
		]);
	}
}

@Component({
	selector: "app-table-ai-label-column-sort",
	template: `
		<ng-template #attachedGroupsHeaderTpl let-data="data">
			<cds-ai-label
				class="ai-label-container"
				kind="default"
				size="mini"
				[autoAlign]="true"
				align="bottom-end"
				aiText="AI"
				ariaLabel="Show information">
				` + AI_LABEL_INNER + `
			</cds-ai-label>
		</ng-template>
		<cds-table
			[model]="model"
			size="md"
			[showSelectionColumn]="false"
			[striped]="true"
			[sortable]="true"
			[isDataGrid]="true">
		</cds-table>
	`,
	standalone: true,
	imports: [Table, AILabelComponent]
})
export class TableAiLabelColumnSortStory implements AfterViewInit {

	model = new TableModel();
	@ViewChild("attachedGroupsHeaderTpl") protected attachedGroupsHeaderTpl: TemplateRef<any>;

	ngAfterViewInit() {
		this.model.header = [
			new TableHeaderItem({ data: "Name" }),
			new TableHeaderItem({ data: "Protocol" }),
			new TableHeaderItem({ data: "Port" }),
			new TableHeaderItem({ data: "Rule" }),
			new TableHeaderItem({
				data: { label: "Attached groups" },
				template: this.attachedGroupsHeaderTpl,
				hasAILabelHeader: true
			}),
			new TableHeaderItem({ data: "Status" })
		];

		this.model.data = DEMO_ROWS.map((cells) =>
			cells.map((c) => new TableItem({ data: c }))
		);
	}
}

@Component({
	selector: "app-table-ai-label-full-table",
	template: `
		<cds-table-container class="ai-label-column-table" [aiEnabled]="true">
			<cds-table-header>
				<h4 cdsTableHeaderTitle>DataTable</h4>
				<p cdsTableHeaderDescription>AI, full table</p>
				<cds-table-header-decorator>
					<cds-ai-label
						class="ai-label-container"
						kind="default"
						size="xs"
						[autoAlign]="true"
						aiText="AI"
						ariaLabel="Show information">
						` + AI_LABEL_INNER + `
					</cds-ai-label>
				</cds-table-header-decorator>
			</cds-table-header>
			<cds-table
				[model]="model"
				size="md"
				[showSelectionColumn]="false"
				[striped]="true"
				[sortable]="true"
				[isDataGrid]="true">
			</cds-table>
		</cds-table-container>
	`,
	standalone: true,
	imports: [
		TableContainer,
		TableHeader,
		TableHeaderTitle,
		TableHeaderDescription,
		TableHeaderDecorator,
		Table,
		AILabelComponent
	]
})
export class TableAiLabelFullTableStory implements AfterViewInit {
	model = new TableModel();

	ngAfterViewInit() {
		this.model.header = [
			new TableHeaderItem({ data: "Name" }),
			new TableHeaderItem({ data: "Protocol" }),
			new TableHeaderItem({ data: "Port" }),
			new TableHeaderItem({ data: "Rule" }),
			new TableHeaderItem({ data: "Attached groups" }),
			new TableHeaderItem({ data: "Status" })
		];

		this.model.data = DEMO_ROWS.map((cells) =>
			cells.map((c) => new TableItem({ data: c }))
		);
	}
}
