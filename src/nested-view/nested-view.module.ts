import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { NestedView } from "./nested-view.component";
import { NestedViewItem } from "./nested-view-item.component";

export { NestedView } from "./nested-view.component";
export { NestedViewItem } from "./nested-view-item.component";

@NgModule({
	declarations: [
		NestedView,
		NestedViewItem
	],
	exports: [
		NestedView,
		NestedViewItem
	],
	imports: [CommonModule, BrowserModule]
})
export class NestedViewModule {}
