/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, ElementRef, ViewContainerRef, HostListener, HostBinding } from "@angular/core";
import { fromEvent } from "rxjs";
import { DialogService } from "./dialog.service";
/**
 * A generic directive that can be inherited from to create dialogs (for example, a tooltip or popover)
 *
 * This class contains the relevant initialization code, specific templates, options, and additional inputs
 * should be specified in the derived class.
 *
 * NOTE: All child classes should add `DialogService` as a provider, otherwise they will lose context that
 * the service relies on.
 */
export class DialogDirective {
    /**
     * Creates an instance of DialogDirective.
     * @param {?} elementRef
     * @param {?} viewContainerRef
     * @param {?} dialogService
     */
    constructor(elementRef, viewContainerRef, dialogService) {
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
        this.dialogService = dialogService;
        /**
         * Title for the dialog
         */
        this.title = "";
        /**
         * Defines how the Dialog is triggered.(Hover and click behave the same on mobile - both respond to a single tap)
         */
        this.trigger = "click";
        /**
         * Defines how the Dialog close event is triggered.
         *
         * [See here](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event)
         * for more on the difference between `mouseleave` and `mouseout`.
         *
         * Defaults to `click` when `trigger` is set to `click`.
         */
        this.closeTrigger = "mouseleave";
        /**
         * Placement of the dialog, usually relative to the element the directive is on.
         */
        this.placement = "left";
        /**
         * Spacing between the dialog and it's triggering element
         */
        this.gap = 0;
        /**
         * Set to `true` to open the dialog next to the triggering component
         */
        this.appendInline = false;
        /**
         * Optional data for templates
         */
        this.data = {};
        /**
         * Emits an event when the dialog is closed
         */
        this.onClose = new EventEmitter();
        /**
         * Emits an event when the dialog is opened
         */
        this.onOpen = new EventEmitter();
        this.role = "button";
        this.expanded = false;
        this.hasPopup = true;
    }
    /**
     * Deprecated. Defaults to true. Use appendInline to keep dialogs within page flow
     * Value `true` appends Dialog to the body (to break out of containers)
     * @param {?} v
     * @return {?}
     */
    set appendToBody(v) {
        console.log("`appendToBody` has been deprecated. Dialogs now append to the body by default.");
        console.log("Ensure you have an `ibm-placeholder` in your app.");
        console.log("Use `appendInline` if you need to position your dialogs within the normal page flow.");
        this.appendInline = !v;
    }
    /**
     * @return {?}
     */
    get appendToBody() {
        return !this.appendInline;
    }
    /**
     * @return {?}
     */
    get ariaOwns() {
        return this.expanded ? this.dialogConfig["compID"] : null;
    }
    /**
     * Overrides 'touchstart' event to trigger a toggle on the Dialog.
     * @param {?} evt
     * @return {?}
     */
    onTouchStart(evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();
        this.toggle();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        // set the config object (this can [and should!] be added to in child classes depending on what they need)
        this.dialogConfig = {
            title: this.title,
            content: this.ibmDialog,
            placement: this.placement,
            parentRef: this.elementRef,
            gap: this.gap,
            trigger: this.trigger,
            closeTrigger: this.closeTrigger,
            appendInline: this.appendInline,
            wrapperClass: this.wrapperClass,
            data: this.data
        };
    }
    /**
     * Sets the config object and binds events for hovering or clicking before
     * running code from child class.
     * @return {?}
     */
    ngOnInit() {
        // fix for safari hijacking clicks
        this.dialogService.singletonClickListen();
        fromEvent(this.elementRef.nativeElement, "keydown").subscribe((event) => {
            // "Esc" is an IE specific value
            if (event.target === this.dialogConfig.parentRef.nativeElement && (event.key === "Tab" || event.key === "Tab" && event.shiftKey) ||
                event.key === "Escape" || event.key === "Esc") {
                this.close();
            }
        });
        // bind events for hovering or clicking the host
        if (this.trigger === "hover" || this.trigger === "mouseenter") {
            fromEvent(this.elementRef.nativeElement, "mouseenter").subscribe(() => this.toggle());
            fromEvent(this.elementRef.nativeElement, this.closeTrigger).subscribe(() => this.close());
            fromEvent(this.elementRef.nativeElement, "focus").subscribe(() => this.open());
            fromEvent(this.elementRef.nativeElement, "blur").subscribe(() => this.close());
        }
        else {
            fromEvent(this.elementRef.nativeElement, "click").subscribe(() => this.toggle());
            fromEvent(this.elementRef.nativeElement, "keydown").subscribe((event) => {
                // "Spacebar" is an IE specific value
                if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
                    this.open();
                }
            });
        }
        // call onClose when the dialog is closed
        // - Enforce accessibility by updating an aria attr for nativeElement.
        this.dialogService.isClosed.subscribe(value => {
            if (value) {
                this.onClose.emit();
                this.expanded = false;
            }
        });
        DialogDirective.dialogCounter++;
        this.dialogConfig["compID"] = "dialog-" + DialogDirective.dialogCounter;
        // run any code a child class may need
        this.onDialogInit();
    }
    /**
     * When the host dies, kill the popover.
     * - Useful for use in a modal or similar.
     * @return {?}
     */
    ngOnDestroy() {
        this.close();
    }
    /**
     * Helper method to call dialogService 'open'.
     * - Enforce accessibility by updating an aria attr for nativeElement.
     * @return {?}
     */
    open() {
        this.dialogService.open(this.viewContainerRef, this.dialogConfig);
        this.expanded = true;
        this.onOpen.emit();
    }
    /**
     * Helper method to call dialogService 'toggle'.
     * - Enforce accessibility by updating an aria attr for nativeElement.
     * @return {?}
     */
    toggle() {
        this.dialogService.toggle(this.viewContainerRef, this.dialogConfig);
        this.expanded = this.dialogService.isOpen;
        if (this.expanded) {
            this.onOpen.emit();
        }
    }
    /**
     * Helper method to call dialogService 'close'.
     * - Enforce accessibility by updating an aria attr for nativeElement.
     * @return {?}
     */
    close() {
        this.dialogService.close(this.viewContainerRef);
        this.expanded = false;
    }
    /**
     * Empty method for child classes to override and specify additional init steps.
     * Run after DialogDirective completes it's ngOnInit.
     * @return {?}
     */
    onDialogInit() { }
}
DialogDirective.dialogCounter = 0;
DialogDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ibmDialog]",
                exportAs: "ibmDialog",
                providers: [
                    DialogService
                ]
            },] }
];
/** @nocollapse */
DialogDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: DialogService }
];
DialogDirective.propDecorators = {
    title: [{ type: Input }],
    ibmDialog: [{ type: Input }],
    trigger: [{ type: Input }],
    closeTrigger: [{ type: Input }],
    placement: [{ type: Input }],
    wrapperClass: [{ type: Input }],
    gap: [{ type: Input }],
    appendToBody: [{ type: Input }],
    appendInline: [{ type: Input }],
    data: [{ type: Input }],
    onClose: [{ type: Output }],
    onOpen: [{ type: Output }],
    role: [{ type: HostBinding, args: ["attr.role",] }],
    expanded: [{ type: HostBinding, args: ["attr.aria-expanded",] }],
    hasPopup: [{ type: HostBinding, args: ["attr.aria-haspopup",] }],
    ariaOwns: [{ type: HostBinding, args: ["attr.aria-owns",] }],
    onTouchStart: [{ type: HostListener, args: ["touchstart", ["$event"],] }]
};
function DialogDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DialogDirective.dialogCounter;
    /**
     * Title for the dialog
     * @type {?}
     */
    DialogDirective.prototype.title;
    /**
     * Dialog body content.
     * @type {?}
     */
    DialogDirective.prototype.ibmDialog;
    /**
     * Defines how the Dialog is triggered.(Hover and click behave the same on mobile - both respond to a single tap)
     * @type {?}
     */
    DialogDirective.prototype.trigger;
    /**
     * Defines how the Dialog close event is triggered.
     *
     * [See here](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event)
     * for more on the difference between `mouseleave` and `mouseout`.
     *
     * Defaults to `click` when `trigger` is set to `click`.
     * @type {?}
     */
    DialogDirective.prototype.closeTrigger;
    /**
     * Placement of the dialog, usually relative to the element the directive is on.
     * @type {?}
     */
    DialogDirective.prototype.placement;
    /**
     * Class to add to the dialog container
     * @type {?}
     */
    DialogDirective.prototype.wrapperClass;
    /**
     * Spacing between the dialog and it's triggering element
     * @type {?}
     */
    DialogDirective.prototype.gap;
    /**
     * Set to `true` to open the dialog next to the triggering component
     * @type {?}
     */
    DialogDirective.prototype.appendInline;
    /**
     * Optional data for templates
     * @type {?}
     */
    DialogDirective.prototype.data;
    /**
     * Config object passed to the rendered component
     * @type {?}
     */
    DialogDirective.prototype.dialogConfig;
    /**
     * Emits an event when the dialog is closed
     * @type {?}
     */
    DialogDirective.prototype.onClose;
    /**
     * Emits an event when the dialog is opened
     * @type {?}
     */
    DialogDirective.prototype.onOpen;
    /** @type {?} */
    DialogDirective.prototype.role;
    /** @type {?} */
    DialogDirective.prototype.expanded;
    /** @type {?} */
    DialogDirective.prototype.hasPopup;
    /** @type {?} */
    DialogDirective.prototype.elementRef;
    /** @type {?} */
    DialogDirective.prototype.viewContainerRef;
    /** @type {?} */
    DialogDirective.prototype.dialogService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJkaWFsb2cvZGlhbG9nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHWixVQUFVLEVBRVYsZ0JBQWdCLEVBQ2hCLFlBQVksRUFFWixXQUFXLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7QUFtQmpELE1BQU07Ozs7Ozs7SUFrRkwsWUFDVyxVQUFzQixFQUN0QixnQkFBa0MsRUFDbEMsYUFBNEI7UUFGNUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFlOzs7O3FCQWhGdEIsRUFBRTs7Ozt1QkFRa0MsT0FBTzs7Ozs7Ozs7OzRCQVNULFlBQVk7Ozs7eUJBSTFDLE1BQU07Ozs7bUJBUVosQ0FBQzs7Ozs0QkFpQlEsS0FBSzs7OztvQkFJYixFQUFFOzs7O3VCQVFxQixJQUFJLFlBQVksRUFBRTs7OztzQkFJbkIsSUFBSSxZQUFZLEVBQUU7b0JBRXZCLFFBQVE7d0JBQ0ssS0FBSzt3QkFDTCxJQUFJO0tBY1A7Ozs7Ozs7SUE5QzNDLElBQWEsWUFBWSxDQUFDLENBQVU7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDO1FBQzlGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQW1ELENBQUMsQ0FBQztRQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNGQUFzRixDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENB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TSxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25CO0tBQ0Q7Ozs7OztJQU1ELEtBQUs7UUFDSixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7Ozs7O0lBTVMsWUFBWSxNQUFLOztnQ0EzTUosQ0FBQzs7WUFSeEIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsV0FBVztnQkFDckIsU0FBUyxFQUFFO29CQUNWLGFBQWE7aUJBQ2I7YUFDRDs7OztZQTFCQSxVQUFVO1lBRVYsZ0JBQWdCO1lBTVIsYUFBYTs7O29CQXdCcEIsS0FBSzt3QkFJTCxLQUFLO3NCQUlMLEtBQUs7MkJBU0wsS0FBSzt3QkFJTCxLQUFLOzJCQUlMLEtBQUs7a0JBSUwsS0FBSzsyQkFLTCxLQUFLOzJCQVlMLEtBQUs7bUJBSUwsS0FBSztzQkFRTCxNQUFNO3FCQUlOLE1BQU07bUJBRU4sV0FBVyxTQUFDLFdBQVc7dUJBQ3ZCLFdBQVcsU0FBQyxvQkFBb0I7dUJBQ2hDLFdBQVcsU0FBQyxvQkFBb0I7dUJBQ2hDLFdBQVcsU0FBQyxnQkFBZ0I7MkJBa0I1QixZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGlyZWN0aXZlLFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdE9uSW5pdCxcblx0T25EZXN0cm95LFxuXHRFbGVtZW50UmVmLFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NvbnRhaW5lclJlZixcblx0SG9zdExpc3RlbmVyLFxuXHRPbkNoYW5nZXMsXG5cdEhvc3RCaW5kaW5nXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gXCIuL2RpYWxvZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEaWFsb2dDb25maWcgfSBmcm9tIFwiLi9kaWFsb2ctY29uZmlnLmludGVyZmFjZVwiO1xuXG4vKipcbiAqIEEgZ2VuZXJpYyBkaXJlY3RpdmUgdGhhdCBjYW4gYmUgaW5oZXJpdGVkIGZyb20gdG8gY3JlYXRlIGRpYWxvZ3MgKGZvciBleGFtcGxlLCBhIHRvb2x0aXAgb3IgcG9wb3ZlcilcbiAqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIHRoZSByZWxldmFudCBpbml0aWFsaXphdGlvbiBjb2RlLCBzcGVjaWZpYyB0ZW1wbGF0ZXMsIG9wdGlvbnMsIGFuZCBhZGRpdGlvbmFsIGlucHV0c1xuICogc2hvdWxkIGJlIHNwZWNpZmllZCBpbiB0aGUgZGVyaXZlZCBjbGFzcy5cbiAqXG4gKiBOT1RFOiBBbGwgY2hpbGQgY2xhc3NlcyBzaG91bGQgYWRkIGBEaWFsb2dTZXJ2aWNlYCBhcyBhIHByb3ZpZGVyLCBvdGhlcndpc2UgdGhleSB3aWxsIGxvc2UgY29udGV4dCB0aGF0XG4gKiB0aGUgc2VydmljZSByZWxpZXMgb24uXG4gKi9cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogXCJbaWJtRGlhbG9nXVwiLFxuXHRleHBvcnRBczogXCJpYm1EaWFsb2dcIixcblx0cHJvdmlkZXJzOiBbXG5cdFx0RGlhbG9nU2VydmljZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRzdGF0aWMgZGlhbG9nQ291bnRlciA9IDA7XG5cdC8qKlxuXHQgKiBUaXRsZSBmb3IgdGhlIGRpYWxvZ1xuXHQgKi9cblx0QElucHV0KCkgdGl0bGUgPSBcIlwiO1xuXHQvKipcblx0ICogRGlhbG9nIGJvZHkgY29udGVudC5cblx0ICovXG5cdEBJbnB1dCgpIGlibURpYWxvZzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pjtcblx0LyoqXG5cdCAqIERlZmluZXMgaG93IHRoZSBEaWFsb2cgaXMgdHJpZ2dlcmVkLihIb3ZlciBhbmQgY2xpY2sgYmVoYXZlIHRoZSBzYW1lIG9uIG1vYmlsZSAtIGJvdGggcmVzcG9uZCB0byBhIHNpbmdsZSB0YXApXG5cdCAqL1xuXHRASW5wdXQoKSB0cmlnZ2VyOiBcImNsaWNrXCIgfCBcImhvdmVyXCIgfCBcIm1vdXNlZW50ZXJcIiA9IFwiY2xpY2tcIjtcblx0LyoqXG5cdCAqIERlZmluZXMgaG93IHRoZSBEaWFsb2cgY2xvc2UgZXZlbnQgaXMgdHJpZ2dlcmVkLlxuXHQgKlxuXHQgKiBbU2VlIGhlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L21vdXNlbGVhdmVfZXZlbnQpXG5cdCAqIGZvciBtb3JlIG9uIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYG1vdXNlbGVhdmVgIGFuZCBgbW91c2VvdXRgLlxuXHQgKlxuXHQgKiBEZWZhdWx0cyB0byBgY2xpY2tgIHdoZW4gYHRyaWdnZXJgIGlzIHNldCB0byBgY2xpY2tgLlxuXHQgKi9cblx0QElucHV0KCkgY2xvc2VUcmlnZ2VyOiBcIm1vdXNlb3V0XCIgfCBcIm1vdXNlbGVhdmVcIiA9IFwibW91c2VsZWF2ZVwiO1xuXHQvKipcblx0ICogUGxhY2VtZW50IG9mIHRoZSBkaWFsb2csIHVzdWFsbHkgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQgdGhlIGRpcmVjdGl2ZSBpcyBvbi5cblx0ICovXG5cdEBJbnB1dCgpIHBsYWNlbWVudCA9IFwibGVmdFwiO1xuXHQvKipcblx0ICogQ2xhc3MgdG8gYWRkIHRvIHRoZSBkaWFsb2cgY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoKSB3cmFwcGVyQ2xhc3M6IHN0cmluZztcblx0LyoqXG5cdCAqIFNwYWNpbmcgYmV0d2VlbiB0aGUgZGlhbG9nIGFuZCBpdCdzIHRyaWdnZXJpbmcgZWxlbWVudFxuXHQgKi9cblx0QElucHV0KCkgZ2FwID0gMDtcblx0LyoqXG5cdCAqIERlcHJlY2F0ZWQuIERlZmF1bHRzIHRvIHRydWUuIFVzZSBhcHBlbmRJbmxpbmUgdG8ga2VlcCBkaWFsb2dzIHdpdGhpbiBwYWdlIGZsb3dcblx0ICogVmFsdWUgYHRydWVgIGFwcGVuZHMgRGlhbG9nIHRvIHRoZSBib2R5ICh0byBicmVhayBvdXQgb2YgY29udGFpbmVycylcblx0ICovXG5cdEBJbnB1dCgpIHNldCBhcHBlbmRUb0JvZHkodjogYm9vbGVhbikge1xuXHRcdGNvbnNvbGUubG9nKFwiYGFwcGVuZFRvQm9keWAgaGFzIGJlZW4gZGVwcmVjYXRlZC4gRGlhbG9ncyBub3cgYXBwZW5kIHRvIHRoZSBib2R5IGJ5IGRlZmF1bHQuXCIpO1xuXHRcdGNvbnNvbGUubG9nKFwiRW5zdXJlIHlvdSBoYXZlIGFuIGBpYm0tcGxhY2Vob2xkZXJgIGluIHlvdXIgYXBwLlwiKTtcblx0XHRjb25zb2xlLmxvZyhcIlVzZSBgYXBwZW5kSW5saW5lYCBpZiB5b3UgbmVlZCB0byBwb3NpdGlvbiB5b3VyIGRpYWxvZ3Mgd2l0aGluIHRoZSBub3JtYWwgcGFnZSBmbG93LlwiKTtcblx0XHR0aGlzLmFwcGVuZElubGluZSA9ICF2O1xuXHR9XG5cdGdldCBhcHBlbmRUb0JvZHkoKSB7XG5cdFx0cmV0dXJuICF0aGlzLmFwcGVuZElubGluZTtcblx0fVxuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCB0byBvcGVuIHRoZSBkaWFsb2cgbmV4dCB0byB0aGUgdHJpZ2dlcmluZyBjb21wb25lbnRcblx0ICovXG5cdEBJbnB1dCgpIGFwcGVuZElubGluZSA9IGZhbHNlO1xuXHQvKipcblx0ICogT3B0aW9uYWwgZGF0YSBmb3IgdGVtcGxhdGVzXG5cdCAqL1xuXHRASW5wdXQoKSBkYXRhID0ge307XG5cdC8qKlxuXHQgKiBDb25maWcgb2JqZWN0IHBhc3NlZCB0byB0aGUgcmVuZGVyZWQgY29tcG9uZW50XG5cdCAqL1xuXHRkaWFsb2dDb25maWc6IERpYWxvZ0NvbmZpZztcblx0LyoqXG5cdCAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGRpYWxvZyBpcyBjbG9zZWRcblx0ICovXG5cdEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0LyoqXG5cdCAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGRpYWxvZyBpcyBvcGVuZWRcblx0ICovXG5cdEBPdXRwdXQoKSBvbk9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBIb3N0QmluZGluZyhcImF0dHIucm9sZVwiKSByb2xlID0gXCJidXR0b25cIjtcblx0QEhvc3RCaW5kaW5nKFwiYXR0ci5hcmlhLWV4cGFuZGVkXCIpIGV4cGFuZGVkID0gZmFsc2U7XG5cdEBIb3N0QmluZGluZyhcImF0dHIuYXJpYS1oYXNwb3B1cFwiKSBoYXNQb3B1cCA9IHRydWU7XG5cdEBIb3N0QmluZGluZyhcImF0dHIuYXJpYS1vd25zXCIpIGdldCBhcmlhT3ducygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmV4cGFuZGVkID8gdGhpcy5kaWFsb2dDb25maWcuY29tcElEIDogbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIERpYWxvZ0RpcmVjdGl2ZS5cblx0ICogQHBhcmFtIGVsZW1lbnRSZWZcblx0ICogQHBhcmFtIHZpZXdDb250YWluZXJSZWZcblx0ICogQHBhcmFtIGRpYWxvZ1NlcnZpY2Vcblx0ICovXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdHByb3RlY3RlZCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdHByb3RlY3RlZCBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7fVxuXG5cdC8qKlxuXHQgKiBPdmVycmlkZXMgJ3RvdWNoc3RhcnQnIGV2ZW50IHRvIHRyaWdnZXIgYSB0b2dnbGUgb24gdGhlIERpYWxvZy5cblx0ICovXG5cdEBIb3N0TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIFtcIiRldmVudFwiXSlcblx0b25Ub3VjaFN0YXJ0KGV2dCkge1xuXHRcdGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnRvZ2dsZSgpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0Ly8gc2V0IHRoZSBjb25maWcgb2JqZWN0ICh0aGlzIGNhbiBbYW5kIHNob3VsZCFdIGJlIGFkZGVkIHRvIGluIGNoaWxkIGNsYXNzZXMgZGVwZW5kaW5nIG9uIHdoYXQgdGhleSBuZWVkKVxuXHRcdHRoaXMuZGlhbG9nQ29uZmlnID0ge1xuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0XHRjb250ZW50OiB0aGlzLmlibURpYWxvZyxcblx0XHRcdHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXG5cdFx0XHRwYXJlbnRSZWY6IHRoaXMuZWxlbWVudFJlZixcblx0XHRcdGdhcDogdGhpcy5nYXAsXG5cdFx0XHR0cmlnZ2VyOiB0aGlzLnRyaWdnZXIsXG5cdFx0XHRjbG9zZVRyaWdnZXI6IHRoaXMuY2xvc2VUcmlnZ2VyLFxuXHRcdFx0YXBwZW5kSW5saW5lOiB0aGlzLmFwcGVuZElubGluZSxcblx0XHRcdHdyYXBwZXJDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MsXG5cdFx0XHRkYXRhOiB0aGlzLmRhdGFcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIGNvbmZpZyBvYmplY3QgYW5kIGJpbmRzIGV2ZW50cyBmb3IgaG92ZXJpbmcgb3IgY2xpY2tpbmcgYmVmb3JlXG5cdCAqIHJ1bm5pbmcgY29kZSBmcm9tIGNoaWxkIGNsYXNzLlxuXHQgKi9cblx0bmdPbkluaXQoKSB7XG5cdFx0Ly8gZml4IGZvciBzYWZhcmkgaGlqYWNraW5nIGNsaWNrc1xuXHRcdHRoaXMuZGlhbG9nU2VydmljZS5zaW5nbGV0b25DbGlja0xpc3RlbigpO1xuXG5cdFx0ZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBcImtleWRvd25cIikuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXHRcdFx0Ly8gXCJFc2NcIiBpcyBhbiBJRSBzcGVjaWZpYyB2YWx1ZVxuXHRcdFx0aWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5kaWFsb2dDb25maWcucGFyZW50UmVmLm5hdGl2ZUVsZW1lbnQgJiYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIiB8fCBldmVudC5rZXkgPT09IFwiVGFiXCIgJiYgZXZlbnQuc2hpZnRLZXkpIHx8XG5cdFx0XHRcdGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIiB8fCBldmVudC5rZXkgPT09IFwiRXNjXCIpIHtcblx0XHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gYmluZCBldmVudHMgZm9yIGhvdmVyaW5nIG9yIGNsaWNraW5nIHRoZSBob3N0XG5cdFx0aWYgKHRoaXMudHJpZ2dlciA9PT0gXCJob3ZlclwiIHx8IHRoaXMudHJpZ2dlciA9PT0gXCJtb3VzZWVudGVyXCIpIHtcblx0XHRcdGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgXCJtb3VzZWVudGVyXCIpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnRvZ2dsZSgpKTtcblx0XHRcdGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbG9zZVRyaWdnZXIpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xuXHRcdFx0ZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9wZW4oKSk7XG5cdFx0XHRmcm9tRXZlbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIFwiYmx1clwiKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBcImNsaWNrXCIpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnRvZ2dsZSgpKTtcblx0XHRcdGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgXCJrZXlkb3duXCIpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcblx0XHRcdFx0Ly8gXCJTcGFjZWJhclwiIGlzIGFuIElFIHNwZWNpZmljIHZhbHVlXG5cdFx0XHRcdGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiB8fCBldmVudC5rZXkgPT09IFwiIFwiIHx8IGV2ZW50LmtleSA9PT0gXCJTcGFjZWJhclwiKSB7XG5cdFx0XHRcdFx0dGhpcy5vcGVuKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIGNhbGwgb25DbG9zZSB3aGVuIHRoZSBkaWFsb2cgaXMgY2xvc2VkXG5cdFx0Ly8gLSBFbmZvcmNlIGFjY2Vzc2liaWxpdHkgYnkgdXBkYXRpbmcgYW4gYXJpYSBhdHRyIGZvciBuYXRpdmVFbGVtZW50LlxuXHRcdHRoaXMuZGlhbG9nU2VydmljZS5pc0Nsb3NlZC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuXHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdHRoaXMub25DbG9zZS5lbWl0KCk7XG5cdFx0XHRcdHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdERpYWxvZ0RpcmVjdGl2ZS5kaWFsb2dDb3VudGVyKys7XG5cdFx0dGhpcy5kaWFsb2dDb25maWcuY29tcElEID0gXCJkaWFsb2ctXCIgKyBEaWFsb2dEaXJlY3RpdmUuZGlhbG9nQ291bnRlcjtcblxuXHRcdC8vIHJ1biBhbnkgY29kZSBhIGNoaWxkIGNsYXNzIG1heSBuZWVkXG5cdFx0dGhpcy5vbkRpYWxvZ0luaXQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBXaGVuIHRoZSBob3N0IGRpZXMsIGtpbGwgdGhlIHBvcG92ZXIuXG5cdCAqIC0gVXNlZnVsIGZvciB1c2UgaW4gYSBtb2RhbCBvciBzaW1pbGFyLlxuXHQgKi9cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5jbG9zZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhlbHBlciBtZXRob2QgdG8gY2FsbCBkaWFsb2dTZXJ2aWNlICdvcGVuJy5cblx0ICogLSBFbmZvcmNlIGFjY2Vzc2liaWxpdHkgYnkgdXBkYXRpbmcgYW4gYXJpYSBhdHRyIGZvciBuYXRpdmVFbGVtZW50LlxuXHQgKi9cblx0b3BlbigpIHtcblx0XHR0aGlzLmRpYWxvZ1NlcnZpY2Uub3Blbih0aGlzLnZpZXdDb250YWluZXJSZWYsIHRoaXMuZGlhbG9nQ29uZmlnKTtcblx0XHR0aGlzLmV4cGFuZGVkID0gdHJ1ZTtcblx0XHR0aGlzLm9uT3Blbi5lbWl0KCk7XG5cdH1cblxuXHQvKipcblx0ICogSGVscGVyIG1ldGhvZCB0byBjYWxsIGRpYWxvZ1NlcnZpY2UgJ3RvZ2dsZScuXG5cdCAqIC0gRW5mb3JjZSBhY2Nlc3NpYmlsaXR5IGJ5IHVwZGF0aW5nIGFuIGFyaWEgYXR0ciBmb3IgbmF0aXZlRWxlbWVudC5cblx0ICovXG5cdHRvZ2dsZSgpIHtcblx0XHR0aGlzLmRpYWxvZ1NlcnZpY2UudG9nZ2xlKHRoaXMudmlld0NvbnRhaW5lclJlZiwgdGhpcy5kaWFsb2dDb25maWcpO1xuXHRcdHRoaXMuZXhwYW5kZWQgPSB0aGlzLmRpYWxvZ1NlcnZpY2UuaXNPcGVuO1xuXHRcdGlmICh0aGlzLmV4cGFuZGVkKSB7XG5cdFx0XHR0aGlzLm9uT3Blbi5lbWl0KCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEhlbHBlciBtZXRob2QgdG8gY2FsbCBkaWFsb2dTZXJ2aWNlICdjbG9zZScuXG5cdCAqIC0gRW5mb3JjZSBhY2Nlc3NpYmlsaXR5IGJ5IHVwZGF0aW5nIGFuIGFyaWEgYXR0ciBmb3IgbmF0aXZlRWxlbWVudC5cblx0ICovXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuZGlhbG9nU2VydmljZS5jbG9zZSh0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuXHRcdHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBFbXB0eSBtZXRob2QgZm9yIGNoaWxkIGNsYXNzZXMgdG8gb3ZlcnJpZGUgYW5kIHNwZWNpZnkgYWRkaXRpb25hbCBpbml0IHN0ZXBzLlxuXHQgKiBSdW4gYWZ0ZXIgRGlhbG9nRGlyZWN0aXZlIGNvbXBsZXRlcyBpdCdzIG5nT25Jbml0LlxuXHQgKi9cblx0cHJvdGVjdGVkIG9uRGlhbG9nSW5pdCgpIHt9XG59XG4iXX0=