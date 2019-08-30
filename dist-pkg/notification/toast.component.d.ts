import { OnInit } from "@angular/core";
import { ToastContent } from "./notification-content.interface";
import { Notification } from "./notification.component";
import { ExperimentalService } from "./../experimental.module";
import { NotificationDisplayService } from "./notification-display.service";
import { I18n } from "./../i18n/i18n.module";
/**
 * Toast messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * [See demo](../../?path=/story/notification--toast)
 *
 * <example-url>../../iframe.html?id=notification--toast</example-url>
 */
export declare class Toast extends Notification implements OnInit {
    protected notificationDisplayService: NotificationDisplayService;
    protected i18n: I18n;
    protected experimental: ExperimentalService;
    /**
     * Can have `type`, `title`, `subtitle`, and `caption` members.
     *
     * `type` can be one of `"error"`, `"info"`, `"warning"`, or `"success"`
     */
    notificationObj: ToastContent;
    toastID: string;
    toastClass: boolean;
    role: string;
    readonly isError: boolean;
    readonly isInfo: boolean;
    readonly isSuccess: boolean;
    readonly isWarning: boolean;
    readonly isExperimental: boolean;
    constructor(notificationDisplayService: NotificationDisplayService, i18n: I18n, experimental: ExperimentalService);
    ngOnInit(): void;
}
