import {
	Component,
	Input,
	AfterViewInit,
	ElementRef,
	HostBinding,
	TemplateRef,
	ViewChild,
	ContentChild,
	ChangeDetectorRef,
	AfterContentChecked
} from "@angular/core";

import { TextArea } from "./text-area.directive";
import { TextInput } from "./input.directive";

/**
 * [See demo](../../?path=/story/components-input--label)
 *
 * <example-url>../../iframe.html?id=components-input--label</example-url>
 */
@Component({
	selector: "ibm-label",
	template: `
		<div
			[ngClass]="{
				'bx--text-input__label-helper-wrapper': isInline
			}">
			<label
				[for]="labelInputID"
				[attr.aria-label]="ariaLabel"
				class="bx--label"
				[ngClass]="{
					'bx--label--disabled': disabled,
					'bx--skeleton': skeleton,
					'bx--label--inline': isInline,
					'bx--label--inline--sm': (isInline && size === 'sm'),
					'bx--label--inline--md': (isInline && size === 'md'),
					'bx--label--inline--xl': (isInline && size === 'xl')
				}">
				<ng-content></ng-content>
			</label>
			<ng-template *ngIf="isInline"
				[ngTemplateOutlet]="helperTextTemplate">
			</ng-template>
		</div>
		<div class="bx--text-input__field-outer-wrapper"
			[ngClass]="{
			'bx--text-input__field-outer-wrapper--inline': isInline
			}">
			<div
				[class]="wrapperClass"
				[ngClass]="{
					'bx--text-input__field-wrapper--warning': warn
				}"
				[attr.data-invalid]="(invalid ? true : null)"
				#wrapper>
				<svg
					*ngIf="!warn && invalid && !isReadonly"
					ibmIcon="warning--filled"
					size="16"
					[ngClass]="{
						'bx--text-input__invalid-icon': !textArea,
						'bx--text-area__invalid-icon': textArea
					}">
				</svg>
				<svg
					*ngIf="!invalid && warn && !isReadonly"
					ibmIcon="warning--alt--filled"
					size="16"
					class="bx--text-input__invalid-icon bx--text-input__invalid-icon--warning">
				</svg>
				<svg
					*ngIf="isReadonly"
					ibmIcon="edit--off"
					size="16"
					class="bx--text-input__readonly-icon">
				</svg>
				<ng-content select="input,textarea,div"></ng-content>
			</div>
			<ng-container *ngIf="!isInline"
				[ngTemplateOutlet]="helperTextTemplate">
			</ng-container>
		</div>

		<ng-template #helperTextTemplate>
			<div *ngIf="!skeleton && helperText && ((!invalid && !warn) || isInline)"
				class="bx--form__helper-text"
				[ngClass]="{
					'bx--form__helper-text--disabled': disabled,
					'bx--form__helper-text--inline': inline
				}">
				<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
				<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
			</div>
			<div *ngIf="!isInline && !warn && invalid" class="bx--form-requirement">
				<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
				<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
			</div>
			<div *ngIf="!isInline && !invalid && warn" class="bx--form-requirement">
				<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
				<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
			</div>
		<ng-template>
	`
})
export class Label implements AfterContentChecked, AfterViewInit {
	/**
	 * Used to build the id of the input item associated with the `Label`.
	 */
	static labelCounter = 0;
	/**
	 * The class of the wrapper
	 */
	wrapperClass = "bx--text-input__field-wrapper";
	/**
	 * The id of the input item associated with the `Label`. This value is also used to associate the `Label` with
	 * its input counterpart through the 'for' attribute.
	*/
	@Input() labelInputID = "ibm-label-" + Label.labelCounter;

	/**
	 * State of the `Label` will determine the styles applied.
	 * @deprecated
	 */
	@Input() labelState: "success" | "warning" | "error" | "" = "";
	/**
	 * Set the label size similar to the input size.
	 */
	@Input() size: "sm" | "md" | "xl" = "md";
	/**
	 * Set to `true` for a disabled label.
	 */
	@Input() disabled = false;
	/**
	* Set to `true` for a read-only label.
	*/
	@Input() set readonly(enable: boolean) {
		this._readonly = enable;
	}
	get readonly(): boolean {
		return this._readonly;
	}
	@HostBinding("class.bx--text-input-wrapper--readonly") get isReadonly(): boolean {
		return this._readonly && this.textInput != undefined;
	}
	/**
	 * Set to `true` for an isInline style label.
	 */
	@Input() set inline(enable: boolean) {
		this._inline = enable;
	}
	get inline(): boolean {
		return this._inline;
	}
	@HostBinding("class.bx--text-input-wrapper--inline") get isInline(): boolean {
		return this._inline && this.textInput != undefined;
	}
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

	// @ts-ignore
	@ViewChild("wrapper", { static: false }) wrapper: ElementRef<HTMLDivElement>;

	// @ts-ignore
	@ContentChild(TextArea, { static: false }) textArea: TextArea;

	// @ts-ignore
	@ContentChild(TextInput, { static: false }) textInput: TextInput;

	@HostBinding("class.bx--form-item") labelClass = true;
	@HostBinding("class.bx--text-input-wrapper") get inputWrapperClass(): boolean {
		return this.textInput != undefined;
	}

	protected _readonly = false;
	protected _inline = false;

	/**
	 * Creates an instance of Label.
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef) {
		Label.labelCounter++;
	}

	/**
	 * Update wrapper class if a textarea is hosted.
	 */
	ngAfterContentChecked() {
		if (this.textArea != undefined && this.wrapperClass !== "bx--text-area__wrapper") {
			this.wrapperClass = "bx--text-area__wrapper";
		} else if (this.textInput != undefined && this.wrapperClass !== "bx--text-input__field-wrapper") {
			this.wrapperClass = "bx--text-input__field-wrapper";
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
