import {
	Component,
	Input,
	HostBinding
} from "@angular/core";

/**
 * Supported tag types for carbon v10
 */
export type TagType = "red" | "magenta" | "purple" | "blue" | "cyan" | "teal" | "green" | "gray" | "cool-gray" | "warm-gray";

/**
 * Component that represents a tag for labelling/categorizing using keywords
 *
 * demo: [https://angular.carbondesignsystem.com/?path=/story/tag--basic](../../?path=/story/tag--basic)
 *
 * <example-url>../../iframe.html?id=tag--basic</example-url>
 *
 * @export
 * @class Tag
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
	@Input() type: TagType = "gray";

	@Input() class = "";

	@HostBinding("attr.class") get attrClass() {
		return `bx--tag bx--tag--${this.type} ${this.class}`;
	}
}
