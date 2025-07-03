import {
	Component,
	Input,
	Output,
	EventEmitter,
	Optional,
	ChangeDetectionStrategy
} from "@angular/core";
import { Router } from "@angular/router";
import { Link } from "carbon-components-angular/link";
import { NgClass } from "@angular/common";

/**
 * Build application's clickable tiles using this component. Get started with importing the module:
 *
 * ```typescript
 * import { TilesModule } from 'carbon-components-angular';
 * ```
 *
 * ```html
 * <cds-clickable-tile>
 * 		tile content
 * </cds-clickable-tile>
 * ```
 */
@Component({
	selector: "cds-clickable-tile, ibm-clickable-tile",
	template: `
	<a
		cdsLink
		class="cds--tile cds--tile--clickable"
		[ngClass]="{
			'cds--tile--light': theme === 'light',
			'cds--tile--disabled cds--link--disabled' : disabled
		}"
		tabindex="0"
		(click)="navigate($event)"
		[attr.href]="disabled ? null : href"
		[attr.target]="target"
		[attr.rel]="rel ? rel : null"
		[attr.aria-disabled]="disabled">
		<ng-content />
	</a>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [Link, NgClass]
})
export class ClickableTile {
	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 * Set to `"light"` to apply the light style
	 */
	@Input() theme: "light" | "dark" = "dark";

	/**
	 * Sets the `href` attribute on the `cds-clickable-tile` element.
	 */
	@Input() href = "#";

	/**
	 * Sets the `target` attribute on the `cds-clickable-tile` element.
	 */
	@Input() target: string;

	/**
	 * Sets the `rel` attribute on the `cds-clickable-tile` element.
	 */
	@Input() rel: string;

	/**
	 * Set to `true` to disable the clickable tile.
	 */
	@Input() disabled = false;

	/**
	 * Array of commands to send to the router when the link is activated
	 * See: https://angular.io/api/router/Router#navigate
	 */
	@Input() route: any[];

	/**
	 * Router options. Used in conjunction with `route`
	 * See: https://angular.io/api/router/Router#navigate
	 */
	@Input() routeExtras: any;

	/**
	 * Emits the navigation status promise when the link is activated
	 */
	@Output() navigation = new EventEmitter<Promise<boolean>>();

	constructor(@Optional() protected router: Router) {}

	navigate(event) {
		if (this.router && this.route && !this.disabled) {
			event.preventDefault();
			const status = this.router.navigate(this.route, this.routeExtras);
			this.navigation.emit(status);
		}
	}
}
