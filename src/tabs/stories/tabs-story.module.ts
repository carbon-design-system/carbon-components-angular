import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconService } from "../../icon/icon.service";

import Dashboard16 from "@carbon/icons/es/dashboard/16";
import CloudMonitoring16 from "@carbon/icons/es/cloud--monitoring/16";
import Activity16 from "@carbon/icons/es/activity/16";
import Settings16 from "@carbon/icons/es/settings/16";

@NgModule({
	imports: [CommonModule]
})
export class TabsStoryModule {
	constructor(private iconService: IconService) {
		this.iconService.registerAll([
			Dashboard16,
			CloudMonitoring16,
			Activity16,
			Settings16
		]);
	}
}
