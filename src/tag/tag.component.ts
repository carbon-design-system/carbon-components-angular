import {
	Component,
	Input,
	HostBinding,
	ChangeDetectionStrategy,
	TemplateRef
} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";

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
 * Component that represents a tag for labelling/categorizing using keywords. Get started with importing the component:
 *
 * ```typescript
 * import { Tag } from 'carbon-components-angular';
 * ```
 *
 * [See demo](../../?path=/story/components-tag--basic)
 */
@Component({
	selector: "cds-tag, ibm-tag",
	template: `
		@if (!skeleton) {

			<ng-content select="[cdsTagIcon],[ibmTagIcon]"></ng-content>
			<span class="cds--tag__label">
				<ng-content></ng-content>
			</span>
			@if (decorator) {

				<div class="cds--tag__decorator">
					<ng-template [ngTemplateOutlet]="decorator"></ng-template>
				</div>

}

}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgTemplateOutlet],
	standalone: true
})
export class Tag {
	/**
	 * Type of the tag determines the styling
	 */
	@Input() type: TagType = "gray";

	/**
	 * Tag render size
	 */
	@Input() size: "sm" | "md" | "lg" = "md";

	@Input() class = "";

	@Input() skeleton = false;

	/**
	 * **Experimental**: Optional decorator (e.g. AI label).
	 */
	@Input() decorator: TemplateRef<any>;

	/**
	 * @todo
	 * Remove `cds--tag--${this.size}` in v7
	 */
	@HostBinding("attr.class") get attrClass() {
		const skeletonClass = this.skeleton ? "cds--skeleton" : "";
		const sizeClass = `cds--tag--${this.size} cds--layout--size-${this.size}`;

		return `cds--tag cds--tag--${this.type} ${sizeClass} ${skeletonClass} ${this.class}`;
	}
}
