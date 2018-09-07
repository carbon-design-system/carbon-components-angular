import {
	Component,
	TemplateRef,
	HostBinding
} from "@angular/core";
import { Dialog } from "./../dialog.component";

/**
 * Extend the `Dialog` component to create a tooltip for exposing content.
 * @export
 * @class Tooltip
 * @extends {Dialog}
 */
@Component({
	selector: "ibm-tooltip",
	template: `
		<div
			#dialog
			[id]="dialogConfig.compID"
			role="tooltip"
			tabindex="0"
			class="bx--tooltip bx--tooltip--shown">
			<span class="bx--tooltip__caret" aria-hidden="true"></span>
			<ng-template
					*ngIf="hasContentTemplate"
					[ngTemplateOutlet]="dialogConfig.content"
					[ngTemplateOutletContext]="{tooltip: this}">
			</ng-template>
			<p
				*ngIf="!hasContentTemplate">
				{{dialogConfig.content}}
			</p>
		</div>
		`
})
export class Tooltip extends Dialog {
	@HostBinding("style.display") style = "inline-block";
	/**
	 * Value is set to `true` if the `Tooltip` is to display a `TemplateRef` instead of a string.
	 * @type {boolean}
	 * @memberof Tooltip
	 */
	public hasContentTemplate = false;

	/**
	 * Check whether there is a template for the `Tooltip` content.
	 * @memberof Tooltip
	 */
	onDialogInit() {
		this.hasContentTemplate = this.dialogConfig.content instanceof TemplateRef;
	}

	/**
	 * Set the class of the `Tooltip`.
	 * @returns null
	 * @memberof Tooltip
	 */
	public getClass() {
		if (this.dialogConfig.type) {
			return `tooltip--${this.dialogConfig.type}-${this.placement}`;
		}
		return `tooltip--${this.placement}`;
	}
}
