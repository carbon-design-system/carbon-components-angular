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
	 * Set to `true` to disable link.
	 * @memberof Link
	 */
	@HostBinding("attr.aria-disabled") @Input() disabled = false;
}
