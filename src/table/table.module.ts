import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DialogModule } from "./../dialog/dialog.module";
import { NFormsModule } from "./../forms/forms.module";

import { Table } from "./table.component";
import { TableToolbar } from "./toolbar/table-toolbar.component";
import { TableToolbarActions } from "./toolbar/table-toolbar-actions.component";
import { TableToolbarSearch } from "./toolbar/table-toolbar-search.component";
import { TableToolbarContent } from "./toolbar/table-toolbar-content.component";
import { DataGridFocus } from "./data-grid-focus.directive";
import { ExpandedRowHover } from "./expanded-row-hover.directive";

import { IconModule } from "./../icon/icon.module";
import { StaticIconModule } from "..";
import { I18nModule } from "./../i18n/i18n.module";

export { Table } from "./table.component";
export { TableModel } from "./table-model.class";
export { TableItem } from "./table-item.class";
export { TableHeaderItem } from "./table-header-item.class";

export { TableToolbar } from "./toolbar/table-toolbar.component";
export { TableToolbarActions } from "./toolbar/table-toolbar-actions.component";
export { TableToolbarSearch } from "./toolbar/table-toolbar-search.component";
export { TableToolbarContent } from "./toolbar/table-toolbar-content.component";
export { DataGridFocus } from "./data-grid-focus.directive";
export { ExpandedRowHover } from "./expanded-row-hover.directive";

@NgModule({
	declarations: [
		Table,
		TableToolbar,
		TableToolbarActions,
		TableToolbarSearch,
		TableToolbarContent,
		DataGridFocus,
		ExpandedRowHover
	],
	exports: [
		Table,
		TableToolbar,
		TableToolbarActions,
		TableToolbarSearch,
		TableToolbarContent,
		DataGridFocus,
		ExpandedRowHover
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
