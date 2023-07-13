import { Directive, HostBinding, Input } from "@angular/core";

/**
 * A directive for applying styling to an input element.
 *
 * Example:
 *
 * ```html
 * <input cdsText/>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/text-input/code) for more detail.
 */
@Directive({
	selector: "[cdsText], [ibmText]"
})
export class TextInput {
	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 * `light` or `dark` input theme
	 */
	@Input() theme: "light" | "dark" = "dark";

	/**
	 * Input field render size
	 */
	@Input() size: "sm" | "md" | "lg" = "md";

	@HostBinding("class.cds--text-input") inputClass = true;

	/**
	 * @todo - remove `cds--text-input--${size}` classes in v12
	 */
	@HostBinding("class.cds--text-input--sm") get isSizeSm() {
		return this.size === "sm";
	}
	@HostBinding("class.cds--text-input--md") get isSizeMd() {
		return this.size === "md";
	}
	@HostBinding("class.cds--text-input--lg") get isSizelg() {
		return this.size === "lg";
	}

	// Size
	@HostBinding("class.cds--layout--size-sm") get sizeSm() {
		return this.size === "sm";
	}
	@HostBinding("class.cds--layout--size-md") get sizeMd() {
		return this.size === "md";
	}
	@HostBinding("class.cds--layout--size-lg") get sizelg() {
		return this.size === "lg";
	}

	@HostBinding("class.cds--text-input--invalid") @Input() invalid = false;
	@HostBinding("class.cds--text-input__field-wrapper--warning") @Input() warn = false;
	@HostBinding("class.cds--skeleton") @Input() skeleton = false;
	@HostBinding("class.cds--text-input--light") get isLightTheme() {
		return this.theme === "light";
	}
}
