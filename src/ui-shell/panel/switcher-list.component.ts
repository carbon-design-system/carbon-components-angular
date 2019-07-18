import { Component } from "@angular/core";

@Component({
	selector: "ibm-switcher-list, ibm-product-switcher-list",
	template: `
		<ul class="bx--switcher__item">
			<ng-content></ng-content>
		</ul>
	`
})
export class SwitcherList {}
