// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "carbon-components-angular/button";
import { IconModule } from "carbon-components-angular/icon";
import { I18nModule } from "carbon-components-angular/i18n";
import { UtilsModule } from "carbon-components-angular/utils";

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
		ButtonModule,
		I18nModule,
		UtilsModule,
		IconModule
	]
})
export class CodeSnippetModule { }
