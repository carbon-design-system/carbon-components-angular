import { Injectable, ApplicationRef, inject } from "@angular/core";

@Injectable()
export class NotificationDisplayService {
	protected applicationRef = inject(ApplicationRef);

	/** Inserted by Angular inject() migration for backwards compatibility */
	// eslint-disable-next-line @angular-eslint/prefer-inject -- backwards-compatible DI overload until next major
	constructor(...args: unknown[]);

	constructor() {}

	/**
	 * Programatically closes notification based on `notificationRef`.	 *
	 */
	close(notificationRef: any) {
		if (notificationRef.hostView) {
			setTimeout( () => {
				this.applicationRef.detachView(notificationRef.hostView);
				notificationRef.destroy();
			}, 200);
		}
	}
}
