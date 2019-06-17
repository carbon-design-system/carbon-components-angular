import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, text, select } from "@storybook/addon-knobs/angular";

import { DialogModule, PlaceholderModule, DocumentationModule } from "../../";

storiesOf("Tooltip Icon", module)
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
			<ibm-tooltip-icon [placement]="placement" [content]="content">
				<svg width="16" height="12" viewBox="0 0 16 12">
					<g fill-rule="nonzero">
						<path d="M8.05 2a2.5 2.5 0 0 1 4.9 0H16v1h-3.05a2.5 2.5 0 0 1-4.9 0H0V2h8.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM3.05
						 9a2.5 2.5 0 0 1 4.9 0H16v1H7.95a2.5 2.5 0 0 1-4.9 0H0V9h3.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
					</g>
				</svg>
			</ibm-tooltip-icon>
		`,
		props: {
			placement: select("Tooltip direction", ["bottom", "top"], "bottom"),
			content: text("Tooltip content", "Filter")
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/TooltipIcon.html"></ibm-documentation>
		`
	}));
