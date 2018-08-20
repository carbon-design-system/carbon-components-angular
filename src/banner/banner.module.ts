import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { StaticIconModule } from "./../icon/static-icon.module";

import { Banner } from "./banner.component";
import { Toast } from "./toast.component";

export { BannerService } from "./banner.service";
export { Banner } from "./banner.component";
export { Toast } from "./toast.component";

@NgModule({
	declarations: [
		Banner,
		Toast
	],
	exports: [
		Banner,
		Toast
	],
	entryComponents: [Banner, Toast],
	imports: [CommonModule, TranslateModule, StaticIconModule]
})
export class BannerModule {}
