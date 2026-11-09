import { SkipSelf, Optional, NgModule } from "@angular/core";
import { I18n } from "./i18n.service";
import { ReplacePipe } from "./replace.pipe";

/**
 * Returns the parent `I18n` instance if one exists, otherwise creates a new one.
 *
 * @deprecated as of v6 - `I18n` is `providedIn: "root"` and no longer needs to be provided manually.
 */
export function I18N_SERVICE_PROVIDER_FACTORY(parentService: I18n) {
	return parentService || new I18n();
}

/**
 * Ensures a single `I18n` instance so translations stay consistent across the app.
 *
 * @deprecated as of v6 - `I18n` is `providedIn: "root"` and no longer needs to be provided manually.
 */
export const I18N_SERVICE_PROVIDER = {
	provide: I18n,
	deps: [[new Optional(), new SkipSelf(), I18n]],
	useFactory: I18N_SERVICE_PROVIDER_FACTORY
};

@NgModule({
	imports: [ReplacePipe],
	exports: [ReplacePipe]
})
export class I18nModule {}
