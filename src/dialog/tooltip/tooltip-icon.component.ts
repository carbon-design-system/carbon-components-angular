import { Component, Input, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-tooltip-icon",
	template: `
		<button
			class="bx--tooltip__trigger"
			[ngClass]="{
				'bx--tooltip--icon__bottom' : placement === 'bottom',
				'bx--tooltip--icon__top' : placement === 'top'
			}"
			[attr.aria-label]="content">
			<ng-content></ng-content>
		</button>
	`
})
export class TooltipIcon {
	/**
	 * Body content for the `TooltipIcon`.
	 */
	@Input() content: string;
	/**
	 * The placement in which the `TooltipIcon` appears.
	 * Set to `"top"` to have it positioned above the icon
	 */
	@Input() placement: "bottom" | "top" = "bottom";

	@HostBinding("class.bx--tooltip-icon") className = true;
}
