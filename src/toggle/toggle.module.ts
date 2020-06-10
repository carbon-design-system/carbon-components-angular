// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { I18nModule } from "carbon-components-angular/i18n/index";
import { Toggle } from "carbon-components-angular/toggle/toggle.component";

@NgModule({
	declarations: [
		Toggle
	],
	exports: [
		Toggle
	],
	imports: [
		CommonModule,
		FormsModule,
		I18nModule
	]
})
export class ToggleModule { }
