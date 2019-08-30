/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, EventEmitter, Injectable, Injector } from "@angular/core";
import { Notification } from "./notification.component";
import { Toast } from "./toast.component";
/**
 * Provides a way to use the notification component.
 *
 * Notifications are displayed toward the top of the UI and do not interrupt the user’s work.
 */
export class NotificationService {
    /**
     * Constructs NotificationService.
     *
     * @param {?} injector
     * @param {?} componentFactoryResolver
     * @param {?} applicationRef
     */
    constructor(injector, componentFactoryResolver, applicationRef) {
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        /**
         * An array containing `ComponentRef`s to all the notifications this service instance
         * is responsible for.
         *
         */
        this.notificationRefs = new Array();
        this.onClose = new EventEmitter();
    }
    /**
     * Shows the notification based on the `notificationObj`.
     *
     * @param {?} notificationObj Can have `type`, `message`, `target`, `duration` and `smart` members.
     *
     * **Members:**
     *
     * * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
     * * `message` is message for notification to display
     * * `target` is css selector defining an element to append notification to. If not provided,
     * `showNotification()` creates a place for the notification in `body`
     * * `duration` is number of ms to close the notification after. If used in combination with `smart`,
     * it's added to the calculated timeout
     * * `smart`, set to `true` if you want to use smart notification.
     *
     * **Example:**
     * ```typescript
     * // Info notification, saying "Sample message." added to the element with id notification-container
     * // uses smart timeout with added duration of 1 second.
     * {
     * 	type: "info",
     * 	message: "Sample message.",
     * 	target: "#notification-container",
     * 	duration: 1000,
     * 	smart: true
     * }
     * ```
     *
     * @param {?=} notificationComp
     * @return {?}
     */
    showNotification(notificationObj, notificationComp = Notification) {
        /** @type {?} */
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(notificationComp);
        /** @type {?} */
        let notificationRef = componentFactory.create(this.injector);
        notificationRef.instance.notificationObj = /** @type {?} */ (notificationObj); // typescript isn't being very smart here, so we type to any
        this.notificationRefs.push(notificationRef);
        this.onClose = notificationRef.instance.close;
        this.applicationRef.attachView(notificationRef.hostView);
        if (notificationObj.target) {
            document.querySelector(notificationObj.target).appendChild(notificationRef.location.nativeElement);
        }
        else {
            /** @type {?} */
            let body = document.querySelector("body");
            /** @type {?} */
            let notificationClassName = "notification-overlay";
            /** @type {?} */
            let notificationList = body.querySelector(`.${notificationClassName}`);
            if (!notificationList) {
                notificationList = document.createElement("div");
                notificationList.className = notificationClassName;
                body.appendChild(notificationList);
            }
            // add the notification to the top of the list
            if (notificationList.firstChild) {
                notificationList.insertBefore(notificationRef.location.nativeElement, notificationList.firstChild);
            }
            else {
                notificationList.appendChild(notificationRef.location.nativeElement);
            }
        }
        if (notificationObj.duration && notificationObj.duration > 0) {
            setTimeout(() => {
                this.close(notificationRef);
            }, notificationObj.duration);
        }
        if (notificationObj.smart) {
            // let it disappear after calculated timeout
            setTimeout(() => {
                this.close(notificationRef);
            }, this.getSmartTimeout(notificationObj));
        }
        this.onClose.subscribe(() => {
            this.close(notificationRef);
        });
        notificationRef.instance.componentRef = notificationRef;
        return notificationRef.instance;
    }
    /**
     * @param {?} notificationObj
     * @param {?=} notificationComp
     * @return {?}
     */
    showToast(notificationObj, notificationComp = Toast) {
        return this.showNotification(notificationObj, /** @type {?} */ (notificationComp));
    }
    /**
     * Programatically closes notification based on `notificationRef`.
     *
     * @param {?} notificationRef `ComponentRef` of a notification or `Notification` component you wish to close
     * @return {?}
     */
    close(notificationRef) {
        if (notificationRef) {
            if (notificationRef instanceof Notification) {
                this.close(notificationRef.componentRef);
            }
            else {
                setTimeout(() => {
                    this.applicationRef.detachView(notificationRef.hostView);
                    notificationRef.destroy();
                    /** @type {?} */
                    const index = this.notificationRefs.indexOf(notificationRef);
                    if (index !== -1) {
                        this.notificationRefs.splice(index, 1);
                    }
                }, 200);
            }
        }
    }
    /**
     * Calculates the amount of time user needs to read the message in the notification.
     *
     * @param {?} notificationObj Same object used to instantiate notification.
     *
     * In addition to `type` and `message` members, use `duration` member to add
     * some extra time (in ms) to timeout if you need to.
     * @return {?} calculated timeout (in ms) for smart notification
     */
    getSmartTimeout(notificationObj) {
        /** @type {?} */
        let timeout = 600; // start with reaction time
        // custom duration
        timeout += notificationObj.duration || 0;
        // message type
        switch (notificationObj.type) {
            case "info":
            case "success":
            default: {
                break;
            }
            case "danger": {
                timeout += 3000;
                break;
            }
            case "warning": {
                timeout += 1500;
                break;
            }
        }
        /** @type {?} */
        let wordCount = notificationObj.message.trim().split(/\s+/).length;
        timeout += wordCount * 450;
        return timeout;
    }
    /**
     * OnDestroy hook.
     *
     * Destroys all living notifications it is responsible for.
     *
     * @return {?}
     */
    ngOnDestroy() {
        if (this.notificationRefs.length > 0) {
            for (let i = 0; i < this.notificationRefs.length; i++) {
                /** @type {?} */
                let notificationRef = this.notificationRefs[i];
                this.applicationRef.detachView(notificationRef.hostView);
                notificationRef.destroy();
            }
            this.notificationRefs.length = 0;
        }
    }
}
NotificationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NotificationService.ctorParameters = () => [
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef }
];
function NotificationService_tsickle_Closure_declarations() {
    /**
     * An array containing `ComponentRef`s to all the notifications this service instance
     * is responsible for.
     *
     * @type {?}
     */
    NotificationService.prototype.notificationRefs;
    /** @type {?} */
    NotificationService.prototype.onClose;
    /** @type {?} */
    NotificationService.prototype.injector;
    /** @type {?} */
    NotificationService.prototype.componentFactoryResolver;
    /** @type {?} */
    NotificationService.prototype.applicationRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sY0FBYyxFQUVkLHdCQUF3QixFQUV4QixZQUFZLEVBQ1osVUFBVSxFQUNWLFFBQVEsRUFFUixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7QUFRMUMsTUFBTTs7Ozs7Ozs7SUFnQkwsWUFDVyxRQUFrQixFQUNsQix3QkFBa0QsRUFDbEQsY0FBOEI7UUFGOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjs7Ozs7O2dDQWJmLElBQUksS0FBSyxFQUFxQjt1QkFDcEIsSUFBSSxZQUFZLEVBQUU7S0FhckQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0NELGdCQUFnQixDQUFDLGVBQW1ELEVBQUUsZ0JBQWdCLEdBQUcsWUFBWTs7UUFDcEcsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7UUFFakcsSUFBSSxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxlQUFlLENBQUMsUUFBUSxDQUFDLGVBQWUscUJBQUcsZUFBc0IsQ0FBQSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxl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O2FBQzFCO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDakM7S0FDRDs7O1lBN0xELFVBQVU7Ozs7WUFiVixRQUFRO1lBSlIsd0JBQXdCO1lBRnhCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBcHBsaWNhdGlvblJlZixcblx0Q29tcG9uZW50RmFjdG9yeSxcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRDb21wb25lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5qZWN0YWJsZSxcblx0SW5qZWN0b3IsXG5cdE9uRGVzdHJveVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db250ZW50LCBUb2FzdENvbnRlbnQgfSBmcm9tIFwiLi9ub3RpZmljYXRpb24tY29udGVudC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gXCIuL25vdGlmaWNhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4vdG9hc3QuY29tcG9uZW50XCI7XG5cbi8qKlxuICogUHJvdmlkZXMgYSB3YXkgdG8gdXNlIHRoZSBub3RpZmljYXRpb24gY29tcG9uZW50LlxuICpcbiAqIE5vdGlmaWNhdGlvbnMgYXJlIGRpc3BsYXllZCB0b3dhcmQgdGhlIHRvcCBvZiB0aGUgVUkgYW5kIGRvIG5vdCBpbnRlcnJ1cHQgdGhlIHVzZXLigJlzIHdvcmsuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblx0LyoqXG5cdCAqIEFuIGFycmF5IGNvbnRhaW5pbmcgYENvbXBvbmVudFJlZmBzIHRvIGFsbCB0aGUgbm90aWZpY2F0aW9ucyB0aGlzIHNlcnZpY2UgaW5zdGFuY2Vcblx0ICogaXMgcmVzcG9uc2libGUgZm9yLlxuXHQgKlxuXHQgKi9cblx0cHVibGljIG5vdGlmaWNhdGlvblJlZnMgPSBuZXcgQXJyYXk8Q29tcG9uZW50UmVmPGFueT4+KCk7XG5cdHB1YmxpYyBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKipcblx0ICogQ29uc3RydWN0cyBOb3RpZmljYXRpb25TZXJ2aWNlLlxuXHQgKlxuXHQgKiBAcGFyYW0gaW5qZWN0b3Jcblx0ICogQHBhcmFtIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHQgKiBAcGFyYW0gYXBwbGljYXRpb25SZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0cHJvdGVjdGVkIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByb3RlY3RlZCBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYpIHtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93cyB0aGUgbm90aWZpY2F0aW9uIGJhc2VkIG9uIHRoZSBgbm90aWZpY2F0aW9uT2JqYC5cblx0ICpcblx0ICogQHBhcmFtIG5vdGlmaWNhdGlvbk9iaiBDYW4gaGF2ZSBgdHlwZWAsIGBtZXNzYWdlYCwgYHRhcmdldGAsIGBkdXJhdGlvbmAgYW5kIGBzbWFydGAgbWVtYmVycy5cblx0ICpcblx0ICogKipNZW1iZXJzOioqXG5cdCAqXG5cdCAqICogYHR5cGVgIGNhbiBiZSBvbmUgb2YgYFwiaW5mb1wiYCwgYFwid2FybmluZ1wiYCwgYFwiZGFuZ2VyXCJgLCBgXCJzdWNjZXNzXCJgXG5cdCAqICogYG1lc3NhZ2VgIGlzIG1lc3NhZ2UgZm9yIG5vdGlmaWNhdGlvbiB0byBkaXNwbGF5XG5cdCAqICogYHRhcmdldGAgaXMgY3NzIHNlbGVjdG9yIGRlZmluaW5nIGFuIGVsZW1lbnQgdG8gYXBwZW5kIG5vdGlmaWNhdGlvbiB0by4gSWYgbm90IHByb3ZpZGVkLFxuXHQgKiBgc2hvd05vdGlmaWNhdGlvbigpYCBjcmVhdGVzIGEgcGxhY2UgZm9yIHRoZSBub3RpZmljYXRpb24gaW4gYGJvZHlgXG5cdCAqICogYGR1cmF0aW9uYCBpcyBudW1iZXIgb2YgbXMgdG8gY2xvc2UgdGhlIG5vdGlmaWNhdGlvbiBhZnRlci4gSWYgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIGBzbWFydGAsXG5cdCAqIGl0J3MgYWRkZWQgdG8gdGhlIGNhbGN1bGF0ZWQgdGltZW91dFxuXHQgKiAqIGBzbWFydGAsIHNldCB0byBgdHJ1ZWAgaWYgeW91IHdhbnQgdG8gdXNlIHNtYXJ0IG5vdGlmaWNhdGlvbi5cblx0ICpcblx0ICogKipFeGFtcGxlOioqXG5cdCAqIGBgYHR5cGVzY3JpcHRcblx0ICogLy8gSW5mbyBub3RpZmljYXRpb24sIHNheWluZyBcIlNhbXBsZSBtZXNzYWdlLlwiIGFkZGVkIHRvIHRoZSBlbGVtZW50IHdpdGggaWQgbm90aWZpY2F0aW9uLWNvbnRhaW5lclxuXHQgKiAvLyB1c2VzIHNtYXJ0IHRpbWVvdXQgd2l0aCBhZGRlZCBkdXJhdGlvbiBvZiAxIHNlY29uZC5cblx0ICoge1xuXHQgKlx0dHlwZTogXCJpbmZvXCIsXG5cdCAqXHRtZXNzYWdlOiBcIlNhbXBsZSBtZXNzYWdlLlwiLFxuXHQgKlx0dGFyZ2V0OiBcIiNub3RpZmljYXRpb24tY29udGFpbmVyXCIsXG5cdCAqXHRkdXJhdGlvbjogMTAwMCxcblx0ICpcdHNtYXJ0OiB0cnVlXG5cdCAqIH1cblx0ICogYGBgXG5cdCAqXG5cdCAqIEBwYXJhbSBbbm90aWZpY2F0aW9uQ29tcD1Ob3RpZmljYXRpb25dIElmIHByb3ZpZGVkLCB1c2VkIHRvIHJlc29sdmUgY29tcG9uZW50IGZhY3Rvcnlcblx0ICovXG5cdHNob3dOb3RpZmljYXRpb24obm90aWZpY2F0aW9uT2JqOiBOb3RpZmljYXRpb25Db250ZW50IHwgVG9hc3RDb250ZW50LCBub3RpZmljYXRpb25Db21wID0gTm90aWZpY2F0aW9uKSB7XG5cdFx0Y29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KG5vdGlmaWNhdGlvbkNvbXApO1xuXG5cdFx0bGV0IG5vdGlmaWNhdGlvblJlZiA9IGNvbXBvbmVudEZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXHRcdG5vdGlmaWNhdGlvblJlZi5pbnN0YW5jZS5ub3RpZmljYXRpb25PYmogPSBub3RpZmljYXRpb25PYmogYXMgYW55OyAvLyB0eXBlc2NyaXB0IGlzbid0IGJlaW5nIHZlcnkgc21hcnQgaGVyZSwgc28gd2UgdHlwZSB0byBhbnlcblx0XHR0aGlzLm5vdGlmaWNhdGlvblJlZnMucHVzaChub3RpZmljYXRpb25SZWYpO1xuXG5cdFx0dGhpcy5vbkNsb3NlID0gbm90aWZpY2F0aW9uUmVmLmluc3RhbmNlLmNsb3NlO1xuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhub3RpZmljYXRpb25SZWYuaG9zdFZpZXcpO1xuXG5cdFx0aWYgKG5vdGlmaWNhdGlvbk9iai50YXJnZXQpIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobm90aWZpY2F0aW9uT2JqLnRhcmdldCkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5cdFx0XHQvLyBnZXQgb3IgY3JlYXRlIGEgY29udGFpbmVyIGZvciBhbGVydCBsaXN0XG5cdFx0XHRsZXQgbm90aWZpY2F0aW9uQ2xhc3NOYW1lID0gXCJub3RpZmljYXRpb24tb3ZlcmxheVwiO1xuXHRcdFx0bGV0IG5vdGlmaWNhdGlvbkxpc3QgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoYC4ke25vdGlmaWNhdGlvbkNsYXNzTmFtZX1gKTtcblx0XHRcdGlmICghbm90aWZpY2F0aW9uTGlzdCkge1xuXHRcdFx0XHRub3RpZmljYXRpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0bm90aWZpY2F0aW9uTGlzdC5jbGFzc05hbWUgPSBub3RpZmljYXRpb25DbGFzc05hbWU7XG5cdFx0XHRcdGJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uTGlzdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGFkZCB0aGUgbm90aWZpY2F0aW9uIHRvIHRoZSB0b3Agb2YgdGhlIGxpc3Rcblx0XHRcdGlmIChub3RpZmljYXRpb25MaXN0LmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0bm90aWZpY2F0aW9uTGlzdC5pbnNlcnRCZWZvcmUobm90aWZpY2F0aW9uUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQsIG5vdGlmaWNhdGlvbkxpc3QuZmlyc3RDaGlsZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRub3RpZmljYXRpb25MaXN0LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvblJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobm90aWZpY2F0aW9uT2JqLmR1cmF0aW9uICYmIG5vdGlmaWNhdGlvbk9iai5kdXJhdGlvbiA+IDApIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNsb3NlKG5vdGlmaWNhdGlvblJlZik7XG5cdFx0XHR9LCBub3RpZmljYXRpb25PYmouZHVyYXRpb24pO1xuXHRcdH1cblxuXHRcdGlmIChub3RpZmljYXRpb25PYmouc21hcnQpIHtcblx0XHRcdC8vIGxldCBpdCBkaXNhcHBlYXIgYWZ0ZXIgY2FsY3VsYXRlZCB0aW1lb3V0XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5jbG9zZShub3RpZmljYXRpb25SZWYpO1xuXHRcdFx0fSwgdGhpcy5nZXRTbWFydFRpbWVvdXQobm90aWZpY2F0aW9uT2JqKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5vbkNsb3NlLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHR0aGlzLmNsb3NlKG5vdGlmaWNhdGlvblJlZik7XG5cdFx0fSk7XG5cblx0XHRub3RpZmljYXRpb25SZWYuaW5zdGFuY2UuY29tcG9uZW50UmVmID0gbm90aWZpY2F0aW9uUmVmO1xuXHRcdHJldHVybiBub3RpZmljYXRpb25SZWYuaW5zdGFuY2U7XG5cdH1cblxuXHRzaG93VG9hc3Qobm90aWZpY2F0aW9uT2JqOiBOb3RpZmljYXRpb25Db250ZW50IHwgVG9hc3RDb250ZW50LCBub3RpZmljYXRpb25Db21wID0gVG9hc3QpIHtcblx0XHRyZXR1cm4gdGhpcy5zaG93Tm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk9iaiwgbm90aWZpY2F0aW9uQ29tcCBhcyBhbnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb2dyYW1hdGljYWxseSBjbG9zZXMgbm90aWZpY2F0aW9uIGJhc2VkIG9uIGBub3RpZmljYXRpb25SZWZgLlxuXHQgKlxuXHQgKiBAcGFyYW0gbm90aWZpY2F0aW9uUmVmIGBDb21wb25lbnRSZWZgIG9mIGEgbm90aWZpY2F0aW9uIG9yIGBOb3RpZmljYXRpb25gIGNvbXBvbmVudCB5b3Ugd2lzaCB0byBjbG9zZVxuXHQgKi9cblx0Y2xvc2Uobm90aWZpY2F0aW9uUmVmOiBhbnkpIHtcblx0XHRpZiAobm90aWZpY2F0aW9uUmVmKSB7XG5cdFx0XHRpZiAobm90aWZpY2F0aW9uUmVmIGluc3RhbmNlb2YgTm90aWZpY2F0aW9uKSB7XG5cdFx0XHRcdHRoaXMuY2xvc2Uobm90aWZpY2F0aW9uUmVmLmNvbXBvbmVudFJlZik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KG5vdGlmaWNhdGlvblJlZi5ob3N0Vmlldyk7XG5cdFx0XHRcdFx0bm90aWZpY2F0aW9uUmVmLmRlc3Ryb3koKTtcblx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHRoaXMubm90aWZpY2F0aW9uUmVmcy5pbmRleE9mKG5vdGlmaWNhdGlvblJlZik7XG5cdFx0XHRcdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0dGhpcy5ub3RpZmljYXRpb25SZWZzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCAyMDApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGVzIHRoZSBhbW91bnQgb2YgdGltZSB1c2VyIG5lZWRzIHRvIHJlYWQgdGhlIG1lc3NhZ2UgaW4gdGhlIG5vdGlmaWNhdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIG5vdGlmaWNhdGlvbk9iaiBTYW1lIG9iamVjdCB1c2VkIHRvIGluc3RhbnRpYXRlIG5vdGlmaWNhdGlvbi5cblx0ICpcblx0ICogSW4gYWRkaXRpb24gdG8gYHR5cGVgIGFuZCBgbWVzc2FnZWAgbWVtYmVycywgdXNlIGBkdXJhdGlvbmAgbWVtYmVyIHRvIGFkZFxuXHQgKiBzb21lIGV4dHJhIHRpbWUgKGluIG1zKSB0byB0aW1lb3V0IGlmIHlvdSBuZWVkIHRvLlxuXHQgKiBAcmV0dXJucyBjYWxjdWxhdGVkIHRpbWVvdXQgKGluIG1zKSBmb3Igc21hcnQgbm90aWZpY2F0aW9uXG5cdCAqL1xuXHRnZXRTbWFydFRpbWVvdXQobm90aWZpY2F0aW9uT2JqKTogbnVtYmVyIHtcblx0XHQvLyBjYWxjdWxhdGUgdGltZW91dFxuXHRcdGxldCB0aW1lb3V0ID0gNjAwOyAvLyBzdGFydCB3aXRoIHJlYWN0aW9uIHRpbWVcblxuXHRcdC8vIGN1c3RvbSBkdXJhdGlvblxuXHRcdHRpbWVvdXQgKz0gbm90aWZpY2F0aW9uT2JqLmR1cmF0aW9uIHx8IDA7XG5cblx0XHQvLyBtZXNzYWdlIHR5cGVcblx0XHRzd2l0Y2ggKG5vdGlmaWNhdGlvbk9iai50eXBlKSB7XG5cdFx0XHRjYXNlIFwiaW5mb1wiOlxuXHRcdFx0Y2FzZSBcInN1Y2Nlc3NcIjpcblx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlIFwiZGFuZ2VyXCI6IHtcblx0XHRcdFx0dGltZW91dCArPSAzMDAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgXCJ3YXJuaW5nXCI6IHtcblx0XHRcdFx0dGltZW91dCArPSAxNTAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBtZXNzYWdlIGxlbmd0aFxuXHRcdC8vIGF2ZXJhZ2UgcmVhZGVyIHJlYWRzIGFyb3VuZCAyMDAgd29yZHMgcGVyIG1pbnV0ZSwgb3IgaXQgdGFrZXMgdGhlbSB+MC4zcyBwZXIgd29yZFxuXHRcdC8vIGxldCdzIHVzZSAxLjUgZmFjdG9yIGZvciBiZWxvdyBhdmVyYWdlIHNwZWVkIHJlYWRlcnMgYW5kIGhhdmUgMC40NXMgcGVyIHdvcmRcblx0XHRsZXQgd29yZENvdW50ID0gbm90aWZpY2F0aW9uT2JqLm1lc3NhZ2UudHJpbSgpLnNwbGl0KC9cXHMrLykubGVuZ3RoO1xuXHRcdHRpbWVvdXQgKz0gd29yZENvdW50ICogNDUwO1xuXG5cdFx0cmV0dXJuIHRpbWVvdXQ7XG5cdH1cblxuXHQvKipcblx0ICogT25EZXN0cm95IGhvb2suXG5cdCAqXG5cdCAqIERlc3Ryb3lzIGFsbCBsaXZpbmcgbm90aWZpY2F0aW9ucyBpdCBpcyByZXNwb25zaWJsZSBmb3IuXG5cdCAqXG5cdCAqL1xuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5ub3RpZmljYXRpb25SZWZzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub3RpZmljYXRpb25SZWZzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBub3RpZmljYXRpb25SZWYgPSB0aGlzLm5vdGlmaWNhdGlvblJlZnNbaV07XG5cdFx0XHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyhub3RpZmljYXRpb25SZWYuaG9zdFZpZXcpO1xuXHRcdFx0XHRub3RpZmljYXRpb25SZWYuZGVzdHJveSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ub3RpZmljYXRpb25SZWZzLmxlbmd0aCA9IDA7XG5cdFx0fVxuXHR9XG59XG4iXX0=