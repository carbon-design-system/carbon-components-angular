import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { Dropdown } from "./dropdown.component";
import { DropdownList } from "./list/dropdown-list.component";
import { DropdownSubMenu } from "./sub-menu/sub-menu.component";
import { SubMenuWrapper } from "./sub-menu/sub-menu-wrapper.component";
import { SubMenuItem } from "./sub-menu/sub-menu-item.component";
import { DropdownTree } from "./tree/tree.component";
import { TreeWrapper } from "./tree/tree-wrapper.component";
import { TreeItem } from "./tree/tree-item.component";

export { Dropdown } from "./dropdown.component";
export { DropdownList } from "./list/dropdown-list.component";
export { DropdownSubMenu } from "./sub-menu/sub-menu.component";

export { AbstractDropdownView } from "./abstract-dropdown-view.class";
export { ListItem } from "./list-item.interface";

@NgModule({
	declarations: [
		Dropdown,
		DropdownList,
		DropdownSubMenu,
		SubMenuWrapper,
		SubMenuItem,
		DropdownTree,
		TreeWrapper,
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
