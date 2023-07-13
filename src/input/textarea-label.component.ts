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

@Component({
	selector: "cds-textarea-label, ibm-textarea-label",
	template: `
		<label
			[for]="labelInputID"
			[attr.aria-label]="ariaLabel"
			class="cds--label"
			[ngClass]="{
				'cds--label--disabled': disabled,
				'cds--skeleton': skeleton
			}">
			<ng-template *ngIf="labelTemplate; else labelContent" [ngTemplateOutlet]="labelTemplate"></ng-template>
			<ng-template #labelContent>
				<ng-content></ng-content>
			</ng-template>
		</label>
		<div
			class="cds--text-area__wrapper"
			[ngClass]="{
				'cds--text-input__field-wrapper--warning': warn
			}"
			[attr.data-invalid]="(invalid ? true : null)"
			#wrapper>
			<svg
				*ngIf="!warn && invalid"
				cdsIcon="warning--filled"
				size="16"
				class="cds--text-area__invalid-icon">
			</svg>
			<svg
				*ngIf="!invalid && warn"
				cdsIcon="warning--alt--filled"
				size="16"
				class="cds--text-input__invalid-icon cds--text-input__invalid-icon--warning">
			</svg>
			<ng-template *ngIf="textAreaTemplate; else textAreaContent" [ngTemplateOutlet]="textAreaTemplate"></ng-template>
			<ng-template #textAreaContent>
				<ng-content select="textarea"></ng-content>
			</ng-template>
		</div>
		<div
			*ngIf="!skeleton && helperText && !invalid && !warn"
			class="cds--form__helper-text"
			[ngClass]="{'cds--form__helper-text--disabled': disabled}">
			<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
			<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
		</div>
		<div *ngIf="!warn && invalid" class="cds--form-requirement">
			<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
			<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
		</div>
		<div *ngIf="!invalid && warn" class="cds--form-requirement">
			<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
			<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
		</div>
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

	// @ts-ignore
	@ViewChild("wrapper", { static: false }) wrapper: ElementRef<HTMLDivElement>;

	// @ts-ignore
	@ContentChild(TextArea, { static: false }) textArea: TextArea;

	@HostBinding("class.cds--form-item") labelClass = true;

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
