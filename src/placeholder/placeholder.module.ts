// modules
import {
	NgModule,
	ComponentFactoryResolver,
	Optional,
	SkipSelf
} from "@angular/core";
import { CommonModule } from "@angular/common";

// imports
import { PlaceholderComponent } from "./placeholder.component";
import { PlaceholderService } from "./placeholder.service";

// exports
export { PlaceholderService } from "./placeholder.service";

// either provides a new instance of ModalPlaceholderService, or returns the parent
export function PLACEHOLDER_SERVICE_PROVIDER_FACTORY(parentService: PlaceholderService) {
	return parentService || new PlaceholderService();
}

// placholder service *must* be a singleton to ensure the placeholder viewref is accessible globally
export const PLACEHOLDER_SERVICE_PROVIDER = {
	provide: PlaceholderService,
	deps: [[new Optional(), new SkipSelf(), PlaceholderService]],
	useFactory: PLACEHOLDER_SERVICE_PROVIDER_FACTORY
};

@NgModule({
	declarations: [ PlaceholderComponent ],
	exports: [ PlaceholderComponent ],
	providers: [ PLACEHOLDER_SERVICE_PROVIDER ],
	imports: [ CommonModule ]
})
export class PlaceholderModule { }
