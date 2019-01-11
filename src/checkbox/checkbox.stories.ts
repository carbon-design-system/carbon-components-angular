import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { CheckboxModule } from "../";

storiesOf("Checkbox", module).addDecorator(
	moduleMetadata({
		imports: [CheckboxModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<ibm-checkbox
			[checked]="checked"
			[disabled]="disabled"
			[indeterminate]="indeterminate"
			(change)="onChange($event)"
			(indeterminateChange)="onIndeterminateChange($event)">
			Checkbox
		</ibm-checkbox>
	`,
		props: {
			checked: boolean("checked", false),
			disabled: boolean("disabled", false),
			indeterminate: boolean("indeterminate", false),
			onChange: action("Change fired!"),
			onIndeterminateChange: action("Indeterminate change fired!")
		}
	}))
	.add("Skeleton", () => ({
		template: `<ibm-checkbox skeleton="true"></ibm-checkbox>`
}));
