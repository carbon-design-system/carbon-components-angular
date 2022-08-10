/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { SearchModule, Search } from "./";

export default {
	title: "Components/Search",
	decorators: [
		moduleMetadata({
			imports: [SearchModule]
		})
	],
	args: {
		expandable: false,
		placeholder: "Search",
		disabled: false,
		skeleton: false
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg"],
			defaultValue: "md",
			control: "radio"
		},
		theme: {
			options: ["light", "dark"],
			defaultValue: "dark",
			control: "radio"
		},
		autocomplete: {
			options: ["on", "off"],
			defaultValue: "on",
			control: "radio"
		},
		clear: {
			action: "Cleared!"
		},
		valueChange: {
			action: "Value changed!"
		}
	},
	component: Search
} as Meta;

const Template: Story<Search> = (args) => ({
	props: args,
	template: `
		<ibm-search
			[theme]="theme"
			[placeholder]="placeholder"
			[autocomplete]="autocomplete"
			[disabled]="disabled"
			[size]="size"
			(valueChange)="valueChange($event)"
			(clear)="clear()">
		</ibm-search>
	`
});
export const Basic = Template.bind({});
