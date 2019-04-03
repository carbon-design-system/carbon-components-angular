import { storiesOf, moduleMetadata } from "@storybook/angular";
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
	.add("Basic", () => ({
		template: `
			<div>
				<span
					ibmTooltip="tooltip text"
					trigger="hover"
					placement="bottom"
					style="cursor: pointer;">
					Hover for tooltip
				</span>
			</div>
		`
	}))
	.add("With Template", () => ({
	template: `
			<div>
				<ng-template #template let-tooltip="tooltip">
					<p>hello</p>
					<div>
						<button class="bx--btn bx--btn--primary" (click)="tooltip.doClose()">Close</button>
					</div>
				</ng-template>
				<span
					[ibmTooltip]="template"
					trigger="click"
					placement="bottom"
					style="cursor: pointer;">
					Click for tooltip
				</span>
				<ibm-placeholder></ibm-placeholder>
			</div>
		`
	}));
