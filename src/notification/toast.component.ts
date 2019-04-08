import {
	Component,
	Input,
	OnInit,
	HostBinding
} from "@angular/core";

import { ToastContent } from "./notification-content.interface";
import { Notification } from "./notification.component";
import { ExperimentalService } from "./../experimental.module";
import { NotificationDisplayService } from "./notification-display.service";
import { I18n } from "./../i18n/i18n.module";

/**
 * Toast messages are displayed toward the top of the UI and do not interrupt user’s work.
 */
@Component({
	selector: "ibm-toast",
	template: `
		<!-- todo: gate icons behind experimental toggle -->
		<ng-container *ngIf="isExperimental">
			<svg *ngIf="notificationObj.type === 'error'" class="bx--inline-notification__icon" width="16" height="16" viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM3.293 4.707l8 8 1.414-1.414-8-8-1.414 1.414z" fill-rule="evenodd"/>
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
		</ng-container>
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
	`
})
export class Toast extends Notification implements OnInit {
	/**
	 * Can have `type`, `title`, `subtitle`, and `caption` members.
	 *
	 * `type` can be one of `"error"`, `"info"`, `"warning"`, or `"success"`
	 */
	@Input() notificationObj: ToastContent;

	@HostBinding("attr.id") toastID = "notification";
	@HostBinding("class.bx--toast-notification") toastClass = true;
	@HostBinding("attr.role") role = "alert";

	@HostBinding("class.bx--toast-notification--error") get isError() { return this.notificationObj["type"] === "error"; }
	@HostBinding("class.bx--toast-notification--info") get isInfo() { return this.notificationObj["type"] === "info"; }
	@HostBinding("class.bx--toast-notification--success") get isSuccess() { return this.notificationObj["type"] === "success"; }
	@HostBinding("class.bx--toast-notification--warning") get isWarning() { return this.notificationObj["type"] === "warning"; }

	get isExperimental() {
		return this.experimental.isExperimental;
	}

	constructor(
		protected notificationDisplayService: NotificationDisplayService,
		protected i18n: I18n,
		protected experimental: ExperimentalService) {
		super(notificationDisplayService, i18n);
	}

	ngOnInit() {
		if (!this.notificationObj.closeLabel) {
			this.notificationObj.closeLabel = this.i18n.get().NOTIFICATION.CLOSE_BUTTON;
		}
	}
}
