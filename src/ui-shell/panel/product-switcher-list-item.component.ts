import { Component, HostBinding, Input } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
	selector: "ibm-product-switcher-list-item",
	template: `
		<li class="bx--product-list__item">
			<a class="bx--product-link" tabindex="0" [href]="href">
				<div class="bx--product-switcher__icon">
					<ng-content select="svg"></ng-content>
				</div>
				<span class="bx--product-link__name">
					<ng-content></ng-content>
				</span>
			</a>
			<ng-content select="ibm-overflow-menu"></ng-content>
		</li>
	`
})
export class ProductSwitcherListItem {
	@Input() set href(value: string) {
		this._href = this.domSanitizer.bypassSecurityTrustUrl(value);
	}

	get href() {
		return this._href as string;
	}

	protected _href: SafeUrl;

	constructor(protected domSanitizer: DomSanitizer) {
		this.href = "javascript:void(0)";
	}
}
