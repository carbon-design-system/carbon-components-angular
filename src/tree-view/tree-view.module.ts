import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TreeView } from "./tree-view.component";
import { TreeViewWrapper } from "./tree-view-wrapper.component";
import { TreeViewItem } from "./tree-view-item.component";

export { TreeView } from "./tree-view.component";
export { TreeViewWrapper } from "./tree-view-wrapper.component";
export { TreeViewItem } from "./tree-view-item.component";

/**
 * See TreeView for usage information
 */
@NgModule({
	declarations: [
		TreeView,
		TreeViewWrapper,
		TreeViewItem
	],
	exports: [
		TreeView,
		TreeViewWrapper,
		TreeViewItem
	],
	imports: [CommonModule]
})
export class TreeViewModule {}
