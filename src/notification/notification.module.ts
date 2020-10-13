import { NgModule } from "@angular/core";
import { ButtonModule } from "carbon-components-angular/button";
import { CommonModule } from "@angular/common";
import {
	CloseModule,
	ErrorFilledModule,
	CheckmarkFilledModule,
	WarningFilledModule,
	InformationFilledModule
} from "@carbon/icons-angular";

import { Toast } from "./toast.component";
import { ToastTitle } from "./toast-title.directive";
import { ToastSubtitle } from "./toast-subtitle.directive";
import { ToastCaption } from "./toast-caption.directive";
import { NotificationTitle } from "./notification-title.directive";
import { NotificationSubtitle } from "./notification-subtitle.directive";
import { Notification } from "./notification.component";
import { NotificationService } from "./notification.service";
import { NotificationDisplayService } from "./notification-display.service";
import { I18nModule } from "carbon-components-angular/i18n";
import { ExperimentalModule } from "carbon-components-angular/experimental";
import { LinkModule } from "carbon-components-angular/link";

@NgModule({
	declarations: [
		Notification,
		Toast,
		ToastTitle,
		ToastSubtitle,
		ToastCaption,
		NotificationTitle,
		NotificationSubtitle
	],
	exports: [
		Notification,
		Toast,
		ToastTitle,
		ToastSubtitle,
		ToastCaption,
		NotificationTitle,
		NotificationSubtitle
	],
	entryComponents: [Notification, Toast],
	imports: [
		ButtonModule,
		CommonModule,
		I18nModule,
		ExperimentalModule,
		CloseModule,
		ErrorFilledModule,
		CheckmarkFilledModule,
		WarningFilledModule,
		InformationFilledModule,
		LinkModule
	],
	providers: [NotificationService, NotificationDisplayService]
})
export class NotificationModule {}
