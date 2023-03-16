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
			<div class="bx--progress-step-button bx--progress-step-button--unclickable" role="button" tabindex="-1">
				<ng-container *ngIf="!step.state.includes('error')">
					<svg *ngIf="step.state.includes('complete')" focusable="false" preserveAspectRatio="xMidYMid meet"
						xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32"
						aria-hidden="true">
						<path d="M14 21.414L9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414z"></path>
						<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path>
					</svg>
					<svg *ngIf="step.state.includes('current')" focusable="false" preserveAspectRatio="xMidYMid meet"
						xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
						<path d="M23.7642 6.8593l1.2851-1.5315A13.976 13.976 0 0020.8672 2.887l-.6836 1.8776A11.9729 11.9729 0 0123.7642
							6.8593zM27.81 14l1.9677-.4128A13.8888 13.8888 0 0028.14 9.0457L26.4087 10A12.52 12.52 0 0127.81 14zM20.1836
							27.2354l.6836 1.8776a13.976 13.976 0 004.1821-2.4408l-1.2851-1.5315A11.9729 11.9729 0 0120.1836
							27.2354zM26.4087 22L28.14 23a14.14 14.14 0 001.6382-4.5872L27.81 18.0659A12.1519 12.1519 0 0126.4087 22zM16
							30V2a14 14 0 000 28z">
						</path>
					</svg>
					<svg *ngIf="step.state.includes('incomplete')" focusable="false"
						preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16"
						viewBox="0 0 32 32" aria-hidden="true">
						<path d="M7.7 4.7a14.7 14.7 0 00-3 3.1L6.3 9A13.26 13.26 0 018.9 6.3zM4.6 12.3l-1.9-.6A12.51 12.51 0 002 16H4A11.48
							11.48 0 014.6 12.3zM2.7 20.4a14.4 14.4 0 002 3.9l1.6-1.2a12.89 12.89 0 01-1.7-3.3zM7.8 27.3a14.4 14.4 0 003.9
							2l.6-1.9A12.89 12.89 0 019 25.7zM11.7 2.7l.6 1.9A11.48 11.48 0 0116 4V2A12.51 12.51 0 0011.7
							2.7zM24.2 27.3a15.18 15.18 0 003.1-3.1L25.7 23A11.53 11.53 0 0123 25.7zM27.4 19.7l1.9.6A15.47 15.47 0 0030
							16H28A11.48 11.48 0 0127.4 19.7zM29.2 11.6a14.4 14.4 0 00-2-3.9L25.6 8.9a12.89 12.89 0 011.7 3.3zM24.1 4.6a14.4
							14.4 0 00-3.9-2l-.6 1.9a12.89 12.89 0 013.3 1.7zM20.3 29.3l-.6-1.9A11.48 11.48 0 0116 28v2A21.42 21.42 0 0020.3
							29.3z"></path>
					</svg>
				</ng-container>
				<svg *ngIf="step.state.includes('error')" class="bx--progress__warning" focusable="false"
					preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16"
					viewBox="0 0 16 16" aria-hidden="true">
					<path d="M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M8,14c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S11.3,14,
						8,14z"></path>
					<path d="M7.5 4H8.5V9H7.5zM8 10.2c-.4 0-.8.3-.8.8s.3.8.8.8c.4 0 .8-.3.8-.8S8.4 10.2 8 10.2z"></path>
				</svg>
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
