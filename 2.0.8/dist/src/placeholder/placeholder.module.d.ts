import { Optional } from "@angular/core";
import { PlaceholderService } from "./placeholder.service";
export { Placeholder } from "./placeholder.component";
export { PlaceholderService } from "./placeholder.service";
export declare function PLACEHOLDER_SERVICE_PROVIDER_FACTORY(parentService: PlaceholderService): PlaceholderService;
export declare const PLACEHOLDER_SERVICE_PROVIDER: {
    provide: typeof PlaceholderService;
    deps: Optional[][];
    useFactory: typeof PLACEHOLDER_SERVICE_PROVIDER_FACTORY;
};
export declare class PlaceholderModule {
}
