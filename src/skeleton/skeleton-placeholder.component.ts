import { Component, Input } from "@angular/core";

/**
 * Get started with importing the module:
 *
 * ```typescript
 * import { SkeletonModule } from 'carbon-components-angular';
 * ```
 *
 * [See demo](../../?path=/story/components-skeleton--basic)
 */
@Component({
	selector: "cds-skeleton-placeholder, ibm-skeleton-placeholder",
	template: `
		<div
			class="cds--skeleton__placeholder"
			[class.cds--skeleton__placeholder--ai]="ai">
		</div>`
})
export class SkeletonPlaceholder {
	/**
	 * When `true`, applies the AI skeleton gradient treatment
	 */
	@Input() ai = false;
}
