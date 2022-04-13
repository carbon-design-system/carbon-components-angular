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
import { I18n } from "carbon-components-angular/i18n";
import { NotificationDisplayService } from "./notification-display.service";
import { of, isObservable, Subject } from "rxjs";

/**
 * Notification messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * [See demo](../../?path=/story/components-notification--basic)
 *
 * <example-url>../../iframe.html?id=components-notification--basic</example-url>
 */
@Component({
	selector: "ibm-notification",
	template: `
		<div class="cds--inline-notification__details">
			<svg
				ibmIcon="error--filled"
				size="20"
				*ngIf="notificationObj.type === 'error'"
				class="cds--inline-notification__icon">
			</svg>
			<svg
				ibmIcon="warning--filled"
				size="20"
				*ngIf="notificationObj.type === 'warning'"
				class="cds--inline-notification__icon">
			</svg>
			<svg
				ibmIcon="checkmark--filled"
				size="20"
				*ngIf="notificationObj.type === 'success'"
				class="cds--inline-notification__icon">
			</svg>
			<svg
				ibmIcon="information--filled"
				size="20"
				*ngIf="notificationObj.type === 'info'"
				class="cds--inline-notification__icon">
			</svg>
			<div class="cds--inline-notification__text-wrapper">
				<p *ngIf="!notificationObj.template" ibmNotificationTitle [innerHTML]="notificationObj.title"></p>
				<div *ngIf="!notificationObj.template" ibmNotificationSubtitle>
					<span [innerHTML]="notificationObj.message"></span>
					<ng-container *ngFor="let link of notificationObj.links">
						<a ibmLink [href]="link.href"> {{link.text}}</a>
					</ng-container>
				</div>
				<ng-container *ngTemplateOutlet="notificationObj.template; context: { $implicit: notificationObj}"></ng-container>
			</div>
		</div>
		<div *ngFor="let action of notificationObj.actions">
			<button
				(click)="onClick(action, $event)"
				ibmButton="ghost"
				size="sm"
				class="cds--inline-notification__action-button"
				type="button">
				{{action.text}}
			</button>
		</div>
		<button
			*ngIf="!isCloseHidden"
			(click)="onClose()"
			class="cds--inline-notification__close-button"
			[attr.aria-label]="notificationObj.closeLabel | async"
			type="button">
			<svg ibmIcon="close" size="16" class="cds--inline-notification__close-icon"></svg>
		</button>
	`
})
export class Notification {
	private static notificationCount = 0;
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

	// @ts-ignore
	@ViewChild("notification", { static: false }) notification;

	@HostBinding("attr.id") notificationID = `notification-${Notification.notificationCount++}`;
	@HostBinding("class.cds--inline-notification") notificationClass = true;
	@HostBinding("attr.role") role = "alert";

	@HostBinding("class.cds--inline-notification--error") get isError() { return this.notificationObj.type === "error"; }
	@HostBinding("class.cds--inline-notification--info") get isInfo() { return this.notificationObj.type === "info"; }
	@HostBinding("class.cds--inline-notification--success") get isSuccess() { return this.notificationObj.type === "success"; }
	@HostBinding("class.cds--inline-notification--warning") get isWarning() { return this.notificationObj.type === "warning"; }
	@HostBinding("class.cds--inline-notification--low-contrast") get isLowContrast() { return this.notificationObj.lowContrast; }
	@HostBinding("class.cds--inline-notification--hide-close-button") get isCloseHidden() { return !this._notificationObj.showClose; }

	protected defaultNotificationObj = {
		title: "",
		message: "",
		type: "info",
		showClose: true,
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

	onClick(action, event) {
		if (!action.click) {
			return;
		}
		if (isObservable(action.click)) {
			(action.click as Subject<{event: Event, action: any}>).next({event, action});
		} else {
			action.click({event, action});
		}
	}

	destroy() {
		this.notificationDisplayService.close(this);
	}
}
