import { Optional } from "@angular/core";
import { I18n } from "./i18n.service";
export { I18n } from "./i18n.service";
export declare function I18N_SERVICE_PROVIDER_FACTORY(parentService: I18n): I18n;
export declare const I18N_SERVICE_PROVIDER: {
    provide: typeof I18n;
    deps: Optional[][];
    useFactory: typeof I18N_SERVICE_PROVIDER_FACTORY;
};
export declare class I18nModule {
}
