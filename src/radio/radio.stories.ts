import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs/angular";

import { RadioModule } from "../";

storiesOf("Radio", module).addDecorator(
	moduleMetadata({
		imports: [RadioModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<fieldset class="bx--fieldset">
			<legend class="bx--label">{{label}}</legend>
			<ibm-radio-group aria-label="radiogroup" [(ngModel)]="radio" (change)="onChange($event)">
				<ibm-radio
					value="radio"
					[checked]="true">
					zero
				</ibm-radio>
				<ibm-radio *ngFor="let radio of manyRadios"
					[value]="radio.num"
					[disabled]="radio.disabled">
					{{radio.num}}
				</ibm-radio>
			</ibm-radio-group>
		</fieldset>
		`,
		props: {
			onChange: action("Radio change"),
			label: text("Label text", "Radio Button heading"),
			manyRadios: [
				{ num: "one" },
				{ num: "two" },
				{ num: "three" },
				{ num: "four", disabled: true }
			]
		}
	}))
	.add("Skeleton", () => ({
		template: `
		<ibm-radio-group skeleton="true">
			<ibm-radio></ibm-radio>
		</ibm-radio-group>
		`
	}));
