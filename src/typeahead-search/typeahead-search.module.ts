// modules
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TypeaheadList } from "./typeahead-list.component";
import { TypeaheadSearch } from "./typeahead-search.component";
import { DropdownService } from "../dropdown";
import { SearchModule as SearchIconModule, CloseModule } from "@carbon/icons-angular";
import { PlaceholderModule } from "../placeholder";
import { UtilsModule } from "../utils";
import { I18n } from "../i18n";

@NgModule({
	declarations: [
		TypeaheadList,
		TypeaheadSearch
	],
	exports: [
		TypeaheadList,
		TypeaheadSearch
	],
	imports: [
		CommonModule,
		SearchIconModule,
		CloseModule,
		PlaceholderModule,
		UtilsModule
	],
	providers: [DropdownService, I18n]
})
export class TypeaheadSearchModule { }
