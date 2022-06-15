import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UtilsModule } from "carbon-components-angular/utils";

import { Tabs } from "./tabs.component";
import { Tab } from "./tab.component";
import { TabHeaders } from "./tab-headers.component";
import { TabHeader } from "./tab-header.component";
import { TabHeaderGroup } from "./tab-header-group.component";
import { TabSkeleton } from "./tab-skeleton.component";

@NgModule({
	declarations: [
		Tabs,
		Tab,
		TabHeaders,
		TabHeader,
		TabHeaderGroup,
		TabSkeleton
	],
	exports: [
		Tabs,
		Tab,
		TabHeaders,
		TabHeader,
		TabHeaderGroup,
		TabSkeleton
	],
	imports: [
		CommonModule,
		UtilsModule
	]
})
export class TabsModule {}
