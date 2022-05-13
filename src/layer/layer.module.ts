import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Layer } from "./layer.directive";

@NgModule({
	declarations: [
		Layer
	],
	exports: [
		Layer
	],
	imports: [CommonModule]
})
export class LayerModule {}
