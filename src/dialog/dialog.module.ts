// modules
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { StaticIconModule } from "./../icon/static-icon.module";

// imports
import { DialogService } from "./dialog.service";
import { DialogPlaceholderService } from "./dialog-placeholder.service";
import { Dialog } from "./dialog.component";
import { DialogDirective } from "./dialog.directive";
import { DialogPlaceholderComponent } from "./dialog-placeholder.component";

import { Popover } from "./popover/popover.component";
import { PopoverDirective } from "./popover/popover.directive";
import { PopoverMenu } from "./popover/popover-menu.component";
import { PopoverMenuDirective } from "./popover/popover-menu.directive";

import { Tooltip } from "./tooltip/tooltip.component";
import { TooltipDirective } from "./tooltip/tooltip.directive";
import { EllipsisTooltipDirective } from "./tooltip/ellipsis-tooltip.directive";

// exports
export { DialogService } from "./dialog.service";
export { DialogPlaceholderService } from "./dialog-placeholder.service";
export { Dialog } from "./dialog.component";
export { DialogDirective } from "./dialog.directive";
export { DialogPlaceholderComponent } from "./dialog-placeholder.component";

export { Popover } from "./popover/popover.component";
export { PopoverDirective } from "./popover/popover.directive";
export { PopoverMenu } from "./popover/popover-menu.component";
export { PopoverMenuDirective } from "./popover/popover-menu.directive";

export { Tooltip } from "./tooltip/tooltip.component";
export { TooltipDirective } from "./tooltip/tooltip.directive";
export { EllipsisTooltipDirective } from "./tooltip/ellipsis-tooltip.directive";

// either provides a new instance of DialogPlaceholderService, or returns the parent
export function DIALOG_PLACEHOLDER_SERVICE_PROVIDER_FACTORY(parentService: DialogPlaceholderService) {
	return parentService || new DialogPlaceholderService();
}

// placholder service *must* be a singleton to ensure the placeholder viewref is accessible globally
export const DIALOG_PLACEHOLDER_SERVICE_PROVIDER = {
	provide: DialogPlaceholderService,
	deps: [[new Optional(), new SkipSelf(), DialogPlaceholderService]],
	useFactory: DIALOG_PLACEHOLDER_SERVICE_PROVIDER_FACTORY
};

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
		EllipsisTooltipDirective,
		DialogPlaceholderComponent
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
		EllipsisTooltipDirective,
		DialogPlaceholderComponent
	],
	providers: [
		DialogService,
		DIALOG_PLACEHOLDER_SERVICE_PROVIDER
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
