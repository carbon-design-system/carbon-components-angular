import { ChangeDetectionStrategy, Component, HostBinding } from "@angular/core";

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
	template: "<ng-content />",
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true
})
export class ButtonSet {
	@HostBinding("class.cds--btn-set") buttonSetClass = true;
}
