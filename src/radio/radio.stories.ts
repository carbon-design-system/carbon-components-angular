import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { RadioModule } from "../";
import { DocumentationModule } from "./../documentation-component/documentation.module";

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
	.add("Skeleton", () => ({
		template: `
		<ibm-radio-group skeleton="true">
			<ibm-radio></ibm-radio>
		</ibm-radio-group>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Radio.html"></ibm-documentation>
		`
	}));
