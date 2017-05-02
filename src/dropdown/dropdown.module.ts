import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { Dropdown } from "./dropdown.component";
import { DropdownList } from "./list/dropdown-list.component";
import { DropdownFilter } from "./list/dropdown-filter-list.component";
import { DropdownSubMenu } from "./sub-menu/sub-menu.component";
import { SubMenuWrapper } from "./sub-menu/sub-menu-wrapper.component";
import { SubMenuItem } from "./sub-menu/sub-menu-item.component";
import { DropdownTree } from "./tree/tree.component";
import { TreeWrapper } from "./tree/tree-wrapper.component";
import { TreeItem } from "./tree/tree-item.component";

import { AbstractDropdownView } from "./abstract-dropdown-view.class";
import { ListItem } from "./list-item.interface";

export { Dropdown } from "./dropdown.component";
export { DropdownList } from "./list/dropdown-list.component";
export { DropdownFilter } from "./list/dropdown-filter-list.component";
export { DropdownTree } from "./tree/tree.component";
export { DropdownSubMenu } from "./sub-menu/sub-menu.component";

export { AbstractDropdownView } from "./abstract-dropdown-view.class";
export { ListItem } from "./list-item.interface";

@NgModule({
	declarations: [
		Dropdown,
		DropdownList,
		DropdownFilter,
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
		DropdownFilter,
		DropdownSubMenu,
		DropdownTree
	],
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule
	]
})
export class DropdownModule {}
