import { EventEmitter, ComponentRef } from "@angular/core";
import { NotificationService } from "./notification.service";
import { NotificationContent } from "./notification-content.interface";
import { I18n } from "./../i18n/i18n.module";
/**
 * Notification messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * @export
 * @class Notification
 */
export declare class Notification {
    protected notificationService: NotificationService;
    protected i18n: I18n;
    /**
     * Can have `type`, `title`, and `message` members.
     *
     * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
     *
     * `message` is message for notification to display
     *
     */
    notificationObj: NotificationContent;
    /**
     * Emits on close.
     *
     * @type {EventEmitter<any>}
     * @memberof Notification
     */
    close: EventEmitter<any>;
    componentRef: ComponentRef<Notification>;
    notification: any;
    notificationID: string;
    notificationClass: boolean;
    role: string;
    readonly isError: boolean;
    readonly isInfo: boolean;
    readonly isSuccess: boolean;
    readonly isWarning: boolean;
    protected defaultNotificationObj: {
        title: string;
        message: string;
        type: string;
        closeLabel: any;
    };
    protected _notificationObj: NotificationContent;
    constructor(notificationService: NotificationService, i18n: I18n);
    /**
     * Emits close event.
     *
     * @memberof Notification
     */
    onClose(): void;
    destroy(): void;
}
