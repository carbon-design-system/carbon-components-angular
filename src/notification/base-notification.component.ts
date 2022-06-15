import {
	Output,
	EventEmitter,
	HostBinding,
	Component,
	ComponentRef
} from "@angular/core";
import { isObservable, Subject } from "rxjs";
import { I18n } from "carbon-components-angular/i18n";
import { NotificationContent, NotificationType } from "./notification-content.interface";
import { NotificationDisplayService } from "./notification-display.service";

/**
 * Base class for `Notification`, `ActionableNotification`, & `Toast`
 * consisting of common functionality
 */
@Component({
	template: ""
})
export class BaseNotification {
	/**
	 * Set role attribute for component
	 * `Status` is default for inline-notification & toast component
	 * `alertdialog` is default for actionable-notification
	 */
	@HostBinding("attr.role") get roleAttr(): string {
		return this._notificationObj.role;
	}

	/**
	 * Emits on close.
	 */
	@Output() close: EventEmitter<any> = new EventEmitter();

	// Provides access to the component instance
	componentRef: ComponentRef<BaseNotification>;

	// Get icon name(value) for service based on the notification type (key)
	readonly iconDictionary = {
		"error": "error--filled",
		"info": "information--filled",
		"info-square": "information--square--filled",
		"success": "checkmark--filled",
		"warning": "warning--filled",
		"warning-alt": "warning--alt--filled"
	};

	protected defaultNotificationObj: NotificationContent = {
		title: "",
		message: "",
		type: "info" as NotificationType,
		showClose: true,
		closeLabel: this.i18n.get("NOTIFICATION.CLOSE_BUTTON"),
		role: "status"
	};

	protected _notificationObj: NotificationContent = Object.assign({}, this.defaultNotificationObj);

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
}
