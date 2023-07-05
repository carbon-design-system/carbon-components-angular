import {
	Component,
	Input,
	HostBinding
} from "@angular/core";

/**
 * Supported tag types for carbon v10
 */
export type TagType = "red" |
	"magenta" |
	"purple" |
	"blue" |
	"cyan" |
	"teal" |
	"green" |
	"gray" |
	"cool-gray" |
	"warm-gray" |
	"high-contrast" |
	"outline";

/**
 * Component that represents a tag for labelling/categorizing using keywords
 *
 * [See demo](../../?path=/story/components-tag--basic)
 */
@Component({
	selector: "cds-tag, ibm-tag",
	template: `<ng-content></ng-content>`
})
export class Tag {
	/**
	 * Type of the tag determines the styling
	 */
	@Input() type: TagType = "gray";

	/**
	 * Tag render size
	 */
	@Input() size: "sm" | "md" = "md";

	@Input() class = "";

	@HostBinding("attr.class") get attrClass() {
		return `cds--tag cds--tag--${this.type} cds--tag--${this.size} cds--layout--size-${this.size} ${this.class}`;
	}
}
