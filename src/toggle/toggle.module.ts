// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { I18nModule } from "carbon-components-angular/i18n";
import { Toggle } from "./toggle.component";

@NgModule({
	exports: [
		Toggle
	],
	imports: [
		CommonModule,
		FormsModule,
		I18nModule,
		Toggle
	]
})
export class ToggleModule { }
