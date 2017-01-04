import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { Table } from "./table.component";
import { TableBody } from "./table-body.component";
import { Column } from "./column.component";

export { Table } from "./table.component";
export { TableBody } from "./table-body.component";

@NgModule({
	declarations: [
		Table,
		TableBody,
		Column
	],
	exports: [
		Table,
		TableBody,
		Column
	],
	imports: [CommonModule, BrowserModule]
})
export class TableModule {}