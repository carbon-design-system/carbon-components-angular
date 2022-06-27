// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// imports
import { DialogService } from "./dialog.service";
import { Dialog } from "./dialog.component";
import { DialogDirective } from "./dialog.directive";

import { OverflowMenu } from "./overflow-menu/overflow-menu.component";
import { OverflowMenuPane } from "./overflow-menu/overflow-menu-pane.component";
import { OverflowMenuCustomPane } from "./overflow-menu/overflow-menu-custom-pane.component";
import { OverflowMenuDirective } from "./overflow-menu/overflow-menu.directive";
import { OverflowMenuOption } from "./overflow-menu/overflow-menu-option.component";
import { I18nModule } from "carbon-components-angular/i18n";
import { PlaceholderModule } from "carbon-components-angular/placeholder";
import { ExperimentalModule } from "carbon-components-angular/experimental";
import { UtilsModule } from "carbon-components-angular/utils";
import { IconModule } from "carbon-components-angular/icon";

@NgModule({
	declarations: [
		Dialog,
		OverflowMenu,
		OverflowMenuPane,
		OverflowMenuCustomPane,
		DialogDirective,
		OverflowMenuDirective,
		OverflowMenuOption
	],
	exports: [
		Dialog,
		OverflowMenu,
		OverflowMenuPane,
		OverflowMenuCustomPane,
		DialogDirective,
		OverflowMenuDirective,
		OverflowMenuOption
	],
	providers: [ DialogService ],
	imports: [
		CommonModule,
		I18nModule,
		PlaceholderModule,
		ExperimentalModule,
		UtilsModule,
		IconModule
	]
})
export class DialogModule {}
