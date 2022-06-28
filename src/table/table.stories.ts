/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { NFormsModule } from "../forms";
import { ButtonModule } from "../button";
import { IconModule } from "../icon/icon.module";
import { SearchModule } from "../search";
import { PaginationModule } from "../pagination";
import { DialogModule } from "../dialog";
import {
	TableStory,
	DynamicTableStory,
	ExpansionTableStory,
	FilterByFunctionOverrideStory,
	FilterWithModelStory,
	OverflowTableStory,
	PaginationTableStory,
	SkeletonTableStory,
	TableNoDataStory
} from "./stories";
import {
	TableModule,
	Table,
	TableModel,
	TableItem,
	TableHeaderItem,
	TableRow
} from "./";

const simpleModel = new TableModel();
simpleModel.data = [
	[new TableItem({ data: "Name 1" }), new TableItem({ data: "qwer" })],
	[new TableItem({ data: "Name 3" }), new TableItem({ data: "zwer" })],
	[new TableItem({ data: "Name 2" }), new TableItem({ data: "swer" })],
	[new TableItem({ data: "Name 4" }), new TableItem({ data: "twer" })]
];
simpleModel.header = [
	new TableHeaderItem({ data: "Name" }), new TableHeaderItem({ data: "hwer" })
];

const emptyModel = new TableModel();
emptyModel.header = [
	new TableHeaderItem({ data: "Name" }), new TableHeaderItem({ data: "hwer", style: { "width": "auto" } })
];

const getProps = (more = {}, type: "args" | "argTypes") => {
	const defaultProps = type === "args" ? {
		model: simpleModel,
		title: "Table title",
		description: "",
		size: "md",
		showSelectionColumn: true,
		striped: false,
		sortable: true,
		isDataGrid: true,
		stickyHeader: false,
		skeleton: false
	} : {
		size: {
			options: ["sm", "sh", "md", "lg"],
			control: "select"
		}
	};
	return { ...defaultProps, ...more };
};

// Story starts here
export default {
	title: "Components/Table",
	decorators: [
		moduleMetadata({
			imports: [
				NFormsModule,
				TableModule,
				PaginationModule,
				DialogModule,
				SearchModule,
				IconModule,
				ButtonModule,
				DocumentationModule
			],
			declarations: [
				TableStory,
				DynamicTableStory,
				ExpansionTableStory,
				FilterByFunctionOverrideStory,
				FilterWithModelStory,
				OverflowTableStory,
				PaginationTableStory,
				SkeletonTableStory,
				TableNoDataStory
			]
		})
	]
} as Meta;

const Template: Story = (args) => ({
	props: args,
	template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle>{{title}}</h4>
				<p ibmTableHeaderDescription>{{description}}</p>
			</ibm-table-header>
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-table
				[model]="model"
				[stickyHeader]="stickyHeader"
				[size]="size"
				[skeleton]="skeleton"
				[enableSingleSelect]="enableSingleSelect"
				[showSelectionColumn]="showSelectionColumn"
				[striped]="striped"
				[sortable]="sortable"
				[isDataGrid]="isDataGrid">
			</app-table>
		</ibm-table-container>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	...getProps({
		enableSingleSelect: false
	}, "args")
};

const NoDataTemplate: Story = (args) => ({
	props: args,
	template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle>{{title}}</h4>
				<p ibmTableHeaderDescription>With no data</p>
			</ibm-table-header>
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-no-data-table
				[model]="model"
				[size]="size"
				[skeleton]="skeleton"
				[showSelectionColumn]="showSelectionColumn"
				[striped]="striped">
				<tbody><tr><td class="no-data" colspan="3"><div>No data.</div></td></tr></tbody>
			</app-no-data-table>
		</ibm-table-container>
	`,
	styles: [`
		.no-data {
			width: 100%;
			height: 150px;
			text-align: center;
		}
	`]
});
export const WithoutData = NoDataTemplate.bind({});
WithoutData.args = {
	...getProps({
		model: emptyModel
	}, "args")
};

const ToolbarTemplate: Story = (args) => ({
	props: args,
	template: `
		<section>
			<ibm-table-container>
				<ibm-table-header>
					<h4 ibmTableHeaderTitle>{{title}}</h4>
					<p ibmTableHeaderDescription>{{description}}</p>
				</ibm-table-header>
				<ibm-table-toolbar
					[model]="model"
					[batchText]="batchText"
					[size]="size"
					(cancel)="cancelMethod()"
					#toolbar>
					<ibm-table-toolbar-actions>
						<button ibmButton="primary" [tabindex]="toolbar.selected ? 0 : -1">
							Delete
							<svg ibmIcon="trash-can" size="16" class="cds--btn__icon"></svg>
						</button>
						<button ibmButton="primary" [tabindex]="toolbar.selected ? 0 : -1">
							Save
							<svg ibmIcon="save" size="16" class="cds--btn__icon"></svg>
						</button>
						<button ibmButton="primary" [tabindex]="toolbar.selected ? 0 : -1">
							Download
							<svg ibmIcon="download" size="16" class="cds--btn__icon"></svg>
						</button>
					</ibm-table-toolbar-actions>
					<ibm-table-toolbar-content *ngIf="!toolbar.selected">
						<ibm-table-toolbar-search
							ngDefaultControl
							[expandable]="searchExpandable"
							[(ngModel)]="searchModel">
						</ibm-table-toolbar-search>
						<ibm-overflow-menu
							triggerClass="cds--toolbar-action"
							[customTrigger]="customTrigger"
							placement="bottom"
							[offset]="size === 'sm' ? null : offset">
							<ibm-overflow-menu-option>Option 1</ibm-overflow-menu-option>
							<ibm-overflow-menu-option>Option 2</ibm-overflow-menu-option>
							<ibm-overflow-menu-option disabled="true">Disabled</ibm-overflow-menu-option>
							<ibm-overflow-menu-option type="danger">Danger option</ibm-overflow-menu-option>
						</ibm-overflow-menu>
						<button ibmButton="primary" size="sm" [tabindex]="toolbar.selected ? -1 : 0">
							Primary button<svg ibmIcon="add" size="20" class="cds--btn__icon"></svg>
						</button>
					</ibm-table-toolbar-content>
				</ibm-table-toolbar>
				<!--
					app-* components are for demo purposes only.
					You can create your own implementation by using the component source as an example.
				-->
				<app-table
					[model]="model"
					[size]="size"
					[showSelectionColumn]="showSelectionColumn"
					[enableSingleSelect]="enableSingleSelect"
					[striped]="striped"
					[sortable]="sortable"
					[skeleton]="skeleton"
					[stickyHeader]="stickyHeader"
					[isDataGrid]="isDataGrid">
				</app-table>
				<ng-template #customTrigger><svg ibmIcon="settings" size="16"></svg></ng-template>
			</ibm-table-container>
		</section>
	`
});
export const WithToolbar = ToolbarTemplate.bind({});
WithToolbar.args = {
	...getProps({
		description: "With toolbar",
		searchModel: "Initial search value",
		searchExpandable: true,
		enableSingleSelect: false,
		batchText: {
			SINGLE: "1 item selected",
			MULTIPLE: "{{count}} items selected"
		},
		offset: {
			x: -9,
			y: 0
		}
	}, "args")
};
WithToolbar.argTypes = {
	...getProps({
		canelMethod: {
			type: "function",
			control: false,
			defaultValue: () => {
				console.log("Custom cancel method");
			}
		}
	}, "argTypes")
};

const WithActionTemplate: Story = (args) => ({
	props: args,
	template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle>{{title}}</h4>
				<p ibmTableHeaderDescription>{{description}}</p>
			</ibm-table-header>
			<ibm-table-toolbar>
				<ibm-table-toolbar-content>
					<ibm-table-toolbar-search [expandable]="true"></ibm-table-toolbar-search>
					<button ibmButton="ghost" class="toolbar-action">
						<svg ibmIcon="settings" size="16" class="cds--toolbar-action__icon"></svg>
					</button>
					<button ibmButton="primary" size="sm">
						Primary button<svg ibmIcon="add" size="20" class="cds--btn__icon"></svg>
					</button>
				</ibm-table-toolbar-content>
			</ibm-table-toolbar>
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-table
				[model]="model"
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[enableSingleSelect]="enableSingleSelect"
				[stickyHeader]="stickyHeader"
				[skeleton]="skeleton"
				[striped]="striped"
				[sortable]="sortable"
				[isDataGrid]="isDataGrid">
			</app-table>
		</ibm-table-container>
	`
});
export const WithToolbarWithoutToolbarAction = WithActionTemplate.bind({});
WithToolbarWithoutToolbarAction.args = {
	...getProps({
		description: "With toolbar",
		enableSingleSeelct: false
	}, "args")
};

const FilteringTemplate: Story = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-model-filter-table
			[stickyHeader]="stickyHeader"
			[size]="size"
			[skeleton]="skeleton"
			[showSelectionColumn]="showSelectionColumn"
			[striped]="striped"
			[isDataGrid]="isDataGrid">
		</app-model-filter-table>
	`
});
export const Filtering = FilteringTemplate.bind({});
Filtering.storyName = "Filtering by alteration of model data";
WithToolbarWithoutToolbarAction.args = {
	...getProps({
		description: "With toolbar",
		enableSingleSeelct: false
	}, "args")
};

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_popover.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
