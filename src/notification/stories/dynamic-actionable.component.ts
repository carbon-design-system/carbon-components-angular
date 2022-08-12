import { Component } from "@angular/core";
import { Subject } from "rxjs";
import { NotificationService } from "../";

@Component({
	selector: "app-dynamic-actionable-story",
	template: `
		<button class="cds--btn cds--btn--primary" (click)="showNotification()">Show info notification</button>
		<div class="notification-container"></div>
	`,
	providers: [NotificationService]
})
export class DyanmicActionableStory {
	actionSubject = new Subject<any>();
	constructor(protected notificationService: NotificationService) { }

	showNotification() {
		this.notificationService.showActionable({
			type: "info",
			title: "Actionable notification",
			message: "Sample info message",
			target: ".notification-container",
			actions: [
				{
					text: "Action",
					click: this.actionSubject
				}
			]
		});
	}
}
