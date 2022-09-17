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
	@Input() set ibmLayer(level: 0 | 1 | 2) {
		this._passedLevel = level;
		this.layer = level;
	}

	get ibmLayer() {
		return this._passedLevel;
	}

	/**
	 * If ibmLayer is undefined, auto increment & iterate level
	 */
	set layer(level: number) {
		if (typeof level === "number") {
			this._level = Math.max(0, Math.min(level, MAX_LEVEL));
			if (this.layerChildren) {
				this.layerChildren.forEach((layer) => {
					// Ignore self to prevent infinite recursion
					if (layer === this) {
						return;
					}
					layer.layer = typeof layer._passedLevel === "number" ? layer._passedLevel : this.layer + 1;
				});
			}
		}
	}

	get layer() {
		return this._level;
	}

	/**
	 * Using host bindings with classes to ensure we do not
	 * overwrite user added classes
	 */
	@HostBinding("class.cds--layer-one") get layerOneClass() {
		return this.layer === 0;
	}

	@HostBinding("class.cds--layer-two") get layerTwoClass() {
		return this.layer === 1;
	}

	@HostBinding("class.cds--layer-three") get layerThreeClass() {
		return this.layer === 2;
	}

	@ContentChildren(LayerDirective, { descendants: false }) layerChildren: QueryList<LayerDirective>;

	// Holds user passsed level
	private _passedLevel;
	// Holds current level
	private _level;

	ngAfterContentInit(): void {
		if (typeof this.ibmLayer !== "number") {
			this.layer = 1;
		}
	}
}
