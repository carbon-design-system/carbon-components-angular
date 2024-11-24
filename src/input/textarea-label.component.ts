import {
	Component,
	Input,
	AfterViewInit,
	ElementRef,
	HostBinding,
	TemplateRef,
	ViewChild,
	ContentChild,
	ChangeDetectorRef
} from "@angular/core";

import { TextArea } from "./text-area.directive";

/**
 * Get started with importing the module:
 *
 * ```typescript
 * import { InputModule } from 'carbon-components-angular';
 * ```
 *
 * ```html
 * <cds-textarea-label>
 * 	Label
 * 	<textarea cdsTextArea class="textarea-field">
 * </cds-textarea-label>
 * ```
 *
 * [See demo](../../?path=/story/components-input-text-area--basic)
 */
@Component({
	selector: "cds-textarea-label, ibm-textarea-label",
	template: `
		@if (skeleton) {
			<span class="cds--label cds--skeleton"></span>
			<div class="cds--text-area cds--skeleton"></div>
		} @else {
			<div class="cds--text-area__label-wrapper">
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
			</div>
			<div
				class="cds--text-area__wrapper"
				[ngClass]="{
					'cds--text-area__wrapper--warn': warn
				}"
				[attr.data-invalid]="(invalid ? true : null)"
				#wrapper>
				@if(!fluid) {
					@if (invalid) {
						<svg
							cdsIcon="warning--filled"
							size="16"
							class="cds--text-area__invalid-icon">
						</svg>
					} @else if (warn) {
						<svg
							cdsIcon="warning--alt--filled"
							size="16"
							class="cds--text-area__invalid-icon cds--text-area__invalid-icon--warning">
						</svg>
					}
				}
				@if (textAreaTemplate) {
					<ng-template [ngTemplateOutlet]="textAreaTemplate" />
				} @else {
					<ng-content select="[cdsTextArea],[ibmTextArea],textarea" />
				}

				@if (fluid) {
					<hr class="cds--text-area__divider" />
					@if (invalid) {
						<div class="cds--form-requirement">
							@if (isTemplate(invalidText)) {
								<ng-template [ngTemplateOutlet]="invalidText" />
							} @else {
								{{ invalidText }}
							}
							<svg
								cdsIcon="warning--filled"
								size="16"
								class="cds--text-area__invalid-icon">
							</svg>
						</div>
					} @else if (warn) {
						<div class="cds--form-requirement">
							@if (isTemplate(warnText)) {
								<ng-template [ngTemplateOutlet]="warnText" />
							} @else {
								{{ warnText }}
							}
							<svg
								cdsIcon="warning--alt--filled"
								size="16"
								class="cds--text-area__invalid-icon cds--text-area__invalid-icon--warning">
							</svg>
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
				} @else if(helperText) {
					<div class="cds--form__helper-text" [ngClass]="{'cds--form__helper-text--disabled': disabled}">
						@if (isTemplate(helperText)) {
							<ng-template [ngTemplateOutlet]="helperText" />
						} @else {
							{{ helperText }}
						}
					</div>
				}
			}
		}
	`
})
export class TextareaLabelComponent implements AfterViewInit {
	/**
	 * Used to build the id of the input item associated with the `Label`.
	 */
	static labelCounter = 0;
	/**
	 * The id of the input item associated with the `Label`. This value is also used to associate the `Label` with
	 * its input counterpart through the 'for' attribute.
	*/
	@Input() labelInputID = "ibm-textarea-" + TextareaLabelComponent.labelCounter;

	/**
	 * Set to `true` for a disabled label.
	 */
	@Input() disabled = false;
	/**
	 * Set to `true` for a loading label.
	 */
	@Input() skeleton = false;

	/**
	 * Helper input property for ease of migration
	 * Since we cannot pass ng-content down easily from label component, we will accept the templates
	 */
	@Input() labelTemplate: TemplateRef<any>;
	@Input() textAreaTemplate: TemplateRef<any>;
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
	 * Experimental: enable fluid state
	 */
	@Input() fluid = false;

	// @ts-ignore
	@ViewChild("wrapper", { static: false }) wrapper: ElementRef<HTMLDivElement>;

	// @ts-ignore
	@ContentChild(TextArea, { static: false }) textArea: TextArea;

	@HostBinding("class.cds--form-item") labelClass = true;

	@HostBinding("class.cds--text-area__wrapper--readonly") get isReadonly() {
		return this.wrapper?.nativeElement.querySelector("textarea")?.readOnly ?? false;
	}

	@HostBinding("class.cds--text-area--fluid") get fluidClass() {
		return this.fluid && !this.skeleton;
	}

	@HostBinding("class.cds--text-area--fluid__skeleton") get fluidSkeletonClass() {
		return this.fluid && this.skeleton;
	}

	/**
	 * Creates an instance of Label.
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef) {}

	/**
	 * Sets the id on the input item associated with the `Label`.
	 */
	ngAfterViewInit() {
		if (this.wrapper) {
			// Prioritize setting id to `textarea` over div
			const inputElement = this.wrapper.nativeElement.querySelector("textarea");
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
