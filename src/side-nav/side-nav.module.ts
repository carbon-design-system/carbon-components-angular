import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { SideNav } from "./side-nav.component";
import { SideNavItem } from "./side-nav-item.component";

export { SideNav } from "./side-nav.component";
export { SideNavItem } from "./side-nav-item.component";
import { SideNavPaneTitle } from "./side-nav-pane-title.component";

@NgModule({
	declarations: [
		SideNav,
		SideNavItem,
		SideNavPaneTitle
	],
	exports: [
		SideNav,
		SideNavItem,
		SideNavPaneTitle
	],
	imports: [CommonModule, BrowserModule]
})
export class SideNavModule {}
