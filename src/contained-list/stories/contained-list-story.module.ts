import { NgModule } from "@angular/core";
import { IconService } from "../../icon/icon.service";
import Apple16 from "@carbon/icons/es/apple/16";
import Fish16 from "@carbon/icons/es/fish/16";
import Strawberry16 from "@carbon/icons/es/strawberry/16";
import SubtractAlt16 from "@carbon/icons/es/subtract--alt/16";
import Wheat16 from "@carbon/icons/es/wheat/16";
import { CommonModule } from "@angular/common";

@NgModule({
	imports: [CommonModule]
})
export class ContainedListStoryModule {
	constructor(private iconService: IconService) {
		this.iconService.registerAll([
			Apple16,
			Fish16,
			Strawberry16,
			SubtractAlt16,
			Wheat16
		]);
	}
}
