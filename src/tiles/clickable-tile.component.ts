import {
	Component,
	Input,
	Output,
	EventEmitter,
	Optional
} from "@angular/core";
import { Router } from "@angular/router";

/**
 * Build application's clickable tiles using this component.
 *
 * ## Basic usage
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
		[attr.aria-disabled]="disabled">
		<ng-content></ng-content>
	</a>`
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
