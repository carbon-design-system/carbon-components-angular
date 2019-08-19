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
 * <ibm-clickable-tile>
 * 		tile content
 * </ibm-clickable-tile>
 * ```
 */
@Component({
	selector: "ibm-clickable-tile",
	template: `
	<a
		ibmLink
		class="bx--tile bx--tile--clickable"
		tabindex="0"
		(click)="navigate($event)"
		[href]="href"
		[attr.target]="target"
		[attr.aria-disabled]="disabled">
		<ng-content></ng-content>
	</a>`
})
export class ClickableTile {
	/**
	 * Sets the `href` attribute on the `ibm-clickable-tile` element.
	 */
	@Input() href = "#";

	/**
	 * Sets the `target` attribute on the `ibm-clickable-tile` element.
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
		if (this.router) {
			event.preventDefault();
			const status = this.router.navigate(this.route, this.routeExtras);
			this.navigation.emit(status);
		}
	}
}
