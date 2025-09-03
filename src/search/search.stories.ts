import { moduleMetadata, Meta } from "@storybook/angular";
import { Search } from "./";

export default {
	title: "Components/Search",
	decorators: [
		moduleMetadata({
			imports: [Search]
		})
	],
	args: {
		expandable: false,
		placeholder: "Search",
		disabled: false,
		skeleton: false,
		size: "md",
		theme: "dark",
		autocomplete: "on",
		fluid: false
	},
	argTypes: {
		expandable: {
			type: "boolean",
			defaultValue: false
		},
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
			(clear)="clear()"
			[fluid]="fluid"
			[skeleton]="skeleton"
			[expandable]="expandable">
		</cds-search>
	`
});
export const Basic = Template.bind({});

export const Fluid = Template.bind({});
Fluid.args = {
	fluid: true
};
