import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select } from "@storybook/addon-knobs/angular";

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
	selector: "app-actionable-story",
	template: `
		<ibm-actionable-notification
			[notificationObj]="{
				type: 'error',
				title: 'Sample notification',
				message: 'Sample error message',
				showClose: showClose,
				lowContrast: lowContrast,
				actions: actions,
				variant: variant
			}">
		</ibm-actionable-notification>
		<ibm-actionable-notification
			[notificationObj]="{
				type: 'info',
				title: 'Sample notification',
				message: 'Sample error message',
				showClose: showClose,
				lowContrast: lowContrast,
				actions: actions,
				variant: variant
			}">
		</ibm-actionable-notification>
		<ibm-actionable-notification
			[notificationObj]="{
				type: 'info-square',
				title: 'Sample notification',
				message: 'Sample error message',
				showClose: showClose,
				lowContrast: lowContrast,
				actions: actions,
				variant: variant
			}">
		</ibm-actionable-notification>
		<ibm-actionable-notification
			[notificationObj]="{
				type: 'success',
				title: 'Sample notification',
				message: 'Sample error message',
				showClose: showClose,
				lowContrast: lowContrast,
				actions: actions,
				variant: variant
			}">
		</ibm-actionable-notification>
		<ibm-actionable-notification
			[notificationObj]="{
				type: 'warning',
				title: 'Sample notification',
				message: 'Sample error message',
				showClose: showClose,
				lowContrast: lowContrast,
				actions: actions,
				variant: variant
			}">
		</ibm-actionable-notification>
		<ibm-actionable-notification
			[notificationObj]="{
				type: 'warning-alt',
				title: 'Sample notification',
				message: 'Sample error message',
				showClose: showClose,
				lowContrast: lowContrast,
				actions: actions,
				variant: variant,
				links: links
			}">
		</ibm-actionable-notification>
		`,
	providers: [NotificationService],
	styles: [`
		ibm-actionable-notification {
			margin-bottom: 1rem;
		}
	`]
})
class NotificationActionStory implements OnInit {
	@Input() showClose = true;
	@Input() lowContrast = false;
	@Input() variant = "inline";
	@Output() actionClicked = new EventEmitter();

	actionSubject = new Subject<any>();

	actions = [
		{
			text: "Action",
			click: this.actionSubject
		}
	];

	links = [
		{
			href: "https://ibm.com",
			text: "Link"
		},
		{
			href: "https://ibm.com",
			text: "Link"
		}
	];

	constructor(protected notificationService: NotificationService) { }

	ngOnInit() {
		this.actions.forEach(action => action.click.subscribe({ next: () => this.actionClicked.emit() }));
	}
}

@Component({
	selector: "app-dynamic-actionable-story",
	template: `
		<button class="cds--btn cds--btn--primary" (click)="showNotification()">Show info notification</button>
		<div class="notification-container"></div>
	`,
	providers: [NotificationService]
})
class DyanmicActionableStory {
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

@Component({
	selector: "app-notification-story",
	template: `
		<button class="cds--btn cds--btn--primary" (click)="showNotification()">Show info notification</button>
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
		<button class="cds--btn cds--btn--primary" (click)="showToast()">Show info toast</button>
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
				DyanmicActionableStory,
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
			<ibm-inline-notification [notificationObj]="{
				type: 'error',
				title: 'Sample notification',
				message: 'Sample error message',
				showClose: showClose,
				lowContrast: lowContrast}">
			</ibm-inline-notification>
			<ibm-notification [notificationObj]="{
				type: 'info',
				title: 'Sample notification',
				message: 'Sample info message',
				showClose: showClose,
				lowContrast: lowContrast}">
			</ibm-notification>
			<ibm-notification [notificationObj]="{
				type: 'info-square',
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
			<ibm-notification [notificationObj]="{
				type: 'warning-alt',
				title: 'Sample notification',
				message: 'Sample warning message',
				showClose: showClose,
				lowContrast: lowContrast}">
			</ibm-notification>
		`,
		props: {
			showClose: boolean("Show close icon", true),
			lowContrast: boolean("Low Contrast", false)
		},
		styles: [`
			ibm-notification, ibm-inline-notification {
				margin-bottom: 1rem;
			}
		`]
	}))
	.add("Dynamic inline", () => ({
		template: `
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-notification-story></app-notification-story>
		`
	}))
	.add("Actionable notification", () => ({
		template: `
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-actionable-story
				[showClose]="showClose"
				[lowContrast]="lowContrast"
				[variant]="variant"
				(actionClicked)="selected()">
			</app-actionable-story>
		`,
		props: {
			variant: select("Variant", ["inline", "toast"], "inline"),
			showClose: boolean("Show close icon", true),
			lowContrast: boolean("Low Contrast", false),
			selected: action("Action button clicked!")
		}
	}))
	.add("Dynamic actionable", () => ({
		template: `
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-dynamic-actionable-story></app-dynamic-actionable-story>
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
				type: 'info-square',
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
			<ibm-toast [notificationObj]="{
				type: 'warning-alt',
				title: 'Sample toast',
				subtitle: 'Sample subtitle message',
				caption: 'Sample caption',
				lowContrast: lowContrast,
				showClose: showClose
			}"></ibm-toast>
		`,
		styles: [`
			ibm-toast {
				margin-bottom: 1rem;
			}

		`],
		props: {
			showClose: boolean("Show close icon", true),
			lowContrast: boolean("Low Contrast", false),
			links: [
				{
					href: "https://ibm.com",
					text: "Link"
				},
				{
					href: "https://ibm.com",
					text: "Link"
				}
			]
		}
	}))
	.add("Dynamic toast", () => ({
		template: `
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-toast-story></app-toast-story>
		`
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
			<ibm-actionable-notification [notificationObj]="{
				type: 'success',
				template: customActionableContent,
				actionsTemplate: customActionableTrigger,
				title: 'Sample notification',
				myData: {
					subtitle: 'Sample custom subtitle'
				},
				showClose: showClose
			}">
			</ibm-actionable-notification>
			<ng-template #customToastContent let-data>
				<h3 ibmToastTitle>{{data.title}}</h3>
				<p ibmToastSubtitle>{{data.myData.subtitle}}</p>
				<p ibmToastCaption>{{data.myCaption}}</p>
			</ng-template>
			<ng-template #customNotificationContent let-data>
				<p ibmNotificationTitle>{{data.title}}</p>
				<p ibmNotificationSubtitle>{{data.myData.subtitle}}</p>
			</ng-template>
			<ng-template #customActionableContent let-data>
				<p ibmActionableTitle>{{data.title}}</p>
				<p ibmActionableSubtitle>{{data.myData.subtitle}}</p>
			</ng-template>
			<ng-template #customActionableTrigger>
				<button
					ibmActionableButton
					ibmButton="ghost"
					size="sm">
					Action
				</button>
			</ng-template>
		`,
		encapsulation: ViewEncapsulation.None,
		styles: [`
			ibm-toast {
				width: 450px;
				margin-bottom: 1rem;
			}

			ibm-notification {
				margin-bottom: 1rem;
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
	.add("Inline Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_notification.notification.html"></ibm-documentation>
		`
	}))
	.add("Actionable Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_notification.actionablenotification.html"></ibm-documentation>
		`
	}))
	.add("Toast Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_notification.toast.html"></ibm-documentation>
		`
	}));
