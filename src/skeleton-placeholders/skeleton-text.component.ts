import { Component, Input, OnChanges } from "@angular/core";

@Component({
	selector: "ibm-skeleton-text",
	template: `
		<p
			*ngFor="let width of lineWidths"
			class="bx--skeleton__text"
			[style.width]="width">
		</p>
	`
})
export class SkeletonText implements OnChanges {
	@Input() numberOfLines = 5;

	@Input() minLineWidth = 100;

	@Input() maxLineWidth = 300;

	lineWidths: Array<string>;

	randoms = [0.973051493507435, 0.15334737213558558, 0.5671034553053769];

	/**
	 * Returns a random width in pixels based off a min width, and a max width.
	 */
	getRandomInt(min, max, n) {
		return `${ (Math.floor(this.randoms[n % 3] * (max - min + 1)) + min) + "px" }`;
	}

	ngOnChanges() {
		// Creates an array of length defined by input numberOfLines with content from
		// 0 to numberOfLines - 1, maps each value to a random width in pixels.
		this.lineWidths =
			Array.from(Array(this.numberOfLines).keys())
				.map(num => this.getRandomInt(this.minLineWidth, this.maxLineWidth, num));
	}
}
