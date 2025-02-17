import { moduleMetadata, Meta } from "@storybook/angular";
import { LinkModule } from "../link";
import { ButtonModule } from "../button";
import {
	ToggletipModule,
	Toggletip,
	ToggletipAction,
	ToggletipButton,
	ToggletipContent,
	ToggletipLabel
} from "./";

export default {
	title: "Components/Toggletip",
	decorators: [
		moduleMetadata({
			imports: [
				ToggletipModule,
				LinkModule,
				ButtonModule
			]
		})
	],
	args: {
		isOpen: true,
		align: "bottom",
		autoAlign: false
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
				"bottom",
				"left",
				"right"
			],
			control: "select"
		}
	},
	component: Toggletip,
	subcomponents: {
		ToggletipAction,
		ToggletipButton,
		ToggletipContent,
		ToggletipLabel
	}
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<span cdsToggletipLabel>Toggletip label</span>
		<cds-toggletip
			[isOpen]="isOpen"
			[align]="align"
			(isOpenChange)="isOpenChange($event)"
			(onClose)="onClose($event)"
			(onOpen)="onOpen($event)">
			<button cdsToggletipButton>
				<svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
					<path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path>
				</svg>
			</button>
			<div cdsToggletipContent>
				<p>
					Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
				</p>
				<div cdsToggletipAction>
					<a href="#" cdsLink>Link action</a>
					<button cdsButton size="sm">Some button</button>
				</div>
			</div>
		</cds-toggletip>
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
Basic.parameters = {
	docs: {
		story: {
			inline: false,
			height: "30rem"
		}
	},
	layout: "centered"
};

const AutoAlignTemplate = (args) => ({
	props: args,
	template:
		/* eslint-disable max-len */
		`<div style="height:3000px">
			Scrolling will update the position of the popover:
			<div style="position: absolute; top: 500px; left: 500px;">
			<span cdsToggletipLabel>Toggletip label</span>
				<cds-toggletip
					[isOpen]="isOpen"
					[align]="align"
					[autoAlign]="true"
					(isOpenChange)="isOpenChange($event)"
					(onClose)="onClose($event)"
					(onOpen)="onOpen($event)">
					<button cdsToggletipButton>
						<svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
							<path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path>
						</svg>
					</button>
					<div cdsToggletipContent>
						<p>
							Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
						</p>
						<div cdsToggletipAction>
							<a href="#" cdsLink>Link action</a>
							<button cdsButton size="sm">Some button</button>
						</div>
					</div>
				</cds-toggletip>
			</div>
		</div>`
		/* eslint-disable max-len */
	,
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
