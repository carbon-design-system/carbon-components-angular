import {
	Directive,
	HostBinding,
	Input
} from "@angular/core";
import { ButtonSize, ButtonType } from "./button.types";

/**
 * A convenience directive for applying styling to a button.
 *
 * [See demo](../../?path=/story/components-button--basic)
 *
 * Example:
 *
 * ```html
 * <button cdsButton>A button</button>
 * <button cdsButton="secondary">A secondary button</button>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/button/code) for more detail.
 */
@Directive({
	selector: "[cdsButton], [ibmButton]"
})
export class Button {
	/**
	 * @deprecated as of v5 - Use `cdsButton` input property instead
	 */
	@Input() set ibmButton(type: ButtonType) {
		this.cdsButton = type;
	}
	/**
	 * Sets the button type
	 * Accepts `ButtonType` or nothing (empty string which is equivalent to "primary")
	 * Empty string has been added as an option for Angular 16+ to resolve type errors
	 */
	@Input() cdsButton: ButtonType | "" = "primary";
	/**
	 * Specify the size of the button
	 */
	@Input() size: ButtonSize;
	/**
	 * Set to `true` for a skeleton state button
	 */
	@HostBinding("class.cds--skeleton") @Input() skeleton = false;
	/**
	 * Set to `true` if the button contains only an icon
	 * This should only be used for creating custom icon buttons, otherwise use
	 * `<cds-icon-button></cds-icon-button>` component
	 */
	@HostBinding("class.cds--btn--icon-only") @Input() iconOnly = false;

	/**
	 * Set to `true` for a "expressive" style button
	 */
	@HostBinding("class.cds--btn--expressive") @Input() isExpressive = false;

	// a whole lot of HostBindings ... this way we don't have to touch the elementRef directly
	@HostBinding("class.cds--btn") baseClass = true;
	@HostBinding("class.cds--btn--primary") get primaryButton() {
		return this.cdsButton === "primary" || !this.cdsButton;
	}
	@HostBinding("class.cds--btn--secondary") get secondaryButton() {
		return this.cdsButton === "secondary";
	}
	@HostBinding("class.cds--btn--tertiary") get tertiaryButton() {
		return this.cdsButton === "tertiary";
	}
	@HostBinding("class.cds--btn--ghost") get ghostButton() {
		return this.cdsButton === "ghost";
	}
	@HostBinding("class.cds--btn--danger") get dangerButton() {
		return this.cdsButton === "danger" || this.cdsButton === "danger--primary";
	}
	@HostBinding("class.cds--btn--danger--tertiary") get dangerTertiary() {
		return this.cdsButton === "danger--tertiary";
	}
	@HostBinding("class.cds--btn--danger--ghost") get dangerGhost() {
		return this.cdsButton === "danger--ghost";
	}
	/**
	 * @todo remove `cds--btn--${size}` classes in v12
	 */
	@HostBinding("class.cds--btn--sm") get smallSize() {
		return this.size === "sm" && !this.isExpressive;
	}
	@HostBinding("class.cds--btn--md") get mediumSize() {
		return this.size === "md" && !this.isExpressive;
	}
	@HostBinding("class.cds--btn--lg") get largeSize() {
		return this.size === "lg";
	}
	@HostBinding("class.cds--btn--xl") get extraLargeSize() {
		return this.size === "xl";
	}
	@HostBinding("class.cds--btn--2xl") get twoExtraLargeSize() {
		return this.size === "2xl";
	}

	// Size classes
	@HostBinding("class.cds--layout--size-sm") get smallLayoutSize() {
		return this.size === "sm" && !this.isExpressive;
	}
	@HostBinding("class.cds--layout--size-md") get mediumLayoutSize() {
		return this.size === "md" && !this.isExpressive;
	}
	@HostBinding("class.cds--layout--size-lg") get largeLayoutSize() {
		return this.size === "lg";
	}
	@HostBinding("class.cds--layout--size-xl") get extraLargeLayoutSize() {
		return this.size === "xl";
	}
	@HostBinding("class.cds--layout--size-2xl") get twoExtraLargeLayoutSize() {
		return this.size === "2xl";
	}


}
