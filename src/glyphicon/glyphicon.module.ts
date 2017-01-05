import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { Glyphicon } from "./glyphicon.component";
import { IconService } from "./glyphicon.service";

export { Glyphicon } from "./glyphicon.component";
export { IconService } from "./glyphicon.service";

@NgModule({
	declarations: [
		Glyphicon
	],
	exports: [
		Glyphicon
	],
	imports: [CommonModule, BrowserModule]
})
export class GlyphiconModule {}