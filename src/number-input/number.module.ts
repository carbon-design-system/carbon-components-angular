// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { I18nModule } from "../i18n/i18n.module";
import { Number } from "./number.component";

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
		I18nModule
	]
})
export class NumberModule { }

export { Number };
