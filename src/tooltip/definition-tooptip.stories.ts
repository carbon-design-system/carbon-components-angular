/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
import { TooltipModule, TooltipDefinition } from "./";

export default {
	title: "Components/Definition Tooltip",
	decorators: [
		moduleMetadata({
			imports: [TooltipModule]
		})
	],
	parameters: {
		docs: {
			story: {
				inline: false,
				iframeHeight: "18rem"
			}
		}
	},
	args: {
		isOpen: true,
		caret: true,
		description: "Uniform Resource Locator; the address of a resource (such as a document or website) on the Internet.",
		align: "bottom",
		autoAlign: false,
		openOnHover: true
	},
	argTypes: {
		autoAlign: {
			control: false
		},
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
			control: "select"
		}
	},
	component: TooltipDefinition
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<div style="height:3000px">
			Scrolling will update the position of the popover:
			<div style="position: absolute; top: 500px; left: 500px;">
				<p>Custom domains direct requests for your apps in this Cloud Foundry organization to a
				<cds-tooltip-definition
					[isOpen]="isOpen"
					[openOnHover]="openOnHover"
					[caret]="caret"
					[align]="align"
					(onOpen)="onOpen($event)"
					(onClose)="onClose($event)"
					(isOpenChange)="isOpenChange($event)"
					[description]="description">
					URL
				</cds-tooltip-definition>
				that you own. A custom domain can be a shared domain, a shared subdomain, or a shared domain and host.</p>
			</div>
		</div>
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

const AutoAlignTemplate = (args) => ({
	props: args,
	template: `
		<div style="height:3000px">
			Scrolling will update the position of the popover:
			<div style="position: absolute; top: 500px; left: 500px;">
				<p>Custom domains direct requests for your apps in this Cloud Foundry organization to a
				<cds-tooltip-definition
					[isOpen]="isOpen"
					[openOnHover]="openOnHover"
					[caret]="caret"
					[align]="align"
					[autoAlign]="true"
					(onOpen)="onOpen($event)"
					(onClose)="onClose($event)"
					(isOpenChange)="isOpenChange($event)"
					[description]="description">
					URL
				</cds-tooltip-definition>
				that you own. A custom domain can be a shared domain, a shared subdomain, or a shared domain and host.</p>
			</div>
		</div>
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
export const WithAutoAlign = AutoAlignTemplate.bind({});
WithAutoAlign.args = {
	autoAlign: true,
	align: "top"
};
