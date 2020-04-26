import { NgModule, SkipSelf, Optional } from "@angular/core";

import { I18n } from "./i18n.service";
import { ReplacePipe } from "./replace.pipe";

// either provides a new instance of I18n, or returns the parent
export function I18N_SERVICE_PROVIDER_FACTORY(parentService: I18n) {
	return parentService || new I18n();
}

// I18n should provide a single instance of itself to ensure that translations are consistent through the app
export const I18N_SERVICE_PROVIDER = {
	provide: I18n,
	deps: [[new Optional(), new SkipSelf(), I18n]],
	useFactory: I18N_SERVICE_PROVIDER_FACTORY
};

@NgModule({
	declarations: [ReplacePipe],
	exports: [ReplacePipe],
	providers: [
		I18n,
		I18N_SERVICE_PROVIDER
	]
})
export class I18nModule {}
