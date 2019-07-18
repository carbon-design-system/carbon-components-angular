import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
	selector: "ibm-switcher-list-item, ibm-product-switcher-list-item",
	template: `
		<a
			class="bx--switcher__item-link"
			[ngClass]="{
				'bx--switcher__item-link--selected': active
			}"
			[href]="href">
			<ng-content></ng-content>
		</a>
	`
})
export class SwitcherListItem {
	@Input() active = false;

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
