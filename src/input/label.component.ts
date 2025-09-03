import {
	Component,
	Input,
	AfterViewInit,
	ElementRef,
	HostBinding,
	TemplateRef,
	ViewChild,
	ContentChild,
	AfterContentInit,
	ChangeDetectorRef
} from "@angular/core";

import { TextArea } from "./text-area.directive";
import { TextInput } from "./input.directive";
import { PasswordInput } from "./password.directive";
import { TextareaLabelComponent } from "./textarea-label.component";
import { TextInputLabelComponent } from "./text-input-label.component";
import { PasswordInputLabelComponent } from "./password-input-label.component";
import { NgTemplateOutlet, NgClass } from "@angular/common";
import { IconDirective } from "carbon-components-angular/icon";

/**
 * Get started with importing the component:
 *
 * ```typescript
 * import { Label } from 'carbon-components-angular';
 * ```
 *
 * To prevent attribute drilling, use `ibm-text-label` or `ibm-textarea-label` components
 *
 * ```html
 * <cds-label>
 * 	Label
 * 	<input cdsText type="text" class="input-field">
 * </cds-label>
 * ```
 *
 * [See demo](../../?path=/story/components-input--basic)
 */
@Component({
	selector: "cds-label, ibm-label",
	template: `
		<ng-template #inputContentTemplate>
			<ng-content select="input,textarea,div" />
		</ng-template>

		<ng-template #labelContentTemplate>
			<ng-content />
		</ng-template>


		@switch (type) {
			@case ('TextArea') {
				<cds-textarea-label
					[labelInputID]="labelInputID"
					[disabled]="disabled"
					[skeleton]="skeleton"
					[helperText]="helperText"
					[invalid]="invalid"
					[invalidText]="invalidText"
					[warn]="warn"
					[warnText]="warnText"
					[ariaLabel]="ariaLabel"
					[labelTemplate]="labelContentTemplate"
					[textAreaTemplate]="inputContentTemplate">
				</cds-textarea-label>
			}
			@case ('TextInput') {
				<cds-text-label
					[labelInputID]="labelInputID"
					[disabled]="disabled"
					[skeleton]="skeleton"
					[helperText]="helperText"
					[invalid]="invalid"
					[invalidText]="invalidText"
					[warn]="warn"
					[warnText]="warnText"
					[ariaLabel]="ariaLabel"
					[labelTemplate]="labelContentTemplate"
					[textInputTemplate]="inputContentTemplate">
				</cds-text-label>
			}
			@case ('PasswordInput') {

				<cds-password-label
					[labelInputID]="labelInputID"
					[disabled]="disabled"
					[skeleton]="skeleton"
					[helperText]="helperText"
					[invalid]="invalid"
					[invalidText]="invalidText"
					[warn]="warn"
					[warnText]="warnText"
					[ariaLabel]="ariaLabel"
					[labelTemplate]="labelContentTemplate"
					[passwordInputTemplate]="inputContentTemplate">
				</cds-password-label>
			}
			@default {
				<ng-template [ngTemplateOutlet]="default" />
			}
		}

		<ng-template #default>
			<label
				[for]="labelInputID"
				[attr.aria-label]="ariaLabel"
				class="cds--label"
				[ngClass]="{
					'cds--label--disabled': disabled,
					'cds--skeleton': skeleton
				}">
				<ng-template [ngTemplateOutlet]="labelContentTemplate" />
			</label>
			<div
				class="cds--text-input__field-wrapper"
				[ngClass]="{
					'cds--text-input__field-wrapper--warning': warn
				}"
				[attr.data-invalid]="(invalid ? true : null)"
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
				<ng-template [ngTemplateOutlet]="inputContentTemplate" />
			</div>
			@if (invalid) {
				<div class="cds--form-requirement">
					@if (isTemplate(invalidText)) {
						<ng-template [ngTemplateOutlet]="invalidText" />
					} @else {
						{{invalidText}}
					}
				</div>
			} @else if (warn) {
				<div class="cds--form-requirement">
					@if (isTemplate(warnText)) {
						<ng-template [ngTemplateOutlet]="warnText" />
					} @else {
						{{warnText}}
					}
				</div>
			} @else if(helperText && !skeleton) {
				<div
					class="cds--form__helper-text"
					[ngClass]="{'cds--form__helper-text--disabled': disabled}">
					@if (isTemplate(helperText)) {
						<ng-template [ngTemplateOutlet]="helperText" />
					} @else {
						{{helperText}}
					}
				</div>
			}
		</ng-template>
	`,
	standalone: true,
	imports: [TextareaLabelComponent, TextInputLabelComponent, PasswordInputLabelComponent, NgTemplateOutlet, NgClass, IconDirective]
})
export class Label implements AfterContentInit, AfterViewInit {
	/**
	 * Used to build the id of the input item associated with the `Label`.
	 */
	static labelCounter = 0;
	/**
	 * The id of the input item associated with the `Label`. This value is also used to associate the `Label` with
	 * its input counterpart through the 'for' attribute.
	 */
	@Input() labelInputID = `cds-label-${Label.labelCounter++}`;
	/**
	 * Set to `true` for disabled state.
	 */
	@Input() disabled = false;
	/**
	 * Set to `true` for a loading label.
	 */
	@Input() skeleton = false;
	/**
	 * Optional helper text that appears under the label.
	 */
	@Input() helperText: string | TemplateRef<any>;
	/**
	 * Sets the invalid text.
	 */
	@Input() invalidText: string | TemplateRef<any>;
	/**
	 * Set to `true` for an invalid label component.
	 */
	@Input() invalid = false;
	/**
	 * Set to `true` to show a warning (contents set by warningText)
	 */
	@Input() warn = false;
	/**
	 * Sets the warning text
	 */
	@Input() warnText: string | TemplateRef<any>;
	/**
	 * Set the arialabel for label
	 */
	@Input() ariaLabel: string;

	@ViewChild("wrapper") wrapper: ElementRef<HTMLDivElement>;

	@ContentChild(TextArea) textArea: TextArea;

	@ContentChild(TextInput, { static: false }) textInput: TextInput;

	@ContentChild(PasswordInput, { static: false }) passwordInput: PasswordInput;

	@HostBinding("class.cds--form-item") get labelClass() {
		return this.type === undefined;
	}

	type: "TextArea" | "TextInput" | "PasswordInput";

	/**
	 * Creates an instance of Label.
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef) {}

	/**
	 * Update wrapper class if a textarea is hosted.
	 */
	ngAfterContentInit() {
		if (this.textArea) {
			this.type = "TextArea";
		} else if (this.textInput) {
			this.type = "TextInput";
		} else if (this.passwordInput) {
			this.type = "PasswordInput";
		}
	}

	/**
	 * Sets the id on the input item associated with the `Label`.
	 */
	ngAfterViewInit() {
		// Will only be called when `default` template is being used
		if (this.wrapper) {
			// Prioritize setting id to `input` & `textarea` over div
			const inputElement = this.wrapper.nativeElement.querySelector("input,textarea");
			if (inputElement) {
				// avoid overriding ids already set by the user reuse it instead
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

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
