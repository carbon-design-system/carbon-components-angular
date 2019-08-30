import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EventEmitter, Injector, OnDestroy } from "@angular/core";
import { NotificationContent, ToastContent } from "./notification-content.interface";
import { Notification } from "./notification.component";
import { Toast } from "./toast.component";
/**
 * Provides a way to use the notification component.
 *
 * Notifications are displayed toward the top of the UI and do not interrupt the user’s work.
 */
export declare class NotificationService implements OnDestroy {
    protected injector: Injector;
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected applicationRef: ApplicationRef;
    /**
     * An array containing `ComponentRef`s to all the notifications this service instance
     * is responsible for.
     *
     */
    notificationRefs: ComponentRef<any>[];
    onClose: EventEmitter<any>;
    /**
     * Constructs NotificationService.
     *
     * @param injector
     * @param componentFactoryResolver
     * @param applicationRef
     */
    constructor(injector: Injector, componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef);
    /**
     * Shows the notification based on the `notificationObj`.
     *
     * @param notificationObj Can have `type`, `message`, `target`, `duration` and `smart` members.
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
     *	type: "info",
     *	message: "Sample message.",
     *	target: "#notification-container",
     *	duration: 1000,
     *	smart: true
     * }
     * ```
     *
     * @param [notificationComp=Notification] If provided, used to resolve component factory
     */
    showNotification(notificationObj: NotificationContent | ToastContent, notificationComp?: typeof Notification): Notification;
    showToast(notificationObj: NotificationContent | ToastContent, notificationComp?: typeof Toast): Notification;
    /**
     * Programatically closes notification based on `notificationRef`.
     *
     * @param notificationRef `ComponentRef` of a notification or `Notification` component you wish to close
     */
    close(notificationRef: any): void;
    /**
     * Calculates the amount of time user needs to read the message in the notification.
     *
     * @param notificationObj Same object used to instantiate notification.
     *
     * In addition to `type` and `message` members, use `duration` member to add
     * some extra time (in ms) to timeout if you need to.
     * @returns calculated timeout (in ms) for smart notification
     */
    getSmartTimeout(notificationObj: any): number;
    /**
     * OnDestroy hook.
     *
     * Destroys all living notifications it is responsible for.
     *
     */
    ngOnDestroy(): void;
}
