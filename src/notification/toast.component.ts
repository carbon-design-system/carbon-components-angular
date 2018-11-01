import {
	Component,
	Input,
	OnInit,
	HostBinding
} from "@angular/core";

import { NotificationService } from "./notification.service";
import { NotificationContent, ToastContent } from "./notification-content.interface";
import { Notification } from "./notification.component";

/**
 * Notification messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * @export
 * @class Notification
 */
@Component({
	selector: "ibm-toast",
	template: `
		<div class="bx--toast-notification__details">
			<h3 class="bx--toast-notification__title" [innerHTML]="notificationObj.title"></h3>
			<p class="bx--toast-notification__subtitle" [innerHTML]="notificationObj.subtitle"></p>
			<p class="bx--toast-notification__caption" [innerHTML]="notificationObj.caption"></p>
		</div>
		<button
			class="bx--toast-notification__close-button"
			type="button"
			[attr.aria-label]="notificationObj.closeLabel"
			(click)="onClose()">
			<svg
				class="bx--toast-notification-icon"
				width="10"
				height="10"
				viewBox="0 0 10 10"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z" fill-rule="nonzero"/>
			</svg>
		</button>
	`,
	providers: [ NotificationService ]
})
export class Toast extends Notification implements OnInit {
	/**
	 * Can have `type`, `title`, `subtitle`, and `caption` members.
	 *
	 * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
	 *
	 * `message` is message for notification to display
	 *
	 */
	@Input() notificationObj: ToastContent;

	@HostBinding("attr.id") toastID = "notification";
	@HostBinding("class.bx--toast-notification") toastClass = true;
	@HostBinding("attr.role") role = "alert";

	@HostBinding("class.bx--toast-notification--error") get isError() { return this.notificationObj["type"] === "error"; }
	@HostBinding("class.bx--toast-notification--info") get isInfo() { return this.notificationObj["type"] === "info"; }
	@HostBinding("class.bx--toast-notification--success") get isSuccess() { return this.notificationObj["type"] === "success"; }
	@HostBinding("class.bx--toast-notification--warning") get isWarning() { return this.notificationObj["type"] === "warning"; }

	ngOnInit() {
		if (!this.notificationObj.closeLabel) {
			this.notificationObj.closeLabel = this.i18n.get().NOTIFICATION.CLOSE_BUTTON;
		}
	}
}
