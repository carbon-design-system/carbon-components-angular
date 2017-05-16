import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { Glyphicon } from "./glyphicon.component";
import { Sprite } from "./sprite.component";
import { IconService } from "./glyphicon.service";

export { Glyphicon } from "./glyphicon.component";
export { IconService } from "./glyphicon.service";
export { Sprite } from "./sprite.component";

@NgModule({
	declarations: [
		Glyphicon,
		Sprite
	],
	exports: [
		Glyphicon,
		Sprite
	],
	imports: [HttpModule, CommonModule, BrowserModule]
})
export class GlyphiconModule {}
