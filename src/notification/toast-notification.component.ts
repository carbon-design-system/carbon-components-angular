import { Component, Input, OnInit } from "@angular/core";

import { NotificationService } from "./notification.service";
import { InlineNotificationContent } from "./notification-content.interface";
import { InlineNotification } from "./inline-notification.component";

/**
 * Notification messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * @export
 * @class Notification
 */
@Component({
	selector: "ibm-toast-notification",
	template: `
	<div
		#notification
		class="bx--toast-notification bx--toast-notification--{{notificationObj['type']}}"
		role="alert">
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
	</div>
	`,
	providers: [ NotificationService ]
})
export class ToastNotification extends InlineNotification implements OnInit {
	/**
	 * Can have `type`, `title`, `subtitle`, and `caption` members.
	 *
	 * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
	 *
	 * `message` is message for notification to display
	 *
	 */
	@Input() notificationObj: InlineNotificationContent;

	ngOnInit() {
		if (!this.notificationObj.closeLabel) {
			this.notificationObj.closeLabel = this.i18n.get().NOTIFICATION.CLOSE_BUTTON;
		}
	}
}
