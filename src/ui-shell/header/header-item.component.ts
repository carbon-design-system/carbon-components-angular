import { Component, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

/**
 * Individual item in the header. May be used a direct child of `HeaderNavigation` or `HeaderMenu`
 */
@Component({
	selector: "ibm-header-item",
	template: `
		<li style="height: 100%">
			<a class="bx--header__menu-item" [href]="href" role="menuitem" tabindex="0">
				<ng-content></ng-content>
			</a>
		</li>
	`
})
export class HeaderItem {
	@Input() set href(v: string) {
		this._href = v;
	}

	get href() {
		return this.domSanitizer.bypassSecurityTrustUrl(this._href) as string;
	}

	protected _href = "javascript:void(0)";

	constructor(protected domSanitizer: DomSanitizer) { }
}
