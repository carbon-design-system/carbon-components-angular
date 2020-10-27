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
import { OverflowMenuCustomPane } from "./overflow-menu/overflow-menu-custom-pane.component";
import { OverflowMenuDirective } from "./overflow-menu/overflow-menu.directive";
import { OverflowMenuOption } from "./overflow-menu/overflow-menu-option.component";
import { I18nModule } from "carbon-components-angular/i18n";
import { PlaceholderModule } from "carbon-components-angular/placeholder";
import { ExperimentalModule } from "carbon-components-angular/experimental";
import { UtilsModule } from "carbon-components-angular/utils";

import { OverflowMenuVerticalModule } from "@carbon/icons-angular";

@NgModule({
	declarations: [
		Dialog,
		Tooltip,
		TooltipDefinition,
		TooltipIcon,
		OverflowMenu,
		OverflowMenuPane,
		OverflowMenuCustomPane,
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
		OverflowMenuCustomPane,
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
		OverflowMenuPane,
		OverflowMenuCustomPane
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
