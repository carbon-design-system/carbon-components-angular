import {
	Component,
	HostBinding,
	Input,
	TemplateRef
} from "@angular/core";
import { NgTemplateOutlet, NgStyle } from "@angular/common";
import { IconDirective } from "carbon-components-angular/icon";

/**
 * Get started with importing the component:
 *
 * ```typescript
 * import { ProgressBar } from 'carbon-components-angular';
 * ```
 *
 * [See demo](../../?path=/story/components-progress-bar--basic)
 */
@Component({
	selector: "cds-progress-bar, ibm-progress-bar",
	template: `
		@if (label) {
			<div
				class="cds--progress-bar__label"
				[id]="id">
				<span class="cds--progress-bar__label-text">
					@if (isTemplate(label)) {
						<ng-template [ngTemplateOutlet]="label" />
					} @else {
						{{label}}
					}
				</span>
				@if (isFinished) {
					<svg
						fill="currentColor"
						cdsIcon="checkmark--filled"
						class="cds--progress-bar__status-icon">
					</svg>
				} @else if (isError) {
					<svg
						fill="currentColor"
						cdsIcon="error--filled"
						class="cds--progress-bar__status-icon">
					</svg>
				}
			</div>
		}
		<div
			class="cds--progress-bar__track"
			role="progressbar"
			[attr.aria-invalid]="isError"
			[attr.aria-labelledby]="id"
			[attr.aria-describedby]="helperText ? helperId : null"
			[attr.aria-valuemin]="!indeterminate ? 0 : null"
			[attr.aria-valuemax]="!indeterminate ? max : null"
			[attr.aria-valuenow]="!indeterminate ? value : null">
			<div
				class="cds--progress-bar__bar"
				[ngStyle]="{
					'transform': !isFinished && !isError ? percentage : null
				}">
			</div>
		</div>
		@if (helperText) {
			<div
				[id]="helperId"
				class="cds--progress-bar__helper-text">
				@if (isTemplate(helperText)) {
					<ng-template [ngTemplateOutlet]="helperText" />
				} @else {
					{{helperText}}
				}
			</div>
		}
	`,
	standalone: true,
	imports: [NgTemplateOutlet, IconDirective, NgStyle]
})
export class ProgressBar {
	/**
	 * Current value
	 */
	@Input() set value(num: number | undefined) {
		this._value = num;
		// Validate number
		if (num > this.max) {
			this._value = this.max;
		}
		if (num < 0) {
			this._value = 0;
		}
		// Set values based on current state
		if (this.isError) {
			this._value = 0;
		} else if (this.isFinished) {
			this._value = this.max;
		}
	}

	get value() {
		return this._value;
	}

	get percentage() {
		return `scaleX(${this.value / this.max})`;
	}
	// Size
	@HostBinding("class.cds--progress-bar--big") get bigBar() {
		return this.size === "big";
	}
	@HostBinding("class.cds--progress-bar--small") get smallBar() {
		return this.size === "small";
	}
	// Type
	@HostBinding("class.cds--progress-bar--default") get defaultType() {
		return this.type === "default";
	}
	@HostBinding("class.cds--progress-bar--indented") get indentedType() {
		return this.type === "indented";
	}
	@HostBinding("class.cds--progress-bar--inline") get inlineType() {
		return this.type === "inline";
	}
	// Status
	@HostBinding("class.cds--progress-bar--finished") get isFinished() {
		return this.status === "finished";
	}
	@HostBinding("class.cds--progress-bar--error") get isError() {
		return this.status === "error";
	}
	@HostBinding("class.cds--progress-bar--indeterminate") get indeterminate() {
		return this.value === undefined && !this.isFinished && !this.isError;
	}
	static progressBarCounter = 0;

	@Input() id = `progress-bar-${ProgressBar.progressBarCounter++}`;
	helperId = `progress-bar-helper-${ProgressBar.progressBarCounter}`;
	/**
	 * Description of the progress bar
	 */
	@Input() label: string | TemplateRef<any>;
	/**
	 * Current progress textual representation
	 */
	@Input() helperText: string | TemplateRef<any>;
	/**
	 * Maximum value
	 */
	@Input() max = 100;
	/**
	 * Alignment variant of the progress bar, default is `default`
	 */
	@Input() type: "default" | "inline" | "indented" = "default";
	/**
	 * Current status of the progress bar, default is `active`
	 */
	@Input() status: "active" | "finished" | "error" = "active";
	/**
	 * Size of the progress bar, default is `big`
	 */
	@Input() size: "small" | "big" = "big";

	@HostBinding("class.cds--progress-bar") defaultClass = true;
	private _value = undefined;

	isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
