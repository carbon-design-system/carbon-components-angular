// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// icons
import { ChevronRight16Module } from "@carbon/icons-angular/lib/chevron--right/16";
import { Search16Module } from "@carbon/icons-angular/lib/search/16";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";

// internal module imports
import { NFormsModule } from "./../forms/forms.module";
import { DialogModule } from "./../dialog/dialog.module";
import { I18nModule } from "./../i18n/i18n.module";
import { ButtonModule } from "./../button/button.module";
import { SearchModule } from "./../search/search.module";

// table utilities/toolbar imports
import { TableToolbar } from "./toolbar/table-toolbar.component";
import { TableToolbarActions } from "./toolbar/table-toolbar-actions.component";
import { TableToolbarSearch } from "./toolbar/table-toolbar-search.component";
import { TableToolbarContent } from "./toolbar/table-toolbar-content.component";

import { TableContainer } from "./table-container.component";
import { TableHeader } from "./header/table-header.component";
import { TableHeaderTitle } from "./header/table-header-title.directive";
import { TableHeaderDescription } from "./header/table-header-description.directive";

import { DataGridFocus } from "./data-grid-focus.directive";
import { ExpandedRowHover } from "./expanded-row-hover.directive";

// core table imports
import { Table } from "./table.component";
import { TableDirective } from "./table.directive";
import { TableHead } from "./head/table-head.component";
import { TableHeadCell } from "./head/table-head-cell.component";
import { TableHeadCheckbox } from "./head/table-head-checkbox.component";
import { TableHeadExpand } from "./head/table-head-expand.component";
import { TableBody } from "./body/table-body.component";
import { TableRowComponent } from "./body/table-row.component";
import { TableExpandedRow } from "./body/table-expanded-row.component";
import { TableData } from "./cell/table-data.component";
import { TableCheckbox } from "./cell/table-checkbox.component";
import { TableExpandButton } from "./cell/table-expand-button.component";

// model exports
export { TableModel } from "./table-model.class";
export { TableItem } from "./table-item.class";
export { TableHeaderItem } from "./table-header-item.class";
export * from "./table-adapter.class";
export * from "./data-grid-interaction-model.class";

export {
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
	TableDirective,
	TableHead,
	TableHeadCell,
	TableHeadCheckbox,
	TableHeadExpand,
	TableBody,
	TableRowComponent,
	TableExpandedRow,
	TableData,
	TableCheckbox,
	TableExpandButton
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
		TableDirective,
		TableHead,
		TableHeadCell,
		TableHeadCheckbox,
		TableHeadExpand,
		TableBody,
		TableRowComponent,
		TableExpandedRow,
		TableData,
		TableCheckbox,
		TableExpandButton
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
		TableDirective,
		TableHead,
		TableHeadCell,
		TableHeadCheckbox,
		TableHeadExpand,
		TableBody,
		TableRowComponent,
		TableExpandedRow,
		TableData,
		TableCheckbox,
		TableExpandButton
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
