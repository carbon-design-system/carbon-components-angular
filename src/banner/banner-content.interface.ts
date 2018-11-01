/**
 * Deprecated in favour of `NotificationContent` (to be removed in v3.0).
 *
 * @deprecated
 */
export interface BannerContent {
	type: string;
	title: string;
	target?: string;
	duration?: number;
	smart?: boolean;
	closeLabel?: string;
}

export interface NotificationContent extends BannerContent {
	message: string;
}

export interface ToastContent extends NotificationContent {
	subtitle: string;
	caption: string;
}
