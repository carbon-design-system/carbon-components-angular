import { Component, Input, HostBinding } from "@angular/core";

/**
 * This is a sample component to demonstrate how components should be written, and can be used as a template for new components
 */
@Component({
	selector: "ibm-loading",
	template: `
		<div
			[ngClass]="{ 'bx--loading--small': size === 'sm' }"
			class="bx--loading">
			<svg class="bx--loading__svg" viewBox="-75 -75 150 150">
				<title>Loading</title>
				<circle cx="0" cy="0" r="37.5" />
			</svg>
		</div>
	`
})
export class Loading {
	@Input() size: "normal" | "sm" = "normal";
	@Input() overlay = false;

	@HostBinding("class.bx--loading-overlay") get isOverlay() {
		return this.overlay === true;
	}

}
