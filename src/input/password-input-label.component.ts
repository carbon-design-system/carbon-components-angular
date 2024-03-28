import {
	Component,
	Input,
	AfterViewInit,
	ElementRef,
	HostBinding,
	TemplateRef,
	ViewChild,
	ChangeDetectorRef
} from "@angular/core";

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
 *	<input cdsPassword type="text">
 *	<input cdsPassword type="password">
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

        <div
            class="cds--text-input__field-wrapper"
            [ngClass]="{
                'cds--text-input__field-wrapper--warning': warn
            }"
            [attr.data-invalid]="invalid ? true : null"
            #wrapper
        >
            <svg *ngIf="!warn && invalid" cdsIcon="warning--filled" size="16" class="cds--text-input__invalid-icon"></svg>
            <svg
                *ngIf="!invalid && warn"
                cdsIcon="warning--alt--filled"
                size="16"
                class="cds--text-input__invalid-icon cds--text-input__invalid-icon--warning"
            ></svg>

            <ng-template *ngIf="passwordInputTemplate; else contentTemplate" [ngTemplateOutlet]="passwordInputTemplate"></ng-template>

            <ng-template #passwordContent>
                <ng-content select="input[type=password]"></ng-content>
            </ng-template>

            <ng-template #textContent>
                <ng-content select="input[type=text]"></ng-content>
            </ng-template>

            <ng-template #contentTemplate>
                <ng-container
                    *ngIf="inputType === 'password'; else textContent"
                >
                    <ng-container
                        *ngTemplateOutlet="passwordContent"
                    ></ng-container>
                </ng-container>
            </ng-template>

            <button
				*ngIf="!skeleton"
                type="button"
                [ngClass]="passwordVisibilityToggleClasses"
                [disabled]="disabled"
                (click)="handleTogglePasswordVisibility()"
            >
                <ng-container *ngIf="!disabled">
                    <span class="cds--assistive-text">
                        {{
                            passwordIsVisible
                                ? hidePasswordLabel
                                : showPasswordLabel
                        }}
                    </span>
                </ng-container>
                <svg *ngIf="passwordIsVisible" cdsIcon="view--off" size="16"></svg>
                <svg *ngIf="!passwordIsVisible" cdsIcon="view" size="16"></svg>
            </button>
        </div>

        <div
            *ngIf="!skeleton && helperText && !invalid && !warn"
            class="cds--form__helper-text"
            [ngClass]="{ 'cds--form__helper-text--disabled': disabled }"
        >
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
    `
})
/**
 * Represents the Password Input Label Component.
 */
export class PasswordInputLabelComponent implements AfterViewInit {

	/**
	 * Getter for generating classes for password visibility toggle.
	 */
	get passwordVisibilityToggleClasses(): string {
		return [
			"cds--text-input--password__visibility__toggle",
			"cds--btn",
			"cds--btn--icon-only",
			"cds--tooltip__trigger",
			"cds--tooltip--a11y",
			this.disabled ? "cds--btn--disabled" : "",
			this.tooltipPosition ? `cds--tooltip--${this.tooltipPosition}` : "",
			this.tooltipAlignment
				? `cds--tooltip--align-${this.tooltipAlignment}`
				: ""
		].join(" ");
	}

	/**
	 * Getter for checking if password is visible.
	 */
	get passwordIsVisible() {
		return this.inputType === "text";
	}

	/**
	 * Counter for generating unique labelInputID.
	 */
	static labelCounter = 0;
	/**
	 * Type for input field, either password or text.
	 */
	inputType: "password" | "text" = "password";

	/**
	 * ID for the input item associated with the label.
	 */
	@Input() labelInputID =
		"ibm-password-input-" + PasswordInputLabelComponent.labelCounter++;

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
	 * Alignment of the tooltip to the icon-only button.
	 */
	@Input() tooltipPosition: "top" | "right" | "bottom" | "left" = "bottom";

	/**
	 * Direction of the tooltip for icon-only buttons.
	 */
	@Input() tooltipAlignment: "start" | "center" | "end" = "center";

	/**
	 * Reference to the wrapper element.
	 * @ts-ignore
	 */
	@ViewChild("wrapper", { static: false })
	wrapper: ElementRef<HTMLDivElement>;

	/**
	 * Binding for applying class to host element.
	 */
	@HostBinding("class.cds--form-item") labelClass = true;

	/**
	 * Constructor for PasswordInputLabelComponent.
	 * @param changeDetectorRef - Reference to ChangeDetectorRef.
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef) { }

	/**
	 * Lifecycle hook called after the view has been initialized.
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

			const divElement = this.wrapper.nativeElement.querySelector("div");
			if (divElement) {
				if (divElement.id) {
					this.labelInputID = divElement.id;
					this.changeDetectorRef.detectChanges();
				}
				divElement.setAttribute("id", this.labelInputID);
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
	}
}
