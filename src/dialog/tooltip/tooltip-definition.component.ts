import { Component, Input, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-tooltip-definition",
	template: `
		<button
			type="button"
			[ngClass]="{
				'bx--tooltip--bottom' : placement === 'bottom',
				'bx--tooltip--top' : placement === 'top',
				'bx--tooltip--align-start' : alignment === 'start',
				'bx--tooltip--align-center' : alignment === 'center',
				'bx--tooltip--align-end' : alignment === 'end'
			}"
			class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip__trigger--definition"
			[attr.aria-describedby]="id">
			<ng-content></ng-content>
		</button>
		<div class="bx--assistive-text" [id]="id" role="tooltip">{{content}}</div> 
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

	@HostBinding("class.bx--tooltip--definition") className = true;
}
