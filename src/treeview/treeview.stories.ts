import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata } from "@storybook/angular";
import { IconModule } from "../icon";
import { TreeNodeComponent, TreeViewComponent, TreeviewModule } from "./";
import { IconTreeviewDemoComponent } from "./stories/app-treeview-icons.component";

export default {
	title: "Components/Tree view",
	decorators: [
		moduleMetadata({
			imports: [CommonModule, TreeviewModule, IconModule],
			declarations: [IconTreeviewDemoComponent]
		})
	],
	component: TreeViewComponent,
	subcomponents: TreeNodeComponent,
	args: {
		size: "sm",
		isMultiSelect: false
	},
	argTypes: {
		size: {
			options: ["xs", "sm"],
			control: "radio"
		},
		onSelect: { action: "clicked" }
	}
} as Meta;

const nodes = [
	{
		id: "1",
		value: "Artificial intelligence",
		label: "Artificial intelligence"
	},
	{
		id: "2",
		value: "Blockchain",
		label: "Blockchain"
	},
	{
		id: "3",
		value: "Business automation",
		label: "Business automation",
		children: [
			{
				id: "3-1",
				value: "Business process automation",
				label: "Business process automation"
			},
			{
				id: "3-2",
				value: "Business process mapping",
				label: "Business process mapping"
			}
		]
	},
	{
		id: "4",
		value: "Business operations",
		label: "Business operations"
	},
	{
		id: "5",
		value: "Cloud computing",
		label: "Cloud computing",
		expanded: true,
		children: [
			{
				id: "5-1",
				value: "Containers",
				label: "Containers"
			},
			{
				id: "5-2",
				value: "Databases",
				label: "Databases"
			},
			{
				id: "5-3",
				value: "DevOps",
				label: "DevOps",
				expanded: true,
				children: [
					{
						id: "5-4",
						value: "Solutions",
						label: "Solutions"
					},
					{
						id: "5-5",
						value: "Case studies",
						label: "Case studies",
						expanded: true,
						children: [
							{
								id: "5-6",
								value: "Resources",
								label: "Resources"
							}
						]
					}
				]
			}
		]
	},
	{
		id: "6",
		value: "Data & Analytics",
		label: "Data & Analytics",
		children: [
			{
				id: "6-1",
				value: "Big data",
				label: "Big data"
			},
			{
				id: "6-2",
				value: "Business intelligence",
				label: "Business intelligence"
			}
		]
	},
	{
		id: "7",
		value: "Not selectable node",
		label: "Not selectable node",
		selectable: false,
		children: [
			{
				id: "7-1",
				value: "Child 1",
				label: "Child 1"
			},
			{
				id: "7-2",
				value: "Child 2",
				label: "Child 2"
			}
		]
	},
	{
		id: "8",
		value: "IT infrastructure",
		label: "IT infrastructure",
		expanded: true,
		disabled: true,
		children: [
			{
				id: "8-1",
				value: "Data storage",
				label: "Data storage"
			},
			{
				id: "8-2",
				value: "Enterprise servers",
				label: "Enterprise servers"
			},
			{
				id: "9",
				value: "Hybrid cloud infrastructure",
				label: "Hybrid cloud infrastructure",
				expanded: true,
				children: [
					{
						id: "9-1",
						value: "Insights",
						label: "Insights"
					},
					{
						id: "9-2",
						value: "Benefits",
						label: "Benefits"
					}
				]
			}
		]
	}
];

const Template = (args) => ({
	props: args,
	template: `
		<cds-tree-view
			label="Tree view"
			style="width: 18rem; display: block;"
			[size]="size"
			[tree]="tree"
			[isMultiSelect]="isMultiSelect"
			(select)="onSelect($event)">
		</cds-tree-view>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	tree: nodes
};
Basic.argTypes = {
	tree: {
		control: false
	}
};

const ProjectedNodesTemplate = (args) => ({
	props: args,
	template: `
		<cds-tree-view
			label="Tree view"
			style="width: 18rem; display: block;"
			[size]="size"
			[isMultiSelect]="isMultiSelect"
			(select)="onSelect($event)">

			<ng-template #nodeTemplateRef let-node="node" let-depth="depth" let-disabled="disabled">

				<cds-tree-node
					[node]="node"
					[depth]="depth"
					[disabled]="disabled">
					<ng-container *ngIf="node.children && node.children.length">
						<ng-container *ngFor="let child of node.children; let i = index;">
						<!-- Increase the depth by 1 -->
							<ng-container
								*ngTemplateOutlet="nodeTemplateRef; context: {node: child, depth: depth + 1, disabled };">
							</ng-container>
						</ng-container>
					</ng-container>
				</cds-tree-node>

			</ng-template>

			<ng-container *ngFor="let node of tree">
				<ng-container
					*ngTemplateOutlet="nodeTemplateRef; context: {node: node, depth: 0, disabled: node.disabled };">
				</ng-container>
			</ng-container>
		</cds-tree-view>
	`
});
export const ProjectedContent = ProjectedNodesTemplate.bind({});
ProjectedContent.args = {
	tree: nodes
};
ProjectedContent.argTypes = {
	tree: {
		control: false
	}
};

const IconsTemplate = (args) => ({
	props: args,
	template: `
		<app-treeview-icon-component></app-treeview-icon-component>
	`
});
export const WithIcons = IconsTemplate.bind({});
WithIcons.argTypes = {
	tree: {
		control: false
	}
};
