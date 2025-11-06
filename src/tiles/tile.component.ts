import {
	Component,
	HostBinding,
	Input,
	ChangeDetectionStrategy
} from "@angular/core";

/**
 * Build application's tiles using this component. Get started with importing the module:
 *
 * ```typescript
 * import { TilesModule } from 'carbon-components-angular';
 * ```
 *
 * ```html
 * <cds-tile>
 * 		tile content
 * </cds-tile>
 * ```
 *
 * [See demo](../../?path=/story/components-tiles--basic)
 */
@Component({
	selector: "cds-tile, ibm-tile",
	template: `<ng-content />`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tile {
	@HostBinding("class.cds--tile") tileClass = true;

	@HostBinding("class.cds--tile--light") get lightThemeEnabled() {
		return this.theme === "light";
	}

	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 * Set to `"light"` to apply the light style
	 */
	@Input() theme: "light" | "dark" = "dark";
}
