import { TimePickerSelectModule } from "./timepicker-select.module";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";
import { ExperimentalComponenent } from "../../.storybook/experimental.component";
import { ExperimentalModule } from "..";

storiesOf("Time Picker Select", module)
	.addDecorator(
		moduleMetadata({
			declarations: [ExperimentalComponenent],
			imports: [
				TimePickerSelectModule,
				ExperimentalModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Simple", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<ibm-date-picker-input label="Date Picker Label"></ibm-date-picker-input>
		`
	}));
