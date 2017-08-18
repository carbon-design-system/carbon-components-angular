import {
	Component,
	OnInit,
	TemplateRef
} from "@angular/core";

import { BannerService } from "./../../../src";
import { BannerCustom } from "./banner-demo-custom";
import { Banner } from "./../../../src";

@Component({
	selector: "banner-demo",
	template: `
	<h1>Banner service</h1>

	<h3>Default banner</h3>
	<button class="btn" (click)="callBanner('info')">Banner Info</button>
	<button class="btn" (click)="callBanner('danger')">Banner Error</button>
	<button class="btn" (click)="callBanner('warning')">Banner Warning</button>
	<button class="btn" (click)="callBanner('success')">Banner Success</button>


	<h3>Custom alert</h3>

	<button class="btn" (click)="callBannerCustom()">show custom banner</button>


	<h3>Fade away banner(2secs)</h3>

	<button class="btn" (click)="callBannerFadeAway()">show fade away banner</button>


	<h3>Banner to a container</h3>
	<button class="btn" (click)="callBanner2()">show banner in the container below</button>
	<div id="banner-container">
	<span></span>
	</div>


	<h3>Smart banner</h3>

	<p><textarea [(ngModel)]="smartBannerText" rows="6" cols="60"></textarea></p>

	<button class="btn" (click)="callBannerSmart('info')">Banner Info</button>
	<button class="btn" (click)="callBannerSmart('danger')">Banner Error</button>
	<button class="btn" (click)="callBannerSmart('warning')">Banner Warning</button>
	<button class="btn" (click)="callBannerSmart('success')">Banner Success</button>


	<h1>Banner component</h1>

	<div class="banners-container">
	<n-banner [bannerObj]="infoBanner" (close)="onClose($event)"></n-banner>
	</div>
	<div class="banners-container">
	<n-banner [bannerObj]="errorBanner" (close)="onCloseError($event)"></n-banner>
	</div>
	<div class="banners-container">
	<n-banner [bannerObj]="warningBanner" (close)="onCloseWarning($event)"></n-banner>
	</div>
	<div class="banners-container">
	<n-banner [bannerObj]="successBanner" (close)="onCloseSuccess($event)"></n-banner>
	</div>

	<button class="btn" (click)="callBanner('info')">show</button>
	<button id="hidebutton" class="btn" (click)="close(this.testbanner)">hide</button>	
	`,
	styleUrls: ["./banner-demo.component.scss"]
})
export class BannerDemo {
	closeBanner: Banner;

	smartBannerText = "The length of this text, along with Banner type, affects how long Banner displays. Try it out!";

	infoBanner = {
		type: "info",
		message: "sample message"
	};

	errorBanner = {
		type: "danger",
		message: "sample message"
	};

	warningBanner = {
		type: "warning",
		message: "sample message"
	};

	successBanner = {
		type: "success",
		message: "sample message",
	};

	constructor(private banner: BannerService) {}

	callBannerCustom() {
		this.banner.showBanner({
			type: "info",
			message: "sample message"
		}, BannerCustom);
		
	}

	callBanner(type) {
		this.closeBanner = this.banner.showBanner({
			type: type,
			message: "sample message"
		});
		console.log(this.closeBanner)		
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

	callBannerFadeAway() {
		this.banner.showBanner({
			type: "info",
			message: "sample message",
			duration: 2000
		});
	}

	close(){
		this.closeBanner.destroy();
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
