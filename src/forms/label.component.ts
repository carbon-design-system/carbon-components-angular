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
	// tslint:disable:max-line-length
	template: `
	<label [for]="labelInputID" [ngClass]= "labelState ? 'valid--'+labelState : null">
		<ibm-static-icon *ngIf="labelState === 'success'" icon="success" size="sm"></ibm-static-icon>
		<ibm-static-icon *ngIf="labelState === 'warning'" icon="warning" size="sm"></ibm-static-icon>
		<ibm-static-icon *ngIf="labelState === 'error'" icon="error" size="sm"></ibm-static-icon>
		<ng-content></ng-content>
	</label>
	<ng-content select="input,textarea,div" ></ng-content>`
	// tslint:enable:max-line-length
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
