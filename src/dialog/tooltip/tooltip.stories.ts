import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { DialogModule, PlaceholderModule } from "../../";

storiesOf("Tooltip", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				DialogModule, PlaceholderModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("default", () => ({
	template: `
			<div>
				<ng-template #template let-tooltip="tooltip">
					<p>This is some tooltip text. This box shows the maximum amount of text that should appear inside.
						If more room is needed please use a modal instead.</p>
					<div class="bx--tooltip__footer">
						<a href="/" class="bx--link">Learn More</a>
						<button class="bx--btn bx--btn--primary" (click)="tooltip.doClose()">Close</button>
					</div>
				</ng-template>

				<div class="bx--tooltip__label">
					Tooltip label
					<span
						[ibmTooltip]="template"
						trigger="click"
						placement="bottom"
						style="cursor: pointer;">
						<div role="button" class="bx--tooltip__trigger"  style="vertical-align: middle">
							<svg fill-rule="evenodd" height="16" role="img" viewBox="0 0 16 16" width="16" aria-label="tooltip" alt="tooltip">
								<path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1
									.4-1 1-1zm2 8H6v-1h1V8H6V7h3v4h1v1z"></path>
							</svg>
						</div>
					</span>
				</div>
				<ibm-placeholder></ibm-placeholder>
			</div>
		`
	}))
	.add("no icon", () => ({
		template: `
				<div>
					<ng-template #template let-tooltip="tooltip">
						<p>This is some tooltip text. This box shows the maximum amount of text that should appear inside.
							If more room is needed please use a modal instead.</p>
						<div class="bx--tooltip__footer">
							<a href="/" class="bx--link">Learn More</a>
							<button class="bx--btn bx--btn--primary" (click)="tooltip.doClose()">Close</button>
						</div>
					</ng-template>

					<span
						[ibmTooltip]="template"
						trigger="hover"
						placement="bottom">
						Tooltip label
					</span>
					<ibm-placeholder></ibm-placeholder>
				</div>
			`
		}))
		.add("only icon", () => ({
			template: `
					<div>
						<ng-template #template let-tooltip="tooltip">
							<p>This is some tooltip text. This box shows the maximum amount of text that should appear inside.
								If more room is needed please use a modal instead.</p>
							<div class="bx--tooltip__footer">
								<a href="/" class="bx--link">Learn More</a>
								<button class="bx--btn bx--btn--primary" (click)="tooltip.doClose()">Close</button>
							</div>
						</ng-template>

						<span
							[ibmTooltip]="template"
							trigger="hover"
							placement="bottom">
							<div role="button" class="bx--tooltip__trigger">
								<svg focusable="false" aria-label="tooltip" width="16" height="16" viewBox="0 0 16 16" role="img" style="will-change: transform;">
									<circle cx="8" cy="3" r="1"></circle><circle cx="8" cy="8" r="1"></circle><circle cx="8" cy="13" r="1"></circle>
								</svg>
							</div>
						</span>
						<ibm-placeholder></ibm-placeholder>
					</div>
				`
			}))
	.add("definition", () => ({
		template: `
			<div>
				<span
					ibmTooltip="tooltip text"
					type="definition"
					trigger="click"
					placement="bottom"
					style="cursor: pointer;">
					Definition Tooltip
				</span>
			</div>
		`
	}));
