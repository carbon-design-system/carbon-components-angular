import { Component, Input } from "@angular/core";

import { BannerService } from "./banner.service";
import { ToastContent } from "./banner-content.interface";
import { Banner } from "./banner.component";

/**
 * Banner messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * @export
 * @class Banner
 */
@Component({
	selector: "ibm-toast",
	template: `
	<div
		#banner
		class="bx--toast-notification bx--toast-notification--{{bannerObj['type']}}"
		role="alert">
		<div class="bx--toast-notification__details">
			<h3 class="bx--toast-notification__title" [innerHTML]="bannerObj.title"></h3>
			<p class="bx--toast-notification__subtitle" [innerHTML]="bannerObj.subtitle"></p>
			<p class="bx--toast-notification__caption" [innerHTML]="bannerObj.caption"></p>
		</div>
		<button
			class="bx--toast-notification__close-button"
			aria-label="close"
			type="button"
			(click)="onClose()">
			<svg
				class="bx--toast-notification-icon"
				width="10"
				height="10"
				viewBox="0 0 10 10"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z" fill-rule="nonzero"/>
			</svg>
		</button>
	</div>
	`,
	providers: [ BannerService ]
})
export class Toast extends Banner {
	/**
	 * Can have `type`, `title`, `subtitle`, and `caption` members.
	 *
	 * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
	 *
	 * `message` is message for banner to display
	 *
	 */
	@Input() bannerObj: ToastContent;
}
