import {
	Component,
	Input,
	Output,
	EventEmitter,
	ComponentRef,
	ViewChild
} from "@angular/core";

import { BannerService } from "./banner.service";
import { NotificationContent } from "./banner-content.interface";

/**
 * Banner messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * @export
 * @class Banner
 */
@Component({
	selector: "ibm-banner",
	template: `
	<div
		#banner
		class="bx--inline-notification bx--inline-notification--{{bannerObj.type}}"
		role="alert">
		<div class="bx--inline-notification__details">
			<svg class="bx--inline-notification__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
				<path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM3.293 4.707l8 8 1.414-1.414-8-8-1.414 1.414z" fill-rule="evenodd"/>
			</svg>
			<div class="bx--inline-notification__text-wrapper">
				<p [innerHTML]="bannerObj.title" class="bx--inline-notification__title"></p>
				<p [innerHTML]="bannerObj.message" class="bx--inline-notification__subtitle"></p>
			</div>
		</div>
		<button
			(click)="onClose()"
			class="bx--inline-notification__close-button"
			type="button">
			<svg
				class="bx--inline-notification__close-icon"
				aria-label="close"
				width="10"
				height="10"
				viewBox="0 0 10 10"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z" fill-rule="nonzero"/>
			</svg>
		</button>
	</div>
	`,
	providers: [BannerService]
})
export class Banner {
	/**
	 * Can have `type`, `title`, and `message` members.
	 *
	 * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
	 *
	 * `message` is message for banner to display
	 *
	 */
	@Input() bannerObj: NotificationContent;

	/**
	 * Emits on close.
	 *
	 * @type {EventEmitter<any>}
	 * @memberof Banner
	 */
	@Output() close: EventEmitter<any> = new EventEmitter();

	componentRef: ComponentRef<Banner>;

	@ViewChild("banner") banner;

	constructor(protected bannerService: BannerService) {}

	/**
	 * Emits close event.
	 *
	 * @memberof Banner
	 */
	onClose() {
		this.close.emit();
	}

	destroy() {
		this.bannerService.close(this);
	}
}
