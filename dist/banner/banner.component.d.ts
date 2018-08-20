import { EventEmitter, ComponentRef } from "@angular/core";
import { BannerService } from "./banner.service";
import { NotificationContent } from "./banner-content.interface";
/**
 * Banner messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * @export
 * @class Banner
 */
export declare class Banner {
    private bannerService;
    /**
     * Can have `type`, `title`, and `message` members.
     *
     * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
     *
     * `message` is message for banner to display
     *
     */
    bannerObj: NotificationContent;
    /**
     * Emits on close.
     *
     * @type {EventEmitter<any>}
     * @memberof Banner
     */
    close: EventEmitter<any>;
    componentRef: ComponentRef<Banner>;
    banner: any;
    constructor(bannerService: BannerService);
    /**
     * Emits close event.
     *
     * @memberof Banner
     */
    onClose(): void;
    destroy(): void;
}
