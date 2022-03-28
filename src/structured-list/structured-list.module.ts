import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StructuredList } from "./structured-list.component";
import { ListRow } from "./list-row.component";
import { ListHeader } from "./list-header.component";
import { ListColumn } from "./list-column.component";
import { IconModule } from "carbon-components-angular/icon";

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
		IconModule
	]
})
export class StructuredListModule { }
