import { NgModule, SkipSelf, Optional } from "@angular/core";

import { I18n } from "./i18n.service";

export { I18n } from "./i18n.service";

// either provides a new instance of ModalPlaceholderService, or returns the parent
export function I18N_SERVICE_PROVIDER_FACTORY(parentService: I18n) {
	return parentService || new I18n();
}

// placholder service *must* be a singleton to ensure the placeholder viewref is accessible globally
export const I18N_SERVICE_PROVIDER = {
	provide: I18n,
	deps: [[new Optional(), new SkipSelf(), I18n]],
	useFactory: I18N_SERVICE_PROVIDER_FACTORY
};

@NgModule({
	providers: [
		I18n,
		I18N_SERVICE_PROVIDER
	]
})
export class I18nModule {}
