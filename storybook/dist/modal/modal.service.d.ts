import { ComponentFactoryResolver, ComponentRef } from "@angular/core";
import { ModalPlaceholderService } from "./modal-placeholder.service";
/**
 * Modal service handles instantiating and destroying modal instances.
 * Uses ModalPlaceholderService to track open instances, and for it's placeholder view reference.
 *
 * ```typescript
 * export class ModalService {
 * 	registerViewContainerRef(vcRef: ViewContainerRef): void {}
 * 	create<T>(data: {component: any, inputs?: any}): void {}
 * 	destroy(index: number = -1): void {}
 * }
 * ```
 * @export
 * @class ModalService
 */
export declare class ModalService {
    resolver: ComponentFactoryResolver;
    placeholder: ModalPlaceholderService;
    /**
     * Creates an instance of `ModalService`.
     * @param {ComponentFactoryResolver} resolver
     * @memberof ModalService
     */
    constructor(resolver: ComponentFactoryResolver, placeholder: ModalPlaceholderService);
    /**
     * Creates and renders the modal component that is passed in.
     * `inputs` is an optional parameter of `data` that can be passed to the `Modal` component.
     * @template T
     * @param {{component: any, inputs?: any}} data
     * @returns {ComponentRef<any>}
     * @memberof ModalService
     */
    create<T>(data: {
        component: any;
        inputs?: any;
    }): ComponentRef<any>;
    /**
     * Destroys the modal on the supplied index.
     * When called without parameters it destroys the most recently created/top most modal.
     *
     * @param {any} [index=-1]
     * @returns
     * @memberof ModalService
     */
    destroy(index?: number): void;
}
