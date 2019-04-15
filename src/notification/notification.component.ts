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
 */
@Component({
	selector: "ibm-notification",
	template: `
		<div class="bx--inline-notification__details">
			<svg *ngIf="notificationObj.type === 'error'" class="bx--inline-notification__icon" width="16" height="16" viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM3.293 4.707l8 8 1.414-1.414-8-8-1.414 1.414z" fill-rule="evenodd"/>
			</svg>
			<svg *ngIf="notificationObj.type === 'info'" class="bx--inline-notification__icon" width="16" height="16" viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm1-3V7H7v6h2zM8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
			</svg>
			<svg *ngIf="notificationObj.type === 'success'" class="bx--inline-notification__icon" width="16" height="16" viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.293-11.332L6.75 9.21 4.707 7.168 3.293 8.582 6.75 12.04l5.957-5.957-1.414-1.414z"></path>
			</svg>
			<svg *ngIf="notificationObj.type === 'warning'" class="bx--inline-notification__icon" width="16" height="16" viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M.75 16a.75.75 0 0 1-.67-1.085L7.33.415a.75.75 0 0 1 1.34 0l7.25 14.5A.75.75 0 0 1 15.25 16H.75zm6.5-10v5h1.5V6h-1.5zM8
					13.5A.75.75 0 1 0 8 12a.75.75 0 0 0 0 1.5z"></path>
			</svg>
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
			<svg
				class="bx--inline-notification__close-icon"
				width="10"
				height="10"
				viewBox="0 0 10 10"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z" fill-rule="nonzero"/>
			</svg>
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
