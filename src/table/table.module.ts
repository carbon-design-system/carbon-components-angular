import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { PopoverModule } from "./../popover/popover.module";
import { NFormsModule } from "./../forms/forms.module";

import { Table } from "./table.component";
import { TableModel } from "./table-model.class";
import { TableItem } from "./table-item.class";
import { TableHeaderItem } from "./table-header-item.class";

export { Table } from "./table.component";
export { TableModel } from "./table-model.class";
export { TableItem } from "./table-item.class";
export { TableHeaderItem } from "./table-header-item.class";

@NgModule({
	declarations: [
		Table
	],
	exports: [
		Table
	],
	imports: [
		CommonModule,
		NFormsModule,
		FormsModule,
		PopoverModule
	]
})
export class TableModule {}
