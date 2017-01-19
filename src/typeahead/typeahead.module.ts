import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { Typeahead } from "./typeahead.component";

export { Typeahead } from "./typeahead.component";

@NgModule({
	declarations: [
		Typeahead
	],
	exports: [
		Typeahead
	],
	imports: [CommonModule, BrowserModule, FormsModule]
})
export class TypeaheadModule {}
