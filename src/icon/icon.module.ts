// modules
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

// imports
import { IconDirective } from "./icon.directive";
import { IconService } from "./icon.service";

@NgModule({
	exports: [
		IconDirective
	],
	imports: [
		CommonModule,
		IconDirective
	]
})
export class IconModule {
	constructor(protected iconService: IconService) {
	}
}
