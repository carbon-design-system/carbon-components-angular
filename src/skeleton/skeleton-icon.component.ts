import { Component, Input } from "@angular/core";

@Component({
	selector: "cds-skeleton-icon, ibm-skeleton-icon",
	template: `
		<div
			class="cds--icon--skeleton"
			[class.cds--skeleton__icon--ai]="ai">
		</div>`
})
export class SkeletonIcon {
	/**
	 * When `true`, applies the AI skeleton gradient treatment (`cds--skeleton__icon--ai`).
	 */
	@Input() ai = false;
}
