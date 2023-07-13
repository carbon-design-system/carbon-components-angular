import { Subject } from "rxjs";
import { TemplateRef } from "@angular/core";

export type NotificationType = "error" | "info" | "info-square" | "success" | "warning" | "warning-alt";
export type NotificationVariants = "inline" | "toast";

export interface NotificationContent {
	[key: string]: any;
	type: NotificationType;
	title: string;
	target?: string;
	duration?: number;
	smart?: boolean;
	closeLabel?: any;
	message?: string;
	showClose?: boolean;
	lowContrast?: boolean;
	template?: TemplateRef<any>;
}

export interface ActionableContent extends NotificationContent {
	actionsTemplate?: TemplateRef<any>;
	actions?: NotificationAction[];
	links?: NotificationLink[];
	variant?: NotificationVariants;
}

export interface ToastContent extends NotificationContent {
	subtitle: string;
	caption: string;
}

export interface NotificationAction {
	text: string;
	click: Subject<{ event: Event, action: any }> | ((event: { event: Event, action: any }) => any);
	[key: string]: any;
}

export interface NotificationLink {
	text: string;
	href: string;
}
