import {
	Component,
	Input,
	Output,
	EventEmitter, OnChanges, SimpleChanges
} from "@angular/core";
import { ExperimentalService } from "carbon-components-angular/experimental";
import { Step } from "./progress-indicator-step.interface";
import { DEFAULT_TOOLTIP_CONFIG } from "carbon-components-angular/tooltip";

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
		class="cds--progress"
		[ngClass]="{
			'cds--skeleton': skeleton,
			'cds--progress--vertical': (orientation === 'vertical'),
			'cds--progress--space-equal': spacing === 'equal' && orientation !== 'vertical'
		}">
		<li
			class="cds--progress-step cds--progress-step--{{step.state[0]}}"
			*ngFor="let step of steps; let i = index"
			[ngClass]="{'cds--progress-step--disabled' : step.disabled}">
			<button
				type="button"
				class="cds--progress-step-button cds--progress-step-button--unclickable"
				[disabled]="step.disabled"
				[attr.aria-disabled]="step.disabled"
				tabindex="-1"
				title="step.text">
				<span class="cds--assistive-text">SOME i18n text based on current state</span>
				<svg
					ibmIcon="incomplete"
					*ngIf="step.state.includes('current')"
					size="16">
					<title *ngIf="step.description">{{step.description}}</title>
				</svg>
				<svg
					ibmIcon="checkmark--outline"
					*ngIf="step.state.includes('complete')"
					size="16">
					<title *ngIf="step.description">{{step.description}}</title>
				</svg>
				<svg
					ibmIcon="circle-dash"
					*ngIf="step.state.includes('incomplete')"
					size="16">
					<title *ngIf="step.description">{{step.description}}</title>
				</svg>
				<svg
					ibmIcon="warning"
					size="16"
					*ngIf="step.state.includes('error')"
					class="cds--progress__warning">
					<title *ngIf="step.description">{{step.description}}</title>
				</svg>
				<div class="cds--progress-text">
					<ibm-tooltip
						*ngIf="step.tooltip"
						[description]="step.tooltip.description"
						[align]="step.tooltip.align"
						[caret]="step.tooltip.caret"
						[dropShadow]="step.tooltip.dropShadow"
						[highContrast]="step.tooltip.highContrast"
						[isOpen]="step.tooltip.isOpen"
						[enterDelayMs]="step.tooltip.enterDelayMs"
						[leaveDelayMs]="step.tooltip.leaveDelayMs">
						<p
							class="cds--progress-label"
							(click)="stepSelected.emit({ step: step, index: i })">
							{{step.text}}
						</p>
					</ibm-tooltip>
					<p *ngIf="!step.tooltip" class="cds--progress-label">{{step.text}}</p>
					<p *ngIf="step.optionalText" class="cds--progress-optional">{{step.optionalText}}</p>
				</div>
				<span class="cds--progress-line"></span>
			</button>
		</li>
	</ul>
	`
})
export class ProgressIndicator implements OnChanges {
	@Input() set steps(steps: Array<Step>) {
		this._steps = steps.map((step: Step) => {
			if (step.tooltip) {
				step.tooltip = { ...DEFAULT_TOOLTIP_CONFIG, ...step.tooltip };
			}
			return step;
		});
	}
	get steps() {
		return this._steps;
	}

	@Input() get current() {
		return this.steps.findIndex(step => step.state.includes("current"));
	}
	set current(current: number) {
		this._current = current;
	}
	static skeletonSteps(stepCount: number) {
		const steps = [];
		for (let i = 0; i < stepCount; i++) {
			steps.push({ "state": ["incomplete"] });
		}

		return steps;
	}

	@Output() stepSelected = new EventEmitter<{ step: Step, index: number }>();

	@Input() orientation: "horizontal" | "vertical" = "horizontal";
	@Input() skeleton = false;
	@Input() spacing: "default" | "equal" = "default";

	private _steps: Array<Step> = [];
	private _current: number;

	constructor(protected experimental: ExperimentalService) { }

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
