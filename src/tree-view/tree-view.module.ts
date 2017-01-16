import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { TreeView } from "./tree-view.component";

export { TreeView } from "./tree-view.component";

@NgModule({
	declarations: [
		TreeView
	],
	exports: [
		TreeView
	],
	imports: [CommonModule, BrowserModule]
})
export class TreeViewModule {}
