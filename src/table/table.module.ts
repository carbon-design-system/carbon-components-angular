import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { Table } from "./table.component";
import { TableHeader } from "./table-header.component";
import { TableBody } from "./table-body.component";
import { Column } from "./column.component";

export { Table } from "./table.component";
export { Column } from "./column.component";

@NgModule({
	declarations: [
		Table,
		TableBody,
		TableHeader,
		Column
	],
	exports: [
		Table,
		Column
	],
	imports: [CommonModule, BrowserModule]
})
export class TableModule {}
