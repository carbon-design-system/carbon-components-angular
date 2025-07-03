import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StructuredList } from "./structured-list.component";
import { ListRow } from "./list-row.component";
import { ListHeader } from "./list-header.component";
import { ListColumn } from "./list-column.component";
import { IconDirective } from "carbon-components-angular/icon";

@NgModule({
	exports: [
		StructuredList,
		ListRow,
		ListHeader,
		ListColumn
	],
	imports: [
		CommonModule,
		IconDirective,
		StructuredList,
		ListRow,
		ListHeader,
		ListColumn
	]
})
export class StructuredListModule { }
