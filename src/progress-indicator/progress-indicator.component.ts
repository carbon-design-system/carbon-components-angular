import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";
import { Step } from "./progress-indicator-step.interface";

/**
 * [See demo](../../?path=/story/components-progress-indicator--basic)
 */
@Component({
	selector: "cds-progress-indicator, ibm-progress-indicator",
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
			class="cds--progress-step"
			*ngFor="let step of steps; let i = index"
			[ngClass]="{
				'cds--progress-step--disabled' : step.disabled,
				'cds--progress-step--complete' : step.complete,
				'cds--progress-step--incomplete' : !step.complete && i !== current,
				'cds--progress-step--current': i === current
			}">
			<button
				type="button"
				class="cds--progress-step-button"
				[ngClass]="{
					'cds--progress-step-button--unclickable': !step.onClick || current === i
				}"
				[disabled]="step.disabled"
				[attr.aria-disabled]="step.disabled"
				[tabindex]="(current !== i && step.onClick && !step.disabled) ? 0 : -1"
				[title]="step.label"
				(click)="onClick(i)">
				<span class="cds--assistive-text">
					{{this.translations[getCurrentState(i)?.toUpperCase()]}}
				</span>
				<svg
					[cdsIcon]="statusIcons[getCurrentState(i)]"
					size="16"
					[ngClass]="{
						'cds--progress__warning': step.invalid && i !== current
					}">
					<title *ngIf="step.description">{{step.description}}</title>
				</svg>
				<div class="cds--progress-text">
					<p class="cds--progress-label">{{step.label}}</p>
					<p *ngIf="step.secondaryLabel" class="cds--progress-optional">{{step.secondaryLabel}}</p>
				</div>
				<span class="cds--progress-line"></span>
			</button>
		</li>
	</ul>
	`
})
export class ProgressIndicator {
	@Input() get current() {
		return this._current;
	}
	set current(current: number) {
		this._current = current;
		this.setProgressIndicatorStates();
	}
	static skeletonSteps(stepCount: number) {
		const steps = [];
		for (let i = 0; i < stepCount; i++) {
			steps.push({ complete: false });
		}

		return steps;
	}

	@Input() steps: Array<Step>;
	@Output() stepSelected = new EventEmitter<{ step: Step, index: number }>();

	@Input() translations = this.i18n.get().PROGRESS_INDICATOR;
	@Input() orientation: "horizontal" | "vertical" = "horizontal";
	@Input() skeleton = false;
	@Input() spacing: "default" | "equal" = "default";

	// Get icon names based for each status
	readonly statusIcons = {
		current: "incomplete",
		complete: "checkmark--outline",
		invalid: "warning",
		incomplete: "circle-dash"
	};

	private _current: number;

	constructor(protected i18n: I18n) { }

	/**
	 * Executes click function if `onClick` exists for step
	 * `Current` step functions will not be executed
	 * @param index number
	 */
	onClick(index: number) {
		if (index !== this.current && typeof this.steps[index].onClick === "function") {
			this.steps[index].onClick();
		}
		this.stepSelected.emit({ step: this.steps[index], index });
	}

	/**
	 * Gets current state based on weight of the state
	 * Weight of state goes from error, incomplete, current, and complete
	 *
	 * This function is used to determine which icon & translation string to display
	 * @param index number
	 * @returns string
	 */
	getCurrentState(index: number) {
		if (index === this.current) {
			return "current";
		} else if (this.steps[index].invalid) {
			return "invalid";
		} else if (this.steps[index].complete) {
			return "complete";
		}

		return "incomplete";
	}

	private setProgressIndicatorStates() {
		if (this.steps === undefined) {
			return;
		}

		// Set all preceding steps to `complete` & following to `incomplete`
		this.steps.forEach((step: Step, index) => {
			if (index < this.current) {
				step.complete = true;
			} else {
				step.complete = false;
			}
		});
	}
}
