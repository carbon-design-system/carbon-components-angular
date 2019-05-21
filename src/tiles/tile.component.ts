import {
	Component,
	HostBinding
} from "@angular/core";

/**
 * Build application's tiles using this component.
 *
 * [See demo](../../?path=/story/tiles--basic)
 *
 * ## Basic usage
 *
 * ```html
 * <ibm-tile>
 * 		tile content
 * </ibm-tile>
 * ```
 *
 * <example-url>../../iframe.html?id=tiles--basic</example-url>
 *
 * @export
 * @class Tile
 * @implements {OnInit}
 */
@Component({
	selector: "ibm-tile",
	template: `<ng-content></ng-content>`
})
export class Tile {
	@HostBinding("class.bx--tile") tileClass = true;
}
