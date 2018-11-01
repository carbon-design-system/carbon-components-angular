import { OnInit } from "@angular/core";
import { ToastContent } from "./notification-content.interface";
import { Notification } from "./notification.component";
/**
 * Notification messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * @export
 * @class Notification
 */
export declare class Toast extends Notification implements OnInit {
    /**
     * Can have `type`, `title`, `subtitle`, and `caption` members.
     *
     * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
     *
     * `message` is message for notification to display
     *
     */
    notificationObj: ToastContent;
    toastID: string;
    toastClass: boolean;
    role: string;
    readonly isError: boolean;
    readonly isInfo: boolean;
    readonly isSuccess: boolean;
    readonly isWarning: boolean;
    ngOnInit(): void;
}
