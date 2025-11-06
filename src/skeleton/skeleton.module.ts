import { SkeletonPlaceholder } from "./skeleton-placeholder.component";
import { SkeletonText } from "./skeleton-text.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
	exports: [
		SkeletonPlaceholder,
		SkeletonText
	],
	imports: [
		CommonModule,
		SkeletonPlaceholder,
		SkeletonText
	]
})
export class SkeletonModule { }
