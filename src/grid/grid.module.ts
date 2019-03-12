import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ColumnDirective, GridDirective, RowDirective } from "./grid.directive";

@NgModule({
	declarations: [
		ColumnDirective,
		GridDirective,
		RowDirective
	],
	exports: [
		ColumnDirective,
		GridDirective,
		RowDirective
	],
	imports: [CommonModule]
})
export class GridModule { }
