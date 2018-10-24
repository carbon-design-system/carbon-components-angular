import { Directive, HostBinding } from "@angular/core";

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
	@HostBinding("class.bx--text-area") baseClass = true;
}
