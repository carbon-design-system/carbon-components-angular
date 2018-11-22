// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
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
		I18nModule
	]
})
export class SearchModule { }

export { Search };
