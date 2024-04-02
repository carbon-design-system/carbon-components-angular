import { Component, HostBinding, Input } from "@angular/core";

/**
 * [See demo](../../?path=/story/components-popover--basic)
 */
@Component({
	selector: "cds-popover-content, ibm-popover-content",
	template: `
		<span class="cds--popover-content">
			<div>
				<ng-content></ng-content>
			</div>
			<span *ngIf="autoAlign" class="cds--popover-caret cds--popover--auto-align"></span>
		</span>
		<span *ngIf="!autoAlign" class="cds--popover-caret"></span>
	`
})
export class PopoverContent {
	@HostBinding("class.cds--popover") popoverClass = true;

	/**
	 * Helper input property
	 * We update placement of caret in DOM if auto align is enabled
	 */
	@Input() autoAlign = false;
}
