import {
	Component,
	Input,
	OnInit
} from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { ExperimentalComponenent } from "../../.storybook/experimental.component";

import { ProgressIndicatorModule } from "../";
import { ProgressIndicator } from "./progress-indicator.component";

// NOTE: non-experimental styles include some temporary workarounds in preview.scss
// these should be removed when experimental becomes non-experimental
@Component({
	selector: "app-skeleton-progress-indicator",
	template: `
		<ibm-progress-indicator [steps]="skeletonSteps" skeleton="true">
		</ibm-progress-indicator>
	`
})
class SkeletonStory implements OnInit {
	@Input() skeletonSteps = [];

	ngOnInit() {
		// Creates an empty progress indicator with 4 steps
		this.skeletonSteps = ProgressIndicator.skeletonSteps(4);
	}
}

storiesOf("ProgressIndicator", module)
	.addDecorator(
		moduleMetadata({
			declarations: [ExperimentalComponenent, SkeletonStory],
			imports: [
				ProgressIndicatorModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<div style="display: flex;">
			<ibm-progress-indicator [steps]="steps"></ibm-progress-indicator>
		</div>
		`,
		props: {
			steps : [
				{
					text: "1. ONE",
					state: ["complete"]
				},
				{
					text: "2. TWO",
					state: ["complete"]
				},
				{
					text: "3. THREE",
					state: ["current"]
				},
				{
					text: "4. FOUR",
					state: ["incomplete"]
				},
				{
					text: "5. FIVE",
					state: ["incomplete"]
				},
				{
					text: "6. SIX",
					state: ["incomplete"]
				}
			]
		}
	}))
	.add("Skeleton", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<app-skeleton-progress-indicator></app-skeleton-progress-indicator>
		`
	}))
	.add("Vertical", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<ibm-progress-indicator [vertical]="true" [steps]="steps"></ibm-progress-indicator>
		`,
		props: {
			steps : [
				{
					text: "1. ONE",
					state: ["complete"]
				},
				{
					text: "2. TWO",
					state: ["complete"]
				},
				{
					text: "3. THREE",
					state: ["current"]
				},
				{
					text: "4. FOUR",
					state: ["incomplete"]
				},
				{
					text: "5. FIVE",
					state: ["incomplete"]
				},
				{
					text: "6. SIX",
					state: ["incomplete"]
				}
			]
		}
	}));
