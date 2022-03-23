import {
	Component,
	Input,
	OnInit,
	HostBinding
} from "@angular/core";

import { ToastContent } from "./notification-content.interface";
import { Notification } from "./notification.component";
import { ExperimentalService } from "carbon-components-angular/experimental";
import { NotificationDisplayService } from "./notification-display.service";
import { I18n } from "carbon-components-angular/i18n";

/**
 * Toast messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * [See demo](../../?path=/story/components-notification--toast)
 *
 * <example-url>../../iframe.html?id=components-notification--toast</example-url>
 */
@Component({
	selector: "ibm-toast",
	template: `
		<svg
			ibmIcon="error--filled"
			size="20"
			*ngIf="notificationObj.type === 'error'"
			class="cds--toast-notification__icon">
		</svg>
		<svg
			ibmIcon="warning--filled"
			size="20"
			*ngIf="notificationObj.type === 'warning'"
			class="cds--toast-notification__icon">
		</svg>
		<svg
			ibmIcon="checkmark--filled"
			size="20"
			*ngIf="notificationObj.type === 'success'"
			class="cds--toast-notification__icon">
		</svg>
		<svg
			ibmIcon="information--filled"
			size="20"
			*ngIf="notificationObj.type === 'info'"
			class="cds--toast-notification__icon">
		</svg>
		<div class="cds--toast-notification__details">
			<h3 *ngIf="!notificationObj.template" ibmToastTitle [innerHTML]="notificationObj.title"></h3>
			<div *ngIf="!notificationObj.template" ibmToastSubtitle>
				<span [innerHTML]="notificationObj.subtitle"></span>
				<ng-container *ngFor="let link of notificationObj.links">
					<a ibmLink [href]="link.href"> {{link.text}}</a>
				</ng-container>
			</div>
			<p *ngIf="!notificationObj.template" ibmToastCaption [innerHTML]="notificationObj.caption"></p>
			<ng-container *ngTemplateOutlet="notificationObj.template; context: { $implicit: notificationObj}"></ng-container>
		</div>
		<button
			*ngIf="!isCloseHidden"
			class="cds--toast-notification__close-button"
			type="button"
			[attr.aria-label]="notificationObj.closeLabel"
			(click)="onClose()">
			<svg ibmIcon="close" size="16" class="cds--toast-notification__close-icon"></svg>
		</button>
	`
})
export class Toast extends Notification implements OnInit {
	private static toastCount = 0;
	/**
	 * Can have `type`, `title`, `subtitle`, and `caption` members.
	 *
	 * `type` can be one of `"error"`, `"info"`, `"warning"`, or `"success"`
	 */
	@Input() notificationObj: ToastContent;

	@HostBinding("attr.id") toastID = `toast-${Toast.toastCount++}`;
	@HostBinding("class.cds--toast-notification") toastClass = true;
	@HostBinding("attr.role") role = "alert";

	@HostBinding("class.cds--toast-notification--error") get isError() { return this.notificationObj["type"] === "error"; }
	@HostBinding("class.cds--toast-notification--info") get isInfo() { return this.notificationObj["type"] === "info"; }
	@HostBinding("class.cds--toast-notification--success") get isSuccess() { return this.notificationObj["type"] === "success"; }
	@HostBinding("class.cds--toast-notification--warning") get isWarning() { return this.notificationObj["type"] === "warning"; }
	@HostBinding("class.cds--toast-notification--low-contrast") get isLowContrast() { return this.notificationObj.lowContrast; }

	constructor(
		protected notificationDisplayService: NotificationDisplayService,
		protected i18n: I18n,
		protected experimental: ExperimentalService) {
		super(notificationDisplayService, i18n);
		// disable inline notification styles
		this.notificationClass = false;
	}

	ngOnInit() {
		if (!this.notificationObj.closeLabel) {
			this.notificationObj.closeLabel = this.i18n.get().NOTIFICATION.CLOSE_BUTTON;
		}
	}
}
