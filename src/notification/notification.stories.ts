import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import {
	Component,
	Input,
	EventEmitter,
	Output,
	OnInit,
	ViewEncapsulation
} from "@angular/core";

import { NotificationModule, NotificationService } from "./index";
import { ButtonModule } from "../button/index";
import { DocumentationModule } from "./../documentation-component/documentation.module";
import { Subject } from "rxjs";

@Component({
	selector: "app-notification-action-story",
	template: `
		<ibm-notification [notificationObj]="{
			type: 'error',
			title: 'Sample notification',
			message: 'Sample error message',
			showClose: showClose,
			lowContrast: lowContrast,
			actions: actions}">
		</ibm-notification>
		<ibm-notification [notificationObj]="{
			type: 'info',
			title: 'Sample notification',
			message: 'Sample error message',
			showClose: showClose,
			lowContrast: lowContrast,
			actions: actions}">
		</ibm-notification>
		<ibm-notification [notificationObj]="{
			type: 'success',
			title: 'Sample notification',
			message: 'Sample error message',
			showClose: showClose,
			lowContrast: lowContrast,
			actions: actions}">
		</ibm-notification>
		<ibm-notification [notificationObj]="{
			type: 'warning',
			title: 'Sample notification',
			message: 'Sample error message',
			showClose: showClose,
			lowContrast: lowContrast,
			actions: actions}">
		</ibm-notification>
		`,
	providers: [NotificationService]
})
class NotificationActionStory implements OnInit {
	@Input() showClose = true;
	@Input() lowContrast = false;

	@Output() actionClicked = new EventEmitter();

	actionSubject = new Subject<any>();

	actions = [
		{
			text: "Action",
			click: this.actionSubject
		}
	];

	constructor(protected notificationService: NotificationService) { }

	ngOnInit() {
		this.actions.forEach(action => action.click.subscribe({ next: () => this.actionClicked.emit() }));
	}
}

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

storiesOf("Components|Notification", module)
	.addDecorator(
		moduleMetadata({
			declarations: [
				NotificationStory,
				NotificationActionStory,
				ToastStory
			],
			imports: [
				NotificationModule,
				ButtonModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-notification [notificationObj]="{
				type: 'error',
				title: 'Sample notification',
				message: 'Sample error message',
				showClose: showClose,
				lowContrast: lowContrast}">
			</ibm-notification>
			<ibm-notification [notificationObj]="{
				type: 'info',
				title: 'Sample notification',
				message: 'Sample info message',
				showClose: showClose,
				lowContrast: lowContrast}">
			</ibm-notification>
			<ibm-notification [notificationObj]="{
				type: 'success',
				title: 'Sample notification',
				message: 'Sample success message',
				showClose: showClose,
				lowContrast: lowContrast}">
			</ibm-notification>
			<ibm-notification [notificationObj]="{
				type: 'warning',
				title: 'Sample notification',
				message: 'Sample warning message',
				showClose: showClose,
				lowContrast: lowContrast}">
			</ibm-notification>
		`,
		props: {
			showClose: boolean("Show close icon", true),
			lowContrast: boolean("Low Contrast", false)
		}
	}))
	.add("With Actions", () => ({
		template: `
			<app-notification-action-story
				[showClose]="showClose"
				[lowContrast]="lowContrast"
				(actionClicked)="selected()">
			</app-notification-action-story>
		`,
		props: {
			showClose: boolean("Show close icon", true),
			lowContrast: boolean("Low Contrast", false),
			selected: action("Action button clicked!")
		}
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
				caption: 'Sample caption',
				lowContrast: lowContrast,
				showClose: showClose
			}"></ibm-toast>
			<ibm-toast [notificationObj]="{
				type: 'info',
				title: 'Sample toast',
				subtitle: 'Sample subtitle message',
				caption: 'Sample caption',
				lowContrast: lowContrast,
				showClose: showClose
			}"></ibm-toast>
			<ibm-toast [notificationObj]="{
				type: 'success',
				title: 'Sample toast',
				subtitle: 'Sample subtitle message',
				caption: 'Sample caption',
				lowContrast: lowContrast,
				showClose: showClose
			}"></ibm-toast>
			<ibm-toast [notificationObj]="{
				type: 'warning',
				title: 'Sample toast',
				subtitle: 'Sample subtitle message',
				caption: 'Sample caption',
				lowContrast: lowContrast,
				showClose: showClose
			}"></ibm-toast>
		`,
		props: {
			showClose: boolean("Show close icon", true),
			lowContrast: boolean("Low Contrast", false)
		}
	}))
	.add("With custom content", () => ({
		template: `
			<ibm-toast [notificationObj]="{
				type: 'error',
				template: customToastContent,
				title: 'Sample title',
				myData: {
					subtitle: 'Sample custom subtitle'
				},
				myCaption: 'Sample custom caption',
				showClose: showClose
			}">
			</ibm-toast>
			<ibm-notification [notificationObj]="{
				type: 'warning',
				template: customNotificationContent,
				title: 'Sample notification',
				myData: {
					subtitle: 'Sample custom subtitle'
				},
				showClose: showClose
			}">
			</ibm-notification>
			<ng-template #customToastContent let-data>
				<h3 ibmToastTitle>{{data.title}}</h3>
				<p ibmToastSubtitle>{{data.myData.subtitle}}</p>
				<p ibmToastCaption>{{data.myCaption}}</p>
				<div class="actions">
					<div class="secondary-toast-button">
						<button ibmButton="secondary" size="sm">Still Working</button>
					</div>
					<div class="primary-toast-button">
						<button ibmButton="primary" size="sm">Archive</button>
					</div>
				</div>
			</ng-template>
			<ng-template #customNotificationContent let-data>
				<p ibmNotificationTitle>{{data.title}}</p>
				<p ibmNotificationSubtitle>{{data.myData.subtitle}}</p>
			</ng-template>
		`,
		encapsulation: ViewEncapsulation.None,
		styles: [`
			ibm-toast {
				width: 450px;
			}

			.secondary-toast-button {
				margin-right: 10px;
			}

			.actions {
				margin-bottom: 25px;
				display: flex;
				justify-content: flex-end;
			}
		`],
		props: {
			showClose: boolean("Show close icon", true)
		}
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
