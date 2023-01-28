import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, array, text, object, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { ContextMenuModule } from "./context-menu.module";

storiesOf("Components|Context Menu", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				ContextMenuModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
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
		`,
		props: {
			onRadioChange: action("Radio menu change"),
			onCheckboxChange: action("Checkbox menu change"),
			checkboxGroupValue: array("checkbox group value", ["a", "d"]),
			radioGroupValue: text("radio group value", "one"),
			position: object("Context menu position", { top: 0, left: 0 }),
			open: boolean("Is the context menu open", true)
		}
	}));
