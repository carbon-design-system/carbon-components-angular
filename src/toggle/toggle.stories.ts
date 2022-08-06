/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { ToggleModule, Toggle } from "./";

export default {
	title: "Components/Toggle",
	decorators: [
		moduleMetadata({
			imports: [
				ToggleModule,
				DocumentationModule
			]
		})
	],
	component: Toggle
} as Meta;

const Template: Story<Toggle> = (args) => ({
	props: args,
	template: `
		<ibm-toggle
			[label]="label"
			[hideLabel]="hideLabel"
			[onText]="onText"
			[offText]="offText"
			[disabled]="disabled"
			[checked]="checked"
			(checkedChange)="onChange($event)"
			[size]="size">
		</ibm-toggle>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	disabled: false,
	checked: false,
	hideLabel: false,
	label: "Toggle element label",
	onText: "On",
	offText: "Off"
};
Basic.argTypes = {
	onChange: {
		control: "Toggled!"
	},
	size: {
		options: ["sm", "md"],
		defaultValue: "md",
		control: "radio"
	}
};

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_toggle.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
