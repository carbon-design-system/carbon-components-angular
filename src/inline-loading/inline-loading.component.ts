import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding
} from "@angular/core";

export enum InlineLoadingState {
	/** It hides the whole component. */
	Hidden = "hidden",
	/** It shows the `loadingText` but no loading animation. */
	Inactive = "inactive",
	/** It shows the `loadingText` with loading animation. */
	Active = "active",
	/** It shows the `successText` with a success state. */
	Finished = "finished",
	/** It shows the `errorText` with an error state. */
	Error = "error"
}

/**
 * [See demo](../../?path=/story/inline-loading--basic)
 *
 * <example-url>../../iframe.html?id=inline-loading--basic</example-url>
 */
@Component({
	selector: "ibm-inline-loading",
	template: `
		<div *ngIf="state !== InlineLoadingState.Hidden"
			class="bx--inline-loading__animation">
			<div
				*ngIf="state === InlineLoadingState.Inactive || state === InlineLoadingState.Active"
				class="bx--loading bx--loading--small"
				[ngClass]="{
					'bx--loading--stop': state === InlineLoadingState.Inactive
				}">
				<svg class="bx--loading__svg" viewBox="-75 -75 150 150">
					<circle class="bx--loading__background" cx="0" cy="0" r="30" />
					<circle class="bx--loading__stroke" cx="0" cy="0" r="30" />
				</svg>
			</div>
			<svg
				*ngIf="state === InlineLoadingState.Finished"
				class="bx--inline-loading__checkmark-container bx--inline-loading__svg"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 10 10">
				<polyline class="bx--inline-loading__checkmark" points="0.74 3.4 3.67 6.34 9.24 0.74"></polyline>
			</svg>
			<svg
				*ngIf="state === InlineLoadingState.Error"
				class="bx--inline-loading--error"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16">
				<path d="M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M10.7,11.5L4.5,5.3l0.8-0.8l6.2,6.2L10.7,11.5z"></path>
				<path fill="none" d="M10.7,11.5L4.5,5.3l0.8-0.8l6.2,6.2L10.7,11.5z" data-icon-path="inner-path" opacity="0"></path>
			</svg>

		</div>
		<p
			*ngIf="state === InlineLoadingState.Inactive || state === InlineLoadingState.Active"
			class="bx--inline-loading__text">{{loadingText}}</p>
		<p *ngIf="state === InlineLoadingState.Finished" class="bx--inline-loading__text">{{successText}}</p>
		<p *ngIf="state === InlineLoadingState.Error" class="bx--inline-loading__text">{{errorText}}</p>
	`
})
export class InlineLoading {
	InlineLoadingState = InlineLoadingState;

	/**
	 * Specify the text description for the loading state.
	 */
	@Input() state: InlineLoadingState = InlineLoadingState.Active;
	/**
	 * Specify the text description for the loading state.
	 */
	@Input() loadingText: string;
	/**
	 * Specify the text description for the success state.
	 */
	@Input() successText: string;
	/**
	 * Provide a delay for the `setTimeout` for success.
	 */
	@Input() successDelay = 1500;
	/**
	 * Specify the text description for the error state.
	 */
	@Input() errorText: string;
	/**
	 * set to `false` to stop the loading animation
	 */
	@Input() get isActive() {
		return this.state === InlineLoadingState.Active;
	}
	set isActive(active: boolean) {
		this.state = active ? InlineLoadingState.Active : InlineLoadingState.Inactive;
	}

	/**
	 * Returns value `true` if the component is in the success state.
	 */
	@Input() get success() {
		return this.state === InlineLoadingState.Finished;
	}
	/**
	 * Set the component's state to match the parameter and emits onSuccess if it exits.
	 */
	set success(success: boolean) {
		this.state = success ? InlineLoadingState.Finished : InlineLoadingState.Error;
		if (this.state === InlineLoadingState.Finished) {
			setTimeout(() => {
				this.onSuccess.emit();
			}, this.successDelay);
		}
	}

	/**
	 * Emits event after the success state is active
	 */
	@Output() onSuccess: EventEmitter<any> = new EventEmitter();

	@HostBinding("class.bx--inline-loading") loadingClass = true;
}
