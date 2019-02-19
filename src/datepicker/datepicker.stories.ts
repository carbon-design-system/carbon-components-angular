import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, array } from "@storybook/addon-knobs/angular";
import { DatePickerModule, ExperimentalModule } from "../";
import { ExperimentalComponenent } from "../../.storybook/experimental.component";

storiesOf("Date Picker", module)
	.addDecorator(
		moduleMetadata({
			declarations: [ExperimentalComponenent],
			imports: [
				DatePickerModule,
				ExperimentalModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Single", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<ibm-date-picker
			label="Date Picker Label"
			[value]="value"
			(valueChange)="valueChange($event)">
		</ibm-date-picker>
		`,
		props: {
			value: array("value", ["01/01/2011"]),
			valueChange: action("Date change fired!")
		}
	}))
	.add("Range", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<ibm-date-picker
			label="Date Picker Label"
			rangeLabel="Date Picker Label2"
			range="true"
			[value]="value"
			(valueChange)="valueChange($event)">
		</ibm-date-picker>
		`,
		props: {
			value: array("value", [
				"01/01/2011",
				"01/01/2012"
			]),
			valueChange: action("Date change fired!")
		}
	}));
