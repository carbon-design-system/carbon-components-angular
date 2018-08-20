import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EventEmitter, Injector, OnDestroy } from "@angular/core";
import { Banner } from "./banner.component";
import { BannerContent, NotificationContent, ToastContent } from "./banner-content.interface";
/**
 * Provides a way to use the banner component.
 *
 * Banners are displayed toward the top of the UI and do not interrupt the user’s work.
 *
 * @export
 * @class BannerService
 */
export declare class BannerService implements OnDestroy {
    private injector;
    private componentFactoryResolver;
    private applicationRef;
    /**
     * An array containing `ComponentRef`s to all the banners this service instance
     * is responsible for.
     *
     * @memberof BannerService
     */
    bannerRefs: ComponentRef<any>[];
    onClose: EventEmitter<any>;
    /**
     * Used to create banners.
     *
     * @private
     * @type {ComponentFactory<any>}
     * @memberof BannerService
     */
    private componentFactory;
    /**
     * Constructs BannerService.
     *
     * @param {Injector} injector
     * @param {ComponentFactoryResolver} componentFactoryResolver
     * @param {ApplicationRef} applicationRef
     * @memberof BannerService
     */
    constructor(injector: Injector, componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef);
    /**
     * Shows the banner based on the `bannerObj`.
     *
     * @param {any} bannerObj Can have `type`, `message`, `target`, `duration` and `smart` members.
     *
     * **Members:**
     *
     * * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
     * * `message` is message for banner to display
     * * `target` is css selector defining an element to append banner to. If not provided,
     * `showBanner()` creates a place for the banner in `body`
     * * `duration` is number of ms to close the banner after. If used in combination with `smart`,
     * it's added to the calculated timeout
     * * `smart`, set to `true` if you want to use smart banner.
     *
     * **Example:**
     * ```typescript
     * // Info banner, saying "Sample message." added to the element with id banner-container
     * // uses smart timeout with added duration of 1 second.
     * {
     *	type: "info",
     *	message: "Sample message.",
     *	target: "#banner-container",
     *	duration: 1000,
     *	smart: true
     * }
     * ```
     *
     * @param {any} [bannerComp=null] If provided, used to resolve component factory
     * @memberof BannerService
     */
    showBanner(bannerObj: BannerContent | NotificationContent | ToastContent, bannerComp?: any): Banner;
    /**
     * Programatically closes banner based on `bannerRef`.
     *
     * @param bannerRef `ComponentRef` of a banner or `Banner` component you wish to close
     * @memberof BannerService
     */
    close(bannerRef: any): void;
    /**
     * Calculates the amount of time user needs to read the message in the banner.
     *
     * @param {any} bannerObj Same object used to instantiate banner.
     *
     * In addition to `type` and `message` members, use `duration` member to add
     * some extra time (in ms) to timeout if you need to.
     * @returns {number} calculated timeout (in ms) for smart banner
     * @memberof BannerService
     */
    getSmartTimeout(bannerObj: any): number;
    /**
     * OnDestroy hook.
     *
     * Destroys all living banners it is responsible for.
     *
     * @memberof BannerService
     */
    ngOnDestroy(): void;
}
