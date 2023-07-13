import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StackDirective } from "./stack.directive";

@NgModule({
	declarations: [StackDirective],
	exports: [StackDirective],
	imports: [CommonModule]
})
export class LayoutModule { }
