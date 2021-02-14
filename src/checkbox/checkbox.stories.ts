import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/angular";

import { CheckboxModule } from "../";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Checkbox", module).addDecorator(
	moduleMetadata({
		imports: [CheckboxModule, DocumentationModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<fieldset class="bx--fieldset">
			<legend class="bx--label">{{label}}</legend>
			<ibm-checkbox
				checked="true"
				[hideLabel]="hideLabel"
				(change)="onChange($event)">
				Checkbox
			</ibm-checkbox>
			<ibm-checkbox
				indeterminate="true"
				(change)="onChange($event)"
				[hideLabel]="hideLabel"
				(indeterminateChange)="onIndeterminateChange($event)">
				Indeterminate checkbox
			</ibm-checkbox>
			<ibm-checkbox
				disabled="true"
				(change)="onChange($event)"
				[hideLabel]="hideLabel"
				(indeterminateChange)="onIndeterminateChange($event)">
				Disabled checkbox
			</ibm-checkbox>
		</fieldset>
	`,
		props: {
			onChange: action("Change fired!"),
			onIndeterminateChange: action("Indeterminate change fired!"),
			label: text("Label text", "Checkbox"),
			hideLabel: boolean("Hide labels", false)
		}
	}))
	.add("Programmatically", () => ({
		template: `
			<ibm-checkbox
				[indeterminate]="indeterminate"
				[checked]="checked"
				(checkedChange)="onChange($event)"
				(indterminateChange)="onIndeterminateChange($event)">
				Programmatic checkbox
			</ibm-checkbox>

			<button (click)="toggle()">Toggle</button>
			<button (click)="setIndeterminate()">Set indeterminate</button>
		`,
		props: {
			indeterminate: false,
			checked: false,
			toggle: function() {
				this.checked = !this.checked;
			},
			setIndeterminate: function() {
				this.indeterminate = !this.indeterminate;
			},
			onChange: function(checkboxChange: boolean) {
				this.checked = checkboxChange;
			},
			onIndeterminateChange: function(indterminateChange: boolean) {
				this.indeterminate = indterminateChange;
			}
		}
	}))
	.add("With ngModel", () => ({
		template: `
			<ibm-checkbox
				[(ngModel)]="model">
				ngModel checkbox
			</ibm-checkbox>

			<div style="display:flex; flex-direction: column; width: 150px">
				<button (click)="toggleModel()">Set model</button>
				Checked: {{ model }}
			</div>
		`,
		props: {
			model: true,
			toggleModel: function() {
				this.model = !this.model;
			}
		}
	}))
	.add("Skeleton", () => ({
		template: `<ibm-checkbox skeleton="true"></ibm-checkbox>`
}))
.add("Documentation", () => ({
	template: `
		<ibm-documentation src="documentation/classes/src_checkbox.checkbox.html"></ibm-documentation>
	`
}));
