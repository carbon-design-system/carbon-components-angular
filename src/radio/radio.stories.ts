import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { RadioModule } from "../";

storiesOf("Radio", module).addDecorator(
	moduleMetadata({
		imports: [RadioModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<ibm-radio-group (change)="onChange($event)">
			<ibm-radio [disabled]="disableOne">one</ibm-radio>
			<ibm-radio>two</ibm-radio>
			<ibm-radio>three</ibm-radio>
			<ibm-radio>four</ibm-radio>
		</ibm-radio-group>
		`,
		props: {
			disableOne: boolean("disableOne", false),
			onChange: action("Radio changed!")
		}
	}));
