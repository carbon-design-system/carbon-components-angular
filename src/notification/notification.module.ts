import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";
import { ErrorFilled16Module } from "@carbon/icons-angular/lib/error--filled/16";
import { CheckmarkFilled16Module } from "@carbon/icons-angular/lib/checkmark--filled/16";
import { WarningFilled16Module } from "@carbon/icons-angular/lib/warning--filled/16";

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
		I18nModule,
		ExperimentalModule,
		Close16Module,
		ErrorFilled16Module,
		CheckmarkFilled16Module,
		WarningFilled16Module
	],
	providers: [NotificationService, NotificationDisplayService]
})
export class NotificationModule {}
