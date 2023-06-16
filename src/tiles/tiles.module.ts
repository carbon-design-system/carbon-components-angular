import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Tile } from "./tile.component";
import { ClickableTile } from "./clickable-tile.component";
import { ExpandableTile } from "./expandable-tile.component";
import { ExpandableTileAboveFoldDirective } from "./expandable-tile-above.directive";
import { ExpandableTileBelowFoldDirective } from "./expandable-tile-below.directive";
import { SelectionTile } from "./selection-tile.component";
import { TileGroup } from "./tile-group.component";
import { I18nModule } from "carbon-components-angular/i18n";
import { IconModule } from "carbon-components-angular/icon";
import { LinkModule } from "carbon-components-angular/link";

@NgModule({
	declarations: [
		Tile,
		ClickableTile,
		ExpandableTileAboveFoldDirective,
		ExpandableTileBelowFoldDirective,
		ExpandableTile,
		SelectionTile,
		TileGroup
	],
	exports: [
		Tile,
		ClickableTile,
		ExpandableTileAboveFoldDirective,
		ExpandableTileBelowFoldDirective,
		ExpandableTile,
		SelectionTile,
		TileGroup
	],
	imports: [
		CommonModule,
		I18nModule,
		IconModule,
		LinkModule
	]
})
export class TilesModule {}
