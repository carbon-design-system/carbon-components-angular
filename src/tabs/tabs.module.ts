import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Tabs } from "./tabs.component";
import { Tab } from "./tab.component";
import { TabHeaders } from "./tab-headers.component";


export { Tabs } from "./tabs.component";
export { Tab } from "./tab.component";
export { TabHeaders } from "./tab-headers.component";


@NgModule({
	declarations: [
		Tabs,
		Tab,
		TabHeaders
	],
	exports: [
		Tabs,
		Tab,
		TabHeaders
	],
	imports: [
		CommonModule
	]
})
export class TabsModule {}
