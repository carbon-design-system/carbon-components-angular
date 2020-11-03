// modules
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

// imports
import { IconDirective } from "./icon.directive";
import { IconService } from "./icon.service";

// either provides a new instance of IconService, or returns the parent
export function ICON_SERVICE_PROVIDER_FACTORY(parentService: IconService) {
	return parentService || new IconService();
}

// placeholder service *must* be a singleton to ensure the placeholder viewRef is accessible globally
export const ICON_SERVICE_PROVIDER = {
	provide: IconService,
	deps: [[new Optional(), new SkipSelf(), IconService]],
	useFactory: ICON_SERVICE_PROVIDER_FACTORY
};

@NgModule({
	declarations: [
		IconDirective
	],
	exports: [
		IconDirective
	],
	imports: [
		CommonModule
	],
	providers: [
		ICON_SERVICE_PROVIDER
	]
})
export class IconModule {
	constructor(iconService: IconService) {
		// TODO register icons used in the library here to ensure they're available anywhere
		// iconService.register(Icon);
	}
}
