import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Checkmark16Module } from "@carbon/icons-angular/lib/checkmark/16";

import { InlineLoading } from "./inline-loading.component";

export { InlineLoading } from "./inline-loading.component";

@NgModule({
	declarations: [InlineLoading],
	exports: [InlineLoading],
	imports: [CommonModule, Checkmark16Module]
})
export class InlineLoadingModule { }
