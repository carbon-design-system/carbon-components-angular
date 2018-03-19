import {
	Component,
	Input,
	Output,
	EventEmitter,
	ComponentRef,
	ViewChild
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
	<div class="banner--{{bannerObj.type}}" *ngIf="bannerObj" role="alert" #banner>
		<span class="icon" aria-hidden="true">
			<n-static-icon icon="info" *ngIf="bannerObj.type === 'info'"></n-static-icon>
			<n-static-icon icon="warning" *ngIf="bannerObj.type === 'warning'"></n-static-icon>
			<n-static-icon icon="danger" *ngIf="bannerObj.type === 'danger'"></n-static-icon>
			<n-static-icon icon="success" *ngIf="bannerObj.type === 'success'"></n-static-icon>
		</span>
		<p [innerHTML]="bannerObj.message"></p>
		<button class="close--dark-sm" (click)="onClose()" attr.aria-label="{{'BANNER.CLOSE_BUTTON' | translate}}">
			<n-static-icon icon="x" size="sm" classList="close_icon"></n-static-icon>
		</button>
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

	@ViewChild("banner") banner;

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
