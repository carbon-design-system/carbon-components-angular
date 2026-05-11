import { Directive, HostBinding, Input } from "@angular/core";

export type AspectRatioValue =
	| "1x1"
	| "2x3"
	| "3x2"
	| "3x4"
	| "4x3"
	| "1x2"
	| "2x1"
	| "9x16"
	| "16x9";

/**
 * Applies Carbon aspect ratio box classes (`cds--aspect-ratio`) to the host element.
 *
 * ```html
 * <div cdsAspectRatio ratio="16x9">...</div>
 * ```
 *
 * ```typescript
 * import { AspectRatioModule } from 'carbon-components-angular';
 * ```
 */
@Directive({
	selector: "[cdsAspectRatio], [ibmAspectRatio]",
	standalone: false
})
export class AspectRatioDirective {
	/**
	 * Set aspect ratio
	 */
	@Input() ratio: AspectRatioValue = "1x1";

	// Set base class
	@HostBinding("class.cds--aspect-ratio") readonly aspectRatioBase = true;

	/**
	 * Set ratio class based on `ratio` input
	 */
	@HostBinding("class.cds--aspect-ratio--1x1") get ratio1x1() {
		return this.ratio === "1x1";
	}
	@HostBinding("class.cds--aspect-ratio--2x3") get ratio2x3() {
		return this.ratio === "2x3";
	}
	@HostBinding("class.cds--aspect-ratio--3x2") get ratio3x2() {
		return this.ratio === "3x2";
	}
	@HostBinding("class.cds--aspect-ratio--3x4") get ratio3x4() {
		return this.ratio === "3x4";
	}
	@HostBinding("class.cds--aspect-ratio--4x3") get ratio4x3() {
		return this.ratio === "4x3";
	}
	@HostBinding("class.cds--aspect-ratio--1x2") get ratio1x2() {
		return this.ratio === "1x2";
	}
	@HostBinding("class.cds--aspect-ratio--2x1") get ratio2x1() {
		return this.ratio === "2x1";
	}
	@HostBinding("class.cds--aspect-ratio--9x16") get ratio9x16() {
		return this.ratio === "9x16";
	}
	@HostBinding("class.cds--aspect-ratio--16x9") get ratio16x9() {
		return this.ratio === "16x9";
	}
}
