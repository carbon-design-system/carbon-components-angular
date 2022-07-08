import {
	Component,
	Input,
	Output,
	EventEmitter, OnChanges, SimpleChanges
} from "@angular/core";
import { ExperimentalService } from "carbon-components-angular/experimental";
import { I18n } from "carbon-components-angular/i18n";
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
				class="cds--progress-step-button"
				[ngClass]="{
					'cds--progress-step-button--unclickable': !step.onClick || current === i
				}"
				[disabled]="step.disabled"
				[attr.aria-disabled]="step.disabled"
				[tabindex]="(current !== i && step.onClick && !step.disabled) ? 0 : -1"
				[title]="step.text"
				(click)="onClick(i)">
				<span class="cds--assistive-text">
					{{this.translations[getCurrentState(i)?.toUpperCase()]}}
				</span>
				<svg
					[ibmIcon]="statusIcons[getCurrentState(i)]"
					size="16"
					[ngClass]="{
						'cds--progress__warning': step.state.includes('error')
					}">
					<title *ngIf="step.description">{{step.description}}</title>
				</svg>
				<div class="cds--progress-text">
					<p class="cds--progress-label">{{step.text}}</p>
					<p *ngIf="step.optionalText" class="cds--progress-optional">{{step.optionalText}}</p>
				</div>
				<span class="cds--progress-line"></span>
			</button>
		</li>
	</ul>
	`
})
export class ProgressIndicator implements OnChanges {

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

	@Input() steps: Array<Step>;
	@Output() stepSelected = new EventEmitter<{ step: Step, index: number }>();

	@Input() translations = this.i18n.get().PROGRESS_INDICATOR;
	@Input() orientation: "horizontal" | "vertical" = "horizontal";
	@Input() skeleton = false;
	@Input() spacing: "default" | "equal" = "default";

	// Get icon names based for each status
	statusIcons = {
		current: "incomplete",
		complete: "checkmark--outline",
		error: "warning",
		incomplete: "circle-dash"
	};

	private _current: number;

	constructor(protected experimental: ExperimentalService, protected i18n: I18n) { }

	ngOnChanges(changes: SimpleChanges) {
		if (changes.steps || changes.current) {
			this.setProgressIndicatorStates();
		}
	}

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
		if (this.steps[index].state.includes("error")) {
			return "error";
		} else if (this.steps[index].state.includes("incomplete")) {
			return "incomplete";
		} else if (this.steps[index].state.includes("current")) {
			return "current";
		}

		return "complete";
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
