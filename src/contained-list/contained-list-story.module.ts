import { NgModule } from "@angular/core";
import { IconService } from "carbon-components-angular/icon";
import Apple16 from "@carbon/icons/es/apple/16";
import Apple20 from "@carbon/icons/es/apple/20";
import Fish16 from "@carbon/icons/es/fish/16";
import Fish20 from "@carbon/icons/es/fish/20";
import Strawberry16 from "@carbon/icons/es/strawberry/16";
import Strawberry20 from "@carbon/icons/es/strawberry/20";
import SubtractAlt16 from "@carbon/icons/es/subtract--alt/16";
import Wheat16 from "@carbon/icons/es/wheat/16";
import Wheat20 from "@carbon/icons/es/wheat/20";
import { CommonModule } from "@angular/common";

@NgModule({
	imports: [CommonModule],
})
export class ContainedListStoryModule {
	constructor(private iconService: IconService) {
		this.iconService.registerAll([
			Apple16,
			Apple20,
			Fish16,
			Fish20,
			Strawberry16,
			Strawberry20,
			SubtractAlt16,
			Wheat16,
			Wheat20,
		]);
	}
}
