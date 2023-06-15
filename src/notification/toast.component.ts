import {
	Component,
	Input,
	OnInit,
	HostBinding
} from "@angular/core";

import { ToastContent } from "./notification-content.interface";
import { NotificationDisplayService } from "./notification-display.service";
import { I18n } from "carbon-components-angular/i18n";
import { BaseNotification } from "./base-notification.component";

/**
 * Toast messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * [See demo](../../?path=/story/components-notification--toast)
 */
@Component({
	selector: "cds-toast, ibm-toast",
	template: `
		<svg
			[cdsIcon]="iconDictionary[notificationObj.type]"
			size="20"
			*ngIf="notificationObj.type"
			class="cds--toast-notification__icon">
		</svg>
		<div class="cds--toast-notification__details">
			<h3 *ngIf="!notificationObj.template" cdsToastTitle [innerHTML]="notificationObj.title"></h3>
			<div *ngIf="!notificationObj.template" cdsToastSubtitle>
				<span [innerHTML]="notificationObj.subtitle"></span>
			</div>
			<p *ngIf="!notificationObj.template" cdsToastCaption [innerHTML]="notificationObj.caption"></p>
			<ng-container *ngTemplateOutlet="notificationObj.template; context: { $implicit: notificationObj }"></ng-container>
		</div>
		<button
			*ngIf="!isCloseHidden"
			class="cds--toast-notification__close-button"
			type="button"
			[attr.aria-label]="notificationObj.closeLabel"
			(click)="onClose()">
			<svg cdsIcon="close" size="16" class="cds--toast-notification__close-icon"></svg>
		</button>
	`
})
export class Toast extends BaseNotification implements OnInit {
	private static toastCount = 0;
	/**
	 * Can have `type`, `title`, `subtitle`, and `caption` members.
	 *
	 * `type` can be one of `"error"`, `"info"`, `"info-square"`, `"warning"`, `"warning-alt"`, or `"success"`
	 */
	@Input() notificationObj: ToastContent;

	@HostBinding("attr.id") toastID = `toast-${Toast.toastCount++}`;
	@HostBinding("class.cds--toast-notification") toastClass = true;
	@HostBinding("class.cds--toast-notification--error") get isError() { return this.notificationObj.type === "error"; }
	@HostBinding("class.cds--toast-notification--info") get isInfo() { return this.notificationObj.type === "info"; }
	@HostBinding("class.cds--toast-notification--info-square") get isInfoSquare() { return this.notificationObj.type === "info-square"; }
	@HostBinding("class.cds--toast-notification--success") get isSuccess() { return this.notificationObj.type === "success"; }
	@HostBinding("class.cds--toast-notification--warning") get isWarning() { return this.notificationObj.type === "warning"; }
	@HostBinding("class.cds--toast-notification--warning-alt") get isWarningAlt() { return this.notificationObj.type === "warning-alt"; }
	@HostBinding("class.cds--toast-notification--low-contrast") get isLowContrast() { return this.notificationObj.lowContrast; }
	@HostBinding("class.cds--toast-notification--hide-close-button") get isCloseHidden() { return !this.notificationObj.showClose; }

	constructor(protected notificationDisplayService: NotificationDisplayService, protected i18n: I18n) {
		super(notificationDisplayService, i18n);
	}

	ngOnInit() {
		if (!this.notificationObj.closeLabel) {
			this.notificationObj.closeLabel = this.i18n.get().NOTIFICATION.CLOSE_BUTTON;
		}
	}
}
