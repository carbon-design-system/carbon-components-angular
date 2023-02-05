import {
	Component,
	HostBinding,
	Input
} from "@angular/core";

/**
 * Build application's tiles using this component.
 *
 * [See demo](../../?path=/story/components-tiles--basic)
 *
 * ## Basic usage
 *
 * ```html
 * <ibm-tile>
 * 		tile content
 * </ibm-tile>
 * ```
 */
@Component({
	selector: "ibm-tile",
	template: `<ng-content></ng-content>`
})
export class Tile {
	@HostBinding("class.cds--tile") tileClass = true;

	@HostBinding("class.cds--tile--light") get lightThemeEnabled() {
		return this.theme === "light";
	}

	/**
	 * @deprecated since v5 - Use `ibmLayer` directive instead
	 * Theme property binding will be deprecated in next major version
	 * Use layers instead
	 */
	@Input() theme: "light" | "dark";
}
