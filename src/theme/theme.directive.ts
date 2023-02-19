import {
	AfterContentChecked,
	ContentChildren,
	Directive,
	HostBinding,
	Input,
	OnInit,
	QueryList
} from "@angular/core";
import { LayerDirective } from "carbon-components-angular/layer";

/**
 * Applies theme styles to the div container it is applied to.
 *
 * [See demo](../../?path=/story/components-theme--basic)
 */
@Directive({
	selector: "[cdsTheme]",
	exportAs: "theme"
})
export class ThemeDirective implements OnInit, AfterContentChecked {
	/**
	 * Sets the theme for the content
	 */
	@Input() cdsTheme: "white" | "g10" | "g90" | "g100" = "white";

	@ContentChildren(LayerDirective, { descendants: false }) layerChildren: QueryList<LayerDirective>;

	/**
	 * Using host bindings with classes to ensure we do not
	 * overwrite user added classes
	 */
	@HostBinding("class.cds--white") get whiteThemeClass() {
		return this.cdsTheme === "white";
	}

	@HostBinding("class.cds--g10") get g10ThemeClass() {
		return this.cdsTheme === "g10";
	}

	@HostBinding("class.cds--g90") get g90ThemeClass() {
		return this.cdsTheme === "g90";
	}

	@HostBinding("class.cds--g100") get g100ThemeClass() {
		return this.cdsTheme === "g100";
	}

	@HostBinding("class.cds--layer-one") layerClass = true;

	ngAfterContentChecked(): void {
		/**
		 * Resets next layer level in theme
		 * If not found, the layer will be 1 by default
		 */
		this.layerChildren.toArray().forEach(layer => {
			if (typeof layer.cdsLayer !== "number") {
				layer.cdsLayer = 1;
			}
		});
	}

	ngOnInit(): void {
		if (!this.cdsTheme) {
			this.cdsTheme = "white";
		}
	}
}
