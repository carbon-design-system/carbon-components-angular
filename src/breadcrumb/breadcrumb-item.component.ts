import {
	Component,
	HostBinding,
	Input,
	Output,
	EventEmitter,
	Optional
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
	selector: "cds-breadcrumb-item, ibm-breadcrumb-item",
	template: `
	<a
		class="cds--link"
		[href]="(skeleton ? '/#' : href)"
		(click)="navigate($event)"
		[attr.aria-current]="(current ? ariaCurrent : null)"
		*ngIf="useTemplate(); else content">
		<ng-container *ngTemplateOutlet="content"></ng-container>
	</a>
	<ng-template #content>
		<ng-content></ng-content>
	</ng-template>`
})
export class BreadcrumbItemComponent {
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
	 * Emits the navigation status promise when the link is activated
	 */
	@Output() navigation = new EventEmitter<Promise<boolean>>();

	@Input() skeleton = false;

	@Input() ariaCurrent = "page";

	@HostBinding("class.cds--breadcrumb-item--current") @Input() current = false;

	@HostBinding("class.cds--breadcrumb-item") itemClass = true;

	protected _href: string;

	constructor(protected domSanitizer: DomSanitizer, @Optional() protected router: Router) { }

	useTemplate() {
		return this.skeleton || this._href || this.route;
	}

	navigate(event) {
		if (this.router && this.route) {
			event.preventDefault();
			const status = this.router.navigate(this.route, this.routeExtras);
			this.navigation.emit(status);
		}
	}
}
