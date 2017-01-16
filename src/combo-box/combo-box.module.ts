import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { ComboBox } from "./combo-box.component";

export { ComboBox } from "./combo-box.component";

@NgModule({
	declarations: [
		ComboBox
	],
	exports: [
		ComboBox
	],
	imports: [CommonModule, BrowserModule]
})
export class ComboBoxModule {}
