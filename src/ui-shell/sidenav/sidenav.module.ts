import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { I18nModule } from "carbon-components-angular/i18n";

import { SideNav } from "./sidenav.component";
import { SideNavItem } from "./sidenav-item.component";
import { SideNavMenu } from "./sidenav-menu.component";
import { RouterLinkExtendedDirective } from "./routerlink-extended.directive";

export { SideNavItemInterface } from "./sidenav-item.interface";

export {
	SideNav,
	SideNavItem,
	SideNavMenu
};

@NgModule({
	imports: [
		CommonModule,
		I18nModule,
		RouterModule,
		SideNav,
		SideNavItem,
		SideNavMenu,
		RouterLinkExtendedDirective
	],
	exports: [
		SideNav,
		SideNavItem,
		SideNavMenu
	]
})
export class SideNavModule { }
