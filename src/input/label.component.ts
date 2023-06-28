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

/**
 * [See demo](../../?path=/story/components-input--label)
 *
 * To prevent attribute drilling, use `ibm-text-label` or `ibm-textarea-label` components
 *
 * ```html
 * <cds-label>
 * 	Label
 * 	<input cdsText type="text" class="input-field">
 * </cds-label>
 * ```
 */
@Component({
	selector: "cds-label, ibm-label",
	template: `
		<ng-template #inputContentTemplate>
			<ng-content select="input,textarea,div"></ng-content>
		</ng-template>

		<ng-template #labelContentTemplate>
			<ng-content></ng-content>
		</ng-template>

		<ng-container [ngSwitch]="type">
			<ng-container *ngSwitchCase="'TextArea'">
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
			</ng-container>
			<ng-container *ngSwitchCase="'TextInput'">
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
			</ng-container>
			<ng-container *ngSwitchDefault>
				<ng-template [ngTemplateOutlet]="default"></ng-template>
			</ng-container>
		</ng-container>

		<ng-template #default>
			<label
				[for]="labelInputID"
				[attr.aria-label]="ariaLabel"
				class="cds--label"
				[ngClass]="{
					'cds--label--disabled': disabled,
					'cds--skeleton': skeleton
				}">
				<ng-template [ngTemplateOutlet]="labelContentTemplate"></ng-template>
			</label>
			<div
				class="cds--text-input__field-wrapper"
				[ngClass]="{
					'cds--text-input__field-wrapper--warning': warn
				}"
				[attr.data-invalid]="(invalid ? true : null)"
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
				<ng-template [ngTemplateOutlet]="inputContentTemplate"></ng-template>
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
		</ng-template>
	`
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

	// @ts-ignore
	@ContentChild(TextInput, { static: false }) textInput: TextInput;

	@HostBinding("class.cds--form-item") get labelClass() {
		return this.type === undefined;
	}

	type: "TextArea" | "TextInput";

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
