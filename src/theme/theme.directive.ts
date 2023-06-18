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

export type ThemeType = "white" | "g10" | "g90" | "g100";

/**
 * Applies theme styles to the div container it is applied to.
 *
 * [See demo](../../?path=/story/components-theme--basic)
 */
@Directive({
	selector: "[cdsTheme], [ibmTheme]",
	exportAs: "theme"
})
export class ThemeDirective implements OnInit, AfterContentChecked {
	/**
	 * @deprecated as of v5 - Use `cdsTheme` input property instead
	 */
	@Input() set ibmTheme(type: ThemeType | "") {
		this.cdsTheme = type;
	}

	/**
	 * Sets the theme for the content
	 * Accepts `ThemeType` or nothing (defaults to empty string in angular 16+)
	 */
	@Input() cdsTheme: ThemeType | "" = "white";

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

	/**
	 * We need to make sure cdsTheme is not an empty string because
	 * input name matches selector name.
	 */
	ngOnInit(): void {
		if (!this.cdsTheme) {
			this.cdsTheme = "white";
		}
	}
}
