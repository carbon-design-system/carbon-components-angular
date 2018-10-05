import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { StaticIconModule } from "./../icon/static-icon.module";

import { Dropdown } from "./dropdown.component";
import { DropdownList } from "./list/dropdown-list.component";

import { ScrollableList } from "./scrollable-list.directive";

export { Dropdown } from "./dropdown.component";
export { DropdownList } from "./list/dropdown-list.component";

export { ScrollableList } from "./scrollable-list.directive";
export { AbstractDropdownView } from "./abstract-dropdown-view.class";
export { ListItem } from "./list-item.interface";

@NgModule({
	declarations: [
		Dropdown,
		DropdownList,
		ScrollableList
	],
	exports: [
		Dropdown,
		DropdownList,
		ScrollableList
	],
	imports: [
		CommonModule,
		FormsModule,
		StaticIconModule
	]
})
export class DropdownModule {}
