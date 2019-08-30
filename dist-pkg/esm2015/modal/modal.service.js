/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ComponentFactoryResolver, Injector } from "@angular/core";
import { Injectable } from "@angular/core";
import { AlertModal } from "./alert-modal.component";
import { PlaceholderService } from "./../placeholder/placeholder.module";
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
 */
export class ModalService {
    /**
     * Creates an instance of `ModalService`.
     * @param {?} resolver
     * @param {?} placeholderService
     */
    constructor(resolver, placeholderService) {
        this.resolver = resolver;
        this.placeholderService = placeholderService;
    }
    /**
     * Creates and renders the modal component that is passed in.
     * `inputs` is an optional parameter of `data` that can be passed to the `Modal` component.
     * @template T
     * @param {?} data
     * @return {?}
     */
    create(data) {
        /** @type {?} */
        let defaults = { inputs: {} };
        data = Object.assign({}, defaults, data);
        /** @type {?} */
        const inputProviders = Object.keys(data.inputs).map(inputName => ({ provide: inputName, useValue: data.inputs[inputName] }));
        /** @type {?} */
        const injector = Injector.create(inputProviders);
        /** @type {?} */
        const factory = this.resolver.resolveComponentFactory(data.component);
        /** @type {?} */
        let focusedElement = /** @type {?} */ (document.activeElement);
        /** @type {?} */
        let component = this.placeholderService.createComponent(factory, injector);
        component["previouslyFocusedElement"] = focusedElement; // used to return focus to previously focused element
        component.instance.close.subscribe(_ => {
            this.placeholderService.destroyComponent(component);
            // filter out our component
            ModalService.modalList = ModalService.modalList.filter(c => c === component);
        });
        component.onDestroy(() => {
            focusedElement.focus();
        });
        ModalService.modalList.push(component);
        return component;
    }
    /**
     * Creates and renders a new alert modal component.
     * @param {?} data You can pass in:
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
     * @return {?}
     */
    show(data) {
        for (let key of Object.keys(data)) {
            if (["modalType", "modalLabel", "modalTitle", "modalContent"].includes(key)) {
                try {
                    throw new Error(`${key} is deprecated, use ${key.replace("modal", "").toLowerCase()} instead`);
                }
                catch (error) {
                    console.warn(error);
                }
            }
        }
        return this.create({
            component: AlertModal,
            inputs: {
                modalType: data.type || data.modalType,
                modalLabel: data.label || data.modalLabel,
                modalTitle: data.title || data.modalTitle,
                modalContent: data.content || data.modalContent,
                buttons: data.buttons || [],
                close: data.close || (() => { })
            }
        });
    }
    /**
     * Destroys the modal on the supplied index.
     * When called without parameters it destroys the most recently created/top most modal.
     * @param {?=} index
     * @return {?}
     */
    destroy(index = -1) {
        // return if nothing to destroy because it's already destroyed
        if (index >= ModalService.modalList.length || ModalService.modalList.length === 0) {
            return;
        }
        // on negative index destroy the last on the list (top modal)
        if (index < 0) {
            index = ModalService.modalList.length - 1;
        }
        this.placeholderService.destroyComponent(ModalService.modalList[index]);
        ModalService.modalList.splice(index, 1);
    }
}
// track all our open modals
ModalService.modalList = [];
ModalService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: PlaceholderService }
];
function ModalService_tsickle_Closure_declarations() {
    /** @type {?} */
    ModalService.modalList;
    /** @type {?} */
    ModalService.prototype.resolver;
    /** @type {?} */
    ModalService.prototype.placeholderService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJtb2RhbC9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sd0JBQXdCLEVBRXhCLFFBQVEsRUFDUixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWdCekUsTUFBTTs7Ozs7O0lBT0wsWUFBbUIsUUFBa0MsRUFBUyxrQkFBc0M7UUFBakYsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFBUyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0tBQUk7Ozs7Ozs7O0lBTXhHLE1BQU0sQ0FBSSxJQUFvQzs7UUFDN0MsSUFBSSxRQUFRLEdBQUcsRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFDLENBQUM7UUFDNUIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQzs7UUFFekMsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7O1FBQzNILE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7O1FBQ2pELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENB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VTs7OztZQXhCVix3QkFBd0I7WUFTaEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRDb21wb25lbnRSZWYsXG5cdEluamVjdG9yXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuL21vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFsZXJ0TW9kYWwgfSBmcm9tIFwiLi9hbGVydC1tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFsZXJ0TW9kYWxEYXRhIH0gZnJvbSBcIi4vYWxlcnQtbW9kYWwuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBQbGFjZWhvbGRlclNlcnZpY2UgfSBmcm9tIFwiLi8uLi9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci5tb2R1bGVcIjtcblxuXG4vKipcbiAqIE1vZGFsIHNlcnZpY2UgaGFuZGxlcyBpbnN0YW50aWF0aW5nIGFuZCBkZXN0cm95aW5nIG1vZGFsIGluc3RhbmNlcy5cbiAqIFVzZXMgTW9kYWxQbGFjZWhvbGRlclNlcnZpY2UgdG8gdHJhY2sgb3BlbiBpbnN0YW5jZXMsIGFuZCBmb3IgaXQncyBwbGFjZWhvbGRlciB2aWV3IHJlZmVyZW5jZS5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBleHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcbiAqIFx0cmVnaXN0ZXJWaWV3Q29udGFpbmVyUmVmKHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKTogdm9pZCB7fVxuICogXHRjcmVhdGU8VD4oZGF0YToge2NvbXBvbmVudDogYW55LCBpbnB1dHM/OiBhbnl9KTogdm9pZCB7fVxuICogXHRkZXN0cm95KGluZGV4OiBudW1iZXIgPSAtMSk6IHZvaWQge31cbiAqIH1cbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcblx0Ly8gdHJhY2sgYWxsIG91ciBvcGVuIG1vZGFsc1xuXHRwcm90ZWN0ZWQgc3RhdGljIG1vZGFsTGlzdDogQXJyYXk8Q29tcG9uZW50UmVmPGFueT4+ID0gW107XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYE1vZGFsU2VydmljZWAuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcHVibGljIHBsYWNlaG9sZGVyU2VydmljZTogUGxhY2Vob2xkZXJTZXJ2aWNlKSB7fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuZCByZW5kZXJzIHRoZSBtb2RhbCBjb21wb25lbnQgdGhhdCBpcyBwYXNzZWQgaW4uXG5cdCAqIGBpbnB1dHNgIGlzIGFuIG9wdGlvbmFsIHBhcmFtZXRlciBvZiBgZGF0YWAgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBgTW9kYWxgIGNvbXBvbmVudC5cblx0ICovXG5cdGNyZWF0ZTxUPihkYXRhOiB7Y29tcG9uZW50OiBhbnksIGlucHV0cz86IGFueX0pOiBDb21wb25lbnRSZWY8YW55PiB7XG5cdFx0bGV0IGRlZmF1bHRzID0ge2lucHV0czoge319O1xuXHRcdGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgZGF0YSk7XG5cblx0XHRjb25zdCBpbnB1dFByb3ZpZGVycyA9IE9iamVjdC5rZXlzKGRhdGEuaW5wdXRzKS5tYXAoaW5wdXROYW1lID0+ICh7cHJvdmlkZTogaW5wdXROYW1lLCB1c2VWYWx1ZTogZGF0YS5pbnB1dHNbaW5wdXROYW1lXX0pKTtcblx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZShpbnB1dFByb3ZpZGVycyk7XG5cdFx0Y29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoZGF0YS5jb21wb25lbnQpO1xuXHRcdGxldCBmb2N1c2VkRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHRsZXQgY29tcG9uZW50ID0gdGhpcy5wbGFjZWhvbGRlclNlcnZpY2UuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnksIGluamVjdG9yKTtcblxuXHRcdGNvbXBvbmVudFtcInByZXZpb3VzbHlGb2N1c2VkRWxlbWVudFwiXSA9IGZvY3VzZWRFbGVtZW50OyAgLy8gdXNlZCB0byByZXR1cm4gZm9jdXMgdG8gcHJldmlvdXNseSBmb2N1c2VkIGVsZW1lbnRcblxuXHRcdGNvbXBvbmVudC5pbnN0YW5jZS5jbG9zZS5zdWJzY3JpYmUoXyA9PiB7XG5cdFx0XHR0aGlzLnBsYWNlaG9sZGVyU2VydmljZS5kZXN0cm95Q29tcG9uZW50KGNvbXBvbmVudCk7XG5cdFx0XHQvLyBmaWx0ZXIgb3V0IG91ciBjb21wb25lbnRcblx0XHRcdE1vZGFsU2VydmljZS5tb2RhbExpc3QgPSBNb2RhbFNlcnZpY2UubW9kYWxMaXN0LmZpbHRlcihjID0+IGMgPT09IGNvbXBvbmVudCk7XG5cdFx0fSk7XG5cblx0XHRjb21wb25lbnQub25EZXN0cm95KCgpID0+IHtcblx0XHRcdGZvY3VzZWRFbGVtZW50LmZvY3VzKCk7XG5cdFx0fSk7XG5cblx0XHRNb2RhbFNlcnZpY2UubW9kYWxMaXN0LnB1c2goY29tcG9uZW50KTtcblxuXHRcdHJldHVybiBjb21wb25lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhbmQgcmVuZGVycyBhIG5ldyBhbGVydCBtb2RhbCBjb21wb25lbnQuXG5cdCAqIEBwYXJhbSBkYXRhIFlvdSBjYW4gcGFzcyBpbjpcblx0ICogYG1vZGFsVHlwZWAgLSBcImRlZmF1bHRcIiB8IFwiZGFuZ2VyXCIgPSBcImRlZmF1bHRcIixcblx0ICogYG1vZGFsTGFiZWxgIC0gYSBsYWJlbCBzaG93biBvdmVyIHRoZSB0aXRsZSxcblx0ICogYG1vZGFsVGl0bGVgIC0gbW9kYWwncyB0aXRsZSxcblx0ICogYG1vZGFsQ29udGVudGAgLSBtb2RhbCdzIGNvbnRlbnQsIGNvdWxkIGluY2x1ZGUgSFRNTCB0YWdzLlxuXHQgKiBgYnV0dG9uc2AgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0c1xuXHQgKiBgYGBcblx0ICoge1xuXHQgKiBcdFx0dGV4dDogXCJCdXR0b24gdGV4dFwiLFxuXHQgKiBcdFx0dHlwZTogXCJwcmltYXJ5XCIgfCBcInNlY29uZGFyeVwiIHwgXCJ0ZXJ0aWFyeVwiIHwgXCJnaG9zdFwiIHwgXCJkYW5nZXJcIiB8IFwiZGFuZ2VyLS1wcmltYXJ5XCIgPSBcInByaW1hcnlcIixcblx0ICogXHRcdGNsaWNrOiBjbGlja0Z1bmN0aW9uLFxuXHQgKiB9XG5cdCAqIGBgYFxuXHQgKi9cblx0c2hvdyhkYXRhOiBBbGVydE1vZGFsRGF0YSkge1xuXHRcdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuXHRcdFx0aWYgKFtcIm1vZGFsVHlwZVwiLCBcIm1vZGFsTGFiZWxcIiwgXCJtb2RhbFRpdGxlXCIsIFwibW9kYWxDb250ZW50XCJdLmluY2x1ZGVzKGtleSkpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYCR7a2V5fSBpcyBkZXByZWNhdGVkLCB1c2UgJHtrZXkucmVwbGFjZShcIm1vZGFsXCIsIFwiXCIpLnRvTG93ZXJDYXNlKCl9IGluc3RlYWRgKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZSh7XG5cdFx0XHRjb21wb25lbnQ6IEFsZXJ0TW9kYWwsXG5cdFx0XHRpbnB1dHM6IHtcblx0XHRcdFx0bW9kYWxUeXBlOiBkYXRhLnR5cGUgfHwgZGF0YS5tb2RhbFR5cGUsXG5cdFx0XHRcdG1vZGFsTGFiZWw6IGRhdGEubGFiZWwgfHwgZGF0YS5tb2RhbExhYmVsLFxuXHRcdFx0XHRtb2RhbFRpdGxlOiBkYXRhLnRpdGxlIHx8IGRhdGEubW9kYWxUaXRsZSxcblx0XHRcdFx0bW9kYWxDb250ZW50OiBkYXRhLmNvbnRlbnQgfHwgZGF0YS5tb2RhbENvbnRlbnQsXG5cdFx0XHRcdGJ1dHRvbnM6IGRhdGEuYnV0dG9ucyB8fCBbXSxcblx0XHRcdFx0Y2xvc2U6IGRhdGEuY2xvc2UgfHwgKCgpID0+IHt9KVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBtb2RhbCBvbiB0aGUgc3VwcGxpZWQgaW5kZXguXG5cdCAqIFdoZW4gY2FsbGVkIHdpdGhvdXQgcGFyYW1ldGVycyBpdCBkZXN0cm95cyB0aGUgbW9zdCByZWNlbnRseSBjcmVhdGVkL3RvcCBtb3N0IG1vZGFsLlxuXHQgKi9cblx0ZGVzdHJveShpbmRleCA9IC0xKSB7XG5cdFx0Ly8gcmV0dXJuIGlmIG5vdGhpbmcgdG8gZGVzdHJveSBiZWNhdXNlIGl0J3MgYWxyZWFkeSBkZXN0cm95ZWRcblx0XHRpZiAoaW5kZXggPj0gTW9kYWxTZXJ2aWNlLm1vZGFsTGlzdC5sZW5ndGggfHwgTW9kYWxTZXJ2aWNlLm1vZGFsTGlzdC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gb24gbmVnYXRpdmUgaW5kZXggZGVzdHJveSB0aGUgbGFzdCBvbiB0aGUgbGlzdCAodG9wIG1vZGFsKVxuXHRcdGlmIChpbmRleCA8IDApIHtcblx0XHRcdGluZGV4ID0gTW9kYWxTZXJ2aWNlLm1vZGFsTGlzdC5sZW5ndGggLSAxO1xuXHRcdH1cblxuXHRcdHRoaXMucGxhY2Vob2xkZXJTZXJ2aWNlLmRlc3Ryb3lDb21wb25lbnQoTW9kYWxTZXJ2aWNlLm1vZGFsTGlzdFtpbmRleF0pO1xuXHRcdE1vZGFsU2VydmljZS5tb2RhbExpc3Quc3BsaWNlKGluZGV4LCAxKTtcblx0fVxufVxuXG5cbiJdfQ==