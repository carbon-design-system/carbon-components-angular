import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { CheckboxModule } from "../";
import { DocumentationModule } from "./../documentation-component/documentation.module";

storiesOf("Checkbox", module).addDecorator(
	moduleMetadata({
		imports: [CheckboxModule, DocumentationModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<fieldset class="bx--fieldset">
			<legend class="bx--label">Checkbox</legend>
			<ibm-checkbox
				checked="true"
				(change)="onChange($event)">
				Checkbox
			</ibm-checkbox>
			<ibm-checkbox
				indeterminate="true"
				(change)="onChange($event)"
				(indeterminateChange)="onIndeterminateChange($event)">
				Indeterminate checkbox
			</ibm-checkbox>
			<ibm-checkbox
				disabled="true"
				(change)="onChange($event)"
				(indeterminateChange)="onIndeterminateChange($event)">
				Disabled checkbox
			</ibm-checkbox>
		</fieldset>
	`,
		props: {
			onChange: action("Change fired!"),
			onIndeterminateChange: action("Indeterminate change fired!")
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
