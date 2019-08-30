/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
/**
 * Singleton service used to register the container for out-of-flow components to insert into.
 * Also used to insert/remove components from that view.
 */
export class PlaceholderService {
    constructor() {
        /**
         * Maintain a `ViewContainerRef` to an instance of the component.
         */
        this.viewContainerRef = null;
    }
    /**
     * Used by `Placeholder` to register view-container reference.
     * @param {?} vcRef
     * @return {?}
     */
    registerViewContainerRef(vcRef) {
        this.viewContainerRef = vcRef;
    }
    /**
     * Creates and returns component in the view.
     * @param {?} componentFactory
     * @param {?} injector
     * @return {?}
     */
    createComponent(componentFactory, injector) {
        if (!this.viewContainerRef) {
            console.error("No view container defined! Likely due to a missing `ibm-placeholder`");
        }
        return this.viewContainerRef.createComponent(componentFactory, null, injector);
    }
    /**
     * @param {?} component
     * @return {?}
     */
    destroyComponent(component) {
        /** @type {?} */
        const index = this.viewContainerRef.indexOf(component.hostView);
        if (index < 0) {
            return;
        }
        // destroy the view
        this.viewContainerRef.remove(index);
    }
    /**
     * @param {?} component
     * @return {?}
     */
    hasComponentRef(component) {
        if (this.viewContainerRef.indexOf(component.hostView) < 0) {
            return false;
        }
        return true;
    }
    /**
     * @return {?}
     */
    hasPlaceholderRef() {
        return !!this.viewContainerRef;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    appendElement(element) {
        return this.viewContainerRef.element.nativeElement.appendChild(element);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    removeElement(element) {
        return this.viewContainerRef.element.nativeElement.removeChild(element);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    hasElement(element) {
        return this.viewContainerRef.element.nativeElement.contains(element);
    }
}
PlaceholderService.decorators = [
    { type: Injectable }
];
function PlaceholderService_tsickle_Closure_declarations() {
    /**
     * Maintain a `ViewContainerRef` to an instance of the component.
     * @type {?}
     */
    PlaceholderService.prototype.viewContainerRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJwbGFjZWhvbGRlci9wbGFjZWhvbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQU8zQyxNQUFNOzs7OztnQ0FJMEMsSUFBSTs7Ozs7OztJQUluRCx3QkFBd0IsQ0FBQyxLQUF1QjtRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0tBQzlCOzs7Ozs7O0lBS0QsZUFBZSxDQUFDLGdCQUF1QyxFQUFFLFFBQWtCO1FBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO1NBQ3RGO1FBQ0QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMvRTs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxTQUE0Qjs7UUFDNUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2QsT0FBTztTQUNQOztRQUdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7Ozs7O0lBRUQsZUFBZSxDQUFDLFNBQTRCO1FBQzNDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFELE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNaOzs7O0lBRUQsaUJBQWlCO1FBQ2hCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztLQUMvQjs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBb0I7UUFDakMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDeEU7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQW9CO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3hFOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFvQjtRQUM5QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNyRTs7O1lBdERELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnRSZWYsXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdENvbXBvbmVudEZhY3RvcnksXG5cdEluamVjdG9yXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLyoqXG4gKiBTaW5nbGV0b24gc2VydmljZSB1c2VkIHRvIHJlZ2lzdGVyIHRoZSBjb250YWluZXIgZm9yIG91dC1vZi1mbG93IGNvbXBvbmVudHMgdG8gaW5zZXJ0IGludG8uXG4gKiBBbHNvIHVzZWQgdG8gaW5zZXJ0L3JlbW92ZSBjb21wb25lbnRzIGZyb20gdGhhdCB2aWV3LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGxhY2Vob2xkZXJTZXJ2aWNlIHtcblx0LyoqXG5cdCAqIE1haW50YWluIGEgYFZpZXdDb250YWluZXJSZWZgIHRvIGFuIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQuXG5cdCAqL1xuXHRwcm90ZWN0ZWQgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiA9IG51bGw7XG5cdC8qKlxuXHQgKiBVc2VkIGJ5IGBQbGFjZWhvbGRlcmAgdG8gcmVnaXN0ZXIgdmlldy1jb250YWluZXIgcmVmZXJlbmNlLlxuXHQgKi9cblx0cmVnaXN0ZXJWaWV3Q29udGFpbmVyUmVmKHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKTogdm9pZCB7XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmID0gdmNSZWY7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhbmQgcmV0dXJucyBjb21wb25lbnQgaW4gdGhlIHZpZXcuXG5cdCAqL1xuXHRjcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxhbnk+LCBpbmplY3RvcjogSW5qZWN0b3IpOiBDb21wb25lbnRSZWY8YW55PiB7XG5cdFx0aWYgKCF0aGlzLnZpZXdDb250YWluZXJSZWYpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJObyB2aWV3IGNvbnRhaW5lciBkZWZpbmVkISBMaWtlbHkgZHVlIHRvIGEgbWlzc2luZyBgaWJtLXBsYWNlaG9sZGVyYFwiKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSwgbnVsbCwgaW5qZWN0b3IpO1xuXHR9XG5cblx0ZGVzdHJveUNvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+KSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLnZpZXdDb250YWluZXJSZWYuaW5kZXhPZihjb21wb25lbnQuaG9zdFZpZXcpO1xuXHRcdGlmIChpbmRleCA8IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBkZXN0cm95IHRoZSB2aWV3XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLnJlbW92ZShpbmRleCk7XG5cdH1cblxuXHRoYXNDb21wb25lbnRSZWYoY29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55Pikge1xuXHRcdGlmICh0aGlzLnZpZXdDb250YWluZXJSZWYuaW5kZXhPZihjb21wb25lbnQuaG9zdFZpZXcpIDwgMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGhhc1BsYWNlaG9sZGVyUmVmKCkge1xuXHRcdHJldHVybiAhIXRoaXMudmlld0NvbnRhaW5lclJlZjtcblx0fVxuXG5cdGFwcGVuZEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG5cdFx0cmV0dXJuIHRoaXMudmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdH1cblxuXHRyZW1vdmVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuXHRcdHJldHVybiB0aGlzLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuXHR9XG5cblx0aGFzRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpO1xuXHR9XG59XG4iXX0=