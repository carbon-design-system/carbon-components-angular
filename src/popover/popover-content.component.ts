import { Component, HostBinding } from "@angular/core";

/**
 * [See demo](../../?path=/story/components-popover--basic)
 *
 * <example-url>../../iframe.html?id=components-popover--basic</example-url>
 */
@Component({
	selector: "ibm-popover-content",
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
