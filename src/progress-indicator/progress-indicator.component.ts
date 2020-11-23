import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";
import { ExperimentalService } from "carbon-components-angular/experimental";
import { Step } from "./progress-indicator-step.interface";

/**
 * [See demo](../../?path=/story/progress-indicator--basic)
 *
 * <example-url>../../iframe.html?id=progress-indicator--basic</example-url>
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
			class="bx--progress-step bx--progress-step--{{step.state[0]}}"
			*ngFor="let step of steps; let i = index"
			[ngClass]="{'bx--progress-step--disabled' : step.disabled}">
			<div class="bx--progress-step-button bx--progress-step-button--unclickable" role="button" tabindex="-1">
				<svg ibmIcon="checkmark--outline" size="16" *ngIf="step.state.includes('complete')"></svg>
				<svg *ngIf="step.state.includes('current')">
					<path d="M 7, 7 m -7, 0 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0" ></path>
				</svg>
				<svg *ngIf="step.state.includes('incomplete')">
					<path
						d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 13c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z">
					</path>
				</svg>
				<svg ibmIcon="warning" size="16" *ngIf="step.state.includes('error')" class="bx--progress__warning"></svg>
				<p
					class="bx--progress-label"
					*ngIf="step.tooltip"
					[ibmTooltip]="step.tooltip.content"
					[trigger]="step.tooltip.trigger"
					[placement]="step.tooltip.placement"
					[title]="step.tooltip.title"
					[gap]="step.tooltip.gap"
					[appendInline]="step.tooltip.appendInline"
					[data]="step.tooltip.data"
					(click)="stepSelected.emit({ step: step, index: i })">
					{{step.text}}
				</p>
				<p class="bx--progress-label" *ngIf="!step.tooltip" (click)="stepSelected.emit({ step: step, index: i })">{{step.text}}</p>
				<p *ngIf="step.optionalText" class="bx--progress-optional">{{step.optionalText}}</p>
				<span class="bx--progress-line"></span>
			</div>
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

	@Output() stepSelected = new EventEmitter<{ step: Step, index: number }>();

	@Input() steps: Array<Step>;
	@Input() orientation: "horizontal" | "vertical" = "horizontal";
	@Input() skeleton = false;

	@Input() get current() {
		return this.steps.findIndex(step => step.state.includes("current"));
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

	constructor(protected experimental: ExperimentalService) {}
}
