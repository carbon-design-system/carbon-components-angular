import {
	Component,
	OnInit,
	TemplateRef
} from "@angular/core";

import { BannerService } from "./../../../src";
import { BannerCustom } from "./banner-demo-custom";
import { Banner } from "./../../../src";

@Component({
	selector: "app-banner-demo",
	template: `
	<h1 class="p-demo-heading">Banners</h1>

	<h2 class="p-demo-section">Static</h2>
	<div class="banners-container">
		<n-banner [bannerObj]="infoBanner" (close)="onClose($event)"></n-banner>
		<n-banner [bannerObj]="errorBanner" (close)="onCloseError($event)"></n-banner>
		<n-banner [bannerObj]="warningBanner" (close)="onCloseWarning($event)"></n-banner>
		<n-banner [bannerObj]="successBanner" (close)="onCloseSuccess($event)"></n-banner>
	</div>

	<h2 class="p-demo-section">Default</h2>
	<button class="btn--primary" (click)="callBanner('info')">Banner Info</button>
	<button class="btn--primary" (click)="callBanner('danger')">Banner Error</button>
	<button class="btn--primary" (click)="callBanner('warning')">Banner Warning</button>
	<button class="btn--primary" (click)="callBanner('success')">Banner Success</button>

	<h3 class="p-demo-variation">Custom HTML</h3>
	<button class="btn--primary" (click)="callBannerCustom()">show custom banner</button>

	<h2 class="p-demo-section">Overlay</h2>
	<button class="btn--primary" (click)="callBannerSmart('info')">Banner Info</button>
	<button class="btn--primary" (click)="callBannerSmart('danger')">Banner Error</button>
	<button class="btn--primary" (click)="callBannerSmart('warning')">Banner Warning</button>
	<button class="btn--primary" (click)="callBannerSmart('success')">Banner Success</button>

	<h3 class="p-demo-variation">Dynamic text</h3>
	<p><textarea [(ngModel)]="smartBannerText" rows="6" cols="60"></textarea></p>

	<h2 class="p-demo-section">Toggle event</h2>
	<div class="toggleContainer">
		<button class="btn--primary" (click)="toggleBanner('info')">
			<span *ngIf="!this.bannerToClose">
				Show
			</span>
			<span *ngIf="this.bannerToClose">
				Hide
			</span>
		</button>
	</div>

	<h2 class="p-demo-section">Apply to a container</h2>
	<button class="btn--primary" (click)="callBanner2()">show banner in the container below</button>

	<h3 class="p-demo-variation">Fade away (2secs)</h3>
	<button class="btn--primary" (click)="callBannerFadeAway()">show fade away banner</button>
	<div id="banner-container">
		<span></span>
	</div>
	`,
	styleUrls: ["./banner-demo.component.scss"]
})
export class BannerDemo {
	bannerToClose: Banner;

	smartBannerText = "The length of this text, along with Banner type, affects how long Banner displays. Try it out!";

	infoBanner = {
		type: "info",
		message: "sample message <b>this is important information!</b>",
		target: ".main-banner-placeholder"
	};

	errorBanner = {
		type: "danger",
		message: "sample message",
		target: ".main-banner-placeholder"
	};

	warningBanner = {
		type: "warning",
		message: "sample message",
		target: ".main-banner-placeholder"
	};

	successBanner = {
		type: "success",
		message: "sample message",
		target: ".main-banner-placeholder"
	};

	toggleBannerAlert = {
		type: "info",
		target: ".toggleContainer"
	};

	constructor(private banner: BannerService) {}

	callBannerCustom() {
		this.banner.showBanner({
			type: "info",
			message: "sample message",
			target: ".main-banner-placeholder"
		}, BannerCustom);
	}

	callBanner(type) {
		this.banner.showBanner({
			type: type,
			message: "sample message",
			target: ".main-banner-placeholder"
		});
	}

	callBannerToggle(type) {
		this.bannerToClose = this.banner.showBanner({
			type: type,
			message: "sample message <b>fun for everyone</b>",
			target: ".toggle-container"
		});
	}

	callBannerSmart(type) {
		this.banner.showBanner({
			type: type,
			message: this.smartBannerText,
			smart: true
		});
	}

	callBanner2() {
		this.banner.showBanner({
			type: "info",
			message: "sample message",
			target: "#banner-container"
		});
	}

	callBanner3(type) {
		this.bannerToClose = this.banner.showBanner({
			type: type,
			message: "sample message",
			target: ".toggleContainer"
		});
	}

	callBannerFadeAway() {
		this.banner.showBanner({
			type: "info",
			message: "sample message",
			target: "#banner-container",
			duration: 2000
		});
	}

	toggleBanner(bannerType) {
		if (!this.bannerToClose) {
			this.callBanner3(bannerType);
		} else {
			this.bannerToClose.destroy();
			this.bannerToClose = null;
		}
	}

	onClose() {
		this.infoBanner = null;
	}

	onCloseSuccess() {
		this.successBanner = null;
	}

	onCloseError() {
		this.errorBanner = null;
	}

	onCloseWarning() {
		this.warningBanner = null;
	}
}
