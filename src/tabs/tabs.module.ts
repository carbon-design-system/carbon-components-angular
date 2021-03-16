import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UtilsModule } from "carbon-components-angular/utils";

import { Tabs } from "./tabs.component";
import { Tab } from "./tab.component";
import { TabHeaders } from "./tab-headers.component";
import { TabHeader } from "./tab-header.component";
import { TabHeaderGroup } from "./tab-header-group.component";

@NgModule({
	declarations: [
		Tabs,
		Tab,
		TabHeaders,
		TabHeader,
		TabHeaderGroup
	],
	exports: [
		Tabs,
		Tab,
		TabHeaders,
		TabHeader,
		TabHeaderGroup
	],
	imports: [
		CommonModule,
		UtilsModule
	]
})
export class TabsModule {}
