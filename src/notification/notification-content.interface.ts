export interface InlineNotificationContent {
	type: string;
	title: string;
	target?: string;
	duration?: number;
	smart?: boolean;
	closeLabel?: string;
	message: string;
}

export interface ToastNotificationContent extends InlineNotificationContent {
	subtitle: string;
	caption: string;
}
