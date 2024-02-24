/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
import { TooltipModule, Tooltip } from "./";

export default {
	title: "Components/Tooltip",
	decorators: [
		moduleMetadata({
			imports: [TooltipModule]
		})
	],
	args: {
		isOpen: true,
		caret: true,
		description: "Occassionally, services are updated in a specified time window to ensure no down time for customers.",
		align: "bottom",
		autoAlign: false
	},
	argTypes: {
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
				"top-start",
				"top-end",
				"right",
				"right-start",
				"right-end",
				"bottom",
				"bottom-start",
				"bottom-end",
				"left",
				"left-start",
				"left-end"
			],
			control: "select"
		}
	},
	parameters: {
		docs: {
			story: {
				inline: false,
				iframeHeight: "18rem"
			}
		},
		layout: "centered"
	},
	component: Tooltip
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-tooltip
			[isOpen]="isOpen"
			[caret]="caret"
			[align]="align"
			[autoAlign]="autoAlign"
			(onOpen)="onOpen($event)"
			(onClose)="onClose($event)"
			(isOpenChange)="isOpenChange($event)"
			[description]="description">
			<button type="button" class="tooltip-trigger">
				<svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
					<path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path>
				</svg>
			</button>
		</cds-tooltip>
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

const EllipsesTemplate = (args) => ({
	props: args,
	template: `
		<cds-tooltip
			[isOpen]="isOpen"
			[caret]="caret"
			[align]="align"
			[autoAlign]="autoAlign"
			description="Tooltip for ellipsis because I can and I am really really long">
			<span class="overflowText">
				Tooltip for ellipsis because I can and I am really really long
			</span>
		</cds-tooltip>
	`,
	styles: [`
		.overflowText {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			width: 100px;
			display: inline-block;
		}
	`]
});
export const Ellipses = EllipsesTemplate.bind({});
Ellipses.argTypes = {
	description: {
		control: false
	}
};
