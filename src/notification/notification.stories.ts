import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { Component } from "@angular/core";

import { NotificationModule, NotificationService } from "./notification.module";

@Component({
	selector: "app-inline-notification-story",
	template: `
		<button class="bx--btn bx--btn--primary" (click)="showNotification()">Show info notification</button>
		<div class="notification-container"></div>
	`,
	providers: [NotificationService]
})
class InlineNotificationStory {
	constructor(private notificationService: NotificationService) { }

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
	selector: "app-toast-notification-story",
	template: `
		<button class="bx--btn bx--btn--primary" (click)="showToastNotification()">Show info toast</button>
		<div class="notification-container"></div>
	`,
	providers: [NotificationService]
})
class ToastNotificationStory {
	constructor(private notificationService: NotificationService) { }

	showToastNotification() {
		this.notificationService.showToastNotification({
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
				InlineNotificationStory,
				ToastNotificationStory
			],
			imports: [
				NotificationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-inline-notification [notificationObj]="{type: 'error', title: 'Sample notification', message: 'Sample error message'}">
			</ibm-inline-notification>
			<ibm-inline-notification [notificationObj]="{type: 'info', title: 'Sample notification', message: 'Sample info message'}">
			</ibm-inline-notification>
			<ibm-inline-notification [notificationObj]="{type: 'success', title: 'Sample notification', message: 'Sample success message'}">
			</ibm-inline-notification>
			<ibm-inline-notification [notificationObj]="{type: 'warning', title: 'Sample notification', message: 'Sample warning message'}">
			</ibm-inline-notification>
		`
	}))
	.add("Dynamic inline", () => ({
		template: `
			<app-inline-notification-story></app-inline-notification-story>
		`
	}))
	.add("Toast", () => ({
		template: `
			<ibm-toast-notification [notificationObj]="{
				type: 'error',
				title: 'Sample toast',
				subtitle: 'Sample subtitle message',
				caption: 'Sample caption'
			}"></ibm-toast-notification>
		`
	}))
	.add("Dynamic toast", () => ({
		template: `
			<app-toast-notification-story></app-toast-notification-story>
		`
	}));
