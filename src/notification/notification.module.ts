import { NgModule } from "@angular/core";
import { ButtonModule } from "carbon-components-angular/button";
import { CommonModule } from "@angular/common";

import { ActionableNotification } from "./actionable-notification.component";
import { ActionableButton } from "./actionable-button.directive";
import { ActionableTitle } from "./actionable-title.directive";
import { ActionableSubtitle } from "./actionable-subtitle.directive";
import { BaseNotification } from "./base-notification.component";
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
import { IconModule } from "carbon-components-angular/icon";

@NgModule({
	declarations: [
		ActionableButton,
		ActionableNotification,
		ActionableTitle,
		ActionableSubtitle,
		BaseNotification,
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
		ActionableButton,
		ActionableNotification,
		ActionableTitle,
		ActionableSubtitle,
		Toast,
		ToastTitle,
		ToastSubtitle,
		ToastCaption,
		NotificationTitle,
		NotificationSubtitle
	],
	imports: [
		ButtonModule,
		CommonModule,
		I18nModule,
		ExperimentalModule,
		LinkModule,
		IconModule
	],
	providers: [NotificationService, NotificationDisplayService]
})
export class NotificationModule {}
