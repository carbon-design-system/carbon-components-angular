import { Banner } from "./banner.component";
import { ToastContent } from "./banner-content.interface";
/**
 * Banner messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * @export
 * @class Banner
 */
export declare class Toast extends Banner {
    /**
     * Can have `type`, `title`, `subtitle`, and `caption` members.
     *
     * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
     *
     * `message` is message for banner to display
     *
     */
    bannerObj: ToastContent;
}
