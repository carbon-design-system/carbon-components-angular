/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { DialogModule, OverflowMenu } from "../";
import { PlaceholderModule } from "../../placeholder";
import { IconModule } from "../../icon";
import { CheckboxModule } from "../../checkbox";


export default {
	title: "Components/Overflow Menu",
	decorators: [
		moduleMetadata({
			imports: [
				DialogModule,
				PlaceholderModule,
				IconModule,
				CheckboxModule
			]
		})
	],
	args: {
			placement: "bottom"
	},
	argTypes: {
		code: {
			control: false
		}
	},
	component: OverflowMenu
} as Meta;

const Template: Story<OverflowMenu> = (args) => ({
	props: args,
	template: `
		<cds-overflow-menu
			[placement]="placement"
			[open]="open"
			[flip]="flip"
			[offset]="offset">
			<cds-overflow-menu-option (selected)="selected($event)" (click)="click($event)">
				An example option that is really long to show what should be done to handle long text
			</cds-overflow-menu-option>
			<cds-overflow-menu-option (selected)="selected($event)" innerClass="a-custom-class">Option 2</cds-overflow-menu-option>
			<li class="cds--overflow-menu-options__option">
				<button class="cds--overflow-menu-options__btn">A fully custom option</button>
			</li>
			<cds-overflow-menu-option (selected)="selected($event)">Option 4</cds-overflow-menu-option>
			<cds-overflow-menu-option disabled="true" (selected)="selected($event)" [divider]="true">Disabled</cds-overflow-menu-option>
			<cds-overflow-menu-option type="danger" (selected)="selected($event)">Danger option</cds-overflow-menu-option>
		</cds-overflow-menu>
		<cds-placeholder></cds-placeholder>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	open: false,
	flip: false,
	offset: {
		x: 0,
		y: 0
	}
};
Basic.argTypes = {
	click: {
		type: "function",
		defaultValue: () => { console.log("clicked!"); },
		control: false
	},
	selected: {
		type: "function",
		defaultValue: () => { console.log("selected!"); },
		control: false
	}
};
Basic.parameters = {
	layout: "centered"
};

const LinkTemplate: Story<OverflowMenu> = (args) => ({
	props: args,
	template: `
		<div>
			<h1 style="margin-bottom: 1rem">Bottom placement</h1>
			<cds-overflow-menu
				[flip]="flip"
				[offset]="offset">
				<cds-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)" (click)="click($event)">
					An example option that is really long to show what should be done to handle long text
				</cds-overflow-menu-option>
				<cds-overflow-menu-option href="https://www.ibm.com" target="_blank" (selected)="selected($event)">Option 2</cds-overflow-menu-option>
				<cds-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)">Option 3</cds-overflow-menu-option>
				<cds-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)">Option 4</cds-overflow-menu-option>
				<cds-overflow-menu-option href="https://www.ibm.com" disabled="true" (selected)="selected($event)">Disabled</cds-overflow-menu-option>
				<cds-overflow-menu-option href="https://www.ibm.com" type="danger" (selected)="selected($event)">
					Danger option
				</cds-overflow-menu-option>
			</cds-overflow-menu>
		</div>
		<cds-placeholder></cds-placeholder>
	`
});
export const WithLink = LinkTemplate.bind({});
WithLink.args = {
	flip: false,
	offset: {
		x: 0,
		y: 0
	}
};
WithLink.argTypes = {
	click: {
		type: "function",
		defaultValue: () => { console.log("clicked!"); },
		control: false
	},
	selected: {
		type: "function",
		defaultValue: () => { console.log("selected!"); },
		control: false
	}
};

const CustomTemplate: Story<OverflowMenu> = (args) => ({
	props: args,
	template: `
		<p style="padding-bottom: 1rem;">
		When writing a custom template to be inserted into an overflow menu
		it becomes your responsibility to make sure tab order/keyboard nav is implemented correctly
		</p>
		<button
			style="border: none; width: 3rem; height: 3rem; background-color: lightgrey;
			display: flex; align-items: center; justify-content: center;"
			[cdsOverflowMenu]="templateRef"
			[customPane]="true"
			placement="bottom"
			[offset]="{ x: -8, y: 0 }">
			<svg cdsIcon="settings" size="16"></svg>
		</button>
		<ng-template #templateRef>
			<div style="padding: 0 1rem;">
				<div style="padding-top: 0.5rem; color: grey;">Columns</div>
				<div><cds-checkbox [checked]="true">Status</cds-checkbox></div>
				<div><cds-checkbox>Last modified</cds-checkbox></div>
			</div>
		</ng-template>
	`
});
export const Custom = CustomTemplate.bind({});
Custom.storyName = "Custom Template";

const CustomTriggerTemplate: Story<OverflowMenu> = (args) => ({
	props: args,
	template: `
		<span>Overflow menu with custom trigger icon</span>
		<cds-overflow-menu
			[flip]="flip"
			[open]="open"
			[customTrigger]="customTrigger"
			[placement]="placement"
			[offset]="offset">
			<cds-overflow-menu-option (selected)="selected($event)" (click)="click($event)">Option 1</cds-overflow-menu-option>
			<cds-overflow-menu-option (selected)="selected($event)">Option 2</cds-overflow-menu-option>
			<cds-overflow-menu-option disabled="true" (selected)="selected($event)">Disabled</cds-overflow-menu-option>
			<cds-overflow-menu-option type="danger" (selected)="selected($event)">Danger option</cds-overflow-menu-option>
		</cds-overflow-menu>
		<cds-placeholder></cds-placeholder>
		<ng-template #customTrigger><svg cdsIcon="document" size="16"></svg></ng-template>
	`
});
export const CustomTrigger = CustomTriggerTemplate.bind({});
CustomTrigger.storyName = "With custom trigger";
