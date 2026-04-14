import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding,
	ChangeDetectionStrategy
} from "@angular/core";
import { NgClass } from "@angular/common";
import { IconDirective } from "carbon-components-angular/icon";

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
 * Get started with importing the component and the enum:
 *
 * ```typescript
 * import { InlineLoading, InlineLoadingState } from 'carbon-components-angular';
 * ```
 *
 * [See demo](../../?path=/story/components-inline-loading--basic)
 */
@Component({
	selector: "cds-inline-loading, ibm-inline-loading",
	template: `
		@if (state !== InlineLoadingState.Hidden) {
			<div class="cds--inline-loading__animation">
				@if (state === InlineLoadingState.Inactive || state === InlineLoadingState.Active) {
					<div
						class="cds--loading cds--loading--small"
						[ngClass]="{
							'cds--loading--stop': state === InlineLoadingState.Inactive
						}">
						<svg class="cds--loading__svg" viewBox="0 0 100 100">
							<circle class="cds--loading__background" cx="50%" cy="50%" r="44" />
							<circle class="cds--loading__stroke" cx="50%" cy="50%" r="44" />
						</svg>
					</div>
				} @else if (state === InlineLoadingState.Finished) {
					<svg
						cdsIcon="checkmark--filled"
						size="16"
						class="cds--inline-loading__checkmark-container">
					</svg>
				} @else if (state === InlineLoadingState.Error) {
					<svg
						cdsIcon="error--filled"
						size="16"
						class="cds--inline-loading--error">
					</svg>
				}
			</div>
		}
		@if(state === InlineLoadingState.Inactive || state === InlineLoadingState.Active) {
			<p class="cds--inline-loading__text">{{loadingText}}</p>
		} @else if(state === InlineLoadingState.Finished) {
			<p class="cds--inline-loading__text">{{successText}}</p>
		} @else if(state === InlineLoadingState.Error) {
			<p class="cds--inline-loading__text">{{errorText}}</p>
		}

	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [NgClass, IconDirective]
})
export class InlineLoading {
	InlineLoadingState = InlineLoadingState;

	/**
	 * Specify the text description for the loading state.
	 */
	@Input() state: InlineLoadingState | string = InlineLoadingState.Active;
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

	@HostBinding("class.cds--inline-loading") loadingClass = true;
}
