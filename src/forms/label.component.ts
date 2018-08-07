import { Component, Input, AfterContentInit, ElementRef } from "@angular/core";


/**
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
 * @export
 * @class LabelComponent
 * @implements {AfterContentInit}
 */
@Component({
	selector: "ibm-label",
	template: `
	<div class="bx--form-item">
		<label [for]="labelInputID" class="bx--label"><ng-content></ng-content></label>
		<ng-content select="input,textarea,div"></ng-content>
	</div>
	`,
	styleUrls: ["./../../node_modules/carbon-components/scss/components/form/_form.scss"]
})
export class LabelComponent implements AfterContentInit {
	/**
	 * Used to build the id of the input item associated with the `LabelComponent`.
	 * @static
	 * @memberof LabelComponent
	 */
	static labelCounter = 0;
	/**
	 * The id of the input item associated with the `LabelComponent`. This value is also used to associate the `LabelComponent` with
	 * its input counterpart through the 'for' attribute.
	 * @memberof LabelComponent
	 */
	labelInputID = "ibm-label-" + LabelComponent.labelCounter;

	/**
	 * State of the `LabelComponent` will determine the styles applied.
	 * @type {("success" | "warning" | "error" | "")}
	 * @memberof LabelComponent
	 */
	@Input() labelState: "success" | "warning" | "error" | "" = "";

	/**
	 * Creates an instance of LabelComponent.
	 * @param {ElementRef} elementRef
	 * @memberof LabelComponent
	 */
	constructor(private elementRef: ElementRef) {
		LabelComponent.labelCounter++;
	}

	/**
	 * Sets the id on the input item associated with the `LabelComponent`.
	 * @memberof LabelComponent
	 */
	ngAfterContentInit() {
		this.elementRef.nativeElement.querySelector("input,textarea,div").setAttribute("id", this.labelInputID);
	}
}
