import { Component, Input, OnChanges } from "@angular/core";

@Component({
	selector: "cds-skeleton-text, ibm-skeleton-text",
	template: `
		<p
			*ngFor="let width of lineWidths"
			class="cds--skeleton__text"
			[style.width]="width">
		</p>
	`
})
export class SkeletonText implements OnChanges {
	@Input() lines = 5;

	@Input() minLineWidth = 100;

	@Input() maxLineWidth = 300;

	lineWidths: Array<string>;

	/**
	 * Returns a random width in pixels based off a min width, and a max width.
	 */
	getRandomInt(min, max) {
		return `${Math.floor(Math.random() * (max - min + 1) + min) + "px"}`;
	}

	ngOnChanges() {
		// Creates an array of length defined by input lines with content from
		// 0 to lines - 1, maps each value to a random width in pixels.
		this.lineWidths =
			Array.from(Array(this.lines).keys())
				.map(num => this.getRandomInt(this.minLineWidth, this.maxLineWidth));
	}
}
