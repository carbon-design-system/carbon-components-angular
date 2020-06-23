import { NgModule, SkipSelf, Optional } from "@angular/core";
import { ExperimentalService } from "./experimental.service";

// either provides a new instance of ExperimentalService, or returns the parent
export function EXPERIMENTAL_SERVICE_PROVIDER_FACTORY(parentService: ExperimentalService) {
	return parentService || new ExperimentalService();
}

export const EXPERIMENTAL_SERVICE_PROVIDER = {
	provide: ExperimentalService,
	deps: [[new Optional(), new SkipSelf(), ExperimentalService]],
	useFactory: EXPERIMENTAL_SERVICE_PROVIDER_FACTORY
};

@NgModule({
	providers: [
		ExperimentalService,
		EXPERIMENTAL_SERVICE_PROVIDER
	]
})
export class ExperimentalModule { }
