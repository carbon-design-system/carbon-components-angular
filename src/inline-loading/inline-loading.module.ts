import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckmarkModule, ErrorFilledModule, CheckmarkFilledModule } from "@carbon/icons-angular";

import { InlineLoading } from "./inline-loading.component";

@NgModule({
	declarations: [InlineLoading],
	exports: [InlineLoading],
	imports: [CommonModule, CheckmarkModule, CheckmarkFilledModule, ErrorFilledModule]
})
export class InlineLoadingModule { }
