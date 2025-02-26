/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
import { MenuButtonModule, MenuButtonComponent } from "./";

import { IconModule } from "../icon";
import { ContextMenuModule } from "../context-menu";

export default {
	title: "Components/Menu button",
	decorators: [
		moduleMetadata({
			imports: [
				MenuButtonModule,
				IconModule,
				ContextMenuModule
			]
		})
	],
	argTypes: {
		onClick: { action: "clicked" }
	},
	component: MenuButtonComponent
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-menu-button
			[kind]="kind"
			[size]="size"
			[menuAlignment]="menuAlignment"
			[label]="label">
			<cds-menu-item label="First action with a long label description"></cds-menu-item>
			<cds-menu-item label="Second action" (click)="onClick($event)"></cds-menu-item>
			<cds-menu-item label="Third action" [disabled]="true"></cds-menu-item>
			<cds-menu-divider></cds-menu-divider>
			<cds-menu-item label="Cut" info="⌘X"></cds-menu-item>
			<cds-menu-item label="Option with icon" icon="calendar"></cds-menu-item>
			<cds-menu-divider></cds-menu-divider>
			<cds-menu-item label="Danger action" [danger]="true"></cds-menu-item>
		</cds-menu-button>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	kind: "primary",
	size: "lg",
	menuAlignment: "bottom",
	label: "Menu button"
};
