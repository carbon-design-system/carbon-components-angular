import { Subject } from "rxjs";

export interface NotificationContent {
	type: string;
	title: string;
	target?: string;
	duration?: number;
	smart?: boolean;
	closeLabel?: any;
	message?: string;
	showClose?: boolean;
	lowContrast?: boolean;
	actions?: NotificationAction[];
}

export interface ToastContent extends NotificationContent {
	subtitle: string;
	caption: string;
}

interface NotificationAction {
	text: string;
	click: Subject<{event: Event, action: any}> | ((event: {event: Event, action: any}) => any);
	[x: string]: any;
}
