import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckmarkModule } from "@carbon/icons-angular";

import { InlineLoading } from "./inline-loading.component";

@NgModule({
	declarations: [InlineLoading],
	exports: [InlineLoading],
	imports: [CommonModule, CheckmarkModule]
})
export class InlineLoadingModule { }
