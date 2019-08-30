/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, HostListener } from "@angular/core";
import { Subscription, fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";
import Position, { position } from "@carbon/utils-position";
import { cycleTabs, getFocusElementList } from "./../common/tab.service";
import { scrollableParentsObservable, isVisibleInContainer } from "./../utils/scroll";
/**
 * Implements a `Dialog` that can be positioned anywhere on the page.
 * Used to implement a popover or tooltip.
 */
export class Dialog {
    /**
     * Creates an instance of `Dialog`.
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        /**
         * Emits event that handles the closing of a `Dialog` object.
         */
        this.close = new EventEmitter();
        /**
         * Stores the data received from `dialogConfig`.
         */
        this.data = {};
        /**
         * Subscription to all the scrollable parents `scroll` event
         */
        this.scrollSubscription = new Subscription();
        /**
         * Handles offsetting the `Dialog` item based on the defined position
         * to not obscure the content beneath.
         */
        this.addGap = {
            "left": pos => position.addOffset(pos, 0, -this.dialogConfig.gap),
            "right": pos => position.addOffset(pos, 0, this.dialogConfig.gap),
            "top": pos => position.addOffset(pos, -this.dialogConfig.gap),
            "bottom": pos => position.addOffset(pos, this.dialogConfig.gap),
            "left-bottom": pos => position.addOffset(pos, 0, -this.dialogConfig.gap),
            "right-bottom": pos => position.addOffset(pos, 0, this.dialogConfig.gap)
        };
        /**
         * Extra placements. Child classes can add to this for use in `placeDialog`.
         */
        this.placements = {};
    }
    /**
     * Initialize the `Dialog`, set the placement and gap, and add a `Subscription` to resize events.
     * @return {?}
     */
    ngOnInit() {
        this.placement = this.dialogConfig.placement.split(",")[0];
        this.data = this.dialogConfig.data;
        this.resizeSubscription = Dialog.resizeObservable.subscribe(() => {
            this.placeDialog();
        });
        // run any additional initialization code that consuming classes may have
        this.onDialogInit();
    }
    /**
     * After the DOM is ready, focus is set and dialog is placed
     * in respect to the parent element.
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const dialogElement = this.dialog.nativeElement;
        // split the wrapper class list and apply separately to avoid IE
        // 1. throwing an error due to assigning a readonly property (classList)
        // 2. throwing a SyntaxError due to passing an empty string to `add`
        if (this.dialogConfig["wrapperClass"]) {
            for (const extraClass of this.dialogConfig["wrapperClass"].split(" ")) {
                dialogElement.classList.add(extraClass);
            }
        }
        this.placeDialog();
        if (getFocusElementList(this.dialog.nativeElement).length > 0) {
            dialogElement.focus();
        }
        /** @type {?} */
        const parentElement = this.dialogConfig.parentRef.nativeElement;
        /** @type {?} */
        const placeDialogInContainer = () => {
            // only do the work to find the scroll containers if we're appended to body
            // or skip this work if we're inline
            if (!this.dialogConfig.appendInline) {
                /** @type {?} */
                const scrollObservable = scrollableParentsObservable(parentElement);
                this.scrollSubscription = scrollObservable.subscribe((event) => {
                    this.placeDialog();
                    if (!isVisibleInContainer(this.dialogConfig.parentRef.nativeElement, event.target)) {
                        this.doClose();
                    }
                });
            }
        };
        // settimeout to let the DOM settle before attempting to place the dialog
        // and before notifying components that the DOM is ready
        setTimeout(() => {
            placeDialogInContainer();
            this.afterDialogViewInit();
        });
    }
    /**
     * Empty method to be overridden by consuming classes to run any additional initialization code.
     * @return {?}
     */
    onDialogInit() { }
    /**
     * Empty method to be overridden by consuming classes to run any additional initialization code after the view is available.
     * NOTE: this does _not_ guarantee the dialog will be positioned, simply that it will exist in the DOM
     * @return {?}
     */
    afterDialogViewInit() { }
    /**
     * Uses the position service to position the `Dialog` in screen space
     * @return {?}
     */
    placeDialog() {
        /** @type {?} */
        const positionService = new Position(this.placements);
        /** @type {?} */
        const findPosition = (reference, target, placement) => {
            /** @type {?} */
            let pos;
            if (this.dialogConfig.appendInline) {
                pos = this.addGap[placement](positionService.findRelative(reference, target, placement));
            }
            else {
                pos = this.addGap[placement](positionService.findAbsolute(reference, target, placement));
            }
            return pos;
        };
        /** @type {?} */
        let parentEl = this.dialogConfig.parentRef.nativeElement;
        /** @type {?} */
        let el = this.dialog.nativeElement;
        /** @type {?} */
        let dialogPlacement = this.placement;
        /** @type {?} */
        const placements = this.dialogConfig.placement.split(",");
        // find the best placement
        dialogPlacement = positionService.findBestPlacement(parentEl, el, placements);
        /** @type {?} */
        const pos = findPosition(parentEl, el, dialogPlacement);
        // update the element
        positionService.setElement(el, pos);
        setTimeout(() => { this.placement = dialogPlacement; });
    }
    /**
     * Sets up a KeyboardEvent to close `Dialog` with Escape key.
     * @param {?} event
     * @return {?}
     */
    escapeClose(event) {
        switch (event.key) {
            case "Esc": // IE specific value
            case "Escape": {
                event.stopImmediatePropagation();
                this.doClose();
                break;
            }
            case "Tab": {
                cycleTabs(event, this.elementRef.nativeElement);
                break;
            }
        }
    }
    /**
     * Sets up a event Listener to close `Dialog` if click event occurs outside
     * `Dialog` object.
     * @param {?} event
     * @return {?}
     */
    clickClose(event) {
        if (!this.elementRef.nativeElement.contains(event.target)
            && !this.dialogConfig.parentRef.nativeElement.contains(event.target)) {
            this.doClose();
        }
    }
    /**
     * Closes `Dialog` object by emitting the close event upwards to parents.
     * @return {?}
     */
    doClose() {
        this.close.emit();
    }
    /**
     * At destruction of component, `Dialog` unsubscribes from handling window resizing changes.
     * @return {?}
     */
    ngOnDestroy() {
        this.resizeSubscription.unsubscribe();
        this.scrollSubscription.unsubscribe();
    }
}
/**
 * One static event observable to handle window resizing.
 */
Dialog.resizeObservable = fromEvent(window, "resize").pipe(throttleTime(100));
Dialog.decorators = [
    { type: Component, args: [{
                selector: "ibm-dialog",
                template: ""
            }] }
];
/** @nocollapse */
Dialog.ctorParameters = () => [
    { type: ElementRef }
];
Dialog.propDecorators = {
    close: [{ type: Output }],
    dialogConfig: [{ type: Input }],
    dialog: [{ type: ViewChild, args: ["dialog",] }],
    escapeClose: [{ type: HostListener, args: ["keydown", ["$event"],] }],
    clickClose: [{ type: HostListener, args: ["document:click", ["$event"],] }]
};
function Dialog_tsickle_Closure_declarations() {
    /**
     * One static event observable to handle window resizing.
     * @type {?}
     */
    Dialog.resizeObservable;
    /**
     * Emits event that handles the closing of a `Dialog` object.
     * @type {?}
     */
    Dialog.prototype.close;
    /**
     * Receives `DialogConfig` interface object with properties of `Dialog`
     * explicitly defined.
     * @type {?}
     */
    Dialog.prototype.dialogConfig;
    /**
     * Maintains a reference to the view DOM element of the `Dialog`.
     * @type {?}
     */
    Dialog.prototype.dialog;
    /**
     * Stores the data received from `dialogConfig`.
     * @type {?}
     */
    Dialog.prototype.data;
    /**
     * The placement of the `Dialog` is received from the `Position` service.
     * @type {?}
     */
    Dialog.prototype.placement;
    /**
     * `Subscription` used to update placement in the event of a window resize.
     * @type {?}
     */
    Dialog.prototype.resizeSubscription;
    /**
     * Subscription to all the scrollable parents `scroll` event
     * @type {?}
     */
    Dialog.prototype.scrollSubscription;
    /**
     * Handles offsetting the `Dialog` item based on the defined position
     * to not obscure the content beneath.
     * @type {?}
     */
    Dialog.prototype.addGap;
    /**
     * Extra placements. Child classes can add to this for use in `placeDialog`.
     * @type {?}
     */
    Dialog.prototype.placements;
    /** @type {?} */
    Dialog.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJkaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxFQUlULFlBQVksRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRU4sWUFBWSxFQUNaLFNBQVMsRUFFVCxNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxZQUFZLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBK0IsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBVXRGLE1BQU07Ozs7O0lBNkRMLFlBQXNCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7Ozs7cUJBckRQLElBQUksWUFBWSxFQUFFOzs7O29CQWN6QyxFQUFFOzs7O2tDQWdCNkIsSUFBSSxZQUFZLEVBQUU7Ozs7O3NCQUs1QztZQUNsQixNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztZQUNqRSxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7WUFDakUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxF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QUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQXFCbEMsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdEVsZW1lbnRSZWYsXG5cdFZpZXdDaGlsZCxcblx0T25Jbml0LFxuXHRBZnRlclZpZXdJbml0LFxuXHRPbkRlc3Ryb3ksXG5cdEhvc3RMaXN0ZW5lclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcblx0T2JzZXJ2YWJsZSxcblx0U3Vic2NyaXB0aW9uLFxuXHRmcm9tRXZlbnQsXG5cdG1lcmdlXG59IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyB0aHJvdHRsZVRpbWUsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuLy8gdGhlIEFic29sdXRlUG9zaXRpb24gaXMgcmVxdWlyZWQgdG8gaW1wb3J0IHRoZSBkZWNsYXJhdGlvbiBjb3JyZWN0bHlcbmltcG9ydCBQb3NpdGlvbiwgeyBwb3NpdGlvbiwgQWJzb2x1dGVQb3NpdGlvbiwgUG9zaXRpb25zIH0gZnJvbSBcIkBjYXJib24vdXRpbHMtcG9zaXRpb25cIjtcbmltcG9ydCB7IGN5Y2xlVGFicywgZ2V0Rm9jdXNFbGVtZW50TGlzdCB9IGZyb20gXCIuLy4uL2NvbW1vbi90YWIuc2VydmljZVwiO1xuaW1wb3J0IHsgRGlhbG9nQ29uZmlnIH0gZnJvbSBcIi4vZGlhbG9nLWNvbmZpZy5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IHNjcm9sbGFibGVQYXJlbnRzT2JzZXJ2YWJsZSwgaXNWaXNpYmxlSW5Db250YWluZXIgfSBmcm9tIFwiLi8uLi91dGlscy9zY3JvbGxcIjtcblxuLyoqXG4gKiBJbXBsZW1lbnRzIGEgYERpYWxvZ2AgdGhhdCBjYW4gYmUgcG9zaXRpb25lZCBhbnl3aGVyZSBvbiB0aGUgcGFnZS5cbiAqIFVzZWQgdG8gaW1wbGVtZW50IGEgcG9wb3ZlciBvciB0b29sdGlwLlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLWRpYWxvZ1wiLFxuXHR0ZW1wbGF0ZTogXCJcIlxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2cgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cdC8qKlxuXHQgKiBPbmUgc3RhdGljIGV2ZW50IG9ic2VydmFibGUgdG8gaGFuZGxlIHdpbmRvdyByZXNpemluZy5cblx0ICovXG5cdHByb3RlY3RlZCBzdGF0aWMgcmVzaXplT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+ID0gZnJvbUV2ZW50KHdpbmRvdywgXCJyZXNpemVcIikucGlwZSh0aHJvdHRsZVRpbWUoMTAwKSk7XG5cdC8qKlxuXHQgKiBFbWl0cyBldmVudCB0aGF0IGhhbmRsZXMgdGhlIGNsb3Npbmcgb2YgYSBgRGlhbG9nYCBvYmplY3QuXG5cdCAqL1xuXHRAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHQvKipcblx0ICogUmVjZWl2ZXMgYERpYWxvZ0NvbmZpZ2AgaW50ZXJmYWNlIG9iamVjdCB3aXRoIHByb3BlcnRpZXMgb2YgYERpYWxvZ2Bcblx0ICogZXhwbGljaXRseSBkZWZpbmVkLlxuXHQgKi9cblx0QElucHV0KCkgZGlhbG9nQ29uZmlnOiBEaWFsb2dDb25maWc7XG5cdC8qKlxuXHQgKiBNYWludGFpbnMgYSByZWZlcmVuY2UgdG8gdGhlIHZpZXcgRE9NIGVsZW1lbnQgb2YgdGhlIGBEaWFsb2dgLlxuXHQgKi9cblx0QFZpZXdDaGlsZChcImRpYWxvZ1wiKSBkaWFsb2c6IEVsZW1lbnRSZWY7XG5cblx0LyoqXG5cdCAqIFN0b3JlcyB0aGUgZGF0YSByZWNlaXZlZCBmcm9tIGBkaWFsb2dDb25maWdgLlxuXHQgKi9cblx0cHVibGljIGRhdGEgPSB7fTtcblxuXHQvKipcblx0ICogVGhlIHBsYWNlbWVudCBvZiB0aGUgYERpYWxvZ2AgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgYFBvc2l0aW9uYCBzZXJ2aWNlLlxuXHQgKi9cblx0cHVibGljIHBsYWNlbWVudDogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBgU3Vic2NyaXB0aW9uYCB1c2VkIHRvIHVwZGF0ZSBwbGFjZW1lbnQgaW4gdGhlIGV2ZW50IG9mIGEgd2luZG93IHJlc2l6ZS5cblx0ICovXG5cdHByb3RlY3RlZCByZXNpemVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblx0LyoqXG5cdCAqIFN1YnNjcmlwdGlvbiB0byBhbGwgdGhlIHNjcm9sbGFibGUgcGFyZW50cyBgc2Nyb2xsYCBldmVudFxuXHQgKi9cblx0Ly8gYWRkIGEgbmV3IHN1YnNjcmlwdGlvbiB0ZW1wb3JhcmlseSBzbyB0aGF0IGNvbnRleHRzIChzdWNoIGFzIHRlc3RzKVxuXHQvLyB0aGF0IGRvbid0IHJ1biBuZ0FmdGVyVmlld0luaXQgaGF2ZSBzb21ldGhpbmcgdG8gdW5zdWJzY3JpYmUgaW4gbmdPbkRlc3Ryb3lcblx0cHJvdGVjdGVkIHNjcm9sbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXHQvKipcblx0ICogSGFuZGxlcyBvZmZzZXR0aW5nIHRoZSBgRGlhbG9nYCBpdGVtIGJhc2VkIG9uIHRoZSBkZWZpbmVkIHBvc2l0aW9uXG5cdCAqIHRvIG5vdCBvYnNjdXJlIHRoZSBjb250ZW50IGJlbmVhdGguXG5cdCAqL1xuXHRwcm90ZWN0ZWQgYWRkR2FwID0ge1xuXHRcdFwibGVmdFwiOiBwb3MgPT4gcG9zaXRpb24uYWRkT2Zmc2V0KHBvcywgMCwgLXRoaXMuZGlhbG9nQ29uZmlnLmdhcCksXG5cdFx0XCJyaWdodFwiOiBwb3MgPT4gcG9zaXRpb24uYWRkT2Zmc2V0KHBvcywgMCwgdGhpcy5kaWFsb2dDb25maWcuZ2FwKSxcblx0XHRcInRvcFwiOiBwb3MgPT4gcG9zaXRpb24uYWRkT2Zmc2V0KHBvcywgLXRoaXMuZGlhbG9nQ29uZmlnLmdhcCksXG5cdFx0XCJib3R0b21cIjogcG9zID0+IHBvc2l0aW9uLmFkZE9mZnNldChwb3MsIHRoaXMuZGlhbG9nQ29uZmlnLmdhcCksXG5cdFx0XCJsZWZ0LWJvdHRvbVwiOiBwb3MgPT4gcG9zaXRpb24uYWRkT2Zmc2V0KHBvcywgMCwgLXRoaXMuZGlhbG9nQ29uZmlnLmdhcCksXG5cdFx0XCJyaWdodC1ib3R0b21cIjogcG9zID0+IHBvc2l0aW9uLmFkZE9mZnNldChwb3MsIDAsIHRoaXMuZGlhbG9nQ29uZmlnLmdhcClcblx0fTtcblxuXHQvKipcblx0ICogRXh0cmEgcGxhY2VtZW50cy4gQ2hpbGQgY2xhc3NlcyBjYW4gYWRkIHRvIHRoaXMgZm9yIHVzZSBpbiBgcGxhY2VEaWFsb2dgLlxuXHQgKi9cblx0cHJvdGVjdGVkIHBsYWNlbWVudHM6IFBvc2l0aW9ucyA9IHt9O1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGBEaWFsb2dgLlxuXHQgKiBAcGFyYW0gZWxlbWVudFJlZlxuXHQgKi9cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB0aGUgYERpYWxvZ2AsIHNldCB0aGUgcGxhY2VtZW50IGFuZCBnYXAsIGFuZCBhZGQgYSBgU3Vic2NyaXB0aW9uYCB0byByZXNpemUgZXZlbnRzLlxuXHQgKi9cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5wbGFjZW1lbnQgPSB0aGlzLmRpYWxvZ0NvbmZpZy5wbGFjZW1lbnQuc3BsaXQoXCIsXCIpWzBdO1xuXHRcdHRoaXMuZGF0YSA9IHRoaXMuZGlhbG9nQ29uZmlnLmRhdGE7XG5cblx0XHR0aGlzLnJlc2l6ZVN1YnNjcmlwdGlvbiA9IERpYWxvZy5yZXNpemVPYnNlcnZhYmxlLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHR0aGlzLnBsYWNlRGlhbG9nKCk7XG5cdFx0fSk7XG5cblx0XHQvLyBydW4gYW55IGFkZGl0aW9uYWwgaW5pdGlhbGl6YXRpb24gY29kZSB0aGF0IGNvbnN1bWluZyBjbGFzc2VzIG1heSBoYXZlXG5cdFx0dGhpcy5vbkRpYWxvZ0luaXQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZnRlciB0aGUgRE9NIGlzIHJlYWR5LCBmb2N1cyBpcyBzZXQgYW5kIGRpYWxvZyBpcyBwbGFjZWRcblx0ICogaW4gcmVzcGVjdCB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgZGlhbG9nRWxlbWVudCA9IHRoaXMuZGlhbG9nLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0Ly8gc3BsaXQgdGhlIHdyYXBwZXIgY2xhc3MgbGlzdCBhbmQgYXBwbHkgc2VwYXJhdGVseSB0byBhdm9pZCBJRVxuXHRcdC8vIDEuIHRocm93aW5nIGFuIGVycm9yIGR1ZSB0byBhc3NpZ25pbmcgYSByZWFkb25seSBwcm9wZXJ0eSAoY2xhc3NMaXN0KVxuXHRcdC8vIDIuIHRocm93aW5nIGEgU3ludGF4RXJyb3IgZHVlIHRvIHBhc3NpbmcgYW4gZW1wdHkgc3RyaW5nIHRvIGBhZGRgXG5cdFx0aWYgKHRoaXMuZGlhbG9nQ29uZmlnLndyYXBwZXJDbGFzcykge1xuXHRcdFx0Zm9yIChjb25zdCBleHRyYUNsYXNzIG9mIHRoaXMuZGlhbG9nQ29uZmlnLndyYXBwZXJDbGFzcy5zcGxpdChcIiBcIikpIHtcblx0XHRcdFx0ZGlhbG9nRWxlbWVudC5jbGFzc0xpc3QuYWRkKGV4dHJhQ2xhc3MpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnBsYWNlRGlhbG9nKCk7XG5cdFx0aWYgKGdldEZvY3VzRWxlbWVudExpc3QodGhpcy5kaWFsb2cubmF0aXZlRWxlbWVudCkubGVuZ3RoID4gMCkge1xuXHRcdFx0ZGlhbG9nRWxlbWVudC5mb2N1cygpO1xuXHRcdH1cblx0XHRjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5kaWFsb2dDb25maWcucGFyZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblx0XHRjb25zdCBwbGFjZURpYWxvZ0luQ29udGFpbmVyID0gKCkgPT4ge1xuXHRcdFx0Ly8gb25seSBkbyB0aGUgd29yayB0byBmaW5kIHRoZSBzY3JvbGwgY29udGFpbmVycyBpZiB3ZSdyZSBhcHBlbmRlZCB0byBib2R5XG5cdFx0XHQvLyBvciBza2lwIHRoaXMgd29yayBpZiB3ZSdyZSBpbmxpbmVcblx0XHRcdGlmICghdGhpcy5kaWFsb2dDb25maWcuYXBwZW5kSW5saW5lKSB7XG5cdFx0XHRcdC8vIHN1YnNjcmliZSB0byB0aGUgb2JzZXJ2YWJsZSwgYW5kIHVwZGF0ZSB0aGUgcG9zaXRpb24gYW5kIHZpc2liaWxpdHlcblx0XHRcdFx0Y29uc3Qgc2Nyb2xsT2JzZXJ2YWJsZSA9IHNjcm9sbGFibGVQYXJlbnRzT2JzZXJ2YWJsZShwYXJlbnRFbGVtZW50KTtcblx0XHRcdFx0dGhpcy5zY3JvbGxTdWJzY3JpcHRpb24gPSBzY3JvbGxPYnNlcnZhYmxlLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGxhY2VEaWFsb2coKTtcblx0XHRcdFx0XHRpZiAoIWlzVmlzaWJsZUluQ29udGFpbmVyKHRoaXMuZGlhbG9nQ29uZmlnLnBhcmVudFJlZi5uYXRpdmVFbGVtZW50LCBldmVudC50YXJnZXQpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmRvQ2xvc2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyBzZXR0aW1lb3V0IHRvIGxldCB0aGUgRE9NIHNldHRsZSBiZWZvcmUgYXR0ZW1wdGluZyB0byBwbGFjZSB0aGUgZGlhbG9nXG5cdFx0Ly8gYW5kIGJlZm9yZSBub3RpZnlpbmcgY29tcG9uZW50cyB0aGF0IHRoZSBET00gaXMgcmVhZHlcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHBsYWNlRGlhbG9nSW5Db250YWluZXIoKTtcblx0XHRcdHRoaXMuYWZ0ZXJEaWFsb2dWaWV3SW5pdCgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEVtcHR5IG1ldGhvZCB0byBiZSBvdmVycmlkZGVuIGJ5IGNvbnN1bWluZyBjbGFzc2VzIHRvIHJ1biBhbnkgYWRkaXRpb25hbCBpbml0aWFsaXphdGlvbiBjb2RlLlxuXHQgKi9cblx0b25EaWFsb2dJbml0KCkge31cblxuXHQvKipcblx0ICogRW1wdHkgbWV0aG9kIHRvIGJlIG92ZXJyaWRkZW4gYnkgY29uc3VtaW5nIGNsYXNzZXMgdG8gcnVuIGFueSBhZGRpdGlvbmFsIGluaXRpYWxpemF0aW9uIGNvZGUgYWZ0ZXIgdGhlIHZpZXcgaXMgYXZhaWxhYmxlLlxuXHQgKiBOT1RFOiB0aGlzIGRvZXMgX25vdF8gZ3VhcmFudGVlIHRoZSBkaWFsb2cgd2lsbCBiZSBwb3NpdGlvbmVkLCBzaW1wbHkgdGhhdCBpdCB3aWxsIGV4aXN0IGluIHRoZSBET01cblx0ICovXG5cdGFmdGVyRGlhbG9nVmlld0luaXQoKSB7fVxuXG5cdC8qKlxuXHQgKiBVc2VzIHRoZSBwb3NpdGlvbiBzZXJ2aWNlIHRvIHBvc2l0aW9uIHRoZSBgRGlhbG9nYCBpbiBzY3JlZW4gc3BhY2Vcblx0ICovXG5cdHBsYWNlRGlhbG9nKCk6IHZvaWQge1xuXHRcdGNvbnN0IHBvc2l0aW9uU2VydmljZSA9IG5ldyBQb3NpdGlvbih0aGlzLnBsYWNlbWVudHMpO1xuXHRcdC8vIGhlbHBlciB0byBmaW5kIHRoZSBwb3NpdGlvbiBiYXNlZCBvbiB0aGUgY3VycmVudC9naXZlbiBlbnZpcm9ubWVudFxuXHRcdGNvbnN0IGZpbmRQb3NpdGlvbiA9IChyZWZlcmVuY2UsIHRhcmdldCwgcGxhY2VtZW50KSA9PiB7XG5cdFx0XHRsZXQgcG9zO1xuXHRcdFx0aWYgKHRoaXMuZGlhbG9nQ29uZmlnLmFwcGVuZElubGluZSkge1xuXHRcdFx0XHRwb3MgPSB0aGlzLmFkZEdhcFtwbGFjZW1lbnRdKHBvc2l0aW9uU2VydmljZS5maW5kUmVsYXRpdmUocmVmZXJlbmNlLCB0YXJnZXQsIHBsYWNlbWVudCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cG9zID0gdGhpcy5hZGRHYXBbcGxhY2VtZW50XShwb3NpdGlvblNlcnZpY2UuZmluZEFic29sdXRlKHJlZmVyZW5jZSwgdGFyZ2V0LCBwbGFjZW1lbnQpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwb3M7XG5cdFx0fTtcblxuXHRcdGxldCBwYXJlbnRFbCA9IHRoaXMuZGlhbG9nQ29uZmlnLnBhcmVudFJlZi5uYXRpdmVFbGVtZW50O1xuXHRcdGxldCBlbCA9IHRoaXMuZGlhbG9nLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0bGV0IGRpYWxvZ1BsYWNlbWVudCA9IHRoaXMucGxhY2VtZW50O1xuXG5cdFx0Ly8gc3BsaXQgYWx3YXlzIHJldHVybnMgYW4gYXJyYXksIHNvIHdlIGNhbiBqdXN0IHVzZSB0aGUgYXV0byBwb3NpdGlvbiBsb2dpY1xuXHRcdC8vIGZvciBzaW5nbGUgcG9zaXRpb25zIHRvb1xuXHRcdGNvbnN0IHBsYWNlbWVudHMgPSB0aGlzLmRpYWxvZ0NvbmZpZy5wbGFjZW1lbnQuc3BsaXQoXCIsXCIpO1xuXG5cdFx0Ly8gZmluZCB0aGUgYmVzdCBwbGFjZW1lbnRcblx0XHRkaWFsb2dQbGFjZW1lbnQgPSBwb3NpdGlvblNlcnZpY2UuZmluZEJlc3RQbGFjZW1lbnQocGFyZW50RWwsIGVsLCBwbGFjZW1lbnRzKTtcblxuXHRcdC8vIGNhbGN1bGF0ZSB0aGUgZmluYWwgcG9zaXRpb25cblx0XHRjb25zdCBwb3MgPSBmaW5kUG9zaXRpb24ocGFyZW50RWwsIGVsLCBkaWFsb2dQbGFjZW1lbnQpO1xuXG5cdFx0Ly8gdXBkYXRlIHRoZSBlbGVtZW50XG5cdFx0cG9zaXRpb25TZXJ2aWNlLnNldEVsZW1lbnQoZWwsIHBvcyk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7IHRoaXMucGxhY2VtZW50ID0gZGlhbG9nUGxhY2VtZW50OyB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIHVwIGEgS2V5Ym9hcmRFdmVudCB0byBjbG9zZSBgRGlhbG9nYCB3aXRoIEVzY2FwZSBrZXkuXG5cdCAqIEBwYXJhbSBldmVudFxuXHQgKi9cblx0QEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuXHRlc2NhcGVDbG9zZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuXHRcdHN3aXRjaCAoZXZlbnQua2V5KSB7XG5cdFx0XHRjYXNlIFwiRXNjXCI6IC8vIElFIHNwZWNpZmljIHZhbHVlXG5cdFx0XHRjYXNlIFwiRXNjYXBlXCI6IHtcblx0XHRcdFx0ZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdHRoaXMuZG9DbG9zZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgXCJUYWJcIjoge1xuXHRcdFx0XHRjeWNsZVRhYnMoZXZlbnQsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgdXAgYSBldmVudCBMaXN0ZW5lciB0byBjbG9zZSBgRGlhbG9nYCBpZiBjbGljayBldmVudCBvY2N1cnMgb3V0c2lkZVxuXHQgKiBgRGlhbG9nYCBvYmplY3QuXG5cdCAqIEBwYXJhbSBldmVudFxuXHQgKi9cblx0QEhvc3RMaXN0ZW5lcihcImRvY3VtZW50OmNsaWNrXCIsIFtcIiRldmVudFwiXSlcblx0Y2xpY2tDbG9zZShldmVudCkge1xuXHRcdGlmICghdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuXHRcdFx0JiYgIXRoaXMuZGlhbG9nQ29uZmlnLnBhcmVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgKSB7XG5cdFx0XHR0aGlzLmRvQ2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2VzIGBEaWFsb2dgIG9iamVjdCBieSBlbWl0dGluZyB0aGUgY2xvc2UgZXZlbnQgdXB3YXJkcyB0byBwYXJlbnRzLlxuXHQgKi9cblx0cHVibGljIGRvQ2xvc2UoKSB7XG5cdFx0dGhpcy5jbG9zZS5lbWl0KCk7XG5cdH1cblxuXHQvKipcblx0ICogQXQgZGVzdHJ1Y3Rpb24gb2YgY29tcG9uZW50LCBgRGlhbG9nYCB1bnN1YnNjcmliZXMgZnJvbSBoYW5kbGluZyB3aW5kb3cgcmVzaXppbmcgY2hhbmdlcy5cblx0ICovXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMucmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0dGhpcy5zY3JvbGxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0fVxufVxuIl19