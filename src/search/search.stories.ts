/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
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
		skeleton: false,
		size: "md",
		theme: "dark",
		autocomplete: "on"
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg"],
			control: "radio"
		},
		theme: {
			options: ["light", "dark"],
			control: "radio"
		},
		autocomplete: {
			options: ["on", "off"],
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

const Template = (args) => ({
	props: args,
	template: `
		<cds-search
			[theme]="theme"
			[placeholder]="placeholder"
			[autocomplete]="autocomplete"
			[disabled]="disabled"
			[size]="size"
			(valueChange)="valueChange($event)"
			(clear)="clear()">
		</cds-search>
	`
});
export const Basic = Template.bind({});
