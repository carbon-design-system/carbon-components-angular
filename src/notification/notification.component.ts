import {
	Component,
	Input,
	HostBinding
} from "@angular/core";

import { NotificationContent } from "./notification-content.interface";
import { I18n } from "carbon-components-angular/i18n";
import { NotificationDisplayService } from "./notification-display.service";
import { isObservable, of } from "rxjs";
import { BaseNotification } from "./base-notification.component";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

/**
 * Notification messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * [See demo](../../?path=/story/components-notification--basic)
 */
@Component({
	selector: "cds-notification, cds-inline-notification, ibm-notification, ibm-inline-notification",
	template: `
		<div class="cds--inline-notification__details">
			<svg
				[cdsIcon]="iconDictionary[notificationObj.type]"
				size="20"
				*ngIf="notificationObj.type"
				class="cds--inline-notification__icon">
			</svg>
			<div class="cds--inline-notification__text-wrapper">
				<div
					cdsNotificationTitle
					*ngIf="!notificationObj.template"
					[id]="notificationID">
					  <ng-container *ngIf="notificationObj.titleHtml; else plainTitle">
   						 <div [innerHTML]="safeNotificationTitleHtml"></div>
 					   </ng-container>
 						 <ng-template #plainTitle>
							{{ notificationObj.title }}
  						</ng-template>
				</div>
				<div *ngIf="!notificationObj.template" cdsNotificationSubtitle>
					 <ng-container *ngIf="notificationObj.messageHtml; else plainMessage">
    					<span [innerHTML]="safeNotificationMessageHtml"></span>
 					  </ng-container>
 					 <ng-template #plainMessage>
						 <span>{{ notificationObj.message }}</span>
 					 </ng-template>
				</div>
				<ng-container *ngTemplateOutlet="notificationObj.template; context: { $implicit: notificationObj}"></ng-container>
			</div>
		</div>
		<button
			*ngIf="!isCloseHidden"
			(click)="onClose()"
			class="cds--inline-notification__close-button"
			[attr.aria-label]="notificationObj.closeLabel | async"
			type="button">
			<svg cdsIcon="close" size="16" class="cds--inline-notification__close-icon"></svg>
		</button>
	`
})
export class Notification extends BaseNotification {
	private static notificationCount = 0;
	/**
	 * Can have `type`, `title`, and `message` members.
	 *
	 * `type` can be one of `"error"`, `"info"`, `"info-square"`, `"warning"`, `"warning-alt"`, or `"success"`
	 *
	 * `message` is the message to display
	 */
	@Input() get notificationObj(): NotificationContent {
		return this._notificationObj;
	}
	set notificationObj(obj: NotificationContent) {
		if (obj.closeLabel && !isObservable(obj.closeLabel)) {
			obj.closeLabel = of(obj.closeLabel);
		}
		this._notificationObj = Object.assign({}, this.defaultNotificationObj, obj);
		if (this._notificationObj.titleHtml) {
			this.safeNotificationTitleHtml = this.sanitizer.bypassSecurityTrustHtml(this._notificationObj.titleHtml);
		}
		if (this._notificationObj.messageHtml) {
			this.safeNotificationMessageHtml = this.sanitizer.bypassSecurityTrustHtml(this._notificationObj.messageHtml);
		}
	}

	notificationID = `notification-${Notification.notificationCount++}`;
	@HostBinding("attr.aria-labelledBy") notificationLabel = this.notificationID;
	@HostBinding("class.cds--inline-notification") notificationClass = true;
	@HostBinding("class.cds--inline-notification--error") get isError() { return this.notificationObj.type === "error"; }
	@HostBinding("class.cds--inline-notification--info") get isInfo() { return this.notificationObj.type === "info"; }
	@HostBinding("class.cds--inline-notification--info-square") get isInfoSquare() { return this.notificationObj.type === "info-square"; }
	@HostBinding("class.cds--inline-notification--success") get isSuccess() { return this.notificationObj.type === "success"; }
	@HostBinding("class.cds--inline-notification--warning") get isWarning() { return this.notificationObj.type === "warning"; }
	@HostBinding("class.cds--inline-notification--warning-alt") get isWarningAlt() { return this.notificationObj.type === "warning-alt"; }
	@HostBinding("class.cds--inline-notification--low-contrast") get isLowContrast() { return this.notificationObj.lowContrast; }
	@HostBinding("class.cds--inline-notification--hide-close-button") get isCloseHidden() { return !this.notificationObj.showClose; }

	protected safeNotificationTitleHtml: SafeHtml;
	protected safeNotificationMessageHtml: SafeHtml;

	constructor(protected notificationDisplayService: NotificationDisplayService, protected i18n: I18n, protected sanitizer: DomSanitizer) {
		super(notificationDisplayService, i18n);
	}
}
