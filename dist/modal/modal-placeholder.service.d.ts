import { ComponentRef, ViewContainerRef } from "@angular/core";
/**
 * Singleton service used by modal-placeholder to register the container for modals to insert into.
 * Also tracks all active modals.
 *
 * @export
 * @class ModalPlaceholderService
 */
export declare class ModalPlaceholderService {
    /**
     * Maintain a `ViewContainerRef` to an instance of the component.
     * @type {ViewContainerRef}
     * @memberof ModalService
     */
    viewContainerRef: ViewContainerRef;
    /**
     * List of `Modal` components that are in existance.
     * @type {Array<ComponentRef<any>>}
     * @memberof ModalService
     */
    componentRefs: ComponentRef<any>[];
    constructor();
    /**
     * Used by `ModalPlaceholderComponent` to register view-container reference.
     * @param {ViewContainerRef} vcRef
     * @memberof ModalService
     */
    registerViewContainerRef(vcRef: ViewContainerRef): void;
}
