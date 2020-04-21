import {
	Component,
	Input,
	AfterContentInit,
	ElementRef,
	HostBinding,
	TemplateRef,
	ViewChild,
	ContentChild
} from "@angular/core";

import { TextArea } from "./text-area.directive";

/**
 * [See demo](../../?path=/story/input--label)
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
 *
 * <example-url>../../iframe.html?id=input--label</example-url>
 */
@Component({
	selector: "ibm-label",
	template: `
		<label
			[for]="labelInputID"
			class="bx--label"
			[ngClass]="{
				'bx--skeleton': skeleton
			}">
			<ng-content></ng-content>
		</label>
		<div *ngIf="!skeleton && helperText" class="bx--form__helper-text">{{helperText}}</div>
		<div [class]="wrapperClass" [attr.data-invalid]="(invalid ? true : null)" #wrapper>
			<ibm-icon-warning-filled
				size="16"
				*ngIf="invalid"
				class="bx--text-input__invalid-icon bx--text-area__invalid-icon">
			</ibm-icon-warning-filled>
			<ng-content select="input,textarea,div"></ng-content>
		</div>
		<div *ngIf="invalid" class="bx--form-requirement">
			<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
			<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
		</div>
	`
})
export class Label implements AfterContentInit {
	/**
	 * Used to build the id of the input item associated with the `Label`.
	 */
	static labelCounter = 0;
	/**
	 * The id of the input item associated with the `Label`. This value is also used to associate the `Label` with
	 * its input counterpart through the 'for' attribute.
	 */
	labelInputID = "ibm-label-" + Label.labelCounter;
	/**
	 * The class of the wrapper
	 */
	wrapperClass = "bx--text-input__field-wrapper";

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
	@Input() helperText: string;
	/**
	 * Sets the invalid text.
	 */
	@Input() invalidText: string | TemplateRef<any>;
	/**
	 * Set to `true` for an invalid label component.
	 */
	@Input() invalid = false;

	// @ts-ignore
	@ViewChild("wrapper", { static: false }) wrapper: ElementRef<HTMLDivElement>;

	// @ts-ignore
	@ContentChild(TextArea, { static: false }) textArea: TextArea;

	@HostBinding("class.bx--form-item") labelClass = true;

	/**
	 * Creates an instance of Label.
	 */
	constructor() {
		Label.labelCounter++;
	}

	/**
	 * Sets the id on the input item associated with the `Label`.
	 */
	ngAfterContentInit() {
		if (this.textArea) {
			this.wrapperClass = "bx--text-area__wrapper";
		}
		if (this.wrapper) {
			this.wrapper.nativeElement.querySelector("input,textarea,div").setAttribute("id", this.labelInputID);
		}
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
