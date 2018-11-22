import {
	Directive,
	HostBinding,
	Input
} from "@angular/core";

/**
 * A convinence directive for applying styling to a link.
 *
 * Example:
 *
 * ```hmtl
 * <a href="#" ibmLink>A link</a>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/link/code) for more detail.
 */
@Directive({
	selector: "[ibmLink]"
})

export class Link {
	@HostBinding("class.bx--link") baseClass = true;

	/**
	 * Automatically set to `-1` when link is disabled.
	 * @memberof Link
	 */
	@HostBinding("attr.tabindex") tabindex;

	/**
	 * Set to true to disable link.
	 * @memberof Link
	 */
	@Input()
	@HostBinding("attr.aria-disabled")
	set disabled(disabled: boolean) {
		this._disabled = disabled;
		this.tabindex = this.disabled ? -1 : null;
	}

	get disabled(): boolean {
		return this._disabled;
	}

	private _disabled;
}
