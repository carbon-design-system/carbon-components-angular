import {
	Component,
	Input,
	Output,
	EventEmitter,
	ComponentRef,
	ViewChild,
	HostBinding
} from "@angular/core";

import { NotificationContent } from "./notification-content.interface";
import { I18n } from "./../i18n/i18n.module";
import { NotificationDisplayService } from "./notification-display.service";
import { of } from "rxjs";

/**
 * Notification messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * [See demo](../../?path=/story/notification--basic)
 *
 * <example-url>../../iframe.html?id=notification--basic</example-url>
 *
 * @export
 * @class Notification
 */
@Component({
	selector: "ibm-notification",
	template: `
		<div class="bx--inline-notification__details">
			<ibm-icon-error-filled16
				*ngIf="notificationObj.type === 'error'"
				class="bx--inline-notification__icon">
			</ibm-icon-error-filled16>
			<ibm-icon-warning-filled16
				*ngIf="notificationObj.type === 'warning'"
				class="bx--inline-notification__icon">
			</ibm-icon-warning-filled16>
			<ibm-icon-checkmark-filled16
				*ngIf="notificationObj.type === 'success'"
				class="bx--inline-notification__icon">
			</ibm-icon-checkmark-filled16>
			<div class="bx--inline-notification__text-wrapper">
				<p [innerHTML]="notificationObj.title" class="bx--inline-notification__title"></p>
				<p [innerHTML]="notificationObj.message" class="bx--inline-notification__subtitle"></p>
			</div>
		</div>
		<button
			(click)="onClose()"
			class="bx--inline-notification__close-button"
			[attr.aria-label]="notificationObj.closeLabel | async"
			type="button">
			<ibm-icon-close16 class="bx--inline-notification__close-icon"></ibm-icon-close16>
		</button>
	`
})
export class Notification {
	/**
	 * Can have `type`, `title`, and `message` members.
	 *
	 * `type` can be one of `"info"`, `"warning"`, `"error"`, `"success"`
	 *
	 * `message` is the message to display
	 */
	@Input() get notificationObj(): NotificationContent {
		return this._notificationObj;
	}
	set notificationObj(obj: NotificationContent) {
		if (obj.closeLabel) {
			obj.closeLabel = of(obj.closeLabel);
		}
		this._notificationObj = Object.assign({}, this.defaultNotificationObj, obj);
	}

	/**
	 * Emits on close.
	 */
	@Output() close: EventEmitter<any> = new EventEmitter();

	componentRef: ComponentRef<Notification>;

	@ViewChild("notification") notification;

	@HostBinding("attr.id") notificationID = "notification";
	@HostBinding("class.bx--inline-notification") notificationClass = true;
	@HostBinding("attr.role") role = "alert";

	@HostBinding("class.bx--inline-notification--error") get isError() { return this.notificationObj.type === "error"; }
	@HostBinding("class.bx--inline-notification--info") get isInfo() { return this.notificationObj.type === "info"; }
	@HostBinding("class.bx--inline-notification--success") get isSuccess() { return this.notificationObj.type === "success"; }
	@HostBinding("class.bx--inline-notification--warning") get isWarning() { return this.notificationObj.type === "warning"; }

	protected defaultNotificationObj = {
		title: "",
		message: "",
		type: "info",
		closeLabel: this.i18n.get("NOTIFICATION.CLOSE_BUTTON")
	};
	protected _notificationObj: NotificationContent = Object.assign({}, this.defaultNotificationObj);

	constructor(protected notificationDisplayService: NotificationDisplayService, protected i18n: I18n) {}

	/**
	 * Emits close event.
	 */
	onClose() {
		this.close.emit();
	}

	destroy() {
		this.notificationDisplayService.close(this);
	}
}
