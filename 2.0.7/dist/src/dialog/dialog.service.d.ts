import { EventEmitter, Injector, ComponentRef, ComponentFactory, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { Subscription } from "rxjs";
import { DialogConfig } from "./dialog-config.interface";
import { PlaceholderService } from "./../placeholder/placeholder.module";
/**
 * `Dialog` object to be injected into other components.
 * @export
 * @class DialogService
 */
export declare class DialogService {
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected injector: Injector;
    protected placeholderService: PlaceholderService;
    /**
     * Used in `singletonClickListen`, don't count on its existence and values.
     */
    protected static listeningForBodyClicks: boolean;
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
     * @protected
     * @type {Subscription}
     * @memberof DialogService
     */
    protected dialogSubscription: Subscription;
    /**
     * Creates an instance of `DialogService`.
     * @param {ComponentFactoryResolver} componentFactoryResolver
     * @param {Injector} injector
     * @memberof DialogService
     */
    constructor(componentFactoryResolver: ComponentFactoryResolver, injector: Injector, placeholderService: PlaceholderService);
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
    /**
     * Fix for safari hijacking clicks.
     *
     * Runs on `ngOnInit` of every dialog. Ensures we don't have multiple listeners
     * because having many of them could degrade performance in certain cases (and is
     * not necessary for our use case)
     *
     * This is an internally used function, can change at any point (even get removed)
     * and changes to it won't be considered a breaking change. Use at your own risk.
     */
    singletonClickListen(): void;
}
