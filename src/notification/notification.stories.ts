/* tslint:disable variable-name */

import { ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { ButtonModule } from "../button";
import { NotificationModule, BaseNotification } from "./";

import {
	DyanmicActionableStory,
	NotificationStory,
	ToastStory
} from "./stories";

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
				ButtonModule
			]
		})
	],
	component: BaseNotification
} as Meta;

const InlineTemplate: Story = (args) => ({
	props: args,
	template: `
		<cds-inline-notification [notificationObj]="{
			type: type,
			title: 'Sample notification',
			message: 'Sample error message',
			showClose: showClose,
			lowContrast: lowContrast}">
		</cds-inline-notification>
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
		<cds-toast [notificationObj]="{
			type: type,
			title: 'Sample toast',
			subtitle: 'Sample subtitle message',
			caption: 'Sample caption',
			lowContrast: lowContrast,
			showClose: showClose
		}"></cds-toast>
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
		<cds-actionable-notification
			[notificationObj]="{
				type: type,
				title: 'Sample notification',
				message: 'Sample error message',
				showClose: showClose,
				lowContrast: lowContrast,
				actions: actions,
				variant: variant
			}">
		</cds-actionable-notification>
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
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/notification/stories/dynamic-actionable.component.ts
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
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/notification/stories/toast.component.ts
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
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/notification/stories/notification.component.ts
		-->
		<app-notification-story></app-notification-story>
	`
});
export const DynamicInline = DynamicInlineTemplate.bind({});

const CustomTemplate: Story = (args) => ({
	props: args,
	template: `
		<cds-toast [notificationObj]="{
			type: 'error',
			template: customToastContent,
			title: 'Sample title',
			myData: {
				subtitle: 'Sample custom subtitle'
			},
			myCaption: 'Sample custom caption',
			showClose: showClose
		}">
		</cds-toast>
		<cds-notification [notificationObj]="{
			type: 'warning',
			template: customNotificationContent,
			title: 'Sample notification',
			myData: {
				subtitle: 'Sample custom subtitle'
			},
			showClose: showClose
		}">
		</cds-notification>
		<cds-actionable-notification [notificationObj]="{
			type: 'success',
			template: customActionableContent,
			actionsTemplate: customActionableTrigger,
			title: 'Sample notification',
			myData: {
				subtitle: 'Sample custom subtitle'
			},
			showClose: showClose
		}">
		</cds-actionable-notification>
		<ng-template #customToastContent let-data>
			<h3 cdsToastTitle>{{data.title}}</h3>
			<p cdsToastSubtitle>{{data.myData.subtitle}}</p>
			<p cdsToastCaption>{{data.myCaption}}</p>
		</ng-template>
		<ng-template #customNotificationContent let-data>
			<p cdsNotificationTitle>{{data.title}}</p>
			<p cdsNotificationSubtitle>{{data.myData.subtitle}}</p>
		</ng-template>
		<ng-template #customActionableContent let-data>
			<p cdsActionableTitle>{{data.title}}</p>
			<p cdsActionableSubtitle>{{data.myData.subtitle}}</p>
		</ng-template>
		<ng-template #customActionableTrigger>
			<button
				cdsActionableButton
				cdsButton="ghost"
				size="sm">
				Action
			</button>
		</ng-template>
	`,
	encapsulation: ViewEncapsulation.None,
	styles: [`
		cds-toast {
			width: 450px;
			margin-bottom: 1rem;
		}

		cds-notification {
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
