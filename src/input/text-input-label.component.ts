import {
	AfterContentInit,
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	HostBinding,
	Input,
	TemplateRef,
	ViewChild
} from "@angular/core";
import { NgClass, NgTemplateOutlet } from "@angular/common";
import { IconDirective } from "carbon-components-angular/icon";

/**
 * Get started with importing the component and directive:
 *
 * ```typescript
 * import { TextInput, TextInputLabelComponent, } from 'carbon-components-angular';
 * ```
 *
 * ```html
 * <cds-text-label>
 * 	Label
 * 	<input cdsText type="text" class="input-field">
 * </cds-text-label>
 * ```
 *
 * [See demo](../../?path=/story/components-input--basic)
 */
@Component({
	selector: "cds-text-label, ibm-text-label",
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
					[attr.data-invalid]="(invalid ? true : null)"
					#wrapper>
					@if (invalid) {
						<svg
							cdsIcon="warning--filled"
							size="16"
							class="cds--text-input__invalid-icon">
						</svg>
					} @else if(warn) {
						<svg
							cdsIcon="warning--alt--filled"
							size="16"
							class="cds--text-input__invalid-icon cds--text-input__invalid-icon--warning">
						</svg>
					}
					@if (textInputTemplate) {
						<ng-template [ngTemplateOutlet]="textInputTemplate" />
					} @else {
						<ng-content select="[cdsText],[ibmText],input[type=text],div" />
					}
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
					} @else if(helperText) {
						<div
							class="cds--form__helper-text"
							[ngClass]="{'cds--form__helper-text--disabled': disabled}">
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
	imports: [NgClass, NgTemplateOutlet, IconDirective]
})
export class TextInputLabelComponent implements AfterViewInit, AfterContentInit {
	/**
	 * Used to build the id of the input item associated with the `Label`.
	 */
	static labelCounter = 0;
	/**
	 * The id of the input item associated with the `Label`. This value is also used to associate the `Label` with
	 * its input counterpart through the 'for' attribute.
	*/
	@Input() labelInputID = "ibm-text-input-" + TextInputLabelComponent.labelCounter++;

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
	@Input() textInputTemplate: TemplateRef<any>;
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

	@HostBinding("class.cds--form-item") labelClass = true;

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
	 * Creates an instance of Label.
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef) {}

	/**
	 * Sets the id on the input item associated with the `Label`.
	 */
	ngAfterViewInit() {
		if (this.wrapper) {
			// Prioritize setting id to `input` over div
			const inputElement = this.wrapper.nativeElement.querySelector("input");
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

	ngAfterContentInit() {
		this.changeDetectorRef.detectChanges();
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
