import { SkeletonIcon } from "./skeleton-icon.component";
import { SkeletonPlaceholder } from "./skeleton-placeholder.component";
import { SkeletonText } from "./skeleton-text.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
	exports: [
		SkeletonIcon,
		SkeletonPlaceholder,
		SkeletonText
	],
	imports: [
		CommonModule,
		SkeletonIcon,
		SkeletonPlaceholder,
		SkeletonText
	]
})
export class SkeletonModule {}
