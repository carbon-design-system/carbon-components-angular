import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs/angular";

import { ComboBoxModule } from "./combobox.module";
import { DocumentationModule } from "./../documentation-component/documentation.module";

const getOptions = (override = {}) => {
	const options = {
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
		selected: action("selection changed"),
		submit: action("submit")
	};

	return Object.assign({}, options, override);
};

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
				(selected)="selected($event)"
				(submit)="submit($event)">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
		`,
		props: getOptions()
	}))
	.add("Basic with max length", () => ({
		template: `
			<ibm-combo-box
				[disabled]="disabled"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[label]="label"
				[helperText]="helperText"
				[items]="items"
				(selected)="selected($event)"
				(submit)="submit($event)"
				[maxLength]="maxLength">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
		`,
		props: {
			...getOptions(),
			maxLength: number("Max length", 5)
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
				const selected = this.items.find(
					({ content }) => content.toLowerCase().includes(event.toLowerCase())
				);

				if (!selected) {
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
				(selected)="onSelected()"
				(search)="onSearch($event)">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>

			<ng-template #invalidText>
				<div class="bx--form-requirement">This is a template</div>
			</ng-template>
		`,
		props: getOptions({
			onSelected: function() {
				this.invalid = false;
			},
			onSearch: function(event) {
				const selected = this.items.find(
					({ content }) => content.toLowerCase().includes(event.toLowerCase())
				);

				if (!selected) {
					this.invalid = true;
				} else {
					this.invalid = false;
				}
			}
		})
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
				(selected)="selected($event)"
				(submit)="submit($event)">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
		`,
		props: getOptions()
	}))
	.add("With submit", () => ({
		template: `
			<ibm-combo-box
				[invalid]="invalid"
				[invalidText]="invalidText"
				[label]="label"
				[helperText]="helperText"
				[items]="items"
				type="multi"
				(selected)="selected($event)"
				(submit)="submit($event)">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
		`,
		props: getOptions({
			submit: function(event) {
				// so the action still shows up in the "actions" panel
				action("submit")(event);
				if (event.value.content) {
					this.items = [
						...event.items,
						Object.assign({}, event.value, { selected: true })
					];
				}
			}
		})
	}))
	.add("With ngModel", () => ({
		template: `
			<ibm-combo-box
				[invalid]="invalid"
				[invalidText]="invalidText"
				[label]="label"
				[helperText]="helperText"
				[items]="items"
				[(ngModel)]="model"
				(selected)="selected($event)"
				(submit)="submit($event)">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>

			<p>model: {{model | json}}</p>
		`,
		props: getOptions({
			model:  { "content": "three", "selected": true }
		})
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/ComboBox.html"></ibm-documentation>
		`
	}));
