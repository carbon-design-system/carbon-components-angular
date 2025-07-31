// modules
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

// imports
import { IconDirective } from "./icon.directive";
import { IconService, ICON_SERVICE_PROVIDER } from "./icon.service";

@NgModule({
	exports: [
		IconDirective
	],
	imports: [
		CommonModule,
		IconDirective
	],
	providers: [
		ICON_SERVICE_PROVIDER
	]
})
export class IconModule {
	constructor(protected iconService: IconService) {
	}
}
