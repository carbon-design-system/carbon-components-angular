import {
	Component,
	TemplateRef,
	HostBinding,
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
			[id]="dialogConfig.compID"
			[attr.role]="role"
			[ngClass]="{
				'bx--tooltip bx--tooltip--shown' : !dialogConfig.definition && !dialogConfig.icon,
				'bx--tooltip--definition__bottom' : dialogConfig.definition && dialogConfig.placement === 'bottom',
				'bx--tooltip--definition__top' : dialogConfig.definition && dialogConfig.placement === 'top'
			}">
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
		`,
		styles: [`
			.bx--tooltip--definition__bottom,
			.bx--tooltip--definition__top {
				display: block;
				margin-top: 0;
			}
		`]
})
export class Tooltip extends Dialog {
	@HostBinding("style.display") style = "inline-block";
	/**
	 * Value is set to `true` if the `Tooltip` is to display a `TemplateRef` instead of a string.
	 */
	public hasContentTemplate = false;
	/**
	 * Sets the role of the tooltip. If there's no focusable content we leave it as a `tooltip`,
	 * if there _is_ focusable content we switch to the interactive `dialog` role.
	 */
	public role = "tooltip";
	/**
	 * Check whether there is a template for the `Tooltip` content.
	 */
	onDialogInit() {
		this.hasContentTemplate = this.dialogConfig.content instanceof TemplateRef;
	}

	afterDialogViewInit() {
		const focusableElements = getFocusElementList(this.dialog.nativeElement);
		if (focusableElements.length > 0) {
			this.role = "dialog";
			focusableElements[0].focus();
		}
	}
}
