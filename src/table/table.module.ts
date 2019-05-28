import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// icons
import { ChevronRight16Module } from "@carbon/icons-angular/lib/chevron--right/16";
import { Search16Module } from "@carbon/icons-angular/lib/search/16";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";

// internal module imports
import { DialogModule } from "./../dialog/dialog.module";
import { NFormsModule } from "./../forms/forms.module";
import { ButtonModule, SearchModule } from "../";
import { I18nModule } from "./../i18n/i18n.module";

// table utilities/toolbar imports
import { TableToolbar } from "./toolbar/table-toolbar.component";
import { TableContainer } from "./table-container.component";
import { TableHeader } from "./header/table-header.component";
import { TableHeaderTitle } from "./header/table-header-title.directive";
import { TableHeaderDescription } from "./header/table-header-description.directive";
import { TableToolbarActions } from "./toolbar/table-toolbar-actions.component";
import { TableToolbarSearch } from "./toolbar/table-toolbar-search.component";
import { TableToolbarContent } from "./toolbar/table-toolbar-content.component";
import { DataGridFocus } from "./data-grid-focus.directive";
import { ExpandedRowHover } from "./expanded-row-hover.directive";

// core table imports
import { Table } from "./table.component";
import { TableBody } from "./body/table-body.component";
import { TableRow } from "./body/table-row.component";

// model exports
export { TableModel } from "./table-model.class";
export { TableItem } from "./table-item.class";
export { TableHeaderItem } from "./table-header-item.class";

export {
	TableToolbar,
	TableContainer,
	TableHeader,
	TableHeaderTitle,
	TableHeaderDescription,
	TableToolbarActions,
	TableToolbarSearch,
	TableToolbarContent,
	DataGridFocus,
	ExpandedRowHover,
	Table,
	TableBody,
	TableRow
};

@NgModule({
	declarations: [
		// toolbar and utility components
		TableToolbar,
		TableContainer,
		TableHeader,
		TableHeaderTitle,
		TableHeaderDescription,
		TableToolbarActions,
		TableToolbarSearch,
		TableToolbarContent,
		DataGridFocus,
		ExpandedRowHover,
		// core table components
		Table,
		TableBody,
		TableRow
	],
	exports: [
		// toolbar and utility components
		TableToolbar,
		TableContainer,
		TableHeader,
		TableHeaderTitle,
		TableHeaderDescription,
		TableToolbarActions,
		TableToolbarSearch,
		TableToolbarContent,
		DataGridFocus,
		ExpandedRowHover,
		// core table components
		Table,
		TableBody,
		TableRow
	],
	imports: [
		CommonModule,
		NFormsModule,
		FormsModule,
		DialogModule,
		ButtonModule,
		SearchModule,
		I18nModule,
		ChevronRight16Module,
		Search16Module,
		Close16Module
	]
})
export class TableModule {}
