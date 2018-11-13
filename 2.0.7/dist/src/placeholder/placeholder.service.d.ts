import { ComponentRef, ViewContainerRef, ComponentFactory, Injector } from "@angular/core";
/**
 * Singleton service used to register the container for out-of-flow components to insert into.
 * Also used to insert/remove components from that view.
 */
export declare class PlaceholderService {
    /**
     * Maintain a `ViewContainerRef` to an instance of the component.
     */
    protected viewContainerRef: ViewContainerRef;
    /**
     * Used by `Placeholder` to register view-container reference.
     */
    registerViewContainerRef(vcRef: ViewContainerRef): void;
    /**
     * Creates and returns component in the view.
     */
    createComponent(componentFactory: ComponentFactory<any>, injector: Injector): ComponentRef<any>;
    destroyComponent(component: ComponentRef<any>): void;
    hasComponentRef(component: ComponentRef<any>): boolean;
    hasPlaceholderRef(): boolean;
}
