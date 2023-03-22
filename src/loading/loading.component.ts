import { Component, Input, HostBinding } from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";

/**
 * [See demo](../../?path=/story/components-loading--basic)
 */
@Component({
	selector: "cds-loading, ibm-loading",
	template: `
		<div
			[ngClass]="{
				'cds--loading--small': size === 'sm',
				'cds--loading--stop': !isActive && !overlay,
				'cds--loading-overlay--stop': !isActive && overlay
			}"
			class="cds--loading">
			<svg class="cds--loading__svg" viewBox="0 0 100 100">
				<title>{{title}}</title>
				<circle class="cds--loading__stroke" cx="50%" cy="50%" r="44" />
			</svg>
		</div>
	`
})
export class Loading {
	/**
	 * Accessible title for the loading circle.
	 * Defaults to the `LOADING.TITLE` value from the i18n service.
	 */
	@Input() title = this.i18n.get().LOADING.TITLE;

	/**
	 * set to `false` to stop the loading animation
	 */
	@Input() isActive = true;

	/**
	 * Specify the size of the button
	 */
	@Input() size: "normal" | "sm" = "normal";

	/**
	 * Set to `true` to make loader with an overlay.
	 */
	@Input() @HostBinding("class.cds--loading-overlay") overlay = false;

	constructor(protected i18n: I18n) {}
}
