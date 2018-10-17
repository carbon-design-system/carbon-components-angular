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
		<ibm-radio-group aria-label="radiogroup" [(ngModel)]="radio">
			<ibm-radio *ngFor="let radio of manyRadios"
				[value]="radio.num"
				[disabled]="radio.disabled">{{radio.num}}
			</ibm-radio>
		</ibm-radio-group>
		`,
		props: {
			manyRadios: [
				{ num: "one",  disabled: false },
				{ num: "two" },
				{ num: "three" },
				{ num: "four" }
			]
		}
	}));
