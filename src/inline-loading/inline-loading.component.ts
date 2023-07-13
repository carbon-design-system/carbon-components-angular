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
 * [See demo](../../?path=/story/components-inline-loading--basic)
 */
@Component({
	selector: "cds-inline-loading, ibm-inline-loading",
	template: `
		<div *ngIf="state !== InlineLoadingState.Hidden"
			class="cds--inline-loading__animation">
			<div
				*ngIf="state === InlineLoadingState.Inactive || state === InlineLoadingState.Active"
				class="cds--loading cds--loading--small"
				[ngClass]="{
					'cds--loading--stop': state === InlineLoadingState.Inactive
				}">
				<svg class="cds--loading__svg" viewBox="0 0 100 100">
					<circle class="cds--loading__background" cx="50%" cy="50%" r="44" />
					<circle class="cds--loading__stroke" cx="50%" cy="50%" r="44" />
				</svg>
			</div>
			<svg
				*ngIf="state === InlineLoadingState.Finished"
				cdsIcon="checkmark--filled"
				size="16"
				class="cds--inline-loading__checkmark-container">
			</svg>
			<svg
				*ngIf="state === InlineLoadingState.Error"
				cdsIcon="error--filled"
				size="16"
				class="cds--inline-loading--error">
			</svg>
		</div>
		<p
			*ngIf="state === InlineLoadingState.Inactive || state === InlineLoadingState.Active"
			class="cds--inline-loading__text">{{loadingText}}</p>
		<p *ngIf="state === InlineLoadingState.Finished" class="cds--inline-loading__text">{{successText}}</p>
		<p *ngIf="state === InlineLoadingState.Error" class="cds--inline-loading__text">{{errorText}}</p>
	`
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
