import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StaticIconModule } from "./../icon/static-icon.module";

import { Toast } from "./toast.component";
import { Banner } from "./banner.component";
import { BannerService } from "./banner.service";
import { I18nModule } from "./../i18n/i18n.module";

export { BannerService } from "./banner.service";
export { Banner } from "./banner.component";
// export { Toast } from "./toast.component";

/**
 * Deprecated in favour of `NotificationModule` (to be removed in v3.0).
 *
 * @deprecated
 */
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
	imports: [CommonModule, StaticIconModule, I18nModule],
	providers: [BannerService]
})
export class BannerModule {}
