import {
	Component,
	Input,
	AfterViewInit,
	ElementRef,
	HostBinding,
	TemplateRef,
	ViewChild,
	ChangeDetectorRef,
	ContentChild
} from "@angular/core";
import { PasswordInput } from "./password.directive";
import { BaseIconButton } from "../button";

/**
 * Get started with importing the module:
 *
 * ```typescript
 * import { InputModule } from 'carbon-components-angular';
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
		<label
			[for]="labelInputID"
			[attr.aria-label]="ariaLabel"
			class="cds--label"
			[ngClass]="{
				'cds--label--disabled': disabled,
				'cds--skeleton': skeleton
			}"
		>
			<ng-template *ngIf="labelTemplate; else labelContent" [ngTemplateOutlet]="labelTemplate"></ng-template>
			<ng-template #labelContent>
				<ng-content></ng-content>
			</ng-template>
		</label>

		<div class="cds--text-input__field-outer-wrapper">
			<div
			class="cds--text-input__field-wrapper"
			[ngClass]="{
				'cds--text-input__field-wrapper--warning': warn
			}"
			[attr.data-invalid]="invalid ? true : null"
			#wrapper>
				<svg
					*ngIf="!warn && invalid"
					cdsIcon="warning--filled"
					size="16"
					class="cds--text-input__invalid-icon">
				</svg>
				<svg
					*ngIf="!invalid && warn"
					cdsIcon="warning--alt--filled"
					size="16"
					class="cds--text-input__invalid-icon cds--text-input__invalid-icon--warning">
				</svg>
				<ng-content select="[cdsPassword], [ibmPassword]"></ng-content>
				<cds-tooltip
					*ngIf="!skeleton"
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
								<svg *ngIf="passwordIsVisible" cdsIcon="view--off" class="cds--icon-visibility-off" size="16"></svg>
								<svg *ngIf="!passwordIsVisible" cdsIcon="view" class="cds--icon-visibility-on" size="16"></svg>
							</button>
						</div>
				</cds-tooltip>
			</div>
			<div
				*ngIf="!skeleton && helperText && !invalid && !warn"
				class="cds--form__helper-text"
				[ngClass]="{ 'cds--form__helper-text--disabled': disabled }">
				<ng-container *ngIf="!isTemplate(helperText)">{{ helperText }}</ng-container>
				<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
			</div>

			<div *ngIf="!warn && invalid" class="cds--form-requirement">
				<ng-container *ngIf="!isTemplate(invalidText)">{{ invalidText }}</ng-container>
				<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
			</div>

			<div *ngIf="!invalid && warn" class="cds--form-requirement">
				<ng-container *ngIf="!isTemplate(warnText)">{{ warnText }}</ng-container>
				<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
			</div>
		</div>
    `
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
	 * Reference to the wrapper element.
	 */
	@ViewChild("wrapper") wrapper: ElementRef<HTMLDivElement>;

	/**
	 * Binding for applying class to host element.
	 */
	@HostBinding("class.cds--form-item") labelClass = true;
	@HostBinding("class.cds--password-input-wrapper") passwordInputWrapper = true;
	@HostBinding("class.cds--text-input-wrapper") textInputWrapper = true;

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
