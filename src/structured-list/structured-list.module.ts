import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckmarkFilled16Module } from "@carbon/icons-angular/lib/checkmark--filled/16";

import { StructuredList } from "./structured-list.component";
import { ListRow } from "./list-row.component";
import { ListHeader } from "./list-header.component";
import { ListColumn } from "./list-column.component";

@NgModule({
	declarations: [
		StructuredList,
		ListRow,
		ListHeader,
		ListColumn
	],
	exports: [
		StructuredList,
		ListRow,
		ListHeader,
		ListColumn
	],
	imports: [
		CommonModule,
		CheckmarkFilled16Module
	]
})
class StructuredListModule { }

export {
	StructuredListModule,
	StructuredList,
	ListRow,
	ListHeader,
	ListColumn
};
