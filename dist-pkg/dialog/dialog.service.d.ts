import { EventEmitter, Injector, ComponentRef, ComponentFactory, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { Subscription } from "rxjs";
import { DialogConfig } from "./dialog-config.interface";
import { PlaceholderService } from "./../placeholder/placeholder.module";
/**
 * `Dialog` object to be injected into other components.
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
     */
    isOpen: boolean;
    /**
     * To be used to create the component using metadata.
     */
    componentFactory: ComponentFactory<any>;
    /**
     * To emit the `Dialog` closing event.
     */
    onClose: EventEmitter<any>;
    /**
     * Holds reference to the created `Dialog` component after creation.
     */
    dialogRef: ComponentRef<any>;
    /**
     * Emits the state `true` if the Dialog is closed, false if `Dialog`
     * is opened/viewable.
     */
    isClosed: EventEmitter<any>;
    /**
     * To watch the event that closes the `Dialog`.
     */
    protected dialogSubscription: Subscription;
    /**
     * Creates an instance of `DialogService`.
     */
    constructor(componentFactoryResolver: ComponentFactoryResolver, injector: Injector, placeholderService: PlaceholderService);
    /**
     * Uses module `componentFactory` to create the `Dialog` component.
     */
    create(component: any): void;
    /**
     * Toggles between `Dialog` open/close states.
     */
    toggle(viewContainer: ViewContainerRef, dialogConfig: DialogConfig): void;
    /**
     * If `dialogRef` is defined, the Dialog is already open. If
     * `dialogRef` is undefined, we create the `Dialog` component and reference to it.
     * A subscription is created to track if the `Dialog` should close.
     */
    open(viewContainer: ViewContainerRef, dialogConfig: DialogConfig): this;
    /**
     * On close of `Dialog` item, sets focus back to previous item, unsets
     * the current `dialogRef` item. Unsubscribes to the event of `Dialog` close.
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
