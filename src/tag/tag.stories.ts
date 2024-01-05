/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
import { TagModule, Tag } from "./";

export default {
	title: "Components/Tag",
	decorators: [
		moduleMetadata({
			imports: [TagModule]
		})
	],
	args: {
		type: "red"
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
		<cds-tag [type]="type" [size]="size">Tag</cds-tag>
	`
});
export const Basic = Template.bind({});

const FilteredTemplate = (args) => ({
	props: args,
	template: `
		<cds-tag-filter
			[type]="type"
			[size]="size"
			title="Filter"
			closeButtonLabel="Clear">
			filter
		</cds-tag-filter>
	`
});
export const Filter = FilteredTemplate.bind({});
