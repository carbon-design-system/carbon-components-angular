import {
	Directive,
	HostBinding,
	Input,
	OnInit
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
 * <button ibmButton>A button</button>
 * <button ibmButton="secondary">A secondary button</button>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/button/code) for more detail.
 */
@Directive({
	selector: "[ibmButton]"
})
export class Button implements OnInit {
	/**
	 * sets the button type
	 */
	@Input() ibmButton: ButtonType = "primary";
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
	 * This should only be used for creating custom icon buttons, otherwise use <ibm-icon-button> component
	 *
	 * <button ibmButton="primary" [iconOnly]="true">
	 *    <svg class="cds--btn__icon" ibmIconCopy size="20"></svg>
	 * </button>
	 */
	@HostBinding("class.cds--btn--icon-only") @Input() iconOnly = false;

	/**
	 * Set to `true` for a "expressive" style button
	 */
	@HostBinding("class.cds--btn--expressive") @Input() isExpressive = false;

	// a whole lot of HostBindings ... this way we don't have to touch the elementRef directly
	@HostBinding("class.cds--btn") baseClass = true;
	@HostBinding("class.cds--btn--primary") get primaryButton() {
		return this.ibmButton === "primary";
	}
	@HostBinding("class.cds--btn--secondary") get secondaryButton() {
		return this.ibmButton === "secondary";
	}
	@HostBinding("class.cds--btn--tertiary") get tertiaryButton() {
		return this.ibmButton === "tertiary";
	}
	@HostBinding("class.cds--btn--ghost") get ghostButton() {
		return this.ibmButton === "ghost";
	}
	@HostBinding("class.cds--btn--danger") get dangerButton() {
		return this.ibmButton === "danger" || this.ibmButton === "danger--primary";
	}
	@HostBinding("class.cds--btn--danger--tertiary") get dangerTertiary() {
		return this.ibmButton === "danger--tertiary";
	}
	@HostBinding("class.cds--btn--danger--ghost") get dangerGhost() {
		return this.ibmButton === "danger--ghost";
	}
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

	ngOnInit() {
		if (!this.ibmButton) {
			this.ibmButton = "primary";
		}
	}
}
