import { Component, HostBinding } from "@angular/core";

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
			<span class="cds--popover-caret cds--popover--auto-align"></span>
		</span>
	`
})
export class PopoverContent {
	@HostBinding("class.cds--popover") popoverClass = true;
}
