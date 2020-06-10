// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SearchModule as SearchIconModule, CloseModule } from "@carbon/icons-angular";

// imports
import { I18nModule } from "carbon-components-angular/i18n/index";
import { Search } from "./search.component";

@NgModule({
	declarations: [
		Search
	],
	exports: [
		Search
	],
	imports: [
		FormsModule,
		CommonModule,
		I18nModule,
		SearchIconModule,
		CloseModule
	]
})
export class SearchModule { }
