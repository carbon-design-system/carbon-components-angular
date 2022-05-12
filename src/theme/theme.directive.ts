import {
	Directive,
	HostBinding,
	Input,
	OnInit,
	Optional
} from "@angular/core";
import { LayerDirective } from "carbon-components-angular/layer";

/**
 * Applies theme styles to the div container it is applied to.
 *
 * [See demo](../../?path=/story/components-theme--basic)
 */
@Directive({
	selector: "[ibmTheme]",
	exportAs: "theme"
})
export class ThemeDirective implements OnInit {
	/**
	 * Sets the theme for the content
	 */
	@Input() ibmTheme: "white" | "g10" | "g90" | "g100" = "white";

	/**
	 * Using host bindings with classes to ensure we do not
	 * overwrite user added classes
	 */
	@HostBinding("class.cds--white") get whiteThemeClass() {
		return this.ibmTheme === "white";
	}

	@HostBinding("class.cds--g10") get g10ThemeClass() {
		return this.ibmTheme === "g10";
	}

	@HostBinding("class.cds--g90") get g90ThemeClass() {
		return this.ibmTheme === "g90";
	}

	@HostBinding("class.cds--g100") get g100ThemeClass() {
		return this.ibmTheme === "g100";
	}

	@HostBinding("class.cds--layer-one") layerClass = true;

	constructor(@Optional() private layer: LayerDirective) { }

	ngOnInit() {
		/**
		 * Resets next layer level in theme
		 * If not found, the layer will be 1 by default
		 */
		if (this.layer) {
			this.layer.setNextLevel(1);
		}
	}
}
