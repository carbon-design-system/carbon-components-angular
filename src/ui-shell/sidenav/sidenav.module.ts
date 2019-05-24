import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { I18nModule } from "./../../i18n/i18n.module";

import { SideNav } from "./sidenav.component";
import { SideNavHeader } from "./sidenav-header.component";
import { SideNavItem } from "./sidenav-item.component";
import { SideNavMenu } from "./sidenav-menu.component";

export {
	SideNav,
	SideNavHeader,
	SideNavItem,
	SideNavMenu
};

@NgModule({
	declarations: [
		SideNav,
		SideNavHeader,
		SideNavItem,
		SideNavMenu
	],
	imports: [CommonModule, I18nModule],
	exports: [
		SideNav,
		SideNavHeader,
		SideNavItem,
		SideNavMenu
	]
})
export class SideNavModule { }
