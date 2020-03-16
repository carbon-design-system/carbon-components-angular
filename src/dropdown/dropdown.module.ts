import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { Dropdown } from "./dropdown.component";
import { DropdownList } from "./list/dropdown-list.component";

import { ScrollableList } from "./scrollable-list.directive";
import { I18nModule } from "./../i18n/index";
import { PlaceholderModule } from "./../placeholder/index";
import { DropdownService } from "./dropdown.service";
import { ChevronDownModule, WarningFilledModule } from "@carbon/icons-angular";
import { UtilsModule } from "./../utils/utils.module";

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
		I18nModule,
		PlaceholderModule,
		ChevronDownModule,
		WarningFilledModule,
		UtilsModule
	],
	providers: [ DropdownService ]
})
export class DropdownModule {}
