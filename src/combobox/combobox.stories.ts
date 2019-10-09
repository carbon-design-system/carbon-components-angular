import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs/angular";

import { ComboBoxModule } from "./combobox.module";
import { DocumentationModule } from "./../documentation-component/documentation.module";

storiesOf("Combobox", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				ComboBoxModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-combo-box
				[disabled]="disabled"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[label]="label"
				[helperText]="helperText"
				[items]="items"
				(selected)="selected($event)">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
		`,
		props: {
			disabled: boolean("disabled", false),
			invalid: boolean("Invalid", false),
			invalidText: text("Invalid Text", "A valid value is required"),
			label: text("Label", "ComboBox label"),
			helperText: text("Helper text", "Optional helper text."),
			items: [
				{
					content: "one"
				},
				{
					content: "two"
				},
				{
					content: "three"
				},
				{
					content: "four"
				}
			],
			selected: action("selection changed")
		}
	}))
	.add("Multi-select", () => ({
		template: `
			<ibm-combo-box
				[invalid]="invalid"
				[invalidText]="invalidText"
				[label]="label"
				[helperText]="helperText"
				[items]="items"
				type="multi"
				(selected)="selected($event)">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
		`,
		props: {
			invalid: boolean("Invalid", false),
			invalidText: text("Invalid Text", "A valid value is required"),
			label: text("Label", "ComboBox label"),
			helperText: text("Helper text", "Optional helper text."),
			items: [
				{
					content: "one"
				},
				{
					content: "two"
				},
				{
					content: "three"
				},
				{
					content: "four"
				}
			],
			selected: action("selection changed")
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/ComboBox.html"></ibm-documentation>
		`
	}));
