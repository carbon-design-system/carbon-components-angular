import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import Download16 from "@carbon/icons/es/download/16";
import View16 from "@carbon/icons/es/view/16";

import { IconModule, IconService } from "../../icon";

@NgModule({
	imports: [CommonModule, IconModule]
})
export class CustomFileIconsModule {
	constructor(private iconService: IconService) {
		this.iconService.registerAll([Download16, View16]);
	}
}
