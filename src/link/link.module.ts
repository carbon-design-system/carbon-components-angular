import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Link } from "./link.directive";
import { LinkIconDirective } from "./link-icon.directive";

@NgModule({
	exports: [
		Link,
		LinkIconDirective
	],
	imports: [
		CommonModule,
		Link,
		LinkIconDirective
	]
})
export class LinkModule {}
