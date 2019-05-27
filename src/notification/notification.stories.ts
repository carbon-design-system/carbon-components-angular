import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { Component } from "@angular/core";

import { NotificationModule, NotificationService } from "./notification.module";
import { I18n } from "../i18n/i18n.module";
import { DocumentationModule } from "./../documentation-component/documentation.module";

@Component({
	selector: "app-notification-story",
	template: `
		<button class="bx--btn bx--btn--primary" (click)="showNotification()">Show info notification</button>
		<div class="notification-container"></div>
	`,
	providers: [NotificationService]
})
class NotificationStory {
	constructor(protected notificationService: NotificationService) { }

	showNotification() {
		this.notificationService.showNotification({
			type: "info",
			title: "Sample notification",
			message: "Sample info message",
			target: ".notification-container"
		});
	}
}

@Component({
	selector: "app-toast-story",
	template: `
		<button class="bx--btn bx--btn--primary" (click)="showToast()">Show info toast</button>
		<div class="notification-container"></div>
	`,
	providers: [NotificationService]
})
class ToastStory {
	constructor(protected notificationService: NotificationService) { }

	showToast() {
		this.notificationService.showToast({
			type: "info",
			title: "Sample toast",
			subtitle: "Sample subtitle message",
			caption: "Sample caption",
			target: ".notification-container",
			message: "message"
		});
	}
}

storiesOf("Notification", module)
	.addDecorator(
		moduleMetadata({
			declarations: [
				NotificationStory,
				ToastStory
			],
			imports: [
				NotificationModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-notification [notificationObj]="{type: 'error', title: 'Sample notification', message: 'Sample error message'}">
			</ibm-notification>
			<ibm-notification [notificationObj]="{type: 'info', title: 'Sample notification', message: 'Sample info message'}">
			</ibm-notification>
			<ibm-notification [notificationObj]="{type: 'success', title: 'Sample notification', message: 'Sample success message'}">
			</ibm-notification>
			<ibm-notification [notificationObj]="{type: 'warning', title: 'Sample notification', message: 'Sample warning message'}">
			</ibm-notification>
		`
	}))
	.add("Dynamic", () => ({
		template: `
			<app-notification-story></app-notification-story>
		`
	}))
	.add("Toast", () => ({
		template: `
			<ibm-toast [notificationObj]="{
				type: 'error',
				title: 'Sample toast',
				subtitle: 'Sample subtitle message',
				caption: 'Sample caption'
			}"></ibm-toast>
		`
	}))
	.add("Dynamic toast", () => ({
		template: `
			<app-toast-story></app-toast-story>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Notification.html"></ibm-documentation>
		`
	}))
	.add("Toast Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Toast.html"></ibm-documentation>
		`
	}));
