import { Component, Input } from "@angular/core";
import { ExperimentalService } from "./../experimental.module";

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
			<svg *ngIf="step.state == 'complete'" width="16" height="16" viewBox="0 0 16 16">
				<g fill-rule="nonzero">
					<path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
					<path d="M11.646 5.146l.708.708-5.604 5.603-3.104-3.103.708-.708 2.396 2.397z"/>
				</g>
			</svg>
			<svg *ngIf="step.state == 'current'">
				<!-- old icon -->
				<g *ngIf="!isExperimental">
					<circle cx="12" cy="12" r="12"></circle>
					<circle cx="12" cy="12" r="6"></circle>
				</g>
				<!-- new icon -->
				<path *ngIf="isExperimental" d="M 7, 7 m -7, 0 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0" ></path>
			</svg>
			<svg *ngIf="step.state == 'incomplete'">
				<!-- old icon -->
				<circle *ngIf="!isExperimental" cx="12" cy="12" r="12"></circle>
				<!-- new icon -->
				<path
					*ngIf="isExperimental"
					d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 13c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z">
				</path>
			</svg>
			<svg *ngIf="step.state == 'error'">
				<path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 13c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
				<path d="M7.5 4h1v5h-1zm.5 6.2c-.4 0-.8.3-.8.8s.3.8.8.8c.4 0 .8-.3.8-.8s-.4-.8-.8-.8z"></path>
			</svg>
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
