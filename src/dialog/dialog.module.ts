// modules
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StaticIconModule } from "./../icon/static-icon.module";

// imports
import { DialogService } from "./dialog.service";
import { DialogPlaceholderService } from "./dialog-placeholder.service";
import { Dialog } from "./dialog.component";
import { DialogDirective } from "./dialog.directive";
import { DialogPlaceholderComponent } from "./dialog-placeholder.component";

import { Tooltip } from "./tooltip/tooltip.component";
import { TooltipDirective } from "./tooltip/tooltip.directive";
import { EllipsisTooltipDirective } from "./tooltip/ellipsis-tooltip.directive";

import { OverflowMenu } from "./overflow-menu/overflow-menu.component";
import { OverflowMenuPane } from "./overflow-menu/overflow-menu-pane.component";
import { OverflowMenuDirective } from "./overflow-menu/overflow-menu.directive";
import { OverflowMenuOption } from "./overflow-menu/overflow-menu-option.component";

// exports
export { DialogService } from "./dialog.service";
export { DialogPlaceholderService } from "./dialog-placeholder.service";
export { Dialog } from "./dialog.component";
export { DialogDirective } from "./dialog.directive";
export { DialogPlaceholderComponent } from "./dialog-placeholder.component";

export { Tooltip } from "./tooltip/tooltip.component";
export { TooltipDirective } from "./tooltip/tooltip.directive";
export { EllipsisTooltipDirective } from "./tooltip/ellipsis-tooltip.directive";

export { OverflowMenu } from "./overflow-menu/overflow-menu.component";
export { OverflowMenuPane } from "./overflow-menu/overflow-menu-pane.component";
export { OverflowMenuDirective } from "./overflow-menu/overflow-menu.directive";
export { OverflowMenuOption } from "./overflow-menu/overflow-menu-option.component";

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
		Tooltip,
		OverflowMenu,
		OverflowMenuPane,
		DialogDirective,
		TooltipDirective,
		EllipsisTooltipDirective,
		OverflowMenuDirective,
		OverflowMenuOption,
		DialogPlaceholderComponent
	],
	exports: [
		Dialog,
		Tooltip,
		OverflowMenu,
		OverflowMenuPane,
		DialogDirective,
		TooltipDirective,
		EllipsisTooltipDirective,
		OverflowMenuDirective,
		OverflowMenuOption,
		DialogPlaceholderComponent
	],
	providers: [
		DialogService,
		DIALOG_PLACEHOLDER_SERVICE_PROVIDER
	],
	entryComponents: [
		Dialog,
		Tooltip,
		OverflowMenuPane
	],
	imports: [CommonModule, StaticIconModule]
})
export class DialogModule {}
