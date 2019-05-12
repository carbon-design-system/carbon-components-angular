import { Component, Input } from "@angular/core";
import { ExperimentalService } from "./../experimental.module";

/**
 * demo: [https://angular.carbondesignsystem.com/?path=/story/progress-indicator--basic](../../?path=/story/progress-indicator--basic)
 *
 * <example-url>../../iframe.html?id=progress-indicator--basic</example-url>
 *
 * @export
 * @class ProgressIndicator
 */
@Component({
	selector: "ibm-progress-indicator",
	template: `
	<ul
		data-progress
		data-progress-current
		class="bx--progress"
		[ngClass]="{
			'bx--skeleton': skeleton,
			'bx--progress--vertical': (orientation === 'vertical')
		}">
		<li
		class="bx--progress-step bx--progress-step--{{step.state}}"
		*ngFor="let step of steps; let i = index">
			<ibm-icon-checkmark-outline16 *ngIf="step.state == 'complete'"></ibm-icon-checkmark-outline16>
			<svg *ngIf="step.state == 'current'">
				<path *ngIf="isExperimental" d="M 7, 7 m -7, 0 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0" ></path>
			</svg>
			<svg *ngIf="step.state == 'incomplete'">
				<path
					*ngIf="isExperimental"
					d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 13c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z">
				</path>
			</svg>
			<ibm-icon-error-outline16 *ngIf="step.state == 'error'"></ibm-icon-error-outline16>
			<p class="bx--progress-label">{{step.text}}</p>
			<span class="bx--progress-line"></span>
		</li>
	</ul>
	`
})
export class ProgressIndicator {
	static skeletonSteps(stepCount: number) {
		const steps = [];
		for (let i = 0; i < stepCount; i++) {
			steps.push({"state": ["incomplete"]});
		}

		return steps;
	}

	@Input() steps = [];
	@Input() orientation: "horizontal" | "vertical" = "horizontal";
	@Input() skeleton = false;

	@Input() get current() {
		return this.steps.indexOf(step => step.state[0] === "current");
	}
	set current(current: number) {
		if (current === undefined || current < 0) {
			for (let i = 0; i < this.steps.length; i++) {
				this.steps[i].state[0] = "incomplete";
			}
			return;
		}

		if (current > this.steps.length - 1) {
			for (let i = 0; i < this.steps.length; i++) {
				this.steps[i].state[0] = "complete";
			}
			return;
		}
		this.steps[current].state[0] = "current";
		for (let i = 0; i < current; i++) {
			this.steps[i].state[0] = "complete";
		}
		for (let i = current + 1; i < this.steps.length; i++) {
			this.steps[i].state[0] = "incomplete";
		}
	}

	get isExperimental() {
		return this.experimental.isExperimental;
	}

	constructor(protected experimental: ExperimentalService) {}
}
