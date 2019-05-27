import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select } from "@storybook/addon-knobs/angular";

import { RadioModule, DocumentationModule } from "../";

storiesOf("Radio", module).addDecorator(
	moduleMetadata({
		imports: [RadioModule, DocumentationModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
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
		`,
		props: {
			onChange: action("Radio change"),
			manyRadios: [
				{ num: "one" },
				{ num: "two" },
				{ num: "three" },
				{ num: "four", disabled: true }
			]
		}
	}))
	.add("Vertical", () => ({
		template: `
		<fieldset class="bx--fieldset">
			<legend class="bx--label">Radio button label</legend>

			<ibm-radio-group aria-label="radiogroup" orientation="vertical" [placement]="placement" [(ngModel)]="radio" (change)="onChange($event)">
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
			placement: select("Label placement", ["right", "left"], "right"),
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
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/RadioGroup.html"></ibm-documentation>
		`
	}));
