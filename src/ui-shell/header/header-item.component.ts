import {
	Component,
	Input,
	Optional,
	EventEmitter,
	Output
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";

/**
 * Individual item in the header. May be used a direct child of `HeaderNavigation` or `HeaderMenu`
 */
@Component({
	selector: "ibm-header-item",
	template: `
		<li style="height: 100%">
			<ng-container [ngSwitch]="useRouter">
				<ng-template #content><ng-content></ng-content></ng-template>
				<a
					*ngSwitchCase="false"
					class="bx--header__menu-item"
					role="menuitem"
					tabindex="0"
					[ngClass]="{'bx--header__menu-item--current' : isCurrentPage}"
					[href]="href"
					(click)="navigate($event)">
					<ng-container *ngTemplateOutlet="content"></ng-container>
				</a>
				<a
					*ngSwitchCase="true"
					class="bx--header__menu-item"
					role="menuitem"
					[routerLinkActive]="['bx--header__menu-item--current']"
					tabindex="0"
					[ngClass]="{'bx--header__menu-item--current' : isCurrentPage}"
					[routerLink]="route"
					[routerLinkActive]="activeLinkClass">
					<ng-container *ngTemplateOutlet="content"></ng-container>
				</a>
			</ng-container>
		</li>
	`
})
export class HeaderItem {
	@Input() set href(v: string) {
		// Needed when component is created dynamically with a model.
		if (v === undefined) {
			return;
		}
		this._href = v;
	}

	get href() {
		return this.domSanitizer.bypassSecurityTrustUrl(this._href) as string;
	}

	/**
	 * Use the routerLink attribute on <a> tag for navigation instead of using event handlers
	 */
	@Input() useRouter = false;

	/**
	 * String or array of string class names to apply when active
	 */
	@Input() activeLinkClass: string | string[];

	/**
	 * Applies selected styles to the item if a user sets this to true.
	 */
	@Input() isCurrentPage: boolean;

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

	protected _href = "javascript:void(0)";

	constructor(protected domSanitizer: DomSanitizer, @Optional() protected router: Router) { }

	navigate(event) {
		if (this.router && this.route) {
			event.preventDefault();
			const status = this.router.navigate(this.route, this.routeExtras);
			this.navigation.emit(status);
		}
	}
}
