// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Copy16Module } from "@carbon/icons-angular/lib/copy/16";
import { ChevronDown16Module } from "@carbon/icons-angular/lib/chevron--down/16";

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
		I18nModule,
		Copy16Module,
		ChevronDown16Module
	]
})
export class CodeSnippetModule { }
