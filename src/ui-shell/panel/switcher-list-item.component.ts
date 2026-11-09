import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding,
	inject
} from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { NgClass } from "@angular/common";

/**
 * Represents an item in a switcher list.
 */
@Component({
	selector: "cds-switcher-list-item, ibm-switcher-list-item",
	template: `
		<a
			class="cds--switcher__item-link"
			[ngClass]="{
				'cds--switcher__item-link--selected': active
			}"
			[href]="href"
			[target]="target"
			(click)="navigate($event)">
			<ng-content />
		</a>
	`,
	imports: [NgClass]
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

	@HostBinding("class.cds--switcher__item") itemClass = true;

	@HostBinding("attr.role") itemRole = "listitem";

	protected _href = "#";
	protected _target = "";

	protected domSanitizer = inject(DomSanitizer);
	protected router = inject(Router, { optional: true })!;

	/** Inserted by Angular inject() migration for backwards compatibility */
	// eslint-disable-next-line @angular-eslint/prefer-inject -- backwards-compatible DI overload until next major
	constructor(...args: unknown[]);

	constructor() {}

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
