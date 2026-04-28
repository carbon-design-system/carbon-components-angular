import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UtilsModule } from "carbon-components-angular/utils";
import { I18nModule } from "carbon-components-angular/i18n";
import { TooltipModule } from "carbon-components-angular/tooltip";

import { TabSkeleton } from "./tab-skeleton.component";
import { BaseTabHeader } from "./base-tab-header.component";
import { Tabs } from "./tabs.component";
import { TabsVertical } from "./tabs-vertical.component";
import { TabsVerticalGrouped } from "./tabs-vertical-grouped.component";
import { Tab } from "./tab.component";
import { IconTab } from "./icon-tab.component";
import { TabHeader } from "./tab-header.directive";
import { TabHeaderComponent } from "./tab-header.component";
import { TabHeaders } from "./tab-headers.component";
import { TabHeadersVertical } from "./tab-headers-vertical.component";
import { TabHeaderGroup } from "./tab-header-group.component";
import { TabHeaderGroupVertical } from "./tab-header-group-vertical.component";

@NgModule({
	declarations: [
		BaseTabHeader,
		Tabs,
		TabsVertical,
		TabsVerticalGrouped,
		Tab,
		IconTab,
		TabHeader,
		TabHeaderComponent,
		TabHeaders,
		TabHeadersVertical,
		TabHeaderGroup,
		TabHeaderGroupVertical,
		TabSkeleton
	],
	exports: [
		Tabs,
		TabsVertical,
		TabsVerticalGrouped,
		Tab,
		IconTab,
		TabHeader,
		TabHeaderComponent,
		TabHeaders,
		TabHeadersVertical,
		TabHeaderGroup,
		TabHeaderGroupVertical,
		TabSkeleton
	],
	imports: [
		CommonModule,
		UtilsModule,
		I18nModule,
		TooltipModule
	]
})
export class TabsModule {}
