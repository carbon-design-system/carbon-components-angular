import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { Dropdown } from "./dropdown.component";
import { DropdownList } from "./list/dropdown-list.component";
import { DropdownSubMenu } from "./sub-menu/sub-menu.component";
import { SubMenuItem } from "./sub-menu/sub-menu-item.component";
import { DropdownTree } from "./tree/tree.component";
import { TreeItem } from "./tree/tree-item.component";

export { Dropdown } from "./dropdown.component";
export { DropdownList } from "./list/dropdown-list.component";
export { DropdownSubMenu } from "./sub-menu/sub-menu.component";

export { AbstractDropdownView } from "./AbstractDropdownView.class";

@NgModule({
	declarations: [
		Dropdown,
		DropdownList,
		DropdownSubMenu,
		SubMenuItem,
		DropdownTree,
		TreeItem
	],
	exports: [
		Dropdown,
		DropdownList,
		DropdownSubMenu,
		DropdownTree
	],
	imports: [CommonModule, BrowserModule],
})
export class DropdownModule {}
