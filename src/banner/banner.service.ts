import {
	ApplicationRef,
	ComponentFactory,
	ComponentFactoryResolver,
	ComponentRef,
	EventEmitter,
	Injectable,
	Injector,
	OnDestroy
} from "@angular/core";

import { BannerContent, NotificationContent, ToastContent } from "./banner-content.interface";
import { Banner, Toast } from "./banner.module";

/**
 * Provides a way to use the banner component.
 *
 * Banners are displayed toward the top of the UI and do not interrupt the user’s work.
 *
 * @export
 * @class BannerService
 */
@Injectable()
export class BannerService implements OnDestroy {
	/**
	 * An array containing `ComponentRef`s to all the banners this service instance
	 * is responsible for.
	 *
	 * @memberof BannerService
	 */
	public bannerRefs = new Array<ComponentRef<any>>();
	public onClose: EventEmitter<any> = new EventEmitter();

	/**
	 * Constructs BannerService.
	 *
	 * @param {Injector} injector
	 * @param {ComponentFactoryResolver} componentFactoryResolver
	 * @param {ApplicationRef} applicationRef
	 * @memberof BannerService
	 */
	constructor(
		private injector: Injector,
		private componentFactoryResolver: ComponentFactoryResolver,
		private applicationRef: ApplicationRef) {
	}

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
	 * @param {any} [bannerComp=Banner] If provided, used to resolve component factory
	 * @memberof BannerService
	 */
	showBanner(bannerObj: BannerContent | NotificationContent | ToastContent, bannerComp = Banner) {
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(bannerComp);

		let bannerRef = componentFactory.create(this.injector);
		bannerRef.instance.bannerObj = bannerObj as any; // typescript isn't being very smart here, so we type to any
		this.bannerRefs.push(bannerRef);

		this.onClose = bannerRef.instance.close;
		this.applicationRef.attachView(bannerRef.hostView);

		if (bannerObj.target) {
			document.querySelector(bannerObj.target).appendChild(bannerRef.location.nativeElement);
		} else {
			let body = document.querySelector("body");

			// get or create a container for alert list
			let bannerClassName = "banner-overlay";
			let bannerList = body.querySelector(`.${bannerClassName}`);
			if (!bannerList) {
				bannerList = document.createElement("div");
				bannerList.className = bannerClassName;
				body.appendChild(bannerList);
			}

			// add the banner to the top of the list
			if (bannerList.firstChild) {
				bannerList.insertBefore(bannerRef.location.nativeElement, bannerList.firstChild);
			} else {
				bannerList.appendChild(bannerRef.location.nativeElement);
			}
		}

		if (bannerObj.duration && bannerObj.duration > 0) {
			setTimeout(() => {
				this.close(bannerRef);
			}, bannerObj.duration);
		}

		if (bannerObj.smart) {
			// let it disappear after calculated timeout
			setTimeout(() => {
				this.close(bannerRef);
			}, this.getSmartTimeout(bannerObj));
		}

		this.onClose.subscribe(() => {
			this.close(bannerRef);
		});

		bannerRef.instance.componentRef = bannerRef;
		return bannerRef.instance;
	}

	showToast(bannerObj: BannerContent | NotificationContent | ToastContent, bannerComp = Toast) {
		return this.showBanner(bannerObj, bannerComp);
	}

	/**
	 * Programatically closes banner based on `bannerRef`.
	 *
	 * @param bannerRef `ComponentRef` of a banner or `Banner` component you wish to close
	 * @memberof BannerService
	 */
	close(bannerRef: any) {
		if (bannerRef) {
			if (bannerRef instanceof Banner) {
				this.close(bannerRef.componentRef);
			} else {
				setTimeout( () => {
					this.applicationRef.detachView(bannerRef.hostView);
					bannerRef.destroy();
				}, 200);
			}
		}
	}

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
	getSmartTimeout(bannerObj): number {
		// calculate timeout
		let timeout = 600; // start with reaction time

		// custom duration
		timeout += bannerObj.duration || 0;

		// message type
		switch (bannerObj.type) {
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

		// message length
		// average reader reads around 200 words per minute, or it takes them ~0.3s per word
		// let's use 1.5 factor for below average speed readers and have 0.45s per word
		let wordCount = bannerObj.message.trim().split(/\s+/).length;
		timeout += wordCount * 450;

		return timeout;
	}

	/**
	 * OnDestroy hook.
	 *
	 * Destroys all living banners it is responsible for.
	 *
	 * @memberof BannerService
	 */
	ngOnDestroy() {
		if (this.bannerRefs.length > 0) {
			for (let i = 0; i < this.bannerRefs.length; i++) {
				let bannerRef = this.bannerRefs[i];
				this.applicationRef.detachView(bannerRef.hostView);
				bannerRef.destroy();
			}
			this.bannerRefs.length = 0;
		}
	}
}
