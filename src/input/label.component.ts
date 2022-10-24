import {
	Component,
	Input,
	AfterViewInit,
	ElementRef,
	HostBinding,
	TemplateRef,
	ViewChild,
	ContentChild,
	AfterContentInit
} from "@angular/core";

import { TextArea } from "./text-area.directive";

/**
 * [See demo](../../?path=/story/components-input--label)
 *
 * ```html
 * <ibm-label labelState="success">
 * 	<label label>Field with success</label>
 * 	<input type="text" class="input-field">
 * </ibm-label>
 *
 * <ibm-label labelState="warning">
 * 	<label label>Field with warning</label>
 * 	<input type="text" class="input-field">
 * </ibm-label>
 *
 * <ibm-label labelState="error">
 * 	<label label>Field with error</label>
 * 	<input type="text" class="input-field">
 * </ibm-label>
 * ```
 */
@Component({
	selector: "ibm-label",
	template: `
		<div *ngIf="textArea; else label" class="cds--text-area__label-wrapper">
			<ng-container *ngTemplateOutlet="label"></ng-container>
			<div class="cds--label" *ngIf="showCounter && maxLength">{{currentLength}}/{{maxLength}}</div>
		</div>
		<ng-template #label>
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
		</ng-template>
		<div
			[class]="wrapperClass"
			[ngClass]="{
				'cds--text-input__field-wrapper--warning': warn
			}"
			[attr.data-invalid]="(invalid ? true : null)"
			#wrapper>
			<svg
				*ngIf="!warn && invalid"
				ibmIcon="warning--filled"
				size="16"
				[ngClass]="{
					'cds--text-input__invalid-icon': !textArea,
					'cds--text-area__invalid-icon': textArea
				}">
			</svg>
			<svg
				*ngIf="!invalid && warn"
				ibmIcon="warning--alt--filled"
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
	@Input() labelInputID = `ibm-label-${Label.labelCounter++}`;
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
	/**
	 * Max character counter for `textarea`
	 * This value should also be passed to the `textarea` element via maxlength attribute
	 */
	@Input() maxLength: number;
	/**
	 * Label component acts as a wrapper, currentLength will be used as a numerator
	 * to indicate the number of characters remaining.
	 */
	@Input() currentLength = 0;
	/**
	 * Shows character counter, only works when textarea is used.
	 * **Note**: Toggling showCounter will cause data loss. You're responsible for keeping track of the input value.
	 */
	@Input() showCounter = false;

	@ViewChild("wrapper") wrapper: ElementRef<HTMLDivElement>;

	@ContentChild(TextArea, { read: ElementRef }) textArea: ElementRef;

	@HostBinding("class.cds--form-item") labelClass = true;

	/**
	 * Update wrapper class if a textarea is hosted.
	 */
	ngAfterContentInit() {
		if (this.textArea) {
			this.wrapperClass = "cds--text-area__wrapper";
			console.log(this.textArea);
			console.log(this.currentLength);
		}
	}

	/**
	 * Sets the id on the input item associated with the `Label`.
	 */
	ngAfterViewInit() {
		if (this.wrapper) {
			const inputElement = this.wrapper.nativeElement.querySelector("input,textarea,div");
			if (inputElement) {
				inputElement.setAttribute("id", this.labelInputID);
			}
		}
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
