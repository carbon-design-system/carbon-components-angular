import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { TreeView } from "./tree-view.component";
import { TreeViewItem } from "./tree-view-item.component";

export { TreeView } from "./tree-view.component";
export { TreeViewItem } from "./tree-view-item.component";

@NgModule({
	declarations: [
		TreeView,
		TreeViewItem
	],
	exports: [
		TreeView,
		TreeViewItem
	],
	imports: [CommonModule, BrowserModule]
})
export class TreeViewModule {}
