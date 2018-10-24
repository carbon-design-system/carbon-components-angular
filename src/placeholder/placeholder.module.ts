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
import { Placeholder } from "./placeholder.service";

// exports
export { PlaceholderComponent } from "./placeholder.component";
export { Placeholder } from "./placeholder.service";

// either provides a new instance of ModalPlaceholderService, or returns the parent
export function PLACEHOLDER_SERVICE_PROVIDER_FACTORY(parentService: Placeholder) {
	return parentService || new Placeholder();
}

// placholder service *must* be a singleton to ensure the placeholder viewref is accessible globally
export const PLACEHOLDER_SERVICE_PROVIDER = {
	provide: Placeholder,
	deps: [[new Optional(), new SkipSelf(), Placeholder]],
	useFactory: PLACEHOLDER_SERVICE_PROVIDER_FACTORY
};

@NgModule({
	declarations: [ PlaceholderComponent ],
	exports: [ PlaceholderComponent ],
	providers: [ PLACEHOLDER_SERVICE_PROVIDER ],
	imports: [ CommonModule ]
})
export class PlaceholderModule { }
