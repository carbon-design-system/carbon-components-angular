import {
	Component,
	Input,
	Optional,
	EventEmitter,
	Output,
	HostBinding
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";

/**
 * Individual item in the header. May be used a direct child of `HeaderNavigation` or `HeaderMenu`
 */
@Component({
	selector: "cds-header-item, ibm-header-item",
	template: `
		<ng-container [ngSwitch]="useRouter">
			<ng-template #content><ng-content></ng-content></ng-template>
			<a
				*ngSwitchCase="false"
				class="cds--header__menu-item"
				tabindex="0"
				[ngClass]="{'cds--header__menu-item--current' : isCurrentPage}"
				[href]="href"
				(click)="navigate($event)">
				<ng-container *ngTemplateOutlet="content"></ng-container>
			</a>
			<a
				*ngSwitchCase="true"
				class="cds--header__menu-item"
				[routerLinkActive]="['cds--header__menu-item--current']"
				tabindex="0"
				[ngClass]="{'cds--header__menu-item--current' : isCurrentPage}"
				[routerLink]="route"
				[routerLinkActive]="activeLinkClass">
				<ng-container *ngTemplateOutlet="content"></ng-container>
			</a>
		</ng-container>
	`,
	styles: [`
		:host {
			display: list-item;
		}
	`]
})
export class HeaderItem {
	@HostBinding("attr.role") role = "listitem";
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

	protected _href = "#";

	constructor(protected domSanitizer: DomSanitizer, @Optional() protected router: Router) { }

	navigate(event) {
		if (this.router && this.route) {
			event.preventDefault();
			const status = this.router.navigate(this.route, this.routeExtras);
			this.navigation.emit(status);
		} else if (this._href === "#") {
			event.preventDefault();
		}
	}
}
