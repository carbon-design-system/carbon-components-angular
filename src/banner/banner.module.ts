import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BannerService } from "./banner.service";
import { Banner } from "./banner.component";

export { BannerService } from "./banner.service";
export { Banner } from "./banner.component";

@NgModule({
	declarations: [
		Banner
	],
	exports: [
		Banner
	],
	entryComponents: [Banner],
	imports: [CommonModule]
})
export class BannerModule {}
