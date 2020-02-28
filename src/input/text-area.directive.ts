import { Directive, HostBinding, Input } from "@angular/core";

/**
 * A directive for applying styling to a textarea element.
 *
 * Example:
 *
 * ```html
 * <textarea ibmTextArea></textarea>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/text-input/code) for more detail.
 */
@Directive({
	selector: "[ibmTextArea]"
})
export class TextArea {
	/**
	 * `light` or `dark` input theme
	 */
	@Input() theme: "light" | "dark" = "dark";

	@HostBinding("class.bx--text-area") baseClass = true;
	@HostBinding("class.bx--text-area--invalid") @Input() invalid = false;
	/**
	 * Enables or disables the skeleton state
	 *
	 * Note: boolean properties should be set using the `[skeleton]="true"` syntax.
	 * `skeleton="true"` will assign a string value of `"true"`
	 */
	@HostBinding("class.bx--skeleton") @Input() skeleton = false;
	@HostBinding("class.bx--text-area--light") get isLightTheme() {
		return this.theme === "light";
	}
}
