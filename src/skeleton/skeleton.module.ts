import { SkeletonIcon } from "./skeleton-icon.component";
import { SkeletonPlaceholder } from "./skeleton-placeholder.component";
import { SkeletonText } from "./skeleton-text.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
	declarations: [
		SkeletonIcon,
		SkeletonPlaceholder,
		SkeletonText
	],
	exports: [
		SkeletonIcon,
		SkeletonPlaceholder,
		SkeletonText
	],
	imports: [
		CommonModule
	]
})
export class SkeletonModule { }
