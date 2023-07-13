import { Component } from "@angular/core";
import { NotificationService } from "../";

@Component({
	selector: "app-notification-story",
	template: `
		<button class="cds--btn cds--btn--primary" (click)="showNotification()">Show info notification</button>
		<div class="notification-container"></div>
	`,
	providers: [NotificationService]
})
export class NotificationStory {
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
