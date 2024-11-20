/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
import { TagModule, Tag } from "./";
import { IconModule } from "../icon";
import { PopoverModule } from "../popover";

export default {
	title: "Components/Tag",
	decorators: [
		moduleMetadata({
			imports: [
				TagModule,
				IconModule,
				PopoverModule
			]
		})
	],
	args: {
		size: "md",
		type: "red",
		skeleton: false
	},
	argTypes: {
		type: {
			options: [
				"warm-gray",
				"red",
				"magenta",
				"purple",
				"blue",
				"cyan",
				"teal",
				"green",
				"cool-gray",
				"high-contrast",
				"outline"
			],
			control: "select"
		}
	},
	component: Tag
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-tag
			[type]="type"
			[skeleton]="skeleton"
			[size]="size">
			<div cdsTagIcon>
				<svg ibmIcon="settings" size="16"></svg>
			</div>
			Read only
		</cds-tag>
	`
});
export const Basic = Template.bind({});

const FilteredTemplate = (args) => ({
	props: args,
	template: `
		<cds-tag-filter
			[type]="type"
			[size]="size"
			[skeleton]="skeleton"
			title="Filter"
			closeButtonLabel="Clear">
			<div cdsTagIcon>
				<svg ibmIcon="settings" size="16"></svg>
			</div>
			Filtered
		</cds-tag-filter>
	`
});
export const Filter = FilteredTemplate.bind({});

const SelectedTagTemplate = (args) => ({
	props: args,
	template: `
		<cds-tag-selectable
			[size]="size"
			[skeleton]="skeleton"
			[selected]="selected"
			(selectedChange)="selectedChange($event)"
			(click)="onClick($event)">
			<div cdsTagIcon>
				<svg ibmIcon="settings" size="16"></svg>
			</div>
			Selectable
		</cds-tag-selectable>
	`
});
export const SelectedTag = SelectedTagTemplate.bind({});
SelectedTag.args = {
	selected: false
};
SelectedTag.argTypes = {
	onClick: { action: "clicked" },
	selectedChange: { action: "Selected change" }
};

const OperationalTagTemplate = (args) => ({
	props: args,
	template: `
		<cds-tag-operational
			type="cyan"
			[size]="size"
			[skeleton]="skeleton"
			(click)="onClick($event)">
			<div cdsTagIcon>
				<svg ibmIcon="settings" size="16"></svg>
			</div>
			Operational
		</cds-tag-operational>


		<div
			cdsPopover
			[isOpen]="isOpen"
			[highContrast]="true">
			<cds-tag-operational
				[type]="type"
				[size]="size"
				[skeleton]="skeleton"
				(click)="isOpen = !isOpen">
				<div cdsTagIcon>
					<svg ibmIcon="settings" size="16"></svg>
				</div>
				Operational w/ popover
			</cds-tag-operational>
			<cds-popover-content>
				<div class="popover-content">
					Tag 1 name <br>
					Tag 2 name <br>
					Tag 3 name <br>
					Tag 4 name <br>
					<cds-tag type="green">Tag 5 name</cds-tag>
				</div>
			</cds-popover-content>
		</div>
	`,
	styles: [
		`.popover-content {
			line-height: 1.5;
			padding: 1rem;
			font-size: 14px;
		}`
	]
});
export const OperationalTag = OperationalTagTemplate.bind({});
// OperationalTag.args = {
// 	isOpen: false
// };
OperationalTag.argTypes = {
	onClick: { action: "clicked" }
};
