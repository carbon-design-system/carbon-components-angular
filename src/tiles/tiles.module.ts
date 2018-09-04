import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { Tile } from "./tile.component";
import { ClickableTile } from "./clickable-tile.component";

export { Tile } from "./tile.component";
export { ClickableTile } from "./clickable-tile.component";

@NgModule({
	declarations: [
		Tile,
		ClickableTile
	],
	exports: [
		Tile,
		ClickableTile
	],
	imports: [
		CommonModule,
		TranslateModule.forChild()
	]
})
export class TilesModule {}
