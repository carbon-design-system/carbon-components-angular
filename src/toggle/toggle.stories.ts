import { moduleMetadata, Meta } from "@storybook/angular";


import { Toggle } from "./";

export default {
	title: "Components/Toggle",
	decorators: [
		moduleMetadata({
			imports: [Toggle]
		})
	],
	component: Toggle
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-toggle
			[skeleton]="skeleton"
			[label]="label"
			[hideLabel]="hideLabel"
			[onText]="onText"
			[offText]="offText"
			[disabled]="disabled"
			[checked]="checked"
			(checkedChange)="onChange($event)"
			[size]="size">
		</cds-toggle>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	disabled: false,
	checked: false,
	hideLabel: false,
	label: "Toggle element label",
	onText: "On",
	offText: "Off",
	skeleton: false,
	size: "md"
};
Basic.argTypes = {
	onChange: {
		control: "Toggled!"
	},
	size: {
		options: ["sm", "md"],
		control: "radio"
	}
};
