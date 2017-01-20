import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { ListViewModule } from "./../list-view/list-view.module";
import { TopNav } from "./top-nav.component";

export { TopNav } from "./top-nav.component";

@NgModule({
	declarations: [
		TopNav
	],
	exports: [

		TopNav
	],
	imports: [CommonModule, BrowserModule, ListViewModule ]
})
export class TopNavModule {}
