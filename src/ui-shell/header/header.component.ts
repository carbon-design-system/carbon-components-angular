import {
	Component,
	Input,
	Optional,
	Output,
	EventEmitter,
	TemplateRef
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { I18n } from "carbon-components-angular/i18n";

/**
 * A fixed header and navigation.
 * Header may contain a Hamburger menu to toggle the side navigation, navigation actions,
 * and global actions (generally in the form of `Panel`s).
 *
 * [See demo](../../?path=/story/components-ui-shell--header)
 */
@Component({
	selector: "cds-header, ibm-header",
	template: `
		<header
			class="cds--header"
			[attr.aria-label]="brand + ' ' + name">
			<a
				*ngIf="skipTo"
				class="cds--skip-to-content"
				[href]="skipTo"
				tabindex="0">
				{{ i18n.get("UI_SHELL.SKIP_TO") | async }}
			</a>
			<ng-content select="cds-hamburger"></ng-content>
			<ng-template
				*ngIf="isTemplate(brand)"
				[ngTemplateOutlet]="brand">
			</ng-template>
			<ng-container *ngIf="!isTemplate(brand)" [ngSwitch]="useRouter">
				<a
					*ngSwitchCase="false"
					class="cds--header__name"
					[href]="href"
					(click)="navigate($event)">
					<span class="cds--header__name--prefix">{{brand}}&nbsp;</span>
					{{name}}
				</a>
				<a
					*ngSwitchCase="true"
					class="cds--header__name"
					[routerLink]="route">
					<span class="cds--header__name--prefix">{{brand}}&nbsp;</span>
					{{name}}
				</a>
			</ng-container>
			<ng-content></ng-content>
		</header>
	`
})
export class Header {
	/**
	 * ID in the main body content to jump to. Used by keyboard and screen reader users to skip the header content.
	 */
	@Input() skipTo: string;
	/**
	 * Label that shows to the right of the `brand` text. Generally a product name.
	 */
	@Input() name: string;
	/**
	 * Top level branding. Defaults to "IBM"
	 */
	@Input() brand: string | TemplateRef<any> = "IBM";
	/**
	 * Optional link for the header
	 */
	@Input() set href(v: string) {
		this._href = v;
	}

	get href() {
		return this.domSanitizer.bypassSecurityTrustUrl(this._href) as string;
	}

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
	 * Use the routerLink attribute on <a> tag for navigation instead of using event handlers
	 */
	@Input() useRouter = false;

	/**
	 * Emits the navigation status promise when the link is activated
	 */
	@Output() navigation = new EventEmitter<Promise<boolean>>();

	protected _href = "#";

	constructor(
		public i18n: I18n,
		protected domSanitizer: DomSanitizer,
		@Optional() protected router: Router) { }

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}

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
