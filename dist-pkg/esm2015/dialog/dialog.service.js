/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter, Injector, ComponentFactoryResolver, Injectable } from "@angular/core";
import { PlaceholderService } from "./../placeholder/placeholder.module";
/**
 * `Dialog` object to be injected into other components.
 */
export class DialogService {
    /**
     * Creates an instance of `DialogService`.
     * @param {?} componentFactoryResolver
     * @param {?} injector
     * @param {?} placeholderService
     */
    constructor(componentFactoryResolver, injector, placeholderService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.placeholderService = placeholderService;
        /**
         * Reflects the open or closed state of the `Dialog`.
         */
        this.isOpen = false;
        /**
         * To emit the `Dialog` closing event.
         */
        this.onClose = new EventEmitter();
        /**
         * Emits the state `true` if the Dialog is closed, false if `Dialog`
         * is opened/viewable.
         */
        this.isClosed = new EventEmitter();
    }
    /**
     * Uses module `componentFactory` to create the `Dialog` component.
     * @param {?} component
     * @return {?}
     */
    create(component) {
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    }
    /**
     * Toggles between `Dialog` open/close states.
     * @param {?} viewContainer
     * @param {?} dialogConfig
     * @return {?}
     */
    toggle(viewContainer, dialogConfig) {
        if (this.isOpen) {
            this.close(viewContainer);
        }
        else {
            this.open(viewContainer, dialogConfig);
        }
    }
    /**
     * If `dialogRef` is defined, the Dialog is already open. If
     * `dialogRef` is undefined, we create the `Dialog` component and reference to it.
     * A subscription is created to track if the `Dialog` should close.
     * @param {?} viewContainer
     * @param {?} dialogConfig
     * @return {?}
     */
    open(viewContainer, dialogConfig) {
        if (!this.dialogRef) {
            if (dialogConfig.appendInline) {
                // add our component to the view
                this.dialogRef = viewContainer.createComponent(this.componentFactory, 0, this.injector);
            }
            else if (!this.placeholderService.hasPlaceholderRef()) {
                this.dialogRef = viewContainer.createComponent(this.componentFactory, 0, this.injector);
                setTimeout(() => {
                    window.document.querySelector("body").appendChild(this.dialogRef.location.nativeElement);
                });
            }
            else {
                this.dialogRef = this.placeholderService.createComponent(this.componentFactory, this.injector);
            }
            /** @type {?} */
            let focusedElement = document.activeElement;
            dialogConfig["previouslyFocusedElement"] = focusedElement;
            this.dialogRef.instance.dialogConfig = dialogConfig;
            this.onClose = this.dialogRef.instance.close;
            this.isOpen = true;
            this.dialogSubscription = this.onClose.subscribe(() => {
                this.close(viewContainer);
            });
            this.dialogRef.instance.elementRef.nativeElement.focus();
        }
        return this;
    }
    /**
     * On close of `Dialog` item, sets focus back to previous item, unsets
     * the current `dialogRef` item. Unsubscribes to the event of `Dialog` close.
     * @param {?} viewContainer
     * @return {?}
     */
    close(viewContainer) {
        this.isClosed.emit(true);
        if (this.dialogRef) {
            /** @type {?} */
            let elementToFocus = this.dialogRef.instance.dialogConfig["previouslyFocusedElement"];
            if (this.placeholderService.hasPlaceholderRef() && !this.dialogRef.instance.dialogConfig.appendInline) {
                this.placeholderService.destroyComponent(this.dialogRef);
            }
            else {
                viewContainer.remove(viewContainer.indexOf(this.dialogRef.hostView));
            }
            this.dialogRef = null;
            this.isOpen = false;
            elementToFocus.focus();
            if (this.dialogSubscription) {
                this.dialogSubscription.unsubscribe();
            }
        }
    }
    /**
     * Fix for safari hijacking clicks.
     *
     * Runs on `ngOnInit` of every dialog. Ensures we don't have multiple listeners
     * because having many of them could degrade performance in certain cases (and is
     * not necessary for our use case)
     *
     * This is an internally used function, can change at any point (even get removed)
     * and changes to it won't be considered a breaking change. Use at your own risk.
     * @return {?}
     */
    singletonClickListen() {
        if (!DialogService.listeningForBodyClicks) {
            document.body.firstElementChild.addEventListener("click", () => null, true);
            DialogService.listeningForBodyClicks = true;
        }
    }
}
/**
 * Used in `singletonClickListen`, don't count on its existence and values.
 */
DialogService.listeningForBodyClicks = false;
DialogService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DialogService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: PlaceholderService }
];
function DialogService_tsickle_Closure_declarations() {
    /**
     * Used in `singletonClickListen`, don't count on its existence and values.
     * @type {?}
     */
    DialogService.listeningForBodyClicks;
    /**
     * Reflects the open or closed state of the `Dialog`.
     * @type {?}
     */
    DialogService.prototype.isOpen;
    /**
     * To be used to create the component using metadata.
     * @type {?}
     */
    DialogService.prototype.componentFactory;
    /**
     * To emit the `Dialog` closing event.
     * @type {?}
     */
    DialogService.prototype.onClose;
    /**
     * Holds reference to the created `Dialog` component after creation.
     * @type {?}
     */
    DialogService.prototype.dialogRef;
    /**
     * Emits the state `true` if the Dialog is closed, false if `Dialog`
     * is opened/viewable.
     * @type {?}
     */
    DialogService.prototype.isClosed;
    /**
     * To watch the event that closes the `Dialog`.
     * @type {?}
     */
    DialogService.prototype.dialogSubscription;
    /** @type {?} */
    DialogService.prototype.componentFactoryResolver;
    /** @type {?} */
    DialogService.prototype.injector;
    /** @type {?} */
    DialogService.prototype.placeholderService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFHUix3QkFBd0IsRUFDeEIsVUFBVSxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7O0FBTXpFLE1BQU07Ozs7Ozs7SUFxQ0wsWUFDVyx3QkFBa0QsRUFDbEQsUUFBa0IsRUFDbEIsa0JBQXNDO1FBRnRDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9COzs7O3NCQS9CakMsS0FBSzs7Ozt1QkFRZSxJQUFJLFlBQVksRUFBRTs7Ozs7d0JBVXhCLElBQUksWUFBWSxFQUFFO0tBYzVDOzs7Ozs7SUFLSixNQUFNLENBQUMsU0FBUztRQUNmLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDekY7Ozs7Ozs7SUFLRCxNQUFNLENBQUMsYUFBK0IsRUFBRSxZQUEwQjtRQUNqRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMxQjthQUFNO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDdkM7S0FDRDs7Ozs7Ozs7O0lBT0QsSUFBSSxDQUFDLGFBQStCLEVBQUUsWUFBMEI7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDcEIsSUFBSSxZQUFZLENBQUMsWUFBWSxFQUFFOztnQkFFOUIs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SSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVFLGFBQWEsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7U0FDNUM7S0FDRDs7Ozs7dUNBbkl5QyxLQUFLOztZQUwvQyxVQUFVOzs7O1lBWFYsd0JBQXdCO1lBSHhCLFFBQVE7WUFTQSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRFdmVudEVtaXR0ZXIsXG5cdEluamVjdG9yLFxuXHRDb21wb25lbnRSZWYsXG5cdENvbXBvbmVudEZhY3RvcnksXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0SW5qZWN0YWJsZSxcblx0Vmlld0NvbnRhaW5lclJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IERpYWxvZ0NvbmZpZyB9IGZyb20gXCIuL2RpYWxvZy1jb25maWcuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBQbGFjZWhvbGRlclNlcnZpY2UgfSBmcm9tIFwiLi8uLi9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci5tb2R1bGVcIjtcblxuLyoqXG4gKiBgRGlhbG9nYCBvYmplY3QgdG8gYmUgaW5qZWN0ZWQgaW50byBvdGhlciBjb21wb25lbnRzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSB7XG5cdC8qKlxuXHQgKiBVc2VkIGluIGBzaW5nbGV0b25DbGlja0xpc3RlbmAsIGRvbid0IGNvdW50IG9uIGl0cyBleGlzdGVuY2UgYW5kIHZhbHVlcy5cblx0ICovXG5cdHByb3RlY3RlZCBzdGF0aWMgbGlzdGVuaW5nRm9yQm9keUNsaWNrcyA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBSZWZsZWN0cyB0aGUgb3BlbiBvciBjbG9zZWQgc3RhdGUgb2YgdGhlIGBEaWFsb2dgLlxuXHQgKi9cblx0cHVibGljIGlzT3BlbiA9IGZhbHNlO1xuXHQvKipcblx0ICogVG8gYmUgdXNlZCB0byBjcmVhdGUgdGhlIGNvbXBvbmVudCB1c2luZyBtZXRhZGF0YS5cblx0ICovXG5cdHB1YmxpYyBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PGFueT47XG5cdC8qKlxuXHQgKiBUbyBlbWl0IHRoZSBgRGlhbG9nYCBjbG9zaW5nIGV2ZW50LlxuXHQgKi9cblx0cHVibGljIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHQvKipcblx0ICogSG9sZHMgcmVmZXJlbmNlIHRvIHRoZSBjcmVhdGVkIGBEaWFsb2dgIGNvbXBvbmVudCBhZnRlciBjcmVhdGlvbi5cblx0ICovXG5cdHB1YmxpYyBkaWFsb2dSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuXG5cdC8qKlxuXHQgKiBFbWl0cyB0aGUgc3RhdGUgYHRydWVgIGlmIHRoZSBEaWFsb2cgaXMgY2xvc2VkLCBmYWxzZSBpZiBgRGlhbG9nYFxuXHQgKiBpcyBvcGVuZWQvdmlld2FibGUuXG5cdCAqL1xuXHRpc0Nsb3NlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqXG5cdCAqIFRvIHdhdGNoIHRoZSBldmVudCB0aGF0IGNsb3NlcyB0aGUgYERpYWxvZ2AuXG5cdCAqL1xuXHRwcm90ZWN0ZWQgZGlhbG9nU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYERpYWxvZ1NlcnZpY2VgLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0cHJvdGVjdGVkIHBsYWNlaG9sZGVyU2VydmljZTogUGxhY2Vob2xkZXJTZXJ2aWNlXG5cdCkge31cblxuXHQvKipcblx0ICogVXNlcyBtb2R1bGUgYGNvbXBvbmVudEZhY3RvcnlgIHRvIGNyZWF0ZSB0aGUgYERpYWxvZ2AgY29tcG9uZW50LlxuXHQgKi9cblx0Y3JlYXRlKGNvbXBvbmVudCkge1xuXHRcdHRoaXMuY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlcyBiZXR3ZWVuIGBEaWFsb2dgIG9wZW4vY2xvc2Ugc3RhdGVzLlxuXHQgKi9cblx0dG9nZ2xlKHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIGRpYWxvZ0NvbmZpZzogRGlhbG9nQ29uZmlnKSB7XG5cdFx0aWYgKHRoaXMuaXNPcGVuKSB7XG5cdFx0XHR0aGlzLmNsb3NlKHZpZXdDb250YWluZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW4odmlld0NvbnRhaW5lciwgZGlhbG9nQ29uZmlnKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSWYgYGRpYWxvZ1JlZmAgaXMgZGVmaW5lZCwgdGhlIERpYWxvZyBpcyBhbHJlYWR5IG9wZW4uIElmXG5cdCAqIGBkaWFsb2dSZWZgIGlzIHVuZGVmaW5lZCwgd2UgY3JlYXRlIHRoZSBgRGlhbG9nYCBjb21wb25lbnQgYW5kIHJlZmVyZW5jZSB0byBpdC5cblx0ICogQSBzdWJzY3JpcHRpb24gaXMgY3JlYXRlZCB0byB0cmFjayBpZiB0aGUgYERpYWxvZ2Agc2hvdWxkIGNsb3NlLlxuXHQgKi9cblx0b3Blbih2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBkaWFsb2dDb25maWc6IERpYWxvZ0NvbmZpZykge1xuXHRcdGlmICghdGhpcy5kaWFsb2dSZWYpIHtcblx0XHRcdGlmIChkaWFsb2dDb25maWcuYXBwZW5kSW5saW5lKSB7XG5cdFx0XHRcdC8vIGFkZCBvdXIgY29tcG9uZW50IHRvIHRoZSB2aWV3XG5cdFx0XHRcdHRoaXMuZGlhbG9nUmVmID0gdmlld0NvbnRhaW5lci5jcmVhdGVDb21wb25lbnQodGhpcy5jb21wb25lbnRGYWN0b3J5LCAwLCB0aGlzLmluamVjdG9yKTtcblx0XHRcdH0gZWxzZSBpZiAoIXRoaXMucGxhY2Vob2xkZXJTZXJ2aWNlLmhhc1BsYWNlaG9sZGVyUmVmKCkpIHtcblx0XHRcdFx0dGhpcy5kaWFsb2dSZWYgPSB2aWV3Q29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudEZhY3RvcnksIDAsIHRoaXMuaW5qZWN0b3IpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kQ2hpbGQodGhpcy5kaWFsb2dSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5kaWFsb2dSZWYgPSB0aGlzLnBsYWNlaG9sZGVyU2VydmljZS5jcmVhdGVDb21wb25lbnQodGhpcy5jb21wb25lbnRGYWN0b3J5LCB0aGlzLmluamVjdG9yKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaW5pdGlhbGl6ZSBzb21lIGV4dHJhIG9wdGlvbnNcblx0XHRcdGxldCBmb2N1c2VkRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdFx0XHRkaWFsb2dDb25maWdbXCJwcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnRcIl0gPSBmb2N1c2VkRWxlbWVudDtcblx0XHRcdHRoaXMuZGlhbG9nUmVmLmluc3RhbmNlLmRpYWxvZ0NvbmZpZyA9IGRpYWxvZ0NvbmZpZztcblx0XHRcdHRoaXMub25DbG9zZSA9IHRoaXMuZGlhbG9nUmVmLmluc3RhbmNlLmNsb3NlO1xuXHRcdFx0dGhpcy5pc09wZW4gPSB0cnVlO1xuXG5cdFx0XHR0aGlzLmRpYWxvZ1N1YnNjcmlwdGlvbiA9IHRoaXMub25DbG9zZS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNsb3NlKHZpZXdDb250YWluZXIpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuZGlhbG9nUmVmLmluc3RhbmNlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBjbG9zZSBvZiBgRGlhbG9nYCBpdGVtLCBzZXRzIGZvY3VzIGJhY2sgdG8gcHJldmlvdXMgaXRlbSwgdW5zZXRzXG5cdCAqIHRoZSBjdXJyZW50IGBkaWFsb2dSZWZgIGl0ZW0uIFVuc3Vic2NyaWJlcyB0byB0aGUgZXZlbnQgb2YgYERpYWxvZ2AgY2xvc2UuXG5cdCAqL1xuXHRjbG9zZSh2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7XG5cdFx0dGhpcy5pc0Nsb3NlZC5lbWl0KHRydWUpO1xuXG5cdFx0aWYgKHRoaXMuZGlhbG9nUmVmKSB7XG5cdFx0XHRsZXQgZWxlbWVudFRvRm9jdXMgPSB0aGlzLmRpYWxvZ1JlZi5pbnN0YW5jZS5kaWFsb2dDb25maWdbXCJwcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnRcIl07XG5cdFx0XHRpZiAodGhpcy5wbGFjZWhvbGRlclNlcnZpY2UuaGFzUGxhY2Vob2xkZXJSZWYoKSAmJiAhdGhpcy5kaWFsb2dSZWYuaW5zdGFuY2UuZGlhbG9nQ29uZmlnLmFwcGVuZElubGluZSkge1xuXHRcdFx0XHR0aGlzLnBsYWNlaG9sZGVyU2VydmljZS5kZXN0cm95Q29tcG9uZW50KHRoaXMuZGlhbG9nUmVmKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZpZXdDb250YWluZXIucmVtb3ZlKHZpZXdDb250YWluZXIuaW5kZXhPZih0aGlzLmRpYWxvZ1JlZi5ob3N0VmlldykpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kaWFsb2dSZWYgPSBudWxsO1xuXHRcdFx0dGhpcy5pc09wZW4gPSBmYWxzZTtcblx0XHRcdGVsZW1lbnRUb0ZvY3VzLmZvY3VzKCk7XG5cblx0XHRcdGlmICh0aGlzLmRpYWxvZ1N1YnNjcmlwdGlvbikge1xuXHRcdFx0XHR0aGlzLmRpYWxvZ1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBGaXggZm9yIHNhZmFyaSBoaWphY2tpbmcgY2xpY2tzLlxuXHQgKlxuXHQgKiBSdW5zIG9uIGBuZ09uSW5pdGAgb2YgZXZlcnkgZGlhbG9nLiBFbnN1cmVzIHdlIGRvbid0IGhhdmUgbXVsdGlwbGUgbGlzdGVuZXJzXG5cdCAqIGJlY2F1c2UgaGF2aW5nIG1hbnkgb2YgdGhlbSBjb3VsZCBkZWdyYWRlIHBlcmZvcm1hbmNlIGluIGNlcnRhaW4gY2FzZXMgKGFuZCBpc1xuXHQgKiBub3QgbmVjZXNzYXJ5IGZvciBvdXIgdXNlIGNhc2UpXG5cdCAqXG5cdCAqIFRoaXMgaXMgYW4gaW50ZXJuYWxseSB1c2VkIGZ1bmN0aW9uLCBjYW4gY2hhbmdlIGF0IGFueSBwb2ludCAoZXZlbiBnZXQgcmVtb3ZlZClcblx0ICogYW5kIGNoYW5nZXMgdG8gaXQgd29uJ3QgYmUgY29uc2lkZXJlZCBhIGJyZWFraW5nIGNoYW5nZS4gVXNlIGF0IHlvdXIgb3duIHJpc2suXG5cdCAqL1xuXHRzaW5nbGV0b25DbGlja0xpc3RlbigpIHtcblx0XHRpZiAoIURpYWxvZ1NlcnZpY2UubGlzdGVuaW5nRm9yQm9keUNsaWNrcykge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbnVsbCwgdHJ1ZSk7XG5cdFx0XHREaWFsb2dTZXJ2aWNlLmxpc3RlbmluZ0ZvckJvZHlDbGlja3MgPSB0cnVlO1xuXHRcdH1cblx0fVxufVxuIl19