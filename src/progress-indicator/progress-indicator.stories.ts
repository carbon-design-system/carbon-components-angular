import {
	Component,
	Input,
	OnInit
} from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, number, object } from "@storybook/addon-knobs/angular";

import { ExperimentalComponenent } from "../../.storybook/experimental.component";

import { ProgressIndicatorModule } from "../";
import { ProgressIndicator } from "./progress-indicator.component";

// NOTE: non-experimental styles include some temporary workarounds in preview.scss
// these should be removed when experimental becomes non-experimental
@Component({
	selector: "app-skeleton-progress-indicator",
	template: `
		<ibm-progress-indicator [steps]="skeletonSteps" [orientation]="orientation" skeleton="true">
		</ibm-progress-indicator>
	`
})
class SkeletonStory implements OnInit {
	@Input() skeletonSteps = [];
	@Input() orientation = "horizontal";

	ngOnInit() {
		// Creates an empty progress indicator with 4 steps
		this.skeletonSteps = ProgressIndicator.skeletonSteps(4);
	}
}

storiesOf("Progress Indicator", module)
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
			<ibm-progress-indicator [steps]="steps" [current]="current"></ibm-progress-indicator>
		</div>
		`,
		props: {
			steps : [
				{
					text: "First step",
					state: ["complete"]
				},
				{
					text: "Second step",
					state: ["current"]
				},
				{
					text: "Third step",
					state: ["incomplete"]
				},
				{
					text: "Fourth step",
					state: ["incomplete"]
				},
				{
					text: "Fifth step",
					state: ["incomplete"]
				}
			],
			current: number("Current progress", 1)
		}
	}))
	.add("Vertical", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<ibm-progress-indicator orientation="vertical" [steps]="steps" [current]="current"></ibm-progress-indicator>
		`,
		props: {
			steps : [
				{
					text: "First step",
					state: ["complete"]
				},
				{
					text: "Second step",
					state: ["current"]
				},
				{
					text: "Third step",
					state: ["incomplete"]
				},
				{
					text: "Fourth step",
					state: ["incomplete"]
				},
				{
					text: "Fifth step",
					state: ["incomplete"]
				}
			],
			current: number("Current progress", 1)
		}
	}))
	.add("Skeleton", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<app-skeleton-progress-indicator></app-skeleton-progress-indicator>
		&nbsp;&nbsp;
		<app-skeleton-progress-indicator orientation="vertical"></app-skeleton-progress-indicator>
		`
	}));
