import {
	ChangeDetectionStrategy,
	Component,
	HostBinding,
	Input
} from "@angular/core";
import { Tag } from "./tag.component";

@Component({
	selector: "cds-tag-operational, ibm-tag-operational",
	template: `
		@if (!skeleton) {
			<ng-content select="[cdsTagIcon],[ibmTagIcon]"></ng-content>
			<span class="cds--tag__label">
				<ng-content></ng-content>
			</span>
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagOperationalComponent extends Tag {
	@HostBinding("attr.role") role = "button";
	@HostBinding("attr.type") buttonType = "button";
	@HostBinding("attr.tabindex") tabIndex = 0;

	@Input() disabled = false;

	/**
	 * @todo
	 * Remove `cds--tag--${this.size}` in v7
	 */
	@HostBinding("attr.class") get attrClass() {
		const disabledClass = this.disabled ? "cds--tag--disabled" : "";
		const sizeClass = `cds--tag--${this.size} cds--layout--size-${this.size}`;
		const skeletonClass = this.skeleton ? "cds--skeleton" : "";

		return `cds--tag cds--tag--operational cds--tag--${this.type} ${disabledClass} ${sizeClass} ${skeletonClass} ${this.class}`;
	}
}
