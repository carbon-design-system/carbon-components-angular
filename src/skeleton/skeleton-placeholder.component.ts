import { Component, Input } from "@angular/core";

/**
 * Get started with importing the component:
 *
 * ```typescript
 * import { Skeleton } from 'carbon-components-angular';
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
		</div>
	`,
	standalone: true
})
export class SkeletonPlaceholder {
	/**
	 * When `true`, applies the AI skeleton gradient treatment
	 */
	@Input() ai = false;
}

