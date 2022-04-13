import { Component, Input, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-tooltip-definition",
	template: `
		<button
			type="button"
			[ngClass]="{
				'cds--tooltip--bottom' : placement === 'bottom',
				'cds--tooltip--top' : placement === 'top',
				'cds--tooltip--align-start' : alignment === 'start',
				'cds--tooltip--align-center' : alignment === 'center',
				'cds--tooltip--align-end' : alignment === 'end'
			}"
			class="cds--tooltip__trigger cds--tooltip--a11y cds--tooltip__trigger--definition"
			[attr.aria-describedby]="id">
			<ng-content></ng-content>
		</button>
		<div class="cds--assistive-text" [id]="id" role="tooltip">{{content}}</div>
	`
})
export class TooltipDefinition {
	static tooltipItemCount = 0;

	@Input() id = `definition-tooltip-${TooltipDefinition.tooltipItemCount++}`;
	/**
	 * Body content for the `TooltipDefinition`.
	 */
	@Input() content: string;
	/**
	 * The placement in which the `TooltipDefinition` appears.
	 * Set to `"top"` to have it positioned above the trigger text
	 */
	@Input() placement: "bottom" | "top" = "bottom";

	@Input() alignment: "start" | "center" | "end" = "start";

	@HostBinding("class.cds--tooltip--definition") className = true;
	@HostBinding("class.cds--tooltip--a11y") accessibility = true;
}
