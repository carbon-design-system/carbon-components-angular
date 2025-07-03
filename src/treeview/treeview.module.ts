import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IconDirective } from "carbon-components-angular/icon";

import { TreeViewComponent } from "./treeview.component";
import { TreeNodeComponent } from "./tree-node.component";

@NgModule({
	exports: [TreeViewComponent, TreeNodeComponent],
	imports: [CommonModule, IconDirective, TreeViewComponent, TreeNodeComponent]
})
export class TreeviewModule {}
