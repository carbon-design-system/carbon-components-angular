// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CopyModule, ChevronDownModule } from "@carbon/icons-angular";

import { I18nModule } from "../i18n/index";

// imports
import { CodeSnippet } from "./code-snippet.component";

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
		CopyModule,
		ChevronDownModule
	]
})
export class CodeSnippetModule { }
