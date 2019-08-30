import { Optional } from "@angular/core";
import { ExperimentalService } from "./experimental.service";
export declare function EXPERIMENTAL_SERVICE_PROVIDER_FACTORY(parentService: ExperimentalService): ExperimentalService;
export declare const EXPERIMENTAL_SERVICE_PROVIDER: {
    provide: typeof ExperimentalService;
    deps: Optional[][];
    useFactory: typeof EXPERIMENTAL_SERVICE_PROVIDER_FACTORY;
};
declare class ExperimentalModule {
}
export { ExperimentalService, ExperimentalModule };
