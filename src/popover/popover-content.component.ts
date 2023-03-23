import { Component, HostBinding } from "@angular/core";

/**
 * [See demo](../../?path=/story/components-popover--basic)
 */
@Component({
	selector: "cds-popover-content, ibm-popover-content",
	template: `
		<span class="cds--popover-content">
			<ng-content></ng-content>
		</span>
		<span class="cds--popover-caret"></span>
	`
})
export class PopoverContent {
	@HostBinding("class.cds--popover") popoverClass = true;
}
