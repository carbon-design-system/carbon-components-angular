import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayerDirective } from "./layer.directive";

@NgModule({
	declarations: [LayerDirective],
	exports: [LayerDirective],
	imports: [CommonModule]
})
export class LayerModule {}
