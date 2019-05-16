import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-product-switcher-list",
	template: `
		<ul class="bx--product-switcher__product-list">
			<ng-content></ng-content>
		</ul>
	`
})
export class ProductSwitcherList {
}
