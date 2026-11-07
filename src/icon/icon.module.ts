// modules
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

// imports
import { IconDirective } from "./icon.directive";
import { IconService } from "./icon.service";

/**
 * Returns the parent `IconService` instance if one exists, otherwise creates a new one.
 *
 * @deprecated as of v6 - `IconService` is `providedIn: "root"` and no longer needs to be provided manually.
 */
export function ICON_SERVICE_PROVIDER_FACTORY(parentService: IconService) {
	return parentService || new IconService();
}

/**
 * Ensures a single `IconService` instance so registered icons are available globally.
 *
 * @deprecated as of v6 - `IconService` is `providedIn: "root"` and no longer needs to be provided manually.
 */
export const ICON_SERVICE_PROVIDER = {
	provide: IconService,
	deps: [[new Optional(), new SkipSelf(), IconService]],
	useFactory: ICON_SERVICE_PROVIDER_FACTORY
};

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
}
