import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InlineLoading } from "./inline-loading.component";

export { InlineLoading } from "./inline-loading.component";

@NgModule({
	declarations: [InlineLoading],
	exports: [InlineLoading],
	imports: [CommonModule]
})
export class InlineLoadingModule { }
