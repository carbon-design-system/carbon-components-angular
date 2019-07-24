import {
	Component,
	Input,
	AfterContentInit,
	ElementRef,
	HostBinding,
	TemplateRef,
	ViewChild
} from "@angular/core";

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
 *
 * @export
 * @class Label
 * @implements {AfterContentInit}
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
		<div *ngIf="!skeleton" class="bx--form__helper-text">{{helperText}}</div>
		<div class="bx--text-input__field-wrapper" [attr.data-invalid]="(invalid ? true : null)" #wrapper>
			<ibm-icon-warning-filled16
				*ngIf="invalid"
				class="bx--text-input__invalid-icon bx--text-area__invalid-icon">
			</ibm-icon-warning-filled16>
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
	 * @static
	 * @memberof Label
	 */
	static labelCounter = 0;
	/**
	 * The id of the input item associated with the `Label`. This value is also used to associate the `Label` with
	 * its input counterpart through the 'for' attribute.
	 * @memberof Label
	 */
	labelInputID = "ibm-label-" + Label.labelCounter;

	/**
	 * State of the `Label` will determine the styles applied.
	 * @type {("success" | "warning" | "error" | "")}
	 * @memberof Label
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

	@ViewChild("wrapper") wrapper: ElementRef<HTMLDivElement>;

	@HostBinding("class.bx--form-item") labelClass = true;

	/**
	 * Creates an instance of Label.
	 * @memberof Label
	 */
	constructor() {
		Label.labelCounter++;
	}

	/**
	 * Sets the id on the input item associated with the `Label`.
	 * @memberof Label
	 */
	ngAfterContentInit() {
		this.wrapper.nativeElement.querySelector("input,textarea,div").setAttribute("id", this.labelInputID);
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
