import {
	Directive,
	HostBinding,
	Input,
	ContentChildren,
	QueryList,
	AfterContentInit
} from "@angular/core";

const MAX_LEVEL = 2;

/**
 * Applies layering styles to the div container it is applied to.
 *
 * [See demo](../../?path=/story/components-layer--basic)
 */
@Directive({
	selector: "[ibmLayer]",
	exportAs: "layer"
})
export class LayerDirective implements AfterContentInit {

	/**
	 * Override layer level
	 */
	@Input() set ibmLayer(level: number) {
		if (typeof level === "number") {
			this._level = Math.max(0, Math.min(level, MAX_LEVEL));
			if (this.layerChildren) {
				this.layerChildren.forEach((layer) => {
					// Ignore self to prevent infinite recursion
					if (layer === this) {
						return;
					}
					layer.ibmLayer = this.ibmLayer + 1;
				});
			}
		}
	}

	get ibmLayer() {
		return this._level;
	}

	@ContentChildren(LayerDirective, { descendants: false }) layerChildren: QueryList<LayerDirective>;

	/**
	 * Using host bindings with classes to ensure we do not
	 * overwrite user added classes
	 */
	@HostBinding("class.cds--layer-one") get layerOneClass() {
		return this.ibmLayer === 0;
	}

	@HostBinding("class.cds--layer-two") get layerTwoClass() {
		return this.ibmLayer === 1;
	}

	@HostBinding("class.cds--layer-three") get layerThreeClass() {
		return this.ibmLayer === 2;
	}

	private _level;

	ngAfterContentInit(): void {
		if (typeof this.ibmLayer !== "number") {
			this.ibmLayer = 1;
		}
	}
}
