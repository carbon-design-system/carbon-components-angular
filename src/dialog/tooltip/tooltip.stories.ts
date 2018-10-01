import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { TranslateModule } from "@ngx-translate/core";

import { DialogModule } from "../../";

storiesOf("Tooltip", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				DialogModule,
				TranslateModule.forRoot()
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<span
				ibmTooltip="tooltip text"
				trigger="hover"
				placement="bottom"
				style="cursor: pointer;">
				Hover for tooltip
			</span>
		`
	}))
	.add("With Template", () => ({
	template: `
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
		`
	}));
