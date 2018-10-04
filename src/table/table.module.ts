import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";

import { DialogModule } from "./../dialog/dialog.module";
import { NFormsModule } from "./../forms/forms.module";

import { Table } from "./table.component";
import { IconModule } from "./../icon/icon.module";
import { StaticIconModule } from "..";

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
		TranslateModule,
		NFormsModule,
		FormsModule,
		IconModule,
		DialogModule,
		StaticIconModule
	]
})
export class TableModule {}
