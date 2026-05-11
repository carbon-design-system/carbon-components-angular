import {
	ChangeDetectionStrategy,
	Component,
	HostBinding,
	Input
} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";

/**
 * Get started with importing the component:
 *
 * ```typescript
 * import { ButtonSet } from 'carbon-components-angular';
 * ```
 *
 * [See demo](../../?path=/story/components-button-button-set--basic)
 */
@Component({
	selector: "cds-button-set, ibm-button-set",
	template: `
		@if (fluid) {
			<div class="cds--btn-set__fluid-inner cds--btn-set__fluid-inner--auto-stack">
				<ng-container *ngTemplateOutlet="content"></ng-container>
			</div>
		}
		@if (!fluid) {
			<ng-container *ngTemplateOutlet="content" />
		}

		<ng-template #content>
			<ng-content />
		</ng-template>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgTemplateOutlet]
})
export class ButtonSet {
	@HostBinding("class.cds--btn-set") buttonSetClass = true;

	/**
	 * When `true`, buttons grow to fill the container width (fluid button set).
	 */
	@Input() fluid = false;

	/**
	 * When `true`, stacks buttons vertically. Use with non-fluid layouts, otherwise `fluid` will override style
	 */
	@Input() stacked = false;

	@HostBinding("class.cds--btn-set--fluid")
	get fluidClass(): boolean {
		return this.fluid;
	}

	@HostBinding("class.cds--btn-set--stacked")
	get stackedClass(): boolean {
		return this.stacked;
	}
}
