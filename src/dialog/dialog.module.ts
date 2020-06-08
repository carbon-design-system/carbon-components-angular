// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// imports
import { DialogService } from "./dialog.service";
import { Dialog } from "./dialog.component";
import { DialogDirective } from "./dialog.directive";

import { Tooltip } from "./tooltip/tooltip.component";
import { TooltipDefinition } from "./tooltip/tooltip-definition.component";
import { TooltipIcon } from "./tooltip/tooltip-icon.component";
import { TooltipDirective } from "./tooltip/tooltip.directive";
import { EllipsisTooltip } from "./tooltip/ellipsis-tooltip.directive";

import { OverflowMenu } from "./overflow-menu/overflow-menu.component";
import { OverflowMenuPane } from "./overflow-menu/overflow-menu-pane.component";
import { OverflowMenuDirective } from "./overflow-menu/overflow-menu.directive";
import { OverflowMenuOption } from "./overflow-menu/overflow-menu-option.component";
import { I18nModule } from "./../i18n/index";
import { PlaceholderModule } from "./../placeholder/index";
import { ExperimentalModule } from "./../experimental.module";
import { UtilsModule } from "./../utils/utils.module";

import { OverflowMenuVerticalModule } from "@carbon/icons-angular";

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
		OverflowMenuOption
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
		OverflowMenuOption
	],
	providers: [ DialogService ],
	entryComponents: [
		Dialog,
		Tooltip,
		OverflowMenuPane
	],
	imports: [
		CommonModule,
		I18nModule,
		PlaceholderModule,
		ExperimentalModule,
		UtilsModule,
		OverflowMenuVerticalModule
	]
})
export class DialogModule {}
