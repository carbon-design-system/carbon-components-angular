import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UtilsModule } from "carbon-components-angular/utils";
import { I18nModule } from "carbon-components-angular/i18n";

import { TabSkeleton } from "./tab-skeleton.component";
import { BaseTabHeader } from "./base-tab-header.component";
import { Tabs } from "./tabs.component";
import { Tab } from "./tab.component";
import { TabHeader } from "./tab-header.directive";
import { TabHeaders } from "./tab-headers.component";
import { TabHeaderGroup } from "./tab-header-group.component";

@NgModule({
	declarations: [
		BaseTabHeader,
		Tabs,
		Tab,
		TabHeader,
		TabHeaders,
		TabHeaderGroup,
		TabSkeleton
	],
	exports: [
		Tabs,
		Tab,
		TabHeader,
		TabHeaders,
		TabHeaderGroup,
		TabSkeleton
	],
	imports: [
		CommonModule,
		UtilsModule,
		I18nModule
	]
})
export class TabsModule {}
