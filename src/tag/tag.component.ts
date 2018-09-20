import {
	Component,
	Input,
	HostBinding
} from "@angular/core";


/**
 * Component that represents a tag for labelling/categorising using keywords
 * @export
 * @class Tag
 */
@Component({
	selector: "ibm-tag",
	template: `<span><ng-content></ng-content></span>`
})
export class Tag {
	/** type of the tag determines the styling */
	@Input()
	type:
	"beta" |
	"community" |
	"custom" |
	"dedicated" |
	"experimental" |
	"ibm" |
	"local" |
	"private" |
	"third-party"
	= "ibm";

	@HostBinding("attr.class") get attrClass() {
		return `bx--tag bx--tag--${this.type}`;
	}
}
