import {
	Component,
	Input,
	Output,
	EventEmitter,
	Optional,
  HostBinding
} from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Router } from '@angular/router';

/**
 * Represents an item in a switcher list.
 *
 * **Note:** `ibm-product-x` selectors and components are deprecated and will be removed in the next major version
 */
@Component({
	selector: "ibm-switcher-list-item, ibm-product-switcher-list-item, ibm-product-switcher-item",
	template: `
		<a
			class="bx--switcher__item-link"
			[ngClass]="{
				'bx--switcher__item-link--selected': active
			}"
			[href]="href"
			[target]="target"
			(click)="navigate($event)">
			<ng-content></ng-content>
		</a>
	`
})
export class SwitcherListItem {
	/**
	 * Enables the "active" state for an item. Commonly used to indicate the current page or selection.
	 */
	@Input() active = false;

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
	 * Optional link for the underlying anchor.
	 */
	@Input() set href(value: string) {
		this._href = value;
	}

	/**
	 * Emits the navigation status promise when the link is activated
	 */
	@Output() navigation = new EventEmitter<Promise<boolean>>();

	get href() {
		return this.domSanitizer.bypassSecurityTrustUrl(this._href) as string;
	}

	/**
	 * Optional target for the underlying anchor.
	 */
	@Input() set target(value: string) {
		this._target = value;
	}

	get target() {
		return this._target;
	}

	@HostBinding("class.bx--switcher__item") itemClass = true;

	protected _href = "javascript:void(0)";
	protected _target = "";

	constructor(protected domSanitizer: DomSanitizer, @Optional() protected router: Router) { }

	navigate(event) {
		if (this.router && this.route) {
			event.preventDefault();
			const status = this.router.navigate(this.route, this.routeExtras);
			this.navigation.emit(status);
		}
	}
}
