import {
	Component,
	ElementRef,
	HostBinding,
	Input,
	OnChanges,
	OnInit
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
	template: `<svg [attr.class]="buildMatterClass()+' '+classList">
					<use [attr.xlink:href]="'#'+icon+'_'+sizeMap[size]"></use>
				</svg>`,
	providers: [IconService]
})
export class Icon {
	/** follows the naming convention found in the icon listing on the demo page */
	@Input() icon: string;
	/** accepts color strings */
	@Input() color: "blue" | "light" | "dark" | "white" = "dark";
	/** accepts abbreviated size strings */
	@Input() size: "xs" | "sm" | "md" | "lg" = "md";

	/** map size strings to numeric values */
	sizeMap = {
		"xs": 14,
		"sm": 16,
		"md": 20,
		"lg": 30
	};

	/**
	 * Pass down classList from host element.
	 */
	get classList() {
		if (this._elementRef.nativeElement.classList.length > 0) {
			return this._elementRef.nativeElement.classList;
		}
	}

	/**
	 * Initialize the component
	 *
	 * @param {ElementRef} _elementRef
	 */
	constructor(private _elementRef: ElementRef) {}

	/**
	 * Create a class name based on @Input() color and size.
	 * @return {string}
	 */
	public buildMatterClass() {
		if (this.color === "dark" && this.size !== "md") {
			return `icon--${this.size}`;
		} else {
			return `icon${this.color !== "dark" ? `--${this.color}` : ""}${this.color !== "dark" && this.size !== "md" ? `-${this.size}` : ""}`;
		}
	}
}
