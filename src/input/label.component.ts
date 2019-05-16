import {
	Component,
	Input,
	AfterContentInit,
	ElementRef,
	HostBinding
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
		<ng-content select="input,textarea,div"></ng-content>
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

	@HostBinding("class.bx--form-item") labelClass = true;

	/**
	 * Creates an instance of Label.
	 * @param {ElementRef} elementRef
	 * @memberof Label
	 */
	constructor(protected elementRef: ElementRef) {
		Label.labelCounter++;
	}

	/**
	 * Sets the id on the input item associated with the `Label`.
	 * @memberof Label
	 */
	ngAfterContentInit() {
		this.elementRef.nativeElement.querySelector("input,textarea,div").setAttribute("id", this.labelInputID);
	}
}
