export interface BannerContent {
	type: string;
	title: string;
	target?: string;
	duration?: number;
	smart?: boolean;
}

export interface NotificationContent extends BannerContent {
	message: string;
}

export interface ToastContent extends NotificationContent {
	subtitle: string;
	caption: string;
}
