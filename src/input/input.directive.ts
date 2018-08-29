import { Directive, HostBinding } from "@angular/core";

/**
 * A directive for applying styling to an input element.
 *
 * Example:
 *
 * ```hmtl
 * <input ibmText/>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/text-input/code) for more detail.
 */
@Directive({
	selector: "[ibmText]"
})
export class TextInput {
	@HostBinding("class") inputClass = "bx--text-input";
}
