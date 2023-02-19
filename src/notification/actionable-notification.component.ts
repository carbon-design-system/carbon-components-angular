import {
	Component,
	Input,
	HostBinding
} from "@angular/core";

import { of } from "rxjs";
import { ActionableContent, NotificationVariants } from "./notification-content.interface";
import { I18n } from "carbon-components-angular/i18n";
import { NotificationDisplayService } from "./notification-display.service";
import { BaseNotification } from "./base-notification.component";

/**
 * Actionable notification allows for interactive elements within a notification. There are two variants offered, inline & toast.
 *
 * [See demo](../../?path=/story/components-notification--actionable-notification)
 */
@Component({
	selector: "cds-actionable-notification, ibm-actionable-notification",
	template: `
		<div class="cds--actionable-notification__details">
			<svg
				[cdsIcon]="iconDictionary[notificationObj.type]"
				size="20"
				*ngIf="notificationObj.type"
				[ngClass]="{
					'cds--inline-notification__icon': notificationObj.variant === 'inline',
					'cds--toast-notification__icon': notificationObj.variant === 'toast'
				}"
				class="cds--actionable-notification__icon">
			</svg>
			<div class="cds--actionable-notification__text-wrapper">
				<div class="cds--actionable-notification__content">
					<div *ngIf="!notificationObj.template" cdsActionableTitle [innerHTML]="notificationObj.title"></div>
					<div *ngIf="!notificationObj.template" cdsActionableSubtitle>
						<span [innerHTML]="notificationObj.message"></span>
						<ng-container *ngFor="let link of notificationObj.links">
							<a cdsLink [href]="link.href">{{link.text}}</a>
						</ng-container>
					</div>
					<ng-container *ngTemplateOutlet="notificationObj.template; context: { $implicit: notificationObj }"></ng-container>
				</div>
			</div>
		</div>
		<ng-container *ngIf="!notificationObj.actionsTemplate">
			<button
				*ngFor="let action of notificationObj.actions"
				(click)="onClick(action, $event)"
				[cdsButton]="notificationObj.variant === 'inline' ? 'ghost' : 'tertiary'"
				size="sm"
				cdsActionableButton>
				{{action.text}}
			</button>
		</ng-container>
		<ng-container *ngTemplateOutlet="notificationObj.actionsTemplate; context: { $implicit: notificationObj }"></ng-container>
		<button
			*ngIf="!isCloseHidden"
			(click)="onClose()"
			class="cds--actionable-notification__close-button"
			[attr.aria-label]="notificationObj.closeLabel | async"
			type="button">
			<svg cdsIcon="close" size="16" class="cds--actionable-notification__close-icon"></svg>
		</button>
	`
})
export class ActionableNotification extends BaseNotification {
	private static notificationCount = 0;
	/**
	 * Can have `type`, `title`, and `message` members.
	 *
	 * `type` can be one of `"error"`, `"info"`, `"info-square"`, `"warning"`, `"warning-alt"`, or `"success"`
	 *
	 * `message` is the message to display
	 */
	@Input() get notificationObj(): ActionableContent {
		return this._notificationObj;
	}
	set notificationObj(obj: ActionableContent) {
		if (obj.closeLabel) {
			obj.closeLabel = of(obj.closeLabel);
		}
		this._notificationObj = Object.assign({}, this.defaultNotificationObj, obj);
	}

	@HostBinding("attr.id") notificationID = `notification-${ActionableNotification.notificationCount++}`;
	@HostBinding("class.cds--actionable-notification") notificationClass = true;
	@HostBinding("class.cds--actionable-notification--toast") get toastVariant() { return this.notificationObj.variant === "toast"; }
	@HostBinding("class.cds--actionable-notification--error") get isError() { return this.notificationObj.type === "error"; }
	@HostBinding("class.cds--actionable-notification--info") get isInfo() { return this.notificationObj.type === "info"; }
	@HostBinding("class.cds--actionable-notification--info-square") get isInfoSquare() { return this.notificationObj.type === "info-square"; }
	@HostBinding("class.cds--actionable-notification--success") get isSuccess() { return this.notificationObj.type === "success"; }
	@HostBinding("class.cds--actionable-notification--warning") get isWarning() { return this.notificationObj.type === "warning"; }
	@HostBinding("class.cds--actionable-notification--warning-alt") get isWarningAlt() { return this.notificationObj.type === "warning-alt"; }
	@HostBinding("class.cds--actionable-notification--low-contrast") get isLowContrast() { return this.notificationObj.lowContrast; }
	@HostBinding("class.cds--actionable-notification--hide-close-button") get isCloseHidden() { return !this._notificationObj.showClose; }

	/**
	 * Set default variant & role, alternatives can be provided through notificationObj property
	 */
	defaultNotificationObj = {
		...this.defaultNotificationObj,
		variant: "inline" as NotificationVariants,
		role: "alertdialog"
	};

	constructor(protected notificationDisplayService: NotificationDisplayService, protected i18n: I18n) {
		super(notificationDisplayService, i18n);
	}
}
