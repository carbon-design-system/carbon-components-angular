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

/**
 * [See demo](../../?path=/story/components-input--label)
 *
 * ```html
 * <cds-label labelState="success">
 * 	<label label>Field with success</label>
 * 	<input type="text" class="input-field">
 * </cds-label>
 *
 * <cds-label labelState="warning">
 * 	<label label>Field with warning</label>
 * 	<input type="text" class="input-field">
 * </cds-label>
 *
 * <cds-label labelState="error">
 * 	<label label>Field with error</label>
 * 	<input type="text" class="input-field">
 * </cds-label>
 * ```
 */
@Component({
	selector: "cds-label, ibm-label",
	template: `
		<label
			[for]="labelInputID"
			[attr.aria-label]="ariaLabel"
			class="cds--label"
			[ngClass]="{
				'cds--skeleton': skeleton,
				'cds--label--disabled': disabled && !skeleton
			}">
			<ng-content></ng-content>
		</label>
		<div
			[class]="wrapperClass"
			[ngClass]="{
				'cds--text-input__field-wrapper--warning': warn
			}"
			[attr.data-invalid]="(invalid ? true : null)"
			#wrapper>
			<svg
				*ngIf="!warn && invalid"
				cdsIcon="warning--filled"
				size="16"
				[ngClass]="{
					'cds--text-input__invalid-icon': !textArea,
					'cds--text-area__invalid-icon': textArea
				}">
			</svg>
			<svg
				*ngIf="!invalid && warn"
				cdsIcon="warning--alt--filled"
				size="16"
				class="cds--text-input__invalid-icon cds--text-input__invalid-icon--warning">
			</svg>
			<ng-content select="input,textarea,div"></ng-content>
		</div>
		<div
			*ngIf="!skeleton && helperText && !invalid && !warn"
			class="cds--form__helper-text"
			[ngClass]="{
				'cds--form__helper-text--disabled': disabled
			}">
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
export class Label implements AfterContentInit, AfterViewInit {
	/**
	 * Used to build the id of the input item associated with the `Label`.
	 */
	static labelCounter = 0;
	/**
	 * The class of the wrapper
	 */
	wrapperClass = "cds--text-input__field-wrapper";
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
	 * State of the `Label` will determine the styles applied.
	 */
	@Input() labelState: "success" | "warning" | "error" | "" = "";
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

	@HostBinding("class.cds--form-item") labelClass = true;

	/**
	 * Creates an instance of Label.
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef) {}

	/**
	 * Update wrapper class if a textarea is hosted.
	 */
	ngAfterContentInit() {
		if (this.textArea) {
			this.wrapperClass = "cds--text-area__wrapper";
		}
	}

	/**
	 * Sets the id on the input item associated with the `Label`.
	 */
	ngAfterViewInit() {
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
