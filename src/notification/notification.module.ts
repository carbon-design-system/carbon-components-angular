import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StaticIconModule } from "./../icon/static-icon.module";

import { Toast } from "./toast.component";
import { Notification } from "./notification.component";
import { NotificationService } from "./notification.service";
import { NotificationDisplayService } from "./notification-display.service";
import { I18nModule } from "./../i18n/i18n.module";
import { ExperimentalModule } from "./../experimental.module";

export { NotificationService } from "./notification.service";
export { NotificationDisplayService } from "./notification-display.service";
export { Notification } from "./notification.component";
export { Toast } from "./toast.component";

@NgModule({
	declarations: [
		Notification,
		Toast
	],
	exports: [
		Notification,
		Toast
	],
	entryComponents: [Notification, Toast],
	imports: [
		CommonModule,
		StaticIconModule,
		I18nModule,
		ExperimentalModule
	],
	providers: [NotificationService, NotificationDisplayService]
})
export class NotificationModule {}
