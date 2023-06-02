/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { TagModule, Tag } from "./";

export default {
	title: "Components/Tag",
	decorators: [
		moduleMetadata({
			imports: [TagModule]
		})
	],
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
			defaultValue: "red",
			control: "select"
		}
	},
	component: Tag
} as Meta;

const Template: Story<Tag> = (args) => ({
	props: args,
	template: `
		<cds-tag [type]="type" [size]="size">Tag</cds-tag>
	`
});
export const Basic = Template.bind({});

const FilteredTemplate: Story<Tag> = (args) => ({
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
