import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { TopNav } from "./top-nav.component";
import { Hamburger } from "./hamburger.component";

export { TopNav } from "./top-nav.component";
export { Hamburger } from "./hamburger.component";

@NgModule({
	declarations: [
		TopNav,
		Hamburger
	],
	exports: [
		TopNav,
		Hamburger
	],
	imports: [CommonModule, BrowserModule]
})
export class TopNavModule {}
