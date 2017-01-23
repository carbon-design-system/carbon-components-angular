import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { ListViewModule } from "./../list-view/list-view.module";
import { SideNav } from "./side-nav.component";

export { SideNav } from "./side-nav.component";

@NgModule({
	declarations: [
		SideNav
	],
	exports: [

		SideNav
	],
	imports: [CommonModule, BrowserModule, ListViewModule ]
})
export class SideNavModule {}