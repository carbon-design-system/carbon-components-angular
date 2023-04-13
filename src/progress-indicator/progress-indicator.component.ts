import {
	Component,
	Input,
	Output,
	EventEmitter, OnChanges, SimpleChanges
} from "@angular/core";
import { ExperimentalService } from "carbon-components-angular/experimental";
import { Step } from "./progress-indicator-step.interface";

/**
 * [See demo](../../?path=/story/components-progress-indicator--basic)
 *
 * <example-url>../../iframe.html?id=components-progress-indicator--basic</example-url>
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
			'bx--progress--vertical': (orientation === 'vertical'),
			'bx--progress--space-equal': spacing === 'equal' && orientation !== 'vertical'
		}">
		<li
			class="bx--progress-step bx--progress-step--{{step.state[0]}}"
			*ngFor="let step of steps; let i = index"
			[ngClass]="{'bx--progress-step--disabled' : step.disabled}">
			<button class="bx--progress-step-button bx--progress-step-button--unclickable" role="button" tabindex="-1">
				<ng-container *ngIf="!step.state.includes('error')">
					<svg ibmIcon="checkmark--outline" size="16" *ngIf="step.state.includes('complete')"></svg>
					<svg ibmIcon="incomplete" size="16" *ngIf="step.state.includes('current')"></svg>
					<svg ibmIcon="circle-dash" size="16" *ngIf="step.state.includes('incomplete')"></svg>
				</ng-container>
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
				<div class="bx--progress-text" *ngIf="(!step.tooltip && step.optionalText) || step.optionalText">
					<p class="bx--progress-label" *ngIf="!step.tooltip" (click)="stepSelected.emit({ step: step, index: i })">{{step.text}}</p>
					<p *ngIf="step.optionalText" class="bx--progress-optional">{{step.optionalText}}</p>
				</div>
				<span class="bx--progress-line"></span>
			</button>
		</li>
	</ul>
	`
})
export class ProgressIndicator implements OnChanges {
	static skeletonSteps(stepCount: number) {
		const steps = [];
		for (let i = 0; i < stepCount; i++) {
			steps.push({ "state": ["incomplete"] });
		}

		return steps;
	}

	@Output() stepSelected = new EventEmitter<{ step: Step, index: number }>();

	@Input() steps: Array<Step>;
	@Input() orientation: "horizontal" | "vertical" = "horizontal";
	@Input() skeleton = false;
	@Input() spacing: "default" | "equal" = "default";

	@Input() get current() {
		return this.steps.findIndex(step => step.state.includes("current"));
	}
	set current(current: number) {
		this._current = current;
	}
	private _current: number;

	constructor(protected experimental: ExperimentalService) {}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.steps || changes.current) {
			this.setProgressIndicatorStates();
		}
	}

	private setProgressIndicatorStates() {
		if (this.steps === undefined) {
			return;
		}

		if (this._current === undefined || this._current < 0) {
			for (let i = 0; i < this.steps.length; i++) {
				this.steps[i].state[0] = "incomplete";
			}
			return;
		}

		if (this._current > this.steps.length - 1) {
			for (let i = 0; i < this.steps.length; i++) {
				this.steps[i].state[0] = "complete";
			}
			return;
		}
		this.steps[this._current].state[0] = "current";
		for (let i = 0; i < this._current; i++) {
			this.steps[i].state[0] = "complete";
		}
		for (let i = this._current + 1; i < this.steps.length; i++) {
			this.steps[i].state[0] = "incomplete";
		}
	}
}
