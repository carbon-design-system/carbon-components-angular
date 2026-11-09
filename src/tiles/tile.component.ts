import {
	Component,
	HostBinding,
	Input,
	ChangeDetectionStrategy,
	TemplateRef
} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";

/**
 * Build application's tiles using this component. Get started with importing the component:
 *
 * ```typescript
 * import { Tile } from 'carbon-components-angular';
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
		<ng-content />
		@if (decorator) {
			<div class="cds--tile--inner-decorator">
				<ng-template [ngTemplateOutlet]="decorator"></ng-template>
			</div>
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgTemplateOutlet],
	standalone: true
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
