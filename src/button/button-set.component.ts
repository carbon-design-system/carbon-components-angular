import { Component, HostBinding, Input } from "@angular/core";

/**
 * Get started with importing the module:
 *
 * ```typescript
 * import { ButtonModule } from 'carbon-components-angular';
 * ```
 *
 * [See demo](../../?path=/story/components-button-button-set--basic)
 */
@Component({
	selector: "cds-button-set, ibm-button-set",
	template: `
		<div *ngIf="fluid" class="cds--btn-set__fluid-inner cds--btn-set__fluid-inner--auto-stack">
			<ng-container *ngTemplateOutlet="content"></ng-container>
		</div>
		<ng-container *ngIf="!fluid">
			<ng-container *ngTemplateOutlet="content"></ng-container>
		</ng-container>

		<ng-template #content>
			<ng-content></ng-content>
		</ng-template>
	`
})
export class ButtonSet {
	@HostBinding("class.cds--btn-set") buttonSetClass = true;

	/**
	 * When `true`, buttons grow to fill the container width (fluid button set).
	 */
	@Input() fluid = false;

	/**
	 * When `true`, stacks buttons vertically. Use with non-fluid layouts; with `fluid` enabled, layout follows the fluid styles.
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
