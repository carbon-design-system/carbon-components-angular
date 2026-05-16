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
	ChangeDetectorRef,
	inject
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
					[hideLabel]="hideLabel"
					[enableCounter]="enableCounter"
					[maxCount]="maxCount"
					[counterMode]="counterMode"
					[decorator]="decorator"
					[labelTemplate]="labelContentTemplate"
					[textAreaTemplate]="inputContentTemplate" />
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
					[hideLabel]="hideLabel"
					[inline]="inline"
					[size]="size"
					[enableCounter]="enableCounter"
					[maxCount]="maxCount"
					[decorator]="decorator"
					[labelTemplate]="labelContentTemplate"
					[textInputTemplate]="inputContentTemplate" />
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
					[hideLabel]="hideLabel"
					[inline]="inline"
					[labelTemplate]="labelContentTemplate"
					[passwordInputTemplate]="inputContentTemplate" />
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
	imports: [
		NgTemplateOutlet,
		NgClass,
		TextareaLabelComponent,
		TextInputLabelComponent,
		PasswordInputLabelComponent,
		IconDirective
	]
})
export class Label implements AfterContentInit, AfterViewInit {
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

	/**
	 * Set to `true` to hide the label visually, but keep accessible to
	 * screen readers.
	 */
	@Input() hideLabel = false;

	/**
	 * Set to `true` to render the label and field side-by-side instead of stacked.
	 * Applies to `TextInput` and `PasswordInput` label variants.
	 */
	@Input() inline = false;

	/**
	 * The render size for the `TextInput`. Used to compute INLINE label size
	 * variant classes.
	 */
	@Input() size: "sm" | "md" | "lg" = "md";

	/**
	 * Set to `true` (`maxCount` must be set) to displays a live character/word
	 * counter alongside the label.
	 */
	@Input() enableCounter = false;

	/**
	 * Maximum number of characters (or words) allowed. Required for the
	 * counter to display.
	 */
	@Input() maxCount: number;

	/**
	 * Determines whether the `TextArea` counter counts characters or words.
	 */
	@Input() counterMode: "character" | "word" = "character";

	/**
	 * **Experimental**: Optional decorator (e.g. AI label).
	 */
	@Input() decorator: TemplateRef<any>;

	@ViewChild("wrapper") wrapper: ElementRef<HTMLDivElement>;

	@ContentChild(TextArea) textArea: TextArea;

	@ContentChild(TextInput, { static: false }) textInput: TextInput;

	@ContentChild(PasswordInput, { static: false }) passwordInput: PasswordInput;

	@HostBinding("class.cds--form-item") get labelClass() {
		return this.type === undefined;
	}

	type: "TextArea" | "TextInput" | "PasswordInput";

	protected changeDetectorRef = inject(ChangeDetectorRef);

	/** Inserted by Angular inject() migration for backwards compatibility */
	// eslint-disable-next-line @angular-eslint/prefer-inject -- backwards-compatible DI overload until next major
	constructor(...args: unknown[]);

	/**
	 * Creates an instance of Label.
	 */
	constructor() {}

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
