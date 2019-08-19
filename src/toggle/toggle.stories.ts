import { storiesOf, moduleMetadata } from "@storybook/angular";
import {
	withKnobs,
	boolean,
	select,
	text
} from "@storybook/addon-knobs/angular";

import { ToggleModule, DocumentationModule } from "../";

storiesOf("Toggle", module).addDecorator(
	moduleMetadata({
		imports: [ToggleModule, DocumentationModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-toggle
				[label]="label"
				[onText]="onText"
				[offText]="offText"
				[disabled]="disabled"
				[checked]="checked"
				[size]="size">
			</ibm-toggle>
			<ibm-toggle
				[label]="label"
				[onText]="altOnText"
				[offText]="altOffText"
				[disabled]="disabled"
				[checked]="checked"
				[size]="size">
			</ibm-toggle>
		`,
		props: {
			disabled: boolean("Disabled", false),
			checked: boolean("Checked", false),
			size: select("Size", ["md", "sm"], "md"),
			label: text("Label text", ""),
			onText: text("On text", "On"),
			offText: text("Off text", "Off"),
			altOffText: text("Alternative off text", "Dark"),
			altOnText: text("Alternative on text", "Light")
		}
	}))
	.add("Skeleton", () => ({
		template: `
			<ibm-toggle skeleton="true"></ibm-toggle>
			&nbsp;
			<ibm-toggle skeleton="true" size="sm"></ibm-toggle>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Toggle.html"></ibm-documentation>
		`
	}));
