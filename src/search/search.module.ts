// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { I18nModule } from "carbon-components-angular/i18n";
import { Search } from "./search.component";
import { IconModule } from "carbon-components-angular/icon";

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
		IconModule
	]
})
export class SearchModule { }
