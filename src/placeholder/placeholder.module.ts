// modules
import {
	NgModule,
	Optional,
	SkipSelf
} from "@angular/core";
import { CommonModule } from "@angular/common";

// imports
import { Placeholder } from "./placeholder.component";
import { PlaceholderRef } from "./placeholder.service";

// exports
export { Placeholder } from "./placeholder.component";
export { PlaceholderRef } from "./placeholder.service";

// either provides a new instance of ModalPlaceholderService, or returns the parent
export function PLACEHOLDER_SERVICE_PROVIDER_FACTORY(parentService: PlaceholderRef) {
	return parentService || new PlaceholderRef();
}

// placholder service *must* be a singleton to ensure the placeholder viewref is accessible globally
export const PLACEHOLDER_SERVICE_PROVIDER = {
	provide: PlaceholderRef,
	deps: [[new Optional(), new SkipSelf(), PlaceholderRef]],
	useFactory: PLACEHOLDER_SERVICE_PROVIDER_FACTORY
};

@NgModule({
	declarations: [ Placeholder ],
	exports: [ Placeholder ],
	providers: [ PLACEHOLDER_SERVICE_PROVIDER ],
	imports: [ CommonModule ]
})
export class PlaceholderModule { }
