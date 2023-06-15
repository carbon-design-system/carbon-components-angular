/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { TooltipModule, TooltipDefinition } from "./";

export default {
	title: "Components/Definition Tooltip",
	decorators: [
		moduleMetadata({
			imports: [TooltipModule]
		})
	],
	parameters: {
		layout: "centered"
	},
	component: TooltipDefinition
} as Meta;

const Template: Story<TooltipDefinition> = (args) => ({
	props: args,
	template: `
		<p>Custom domains direct requests for your apps in this Cloud Foundry organization to a
		<cds-tooltip-definition
			[isOpen]="isOpen"
			[caret]="caret"
			[align]="align"
			(onOpen)="onOpen($event)"
			(onClose)="onClose($event)"
			(isOpenChange)="isOpenChange($event)"
			[description]="description">
			URL
		</cds-tooltip-definition>
		that you own. A custom domain can be a shared domain, a shared subdomain, or a shared domain and host.</p>
	`,
	styles: [`
		.tooltip-trigger {
			box-sizing: border-box;
			margin: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 2rem;
			height: 2rem;
			background: white;
			border: 1px solid var(--cds-border-subtle);
			cursor: pointer;
		}
		svg { fill: var(--cds-background-inverse); }
	`]
});
export const Basic = Template.bind({});
Basic.args = {
	isOpen: true,
	caret: true,
	description: "Uniform Resource Locator; the address of a resource (such as a document or website) on the Internet."
};
Basic.argTypes = {
	onOpen: {
		control: "Opened!"
	},
	onClose: {
		control: "Closed!"
	},
	isOpenChange: {
		control: "Is Open Change!"
	},
	align: {
		options: [
			"top",
			"top-left",
			"top-right",
			"bottom",
			"bottom-left",
			"bottom-right"
		],
		defaultValue: "bottom",
		control: "select"
	}
};
