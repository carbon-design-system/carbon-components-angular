/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
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
			options: ["xs", "sm", "md", "lg", "xl"],
			control: "select"
		}
	};
	return { ...defaultProps, ...more };
};

function getModelWithDisabledRows() {
	const disabledModel = new TableModel();
	const row1 = new TableRow(new TableItem({ data: "Name 1" }), new TableItem({ data: "Disabled 1" }));
	row1.disabled = true;
	const row2 = new TableRow(new TableItem({ data: "Name 3" }), new TableItem({ data: "Disabled 2" }));
	row2.disabled = true;
	const row3 = new TableRow(new TableItem({ data: "Name 2" }), new TableItem({ data: "Enabled 1" }));
	const row4 = new TableRow(new TableItem({ data: "Name 4" }), new TableItem({ data: "Enabled 2" }));
	disabledModel.data = [row1, row2, row3, row4];
	return disabledModel;
}

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
				ButtonModule
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
	],
	argTypes: {
		model: {
			control: false,
			disabled: true
		}
	}
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
			You can create your own implementation by using the component source found at:
			https://github.com/IBM/carbon-components-angular/tree/master/src/table/stories/app-table.component.ts
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
Basic.argTypes = {
	...getProps({}, "argTypes")
};

const NoDataTemplate: Story = (args) => ({
	props: args,
	template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle id="table-header">{{title}}</h4>
				<p ibmTableHeaderDescription id="table-description">{{description}}</p>
			</ibm-table-header>

			<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source found at:
			https://github.com/IBM/carbon-components-angular/tree/master/src/table/stories/app-no-data.component.ts
			-->
			<app-no-data-table
				[model]="model"
				[size]="size"
				[skeleton]="skeleton"
				[showSelectionColumn]="showSelectionColumn"
				[striped]="striped"
				ariaLabelledby="table-header"
				ariaDescribedby="table-description">
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
			You can create your own implementation by using the component source found at:
			https://github.com/IBM/carbon-components-angular/tree/master/src/table/stories/app-table.component.ts
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

const DisabledRowsTemplate: Story = (args) => ({
	props: args,
	template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle>{{title}}</h4>
				<p ibmTableHeaderDescription>{{description}}</p>
			</ibm-table-header>
			<ibm-table-toolbar [model]="model" [batchText]="batchText" #toolbar>
				<ibm-table-toolbar-actions>
					<button ibmButton="primary">
						Delete
						<svg ibmIcon="delete" size="16" class="cds--btn__icon"></svg>
					</button>
					<button ibmButton="primary">
						Save
						<svg ibmIcon="save" size="16" class="cds--btn__icon"></svg>
					</button>
					<button ibmButton="primary">
						Download
						<svg ibmIcon="download" size="16" class="cds--btn__icon"></svg>
					</button>
				</ibm-table-toolbar-actions>
				<ibm-table-toolbar-content *ngIf="!toolbar.selected">
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
			You can create your own implementation by using the component source found at:
			https://github.com/IBM/carbon-components-angular/tree/master/src/table/stories/app-no-data-table.component.ts
			-->
			<app-no-data-table
				[model]="model"
				[size]="lg"
				[showSelectionColumn]="true"
				[striped]="striped"
				[sortable]="sortable"
				[isDataGrid]="isDataGrid">
			</app-no-data-table>
		</ibm-table-container>
	`
});
export const WithDisabledRows = DisabledRowsTemplate.bind({});
WithDisabledRows.storyName = "With toolbar and disabled rows";
WithDisabledRows.args = {
	...getProps({
		model: getModelWithDisabledRows(),
		size: "md",
		title: "Table title",
		description: "With toolbar & disabled rows",
		striped: false,
		sortable: true,
		isDataGrid: true,
		batchText: {
			SINGLE: "1 item selected",
			MULTIPLE: "{{count}} items selected"
		}
	}, "args")
};
WithDisabledRows.argTypes = {
	size: {
		options: ["xs", "sm", "md", "lg", "xl"],
		control: "select"
	}
};

const WithoutActionTemplate: Story = (args) => ({
	props: args,
	template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle id="table-header">{{title}}</h4>
				<p ibmTableHeaderDescription id="table-description">{{description}}</p>
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
			You can create your own implementation by using the component source found at:
			https://github.com/IBM/carbon-components-angular/tree/master/src/table/stories/app-table.component.ts
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
				[isDataGrid]="isDataGrid"
				ariaLabelledby="table-header"
				ariaDescribedby="table-description">
			</app-table>
		</ibm-table-container>
	`
});
export const WithToolbarWithoutToolbarAction = WithoutActionTemplate.bind({});
WithToolbarWithoutToolbarAction.args = {
	...getProps({
		description: "With toolbar",
		enableSingleSeelct: false
	}, "args")
};

const FilteringOverridingTemplate: Story = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/table/stories/app-function-override-filter-table.component.ts
		-->
		<app-function-override-filter-table
			[stickyHeader]="stickyHeader"
			[size]="size"
			[skeleton]="skeleton"
			[showSelectionColumn]="showSelectionColumn"
			[striped]="striped"
			[isDataGrid]="isDataGrid">
		</app-function-override-filter-table>
	`
});
export const FilteringOverriding = FilteringOverridingTemplate.bind({});
FilteringOverriding.storyName = "Filtering by overriding isRowFiltered [Recommended]";
FilteringOverriding.args = {
	...getProps({}, "args")
};

const FilteringTemplate: Story = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/table/stories/app-model-filter-table.component.ts
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
Filtering.args = {
	...getProps({
		description: "With toolbar",
		enableSingleSeelct: false
	}, "args")
};

const ExpansionTemplate: Story = (args) => ({
	props: args,
	template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle>{{title}}</h4>
				<p ibmTableHeaderDescription>{{description}}</p>
			</ibm-table-header>
			<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source found at:
			https://github.com/IBM/carbon-components-angular/tree/master/src/table/stories/app-expansion-table.component.ts
			-->
			<app-expansion-table
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[sortable]="sortable"
				[stickyHeader]="stickyHeader"
				[skeleton]="skeleton"
				[striped]="striped"
				[isDataGrid]="isDataGrid">
			</app-expansion-table>
		</ibm-table-container>
	`
});
export const WithExpansion = ExpansionTemplate.bind({});
WithExpansion.args = {
	...getProps({
		description: "With expansion"
	}, "args")
};

const DyanmicContentTemplate: Story = (args) => ({
	props: args,
	template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle>{{title}}</h4>
				<p ibmTableHeaderDescription>{{description}}</p>
			</ibm-table-header>
			<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source found at:
			https://github.com/IBM/carbon-components-angular/tree/master/src/table/stories/app-custom-table.component.ts
			-->
			<app-custom-table
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[sortable]="sortable"
				[stickyHeader]="stickyHeader"
				[skeleton]="skeleton"
				[striped]="striped"
				[isDataGrid]="isDataGrid">
			</app-custom-table>
		</ibm-table-container>
	`
});
export const WithDynamicContent = DyanmicContentTemplate.bind({});
WithDynamicContent.args = {
	...getProps({
		description: "With dynamic content"
	}, "args")
};

const OverflowMenuTemplate: Story = (args) => ({
	props: {
		...getProps({
			description: "With overflow menu"
		}, "args")
	},
	template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle>{{title}}</h4>
				<p ibmTableHeaderDescription>{{description}}</p>
			</ibm-table-header>
			<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source found at:
			https://github.com/IBM/carbon-components-angular/tree/master/src/table/stories/app-overflow-table.component.ts
			-->
			<app-overflow-table
				[size]="size"
				[showSelectionColumn]="showSelectionColumn"
				[sortable]="sortable"
				[stickyHeader]="stickyHeader"
				[skeleton]="skeleton"
				[striped]="striped"
				[isDataGrid]="isDataGrid">
			</app-overflow-table>
		</ibm-table-container>
	`
});
export const WithOverflowMenu = OverflowMenuTemplate.bind({});
// WithOverflowMenu.args = {
// 	...getProps({
// 		description: "With overflow menu"
// 	}, "args")
// };

const PaginationTemplate: Story = (args) => ({
	props: args,
	template: `
		<ibm-table-container>
			<ibm-table-header>
				<h4 ibmTableHeaderTitle>{{title}}</h4>
				<p ibmTableHeaderDescription>{{description}}</p>
			</ibm-table-header>
			<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source found at:
			https://github.com/IBM/carbon-components-angular/tree/master/src/table/stories/app-pagination-table.component.ts
			-->
			<app-pagination-table
				[skeleton]="skeleton"
				[sortable]="sortable"
				[totalDataLength]="totalDataLength"
				[showSelectionColumn]="showSelectionColumn"
				[stickyHeader]="stickyHeader"
				[skeleton]="skeleton"
				[model]="model">
			</app-pagination-table>
		</ibm-table-container>
	`
});
export const WithPagination = PaginationTemplate.bind({});
WithPagination.args = {
	...getProps({
		totalDataLength: 105,
		description: "With pagination"
	}, "args")
};

const FromComponentsTemplate: Story = (args) => ({
	props: args,
	template: `
		<table ibmTable [sortable]="false" style="width: 650px;">
			<thead ibmTableHead>
				<tr>
					<th
						scope="col"
						ibmTableHeadCell
						*ngFor="let column of model.header"
						[column]="column">
					</th>
				</tr>
			</thead>
			<tbody ibmTableBody>
				<tr
					*ngFor="let row of model.data"
					ibmTableRow
					[row]="row">
					<td
						*ngFor="let item of row; let j = index"
						ibmTableData
						[item]="item"
						[class]="model.header[j].className"
						[ngStyle]="model.header[j].style">
					</td>
				</tr>
			</tbody>
		</table>
	`
});
export const FromComponents = FromComponentsTemplate.bind({});
FromComponents.args = {
	...getProps({}, "args")
};

const SkeletonTemplate: Story = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/table/stories/app-skeleton-table.component.ts
		-->
		<app-skeleton-table
			[skeletonModel]="skeletonModel"
			[size]="size"
			[striped]="striped">
		</app-skeleton-table>
	`
});
export const Skeleton = SkeletonTemplate.bind({});
