import {
	Component,
	Input,
	HostBinding
} from "@angular/core";

/**
 * Supported tag types for carbon v9
 */
export type TagType = "beta" | "community" | "custom" | "dedicated" | "experimental" | "ibm" | "local" | "private" | "third-party";

/**
 * Supported tag types for carbon v10
 */
export type TagTypeExperimental = "red" | "magenta" | "purple" | "blue" | "cyan" | "teal" | "green" | "cool-gray" | "warm-gray";

/**
 * Component that represents a tag for labelling/categorizing using keywords
 */
@Component({
	selector: "ibm-tag",
	template: `<ng-content></ng-content>`
})
export class Tag {
	/**
	 * type of the tag determines the styling
	 *
	 * Reference `TagType` for v9 applications, and `TagTypeExperimental` for v10/v9 experimental mode applications
	 */
	@Input() type: TagType | TagTypeExperimental = "ibm";

	@Input() class = "";

	@HostBinding("attr.class") get attrClass() {
		return `bx--tag bx--tag--${this.type} ${this.class}`;
	}
}
