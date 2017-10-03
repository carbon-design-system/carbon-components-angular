import {
	Component,
	Input,
	Output,
	EventEmitter,
	ComponentRef
} from "@angular/core";

import { BannerService } from "./banner.service";

/**
 * Banner messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * @export
 * @class Banner
 */
@Component({
	selector: "n-banner",
	template: `
	<div class="banner banner-{{bannerObj.type}}" *ngIf="bannerObj" role="alert">
		<button class="close-btn" (click)="onClose()" aria-label="Close">
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16">
					<path d="M14.5 2.6l-1.1-1.1L8 6.9 2.6 1.5 1.5 2.6 6.9 8l-5.4 5.4 1.1 1.1L8 9.1l5.4 5.4 1.1-1.1L9.1 8z"/>
				</svg>
		</button>
		<span class="banner-icon" aria-hidden="true">
			<svg *ngIf="bannerObj.type === 'info'"
				width="30px"
				height="30px"
				viewBox="0 0 30 30">
				<polygon points="17,13 12,13 12,15 14,15 14,21 12,21 12,23 19,23 19,21 17,21 "/>
				<circle cx="15" cy="9" r="2"/>
				<path d="M15,1C7.3,1,1,7.3,1,15s6.3,14,14,14s14-6.3,14-14S22.7,1,15,1z M15,27C8.4,27,3,21.6,3,15S8.4,3,15,3
				s12,5.4,12,12S21.6,27,15,27z"/>
			</svg>
			<svg *ngIf="bannerObj.type === 'warning'"
				width="30"
				height="30"
				viewBox="0 0 30 30">
				<path d="M15.9 18l.8-7.8V7h-3.4v3.2l.8 7.8z"/>
				<circle cx="15" cy="21.7" r="1.8"/>
				<path d="M15 1C7.3 1 1 7.3 1 15s6.3 14 14 14 14-6.3 14-14S22.7 1 15 1zm0
				26C8.4 27 3 21.6 3 15S8.4 3 15 3s12 5.4 12 12-5.4 12-12 12z"/>
			</svg>
			<svg *ngIf="bannerObj.type === 'danger'"
				width="30"
				height="30"
				viewBox="0 0 30 30">
				<path d="M13.3 13.2l.8 7.8h1.8l.8-7.8V10h-3.4z"/>
				<circle cx="15" cy="24.2" r="1.8"/>
				<path d="M29.9 27.5l-14-25.9c-.2-.4-.5-.6-.9-.6s-.7.2-.9.5L.1 27.4c-.3.8.2
				1.6.9 1.6h28c.7 0 1.2-.8.9-1.5zM2.6 27L15 4.1 27.4 27H2.6z"/>
			</svg>
			<svg *ngIf="bannerObj.type === 'success'"
				width="30"
				height="30"
				viewBox="0 0 30 30">
				<path d="M13 17.6l-3.3-3.3-1.4 1.4 4.7 4.7 8.7-8.7-1.4-1.4z"/>
				<path d="M15 3c6.6 0 12 5.4 12 12s-5.4 12-12 12S3 21.6 3 15 8.4 3 15
				3m0-2C7.3 1 1 7.3 1 15s6.3 14 14 14 14-6.3 14-14S22.7 1 15 1z"/>
			</svg>
		</span>
		<p>
			{{bannerObj.message}}
		</p>
	</div>
	`
})
export class Banner {
	/**
	 * Can have `type` and `message` members.
	 *
	 * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
	 *
	 * `message` is message for banner to display
	 *
	 * @type {Object}
	 * @memberof Banner
	 */
	@Input() bannerObj: Object;

	/**
	 * Emits on close.
	 *
	 * @type {EventEmitter<any>}
	 * @memberof Banner
	 */
	@Output() close: EventEmitter<any> = new EventEmitter();

	componentRef: ComponentRef<Banner>;

	constructor(private bannerService: BannerService) {}

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
