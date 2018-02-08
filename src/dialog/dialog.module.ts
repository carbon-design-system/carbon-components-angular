// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { StaticIconModule } from "./../icon/static-icon.module";

// imports
import { DialogService } from "./dialog.service";
import { Dialog } from "./dialog.component";
import { DialogDirective } from "./dialog.directive";

import { Popover } from "./popover/popover.component";
import { PopoverDirective } from "./popover/popover.directive";
import { PopoverMenu } from "./popover/popover-menu.component";
import { PopoverMenuDirective } from "./popover/popover-menu.directive";

import { Tooltip } from "./tooltip/tooltip.component";
import { TooltipDirective } from "./tooltip/tooltip.directive";
import { EllipsisTooltipDirective } from "./tooltip/ellipsis-tooltip.directive";

// exports
export { DialogService } from "./dialog.service";
export { Dialog } from "./dialog.component";
export { DialogDirective } from "./dialog.directive";

export { Popover } from "./popover/popover.component";
export { PopoverDirective } from "./popover/popover.directive";
export { PopoverMenu } from "./popover/popover-menu.component";
export { PopoverMenuDirective } from "./popover/popover-menu.directive";

export { Tooltip } from "./tooltip/tooltip.component";
export { TooltipDirective } from "./tooltip/tooltip.directive";
export { EllipsisTooltipDirective } from "./tooltip/ellipsis-tooltip.directive";

@NgModule({
	declarations: [
		Dialog,
		Popover,
		PopoverMenu,
		Tooltip,
		DialogDirective,
		PopoverDirective,
		PopoverMenuDirective,
		TooltipDirective,
		EllipsisTooltipDirective
	],
	exports: [
		Dialog,
		Popover,
		PopoverMenu,
		Tooltip,
		DialogDirective,
		PopoverDirective,
		PopoverMenuDirective,
		TooltipDirective,
		EllipsisTooltipDirective
	],
	providers: [
		DialogService
	],
	entryComponents: [
		Dialog,
		Popover,
		PopoverMenu,
		Tooltip
	],
	imports: [CommonModule, TranslateModule, StaticIconModule]
})
export class DialogModule {}
