import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { CdlTabs } from "./tabs.component";
import { CdlTab } from "./tab.component";
import { CdlTabHeaders } from "./tab-headers.component";


export { CdlTabs } from "./tabs.component";
export { CdlTab } from "./tab.component";
export { CdlTabHeaders } from "./tab-headers.component";


@NgModule({
	declarations: [
		CdlTabs,
		CdlTab,
		CdlTabHeaders
	],
	exports: [
		CdlTabs,
		CdlTab,
		CdlTabHeaders
	],
	imports: [CommonModule, BrowserModule],
})
export class TabsModule {}
