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
			<button cdsButton="secondary" [size]="size" [isExpressive]="isExpressive">Button</button>
			<button cdsButton [size]="size" [isExpressive]="isExpressive">Button</button>
		</cds-button-set>
	`
});
export const Basic = Template.bind({});
