import { NgModule } from "@angular/core";
import { AspectRatioDirective } from "./aspect-ratio.directive";

@NgModule({
	imports: [AspectRatioDirective],
	exports: [AspectRatioDirective]
})
export class AspectRatioModule {}
