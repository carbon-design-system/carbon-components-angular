import {
	ComponentRef,
	EventEmitter,
	Injectable,
	OnDestroy,
	NgZone,
	ViewContainerRef,
	Injector
} from "@angular/core";

import { NotificationContent, ToastContent, ActionableContent } from "./notification-content.interface";
import { Notification } from "./notification.component";
import { Toast } from "./toast.component";
import { ActionableNotification } from "./actionable-notification.component";

/**
 * Provides a way to use the notification component.
 *
 * Notifications are displayed toward the top of the UI and do not interrupt the user’s work.
 */
@Injectable()
export class NotificationService implements OnDestroy {
	/**
	 * An array containing `ComponentRef`s to all the notifications this service instance
	 * is responsible for.
	 *
	 */
	public notificationRefs = new Array<ComponentRef<any>>();
	public onClose: EventEmitter<any> = new EventEmitter();

	/**
	 * Constructs Notification Service
	 */
	constructor(
		protected injector: Injector,
		protected viewContainer: ViewContainerRef,
		protected ngZone: NgZone
	) {}

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
	showNotification(
		notificationObj: NotificationContent | ToastContent | ActionableContent,
		notificationComp = Notification
	) {
		const notificationRef = this.viewContainer.createComponent(notificationComp);
		notificationRef.instance.notificationObj = notificationObj;
		this.notificationRefs.push(notificationRef);

		this.onClose = notificationRef.instance.close;

		if (notificationObj.target) {
			document.querySelector(notificationObj.target).appendChild(notificationRef.location.nativeElement);
		} else {
			let body = document.querySelector("body");

			// get or create a container for alert list
			let notificationClassName = "notification-overlay";
			let notificationList = body.querySelector(`.${notificationClassName}`);
			if (!notificationList) {
				notificationList = document.createElement("div");
				notificationList.className = notificationClassName;
				body.appendChild(notificationList);
			}

			// add the notification to the top of the list
			if (notificationList.firstChild) {
				notificationList.insertBefore(notificationRef.location.nativeElement, notificationList.firstChild);
			} else {
				notificationList.appendChild(notificationRef.location.nativeElement);
			}
		}

		if (notificationObj.duration && notificationObj.duration > 0) {
			this.ngZone.runOutsideAngular(() => {
				setTimeout(() => {
					this.ngZone.run(() => {
						this.close(notificationRef);
					});
				}, notificationObj.duration);
			});
		}

		if (notificationObj.smart) {
			this.ngZone.runOutsideAngular(() => {
				// let it disappear after calculated timeout
				setTimeout(() => {
					this.ngZone.run(() => {
						this.close(notificationRef);
					});
				}, this.getSmartTimeout(notificationObj));
			});
		}

		this.onClose.subscribe(() => {
			this.close(notificationRef);
		});

		notificationRef.instance.componentRef = notificationRef;
		return notificationRef.instance;
	}

	showToast(notificationObj: NotificationContent | ToastContent, notificationComp = Toast) {
		return this.showNotification(notificationObj, notificationComp as any);
	}

	showActionable(notificationObj: ActionableContent, notificationComp = ActionableNotification) {
		return this.showNotification(notificationObj, notificationComp as any);
	}

	/**
	 * Programatically closes notification based on `notificationRef`.
	 *
	 * @param notificationRef `ComponentRef` of a notification or `Notification` component you wish to close
	 */
	close(notificationRef: any) {
		if (notificationRef) {
			if (notificationRef instanceof Notification) {
				this.close(notificationRef.componentRef);
			} else {
				notificationRef.destroy();
				const index = this.notificationRefs.indexOf(notificationRef);
				if (index !== -1) {
					this.notificationRefs.splice(index, 1);
				}
			}
		}
	}

	/**
	 * Calculates the amount of time user needs to read the message in the notification.
	 *
	 * @param notificationObj Same object used to instantiate notification.
	 *
	 * In addition to `type` and `message` members, use `duration` member to add
	 * some extra time (in ms) to timeout if you need to.
	 * @returns calculated timeout (in ms) for smart notification
	 */
	getSmartTimeout(notificationObj): number {
		// calculate timeout
		let timeout = 600; // start with reaction time

		// custom duration
		timeout += notificationObj.duration || 0;

		// message type
		switch (notificationObj.type) {
			case "info":
			case "info-square":
			case "success":
			default: {
				break;
			}
			case "danger": {
				timeout += 3000;
				break;
			}
			case "warning":
			case "warning-alt": {
				timeout += 1500;
				break;
			}
		}

		// message length
		// average reader reads around 200 words per minute, or it takes them ~0.3s per word
		// let's use 1.5 factor for below average speed readers and have 0.45s per word
		let wordCount = notificationObj.message.trim().split(/\s+/).length;
		timeout += wordCount * 450;

		return timeout;
	}

	/**
	 * OnDestroy hook.
	 *
	 * Destroys all living notifications it is responsible for.
	 *
	 */
	ngOnDestroy() {
		this.notificationRefs.forEach((ref) => {
			ref.destroy();
		});
	}
}
