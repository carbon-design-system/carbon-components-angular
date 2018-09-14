import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { StaticIconModule } from "./../icon/static-icon.module";

import { Toast } from "./toast.component";
import { Banner } from "./banner.component";
import { BannerService } from "./banner.service";

export { BannerService } from "./banner.service";
export { Banner } from "./banner.component";
export { Toast } from "./toast.component";

@NgModule({
	declarations: [
		Toast,
		Banner
	],
	exports: [
		Banner,
		Toast
	],
	entryComponents: [Banner, Toast],
	imports: [CommonModule, TranslateModule, StaticIconModule],
	providers: [BannerService]
})
export class BannerModule {}
