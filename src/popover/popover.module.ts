import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { PopoverDirective } from "./popover.directive";
import { Popover } from "./popover.component";

export { PopoverDirective } from "./popover.directive";
export { Popover } from "./popover.component";

@NgModule({
	declarations: [
		PopoverDirective,
		Popover
	],
	exports: [
		PopoverDirective,
		Popover
	],
	entryComponents: [Popover],
	imports: [CommonModule, BrowserModule]
})
export class PopoverModule {}
