import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	ElementRef,
	HostBinding,
	Input,
	TemplateRef,
	ViewChild
} from "@angular/core";

/**
 * Get started with importing the module:
 *
 * ```typescript
 * import { InputModule } from 'carbon-components-angular';
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
		<ng-container *ngIf="skeleton">
			<span class="cds--label cds--skeleton"></span>
			<div class="cds--text-input cds--skeleton"></div>
		</ng-container>
		<label
			*ngIf="!skeleton"
			[for]="labelInputID"
			[attr.aria-label]="ariaLabel"
			class="cds--label"
			[ngClass]="{
				'cds--label--disabled': disabled
			}">
			<ng-template *ngIf="labelTemplate; else labelContent" [ngTemplateOutlet]="labelTemplate"></ng-template>
			<ng-template #labelContent>
				<ng-content></ng-content>
			</ng-template>
		</label>
		<div *ngIf="!skeleton" class="cds--text-input__field-outer-wrapper">
			<div
				class="cds--text-input__field-wrapper"
				[ngClass]="{
					'cds--text-input__field-wrapper--warning': warn
				}"
				[attr.data-invalid]="(invalid ? true : null)"
				#wrapper>
				<svg
					*ngIf="invalid && !warn"
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
				<ng-template *ngIf="textInputTemplate; else textInputContent" [ngTemplateOutlet]="textInputTemplate"></ng-template>
				<ng-template #textInputContent>
					<ng-content select="[cdsText],[ibmText],input[type=text],div"></ng-content>
				</ng-template>

				<hr *ngIf="fluid" class="cds--text-input__divider" />

				<!-- Not a fan of duplicating these two divs here. But they need to be here for a fluid layout. -->
				<div *ngIf="fluid && invalid" class="cds--form-requirement">
					<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
					<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
				</div>
				<div *ngIf="fluid && !invalid && warn" class="cds--form-requirement">
					<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
					<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
				</div>
			</div>
			<div
				*ngIf="helperText && !invalid && !warn && !fluid"
				class="cds--form__helper-text"
				[ngClass]="{'cds--form__helper-text--disabled': disabled}">
				<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
				<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
			</div>
			<div *ngIf="!fluid && invalid" class="cds--form-requirement">
				<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
				<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
			</div>
			<div *ngIf="!fluid && !invalid && warn" class="cds--form-requirement">
				<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
				<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
			</div>
		</div>
	`
})
export class TextInputLabelComponent implements AfterViewInit {
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

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
