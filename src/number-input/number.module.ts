// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { Number } from "./number.component";
import { I18nModule } from "carbon-components-angular/i18n";
import { IconModule } from "carbon-components-angular/icon";

@NgModule({
	declarations: [
		Number
	],
	exports: [
		Number
	],
	imports: [
		FormsModule,
		CommonModule,
		I18nModule,
		IconModule
	]
})
export class NumberModule { }
