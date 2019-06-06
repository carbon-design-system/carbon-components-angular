import { Component, Input } from "@angular/core";

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
	@Input() href = "javascript:void(0)";
}
