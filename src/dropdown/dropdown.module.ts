import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { Dropdown } from "./dropdown.component";
import { DropdownList } from "./list/dropdown-list.component";
import { AbstractDropdownView } from "./abstract-dropdown-view.class";

import { ScrollableList } from "./scrollable-list.directive";
import { I18nModule } from "carbon-components-angular/i18n";
import { PlaceholderModule } from "carbon-components-angular/placeholder";
import { DropdownService } from "./dropdown.service";
import { UtilsModule } from "carbon-components-angular/utils";
import { IconModule } from "carbon-components-angular/icon";

@NgModule({
	declarations: [
		Dropdown,
		DropdownList,
		ScrollableList,
		AbstractDropdownView
	],
	exports: [
		Dropdown,
		DropdownList,
		ScrollableList,
		AbstractDropdownView
	],
	imports: [
		CommonModule,
		FormsModule,
		I18nModule,
		PlaceholderModule,
		UtilsModule,
		IconModule
	],
	providers: [ DropdownService ]
})
export class DropdownModule {}
