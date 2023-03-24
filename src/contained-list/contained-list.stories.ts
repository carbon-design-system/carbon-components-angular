import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { ContainedListModule, ContainedList, ContainedListItem } from ".";
import { ButtonModule } from "../button";
import { IconModule } from "../icon";
import { LayerModule } from "../layer";
import { LayoutModule } from "../layout";
import { TagModule } from "../tag";
import { DialogModule } from "../dialog";
import { TooltipModule } from "../tooltip";
import { ContainedListKind, ContainedListSize } from "./contained-list.enums";
import { ContainedListStoryModule } from "./stories/contained-list-story.module";

export default {
	title: "Components/Contained List",
	decorators: [
		moduleMetadata({
			imports: [
				ContainedListModule,
				ContainedListStoryModule,
				ButtonModule,
				IconModule,
				LayerModule,
				LayoutModule,
				TagModule,
				DialogModule,
				TooltipModule
			]
		})
	],
	component: ContainedList,
	subcomponents: {
		ContainedListItem
	},
	args: {
		isInset: false,
		kind: ContainedListKind.OnPage,
		label: "List title",
		size: ContainedListSize.Large
	},
	argTypes: {
		label: {
			type: { name: "string", required: true }
		},
		action: {
			table: {
				disable: true
			}
		}
	}
} as Meta;

const basicTemplate: Story<ContainedList> = () => ({
	template: `
		<cds-contained-list label="List title">
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item>List item</cds-contained-list-item>
		</cds-contained-list>
		<cds-contained-list label="List title">
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item>List item</cds-contained-list-item>
		</cds-contained-list>
	`
});
export const basic = basicTemplate.bind({});

const usageExamplesTemplate: Story<ContainedList> = () => ({
	template: `
		<ng-template #add let-item>
			<ibm-icon-button
				type="button"
				kind="primary"
				align="left"
				description="Add">
				<svg class="cds--btn__icon" ibmIcon="add" size="16"></svg>
			</ibm-icon-button>
		</ng-template>
		<ng-template #overflowMenu let-item>
			<ibm-tooltip class="cds--icon-tooltip" description="Options" align="left">
				<ibm-overflow-menu [flip]="true" [customTrigger]="customTrigger" triggerClass="cds--toolbar-action" [offset]="{ x: 0, y: 0 }">
					<ibm-overflow-menu-option>View details</ibm-overflow-menu-option>
					<ibm-overflow-menu-option>Edit</ibm-overflow-menu-option>
					<ibm-overflow-menu-option [divider]="true" type="danger">Remove</ibm-overflow-menu-option>
				</ibm-overflow-menu>
			</ibm-tooltip>
		</ng-template>
		<cds-contained-list label="List title" [action]="add">
			<cds-contained-list-item [action]="overflowMenu">List item</cds-contained-list-item>
			<cds-contained-list-item [action]="overflowMenu">List item</cds-contained-list-item>
			<cds-contained-list-item [action]="overflowMenu">List item</cds-contained-list-item>
		</cds-contained-list>

		<ng-template #addGhost let-item>
			<ibm-icon-button
				type="button"
				kind="ghost"
				align="left"
				description="Add">
				<svg class="cds--btn__icon" ibmIcon="add" size="16"></svg>
			</ibm-icon-button>
		</ng-template>
		<cds-contained-list label="List title" [action]="addGhost">
			<cds-contained-list-item>
				List item
				<br />
				<span class="cds--label cds--label--no-margin">
					Description text
				</span>
			</cds-contained-list-item>
			<cds-contained-list-item>
				List item
				<br />
				<span class="cds--label cds--label--no-margin">
					Description text
				</span>
			</cds-contained-list-item>
			<cds-contained-list-item>
				List item
				<br />
				<span class="cds--label cds--label--no-margin">
					Description text
				</span>
			</cds-contained-list-item>
		</cds-contained-list>

		<cds-contained-list label="List title">
			<cds-contained-list-item>
				<div style="display: 'grid'; gridTemplateColumns: repeat(3, 1fr); columnGap: 1rem">
					<span>List item</span>
					<span>List item details</span>
					<span>List item details</span>
				</div>
			</cds-contained-list-item>
			<cds-contained-list-item>
				<div style="display: 'grid'; gridTemplateColumns: repeat(3, 1fr); columnGap: 1rem">
					<span>List item</span>
					<span>List item details</span>
					<span>List item details</span>
				</div>
			</cds-contained-list-item>
			<cds-contained-list-item>
				<div style="display: 'grid'; gridTemplateColumns: repeat(3, 1fr); columnGap: 1rem">
					<span>List item</span>
					<span>List item details</span>
					<span>List item details</span>
				</div>
			</cds-contained-list-item>
		</cds-contained-list>
	`
});
export const usageExamples = usageExamplesTemplate.bind({});

const disclosedTemplate: Story<ContainedList> = () => ({
	template: `
		<cds-contained-list label="List title" kind="disclosed">
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item>List item</cds-contained-list-item>
		</cds-contained-list>
		<cds-contained-list label="List title" kind="disclosed">
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item>List item</cds-contained-list-item>
		</cds-contained-list>
	`
});
export const disclosed = disclosedTemplate.bind({});

const withActionsTemplate: Story<ContainedList> = () => ({
	template: `
		<ng-template #action let-item>
			<button
				ibmButton="ghost"
				aria-label="Action"
				iconOnly="true">
				<svg ibmIcon="subtract--alt" size="16" class="cds--btn__icon"></svg>
			</button>
		</ng-template>
		<cds-contained-list label="List title">
			<cds-contained-list-item [action]="action">List item</cds-contained-list-item>
			<cds-contained-list-item [action]="action">List item</cds-contained-list-item>
			<cds-contained-list-item [action]="action">List item</cds-contained-list-item>
			<cds-contained-list-item [action]="action">List item</cds-contained-list-item>
		</cds-contained-list>
	`
});
export const withActions = withActionsTemplate.bind({});

const withIconsTemplate: Story<ContainedList> = () => ({
	template: `
		<ng-template #apple let-icon>
			<svg ibmIcon="apple" size="16"></svg>
		</ng-template>

		<ng-template #wheat let-icon>
			<svg ibmIcon="wheat" size="16"></svg>
		</ng-template>

		<ng-template #strawberry let-icon>
			<svg ibmIcon="strawberry" size="16"></svg>
		</ng-template>

		<ng-template #fish let-icon>
			<svg ibmIcon="fish" size="16"></svg>
		</ng-template>

		<cds-contained-list label="List title">
			<cds-contained-list-item [icon]="apple">List item</cds-contained-list-item>
			<cds-contained-list-item [icon]="wheat">List item</cds-contained-list-item>
			<cds-contained-list-item [icon]="strawberry">List item</cds-contained-list-item>
			<cds-contained-list-item [icon]="fish">List item</cds-contained-list-item>
		</cds-contained-list>
	`
});
export const withIcons = withIconsTemplate.bind({});

const withInteractiveItemsTemplate: Story<ContainedList> = () => ({
	template: `
		<cds-contained-list label="List title">
			<cds-contained-list-item [clickable]="true">
				<ng-container ibmContainedListItemButton>List item</ng-container>
			</cds-contained-list-item>
			<cds-contained-list-item [clickable]="true" [disabled]="true">
				<ng-container ibmContainedListItemButton>List item</ng-container>
			</cds-contained-list-item>
			<cds-contained-list-item [clickable]="true">
				<ng-container ibmContainedListItemButton>List item</ng-container>
			</cds-contained-list-item>
			<cds-contained-list-item [clickable]="true">
				<ng-container ibmContainedListItemButton>List item</ng-container>
			</cds-contained-list-item>
		</cds-contained-list>
	`
});
export const withInteractiveItems = withInteractiveItemsTemplate.bind({});

const withInteractiveItemsAndActionsTemplate: Story<ContainedList> = () => ({
	template: `
		<ng-template #action let-item>
			<button
				aria-label="Action"
				ibmButton="ghost"
				iconOnly="true">
				<svg ibmIcon="subtract--alt" size="16" class="cds--btn__icon"></svg>
			</button>
		</ng-template>
		<cds-contained-list label="List title">
			<cds-contained-list-item [clickable]="true" [action]="action">
				<ng-container ibmContainedListItemButton>List item</ng-container>
			</cds-contained-list-item>
			<cds-contained-list-item [clickable]="true" [action]="action">
				<ng-container ibmContainedListItemButton>List item</ng-container>
			</cds-contained-list-item>
			<cds-contained-list-item [clickable]="true" [action]="action">
				<ng-container ibmContainedListItemButton>List item</ng-container>
			</cds-contained-list-item>
			<cds-contained-list-item [clickable]="true" [action]="action">
				<ng-container ibmContainedListItemButton>List item</ng-container>
			</cds-contained-list-item>
		</cds-contained-list>
	`
});
export const withInteractiveItemsAndActions = withInteractiveItemsAndActionsTemplate.bind({});

const withLayerTemplate: Story<ContainedList> = () => ({
	template: `
		<div ibmStack="vertical" [gap]="5">
			<cds-contained-list label="List title">
				<cds-contained-list-item>List item</cds-contained-list-item>
				<cds-contained-list-item>List item</cds-contained-list-item>
				<cds-contained-list-item>List item</cds-contained-list-item>
				<cds-contained-list-item>List item</cds-contained-list-item>
			</cds-contained-list>
			<div [ibmLayer]="1">
				<div ibmStack="vertical" [gap]="5">
					<cds-contained-list label="List title">
						<cds-contained-list-item>List item</cds-contained-list-item>
						<cds-contained-list-item>List item</cds-contained-list-item>
					</cds-contained-list>
					<div [ibmLayer]="2">
						<cds-contained-list label="List title">
							<cds-contained-list-item>List item</cds-contained-list-item>
							<cds-contained-list-item>List item</cds-contained-list-item>
						</cds-contained-list>
					</div>
				</div>
			</div>
		</div>
	`
});
export const withLayer = withLayerTemplate.bind({});

const withListTitleDecoratorsTemplate: Story<ContainedList> = () => ({
	template: `
		<ng-template #label let-item>
			<div style="display: flex; alignItems: center; justifyContent: space-between">
		    	<span>List title</span>
		    	<ibm-tag size="sm">4</ibm-tag>
		    </div>
		</ng-template>
		<cds-contained-list [label]="label">
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item>List item</cds-contained-list-item>
			<cds-contained-list-item>List item</cds-contained-list-item>
		</cds-contained-list>
	`
});
export const withListTitleDecorators = withListTitleDecoratorsTemplate.bind({});

