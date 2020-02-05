import { Component, Input, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-tooltip-icon",
	template: `
		<button
			type="button"
			class="bx--tooltip__trigger bx--tooltip--a11y"
			[ngClass]="{
				'bx--tooltip--bottom' : placement === 'bottom',
				'bx--tooltip--top' : placement === 'top',
				'bx--tooltip--left' : placement === 'left',
				'bx--tooltip--right' : placement === 'right',
				'bx--tooltip--align-start' : alignment === 'start',
				'bx--tooltip--align-center' : alignment === 'center',
				'bx--tooltip--align-end' : alignment === 'end'
			}">
			<span class="bx--assistive-text">{{content}}</span>
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

	@HostBinding("class.bx--tooltip-icon") className = true;
}
