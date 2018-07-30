import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { StaticIconModule } from "./../icon/static-icon.module";

import { Dropdown } from "./dropdown.component";
import { DropdownList } from "./list/dropdown-list.component";
import { DropdownFilter } from "./list/dropdown-filter-list.component";

import { ScrollableList } from "./scrollable-list.directive";

export { Dropdown } from "./dropdown.component";
export { DropdownList } from "./list/dropdown-list.component";
export { DropdownFilter } from "./list/dropdown-filter-list.component";

export { ScrollableList } from "./scrollable-list.directive";
export { AbstractDropdownView } from "./abstract-dropdown-view.class";
export { ListItem } from "./list-item.interface";

@NgModule({
	declarations: [
		Dropdown,
		DropdownList,
		DropdownFilter,
		ScrollableList
	],
	exports: [
		Dropdown,
		DropdownList,
		DropdownFilter,
		ScrollableList
	],
	imports: [
		CommonModule,
		FormsModule,
		TranslateModule.forChild(),
		StaticIconModule
	]
})
export class DropdownModule {}
