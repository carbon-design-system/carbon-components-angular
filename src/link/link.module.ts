import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Link } from "./link.directive";
import { LinkIconDirective } from "./link-icon.directive";

@NgModule({
	declarations: [
		Link,
		LinkIconDirective
	],
	exports: [
		Link,
		LinkIconDirective
	],
	imports: [
		CommonModule
	]
})
export class LinkModule {}
