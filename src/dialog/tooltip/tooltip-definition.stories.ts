import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, text, select } from "@storybook/addon-knobs/angular";

import { DialogModule, PlaceholderModule } from "../../";
import { DocumentationModule } from "./../../documentation-component/documentation.module";

storiesOf("Tooltip Definition", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				DialogModule,
				PlaceholderModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-tooltip-definition
				[content]="content"
				[placement]="placement">
				{{triggerText}}
			</ibm-tooltip-definition>
		`,
		props: {
			placement: select("Tooltip direction", ["bottom", "top"], "bottom"),
			triggerText: text("Tooltip text", "Definition Tooltip"),
			content: text("Tooltip content", "Brief description of the dotted, underlined word above.")
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/TooltipDefinition.html"></ibm-documentation>
		`
	}));
