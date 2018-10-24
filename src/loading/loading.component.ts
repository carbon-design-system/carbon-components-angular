import { Component, Input, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-loading",
	template: `
		<div
			[ngClass]="{'bx--loading--small': size === 'sm'}"
			class="bx--loading">
			<svg class="bx--loading__svg" viewBox="-75 -75 150 150">
				<title>Loading</title>
				<circle cx="0" cy="0" r="37.5" />
			</svg>
		</div>
	`
})
export class Loading {
	/**
	 * Specify the size of the button
	 * @type {("normal" | "sm")}
	 * @memberof Loading
	 */
	@Input() size: "normal" | "sm" = "normal";

	/**
	 * Specify whether you want the loader to be applied with an overlay
	 * @type {boolean}
	 * @memberof Loading
	 */
	@Input() @HostBinding("class.bx--loading-overlay") overlay = false;
}
