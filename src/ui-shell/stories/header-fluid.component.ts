import { Component, Input } from "@angular/core";
import { NavigationItem } from "../";

@Component({
	selector: "app-bar",
	template: "<h1>bar</h1>"
})
export class BarComponent { }

@Component({
	selector: "app-foo",
	template: "<h1>foo</h1>"
})
export class FooComponent { }

@Component({
	selector: "app-header-fluid",
	template: `
		<cds-header name="[Platform]">
			<cds-hamburger
				(selected)="hasHamburger = !hasHamburger"
				class="cds--header__menu-toggle__hidden"></cds-hamburger>
			<cds-header-navigation [navigationItems]="headerItems"></cds-header-navigation>
			<cds-sidenav
				*ngIf="hasHamburger"
				[navigationItems]="headerItems"
				class="cds--header__menu-toggle__hidden"></cds-sidenav>
		</cds-header>
	`
})
export class HeaderFluidComponent {
	@Input() headerItems: NavigationItem[];
	hasHamburger = false;
}
