// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { I18nModule } from "../i18n/i18n.module";

// imports
import { CodeSnippet } from "./code-snippet.component";

// exports
export { CodeSnippet } from "./code-snippet.component";

@NgModule({
	declarations: [
		CodeSnippet
	],
	exports: [
		CodeSnippet
	],
	imports: [
		CommonModule,
		FormsModule,
		I18nModule
	]
})
export class CodeSnippetModule { }
