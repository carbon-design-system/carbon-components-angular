import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { TopNav } from "./top-nav.component";

export { TopNav } from "./top-nav.component";

@NgModule({
	declarations: [
		TopNav
	],
	exports: [

		TopNav
	],
	imports: [CommonModule, BrowserModule]
})
export class TopNavModule {}
