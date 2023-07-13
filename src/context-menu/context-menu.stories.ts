/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import {
	ContextMenuModule,
	ContextMenuComponent,
	ContextMenuDividerComponent,
	ContextMenuItemComponent,
	ContextMenuGroupComponent
} from "./";

export default {
	title: "Components/Context Menu",
	decorators: [
		moduleMetadata({
			imports: [ContextMenuModule]
		})
	],
	args: {
		position: {
			top: 0,
			left: 0
		},
		open: true,
		checkboxGroupValue: ["a", "b"],
		radioGroupValue: "one"
	},
	argTypes: {
		onRadioChange: { action: "Radio menu change!" },
		onCheckboxChange: { action: "Radio menu change!" }
	},
	component: ContextMenuComponent,
	subcomponents: {
		ContextMenuDividerComponent,
		ContextMenuItemComponent,
		ContextMenuGroupComponent
	}
} as Meta;

const Template: Story<ContextMenuComponent> = (args) => ({
	props: args,
	template: `
		<cds-context-menu [open]="open" [position]="position">
			<cds-context-menu-item label="Cut" info="⌘X"></cds-context-menu-item>
			<cds-context-menu-item label="Option with icon" icon="calendar"></cds-context-menu-item>
			<cds-context-menu-divider></cds-context-menu-divider>
			<cds-context-menu-item type="checkbox" label="Enable magic"></cds-context-menu-item>
			<cds-context-menu-divider></cds-context-menu-divider>
			<cds-context-menu-group label="Selection group">
				<cds-context-menu-item type="checkbox" label="Blue"></cds-context-menu-item>
				<cds-context-menu-item type="checkbox" label="Red" [checked]="true"></cds-context-menu-item>
				<cds-context-menu-item type="checkbox" label="Black"></cds-context-menu-item>
				<cds-context-menu-item type="checkbox" label="Green"></cds-context-menu-item>
			</cds-context-menu-group>
			<cds-context-menu-divider></cds-context-menu-divider>
			<cds-context-menu-item label="Radio flyout">
				<cds-context-menu>
					<cds-context-menu-group
						type="radio"
						[value]="radioGroupValue"
						(valueChange)="onRadioChange($event)">
						<cds-context-menu-item type="radio" label="Radio one" value="one"></cds-context-menu-item>
						<cds-context-menu-item type="radio" label="Radio two" value="two"></cds-context-menu-item>
						<cds-context-menu-item type="radio" label="Radio three" value="three"></cds-context-menu-item>
						<cds-context-menu-item type="radio" label="Radio four" value="four"></cds-context-menu-item>
					</cds-context-menu-group>
				</cds-context-menu>
			</cds-context-menu-item>
			<cds-context-menu-item label="Checkbox flyout">
				<cds-context-menu>
					<cds-context-menu-group
						type="checkbox"
						[value]="checkboxGroupValue"
						(valueChange)="onCheckboxChange($event)">
						<cds-context-menu-item type="checkbox" label="Selectable item a" value="a"></cds-context-menu-item>
						<cds-context-menu-item type="checkbox" label="Selectable item b" value="b"></cds-context-menu-item>
						<cds-context-menu-item type="checkbox" label="Selectable item c" value="c"></cds-context-menu-item>
						<cds-context-menu-item type="checkbox" label="Selectable item d" value="d"></cds-context-menu-item>
					</cds-context-menu-group>
				</cds-context-menu>
			</cds-context-menu-item>
		</cds-context-menu>
	`
});
export const Basic = Template.bind({});
