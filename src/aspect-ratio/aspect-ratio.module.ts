import { NgModule } from "@angular/core";
import { AspectRatioDirective } from "./aspect-ratio.directive";

@NgModule({
	declarations: [AspectRatioDirective],
	exports: [AspectRatioDirective]
})
export class AspectRatioModule {}
