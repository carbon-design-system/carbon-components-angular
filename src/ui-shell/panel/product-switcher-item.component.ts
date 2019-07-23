import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-product-switcher-item",
	template: `<ng-content></ng-content>`
})
export class ProductSwitcherItem {
	@HostBinding("class.bx--product-switcher__item") hostClass = true;
}
