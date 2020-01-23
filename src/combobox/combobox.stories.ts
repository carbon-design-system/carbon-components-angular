import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs/angular";

import { ComboBoxModule } from "./combobox.module";
import { DocumentationModule } from "./../documentation-component/documentation.module";

storiesOf("Components|Combobox", module)
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
			invalidText: text("Invalid text", "A valid value is required"),
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
	.add("With dynamic search", () => ({
		template: `
			<ibm-combo-box
				[disabled]="disabled"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[label]="label"
				[helperText]="helperText"
				[items]="items"
				(selected)="onSelected()"
				(search)="onSearch($event)">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
		`,
		props: {
			disabled: boolean("disabled", false),
			invalid: boolean("Invalid", false),
			invalidText: text("Invalid text", "A valid value is required"),
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
			onSelected: function() {
				this.invalid = false;
			},
			onSearch: function(event) {
				if (!this.items.filter(item => item.content.toLowerCase().includes(event.toLowerCase())).length) {
					this.invalid = true;
				} else {
					this.invalid = false;
				}
			}
		}
	}))
	.add("With template", () => ({
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

			<ng-template #invalidText>
				<div class="bx--form-requirement">This is a template</div>
			</ng-template>
		`,
		props: {
			disabled: boolean("disabled", false),
			invalid: boolean("Invalid", false),
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
			invalidText: text("Invalid text", "A valid value is required"),
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
