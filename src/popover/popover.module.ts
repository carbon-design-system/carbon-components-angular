import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { PopoverDirective, TooltipDirective, EllipsisTooltipDirective } from "./popover.directive";
import { Popover } from "./popover.component";

export { PopoverDirective, TooltipDirective, EllipsisTooltipDirective } from "./popover.directive";
export { Popover } from "./popover.component";

@NgModule({
	declarations: [
		PopoverDirective,
		TooltipDirective,
		EllipsisTooltipDirective,
		Popover
	],
	exports: [
		PopoverDirective,
		TooltipDirective,
		EllipsisTooltipDirective,
		Popover
	],
	entryComponents: [Popover],
	imports: [CommonModule, BrowserModule]
})
export class PopoverModule {}
