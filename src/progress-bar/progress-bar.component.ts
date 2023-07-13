import {
	Component,
	HostBinding,
	Input,
	TemplateRef
} from "@angular/core";

@Component({
	selector: "cds-progress-bar, ibm-progress-bar",
	template: `
		<div
			*ngIf="label"
			class="cds--progress-bar__label"
			[id]="id">
			<span class="cds--progress-bar__label-text">
				<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
				<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
			</span>
			<svg
				*ngIf="isFinished"
				fill="currentColor"
				cdsIcon="checkmark--filled"
				class="cds--progress-bar__status-icon">
			</svg>
			<svg
				*ngIf="isError"
				fill="currentColor"
				cdsIcon="error--filled"
				class="cds--progress-bar__status-icon">
			</svg>
		</div>
		<div
			class="cds--progress-bar__track"
			role="progressbar"
			[attr.aria-invalid]="isError"
			[attr.labelledby]="id"
			[attr.describedby]="helperText ? helperId: null"
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
		<div
			[id]="helperId"
			*ngIf="helperText"
			class="cds--progress-bar__helper-text">
			<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
			<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
		</div>
	`
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
