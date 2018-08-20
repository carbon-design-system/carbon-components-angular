import { EventEmitter, Injector, ComponentRef, ComponentFactory, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { DialogConfig } from "./dialog-config.interface";
import { DialogPlaceholderService } from "./dialog-placeholder.service";
/**
 * `Dialog` object to be injected into other components.
 * @export
 * @class DialogService
 */
export declare class DialogService {
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected injector: Injector;
    protected dialogPlaceholderService: DialogPlaceholderService;
    /**
     * Reflects the open or closed state of the `Dialog`.
     * @memberof DialogService
     */
    isOpen: boolean;
    /**
     * To be used to create the component using metadata.
     * @type {ComponentFactory<any>}
     * @memberof DialogService
     */
    componentFactory: ComponentFactory<any>;
    /**
     * To emit the `Dialog` closing event.
     * @type {EventEmitter<any>}
     * @memberof DialogService
     */
    onClose: EventEmitter<any>;
    /**
     * Holds reference to the created `Dialog` component after creation.
     * @type {ComponentRef<any>}
     * @memberof DialogService
     */
    dialogRef: ComponentRef<any>;
    /**
     * Emits the state `true` if the Dialog is closed, false if `Dialog`
     * is opened/viewable.
     * @type {EventEmitter<any>}
     * @memberof DialogService
     */
    isClosed: EventEmitter<any>;
    /**
     * To watch the event that closes the `Dialog`.
     * @private
     * @type {Subscription}
     * @memberof DialogService
     */
    private dialogSubscription;
    /**
     * Creates an instance of `DialogService`.
     * @param {ComponentFactoryResolver} componentFactoryResolver
     * @param {Injector} injector
     * @memberof DialogService
     */
    constructor(componentFactoryResolver: ComponentFactoryResolver, injector: Injector, dialogPlaceholderService: DialogPlaceholderService);
    /**
     * Uses module `componentFactory` to create the `Dialog` component.
     * @param {any} component
     * @memberof DialogService
     */
    create(component: any): void;
    /**
     * Toggles between `Dialog` open/close states.
     * @param {ViewContainerRef} viewContainer
     * @param {DialogConfig} dialogConfig
     * @memberof DialogService
     */
    toggle(viewContainer: ViewContainerRef, dialogConfig: DialogConfig): void;
    /**
     * If `dialogRef` is defined, the Dialog is already open. If
     * `dialogRef` is undefined, we create the `Dialog` component and reference to it.
     * A subscription is created to track if the `Dialog` should close.
     * @param {ViewContainerRef} viewContainer
     * @param {DialogConfig} dialogConfig
     * @memberof DialogService
     */
    open(viewContainer: ViewContainerRef, dialogConfig: DialogConfig): this;
    /**
     * On close of `Dialog` item, sets focus back to previous item, unsets
     * the current `dialogRef` item. Unsubscribes to the event of `Dialog` close.
     * @param {ViewContainerRef} viewContainer
     * @param {any} [evt]
     * @memberof DialogService
     */
    close(viewContainer: ViewContainerRef): void;
}
