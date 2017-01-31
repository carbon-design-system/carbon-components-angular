import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { TooltipDirective } from "./tooltip.directive";
export { TooltipDirective } from "./tooltip.directive";

@NgModule({
	declarations: [
		TooltipDirective,
	],
	exports: [
		TooltipDirective,
	],
	imports: [CommonModule, BrowserModule]
})
export class TooltipModule {}
