import { Component, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
	selector: "ibm-header-item",
	template: `
		<li style="height: 100%">
			<a class="bx--header__menu-item" [href]="getHref()" role="menuitem" tabindex="0">
				<ng-content></ng-content>
			</a>
		</li>
	`
})
export class HeaderItem {
	@Input() href = "javascript:void(0)";

	constructor(protected domSanitizer: DomSanitizer) { }

	getHref() {
		return this.domSanitizer.bypassSecurityTrustUrl(this.href);
	}
}
