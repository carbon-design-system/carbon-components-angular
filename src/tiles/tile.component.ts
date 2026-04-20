import {
	Component,
	HostBinding,
	Input,
	TemplateRef
} from "@angular/core";

/**
 * Build application's tiles using this component. Get started with importing the module:
 *
 * ```typescript
 * import { TilesModule } from 'carbon-components-angular';
 * ```
 *
 * ```html
 * <cds-tile>
 * 		tile content
 * </cds-tile>
 * ```
 *
 * [See demo](../../?path=/story/components-tiles--basic)
 */
@Component({
	selector: "cds-tile, ibm-tile",
	template: `
		<ng-content></ng-content>
		<ng-container *ngIf="decorator">
			<div class="cds--tile--inner-decorator">
				<ng-template [ngTemplateOutlet]="decorator"></ng-template>
			</div>
		</ng-container>
	`
})
export class Tile {
	@HostBinding("class.cds--tile") tileClass = true;

	@HostBinding("class.cds--tile--light") get lightThemeEnabled() {
		return this.theme === "light";
	}

	@HostBinding("class.cds--tile--decorator") get hasDecorator() {
		return !!this.decorator;
	}

	@HostBinding("class.cds--tile--decorator-rounded") get decoratorRounded() {
		return !!this.decorator && this.hasRoundedCorners;
	}

	/**
	 * **Experimental**: Optional decorator (e.g. AI label).
	 */
	@Input() decorator: TemplateRef<any>;

	/**
	 * When `true` with a `decorator`, applies rounded-corner styling.
	 */
	@Input() hasRoundedCorners = false;

	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 * Set to `"light"` to apply the light style
	 */
	@Input() theme: "light" | "dark" = "dark";
}
