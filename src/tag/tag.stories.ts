/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
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
				"cool-gray"
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
		<ibm-tag [type]="type">Tag</ibm-tag>
	`
});
export const Basic = Template.bind({});

const FilteredTemplate: Story<Tag> = (args) => ({
	props: args,
	template: `
		<ibm-tag-filter
			[type]="type"
			title="Filter"
			closeButtonLabel="Clear">
			filter
		</ibm-tag-filter>
	`
});
export const Filter = FilteredTemplate.bind({});
