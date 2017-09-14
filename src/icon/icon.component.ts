import {
	Component,
	OnChanges,
	OnInit,
	Input
} from "@angular/core";
import { IconService } from "./icon.service";

/**
 * `n-icon` pulls the icon from the loaded sprite, and renders it at the specified size.
 * Under the hood, `n-icon` generates code similar to the following:
 * ```
 * <svg class="icon" width="30" height="30"><use href="#alert_30"></use></svg>
 * ```
 */
@Component({
	selector: "n-icon",
	template: `<svg
					[attr.width]="iconSize"
					[attr.height]="iconSize">
					<use [attr.xlink:href]="'#'+icon+'_'+clampSize(iconSize)"></use>
				</svg>`,
	providers: [IconService],
	host: {
		class: "icon",
		style: "display: inherit;"
	}
})
export class Icon implements OnChanges {
	/** computed size for the template */
	public iconSize: string;
	/** follows the naming convention found in the icon listing on the demo page */
	@Input() icon = "";
	/** is one of xs, sm, md, lg, or a custom value specified as a number (will be parsed and "px" appended) */
	@Input() size = "sm";

	/**
	 * Initilize the component
	 *
	 * @param {IconService} _icons
	 */
	constructor(private _icons: IconService) {}

	/**
	 * Clamps the size to 14, 16, 20, or 30 px - the sizes most icons are available in
	 *
	 * @param {string} sizeStr pixel size string
	 */
	clampSize(sizeStr: string) {
		let size = parseInt(sizeStr, 10);
		if (size <= 14) {
			return 14;
		}
		if (size > 14 && size <= 16) {
			return 16;
		}
		if (size > 16 && size <= 20) {
			return 20;
		}
		if (size >= 30) {
			return 30;
		}
	}

	/**
	 * Updates `iconSize` with the relevant `size2px` value
	 *
	 * @param changes
	 */
	ngOnChanges(changes) {
		// init icon and watch for changes
		if (changes.size) {
			this.iconSize = this._icons.size2px(changes.size.currentValue);
		}
	}
}
