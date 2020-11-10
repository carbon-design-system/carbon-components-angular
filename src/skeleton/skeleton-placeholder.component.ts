import { Component } from "@angular/core";

@Component({
	selector: "ibm-skeleton-placeholder",
	template: `
		<div class="bx--skeleton__placeholder"></div>`,
	styles: [
		`
		:host {
			display: block;
		}

		.bx--skeleton__placeholder {
			width: 100%;
			height: 100%;
		}
		`
	]
})
export class SkeletonPlaceholder { }
