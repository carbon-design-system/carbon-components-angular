import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { SubMenuView } from "./sub-menu-view.component";
import { SubMenuViewItem } from "./sub-menu-view-item.component";

export { SubMenuView } from "./sub-menu-view.component";
export { SubMenuViewItem } from "./sub-menu-view-item.component";

@NgModule({
	declarations: [
		SubMenuView,
		SubMenuViewItem
	],
	exports: [
		SubMenuView,
		SubMenuViewItem
	],
	imports: [CommonModule, BrowserModule]
})
export class SubMenuViewModule {}
