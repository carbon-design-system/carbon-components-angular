// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StaticIconModule } from "./../icon/static-icon.module";

// imports
import { DialogService } from "./dialog.service";
import { Dialog } from "./dialog.component";
import { DialogDirective } from "./dialog.directive";
import { DialogPlaceholder } from "./dialog-placeholder.component";

import { Tooltip } from "./tooltip/tooltip.component";
import { TooltipDefinition } from "./tooltip/tooltip-definition.component";
import { TooltipIcon } from "./tooltip/tooltip-icon.component";
import { TooltipDirective } from "./tooltip/tooltip.directive";
import { EllipsisTooltip } from "./tooltip/ellipsis-tooltip.directive";

import { OverflowMenu } from "./overflow-menu/overflow-menu.component";
import { OverflowMenuPane } from "./overflow-menu/overflow-menu-pane.component";
import { OverflowMenuDirective } from "./overflow-menu/overflow-menu.directive";
import { OverflowMenuOption } from "./overflow-menu/overflow-menu-option.component";
import { I18nModule } from "./../i18n/i18n.module";
import { PlaceholderModule } from "./../placeholder/placeholder.module";
import { ExperimentalModule } from "./../experimental.module";

// exports
export { DialogService } from "./dialog.service";
export { Dialog } from "./dialog.component";
export { DialogDirective } from "./dialog.directive";
export { DialogPlaceholder } from "./dialog-placeholder.component";

export { Tooltip } from "./tooltip/tooltip.component";
export { TooltipDefinition } from "./tooltip/tooltip-definition.component";
export { TooltipIcon } from "./tooltip/tooltip-icon.component";
export { TooltipDirective } from "./tooltip/tooltip.directive";
export { EllipsisTooltip } from "./tooltip/ellipsis-tooltip.directive";

export { OverflowMenu } from "./overflow-menu/overflow-menu.component";
export { OverflowMenuPane } from "./overflow-menu/overflow-menu-pane.component";
export { OverflowMenuDirective } from "./overflow-menu/overflow-menu.directive";
export { OverflowMenuOption } from "./overflow-menu/overflow-menu-option.component";

@NgModule({
	declarations: [
		Dialog,
		Tooltip,
		TooltipDefinition,
		TooltipIcon,
		OverflowMenu,
		OverflowMenuPane,
		DialogDirective,
		TooltipDirective,
		EllipsisTooltip,
		OverflowMenuDirective,
		OverflowMenuOption,
		DialogPlaceholder
	],
	exports: [
		Dialog,
		Tooltip,
		TooltipDefinition,
		TooltipIcon,
		OverflowMenu,
		OverflowMenuPane,
		DialogDirective,
		TooltipDirective,
		EllipsisTooltip,
		OverflowMenuDirective,
		OverflowMenuOption,
		DialogPlaceholder
	],
	providers: [ DialogService ],
	entryComponents: [
		Dialog,
		Tooltip,
		OverflowMenuPane
	],
	imports: [
		CommonModule,
		StaticIconModule,
		I18nModule,
		PlaceholderModule,
		ExperimentalModule
	]
})
export class DialogModule {}
