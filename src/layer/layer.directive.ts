import {
	Directive,
	HostBinding,
	Input,
	OnInit,
	SkipSelf,
	Optional
} from "@angular/core";
import { LEVELENUM, MAX_LEVEL } from "./layer.types";

/**
 * Applies layering styles to the div container it is applied to.
 *
 * [See demo](../../?path=/story/layer-default)
 */
@Directive({
	selector: "div[ibmLayer]",
	exportAs: "ibmLayer"
})
export class Layer implements OnInit {

	/**
	 * Override layer class
	 */
	@Input() ibmLayer: LEVELENUM;

	/**
	 * Using host bindings with classes to ensure we do not
	 * overwrite user added classes
	 */
	@HostBinding("class.cds--layer-one") get layerOneClass() {
		return this._level === 0 ? true : false;
	}

	@HostBinding("class.cds--layer-two") get layerTwoClass() {
		return this._level === 1 ? true : false;
	}

	@HostBinding("class.cds--layer-three") get layerThreeClass() {
		return this._level === 2 ? true : false;
	}

	private _level = 0;

	private get level(): number {
		return Math.max(0, Math.min(this._level, MAX_LEVEL));
	}

	private set level(num: number) {
		if (num && (num >= 0 && num <= MAX_LEVEL)) {
			this._level = num;
		}
	}

	/**
	 * Hierarchical dependency injection to get parent instance of layer
	 * to determine the current layer level
	 */
	constructor(@SkipSelf() @Optional() protected parent: Layer) { }

	ngOnInit() {

		this._level = this.ibmLayer ? this.ibmLayer
			: (this.parent ? this.parent.level + 1 : 1);
	}
}
