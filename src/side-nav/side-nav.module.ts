import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SideNav } from "./side-nav.component";
import { SideNavGroup } from "./side-nav-group.component";
import { SideNavItem } from "./side-nav-item.component";
import { SideNavPaneTitle } from "./side-nav-pane-title.component";
import { SideNavSubpanel } from "./side-nav-subpanel.component";

export { SideNav } from "./side-nav.component";
export { SideNavItem } from "./side-nav-item.component";
export { SideNavPaneTitle } from "./side-nav-pane-title.component";
export { SideNavSubpanel } from "./side-nav-subpanel.component";


@NgModule({
	declarations: [
		SideNav,
		SideNavGroup,
		SideNavItem,
		SideNavPaneTitle,
		SideNavSubpanel
	],
	exports: [
		SideNav,
		SideNavGroup,
		SideNavItem,
		SideNavPaneTitle,
		SideNavSubpanel
	],
	imports: [CommonModule]
})
export class SideNavModule {}
