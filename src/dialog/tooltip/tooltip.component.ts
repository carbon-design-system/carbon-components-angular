import {
	Component,
	TemplateRef,
	HostBinding,
	HostListener,
	Input
} from "@angular/core";
import { getFocusElementList } from "./../../common/tab.service";

import { Dialog } from "./../dialog.component";

/**
 * Extend the `Dialog` component to create a tooltip for exposing content.
 */
@Component({
	selector: "ibm-tooltip",
	template: `
		<div
			#dialog
			[tabindex]="tabIndex"
			[id]="dialogConfig.compID"
			role="tooltip"
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
	 */
	public hasContentTemplate = false;

	@Input() tabIndex;
	/**
	 * Check whether there is a template for the `Tooltip` content.
	 */
	onDialogInit() {
		this.hasContentTemplate = this.dialogConfig.content instanceof TemplateRef;

		this.tabIndex = getFocusElementList(this.dialog.nativeElement).length > 0 ? 0 : -1;
	}
}
