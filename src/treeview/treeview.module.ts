import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IconModule } from "carbon-components-angular/icon";

import { TreeViewComponent } from "./treeview.component";
import { TreeNodeComponent } from "./tree-node.component";

@NgModule({
	declarations: [TreeViewComponent, TreeNodeComponent],
	exports: [TreeViewComponent, TreeNodeComponent],
	imports: [CommonModule, IconModule]
})
export class TreeviewModule {}
