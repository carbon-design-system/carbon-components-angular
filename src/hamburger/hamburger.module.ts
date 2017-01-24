import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Hamburger } from "./hamburger.component";

export { Hamburger } from "./hamburger.component";

@NgModule({
	declarations: [
		Hamburger
	],
	exports: [

		Hamburger
	],
	imports: [CommonModule, BrowserModule]
})
export class HamburgerModule {}
