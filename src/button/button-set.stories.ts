import { moduleMetadata, Meta } from "@storybook/angular";
import { IconDirective } from "../icon";
import { Button, ButtonSet } from "./";

export default {
	title: "Components/Button/Button Set",
	decorators: [
		moduleMetadata({
			imports: [
				Button,
				IconDirective
			]
		})
	],
	parameters: {
		layout: "centered"
	},
	component: ButtonSet
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-button-set>
			<button cdsButton="secondary">Button</button>
			<button cdsButton>Button</button>
		</cds-button-set>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	fluid: false,
	stacked: false
};

const FluidTemplate = (args) => ({
	props: args,
	template: `
		<cds-button-set [fluid]="fluid" [stacked]="stacked" style="width: 800px;">
			<button cdsButton="ghost" [size]="size">Cancel</button>
			<button cdsButton="secondary" [size]="size">Button</button>
			<button cdsButton>Button</button>
		</cds-button-set>
	`
});
export const Fluid = FluidTemplate.bind({});
Fluid.args = {
	fluid: true,
	stacked: false
};
