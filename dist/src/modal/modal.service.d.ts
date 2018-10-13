import { ComponentFactoryResolver, ComponentRef } from "@angular/core";
import { ModalPlaceholderService } from "./modal-placeholder.service";
import { AlertModalData } from "./alert-modal.interface";
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
     * Creates and renders a new alert modal component.
     * @param data You can pass in:
     * `modalType` - "default" | "danger" = "default",
     * `modalLabel` - a label shown over the title,
     * `modalTitle` - modal's title,
     * `modalContent` - modal's content, could include HTML tags.
     * `buttons` is an array of objects
     * ```
     * {
     * 		text: "Button text",
     * 		type: "primary" | "secondary" | "tertiary" | "ghost" | "danger" | "danger--primary" = "primary",
     * 		click: clickFunction,
     * }
     * ```
     * @returns {ComponentRef<any>}
     * @memberof ModalService
     */
    show(data: AlertModalData): ComponentRef<any>;
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
