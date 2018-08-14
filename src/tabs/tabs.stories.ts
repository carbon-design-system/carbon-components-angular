import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { TranslateModule } from "@ngx-translate/core";

import { TabsModule } from "../";

storiesOf("Tabs", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				TabsModule,
				TranslateModule.forRoot()
			],
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-tabs>
				<ibm-tab heading="one">foo</ibm-tab>
				<ibm-tab heading="two">bar</ibm-tab>
			</ibm-tabs>
		`
	}))
	.add("With template", () => ({
		template: `
			<ng-template #customTab>
				Something custom
				<svg width="16" height="16" viewBox="0 0 16 16" style="display: inline-block; height: 12px; width: 12px; fill: #3d70b2;">
					<path d="M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
					<path d="M9 13H7V7h2z"></path>
					<path d="M7 4a1 1 0 1 1 2 0 1 1 0 1 1-2 0"></path>
				</svg>
			</ng-template>
			<ibm-tabs>
				<ibm-tab heading="one">foo</ibm-tab>
				<ibm-tab heading="two">bar</ibm-tab>
				<ibm-tab [heading]="customTab">foo</ibm-tab>
			</ibm-tabs>
		`
	}));
