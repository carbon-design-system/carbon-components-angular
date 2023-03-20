import { Directive, HostBinding, Input } from "@angular/core";

/**
 * A directive for applying styling to a textarea element.
 *
 * Example:
 *
 * ```html
 * <textarea cdsTextArea></textarea>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/text-input/code) for more detail.
 */
@Directive({
	selector: "[cdsTextArea], [ibmTextArea]"
})
export class TextArea {
	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 * `light` or `dark` input theme
	 */
	@Input() theme: "light" | "dark" = "dark";

	@HostBinding("class.cds--text-area") baseClass = true;
	@HostBinding("class.cds--text-area--invalid") @Input() invalid = false;
	@HostBinding("class.cds--skeleton") @Input() skeleton = false;
	@HostBinding("class.cds--text-area--light") get isLightTheme() {
		return this.theme === "light";
	}
}
