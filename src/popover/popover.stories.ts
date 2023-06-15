/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import {
	PopoverModule,
	PopoverContainer,
	PopoverContent
} from "./";

export default {
	title: "Components/Popover",
	decorators: [
		moduleMetadata({
			imports: [PopoverModule]
		})
	],
	parameters: {
		layout: "centered"
	},
	component: PopoverContainer,
	subcomponents: { PopoverContent }
} as Meta;

const Template: Story<PopoverContainer> = (args) => ({
	props: args,
	template: `
		<div
			cdsPopover
			[isOpen]="isOpen"
			[dropShadow]="dropShadow"
			[align]="align"
			[caret]="caret"
			[highContrast]="highContrast"
			(onOpen)="onOpen($event)"
			(onClose)="onClose($event)"
			(isOpenChange)="isOpenChange($event)">
			<div class="popover-trigger">
				<svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
					<path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path>
				</svg>
			</div>
			<cds-popover-content>
				<div style="padding: 1rem">
					<p class="popover-title">Available storage</p>
					<p class="popover-content">This server has 150GB of block storage remaining</p>
				</div>
			</cds-popover-content>
		</div>
	`,
	styles: [`
		.popover-trigger {
			box-sizing: border-box;
			margin: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 2rem;
			height: 2rem;
			background: white;
			border: 1px solid var(--cds-border-subtle);
		}
		svg { fill: var(--cds-background-inverse); }
		.popover-title {
			font-size: var(--cds-heading-compact-01-font-size);
			font-weight: var(--cds-heading-compact-01-font-weight);
			line-height: var(--cds-heading-compact-01-line-height);
			margin-bottom: 0.125rem;
		}
		.popover-content {
			font-size: var(--cds-body-compact-01-font-size);
			font-weight: var(--cds-body-compact-01-font-weight);
			line-height: var(--cds-body-compact-01-line-height);
			margin-bottom: 0.125rem;
		}
	`]
});
export const Basic = Template.bind({});
Basic.args = {
	isOpen: true,
	caret: true,
	dropShadow: true,
	highContrast: false
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
			"bottom-right",
			"left",
			"left-bottom",
			"left-top",
			"right",
			"right-bottom",
			"right-top"
		],
		defaultValue: "bottom",
		control: "select"
	}
};
