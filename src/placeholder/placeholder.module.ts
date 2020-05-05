// modules
import { NgModule, SkipSelf, Optional } from "@angular/core";
import { CommonModule } from "@angular/common";

// imports
import { Placeholder } from "./placeholder.component";
import { PlaceholderService } from "./placeholder.service";

// either provides a new instance of PlaceholderService, or returns the parent
export function PLACEHOLDER_SERVICE_PROVIDER_FACTORY(parentService: PlaceholderService) {
	return parentService || new PlaceholderService();
}

// placeholder service *must* be a singleton to ensure the placeholder viewRef is accessible globally
export const PLACEHOLDER_SERVICE_PROVIDER = {
	provide: PlaceholderService,
	deps: [[new Optional(), new SkipSelf(), PlaceholderService]],
	useFactory: PLACEHOLDER_SERVICE_PROVIDER_FACTORY
};

@NgModule({
	declarations: [ Placeholder ],
	exports: [ Placeholder ],
	providers: [ PLACEHOLDER_SERVICE_PROVIDER ],
	imports: [ CommonModule ]
})
export class PlaceholderModule { }
