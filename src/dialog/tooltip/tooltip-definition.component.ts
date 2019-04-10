import { Component, Input, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-tooltip-definition",
	template: `
		<button class="bx--tooltip__trigger" [attr.aria-describedby]="id">
			<ng-content></ng-content>
		</button>
		<div
			[id]="id"
			[ngClass]="{
				'bx--tooltip--definition__bottom' : placement === 'bottom',
				'bx--tooltip--definition__top' : placement === 'top'
			}"
			role="tooltip"
			[attr.aria-label]="content">
			<span class="bx--tooltip__caret"></span>
			<p>{{content}}</p>
		</div>
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

	@HostBinding("class.bx--tooltip--definition") className = true;
}
