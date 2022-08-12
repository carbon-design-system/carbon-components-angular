/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { IconModule } from "../icon";
import { ButtonModule, ButtonSet } from "./";

export default {
	title: "Components/Button/Button Set",
	decorators: [
		moduleMetadata({
			imports: [
				ButtonModule,
				IconModule
			]
		})
	],
	parameters: {
		layout: "centered"
	},
	component: ButtonSet
} as Meta;

const Template: Story<ButtonSet> = (args) => ({
	props: args,
	template: `
		<ibm-button-set>
			<button ibmButton="secondary" [size]="size" [isExpressive]="isExpressive">Button</button>
			<button [ibmButton]="ibmButton" [size]="size" [isExpressive]="isExpressive">Button</button>
		</ibm-button-set>
	`
});
export const Basic = Template.bind({});
