/* tslint:disable variable-name */

import { Component, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { ButtonModule } from "../button";
import {
	NotificationModule,
	NotificationService,
	BaseNotification
} from "./";

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

export default {
	title: "Components/Notification",
	decorators: [
		moduleMetadata({
			declarations: [
				DyanmicActionableStory,
				NotificationStory,
				ToastStory
			],
			imports: [
				NotificationModule,
				ButtonModule,
				DocumentationModule
			]
		})
	],
	component: BaseNotification
} as Meta;

const InlineTemplate: Story = (args) => ({
	props: args,
	template: `
		<ibm-inline-notification [notificationObj]="{
			type: type,
			title: 'Sample notification',
			message: 'Sample error message',
			showClose: showClose,
			lowContrast: lowContrast}">
		</ibm-inline-notification>
	`
});
export const InlineNotification = InlineTemplate.bind({});
InlineNotification.args = {
	showClose: true,
	lowContrast: false
};
InlineNotification.argTypes = {
	type: {
		options: [
			"error",
			"info",
			"info-square",
			"success",
			"warning",
			"warning-alt"
		],
		control: "select",
		defaultValue: "info"
	}
};

const ToastTemplate: Story = (args) => ({
	props: args,
	template: `
		<ibm-toast [notificationObj]="{
			type: type,
			title: 'Sample toast',
			subtitle: 'Sample subtitle message',
			caption: 'Sample caption',
			lowContrast: lowContrast,
			showClose: showClose
		}"></ibm-toast>
	`
});
export const Toast = ToastTemplate.bind({});
Toast.args = {
	...InlineNotification.args
};
Toast.argTypes = {
	...InlineNotification.argTypes
};

const ActionableTemplate: Story = (args) => ({
	props: args,
	template: `
		<ibm-actionable-notification
			[notificationObj]="{
				type: type,
				title: 'Sample notification',
				message: 'Sample error message',
				showClose: showClose,
				lowContrast: lowContrast,
				actions: actions,
				variant: variant
			}">
		</ibm-actionable-notification>
	`
});
export const Actionable = ActionableTemplate.bind({});
Actionable.args = {
	...InlineNotification.args
};
Actionable.argTypes = {
	...InlineNotification.argTypes,
	variant: {
		options: ["toast", "inline"],
		defaultValue: "inline",
		control: "radio"
	},
	actions: {
		control: "object",
		defaultValue: [
			{
				text: "Action",
				click: new Subject<any>()
			}
		]
	}
};

const DynamicActionableTemplate: Story = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-dynamic-actionable-story></app-dynamic-actionable-story>
	`
});
export const DynamicActionable = DynamicActionableTemplate.bind({});

const DynamicToastTemplate: Story = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-toast-story></app-toast-story>
	`
});
export const DynamicToast = DynamicToastTemplate.bind({});

const DynamicInlineTemplate: Story = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-notification-story></app-notification-story>
	`
});
export const DynamicInline = DynamicInlineTemplate.bind({});

const CustomTemplate: Story = (args) => ({
	props: args,
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
	`]
});
export const CustomContent = CustomTemplate.bind({});
CustomContent.args = {
	showClose: true
};

const ActionableDocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/classes/src_notification.actionablenotification.html"></ibm-documentation>
	`
});
export const ActionableDocumentation = ActionableDocumentationTemplate.bind({});

const InlineDocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/classes/src_notification.notification.html"></ibm-documentation>
	`
});
export const InlineDocumentation = InlineDocumentationTemplate.bind({});

const ToastDocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/classes/src_notification.toast.html"></ibm-documentation>
	`
});
export const ToastDocumentation = ToastDocumentationTemplate.bind({});
