/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { ContextMenuModule, ContextMenuComponent } from "./";

export default {
	title: "Components/Context Menu",
	decorators: [
		moduleMetadata({
			imports: [ContextMenuModule, DocumentationModule]
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
	}
} as Meta;

const Template: Story<ContextMenuComponent> = (args) => ({
	props: args,
	template: `
		<ibm-context-menu [open]="open" [position]="position">
			<ibm-context-menu-item label="Cut" info="⌘X"></ibm-context-menu-item>
			<ibm-context-menu-item label="Option with icon" icon="calendar"></ibm-context-menu-item>
			<ibm-context-menu-divider></ibm-context-menu-divider>
			<ibm-context-menu-item type="checkbox" label="Enable magic"></ibm-context-menu-item>
			<ibm-context-menu-divider></ibm-context-menu-divider>
			<ibm-context-menu-group label="Selection group">
				<ibm-context-menu-item type="checkbox" label="Blue"></ibm-context-menu-item>
				<ibm-context-menu-item type="checkbox" label="Red" [checked]="true"></ibm-context-menu-item>
				<ibm-context-menu-item type="checkbox" label="Black"></ibm-context-menu-item>
				<ibm-context-menu-item type="checkbox" label="Green"></ibm-context-menu-item>
			</ibm-context-menu-group>
			<ibm-context-menu-divider></ibm-context-menu-divider>
			<ibm-context-menu-item label="Radio flyout">
				<ibm-context-menu>
					<ibm-context-menu-group
						type="radio"
						[value]="radioGroupValue"
						(valueChange)="onRadioChange($event)">
						<ibm-context-menu-item type="radio" label="Radio one" value="one"></ibm-context-menu-item>
						<ibm-context-menu-item type="radio" label="Radio two" value="two"></ibm-context-menu-item>
						<ibm-context-menu-item type="radio" label="Radio three" value="three"></ibm-context-menu-item>
						<ibm-context-menu-item type="radio" label="Radio four" value="four"></ibm-context-menu-item>
					</ibm-context-menu-group>
				</ibm-context-menu>
			</ibm-context-menu-item>
			<ibm-context-menu-item label="Checkbox flyout">
				<ibm-context-menu>
					<ibm-context-menu-group
						type="checkbox"
						[value]="checkboxGroupValue"
						(valueChange)="onCheckboxChange($event)">
						<ibm-context-menu-item type="checkbox" label="Selectable item a" value="a"></ibm-context-menu-item>
						<ibm-context-menu-item type="checkbox" label="Selectable item b" value="b"></ibm-context-menu-item>
						<ibm-context-menu-item type="checkbox" label="Selectable item c" value="c"></ibm-context-menu-item>
						<ibm-context-menu-item type="checkbox" label="Selectable item d" value="d"></ibm-context-menu-item>
					</ibm-context-menu-group>
				</ibm-context-menu>
			</ibm-context-menu-item>
		</ibm-context-menu>
	`
});
export const Basic = Template.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_context_menu.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
