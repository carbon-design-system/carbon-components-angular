import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";

import { Pagination } from "./pagination.component";

export { PaginationModel } from "./pagination-model.class";
export { Pagination } from "./pagination.component";

@NgModule({
	declarations: [
		Pagination
	],
	exports: [
		Pagination
	],
	imports: [
		CommonModule,
		TranslateModule,
		FormsModule
	]
})
export class PaginationModule {}
