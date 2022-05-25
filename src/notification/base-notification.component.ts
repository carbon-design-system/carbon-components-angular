import {
	Output,
	EventEmitter,
	HostBinding,
	Input
} from "@angular/core";
import { isObservable, Subject } from "rxjs";
import { I18n } from "carbon-components-angular/i18n";
import {
	NotificationContent,
	NotificationType,
	ToastContent,
	ActionableContent
} from "./notification-content.interface";
import { NotificationDisplayService } from "./notification-display.service";

/**
 * Base class for `Notification`, `ActionableNotification`, & `Toast`
 * consisting of common functionality
 */
export class BaseNotification {

	@Input() role: string;
	@HostBinding("attr.role") get roleAttr(): string {
		return this.role;
	}

	/**
	 * Emits on close.
	 */
	@Output() close: EventEmitter<any> = new EventEmitter();

	protected defaultNotificationObj: NotificationContent | ToastContent | ActionableContent = {
		title: "",
		message: "",
		type: "info" as NotificationType,
		showClose: true,
		closeLabel: this.i18n.get("NOTIFICATION.CLOSE_BUTTON")
	};

	protected _notificationObj: NotificationContent | ToastContent | ActionableContent = Object.assign({}, this.defaultNotificationObj);

	constructor(
		protected notificationDisplayService: NotificationDisplayService,
		protected i18n: I18n
	) { }

	/**
	 * Emits close event.
	 */
	onClose() {
		this.close.emit();
	}

	onClick(action, event) {
		if (!action.click) {
			return;
		}
		if (isObservable(action.click)) {
			(action.click as Subject<{ event: Event, action: any }>).next({ event, action });
		} else {
			action.click({ event, action });
		}
	}

	destroy() {
		this.notificationDisplayService.close(this);
	}

	getIconName(type: NotificationType) {
		switch (type) {
			case "error":
				return "error--filled";
			case "info":
				return "information--filled";
			case "info-square":
				return "information--square--filled";
			case "success":
				return "checkmark--filled";
			case "warning":
				return "warning--filled";
			case "warning-alt":
				return "warning--alt--filled";
			default:
				return "";
		}
	}
}
