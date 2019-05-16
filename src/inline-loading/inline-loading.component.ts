import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding
} from "@angular/core";

/**
 * [See demo](../../?path=/story/inline-loading--basic)
 *
 * <example-url>../../iframe.html?id=inline-loading--basic</example-url>
 *
 * @export
 * @class InlineLoading
 */
@Component({
	selector: "ibm-inline-loading",
	template: `
		<div class="bx--inline-loading__animation">
			<div
				*ngIf="success === false"
				class="bx--loading bx--loading--small"
				[ngClass]="{
					'bx--loading--stop': !isActive
				}">
				<svg class="bx--loading__svg" viewBox="-75 -75 150 150">
					<circle class="bx--loading__background" cx="0" cy="0" r="30" />
					<circle class="bx--loading__stroke" cx="0" cy="0" r="30" />
				</svg>
			</div>
			<svg
				*ngIf="success === true"
				class="bx--inline-loading__checkmark-container bx--inline-loading__svg"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 10 10">
				<polyline class="bx--inline-loading__checkmark" points="0.74 3.4 3.67 6.34 9.24 0.74"></polyline>
			</svg>
		</div>
		<p *ngIf="success === false" class="bx--inline-loading__text">{{loadingText}}</p>
		<p *ngIf="success === true" class="bx--inline-loading__text">{{successText}}</p>
	`
})
export class InlineLoading {
	/**
	 * Specify the text description for the loading state.
	 */
	@Input() loadingText;
	/**
	 * Specify the text description for the success state.
	 */
	@Input() successText;
	/**
	 * Provide a delay for the `setTimeout` for success.
	 */
	@Input() successDelay = 1500;
	/**
	 * set to `false` to stop the loading animation
	 */
	@Input() isActive = true;

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
				this.onSuccess.emit();
			}, this.successDelay);
		}
	}

	/**
	 * Emits event after the success state is active
	 *
	 * @type {EventEmitter<any>}
	 */
	@Output() onSuccess: EventEmitter<any> = new EventEmitter();

	@HostBinding("class.bx--inline-loading") loadingClass = true;

	/**
	 * Set to `true` if the action is completed successfully.
	 */
	protected _success = false;
}
