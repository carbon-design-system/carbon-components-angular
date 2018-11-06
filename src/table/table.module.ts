import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DialogModule } from "./../dialog/dialog.module";
import { NFormsModule } from "./../forms/forms.module";

import { Table } from "./table.component";
import { IconModule } from "./../icon/icon.module";
import { StaticIconModule } from "..";
import { I18nModule } from "./../i18n/i18n.module";

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
		IconModule,
		DialogModule,
		StaticIconModule,
		I18nModule
	]
})
export class TableModule {}
