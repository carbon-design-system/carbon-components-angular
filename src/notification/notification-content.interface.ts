export interface NotificationContent {
	type: string;
	title: string;
	target?: string;
	duration?: number;
	smart?: boolean;
	closeLabel?: any;
	message?: string;
}

export interface ToastContent extends NotificationContent {
	subtitle: string;
	caption: string;
}
