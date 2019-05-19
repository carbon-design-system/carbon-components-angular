import {
	Component,
	Input,
	OnInit
} from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, number, object } from "@storybook/addon-knobs/angular";

import { ProgressIndicatorModule, DocumentationModule } from "../";
import { ProgressIndicator } from "./progress-indicator.component";

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
			declarations: [SkeletonStory],
			imports: [
				ProgressIndicatorModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
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
		<app-skeleton-progress-indicator></app-skeleton-progress-indicator>
		&nbsp;&nbsp;
		<app-skeleton-progress-indicator orientation="vertical"></app-skeleton-progress-indicator>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/ProgressIndicator.html"></ibm-documentation>
		`
	}));
