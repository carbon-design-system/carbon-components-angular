import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { PopoverDirective } from "./popover.directive";
import { TooltipDirective } from "./tooltip.directive";
import { EllipsisTooltipDirective } from "./ellipsis-tooltip.directive";
import { Popover } from "./popover.component";

export { PopoverDirective } from "./popover.directive";
export { TooltipDirective } from "./tooltip.directive";
export { EllipsisTooltipDirective } from "./ellipsis-tooltip.directive";
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
