import { ApplicationRef } from "@angular/core";
export declare class NotificationDisplayService {
    protected applicationRef: ApplicationRef;
    constructor(applicationRef: ApplicationRef);
    /**
     * Programatically closes notification based on `notificationRef`.	 *
     */
    close(notificationRef: any): void;
}
