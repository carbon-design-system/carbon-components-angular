import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, select, text, number } from "@storybook/addon-knobs/angular";

import { ProgressBarModule } from "./progress-bar.module";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Progress bar", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				ProgressBarModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-progress-bar
				[label]="label"
				[helperText]="helperText"
				[max]="max"
				[size]="size"
				[status]="status"
				[type]="type"
				[value]="value">
			</ibm-progress-bar>
		`,
		props: {
			label: text("Label", "Progress bar label"),
			helperText: text("Helper text", "Optional helper text"),
			max: number("max", 100),
			size: select("Size", ["big", "small"], "big"),
			status: select("Status", ["active", "finished", "error"], "active"),
			type: select("Type", ["default", "inline", "indented"], "default"),
			value: number("Current value", 35)
		}
	}))
	.add("Indeterminate", () => ({
		template: `
			<ibm-progress-bar
				[label]="label"
				[helperText]="helperText"
				[size]="size"
				[status]="status"
				[type]="type">
			</ibm-progress-bar>`
		,
		props: {
			label: text("Label", "Progress bar label"),
			helperText: text("Helper text", "Optional helper text"),
			size: select("Size", ["big", "small"], "big"),
			status: select("Status", ["active", "finished", "error"], "active"),
			type: select("Type", ["default", "inline", "indented"], "default")
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_progress_bar.progressbar.html"></ibm-documentation>
		`
	}));
