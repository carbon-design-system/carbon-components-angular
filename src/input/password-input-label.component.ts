import {
	Component,
	Input,
	AfterViewInit,
	ElementRef,
	HostBinding,
	TemplateRef,
	ViewChild,
	ChangeDetectorRef,
	ContentChild,
	ChangeDetectionStrategy
} from "@angular/core";
import { PasswordInput } from "./password.directive";
import { BaseIconButton } from "carbon-components-angular/button";
import { NgClass, NgTemplateOutlet } from "@angular/common";
import { IconDirective } from "carbon-components-angular/icon";
import { Tooltip } from "carbon-components-angular/tooltip";

/**
 * Get started with importing the component and directive:
 *
 * ```typescript
 * import { PasswordInputLabelComponent, PasswordInput } from 'carbon-components-angular';
 * ```
 *
 * ```html
 * <cds-password-label>
 * 	Label
 *	<input cdsPassword>
 * </cds-password-label>
 * ```
 *
 * [See demo](../../?path=/story/components-input--basic)
 */
@Component({
	selector: "cds-password-label, ibm-password-label",
	template: `
		@if (skeleton) {
			<span class="cds--label cds--skeleton"></span>
			<div class="cds--text-input cds--skeleton"></div>
		} @else {
			<label
				[for]="labelInputID"
				[attr.aria-label]="ariaLabel"
				class="cds--label"
				[ngClass]="{
					'cds--label--disabled': disabled
				}">
				@if (labelTemplate) {
					<ng-template [ngTemplateOutlet]="labelTemplate" />
				} @else {
					<ng-content />
				}
			</label>
			<div class="cds--text-input__field-outer-wrapper">
				<div
					class="cds--text-input__field-wrapper"
					[ngClass]="{
						'cds--text-input__field-wrapper--warning': warn
					}"
					[attr.data-invalid]="invalid ? true : null"
					#wrapper>
					@if (invalid) {
						<svg
							cdsIcon="warning--filled"
							size="16"
							class="cds--text-input__invalid-icon">
						</svg>
					} @else if (warn) {
						<svg
							cdsIcon="warning--alt--filled"
							size="16"
							class="cds--text-input__invalid-icon cds--text-input__invalid-icon--warning">
						</svg>
					}
					<ng-content select="[cdsPassword], [ibmPassword]" />
					<cds-tooltip
						[description]="passwordIsVisible ? hidePasswordLabel : showPasswordLabel"
						[disabled]="disabled"
						[caret]="caret"
						[dropShadow]="dropShadow"
						[highContrast]="highContrast"
						[isOpen]="isOpen"
						[align]="align"
						[autoAlign]="autoAlign"
						[enterDelayMs]="enterDelayMs"
						[leaveDelayMs]="leaveDelayMs"
						class="cds--toggle-password-tooltip">
							<div class="cds--tooltip-trigger__wrapper">
								<button
									class="cds--text-input--password__visibility__toggle cds--btn cds--tooltip__trigger cds--tooltip--a11y"
									[disabled]="disabled"
									type="button"
									(click)="handleTogglePasswordVisibility($event)">
									@if (passwordIsVisible) {
										<svg cdsIcon="view--off" class="cds--icon-visibility-off" size="16"></svg>
									} @else {
										<svg cdsIcon="view" class="cds--icon-visibility-on" size="16"></svg>
									}
								</button>
							</div>
					</cds-tooltip>

					@if (fluid) {
						<hr class="cds--text-input__divider" />
						@if (invalid) {
							<div class="cds--form-requirement">
								@if (isTemplate(invalidText)) {
									<ng-template [ngTemplateOutlet]="invalidText" />
								} @else {
									{{ invalidText }}
								}
							</div>
						} @else if (warn) {
							<div class="cds--form-requirement">
								@if (isTemplate(warnText)) {
									<ng-template [ngTemplateOutlet]="warnText" />
								} @else {
									{{ warnText }}
								}
							</div>
						}
					}
				</div>
				@if (!fluid) {
					@if (invalid) {
						<div class="cds--form-requirement">
							@if (isTemplate(invalidText)) {
								<ng-template [ngTemplateOutlet]="invalidText" />
							} @else {
								{{ invalidText }}
							}
						</div>
					} @else if (warn) {
						<div class="cds--form-requirement">
							@if (isTemplate(warnText)) {
								<ng-template [ngTemplateOutlet]="warnText" />
							} @else {
								{{ warnText }}
							}
						</div>
					} @else if(helperText && !skeleton) {
						<div
							class="cds--form__helper-text"
							[ngClass]="{ 'cds--form__helper-text--disabled': disabled }">
							@if (isTemplate(helperText)) {
								<ng-template [ngTemplateOutlet]="helperText" />
							} @else {
								{{ helperText }}
							}
						</div>
					}
				}
			</div>
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [NgClass, NgTemplateOutlet, IconDirective, Tooltip]
})
/**
 * Represents the Password Input Label Component.
 */
export class PasswordInputLabelComponent extends BaseIconButton implements AfterViewInit {
	/**
	 * Counter for generating unique labelInputID.
	 */
	static labelCounter = 0;

	@ContentChild(PasswordInput) textInput: PasswordInput;

	/**
	 * ID for the input item associated with the label.
	 */
	@Input() labelInputID = "cds-password-input-" + PasswordInputLabelComponent.labelCounter++;

	/**
	 * Type for input field, either password or text.
	 */
	inputType: "password" | "text" = "password";

	/**
	* Flag for checking if password is visible.
	*/
	passwordIsVisible = false;

	/**
	 * Flag for disabled label.
	 */
	@Input() disabled = false;

	/**
	 * Flag for loading (skeleton) label.
	 */
	@Input() skeleton = false;

	/**
	 * Template for label content.
	 */
	@Input() labelTemplate: TemplateRef<any>;

	/**
	 * Template for password input.
	 */
	@Input() passwordInputTemplate: TemplateRef<any>;

	/**
	 * Optional helper text under the label.
	 */
	@Input() helperText: string | TemplateRef<any>;

	/**
	 * Sets the invalid text.
	 */
	@Input() invalidText: string | TemplateRef<any>;

	/**
	 * Flag for an invalid label component.
	 */
	@Input() invalid = false;

	/**
	 * Flag for showing a warning.
	 */
	@Input() warn = false;

	/**
	 * Warning text.
	 */
	@Input() warnText: string | TemplateRef<any>;

	/**
	 * Aria label for label.
	 */
	@Input() ariaLabel: string;

	/**
	 * Tooltip text for hiding password.
	 */
	@Input() hidePasswordLabel = "Hide password";

	/**
	 * Tooltip text for showing password.
	 */
	@Input() showPasswordLabel = "Show password";

	/**
	 * Experimental: enable fluid state
	 */
	@Input() fluid = false;

	/**
	 * Reference to the wrapper element.
	 */
	@ViewChild("wrapper", { static: true }) wrapper: ElementRef<HTMLDivElement>;

	/**
	 * Binding for applying class to host element.
	 */
	@HostBinding("class.cds--form-item") labelClass = true;
	@HostBinding("class.cds--password-input-wrapper") passwordInputWrapper = true;
	@HostBinding("class.cds--text-input-wrapper") textInputWrapper = true;
	@HostBinding("class.cds--text-input-wrapper--readonly") get isReadonly() {
		return this.wrapper?.nativeElement.querySelector("input")?.readOnly ?? false;
	}

	@HostBinding("class.cds--text-input--fluid") get fluidClass() {
		return this.fluid && !this.skeleton;
	}

	@HostBinding("class.cds--text-input--fluid__skeleton") get fluidSkeletonClass() {
		return this.fluid && this.skeleton;
	}

	/**
	 * Constructor for PasswordInputLabelComponent.
	 * @param changeDetectorRef - Reference to ChangeDetectorRef.
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef) {
		super();
	}

	/**
	 * Lifecycle hook called after the view has been initialized to set the ID of the input element
	 */
	ngAfterViewInit() {
		if (this.wrapper) {
			const inputElement =
				this.wrapper.nativeElement.querySelector("input");
			if (inputElement) {
				if (inputElement.id) {
					this.labelInputID = inputElement.id;
					this.changeDetectorRef.detectChanges();
				}
				inputElement.setAttribute("id", this.labelInputID);
				return;
			}
		}
	}

	/**
	 * Function to check if a value is a TemplateRef.
	 * @param value - Value to check.
	 * @returns Whether the value is a TemplateRef.
	 */
	public isTemplate(value) {
		return value instanceof TemplateRef;
	}

	/**
	 * Handler for toggling password visibility.
	 */
	public handleTogglePasswordVisibility() {
		this.inputType = this.inputType === "password" ? "text" : "password";
		this.textInput.type = this.inputType;
		this.passwordIsVisible = this.inputType === "text";
	}
}
