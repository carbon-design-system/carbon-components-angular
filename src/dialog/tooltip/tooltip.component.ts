import {
	Component,
	TemplateRef,
	HostBinding,
	ElementRef,
	Optional
} from "@angular/core";
import { getFocusElementList } from "carbon-components-angular/common";

import { Dialog } from "../dialog.component";
import { position } from "@carbon/utils-position";
import { AnimationFrameService, ElementService } from "carbon-components-angular/utils";
import { closestAttr } from "carbon-components-angular/utils";

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
			[attr.data-floating-menu-direction]="placement"
			class="cds--tooltip cds--tooltip--shown">
			<span class="cds--tooltip__caret" aria-hidden="true"></span>
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
	/**
	 * Sets the role of the tooltip. If there's no focusable content we leave it as a `tooltip`,
	 * if there _is_ focusable content we switch to the interactive `dialog` role.
	 */
	public role = "tooltip";

	constructor(
		protected elementRef: ElementRef,
		protected elementService: ElementService,
		@Optional() protected animationFrameService: AnimationFrameService = null) {
		super(elementRef, elementService, animationFrameService);
	}

	/**
	 * Check whether there is a template for the `Tooltip` content.
	 */
	onDialogInit() {
		this.addGap["bottom"] = pos => {
			const adjustedOffset = this.getAdjustOffset();
			return position.addOffset(pos, 3 + adjustedOffset.top, 0 + adjustedOffset.left);
		};
		this.addGap["top"] = pos => {
			const adjustedOffset = this.getAdjustOffset();
			return position.addOffset(pos, -10 + adjustedOffset.top, 0 + adjustedOffset.left);
		};
		this.addGap["left"] = pos => {
			const adjustedOffset = this.getAdjustOffset();
			return position.addOffset(pos, -3 + adjustedOffset.top, -6 + adjustedOffset.left);
		};
		this.addGap["right"] = pos => {
			const adjustedOffset = this.getAdjustOffset();
			return position.addOffset(pos, -3 + adjustedOffset.top, 6 + adjustedOffset.left);
		};

		this.hasContentTemplate = this.dialogConfig.content instanceof TemplateRef;
	}

	getAdjustOffset() {
		const closestWithPos = closestAttr("position", ["relative", "fixed", "absolute"], this.elementRef.nativeElement.parentElement);
		const topPos = closestWithPos ? closestWithPos.getBoundingClientRect().top * -1 : 0;
		const leftPos = closestWithPos ? closestWithPos.getBoundingClientRect().left * -1 : 0;

		return {top: topPos, left: leftPos};
	}

	afterDialogViewInit() {
		const focusableElements = getFocusElementList(this.dialog.nativeElement);
		if (focusableElements.length > 0) {
			this.role = "dialog";
			focusableElements[0].focus();
		}
	}
}
