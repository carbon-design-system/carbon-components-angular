import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";

@Component({
	selector: "ibm-inline-loading",
	template: `
		<div class="bx--inline-loading">
		<div class="bx--inline-loading__animation">
			<div
				*ngIf="success === false"
				class="bx--loading bx--loading--small">
				<svg class="bx--loading__svg" viewBox="-75 -75 150 150">
					<circle cx="0" cy="0" r="37.5"></circle>
				</svg>
			</div>
			<svg
				*ngIf="success === true"
				class="bx--inline-loading__checkmark-container bx--inline-loading__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
				<polyline class="bx--inline-loading__checkmark" points="0.74 3.4 3.67 6.34 9.24 0.74"></polyline>
			</svg>
		</div>
		<p *ngIf="success === false" class="bx--inline-loading__text">{{loadingText}}</p>
		<p *ngIf="success === true" class="bx--inline-loading__text">{{successText}}</p>
		</div>
	`
})
export class InlineLoading {
	/**
	 * Specify the text description for the loading state.
	 *
	 * @memberof InlineLoading
	 */
	@Input() loadingText;
	/**
	 * Specify the text description for the success state.
	 *
	 * @memberof InlineLoading
	 */
	@Input() successText;

	/**
	 * Returns value `true` if the component is in the success state.
	 */
	@Input() get success() {
		return this._success;
	}
	/**
	 * Set the component's state to match the parameter and emits onSuccess if it exits.
	 */
	set success (success: boolean) {
		this._success = success;
		if (this._success) {
			setTimeout(() => {
				if (this.onSuccess.observers.length > 0) {
					this.onSuccess.emit();
				}
			}, this.successDelay);
		}
	}

	/**
	 * Emits event after the success state is active
	 *
	 * @type {EventEmitter<any>}
	 * @memberof InlineLoading
	 */
	@Output() onSuccess: EventEmitter<any> = new EventEmitter();

	/**
	 * Provide a delay for the `setTimeout` for success.
	 *
	 * @memberof InlineLoading
	 */
	successDelay = 1500;

	/**
	 * Set to `true` if the action is completed successfully.
	 *
	 * @memberof InlineLoading
	 */
	_success = false;
}
