import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Tile } from "./tile.component";
import { ClickableTile } from "./clickable-tile.component";
import { ExpandableTile } from "./expandable-tile.component";
import { SelectionTile } from "./selection-tile.component";
import { TileGroup } from "./tile-group.component";
import { I18nModule } from "./../i18n/i18n.module";

export { Tile } from "./tile.component";
export { ClickableTile } from "./clickable-tile.component";
export { ExpandableTile } from "./expandable-tile.component";
export { SelectionTile } from "./selection-tile.component";
export { TileGroup } from "./tile-group.component";

@NgModule({
	declarations: [
		Tile,
		ClickableTile,
		ExpandableTile,
		SelectionTile,
		TileGroup
	],
	exports: [
		Tile,
		ClickableTile,
		ExpandableTile,
		SelectionTile,
		TileGroup
	],
	imports: [
		CommonModule,
		I18nModule
	]
})
export class TilesModule {}
