import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ColumnDirective } from "./column.directive";
import { RowDirective } from "./row.directive";
import { GridDirective } from "./grid.directive";
import { GridService } from "./grid.service";

@NgModule({
	exports: [
		ColumnDirective,
		GridDirective,
		RowDirective
	],
	providers: [GridService],
	imports: [
		CommonModule,
		ColumnDirective,
		GridDirective,
		RowDirective
	]
})
export class GridModule {}
