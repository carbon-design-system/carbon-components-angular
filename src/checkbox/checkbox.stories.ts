import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/angular";

import { CheckboxModule, DocumentationModule } from "../";

storiesOf("Checkbox", module).addDecorator(
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
	.add("Skeleton", () => ({
		template: `<ibm-checkbox skeleton="true"></ibm-checkbox>`
}))
.add("Documentation", () => ({
	template: `
		<ibm-documentation src="documentation/components/Checkbox.html"></ibm-documentation>
	`
}));
