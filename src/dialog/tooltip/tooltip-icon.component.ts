import { Component, Input, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-tooltip-icon",
	template: `
		<button
			type="button"
			class="cds--tooltip__trigger cds--tooltip--a11y"
			[ngClass]="{
				'cds--tooltip--bottom' : placement === 'bottom',
				'cds--tooltip--top' : placement === 'top',
				'cds--tooltip--left' : placement === 'left',
				'cds--tooltip--right' : placement === 'right',
				'cds--tooltip--align-start' : alignment === 'start',
				'cds--tooltip--align-center' : alignment === 'center',
				'cds--tooltip--align-end' : alignment === 'end'
			}">
			<span class="cds--assistive-text">{{content}}</span>
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
	@Input() placement: "bottom" | "top" | "left" | "right" = "bottom";

	@Input() alignment: "start" | "center" | "end" = "start";

	@HostBinding("class.cds--tooltip-icon") className = true;
}
