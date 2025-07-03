import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StackDirective } from "./stack.directive";

@NgModule({
	exports: [StackDirective],
	imports: [
		CommonModule,
		StackDirective
	]
})
export class LayoutModule { }
