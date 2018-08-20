import { Optional } from "@angular/core";
import { ModalPlaceholderService } from "./modal-placeholder.service";
export { default as Modal } from "./modal.decorator";
export { ModalService } from "./modal.service";
export declare function MODAL_PLACEHOLDER_SERVICE_PROVIDER_FACTORY(parentService: ModalPlaceholderService): ModalPlaceholderService;
export declare const MODAL_PLACEHOLDER_SERVICE_PROVIDER: {
    provide: typeof ModalPlaceholderService;
    deps: Optional[][];
    useFactory: typeof MODAL_PLACEHOLDER_SERVICE_PROVIDER_FACTORY;
};
export declare class ModalModule {
}
