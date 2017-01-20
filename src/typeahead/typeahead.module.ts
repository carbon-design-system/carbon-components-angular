import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { Typeahead } from "./typeahead.component";
import { TypeaheadHighlight } from "./typeahead-highlight.component";

export { Typeahead } from "./typeahead.component";
export { TypeaheadHighlight } from "./typeahead-highlight.component";

@NgModule({
	declarations: [
		Typeahead,
		TypeaheadHighlight
	],
	exports: [
		Typeahead,
		TypeaheadHighlight
	],
	imports: [CommonModule, BrowserModule, FormsModule]
})
export class TypeaheadModule {}
