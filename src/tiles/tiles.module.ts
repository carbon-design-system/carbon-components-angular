import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Tile } from "./tile.component";
import { ClickableTile } from "./clickable-tile.component";
import { ClickableTileIconDirective } from "./clickable-tile-icon.directive";
import { ExpandableTile } from "./expandable-tile.component";
import { ExpandableTileAboveFoldDirective } from "./expandable-tile-above.directive";
import { ExpandableTileBelowFoldDirective } from "./expandable-tile-below.directive";
import { SelectionTile } from "./selection-tile.component";
import { TileGroup } from "./tile-group.component";
import { IconDirective } from "carbon-components-angular/icon";


@NgModule({
	exports: [
		Tile,
		ClickableTile,
		ClickableTileIconDirective,
		ExpandableTile,
		SelectionTile,
		TileGroup
	],
	imports: [
		CommonModule,
		// I18nModule,
		IconDirective,
		Tile,
		ClickableTile,
		ClickableTileIconDirective,
		ExpandableTileAboveFoldDirective,
		ExpandableTileBelowFoldDirective,
		ExpandableTile,
		SelectionTile,
		TileGroup
	]
})
export class TilesModule {}
