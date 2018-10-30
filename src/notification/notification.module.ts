import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StaticIconModule } from "./../icon/static-icon.module";

import { ToastNotification } from "./toast-notification.component";
import { InlineNotification } from "./inline-notification.component";
import { NotificationService } from "./notification.service";
import { I18nModule } from "./../i18n/i18n.module";

export { NotificationService } from "./notification.service";
export { InlineNotification } from "./inline-notification.component";
export { ToastNotification } from "./toast-notification.component";

@NgModule({
	declarations: [
		InlineNotification,
		ToastNotification
	],
	exports: [
		InlineNotification,
		ToastNotification
	],
	entryComponents: [InlineNotification, ToastNotification],
	imports: [CommonModule, StaticIconModule, I18nModule],
	providers: [NotificationService]
})
export class NotificationModule {}
