import {
	Directive,
	HostBinding,
	Input,
	OnInit,
	SkipSelf,
	Optional
} from "@angular/core";

const MAX_LEVEL = 2;

/**
 * Applies layering styles to the div container it is applied to.
 *
 * [See demo](../../?path=/story/layer-default)
 */
@Directive({
	selector: "[ibmLayer]",
	exportAs: "layer"
})
export class LayerDirective implements OnInit {
	/**
	 * Override layer class
	 */
	@Input() ibmLayer: 0 | 1 | 2;

	/**
	 * Using host bindings with classes to ensure we do not
	 * overwrite user added classes
	 */
	@HostBinding("class.cds--layer-one") get layerOneClass() {
		return this.level === 0 ? true : false;
	}

	@HostBinding("class.cds--layer-two") get layerTwoClass() {
		return this.level === 1 ? true : false;
	}

	@HostBinding("class.cds--layer-three") get layerThreeClass() {
		return this.level === 2 ? true : false;
	}

	private _level = 0;

	public get level(): number {
		return Math.max(0, Math.min(this._level, MAX_LEVEL));
	}

	public set level(num: number) {
		this._level = Math.max(0, Math.min(num, MAX_LEVEL));
	}

	/**
	 * Holds the next level, this allows for themes to reset
	 */
	private _nextLevel = 1;

	private get nextLevel(): number {
		return this._nextLevel;
	}

	private set nextLevel(num: number) {
		this._nextLevel = Math.max(0, Math.min(num, MAX_LEVEL));
	}

	/**
	 * Hierarchical dependency injection to get parent instance of layer
	 * to determine the current layer level
	 */
	constructor(@SkipSelf() @Optional() protected parent: LayerDirective) { }

	ngOnInit() {
		this._level = [0, 1, 2].includes(this.ibmLayer) ? this.ibmLayer
			: (this.parent ? this.parent.nextLevel : 1);
		this.nextLevel = this._level + 1;
	}

	setNextLevel(level: 0 | 1 | 2) {
		this._nextLevel = level;
	}
}
