import { moduleMetadata, Meta } from "@storybook/angular";
import { ComboButtonModule, ComboButtonComponent } from "./";

import { IconModule } from "../icon";
import { ContextMenuModule } from "../context-menu";

export default {
	title: "Components/Combo button",
	decorators: [
		moduleMetadata({
			imports: [
				ComboButtonModule,
				IconModule,
				ContextMenuModule
			]
		})
	],
	argTypes: {
		onClick: { action: "clicked" }
	},
	component: ComboButtonComponent
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-combo-button
			[size]="size"
			[menuAlignment]="menuAlignment"
			[label]="label"
			[description]="description"
			[tooltipAutoAlign]="tooltipAutoAlign"
			[tooltipPlacement]="tooltipPlacement">
			<cds-menu-item label="First action with a long label description"></cds-menu-item>
			<cds-menu-item label="Second action" (click)="onClick($event)"></cds-menu-item>
			<cds-menu-item label="Third action" [disabled]="true"></cds-menu-item>
			<cds-menu-divider></cds-menu-divider>
			<cds-menu-item label="Cut" info="⌘X"></cds-menu-item>
			<cds-menu-item label="Option with icon" icon="calendar"></cds-menu-item>
			<cds-menu-divider></cds-menu-divider>
			<cds-menu-item label="Danger action" [danger]="true"></cds-menu-item>
		</cds-combo-button>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	size: "lg",
	menuAlignment: "bottom",
	label: "Combo button",
	description: "Additional actions",
	tooltipAutoAlign: true,
	tooltipPlacement: "right"
};
